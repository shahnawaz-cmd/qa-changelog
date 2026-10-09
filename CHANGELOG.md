# 📋 QA Production Changelog & Verification Logs

This document tracks all QA-verified defect fixes, enhancements, and production release sign-offs across **Classic Decoder (CD)**, **CWA MVP**, **DVH**, **SCC**, **KOD (Dodge)**, **Toyota**, **VHREU**, **IVR**, and **MVL**.

---

### **October 2026**
* **Oct 10, 2026** — Completed Haynes Data UI redesign across property dashboards [[V2-5681](https://empirepixel.atlassian.net/browse/V2-5681)].
* **Oct 08, 2026** — CWA MVP: Set PayPal as default tab and Stripe as secondary from preview to checkout (currently applied on CNV) [[V2-5941](https://empirepixel.atlassian.net/browse/V2-5941)].
* **Oct 08, 2026** — Completed DVH codebase migration and integration into shared properties repository [[V2-5893](https://empirepixel.atlassian.net/browse/V2-5893)].
* **Oct 08, 2026** — Fixed currency not updating on preview page due to proxy issue in CWA MVP [[V2-5858](https://empirepixel.atlassian.net/browse/V2-5858)].
* **Oct 08, 2026** — Fixed coupon desync issue and pending order handling for dual-tab transactions in SCC [[V2-5829](https://empirepixel.atlassian.net/browse/V2-5829)].
* **Oct 07, 2026** — Toyota: Migration to new codebase — verified payload and UI mapping with database [[V2-5754](https://empirepixel.atlassian.net/browse/V2-5754)].
* **Oct 06, 2026** — Updated popup behavior on preview pages [[V2-5852](https://empirepixel.atlassian.net/browse/V2-5852)].
* **Oct 05, 2026** — Fixed UVC Report QR URL.
* **Oct 02, 2026** — Classic Decoder: Implemented SEO strategy updates [[V2-5611](https://empirepixel.atlassian.net/browse/V2-5611)].
* **Oct 01, 2026** — KOD (Dodge): Migration to new codebase — verified payload and UI mapping with database [[V2-5754](https://empirepixel.atlassian.net/browse/V2-5754)].

---

### **September 2026**
* **Sept 30, 2026** — CNV: Released streaming flow preview page [[V2-5827](https://empirepixel.atlassian.net/browse/V2-5827)].
* **Sept 30, 2026** — Migrated remaining DVH content pages [[V2-5843](https://empirepixel.atlassian.net/browse/V2-5843)].
* **Sept 30, 2026** — Completed DVH blog migration [[V2-5842](https://empirepixel.atlassian.net/browse/V2-5842)].
* **Sept 30, 2026** — Added new upsell images/assets for window sticker and report across all properties (streaming and non-streaming) [[V2-5846](https://empirepixel.atlassian.net/browse/V2-5846)].
* **Sept 30, 2026** — VHREU CVW + Shared properties additional integration [[V2-5731](https://empirepixel.atlassian.net/browse/V2-5731)].
* **Sept 30, 2026** — Classic Decoder: Implemented SEO strategy updates (Sprint 100) [[V2-5730](https://empirepixel.atlassian.net/browse/V2-5730)].
* **Sept 29, 2026** — Fixed checkout primary colors not updating dynamically across properties [[V2-5735](https://empirepixel.atlassian.net/browse/V2-5735)].
* **Sept 29, 2026** — Non-streaming: Fixed country flag display issue across properties [[V2-5736](https://empirepixel.atlassian.net/browse/V2-5736)].
* **Sept 29, 2026** — Fixed preview-analytics failing to record all records [[V2-5798](https://empirepixel.atlassian.net/browse/V2-5798)].
* **Sept 29, 2026** — Fixed VIN mapping error in streaming flow [[V2-5825](https://empirepixel.atlassian.net/browse/V2-5825)].
* **Sept 29, 2026** — Enabled and supplemented Pre-VIN check flow within streaming flow [[V2-5826](https://empirepixel.atlassian.net/browse/V2-5826)].
* **Sept 29, 2026** — Fixed checkout page failure when navigating from pricing page in CWA [[V2-5851](https://empirepixel.atlassian.net/browse/V2-5851)].
* **Sept 29, 2026** — Rolled out AI-generated URL logic across shared properties including DVH and KOD [[V2-5734](https://empirepixel.atlassian.net/browse/V2-5734)].
* **Sept 29, 2026** — Fixed leading space in VIN breaking sticker generation flow (%20 in URL) across all production properties [[V2-5841](https://empirepixel.atlassian.net/browse/V2-5841)].
* **Sept 24, 2026** — DVH: Added general database scrape and seed script [[V2-5782](https://empirepixel.atlassian.net/browse/V2-5782)].
* **Sept 24, 2026** — Resolved missing referral (`ref`) attribution on DVH orders across PayPal and Stripe checkouts [[V2-5795](https://empirepixel.atlassian.net/browse/V2-5795)].
* **Sept 23, 2026** — Resolved Apple Pay & Google Pay issues in DVH and shared properties [[V2-5824](https://empirepixel.atlassian.net/browse/V2-5824)].
* **Sept 23, 2026** — Added logic to fetch site settings for default upsell plan selection on preview page [[V2-5815](https://empirepixel.atlassian.net/browse/V2-5815)].
* **Sept 23, 2026** — Updated CTA button hierarchy and visual priority on mobile views across all preview pages (CD, CWA, DVH, SCC) [[V2-5828](https://empirepixel.atlassian.net/browse/V2-5828)].
* **Sept 22, 2026** — Fixed 17-character VIN window sticker generation failover flow break when Forum API fails in Classic Decoder [[V2-5830](https://empirepixel.atlassian.net/browse/V2-5830)].
* **Sept 22, 2026** — Resolved digital wallet modal closing issue for Google Pay & Apple Pay in CD and CWA [[V2-5823](https://empirepixel.atlassian.net/browse/V2-5823)].
* **Sept 21, 2026** — Migrated DVH license plate pages [[V2-5802](https://empirepixel.atlassian.net/browse/V2-5802)].
* **Sept 20, 2026** — DVH: Migrated VIN check state & country pages [[V2-5788](https://empirepixel.atlassian.net/browse/V2-5788)].
* **Sept 20, 2026** — DVH: Built core reusable UI components [[V2-5787](https://empirepixel.atlassian.net/browse/V2-5787)].
* **Sept 16, 2026** — Updated payload configuration to allow multiple child nestings and crawl support for header/footer components [[V2-5732](https://empirepixel.atlassian.net/browse/V2-5732)].
* **Sept 10, 2026** — Fixed CWA MVP streaming flow for home page VIN decode, direct URL execution, Add to Garage, and Stripe credit checkout [[V2-5797](https://empirepixel.atlassian.net/browse/V2-5797)].
* **Sept 08, 2026** — Released IVR Next.js service [[V2-5780](https://empirepixel.atlassian.net/browse/V2-5780)].
* **Sept 04, 2026** — Classic Decoder: Updated US preview page layout and components [[V2-5791](https://empirepixel.atlassian.net/browse/V2-5791)].
* **Sept 04, 2026** — Integrated Cloudflare clear cache API for automated cache purging [[V2-5792](https://empirepixel.atlassian.net/browse/V2-5792)].
* **Sept 04, 2026** — Fixed email cache persistence across preview/checkout and debounced multi-click duplicate requests on Access Records CTA in SCC [[V2-5751](https://empirepixel.atlassian.net/browse/V2-5751)].
* **Sept 03, 2026** — Fixed coupon state persistence, 360px pre-VIN layout overflow, and location-based revisit currency banner in Classic Decoder Web & App [[V2-5752](https://empirepixel.atlassian.net/browse/V2-5752)].
* **Sept 02, 2026** — Fixed empty window sticker issue (missing colors and packages) in Classic Decoder [[V2-5656](https://empirepixel.atlassian.net/browse/V2-5656)].

---

### **August 2026**
* **Aug 31, 2026** — CWA MVP: Released Members Area V2 with Garage support [[V2-5614](https://empirepixel.atlassian.net/browse/V2-5614)].
* **Aug 31, 2026** — Integrated Decode API for classic VINs [[V2-5533](https://empirepixel.atlassian.net/browse/V2-5533)].
* **Aug 20, 2026** — MVL Blog: Ensured blog is in sync with latest blog updates [[V2-5685](https://empirepixel.atlassian.net/browse/V2-5685)].
* **Aug 20, 2026** — Preview check and review sign-off [[V2-5683](https://empirepixel.atlassian.net/browse/V2-5683)].
* **Aug 20, 2026** — Resolved general production issues across properties [[V2-5737](https://empirepixel.atlassian.net/browse/V2-5737)].
* **Aug 20, 2026** — Configured changelog on all sites to route outside domain [[V2-5738](https://empirepixel.atlassian.net/browse/V2-5738)].
