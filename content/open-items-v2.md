# Copy v2: open items

The Nov 2026 copy update puts ZeeNovo's website content (`ZeeNovo-Website-Content-Final.pdf`), rewritten in a tactical voice, onto every page.

## Status (20 Nov 2026)

**Claims: all approved by ZeeNovo.** Every claim marked `[CONFIRM]` in the logs below is signed off and stays on the site as written. That includes ISMP Canada submission, "Assure is end-to-end encrypted", 28 minor ailments, the founder quote, testimonials and province availability.

**Design gaps now built**, reusing the approved blocks:
- **Home:**
  - three compact product cards (Sites & Patient Portal, Enterprise, Central)
  - "A Day With ZeeNovo" role tabs
- **Solution heroes:** second buttons on all solution heroes, Independent pharmacies and Minor ailments.
- **Buttons under blocks:** the ROI calculator button on Pharmacy owners, the ROI button on Ontario, "See What We Maintain" on /products, and the "See Vaccinations and Injections" link on Prescriptions.
- **CTA body lines:** on Assure and Magistral.
- **Callout panels** (the approved pricing "Included with every plan" panel):
  - Clinical "Beyond the counter" (coming soon)
  - Incident reporting NIDR note
  - Magistral "Not included today"
  - Magistral technical sheet
- **Clinical hub tabs:** "Revenue and billing" and "Team".
- **Resources hub:** a Roadmap card, with five cards laid out as 3 + 2.
- **/products:** the one-login list folded into "Shared foundation".

**Responsive pass.** Every page was audited at 375, 600, 768, 860, 1024, 1280 and 1440px for horizontal overflow, overlapping text and clipped text. All findings are fixed.

**Placeholders kept until ZeeNovo supplies the content:**
- Legal text for Privacy Policy, Terms, the DPA and Sub-processors (holding copy and structure only).
- Full blog articles, case studies (including measured results) and guides (titles and summaries only).
- The founder photo on About.
- The Assure guided reporting video and the sample self-assessment report image (the heroes keep the approved portrait).
- The Magistral technical sheet PDF. The button asks visitors to request it through Contact.

The detailed logs below are the original record from the copy update.

The rewrite deck, the layout cross-check and the difference report are in `content/copy-v2/`.


---

## Open items: Home and custom pages (part 1)

Routes: `/`, `/products/clinical`, `/products/clinical/minor-ailments`, `/products/assure/incident-reporting`.
`HomeProductCards` is also shown on `/products`.

### Confirm (claims used as written in the rewrite)

