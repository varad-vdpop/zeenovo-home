# ZeeNovo website copy, v1

Working copy for every page in the approved sitemap (YBM-08476). This folder is the source of truth for website text. The pages already built in `src/app` carry this copy. Pages not built yet have their copy written against the existing approved blocks listed below, so they can be assembled without new design.

Sources used: current zeenovo.com, the client-coded staging build, the Enterprise Module proposal and the website quote. Where those sources disagree, or where a claim needs evidence, the line is marked `[CONFIRM]` and listed under open items.

## Files

| File | Pages |
|---|---|
| `01-home.md` | `/` |
| `02-products.md` | `/products`, Clinical and its 7 modules, Assure and its 3 modules, Magistral, Sites, Patient Portal, Voice Booking |
| `03-solutions.md` | `/solutions` and the 5 ICP pages |
| `04-provinces.md` | `/provinces` and the 7 province pages |
| `05-pricing.md` | `/pricing`, `/pricing/roi-calculator` |
| `06-resources.md` | `/resources`, `/blog`, blog template, case studies, guides, changelog |
| `07-company.md` | `/company`, about, contact, `/book-a-demo` |
| `08-trust.md` | security and compliance, privacy, terms, accessibility, DPA, sub-processors |
| `09-features.md` | Every product feature with its one- or two-line description, source and the pages it appears on. Generated; do not edit by hand. |

## Review build

Every sitemap page exists locally. Pages are assembled by `src/components/blocks/BlockPage.tsx` from copy in `src/content/pages/*.ts`. Province pages use `src/app/provinces/ProvincePage.tsx`. Where the page files and the `0x-*.md` drafts differ, the page files are current.

**Approved sections, reused as designed:** photo hero, solution hero, quote cards, numbered capability cards, step cards, wave strip, Workflow and Follow-up sections, two-card section, results counters, closing CTA.

**Sections designed for content the approved pages do not cover** (`src/components/blocks/sections.module.css`). They use the approved palette, radii, type sizes, dotted texture, line art and glass frame, and need design sign-off:

| Section | Used for |
|---|---|
| Feature explorer (tabs) | The complete feature list on hub pages: Clinical, Assure, Sites, Multi-Location Groups. One tab per feature area; every panel stays in the page markup. |
| Bento grid | 4 to 7 key features on a module page: one lead card with a product visual, the rest as pastel cards. |
| Page header | Utility pages (pricing, resources, company, trust). The hero panel without a portrait. |
| Pricing cards | Three plans with the recommended plan highlighted, what every plan includes, and add-ons. |
| FAQ accordion | Pricing and Patients. |
| Article cards | Blog, case studies, guides, changelog, with a category filter. |
| Legal layout | Long-form text with an "On this page" list. |
| Table | Sub-processors. |

Rules the pages follow:
- A feature is described once per page. The full list lives on the hub page; module pages show their own key features.
- No section type appears twice in a row.
- No reviewer notes or bracketed placeholders appear on a page. Open questions live in the list at the end of this file. The only exception is `/blog/sample-article`, which is the article template.
- **Feature descriptions** live in one place, `src/content/features.json`. After changing features, run `python3 -I scripts/check-features.py`: it fails if any feature is missing from the site, and regenerates `09-features.md`.
- Forms validate and show the success message but send nothing.
- Magistral copy is placeholder until ZeeNovo confirms the product.

## Voice

Write the way the proposal reads. Plain, specific, operational.

1. Say what the product does, then where it stops. "Enterprise users see counts, rates and trends. They do not see patients."
2. Name the actual thing. Minor ailments assessment, incident report, dose reminder. Not "solution", "experience" or "journey".
3. Short declarative sentences. One idea per sentence.
4. Numbers only when they are sourced. Everything else is described, not quantified.
5. The pharmacist makes the clinical decision. Copy never implies the software diagnoses or prescribes.
6. Casing follows the approved design. The home page uses Title Case for H1, H2 and card titles. Inner pages use sentence case with a full stop, under a small uppercase eyebrow.
7. Keep approved lines that are accurate. The design already carries the voice ("Big pharmacy tools, for a pharmacy with one front door.", "Keep the independence. Lose the operational drag.", "Only return when care needs you."). We replace placeholders, lorem ipsum, wrong labels and unsupported claims. We do not rewrite good lines for the sake of it.
8. Fit the block. Match the line count and length of the approved text in each slot (see character guidance below). A hero H1 is 2 to 4 short lines. A card line is one sentence. A split-heading side paragraph is one to two lines.
9. Canadian spelling (colour, centre, licence as a noun). Keep `-ise` endings consistent with the existing approved copy (organise, authorise).
10. Brand: **ZeeNovo** (capital Z, capital N). Products: ZeeNovo Clinical, ZeeNovo Assure, ZeeNovo Magistral, ZeeNovo Sites, ZeeNovo Patient Portal, ZeeNovo Central.

Words and patterns we do not use: seamless, elevate, unlock, empower, revolutionise, game-changer, cutting-edge, state-of-the-art, next-generation, effortless, world-class, "not just X, it's Y", "in today's fast-paced world", rhetorical questions in headlines, emoji, exclamation marks, em dashes in body copy.

## Block key

Copy for unbuilt pages is written against these existing blocks. Character guidance is approximate and follows the built versions.

