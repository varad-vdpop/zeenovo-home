# ZeeNovo content vs. current build: layout cross-check

Source: `ZeeNovo-Website-Content-Final.pdf` (77 pages) compared with the built site in `zeenovo-home/src` on 19 Nov 2026.

## Summary

The PDF does **not** match the current layout. It is written for a larger, partly new information architecture, not for the sections that are built.

| | Count |
|---|---|
| Routes in the PDF | 54 (plus site-wide copy) |
| Routes that exist and the copy fits the built sections | 22 |
| Routes that exist but the copy only partly fits (sections added, removed or reshaped) | 20 |
| Routes that exist but need a rebuild (Magistral) | 1 |
| **New pages or templates with no build** | **11** |
| Built pages the PDF has no copy for | 6 |

The biggest gaps:

1. **Navigation is restructured.** A new Platform menu, two new products (Central, Enterprise), Inspection readiness and Roadmap. The Pricing and Company menus are gone from the header.
2. **The home page is a different page.** 7 of the PDF's 9 home sections have no matching slot, and 6 of the 11 built home sections get no copy.
3. **11 new pages** need design and build before this copy can go live.
4. **Several facts conflict with the live build.** ISMP/NIDR submission, encryption, AI use, condition count, product count, HIPAA, province status. See section 6.

---

## 1. Site-wide

| Element | Current build | PDF | Status |
|---|---|---|---|
| Header menus | Products · Solutions · Provinces · Pricing · Resources · Company | Products · Solutions · **Platform** · Provinces · Resources | **Changed.** Pricing and Company removed from the header. Platform added. |
| Products menu | Clinical, Assure, Magistral, Sites, Patient Portal, Voice Based Appointment Booking + Clinical modules (7) + Assure modules (3) + Solutions (5) | Clinical, Assure, Magistral (Early access), Sites, Patient Portal, Voice booking, **Central (Launching soon)**, **Enterprise (Launching soon)** | **Changed.** Module sub-lists not specified. 2 new products. Enterprise points to `/solutions/multi-location-groups`, which also appears under Solutions. |
| Solutions menu | 5 items | 6 items: adds **Inspection readiness**. Multi-location groups marked Launching soon. | New page |
| Platform menu | n/a | Why ZeeNovo · Clinical content we maintain · Integrations · Switching to ZeeNovo | **4 new pages** |
| Resources menu | Blog · Case Studies · Guides · Changelog | adds **Roadmap** | New page |
| Header buttons | Patient Login · Pharmacy Login · Register Pharmacy · Book a Demo | Patient login · Pharmacy login · **Start free trial** | "Register Pharmacy" renamed. Book a Demo dropped from the header. |
| Footer: Products | …ZeeNovo **Intelligence** | …**Voice booking**, Patient Portal added | Rename "Intelligence" across the site (home card, footer, voice page eyebrow). |
| Footer: Logins | Register Pharmacy · Patient · Assure · Clinical | Start free trial · Patient · Clinical · Assure | Rename and reorder |
| Footer: Legal | Security & Compliance | Security and Privacy | Rename. The route is still `/trust/security-and-compliance`. |
| Closing CTA | Eyebrow + 2-line H2 + button + dose-reminder card + metrics card | Heading + **body line** + button + "Flu clinic · Thursday" illustrative card | The FinalCta block has **no body slot**, and its cards are a dose-reminder and a metrics preview, not a flu-clinic card. |
| Badges | none | Early access · Launching soon · Coming soon | A new UI element is needed on nav items, cards, heroes and features. |

## 2. Home page (`/`)

| # | Built section | PDF section | Status |
|---|---|---|---|
| 1 | Hero: 3-line Title Case H1, one line, **Sign Up** button, "50+ Pharmacies" chip | Hero: one-sentence H1, 3-sentence subhead, **two buttons**, **5-item proof strip** | **Partial.** The H1 is too long for the slot. There is no second button and no proof strip. |
| 2 | Logo strip (7 banner logos) + 4 results counters (3×, 15 min, 20+, <1 day) | none | **No copy.** The PDF drops the logos and counters. Decide whether to keep them (they still need evidence and permission). |
| 3 | Our Products: 4 cards (Clinical, Assure, Magistral, Intelligence) | Products: **7 cards** (Sites+Portal, Clinical, Assure, Magistral, Voice, Enterprise, Central) | **Partial.** 3 extra products and no card design for them. |
| 4 | Values wave: 5 labels | "Why pharmacists trust ZeeNovo": 6 items with body lines | **Partial.** 6 vs 5, and the wave holds labels only. The PDF drops "HIPAA aligned". |
| 5 | Clinical features: 4 visual cards | Clinical feature band: 5 items + service links | **Partial.** Item titles differ. 5 vs 4. |
| 6 | Services: 4 photo tiles | Services list: 5 links | **Partial.** Adds Follow-up (new page). Medication reviews is now Early access. |
| 7 | Philosophy band | none | **No copy** |
| 8 | Care banner (minor ailments) | none | **No copy** |
| 9 | Assure report cards: 4 | Assure feature band: 5 items + button | **Partial.** Replaces the "20 min to under 5" and "NIDR-aligned" cards. |
| 10 | Testimonials: 2 | Customers: 2 (same quotes) | **Fits.** Still no named person or approval. |
| 11 | Final CTA | Closing CTA | See site-wide |
| n/a | none | "One morning at the pharmacy" (narrative) | **No slot.** Recommend cutting it (story). |
| n/a | none | "A day with ZeeNovo": 4 role tabs | **No slot.** Needs a tab block on the home page. |
| n/a | none | "One platform": 5 items | **No slot** |