- `/` hero chip and trust strip: "50+ Pharmacies on ZeeNovo", "TRUSTED BY 50+ PHARMACIES". Count and the date it was true; written permission for every logo in the strip (open items 1 and 2).
- `/` results: "28 minor ailments supported". The PDF says 28, the old site said 20+. Needs clinical lead sign-off.
- `/` results: "< 1 day to set up". The PDF says "set up in under a day". Source needed.
- `/` results: "15 min saved per incident report". No source in the PDF. If it can't be sourced, replace with "5 roles, one login". ("Unlimited users on every plan" replaced "3× more clinical services billed", which had no source.)
- `/` values wave: "Patient records stored in Canada" replaces "PHIPA, PIPEDA and HIPAA aligned". Security claims, open item 11.
- `/` product card: "Voice Booking" replaces "ZeeNovo Intelligence". Confirm the Intelligence name is retired (the PDF calls it Voice booking everywhere).
- `/` philosophy band: "ZeeNovo never makes a clinical decision." The PDF said "no AI touches patient care", which conflicts with Sites (AI drafts the About page) and voice booking (matches requests to services). Confirm the softened line.
- `/` Assure card: "Submitted to ISMP Canada: Incident data goes to ISMP Canada's National Incident Data Repository." The previous site said "NIDR-aligned" and marked it soon (open item 7).
- `/` testimonials: both quotes trimmed to the measurable result, still attributed to the pharmacy only (MapleMeds Pharmacies; Oshawa Lakeview Pharmacy). Need a named person, role and written approval for each (open item 4).
- `/products/clinical` minor ailments section: "28 conditions, one consistent assessment." Count, 28 vs 20+.
- `/products/clinical/minor-ailments` conditions: "Twenty-eight ailments, one consistent way of working." Count and province scope, open item 14.
- `/products/assure/incident-reporting` hero: peer benchmarking removed from the hero line (the PDF doesn't support it).
- `/products/assure/incident-reporting` analytics cards: "Insight surfacing" (automatic spike alerts) and "Scheduled reports" were not in the PDF and were replaced by Contributing factors and Case list.
- `/products/assure/incident-reporting` "What you can see": body now filters by degree of harm, contributing factor, medication, process stage and discovery. The old line cut by store, region, staff member and time of day; store/region/staff are not in the PDF, and time of day still appears in the trend chart art. Confirm before bringing any of them back.
- `/products/assure/incident-reporting` "Beyond the report": "Exports for everyone" and "Cross-product insight" were not in the PDF (the PDF lists report exports as not included today) and were replaced by Linked to CQI and Corrective actions.
- `/products/assure/incident-reporting` NIDR: "Incident data goes to ISMP Canada's NIDR with no extra data entry" (case management side line). NIDR status, open item 7.
- Home: "Assure is end-to-end encrypted" has no slot on the home page. It appears on /products/assure and /trust/security-and-compliance (see priority 2).

### Not implemented

- `/` `[NEW BLOCK]` extra product cards: Sites and Patient Portal ("Fill your calendar"), ZeeNovo Enterprise · Launching soon ("Run the whole network"), ZeeNovo Central · Launching soon ("Get found"). The grid holds 4 cards; needs design.
- `/` `[NEW BLOCK]` "A day with ZeeNovo" role tabs (Technician, Pharmacist, Owner, Patient). Needs design (FeatureTabs on the home page).
- `/` `[NEW BLOCK]` "One login. Every part of your pharmacy." list. Needs design, or fold into the /products "Shared foundation" steps.
- `/` services: a fifth tile "Follow-up and Dose Reminders". The tile grid is designed for 4.
- `/products/clinical` all-features tabs: tab summaries now follow the rewrite (set in the page, ids unchanged). The rewrite's "Revenue and billing" and "Team" tabs are not added: there are no catalogue features for billing PINs, estimated revenue, five roles, one-time code, custom role permissions or Duty PIN. The existing "Vaccinations" and "More services" tabs stay. Adding them needs new ids in `features.json` and edits to `featureSections.ts`.
- `/products/clinical` "Beyond the counter" · Coming soon (fridge log, OAT roster, compliance packs, narcotic forms). Needs design or a roadmap entry; a second cards block would also sit next to the new "Clear limits" cards.
- `/products/clinical/minor-ailments` hero: second button "Book a demo". The hero has one button style; only "See a Minor Ailment Visit" is shown.
- `/products/clinical/minor-ailments` capabilities: no fifth card (the grid and its colour tones are built for 4). Record and Follow up share card 04; the H2 still reads "Five jobs handled."
- `/products/assure/incident-reporting` "National reporting" row: the "Beyond the report" section has two cards, so the row is folded into the case management side line instead. The standalone NIDR block with the "Learn about NIDR" link needs design.

### Layout notes for design

- `/` results counters: "Unlimited" is a word, so it skips the count-up and is set smaller (inline `clamp(34px, 3.9vw, 56px)`) to stay inside its column. Check against the design.
- `/` services: the fourth tile reads "Medication Reviews · Early access" (no eyebrow slot on the tile).
- `/` Magistral product card: "Early access." is the first line of the card text (no eyebrow slot on the card).
- `/products/clinical` service tiles: "Early access" sits beside the tile number on Medication Review and Point-of-Care Testing.
- `/products/clinical` hero: new eyebrow "ZeeNovo Clinical" uses the page's existing eyebrow style above the H1.
- `/products/assure/incident-reporting` process wave: the rewrite has 4 steps (Capture, Learn, Act, Review) and gives no fifth. The wave art was drawn for 5 labels; the step grid is set to 4 columns in the page. Design should confirm the 4-label spacing on the wave, or supply a fifth step.
- `/products/assure/incident-reporting` analytics: cards follow visual fit, not the rewrite's numbering. Compliance dashboard sits on the donut-metrics card (3rd), Case list on the incident-form card (4th).
- `/products/assure/incident-reporting` "Corrective actions" card still shows the "Export Report" UI art. Exports aren't in the PDF; the art may need replacing.
- Buttons use the site's Title Case ("Book a Clinical Demo", "Book an Assure Demo", "Start Free Trial") to match every other button.

### Feature catalogue follow-up

- `rxRequests` and `guidedReporting` were corrected in `features.json` by the product-pages update.
- `medicineSig` and `customDrug` still say ZeeNovo "suggests" medicine and directions, which contradicts "the pharmacist decides". Every page that shows them (Clinical hub, Minor ailments, Independent pharmacies) overrides the wording on the page, so the old text is not visible anywhere. The catalogue entries themselves still need updating. Suggested text:
  - `medicineSig`: "Pick the medicine and directions from your pharmacy's saved presets. You confirm or change every step."
  - `customDrug`: "Choose any medicine and directions when your saved presets don't fit the patient."
- `featureSections.ts` headings now match the pages.

---

## Open items: Product pages built from content blocks (part 2)

Routes: `/products`, `/products/clinical/vaccinations`, `/products/clinical/follow-up-and-reminders` (new), `/products/clinical/prescriptions-and-injections`, `/products/clinical/medication-review`, `/products/clinical/point-of-care-testing`, `/products/clinical/appointments`, `/products/clinical/documentation-and-efax`, `/products/clinical/forms` (new), `/products/assure`, `/products/assure/self-assessment`, `/products/assure/analytics`, `/products/assure/sops-and-training` (new), `/products/magistral`, `/products/sites`, `/products/patient-portal`, `/products/voice-based-appointment-booking`.

All copy lives in `src/content/pages/products.ts`. "Ask About Early Access" and "Book a Magistral Demo" / "Book an Assure Demo" all link to `/book-a-demo`.

### Confirm (claims used as written in the rewrite)

- `/products` "For your patients" cards: the eyebrow is "For your patients", not "Included with every plan", because the PDF prices Patient Portal on request. Confirm whether the Portal is included in any plan.
- `/products` shared foundation: "Every record is scoped to your pharmacy, with changes logged." Uses the narrower PDF claim. The old line was "Every access and change is logged". Confirm access logging before widening it. The Clinical feature `auditRecords` was narrowed to match ("Logged changes").
- `/products/clinical/prescriptions-and-injections`: the "Prescribing support: Suggested, never decided for you" section had no source in the PDF and was replaced by "Status on every request" (One queue, Clear status, Patients informed).
- `/products/clinical/medication-review`: scope is now Ontario MedsCheck, Early access. The old cards "Issues identified", "Interventions" and "Care plan" are not in the PDF and were removed. Confirm whether they exist.
- `/products/clinical/medication-review` physician communication: the old row "Recommendation status" had no source and was replaced by "Provider notification".
- `/products/clinical/medication-review` follow-up: the old rows "Issue resolution" and "Scheduled follow-up" were not in the PDF and were replaced by Due list, Automatic invitations and Booked status.
- `/products/assure` cards: "Incident and near-miss reporting" replaces the "Root cause analysis / 5 Whys" card. The PDF lists contributing factors, not 5 Whys.
- `/products/assure` cards: the "ISMP MSSA, included" card was removed. The PDF only says "Ask us how ZeeNovo supports it", which is how MSSA now appears in the "Know the difference" table. The `mssa` feature was reworded to match ("ISMP Canada MSSA ... Ask how ZeeNovo supports it.").
- `/products/assure` feature explorer and FAQ: "Incident data submitted to ISMP Canada's National Incident Data Repository." The old site said "NIDR-aligned, soon". Confirm submission is live (open item 7). The `nidr` feature now says this.
- `/products/assure` FAQ: "Is Assure encrypted? Yes. ZeeNovo Assure is end-to-end encrypted." Strong technical claim. Confirm the architecture supports "end-to-end" before publishing. Note: part 1 left this line off the site; the two parts should agree before launch.
- `/products/assure` FAQ: "Assure includes a longer free trial." Confirm the trial length.
- `/products/assure` feature explorer: de-identification, multi-store view and case management were not in the PDF and are no longer on the Assure hub. Remove or confirm. `multiStore` was deleted from `features.json` (no page uses it); `deidentify` and `caseManagement` are still used by `/products/assure/incident-reporting`.
- `/products/assure/self-assessment`: the right-hand card no longer describes the ISMP MSSA as included and tracked. Replaced with "The report".
- `/products/assure/analytics`: the features `insightAlerts`, `performanceView`, `scheduledReports` and `crossProduct` were not in the PDF and are off this page. The rows "Store comparison" and "Goal progress" were replaced. Confirm before bringing any back.
- `/products/magistral`: the whole page is rebuilt from the PDF scope. Confirm ZeeNovo has approved this scope and the "Early access" status before publishing.
- `/products/magistral` readiness rows: "Exports" and "Linked to Assure" were removed. The PDF lists report exports as not included and does not mention an Assure link.
- `/products/sites` "Your website" tab: "An About page drafted from your hours, location and services." This is AI drafting. It conflicts with the old home line "no AI touches patient care" unless that line is scoped to clinical care. Align both (part 1 softened the home line).
- `/products/sites`: booking source tracking (`bookingSource`) was removed from the Sites tabs. The PDF mentions booking source only for Central and Enterprise. It is still used on `/products/clinical`.
- `/products/patient-portal` wave: "More repeat bookings" implied a measured outcome. Now "Patients rebook with you".
- `/products/voice-based-appointment-booking`: renamed from "ZeeNovo Intelligence" to "ZeeNovo Voice Booking" in the eyebrow and meta title. Apply one name everywhere.
- `/products/voice-based-appointment-booking`: the row "Booking source recorded" was not in the PDF and was replaced by "Booking only".
- `/products/sites` "Stay current" tab: "Listed in ZeeNovo Central. Launching soon." Confirm timing with the Central page.

### Feature catalogue (`src/content/features.json`)

- Deleted, because no page uses them and the rewrite drops them as unsupported: `benchmarking`, `insightAlerts`, `scheduledReports`, `crossProduct`, `multiStore`, `goals`. Restore them if ZeeNovo confirms the features. `prepSteps` and `compoundLabels` (Magistral placeholders) were also deleted; label printing is listed as not included today.
- Still used by other pages, but flagged by the rewrite. Text left as is:
  - `rca` ("A guided 5 Whys"): the PDF lists contributing factors, not 5 Whys. Used on `/products/assure/incident-reporting`.
  - `deidentify`, `caseManagement`, `actionPlans` ("automatic reminders"): not in the PDF. Used on `/products/assure/incident-reporting`.
  - `exports` ("in the format your board, banner or college expects"): the PDF lists report exports as not included for Magistral; not in the PDF for Assure. Used on `/solutions/independent-pharmacies`.
  - `performanceView`: not in the PDF. Used on `/solutions/pharmacy-owners`.
  - `medicineSig`, `multiSig`, `customDrug`: prescribing support had no source for the prescriptions page. Still used on `/products/clinical` and `/products/clinical/minor-ailments`.
- New features use source code `PDF` (ZeeNovo-Website-Content-Final.pdf). The `_about` legend in `features.json` and the legend line in `scripts/check-features.py` don't list it yet.

### Not implemented

- Condition page template (`/[pharmacy]/conditions/[condition]`). It lives on each pharmacy's own ZeeNovo website, not on this site.
- `/products/clinical/vaccinations` "What you can give" table: folded into the cards side line, as the rewrite does.
- `/products/clinical/vaccinations` "Safety on every dose": built with three cards (Expired-lot guard, Duty PIN, Fridge temperature log). "Screening and consent" is left out of this block because the flow cards above already carry the same line.
- `/products/clinical/prescriptions-and-injections` injections description: the "See Vaccinations and injections →" link. The features block has no link slot.
- `/products/assure` hero media: guided reporting walkthrough video. Needs design; the hero keeps the portrait and timer card.
- `/products/assure` CTA body: "Bring an illustrative near miss to your demo, with no patient details." The CTA block has no body field.
- `/products/assure/self-assessment` hero media: sample self-assessment report (synthetic data). Needs design; the hero keeps the portrait and timer card.
- `/products/magistral` "Not included today": no list block fits under the feature explorer, so it is the last FAQ answer ("What is not included today?"). Needs design if a dedicated note is wanted.
- `/products/magistral` technical sheet download ("ZeeNovo Magistral: technical overview (PDF)"). Needs design, and the PDF asset doesn't exist yet.
- `/products/magistral` CTA body: "Bring one formula you make every week to the demo." The CTA block has no body field.
- `/products/sites` dedicated "Get found by patients searching nearby" block: folded into the "Your website" tab, as the rewrite does.

### Optional blocks built

- `/products/assure` "From near miss to closed action" (5 steps) and `/products/magistral` "One record from formula to recall" (5 steps). The rewrite cuts the stories these replace and offers them as optional `steps` blocks. Remove either if the page is too long.

---

## Open items · Part 3 (Solutions, Enterprise, Central, Platform, Provinces)

### [CONFIRM] claims used as written

- `/solutions/independent-pharmacies` (hero): "Set up in about a day." The setup time needs a source.
- `/solutions/independent-pharmacies` (Clinical services tab): "28 minor ailments" (`conditionLibrary`). This conflicts with "20+" on the home counters.
- `/solutions/pharmacy-owners` (features, `quickSetup`): "Set up in a day." The setup time needs a source. The same feature also appears on `/solutions/independent-pharmacies`.
- `/solutions/patients` (hero and CTA): the "Find a Pharmacy" button links to `https://central.zeenovo.com`. It depends on ZeeNovo Central, which is launching soon, and that domain may not be live.
- `/solutions/inspection-readiness` (evidence table): the four Magistral rows (batch record, equipment calibration, cleaning and temperature logs, deviations and CAPA). Magistral is in early access. A table note says so: "ZeeNovo Magistral is in early access."
- `/solutions/multi-location-groups` (layers card 4 and `central` feature): "ZeeNovo Central. Your pharmacies are listed in ZeeNovo's public directory". Central's launch timing needs confirming.
- `/solutions/multi-location-groups` (whole page): the page is marked "Launching soon". The full dashboard spec is published (measures table, methodology table, roles table and six feature tabs). Confirm which tabs are live at launch.
- `/products/zeenovo-central` (hero): the web address `central.zeenovo.com` is used for "Find a Pharmacy". Confirm the domain is live at launch.
- `/platform/why-zeenovo` (consolidation): "Remove a separate ... fax service". This assumes built-in fax is in every plan. "Built-in fax" is not listed under "What every plan includes".
- `/platform/clinical-content` (cards): "Health Canada's Drug Product Database, about 58,000 products, synced daily". The product count and sync frequency need confirming.
- `/platform/clinical-content` (cards): "258 questions across 43 modules for four roles". The counts need confirming.
- `/platform/clinical-content` (cards): "63 questions across six safety domains". The counts need confirming.
- `/platform/integrations` (Data in): "Health Canada Drug Product Database. About 58,000 products, synced daily." The count and sync frequency need confirming.
- `/platform/switching-to-zeenovo` (hero): "Most pharmacies are set up in under a day." The claim needs a source.
- `/provinces` (cards): the six non-Ontario cards say "Online booking, guided visits, vaccine records and billing PINs set up for the province." Live or coming status per province is unconfirmed. The PDF drops the province-specific program lines.
- `/provinces/ontario` (Funded services card, run-on table): "Incident data submitted to ISMP Canada". This conflicts with the current site's "NIDR-aligned, soon".
- `/provinces/{alberta, british-columbia, saskatchewan, nova-scotia, new-brunswick, manitoba}`: these use one generic template, as the PDF does. The college badges (ACP, CPBC, SCPP, NSCP, NBCP, CPhM "ready") and the college-standard claims are removed. Availability is unconfirmed, so the signal card reads "Ask about availability". Manitoba and New Brunswick were not on the old site's province list. Clinical scope per province needs the clinical lead's sign-off. The cards include "Billing PINs. Set up for [Province]." and "Provincial forms. Coming soon." from the PDF.

### Not implemented

- `/solutions/independent-pharmacies` hero: the secondary "Start free trial" button. The custom hero has one button slot. The CTA carries "Start Free Trial".
- `/solutions/pharmacy-owners`: the "Open the ROI calculator" button under the step cards. The steps block has no button slot. The hero's secondary "See pricing" is also missing because solutionHero has one button. The CTA carries "See Pricing".
- `/solutions/pharmacists` hero: the secondary "See minor ailments" button (solutionHero has one button). The CTA carries it.
- `/solutions/patients` hero: the secondary "Patient login" button (solutionHero has one button). The hero uses "Find a Pharmacy".
- `/solutions/inspection-readiness` hero: the secondary "See Assure" button (solutionHero has one button).
- `/solutions/multi-location-groups` hero: the secondary "Book a network demo" button (solutionHero has one button). The CTA has "Join Early Access" and "Talk to Us".
- `/provinces/ontario`: the "Estimate your pharmacy's numbers" button under the Funded services cards. The cards block has no button slot.

### Implementation notes for the coordinator

- `[NEW BLOCK]` items implemented:
  - Independent pharmacies: the five feature tabs (featureIndex).
  - Enterprise: the full privacy safeguard list (featureIndex bento with 7 features; "No patient-level drill-down" merged into "No patient identifiers", and "Logged access" moved to the onboarding/roles tab because it is already a row in the Privacy block) and the FAQ (faq).
  - Ontario: the FAQ (faq).
- The independent pharmacies feature explorer now comes from `solutionPages["/solutions/independent-pharmacies"]` in `solutions.ts`. `independentPharmaciesFeatures` in `src/content/featureSections.ts` is no longer used by any page. The coordinator can delete it, and its entry in `scripts/check-features.py`'s `built_routes`.
- Pharmacists steps: the rewrite has 6 steps and the block takes 4 or 5. Steps 5 and 6 are merged into "PIN shown, follow-up sent. No billing lookup. Only patients who need you come back."
- Central "For pharmacies": the rewrite has 4 rows and the features block takes 3. "Listed automatically" and "Listing stays current" are merged into one row.
- Switching rollout: the 3 phases use a cards block (3 items), because steps and wave need 4 or 5. The support line is the cards' side text.
- Integrations "Data out" (4 items) uses a steps block, because a features block takes 3 rows and can't follow the "Data in" features block.
- Ontario: the program-card artwork and the outcomes wave had their old labels baked into the images ("OCP inspection readiness", "UIIP ..."). They are replaced by a native cards block (Funded services) and a table (What Ontario pharmacies run on ZeeNovo, 6 rows). The province template drops the outcomes wave, because its heading is now the cards heading.
- Patients feature explorer: the feature titles come from the shared catalogue ("Voice-based booking", "Online prescription requests", ...). The rewrite's short titles are folded into the page wording.
- New feature: `billingPins` (product Platform), used on `/solutions/pharmacy-owners`. Enterprise features were rewritten and regrouped to match the six rewrite tabs. New Enterprise ids: `chainDomain`, `chainServiceFilter`, `chainCalendar`, `methodExclusions`, `methodResponses`, `privacyFilters`, `privacyBroaderCuts`, `privacySameRules`, `privacyContext`, `targetedSends`, `messageReceipts`, `locationStatus`, `networkConfig`, `supportAccess`. No ids were deleted.
- Floating hero cards on `/solutions/inspection-readiness` (the rewrite gives no copy for them): "Self-assessment · Action plan · Before your assessment · Gaps assigned · Each with an owner and a date" and "Records on request · Incident, CQI, SOP and visit records."
- The `/platform` hub copy (hero and four cards) is new and written from the four pages' own copy. The rewrite has no copy for it.

---

## Open items · Part 4 (Pricing, Company, Resources, Trust)

Files: `src/content/pages/company.ts`, `src/app/resources/roadmap/page.tsx` (new), `src/components/blocks/RoiCalculator.tsx`.

### Claims published as written, awaiting ZeeNovo confirmation

#### /pricing
- Prices in CAD, annual prices and tax treatment: confirm that prices exclude tax.
- Combo badge "Most popular": needs sign-up data, or change it to "Best value".
- Combo features: "Priority support" and "Multi-location ready" removed, as the rewrite says. Add them back only if confirmed.
- Combo annual price "C$449.99 a year": the other annual prices are round (C$199, C$299). Confirm whether it should be C$449.
- Plan feature lists now follow the PDF. "ISMP MSSA" (Assure) and "Prescribing support" (Clinical) removed. Confirm.
- Fact chip "Set up in under a day" (and FAQ "Most pharmacies are set up within a day"): needs a basis, such as median onboarding time.
- FAQ "Is there a free trial?": the Assure FAQ says Assure has a longer free trial. If so, add the trial length to this answer.

#### /pricing/roi-calculator
- Default "minutes saved" values (8 per clinical service, 15 per incident report, 20 minutes per additional visit) need a source. The 15 minutes matches the home "15 min saved per incident report" counter, so it needs the same source.

#### /book-a-demo
- The PDF adds Magistral and the "Pharmacy system you use" field (Kroll, Propel, HealthWatch, FillWare, Other), renames "Enterprise" to "Pharmacy groups", and adds the "Other" province option. All implemented. Confirm.

#### /company/about
- Facts "50+ Pharmacies on ZeeNovo": needs the count and the date it was true.
- Facts mismatch: now shows 2024 Founded · 50+ Pharmacies · 5 Connected products · Canada, where patient records are stored. "100% Canadian data residency" was dropped because physician faxes go through a third-party fax provider. Confirm the product count of 5 (Clinical, Assure, Magistral, Sites, Patient Portal) and whether Voice booking counts.
- **Founder quote and name need approval.** The credibility section's side text carries the quote "Every feature had to save my team time on a real shift before it went to anyone else." attributed to Jeet Kandoriya, pharmacist and founder. The rewrite keeps it outside a [CUT], so it is on the page. Remove it if he does not approve.
- Founder named in the hero: not added. The rewrite allows one line in the hero body only with his approval.
- "AI never touches clinical care" (PDF): not added. Keep it out unless Legal is comfortable. Suggested safe wording: "No AI is used in clinical assessment or prescribing."
- Company hub hero says "founded by a practising Ontario pharmacist", and the About H1 says "built by a practising pharmacist-owner". Both rest on the founder facts above.

#### /company/contact
- The consent line refers to a Privacy Policy that is still a holding page.

#### /blog
- Articles 6 to 10 have no summary in the PDF. Article 6 and 8 summaries are the rewrite's suggestions. I wrote the summaries for articles 7, 9 and 10 (the list card needs a line of text): "The readings, actions and reports a fridge temperature excursion needs.", "Which PIN applies to each service, visit mode and outcome." and "The entries a non-sterile batch record needs under the NAPRA standards." Replace them when the articles are written.
- All 10 articles still link to the `/blog/sample-article` template and are tagged "Coming soon".

#### /resources/case-studies
- Each case needs a measured result. The result line is left off the cards until ZeeNovo supplies a figure.
- Customer approval is needed to name MapleMeds Pharmacies, Oshawa Lakeview Pharmacy and KW Bruce Pharmacies.

#### /resources/guides
- The rewrite gives titles only for the new guides. I wrote these one-line summaries from the PDF: "Set up billing PINs" (Set the PIN for each service, visit mode and outcome), "Run a MedsCheck with a Kroll import" (Import a Kroll medication history PDF, then complete the Ontario MedsCheck forms) and "Assign an SOP and track sign-off" (Assign the current version and see who has acknowledged it).

#### /resources/changelog
- No release dates. The PDF gives none. Confirm the dates and the status of each entry: MedsCheck, Point-of-care testing and Expired vaccine lot guard (Early access), SOP versioning and Staff competency assessments (Available). The one-line descriptions come from the PDF's feature text.

#### /resources/roadmap (new page)
- Public timing per item, or keep status tags only. Decide whether a public roadmap is wanted at all, because it commits to features in front of competitors.
- The list H2 "What we are building next." comes from the SEO title. The rewrite gives no H2 for this block.

#### /trust/security-and-compliance
- Page name: the PDF says "Security and privacy". The route and nav say "Security and Compliance". The meta title now says "security and privacy" and the route is unchanged. Decide on one name.
- "Patient records stored in Canada": confirm the hosting provider and region.
- "SOC 2 in progress": confirm Type I or II, the auditor, the expected date and whether customers can request it under NDA.
- "Stored in Canada" card: confirm the fax provider's data protection agreement is signed.
- "Separate by pharmacy… separation is tested": confirm how and how often it is tested.
- "Change logging": confirm whether read access is also logged. The old page said "every access".
- **"Assure is end-to-end encrypted"**: confirm whether this is true E2E (keys held client-side) or encryption in transit and at rest. If it is not true E2E, reword it to "encrypted in transit and at rest".
- HIPAA label and card removed, along with the "PHIPA aligned" and "PIPEDA aligned" labels and the PHIPA and PIPEDA cards, as the rewrite says. Add them back only with evidence such as a privacy assessment.
- "Encryption in transit and at rest", "least-privilege administration" and "continuous monitoring" were dropped from the cards, because the PDF does not repeat them. Add them back if confirmed.
- Enterprise reporting is marked "Launching soon" and "Applies to ZeeNovo Enterprise on release", as the rewrite says.

#### /trust/data-processing-agreement
- "ZeeNovo staff access data only when needed for support, and that access is logged" has been removed. Add it back only if confirmed.

#### /trust/sub-processors
- The PDF removes the table. A table full of "To be confirmed" should not go live. The page now lists the five service types (hosting, fax, email, SMS and voice booking) with their purpose, and drops the provider and data location columns. The note asks readers to email for the current list. Publish named providers and locations when they are available.

#### /trust/accessibility
- "We aim to meet WCAG 2.1 AA" is used, as the PDF says. Use "design and test to meet" only if an audit has been done.

#### /trust/privacy-policy and /trust/terms-and-conditions
- Holding copy only until counsel delivers the full text. The empty section headings have been removed.

### Implementation choices to review
- Buttons stay in Title Case ("Book a Demo", "Start Free Trial", "Send Message", "Book My Demo", "Open the ROI Calculator") to match the approved design, the nav and the home page. The rewrite writes them in sentence case.
- -ise spelling stays consistent with the approved copy, as content/README asks ("finalised", "organisations"). The rewrite uses "finalized" and "organizations".
- Form helper "Do not include patient information.": the form schema has no helper slot, so this text goes in the form's small-print line under the fields, on both Book a demo and Contact.
- ROI calculator: the rewrite's hero says "Every assumption can be edited", so all three minute assumptions are now visitor-editable inputs, with the same defaults and the same maths. "Minutes per additional visit" is a ninth input that the rewrite doesn't list. Without it, the hero line would be untrue. The block's own H2 was a question, so it now reads "Your numbers. Your estimate." (my wording). The output labels and the disclaimer follow the rewrite.
- About: the hero keeps the existing stock portrait (`followupPharmacist`). Under an H1 about a pharmacist-owner, readers may take it for the founder. Swap or remove it if that is a concern.
- Pricing add-on "ZeeNovo Magistral" links "Ask about early access" to /company/contact, and the Roadmap CTA does the same.
- Security: the "Enterprise reporting" section was a second cards block straight after "How we protect data". It now uses a features block (3 rows, analytics chart art), so the same block type does not appear twice in a row. "Related documents" is plain text there, with no link.

### Not implemented
- Resources hub, "Roadmap" card (5th item): the cards block has no 5-column layout. Five cards render as 3 + 2 with an empty slot, so the card was not added. The nav already links to /resources/roadmap.
- Pricing add-ons: the rewrite's 3 add-ons are implemented, but the add-on grid is 2 columns on desktop, so the third card (ZeeNovo Enterprise) sits alone on a second row. Fixing that needs a CSS change in sections.module.css, which was out of scope.
- Case studies layout "Starting point → Workflow change → Measured result → Quote": the list card has no slots for these. Each card shows the tag, the name and the workflow summary only.
- Security "In progress" SOC 2 card: folded into the side text ("We are also working towards a SOC 2 report."), not added as a 7th card.
