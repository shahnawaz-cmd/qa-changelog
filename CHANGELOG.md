# 📋 QA Production Changelog & Verification Logs

This document tracks all QA-verified defect fixes, enhancements, and production release sign-offs for **Classic Decoder (CD)**.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) and adheres to professional QA verification standards.

---

## [v1.1.0] - 2026-09-24

### 🚀 Release Overview
- **Deployment Date:** September 24, 2026
- **Environments Tested:** DEV (Validated) ➡️ PROD (Verified)
- **Properties Affected:** Classic Decoder (CD) / CWA
- **Impacted Area:** Payment Gateway / Digital Wallets (Apple Pay & Google Pay)
- **QA Sign-off:** Shahnawaz (QA)
- **Overall QA Verdict:** 🟡 **CONDITIONAL PASS — GPay Verified / Apple Pay Cloud-Restricted**

---

### 🐛 Resolved Defects & Production Bug Fixes

#### [[V2-5823](https://empirepixel.atlassian.net/browse/V2-5823)] Fix APPLEPAY & GPAY in CD/CWA
* **Ticket ID:** [V2-5823](https://empirepixel.atlassian.net/browse/V2-5823)
* **Properties / Area:** Classic Decoder (CD) / CWA — Payment Module
* **Defect Summary:** 
  Apple Pay and Google Pay (GPay) failed to open properly for all users. The wallet popup opened and immediately closed.
* **Testing & Verification Scope:**
  1. **Google Pay (GPay):** Validated on DEV and verified on PROD. Cross-browser testing completed across desktop and mobile; wallet modal opens and payment completes successfully.
  2. **Apple Pay:** Tested on DEV; unable to complete full transaction verification on cloud sessions due to LambdaTest restrictions (card credentials cannot be provisioned in cloud environments).
* **Production Verification Status:**
  - **GPay:** ✅ **Verified in Production** (Tested across browsers, working as expected).
  - **Apple Pay:** ⚠️ **Pending Physical Device Validation** (LambdaTest restricted; requires real hardware with configured Apple Wallet).
* **Open Issues / Blockers:**
  - **1 Open Item:** Apple Pay testing unverified on cloud testing grid (requires physical device verification).

---

## [v1.0.0] - 2026-09-24

### 🚀 Release Overview
- **Deployment Date:** September 24, 2026
- **Environments Tested:** DEV (Validated) ➡️ PROD (Verified)
- **Property Affected:** Classic Decoder (CD)
- **Impacted Area:** CDMA / Sticker Generate Module
- **Flow Type:** 17-Character VIN
- **QA Sign-off:** Shahnawaz (QA)
- **Overall QA Verdict:** 🟢 **PASS — Verified in Production**

---

### 🐛 Resolved Defects & Production Bug Fixes

#### [[V2-5830](https://empirepixel.atlassian.net/browse/V2-5830)] Fix Sticker Generate Module – Failover Flow Break (17-Character VINs)
* **Ticket ID:** [V2-5830](https://empirepixel.atlassian.net/browse/V2-5830)
* **Property / Area:** Classic Decoder (CD) / CDMA
* **Flow:** 17-Character VIN Sticker Generation
* **Defect Summary:** 
  When generating window stickers for 17-character VINs in CD, if the primary Forum API returned an error, the failover flow broke. Although the system properly failed over to the Semi-Auto API and received data, it failed to redirect the user to the sticker input/generation page.
* **Expected Behavior:** 
  If Forum API returns an error, system triggers failover to Semi-Auto API and successfully lands the user on the sticker input page.
* **Testing & Verification Scope:**
  1. **DEV Validation:** Triggered Forum API error conditions on 17-character VINs; verified Semi-Auto API failover payload and successful redirection to the sticker input interface.
  2. **PROD Post-Deployment Smoke Test:** Tested end-to-end 17-character VIN sticker generation with failover handling in the live environment.
* **Production Verification Proof:**
  - **Live URL:** [classicdecoder.com/sticker/vin/ZFF67NFA0D0192166-11E811E8-9D9D-E3A3-6F8E-D99D96C3AC17](https://classicdecoder.com/sticker/vin/ZFF67NFA0D0192166-11E811E8-9D9D-E3A3-6F8E-D99D96C3AC17)
  - **Result:** Successfully landed on sticker generation page; sticker rendered with accurate VIN data.
* **Status:** ✅ **Verified in Production**
* **Open Issues / Blockers:** None (0 open issues)

---

## 📊 Release Verification Summary
| Metric | Value |
| :--- | :--- |
| **Total Defects Verified** | 1 |
| **Pass Rate** | 100% |
| **Critical / Blocker Issues** | 0 |
| **Regression Impact** | None detected across standard VIN input and sticker generation flows |
