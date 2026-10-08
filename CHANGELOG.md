# 📋 QA Production Changelog & Verification Logs

This document tracks all QA-verified defect fixes, enhancements, and production release sign-offs across **Classic Decoder (CD)**, **CWA MVP**, **DVH**, and **SCC**.

---

### **October 2026**
* **Oct 08, 2026** — Fixed currency not updating on preview page due to proxy issue in CWA MVP [[V2-5858](https://empirepixel.atlassian.net/browse/V2-5858)].
* **Oct 08, 2026** — Fixed coupon desync issue and pending order handling for dual-tab transactions in SCC [[V2-5829](https://empirepixel.atlassian.net/browse/V2-5829)].
* **Oct 08, 2026** — Completed DVH codebase migration and integration into shared properties repository [[V2-5893](https://empirepixel.atlassian.net/browse/V2-5893)].

---

### **September 2026**
* **Sept 24, 2026** — Resolved missing referral (`ref`) attribution on DVH orders across PayPal and Stripe checkouts [[V2-5795](https://empirepixel.atlassian.net/browse/V2-5795)].
* **Sept 23, 2026** — Updated CTA button hierarchy and visual priority on mobile views across all preview pages (CD, CWA, DVH, SCC) [[V2-5828](https://empirepixel.atlassian.net/browse/V2-5828)].
* **Sept 22, 2026** — Fixed 17-character VIN window sticker generation failover flow break when Forum API fails in Classic Decoder [[V2-5830](https://empirepixel.atlassian.net/browse/V2-5830)].
* **Sept 22, 2026** — Resolved digital wallet modal closing issue for Google Pay & Apple Pay in CD and CWA [[V2-5823](https://empirepixel.atlassian.net/browse/V2-5823)].
* **Sept 10, 2026** — Fixed CWA MVP streaming flow for home page VIN decode, direct URL execution, Add to Garage, and Stripe credit checkout [[V2-5797](https://empirepixel.atlassian.net/browse/V2-5797)].
* **Sept 08, 2026** — Fixed coupon state persistence, 360px pre-VIN layout overflow, and location-based revisit currency banner in Classic Decoder Web & App [[V2-5752](https://empirepixel.atlassian.net/browse/V2-5752)].
* **Sept 04, 2026** — Fixed email cache persistence across preview/checkout and debounced multi-click duplicate requests on Access Records CTA in SCC [[V2-5751](https://empirepixel.atlassian.net/browse/V2-5751)].