| Key | Source block | Fields |
|---|---|---|
| `HERO-PRODUCT` | Clinical hero | eyebrow (opt.), H1 (2 lines), description (≤ 160 chars), primary + secondary button |
| `HERO-SOLUTION` | Independent Pharmacies hero | eyebrow, H1 (3 short lines), description, one button, two floating UI cards |
| `HERO-PROVINCE` | Ontario hero | eyebrow, H1, description, two buttons, signal card (label, title, flow line, badge) |
| `SPLIT-CARDS` | Clinical services / Reality | eyebrow, H2, side paragraph, 3 to 6 numbered cards (title + one line) |
| `CONDITION-GRID` | Minor ailments conditions | eyebrow, H2, side paragraph, grouped list |
| `FEATURE-ROWS` | Clinical workflow / Follow-up | eyebrow, H2, paragraph, 3 icon rows (title + one line), visual |
| `TWO-CARD` | After the assessment | eyebrow, H2, two cards (title, one line, 4 feature chips) |
| `WAVE-TRACK` | Values / How the picture changes / Process | tag, H2, paragraph, 4 to 5 labels on the wave |
| `STEP-CARDS` | A better week | eyebrow, H2, side paragraph, 5 numbered cards (title + one line) |
| `CONNECTED-STEPS` | One connected clinical workflow | eyebrow, H2, 6 step labels |
| `REPORT-GRID` | Home incident reporting grid | tag, H2, 4 cards (title + 1 to 2 lines) |
| `TESTIMONIALS` | Home testimonials | tag, H2, 2 quotes (quote, name, role) |
| `FAQ` | New, text only. Accordion of question and answer. Needs design approval before build. |
| `CTA-MAIN` | FinalCta | eyebrow, H2 (2 lines), button |
| `CTA-SPLIT` | Independent Pharmacies CTA | eyebrow, H2 (2 lines), line, two buttons, floating card |

## Open items `[CONFIRM]`

These need an answer from ZeeNovo before launch. Copy is written so each one can be changed in one place.

1. **Customer count.** "50+ pharmacies" is used in the hero and logo strip. Confirm the number and the date it was true.
2. **Logo strip.** The approved design shows PharmaChoice, Rexall, OnPharm United, Costco Pharmacy, Whole Health, Remedy'sRx and IDA. Confirm ZeeNovo has written permission to show each one. Staging names MapleMeds Pharmacies, Oshawa Lakeview Pharmacy and KW Bruce Pharmacies as customers.
3. **Results counters.** 3× more clinical services billed, 15 min saved per incident report, 20+ minor ailments supported, under 1 day setup. These come from staging. We need the source for the 3× figure, or we replace it.
4. **Testimonials.** The two quotes are from staging, attributed to a pharmacy only. We need a named person, their role and written approval.
5. **ZeeNovo Magistral.** Added as a product at ZeeNovo's request, with a new route `/products/magistral` (not in the original sitemap). All Magistral copy is **dummy content** marked `[DUMMY]`, written on the assumption that Magistral covers compounding. Replace it once ZeeNovo confirms what the product does. Magistral takes the approved home card it was designed for; ZeeNovo Sites stays in the nav, footer and Products overview. The "Intelligence" card stays: the old site uses ZeeNovo Intelligence for voice-based booking, and the card visual shows a voice booking screen.
6. **Province availability.** Staging says Ontario is live and other provinces are "launching soon". The old site lists Ontario, Alberta and Saskatchewan. The sitemap has seven province pages. Confirm the status per province so each page states it correctly.
7. **NIDR alignment.** Staging marks NIDR-aligned reporting as "soon". Confirm whether it is live.
8. **Pricing.** Clinical C$29.99/mo, Assure C$19.99/mo, Combo C$44.99/mo, website free. Taken from staging. Confirm, and confirm whether prices are in CAD and exclude tax.
9. **Legal entity.** Old site says "ZeeNovo Corporation"; staging says "ZeeNovo Health Inc." Confirm for the footer and legal pages.
10. **Company facts.** The About page shows "2024 Founded", "4 Connected products", "50+ Pharmacies" and "100% Canadian data residency", taken from staging and the home page. Confirm each. The team section, phone number and office address are left off the site until ZeeNovo supplies them.
11. **Security claims.** PHIPA, PIPEDA and HIPAA alignment, Canadian data residency, encryption at rest and in transit, audit logs. Confirm each, plus the hosting provider and region for the sub-processors page. HIPAA and SOC 2 are on ZeeNovo's roadmap and are worded as "HIPAA-aligned safeguards" and "SOC 2 audit in progress" until complete.
15. **SOC 2.** Confirm Type I or Type II, the expected report date, and whether customers can request the report. When it is issued, update every line marked `[SOC 2 STATUS]` in `08-trust.md`.
12. **Enterprise module.** The multi-location groups page describes the chain platform, chain dashboard, communication tab and ZeeNovo Central. Confirm launch timing, and whether the page should say "available" or "coming".
13. **Legal pages.** Privacy policy, terms, DPA and sub-processor content must come from ZeeNovo's counsel (quote section 04). We have written the page intros and structure only.
14. **Clinical scope by province.** Condition counts and program names on province pages need sign-off from ZeeNovo's clinical lead before launch.
