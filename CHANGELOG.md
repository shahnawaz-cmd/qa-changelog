# 📋 QA Production Changelog & Verification Logs

This document tracks all QA-verified defect fixes, enhancements, and production release sign-offs across **Classic Decoder (CD)**, **CWA MVP**, **DVH**, **SCC**, **KOD (Dodge)**, **Toyota**, and **VHREU**.

---

### **October 2026**
* **Oct 08, 2026** — CWA MVP: Set PayPal as default tab and Stripe as secondary from preview to checkout (currently applied on CNV) [[V2-5941](https://empirepixel.atlassian.net/browse/V2-5941)].
* **Oct 08, 2026** — Completed DVH codebase migration and integration into shared properties repository [[V2-5893](https://empirepixel.atlassian.net/browse/V2-5893)].
* **Oct 08, 2026** — Fixed currency not updating on preview page due to proxy issue in CWA MVP [[V2-5858](https://empirepixel.atlassian.net/browse/V2-5858)].
* **Oct 08, 2026** — Fixed coupon desync issue and pending order handling for dual-tab transactions in SCC [[V2-5829](https://empirepixel.atlassian.net/browse/V2-5829)].
* **Oct 07, 2026** — Toyota: Migration to new codebase — verified payload and UI mapping with database [[V2-5754](https://empirepixel.atlassian.net/browse/V2-5754)].
* **Oct 06, 2026** — Updated popup behavior on preview pages [[V2-5852](https://empirepixel.atlassian.net/browse/V2-5852)].
* **Oct 05, 2026** — Fixed UVC Report QR URL.
* **Oct 01, 2026** — KOD (Dodge): Migration to new codebase — verified payload and UI mapping with database [[V2-5754](https://empirepixel.atlassian.net/browse/V2-5754)].

---

### **September 2026**
* **Sept 30, 2026** — Completed DVH blog migration [[V2-5842](https://empirepixel.atlassian.net/browse/V2-5842)].
* **Sept 30, 2026** — Added new upsell images/assets for window sticker and report across all properties (streaming and non-streaming) [[V2-5846](https://empirepixel.atlassian.net/browse/V2-5846)].
* **Sept 30, 2026** — VHREU CVW + Shared properties additional integration [[V2-5731](https://empirepixel.atlassian.net/browse/V2-5731)].
* **Sept 30, 2026** — Classic Decoder: Implemented SEO strategy updates (Sprint 100) [[V2-5730](https://empirepixel.atlassian.net/browse/V2-5730)].
* **Sept 29, 2026** — Enabled and supplemented Pre-VIN check flow within streaming flow [[V2-5826](https://empirepixel.atlassian.net/browse/V2-5826)].
* **Sept 29, 2026** — Fixed checkout page failure when navigating from pricing page in CWA [[V2-5851](https://empirepixel.atlassian.net/browse/V2-5851)].
* **Sept 29, 2026** — Rolled out AI-generated URL logic across shared properties including DVH and KOD [[V2-5734](https://empirepixel.atlassian.net/browse/V2-5734)].
* **Sept 29, 2026** — Fixed leading space in VIN breaking sticker generation flow (%20 in URL) across all production properties [[V2-5841](https://empirepixel.atlassian.net/browse/V2-5841)].
* **Sept 24, 2026** — Resolved missing referral (`ref`) attribution on DVH orders across PayPal and Stripe checkouts [[V2-5795](https://empirepixel.atlassian.net/browse/V2-5795)].
* **Sept 23, 2026** — Added logic to fetch site settings for default upsell plan selection on preview page [[V2-5815](https://empirepixel.atlassian.net/browse/V2-5815)].
* **Sept 23, 2026** — Updated CTA button hierarchy and visual priority on mobile views across all preview pages (CD, CWA, DVH, SCC) [[V2-5828](https://empirepixel.atlassian.net/browse/V2-5828)].
* **Sept 22, 2026** — Fixed 17-character VIN window sticker generation failover flow break when Forum API fails in Classic Decoder [[V2-5830](https://empirepixel.atlassian.net/browse/V2-5830)].
* **Sept 22, 2026** — Resolved digital wallet modal closing issue for Google Pay & Apple Pay in CD and CWA [[V2-5823](https://empirepixel.atlassian.net/browse/V2-5823)].
* **Sept 10, 2026** — Fixed CWA MVP streaming flow for home page VIN decode, direct URL execution, Add to Garage, and Stripe credit checkout [[V2-5797](https://empirepixel.atlassian.net/browse/V2-5797)].
* **Sept 08, 2026** — Fixed coupon state persistence, 360px pre-VIN layout overflow, and location-based revisit currency banner in Classic Decoder Web & App [[V2-5752](https://empirepixel.atlassian.net/browse/V2-5752)].
* **Sept 04, 2026** — Integrated Cloudflare clear cache API for automated cache purging [[V2-5792](https://empirepixel.atlassian.net/browse/V2-5792)].
* **Sept 04, 2026** — Fixed email cache persistence across preview/checkout and debounced multi-click duplicate requests on Access Records CTA in SCC [[V2-5751](https://empirepixel.atlassian.net/browse/V2-5751)].
* **Sept 02, 2026** — Fixed empty window sticker issue (missing colors and packages) in Classic Decoder [[V2-5656](https://empirepixel.atlassian.net/browse/V2-5656)].

---

### **August 2026**
* **Aug 31, 2026** — Integrated Decode API for classic VINs [[V2-5533](https://empirepixel.atlassian.net/browse/V2-5533)].
