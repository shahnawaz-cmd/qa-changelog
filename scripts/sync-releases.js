const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const MONTH_MAP = {
  Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
  Jul: 6, Aug: 7, Sep: 8, Sept: 8, Oct: 9, Nov: 10, Dec: 11
};

const CHANGELOG_PATH = path.join(__dirname, '..', 'CHANGELOG.md');

function runCommand(cmd, options = {}) {
  try {
    return execSync(cmd, { encoding: 'utf8', stdio: ['pipe', 'pipe', 'pipe'], ...options });
  } catch (err) {
    const errorDetails = err.stderr || err.stdout || err.message;
    throw new Error(`Command failed: ${cmd}\n${errorDetails}`);
  }
}

/**
 * Parse CHANGELOG.md into structured entries.
 */
function parseChangelog() {
  if (!fs.existsSync(CHANGELOG_PATH)) {
    throw new Error(`CHANGELOG.md not found at ${CHANGELOG_PATH}`);
  }

  const raw = fs.readFileSync(CHANGELOG_PATH, 'utf8');
  const lines = raw.split(/\r?\n/);

  const entryRegex = /^\*\s+\*\*([A-Za-z]+)\s+(\d{1,2}),\s+(\d{4})\*\*\s+—\s+(.*)$/;
  const entries = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const match = line.match(entryRegex);
    if (match) {
      const [_, monStr, dayStr, yrStr, text] = match;
      const month = MONTH_MAP[monStr];
      if (month === undefined) {
        console.warn(`Unrecognized month: ${monStr}`);
        continue;
      }
      const day = parseInt(dayStr, 10);
      const year = parseInt(yrStr, 10);
      const date = new Date(Date.UTC(year, month, day));

      // Extract ticket if available
      const ticketMatch = text.match(/\[([A-Z0-9]+-\d+)\]/i);
      const ticket = ticketMatch ? ticketMatch[1].toUpperCase() : null;

      entries.push({
        raw: line.trim(),
        text: text.trim(),
        date,
        dateFormatted: `${monStr} ${dayStr.padStart(2, '0')}, ${year}`,
        dateIso: date.toISOString().split('T')[0],
        ticket,
        orderIndex: i
      });
    }
  }

  return { raw, lines, entries };
}

/**
 * Get map of existing git tags to their release tags and titles.
 */
function getExistingTagsAndReleases() {
  const tagsRaw = runCommand('git tag -l');
  const tags = tagsRaw.trim().split(/\r?\n/).filter(Boolean);

  let releases = [];
  try {
    const relsRaw = runCommand('gh release list --limit 100');
    const relLines = relsRaw.trim().split(/\r?\n/).filter(Boolean);
    releases = relLines.map(l => {
      const parts = l.split('\t');
      return {
        title: parts[0],
        tag: parts[parts.length - 2],
        publishedAt: parts[parts.length - 1],
        isLatest: parts.includes('Latest')
      };
    });
  } catch (e) {
    console.warn('gh CLI release check failed, will rely on git tags directly');
  }

  return { tags, releases };
}

/**
 * Match a changelog entry to an existing git tag by release notes / body.
 */
function findTagForEntry(entry, releases, tags) {
  // If we have releases, query matching release
  for (const rel of releases) {
    try {
      const body = runCommand(`gh release view ${rel.tag} --json body --jq .body`).trim();
      if (body.includes(entry.text) || entry.text.includes(body)) {
        return { tag: rel.tag, title: rel.title, body };
      }
    } catch (_) {}
  }
  return null;
}

/**
 * Realign all releases in GitHub to guarantee strict descending chronological order.
 * Since GitHub displays releases sorted by published_at DESC, creating releases
 * in ASCENDING date order guarantees newest releases stay at the top.
 */
function realignReleases() {
  console.log('🔄 Checking chronological alignment of GitHub releases...');
  const { entries } = parseChangelog();
  const { releases } = getExistingTagsAndReleases();

  // Sort entries strictly descending (newest date first)
  const sortedEntries = [...entries].sort((a, b) => b.date - a.date);

  // Fetch full details of each release
  console.log(`Fetching details for ${releases.length} releases...`);
  const fullReleases = [];
  for (const rel of releases) {
    try {
      const details = JSON.parse(runCommand(`gh release view ${rel.tag} --json name,body,tagName`));
      fullReleases.push(details);
    } catch (e) {
      console.warn(`Could not fetch details for ${rel.tag}`);
    }
  }

  // Match releases to sorted entries
  const matchedList = [];
  for (const entry of sortedEntries) {
    const match = fullReleases.find(r => r.body.includes(entry.text.slice(0, 30)) || entry.text.includes(r.body.slice(0, 30)));
    if (match) {
      matchedList.push({ ...match, date: entry.date, dateIso: entry.dateIso });
    }
  }

  if (matchedList.length !== releases.length) {
    console.warn(`Warning: Matched ${matchedList.length} of ${releases.length} releases.`);
  }

  // Re-create from oldest to newest so newest published_at is the newest date
  const ascending = [...matchedList].reverse();
  const tempNotes = path.join(__dirname, '..', '_temp_release_notes.md');

  console.log('Clearing and republishing releases in ascending date order...');
  for (const r of matchedList) {
    try {
      runCommand(`gh release delete ${r.tagName} -y`);
    } catch (_) {}
  }

  for (let i = 0; i < ascending.length; i++) {
    const r = ascending[i];
    const isLatest = (i === ascending.length - 1);
    const latestFlag = isLatest ? '--latest' : '--latest=false';

    fs.writeFileSync(tempNotes, r.body, 'utf8');
    const safeTitle = (r.name || `Release ${r.tagName}`).replace(/"/g, '\\"');
    runCommand(`gh release create ${r.tagName} --title "${safeTitle}" -F "${tempNotes}" ${latestFlag}`);
    console.log(`✓ [${i + 1}/${ascending.length}] Created ${r.tagName} (${r.dateIso})${isLatest ? ' [LATEST]' : ''}`);
  }

  if (fs.existsSync(tempNotes)) fs.unlinkSync(tempNotes);
  console.log('✅ GitHub releases are now perfectly aligned in chronological descending order!');
}

function main() {
  const isRealign = process.argv.includes('--realign');
  if (isRealign) {
    realignReleases();
    return;
  }

  console.log('Verifying CHANGELOG.md and GitHub Releases synchronization...');
  const { entries } = parseChangelog();
  console.log(`Found ${entries.length} release entries in CHANGELOG.md.`);

  // Check if changelog is ordered properly
  let isSorted = true;
  for (let i = 0; i < entries.length - 1; i++) {
    if (entries[i].date < entries[i + 1].date) {
      console.warn(`⚠️ Warning: Entry on line ${entries[i].orderIndex + 1} (${entries[i].dateIso}) is older than line ${entries[i + 1].orderIndex + 1} (${entries[i + 1].dateIso})`);
      isSorted = false;
    }
  }

  if (isSorted) {
    console.log('✓ CHANGELOG.md is sorted correctly in descending chronological order.');
  } else {
    console.log('⚠️ Please ensure CHANGELOG.md maintains newest dates on top.');
  }
}

main();