## 3. Existing pages

Fit: **Fits** means the copy drops into the built sections. **Partial** means some sections need adding, removing or reshaping. **Rebuild** means the PDF describes a substantially different page.

| Route | Fit | Notes |
|---|---|---|
| `/products/clinical` | Partial | Custom page with 9 sections. The PDF has a 7-step visit, a services table, **10 feature tabs**, "Beyond the counter" (Coming soon), "What Clinical does not do" and an FAQ. The tabs, the not-do list and the FAQ need blocks. |
| `/products/clinical/minor-ailments` | Fits | The capability cards go from 4 to 5 (adds Follow up). "After the visit" goes from 2 cards to 5 items. The FAQ is new. |
| `/products/clinical/vaccinations` | Partial | 4 built sections vs 9 in the PDF (types table, Quick Complete, Preferences, booking, reminders, safety, documentation, FAQ). The H1 changes to "Vaccines and injections". |
| `/products/clinical/prescriptions-and-injections` | Fits | The built "Prescribing support: Suggested, never decided for you" section has **no PDF copy**. It also reads against "ZeeNovo doesn't recommend treatment". Remove it. |
| `/products/clinical/medication-review` | Partial | **Scope change.** The built page is a generic medication review (issues, interventions, care plans). The PDF is **Ontario MedsCheck, Early access, Kroll PDF import**. The two follow-up feature sections have no PDF copy. |
| `/products/clinical/point-of-care-testing` | Fits | Adds an Early access badge and an FAQ |
| `/products/clinical/appointments` | Fits | The feature rows go from 3 to 5 |
| `/products/clinical/documentation-and-efax` | Fits | The feature rows go from 3 to 2 |
| `/products/assure` | Partial | Adds a hero video, the near-miss narrative, "Know the difference" and an FAQ. Wave labels change from "analyse" to "learn". |
| `/products/assure/incident-reporting` | Partial | The PDF is thinner than the build. "Compliance data that talks back" and "Share the results" (exports) have no PDF copy. Adds an ISMP national reporting section. |
| `/products/assure/self-assessment` | Fits | "What you get" (5) replaces the "Two assessments, in the price" two-card block |
| `/products/assure/analytics` | Partial | The built **Benchmarking** section has no PDF support. Remove it or confirm it. |
| `/products/magistral` | **Rebuild** | The built page has 4 sections of **dummy copy**. The PDF has about 12 sections of real scope (MFR, formula engine, NAPRA risk, batch records, lots, recalls, logs, pricing, controlled substances, not-included list, FAQ, technical-sheet download). |
| `/products/sites` | Fits | Adds "Condition pages" and an FAQ |
| `/products/patient-portal` | Fits | The "Priya" narrative has no slot. Recommend cutting it. The wave has 4 labels vs 3 benefits. |
| `/products/voice-based-appointment-booking` | Fits | Eyebrow "ZeeNovo Intelligence" becomes "Voice booking". Feature rows go from 3 to 4. |
| `/solutions/independent-pharmacies` | Partial | **Changes approved lines**: the H1 "Big pharmacy tools…" and the CTA "…Lose the operational drag". The "better week" step cards are replaced by 5 tabs. |
| `/solutions/pharmacy-owners` | Partial | The built wave and steps have no copy. Adds "Where the revenue comes from" + an ROI button. |
| `/solutions/pharmacists` | Partial | The wave has no copy. The steps go from 5 to 6. |
| `/solutions/patients` | Fits | Exact section match |
| `/solutions/multi-location-groups` | Partial | The PDF is about 3× the built page: the dashboard measures table, the methodology table, the roles table, privacy (9 items), communication, onboarding and an FAQ. Needs table blocks. The nav calls it a Product (Enterprise). |
| `/provinces/ontario` | Partial | "Run on" goes from 4 to 6 items. Adds "funded services" + an FAQ. The signal card has no copy. |
| `/provinces/{alberta, british-columbia, saskatchewan, nova-scotia, new-brunswick, manitoba}` (6) | Partial | The PDF replaces province-specific copy with **one generic template** (hero + 7 bullets). The built signal card, the reality cards and the college "ACP ready / CPBC ready…" badges get no copy. |
| `/pricing` | Fits | Plan order is Assure, Combo, Clinical. **Adds annual prices**. Add-ons: Magistral, Portal, Enterprise. |
| `/pricing/roi-calculator` | Fits | The PDF adds two editable-assumption inputs and a plan selector. Check them against the built calculator. |
| `/book-a-demo` | Fits | The form fields match. "Pharmacy system you use" is new. |
| `/company/about` | Partial | Adds the founder story, a pull quote, a **photo (no asset)** and "Why it matters". Stats go from 4 to 3: the PDF has **5** connected products, the build has 4. The PDF drops "100% Canadian data residency". |
| `/company/contact` | Fits | Adds hours and email |
| `/blog` | Partial | 10 article titles vs 5 built. The articles themselves don't exist. |
| `/resources/case-studies` | Fits | 3 stories. The full case studies don't exist. |
| `/resources/guides` | Fits | 12 guides |
| `/resources/changelog` | Fits | Entries have no dates |
| `/trust/security-and-compliance` | Partial | 8 numbered items vs a 5-label wave + 6 cards + 3 enterprise cards. The wave and enterprise cards have no copy. |
| `/trust/privacy-policy`, `/terms-and-conditions`, `/data-processing-agreement`, `/sub-processors` | Fits | The PDF gives holding copy only ("being finalized"). The legal text must come from counsel. |
| `/trust/accessibility` | Fits | |

## 4. New pages in the PDF (no build)

| Route | What it needs |
|---|---|
| `/products/clinical/follow-up-and-reminders` | hero, steps (5), features, twoCard, CTA |
| `/products/clinical/forms` (Coming soon) | hero, steps (4), **table**, FAQ, CTA |
| `/products/assure/sops-and-training` | hero, cards, features, CTA |
| `/products/zeenovo-central` (Launching soon) | hero, steps, cards, FAQ, CTA |
| `/solutions/inspection-readiness` | hero, **table (12 rows)**, cards, CTA |
| `/platform/why-zeenovo` | hero, **comparison table (11 rows)**, CTA |
| `/platform/clinical-content` | hero, cards (7), features, CTA |
| `/platform/integrations` | hero, two lists, FAQ, CTA |
| `/platform/switching-to-zeenovo` | hero, 3-phase timeline, FAQ, CTA |
| `/resources/roadmap` | hero, list, CTA |
| `/[pharmacy]/conditions/[condition]` | A template on **each pharmacy's ZeeNovo site**, not on zeenovo.com. It belongs to the Sites product, not this build. |

## 5. Built pages with no PDF copy

`/products` (overview), `/solutions` (overview), `/provinces` (overview), `/resources` (hub), `/company` (hub), `/blog/sample-article` (template). The rewrite deck adds short copy for the hubs.

## 6. Fact conflicts to confirm with ZeeNovo before launch

| Topic | Current build | PDF | Risk |
|---|---|---|---|
| ISMP Canada / NIDR | "NIDR-aligned reporting" (marked soon) | "Incident data is **submitted** to ISMP Canada's NIDR" | High. This is a regulatory claim. |
| Encryption | "Encryption at rest and in transit" | "Assure is **end-to-end encrypted**" | High. E2EE is a specific technical claim. |
| AI | n/a | "**No AI touches patient care**" but Sites uses AI to draft About pages, and voice booking interprets speech | Medium. The claims contradict each other. |
| Minor ailments | "20+ supported" (counter) | "28 conditions" | Medium |
| HIPAA | "PHIPA, PIPEDA and HIPAA aligned" | HIPAA not mentioned | Medium. Decide which is true. |
| Product count | 4 connected products | 5 | Low |
| Home proof | 3× services billed, 15 min saved, <1 day setup | Only "Set up in under a day" is kept | The 3× claim still has no source |
| "Built by a practising pharmacist-owner", founder named | Not named | Named, with a pull quote and a photo | Needs founder approval |
| Province status | Province pages read as live, with college "ready" badges | One generic "Ask what's available" template | The badges imply college endorsement. The PDF itself says OCP/NAPRA don't endorse software. |
| Annual pricing | Monthly only | C$199 / C$449.99 / C$299 a year | All three are about 10× the monthly price, but Combo isn't rounded the way the others are (C$449.99 vs C$199 / C$299). Confirm the prices, that they're in CAD, and whether tax is included. |
| Magistral | Dummy copy | Full real scope, Early access | Confirm the PDF scope is approved |
| Medication review | Generic reviews | Ontario MedsCheck only, Early access | Scope change |
| Testimonials | Pharmacy name only | Same | Needs a named person and written approval |
