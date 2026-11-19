# ZeeNovo website copy, tactical rewrite

This rewrite replaces ZeeNovo's `ZeeNovo-Website-Content-Final.pdf`. The copy is mapped to the sections that are **currently built**, in page order. PDF content with no section to hold it is listed under each page. Read this together with `01-layout-crosscheck.md`.

## What changed in the voice

| ZeeNovo draft | This rewrite |
|---|---|
| Scenes and characters: "One morning at the pharmacy", "Booked at 10 p.m.", "Priya reschedules…", the metoprolol near-miss story, the Naltrexone batch story, "It started at Courtice IDA" | Cut or turned into capability lists. Every section opens with the operational result, then how ZeeNovo gets there. |
| Pain written as mood ("Every hat is your hat") | Each problem stated as one operational fact |
| Rhetorical questions in headlines and subheads | Plain declarative statements |
| Claims mixed in with the story | Each claim stands alone. Anything that needs evidence is flagged. |

Pattern used throughout: **outcome → mechanism → limit**. For example: "Fewer missed claims. The billing PIN for the service, mode and outcome is on every visit. ZeeNovo doesn't submit claims."

Guardrails kept on every page: the pharmacist makes every clinical decision; ZeeNovo doesn't submit claims; there's no live connection to the pharmacy management system; OCP and NAPRA don't endorse software.

## Flag legend

- `[CONFIRM: …]` A fact needs evidence or sign-off from ZeeNovo before launch.
- `[NEW BLOCK – needs design]` Copy for content that has no section on the current page.
- `[NEW PAGE]` A route that isn't built yet.
- `[CUT – reason]` Removed, with the reason.

## Contents

1. Site-wide, Home, ZeeNovo Clinical and its modules
2. ZeeNovo Assure and its modules, Magistral, Sites, Patient Portal, Voice booking
3. Solutions, Enterprise, Central, Platform pages, Provinces
4. Products, Resources and Company hubs, Pricing, About, Contact, Resources, Trust and legal

---

# Part 1 · Site-wide, Home, Clinical

## Site-wide

### Navigation
The current nav has six menus: Products, Solutions, Provinces, Pricing, Resources and Company. The PDF has a different set. The labels below fit the current menus. Items from the PDF that have no page yet are marked.

**Products › Products:** ZeeNovo Clinical · ZeeNovo Assure · ZeeNovo Magistral (Early access) · ZeeNovo Sites · Patient Portal · Voice booking · ZeeNovo Central (Launching soon) `[NEW PAGE]` · ZeeNovo Enterprise (Launching soon)
**Products › Clinical modules:** Minor ailments · Vaccinations and injections · Follow-up and dose reminders `[NEW PAGE]` · Prescription requests · Medication review (Early access) · Point-of-care testing (Early access) · Appointments · Documentation and fax · Forms library (Coming soon) `[NEW PAGE]`
**Products › Assure modules:** Incident reporting · Self-assessment · Analytics · SOPs and staff training `[NEW PAGE]`
**Solutions:** Independent pharmacies · Pharmacy owners · Pharmacists · Patients · Inspection readiness `[NEW PAGE]` · Multi-location groups (Launching soon)
**Platform** `[NEW MENU – needs design]`: Why ZeeNovo · Clinical content we maintain · Integrations · Switching to ZeeNovo. If no new menu is added, put these four links under Company.
**Provinces:** Ontario · Alberta · British Columbia · Saskatchewan · Nova Scotia · New Brunswick · Manitoba
**Resources:** Blog · Case studies · Guides · Changelog · Roadmap `[NEW PAGE]`
**Pricing** and **Company** stay as they are. The PDF drops them from the nav, but it gives no reason. `[CONFIRM: keep Pricing as a top-level link]`

### Header buttons
Patient login · Pharmacy login · **Start free trial** (primary)

### Footer
**Products:** ZeeNovo Clinical · ZeeNovo Assure · ZeeNovo Magistral · ZeeNovo Sites · Patient Portal · Voice booking (replaces "ZeeNovo Intelligence")
**Company:** About · Pricing · Blog · Contact us
**Logins:** Start free trial (replaces "Register Pharmacy") · Patient login · Clinical login · Assure login
**Legal:** Privacy Policy · Terms and Conditions · Security and Privacy · Accessibility
**Line:** Copyright © 2026 ZeeNovo Health Inc. `[CONFIRM: legal entity name, open item 9]`

### Default closing CTA (FinalCta)
**Eyebrow:** Get started
**H2:** See ZeeNovo with / your own services.
**Body (if the slot is added):** A 30-minute walkthrough of one of your services, from booking to follow-up.
**Button:** Book a demo
**Illustration card:** keep the current DoseReminders and PharmacyMetrics previews. `[CUT – "Flu clinic · Thursday" illustrative card: it is a scene, and the existing previews already show the same value]`

### Availability badges
Early access · Launching soon · Coming soon

---

## Homepage · /

**SEO title:** ZeeNovo | Clinical, safety and booking software for pharmacies
**Meta description:** Book patients online, run guided minor ailment and vaccine visits, and manage incident reporting and SOPs in one platform for Canadian pharmacies.

### Hero
**H1:** Clinical Services, / Safety and Booking. / **One Platform.** (keep; already tactical)
**Description:** Online booking, guided clinical visits, automated follow-up and a complete safety program for Canadian pharmacies. Unlimited users. Website included.
**Button:** Start Free Trial (replaces "Sign Up")
**Social proof chip:** 50+ Pharmacies on ZeeNovo `[CONFIRM: count and date, open item 1]`

### Trust strip
**Label:** TRUSTED BY 50+ PHARMACIES `[CONFIRM: logo permissions, open item 2]`

### Results counters (4)
- **28** minor ailments supported `[CONFIRM: PDF says 28; site says 20+; clinical lead sign-off]`
- **< 1 day** to set up `[CONFIRM: PDF says "set up in under a day"; source]`
- **Unlimited** users on every plan (replaces "3× more clinical services billed", which has no source)
- **15 min** saved per incident report `[CONFIRM: no source in the PDF; replace with "5 roles, one login" if it can't be sourced]`

### Our Products (4 cards)
**H2:** Our Products
- **ZeeNovo Clinical:** Minor ailments, vaccines and injections, documented and billed on one record. · Explore
- **ZeeNovo Assure:** Incident reporting, CQI, SOP sign-off and staff competency in one place. · Explore
- **ZeeNovo Magistral** · Early access: Non-sterile compounding with formula maths, signed batch records and lot traceability. · Explore
- **Voice booking** (card currently titled "ZeeNovo Intelligence"): Patients book by speaking. Bookings go straight into your calendar. · Explore `[CONFIRM: retire the "Intelligence" name; the PDF calls it Voice booking everywhere]`

**PDF content with no slot here**
- Sites and Patient Portal card: *Fill your calendar.* Your pharmacy website with live booking, a link for each service, group bookings and a waitlist. `[NEW BLOCK – needs design: the grid has 4 cards and the PDF has 7. Sites and Patient Portal are already on /products]`
- ZeeNovo Enterprise card · Launching soon: *Run the whole network.* A branded booking platform, network dashboards and one inbox for every member pharmacy. `[NEW BLOCK – needs design]`
- ZeeNovo Central card · Launching soon: *Get found.* Patients search every ZeeNovo pharmacy by location and service, then book. `[NEW BLOCK – needs design]`
- Section H2 "Bring patients in. Deliver the care. Improve every month." `[CUT – the grid uses "Our Products"; reuse the three-verb line as the /products hero subhead if wanted]`

### Values wave (5 labels)
**Tag:** Why ZeeNovo
**H2:** Built Around Pharmacy Practice.
- The pharmacist makes every decision
- Patient records stored in Canada
- Province-specific billing PINs and services
- One record, booking to follow-up
- Pharmacy website included

(Replaces "PHIPA, PIPEDA and HIPAA aligned". The PDF drops HIPAA and doesn't make a PHIPA/PIPEDA alignment claim on the home page. `[CONFIRM: security claims, open item 11]`)

### Clinical features (4 cards)
**Tag:** ZeeNovo Clinical
**H2:** Guided Clinical Care, / From Intake to Follow-up.
- **Guided Screening:** Questions branch on every answer. You confirm every treatment step.
- **Province-Aware Services:** Billing PINs, conditions and forms follow your province.
- **Intake Before the Visit:** Patients answer screening questions when they book. Walk-ins join the same queue.
- **Red Flags at the Decision Point:** Referral criteria appear where the decision is made. Stop flags end the visit and record why.

### Services (4 tiles)
**Tag:** ZeeNovo Clinical
**H2:** Services You Can Deliver
Minor Ailments · Vaccinations and Injections · Prescription Requests · Medication Reviews (Early access)
(Add Follow-up and Dose Reminders as a fifth tile if the grid allows. `[NEW BLOCK – needs design if a fifth tile is added]`)

### Philosophy band
**Tag:** Our Philosophy
**H2:** The pharmacist decides. / ZeeNovo guides / **and records.**
**Body:** Built by a practising Ontario pharmacist and pharmacy owner. ZeeNovo never makes a clinical decision.
**Button:** About ZeeNovo
`[CONFIRM: the PDF says "no AI touches patient care", but Sites uses AI to draft the About page and voice booking matches requests to services. Say "no AI makes a clinical decision" instead]`

### Care banner (minor ailments)
**H2:** Minor Ailment Visits, / Structured and / Fully Documented.
**Body:** Guided screening, red flags, saved directions, a generated prescription and physician fax in one visit. The pharmacist decides.
**Button:** See Minor Ailments
**Floating labels:** Conjunctivitis · Insect bites (replaces "Bee Sting" so the label matches the condition list)

### Assure report cards (4)
**Tag:** ZeeNovo Assure
**H2:** A Safety Program / Your Team Will Use.
- **Guided Incident Reporting:** Structured fields for what happened, the process stage, discovery and contributing factors. (Replaces the "20 minutes to under 5" line, which has no source.)
- **CQI With a Paper Trail:** Link incidents, record the learning and give every action an owner and a due date.
- **SOPs and Staff Competency:** Assign the current SOP version, track sign-off and assess staff by role. · Explore
- **Submitted to ISMP Canada:** Incident data goes to ISMP Canada's National Incident Data Repository. `[CONFIRM: the current site says "NIDR-aligned" and marks it soon, open item 7]`

**PDF content with no slot here**
- "Assure is end-to-end encrypted." `[CONFIRM: technical claim needs engineering sign-off before it goes anywhere on the site]`

### Testimonials (2)
**Tag:** Customers
**H2:** What Pharmacy Teams / Say About ZeeNovo
- "Since moving to ZeeNovo, our clinical and vaccination revenue has reached record levels." MapleMeds Pharmacies, Ontario
- "Our clinical revenue improved within weeks of going live." Oshawa Lakeview Pharmacy, Ontario
`[CONFIRM: a named person, their role and written approval for each quote, open item 4. Both quotes are trimmed to the measurable result]`

### Final CTA
Use the default closing CTA.

### PDF content with no slot on the current page
- **"One morning at the pharmacy"** (flu clinic, walk-in and close call). `[CUT – narrative. Everything it shows is already in the Clinical features and Assure cards]`
- **"A day with ZeeNovo" role tabs** `[NEW BLOCK – needs design (FeatureTabs)]`. Rewritten as value by role:
  - **Technician: Intake done before the pharmacist starts.** Bring walk-ins into the queue, complete screening and mark visits ready for the pharmacist. Log near misses at the final check.
  - **Pharmacist: Clinical judgement, without the admin.** Answers, health flags and allergies are on screen. Pick saved directions, fax the physician from the visit and see the billing PIN.
  - **Owner: Monthly performance in one view.** Estimated revenue by service and pharmacist, staff productivity, follow-up status, open incidents and overdue SOP sign-offs.
  - **Patient: Book any time, by web or voice.** Book for the whole family, answer screening questions online, and get follow-up and next-dose reminders by email.
- **"One login. Every part of your pharmacy."** `[NEW BLOCK – needs design, or fold into /products "Shared foundation" steps]`: One login across Clinical, Assure and Magistral · Five roles, unlimited users · Each pharmacy's data kept separate · Clinical content maintained by ZeeNovo · Self-serve sign-up and billing.
- **"Built around the way you practise"** (6 points). Folded into the Values wave and Philosophy band. `[CUT – duplicate]`

---

## ZeeNovo Clinical · /products/clinical

**SEO title:** ZeeNovo Clinical | Pharmacy clinical services software
**Meta description:** Minor ailments, vaccines, injections and prescription requests on one record, with physician fax, automated follow-up and billing PINs.

### Hero
**Eyebrow:** ZeeNovo Clinical
**H1:** Every clinical service, / booking to follow-up.
**Description:** One calendar for walk-ins and online bookings. Guided screening, generated documents, physician fax and automated follow-up. The pharmacist makes every decision.
**Buttons:** Book a Clinical demo · Start free trial

### Clinical Services (6 tiles)
**Eyebrow:** Clinical Services
**H2:** Six services. / One structured workflow.
**Side:** Intake, assessment, documentation and billing work the same way for every service.
Tiles: Minor Ailments · Vaccinations · Injections · Prescription Requests · Medication Review (Early access) · Point-of-Care Testing (Early access)

### Minor Ailments
**Eyebrow:** Minor Ailments
**H2:** 28 conditions, / one consistent assessment. `[CONFIRM: 28 vs 20+]`
**Side:** Screening follows your province's list. Red flags, outcome, prescription and physician notification sit on one record.
Condition chips: keep the current skin list.

### More Clinical Services
**Eyebrow:** More Clinical Services
**H2:** One system. More services.
- **Vaccinations:** Flu, COVID-19 and other vaccines, with Quick Complete for public immunization and automatic dose reminders.
- **Prescriptions:** New, refill, renewal and transfer requests in one queue. (Replaces "repeat", so the request types match the PDF.)
- **Appointments:** Walk-ins, scheduled visits, waitlists and group bookings on one calendar.

### Clinical Workflow
**Eyebrow:** Clinical Workflow
**H2:** Risk shown at the / point of decision.
- **Adaptive screening:** Questions branch on each answer, the patient's sex and your province's list.
- **Clinical safeguards:** Health flags, red flags with referral criteria, and stop flags that end the visit and record why.
- **Saved directions:** Pick the medicine and directions from your pharmacy's presets. You confirm or change every step. (Replaces "Treatment options are suggested", which implies the software recommends treatment.)

### After the Assessment (2 cards)
**Eyebrow:** After the Assessment
**H2:** Documents and fax, / done before the patient leaves.
- **Patient Management:** Family physician on file, visit history and dose reminders on one record.
- **Documentation:** Prescription, assessment and physician notification PDFs, generated from the visit and faxed with status tracking.

### Clinical Follow-up
**Eyebrow:** Clinical Follow-up
**H2:** Follow-up by exception.
- **Automatic follow-up:** Patients answer by secure email link. Only flagged responses reach a pharmacist.
- **Recorded outcomes:** Resolved, improved, unchanged or worse, on the original visit.
- **Dose-series reminders:** Second doses and boosters trigger a reminder with a booking link.

### One Connected Clinical Workflow
**Eyebrow:** One Connected Clinical Workflow
**H2:** Booking, intake, assessment, / documentation, communication and / follow-up on one record.
Steps: Booking · Intake · Assessment · Documentation · Communication · Follow-up

### Closing CTA
**Eyebrow:** Built for clinical care
**H2:** Deliver more clinical services / without adding admin.
**Button:** Book a Clinical demo

### PDF content with no slot on the current page
- **"Follow one visit"** (7 steps). `[CUT – it repeats the Connected Workflow steps as a narrative; the "billed correctly" step is moved to Revenue below]`
- **All features tabs (10 tabs)** `[NEW BLOCK – reuse featureIndex/FeatureTabs, as on /products/assure]`. Tab headings, value first:
  1. **Assessment:** Screening that adapts to every answer. Pre-visit intake · 28 conditions shown by province · Choose which conditions you offer.
  2. **Safety:** Risk shown where the decision is made. Red flags with referral criteria · Stop flags · Health flags captured per visit · Expired-lot guard (Early access).
  3. **Prescribing:** Your directions, your decision. Saved directions · Protocol reference notes your pharmacy sets up · Self-care advice on the handout · Outcome recorded the same way every time.
  4. **Scheduling:** Every bookable minute is a real one. Hours, breaks and holidays · Walk-ins in the same queue · In person, phone or virtual · Group and family bookings · Waitlist · Ready-for-pharmacist status.
  5. **Bookings:** Control what patients can book. Daily booking digest · Service on/off · A link for each service · CSV patient import · Voice booking.
  6. **Follow-up:** No call list. Patient-directed email follow-up · Flagged for pharmacist review · Manual follow-up · Dose-series reminders · Recorded outcomes.
  7. **Patient record:** Captured once, reused every visit. Physician on file · Full visit, document and fax history.
  8. **Documentation and fax:** The record is complete when the visit ends. Generated PDFs · Built-in fax with status log · Download · Stored in Canada with role-based access.
  9. **Revenue and billing:** Fewer lookups, fewer missed claims. Billing PIN by service, province, mode and outcome · Estimated revenue by service and pharmacist · Claims stay in your own system.
  10. **Team:** Unlimited users, one login each. Five roles · Set up in a day · Password plus one-time code · Custom role permissions (Coming soon) · Duty PIN (Coming soon).
- **"Beyond the counter"** · Coming soon `[NEW BLOCK – needs design, or move to /resources/roadmap]`. H2: *Operational records, in the same system.* Fridge temperature log · OAT dosing roster · Compliance pack schedules · Narcotic destruction, loss/theft and forgery forms, plus 24 more.
- **"What ZeeNovo Clinical does not do"** `[NEW BLOCK – reuse cards]`. H2: *Clear limits.* Doesn't diagnose, prescribe or recommend treatment · Doesn't submit claims to OHIP, ODB or other payers · No live connection to your pharmacy management system · Doesn't report to Panorama or COVaxON.
- **FAQ** `[NEW BLOCK – reuse faq]`. Keep the PDF's questions and answers; they are already tactical. Shorten "How do patients get follow-up questions?" to: *By secure email link. SMS is used only for sign-in codes and appointment status.*

---

## Minor ailments · /products/clinical/minor-ailments

**SEO title:** Minor ailments software for pharmacists | ZeeNovo
**Meta description:** Guided minor ailment assessments with red flags, stop criteria, saved directions, prescription PDFs, physician fax and automated follow-up.

### Hero
**Eyebrow:** ZeeNovo Clinical
**H1:** Structured minor ailment visits. / Fully documented.
**Description:** Screening that branches on every answer, red flags at the decision point, and a complete record with physician notification before the patient leaves.
**Buttons:** See a minor ailment visit · Book a demo

### Capabilities (currently 4 cards)
**H2:** One guided visit. / Five jobs handled. (Add a fifth card, or keep four and merge Record and Follow up.)
- **Intake:** Screening answered at booking or captured at the counter.
- **Safety:** Red flags with referral criteria. Stop flags end visits that shouldn't continue.
- **Decision:** Prescribed, not prescribed or referred, using your saved directions. (Retitles the current "Treatment" card.)
- **Record:** Prescription, assessment and physician notification PDFs, faxed from the visit.
- **Follow up:** Automated email follow-up. Only flagged responses come back. `[NEW BLOCK – fifth card]`

### Supported conditions
**H2:** Twenty-eight ailments, / one consistent way of working. `[CONFIRM: count, open item 14]`
**Side:** Each province sets its own list. ZeeNovo shows only the conditions your pharmacists can assess, and you choose which ones patients can book online.
Groups: keep the PDF table (7 groups) exactly as supplied.

### The right question at the right point
**H2:** The right question, / at the right point.
- **Adaptive questions:** Each answer decides the next question. (Replaces "Province-backed logic"; province rules are covered in the conditions side line.)
- **Red flags in context:** Referral criteria appear at the step where you decide.
- **Pharmacist controlled:** Reference notes support your judgement. They don't replace it.

### Every step on the same consultation record
**H2:** Every step on the same visit record.
(Keep the visual. No copy change.)

### After the visit (2 cards)
**H2:** Follow-up without / another call list.
- **Keep the physician in the loop.** Look up the family physician once and reuse their details for every visit and fax.
- **Only return when care needs you.** Patients report symptoms, adherence and side effects by secure link. Worse, unchanged or side-effect responses are flagged for a pharmacist. Outcomes are recorded on the original assessment.

### PDF content with no slot on the current page
- Timeline card (Today / In 3 days / If flagged). `[CUT – the follow-up card visual already covers it]`
- **FAQ** `[NEW BLOCK – reuse faq]`: *Does ZeeNovo tell me what to prescribe?* No. Your pharmacy sets the reference notes and directions, and you choose. · *What happens with a red flag?* Referral criteria appear at that step. You can refer at any point, and stop flags end the visit with a reason recorded. · *Can a technician start the visit?* Yes. Staff complete intake and mark the visit ready for the pharmacist.

---

## Vaccinations and injections · /products/clinical/vaccinations

**SEO title:** Pharmacy vaccination and injection software | ZeeNovo
**Meta description:** Run flu and COVID-19 clinics faster with Quick Complete, saved vaccine preferences, group booking and automatic dose reminders.

### Hero
**Eyebrow:** ZeeNovo Clinical
**H1:** Vaccines and injections, / booking to next dose.
**Description:** Flu, COVID-19, other vaccines and pharmacist-administered injections in one module. Lot details autofill. Dose reminders bring patients back.
**Buttons:** Book a demo · Start free trial

### Cards (4)
**Eyebrow:** Vaccinations
**H2:** One flow from booking / to the next dose.
**Side:** Publicly funded flu and COVID-19, other routine and travel vaccines, and medicine injections.
- **Book:** Walk-in, online, voice or group booking for families and clinics.
- **Screen:** Screening and consent before every vaccine or injection.
- **Record:** DIN, lot, expiry, route, site and administering pharmacist on every dose.
- **Remind:** Automatic email reminder with a booking link for the next dose.

### Clinic days (featureIndex)
**Eyebrow:** Quick Complete
**H2:** Public immunization / at clinic speed.
**Side:** For publicly funded flu and COVID-19, Quick Complete goes from screening to documented administration in a few clicks. Only the fields a public immunization visit needs.
Features: Quick Complete · Saved vaccine preferences (vaccine, lot, expiry, route and site autofill) · Edit one visit without changing preferences · Group booking · Walk-ins

### After the vaccine (2 cards)
**H2:** The record and the reminder, / handled for you.
- **Dose reminders:** Second doses, boosters and injection series reminded automatically. Patients book from the email or reply that they've had the dose elsewhere. Chips: Dose series · Boosters · Booking link · Patient replies
- **Documentation:** Vaccine administration record generated at the point of care and faxed to the physician. Chips: Generated record · Built-in fax · Stored in Canada · Lot traceability (replaces "Compliant storage" and "Audit-ready", which aren't claims in the PDF)

### Closing CTA
**H2:** Run your next vaccine / clinic on ZeeNovo.
**Button:** Book a demo

### PDF content with no slot on the current page
- **"What you can give"** table (Publicly funded · Other vaccines · Medicine injections) `[NEW BLOCK – reuse table, or fold into the cards side line as done above]`
- **Safety on every dose** `[NEW BLOCK – reuse cards]`: Screening and consent · Expired-lot guard: an expired lot can't be recorded (Early access) · Duty PIN: the pharmacist on duty is recorded as the administrator (Coming soon) · Fridge temperature log (Coming soon)
- **FAQ** `[NEW BLOCK – faq]`: *Can pharmacists give medicine injections here?* Yes. Same module, with its own screening, record and dose reminders. · *Does ZeeNovo report to Panorama or COVaxON?* No. Record the immunization in the provincial system as you do today. ZeeNovo keeps the pharmacy's record.
- "Built for the busiest weeks of the year, when every minute at the chair counts." `[CUT – filler]`

---

## Follow-up and dose reminders · /products/clinical/follow-up-and-reminders `[NEW PAGE]`

**SEO title:** Automated pharmacy follow-up and dose reminders | ZeeNovo
**Meta description:** Follow up with every patient without a call list. Secure email follow-up, pharmacist review only when flagged, and automatic dose reminders.

### Hero (reuse hero)
**Eyebrow:** ZeeNovo Clinical
**H1:** Follow up with every patient. / Call only the ones who need it.
**Description:** ZeeNovo sends follow-up questions after the visit. Patients answer by secure link, and a pharmacist reviews only flagged responses.
**Buttons:** Book a demo · Start free trial

### How it works (reuse steps, 5)
**H2:** Automated follow-up, / start to outcome.
- **Configured per service:** Timing set for each condition.
- **Sent automatically:** Email with a secure link to the follow-up questions.
- **Answered by the patient:** Symptoms, adherence and side effects.
- **Flagged when needed:** Worse symptoms or side effects go to a pharmacist.
- **Outcome recorded:** Resolved, improved, unchanged or worse, on the original visit.

### Follow-up by exception (reuse features)
**H2:** No call list. / Full documentation.
- **Review only flagged responses:** Act by calling, booking a visit or referring.
- **Manual follow-up:** Schedule one yourself at the end of any visit.
- **One record:** Questions, answers, flags and outcomes stay with the visit.

### Dose reminders (reuse twoCard or features)
**H2:** More completed / dose series.
- Automatic email reminders when the next dose is due · Booking link in every reminder · Patients can report a dose given elsewhere · Reminder history on the patient record

### Value (reuse cards, 3)
**H2:** Why it matters.
- **Coverage:** Every patient is checked on, not only the ones staff had time to call.
- **Documentation:** Every follow-up and outcome is recorded for your files and your next assessment.
- **Return visits:** Patients come back for second doses and boosters.

### Closing CTA
**H2:** Let follow-up / run itself.
**Button:** Book a demo

---

## Prescriptions and injections · /products/clinical/prescriptions-and-injections

**SEO title:** Online prescription requests for pharmacies | ZeeNovo
**Meta description:** New, refill, renewal and transfer requests from your website and patient portal in one queue, each with a clear status.

### Hero
**Eyebrow:** ZeeNovo Clinical
**H1:** Every prescription request, / in one queue.
**Description:** New, refill, renewal and transfer requests from your website and the Patient Portal, each with a status. Fewer phone calls to the counter.
**Buttons:** Book a demo · Start free trial

### Cards (4)
**H2:** Four request types. One queue.
- **Refill:** The most common request, handled without a phone call.
- **New prescription:** Captured with the details the pharmacist needs.
- **Renewal:** Tracked through to completion.
- **Transfer:** Incoming transfers in the same queue.

### Prescribing support (features)
`[CONFIRM: this section ("Suggested, never decided for you") has no source in the PDF. Remove it, or replace it with the rows below]`
**H2:** Status on / every request.
- **One queue:** Website and portal requests arrive in the same place.
- **Clear status:** Patients and staff see where each request stands.
- **Patients informed:** Portal users see their request status without calling.

### Injections (features)
**H2:** Injection schedules / that keep themselves.
**Description:** Medicine injections are part of the Vaccinations and injections module. See Vaccinations and injections →
- **Booked like any service:** Injection appointments on the same calendar, with group booking.
- **Complete record:** DIN, lot, expiry, route and site on every injection.
- **Dose reminders:** An email with a link to book the next dose.

### Closing CTA
**H2:** Put every request / in one place.
**Button:** Book a demo

---

## Medication review · /products/clinical/medication-review

**SEO title:** MedsCheck software for Ontario pharmacies | ZeeNovo
**Meta description:** MedsCheck Annual, Follow-up, Diabetes and At Home with Ontario forms filled in, Kroll medication history import and a due-invited-booked queue.

### Hero
**Eyebrow:** ZeeNovo Clinical · Early access
**H1:** MedsCheck, without / retyping the med list.
**Description:** Import the Kroll medication history PDF, complete the review, and ZeeNovo fills in the Ontario MedsCheck forms.
**Buttons:** Ask about early access · Book a demo

### Cards (4)
**Eyebrow:** Medication review
**H2:** One review. / Every form completed.
**Side:** Annual, Follow-up, Diabetes Annual, Diabetes Education follow-up and MedsCheck at Home.
- **Kroll PDF import:** Each medicine matched to Health Canada's Drug Product Database.
- **Ontario forms filled in:** Worksheet, personal medication record, take-home summary, acknowledgement and provider notification, plus the diabetes forms.
- **Recall queue:** See who is due, invited and booked, with automatic invitation emails.
- **Provider fax:** Fax the notification from the review.

(The current cards, "Issues identified", "Interventions" and "Care plan", aren't in the PDF. `[CONFIRM: these features exist]`)

### Physician communication (features)
**H2:** Keep the prescriber / in the loop.
- **Physician on file:** Looked up once and reused.
- **Provider notification:** Generated from the review.
- **Fax from the review:** Status shown in the log.
`[CONFIRM: the current row "Recommendation status" has no source in the PDF]`

### Follow-up (features)
**H2:** Bring patients back / when they're due.
- **Due list:** See which patients are due for their next review.
- **Automatic invitations:** Email invitations from the queue.
- **Booked status:** Track who has booked.
`[CONFIRM: the current rows "Issue resolution" and "Scheduled follow-up" aren't in the PDF]`

### Closing CTA
**H2:** Turn reviews into / documented outcomes.
**Button:** Ask about early access

### PDF content with no slot on the current page
- **FAQ** `[NEW BLOCK – faq]`: *Is this connected to Kroll?* No live connection. You import Kroll's medication history PDF. · *Other provinces?* Forms are for Ontario MedsCheck today. Ask about your province's program.

---

## Point-of-care testing · /products/clinical/point-of-care-testing

**SEO title:** Point-of-care testing software for pharmacies | ZeeNovo
**Meta description:** Record blood glucose, blood pressure, haemoglobin and COVID-19 results on the visit and fax a physician report from the same record.

### Hero
**Eyebrow:** ZeeNovo Clinical · Early access
**H1:** Point-of-care tests, / recorded with the visit.
**Description:** Register devices, record results in the fields each test needs, and fax a physician report from the same record.
**Buttons:** Ask about early access · Book a demo

### Steps (5)
**H2:** From booking to result.
- **Booked:** Online or walk-in.
- **Screened:** Screening questions before the test.
- **Recorded:** Result entered against the visit.
- **Interpreted:** The pharmacist records the interpretation and next step.
- **Documented:** A physician report to fax and a patient report by email.

### Key features (featureIndex)
**H2:** Testing that stays / with the visit.
**Side:** Blood glucose, blood pressure, haemoglobin and COVID-19.
Features: Device registry with configurable result fields · Standard and diabetes-enhanced workflows · Physician report by fax · Patient report by email

### Closing CTA
**H2:** Add testing without / adding another system.
**Button:** Ask about early access

### PDF content with no slot on the current page
- **FAQ** `[NEW BLOCK – faq]`: *Does it connect to my testing device?* Not today. Results are entered by hand. · *Who interprets the result?* The pharmacist.

---

## Appointments · /products/clinical/appointments

**SEO title:** Pharmacy appointment booking and calendar | ZeeNovo
**Meta description:** A clinical calendar built on your hours, with walk-ins, phone and virtual visits, group bookings, a waitlist and booking links per service.

### Hero
**Eyebrow:** ZeeNovo Clinical
**H1:** A calendar that only / offers deliverable times.
**Description:** Scheduled visits, walk-ins, waitlists and group bookings on one calendar, built on your hours and your team.
**Buttons:** Book a demo · Start free trial

### Calendar (cards, 4)
**H2:** Set up the way / your pharmacy runs.
- **Your hours:** Opening hours, breaks and holidays, in your time zone.
- **Walk-in or later:** Staff take walk-ins now or book a later time. Patients self-book online.
- **Visit modes:** In person, phone or virtual.
- **Group bookings:** Families and clinics in one appointment.

### Service control (features)
**H2:** Control what / patients can book.
- **Service on/off:** Turn online booking on or off per service.
- **Waitlist:** Full services collect a waitlist with a booking link.
- **Booking links and daily digest:** A direct link per service, and an email summary of upcoming appointments.

### Patient list (featureIndex)
**H2:** Start with the patients / you already have.
Features: CSV patient import from your PMS export · Family physician on file · Pre-visit questionnaire · Ready-for-pharmacist status · Voice booking into the same calendar

### Closing CTA
**H2:** Keep your clinical / calendar full.
**Button:** Book a demo

---

## Documentation and fax · /products/clinical/documentation-and-efax

**SEO title:** Pharmacy clinical documentation and physician fax | ZeeNovo
**Meta description:** Prescription, assessment, vaccine and physician notification PDFs generated from the visit and faxed with status tracking.

### Hero
**Eyebrow:** ZeeNovo Clinical
**H1:** The record is written / while you work.
**Description:** Prescription, assessment, vaccine administration and physician notification PDFs, generated from the visit. Fax or download from the same screen.
**Buttons:** Book a demo · Start free trial

### Cards (4)
**H2:** Four tasks you no / longer do by hand.
- **Generated documents:** PDFs created from the visit.
- **Built-in fax:** Fax the physician without leaving ZeeNovo.
- **Fax status log:** What was sent, when, and its status.
- **Stored in Canada:** Patient records in Canada, with role-based access.

### eFax (features)
**H2:** Your choice on / every visit.
- **Fax the physician:** The family physician receives the notification.
- **Download:** Keep a copy of every document for the visit.
- **Physician on file:** Details reused at every visit and fax.

### Closing CTA
**H2:** Spend the time on the / patient, not the paperwork.
**Button:** Book a demo

---

## Forms library · /products/clinical/forms `[NEW PAGE]` · Coming soon

**SEO title:** Pharmacy forms library: national and provincial | ZeeNovo
**Meta description:** Fill in, sign and send 27 national and provincial pharmacy forms by fax or email, pre-filled from the patient record where possible.

### Hero (reuse hero)
**Eyebrow:** ZeeNovo Clinical · Coming soon
**H1:** 27 pharmacy forms. / Filled, signed and sent.
**Description:** National and provincial forms pre-filled from the patient record where possible, signed electronically and sent by fax or email. A copy is kept on file.
**Buttons:** Ask about early access · Book a demo

### How it works (reuse steps, 4)
**H2:** Four steps, / no hunting.
- **Choose:** Search by name or filter by province.
- **Fill:** Patient and pharmacy details added for you.
- **Sign:** Electronic signature in ZeeNovo.
- **Send:** Fax or email from the form. A copy stays on file.

### Forms included (reuse table)
**H2:** Forms included.
Keep the PDF's table (Clinical services · Dispensing · Opioids and controlled substances · Federal programs · Cold chain · Provincial) as supplied.

### FAQ (reuse faq)
- *Can I send a form to the prescriber?* Yes, by fax or email from the form.
- *Is a copy kept?* Yes. Every completed form stays on file in ZeeNovo.

### Closing CTA
**H2:** Stop hunting for / the right form.
**Button:** Ask about early access


---

# Part 2 · Assure, Magistral, Sites, Patient Portal, Voice booking

## ZeeNovo Assure · /products/assure

**SEO title:** ZeeNovo Assure | Pharmacy incident reporting, CQI and SOPs
**Meta description:** Report incidents and near misses, run CQI, track corrective actions and SOP sign-off in one record. Inspection evidence kept as your team works.

### Hero
**Eyebrow:** ZeeNovo Assure
**H1:** Your safety program, / in one record. / Ready for inspection.
**Body:** Incident reporting, CQI meetings, corrective actions, SOP sign-off and staff competency in one place. Every record your College asks for is kept as the work is done.
**Buttons:** Book an Assure demo · Start free trial

### Cards: "Six parts of one quality program" (6 cards)
**Eyebrow:** What is included
**H2:** Six parts of one / quality program.
**Side:** Each part feeds the next. A report becomes a documented improvement.
1. **Incident and near-miss reporting.** Structured capture of what happened, the stage, who caught it and why. `[CONFIRM: replaces current "Root cause analysis / 5 Whys" card; PDF lists contributing factors, not 5 Whys]`
2. **Learnings and corrective actions.** Every action has an owner, a due date and a status.
3. **CQI meetings.** Attendees, minutes, linked incidents and follow-ups in one record.
4. **Pharmacy self-assessment.** 63 questions, six safety domains, a score and an action plan.
5. **Staff competency.** Role-based assessments: 43 modules, 258 questions, four roles.
6. **SOP library and sign-off.** Assign the current version and record each acknowledgement.
`[CONFIRM: current card "ISMP MSSA, included" conflicts with PDF, which says only "Ask us how ZeeNovo supports it." Remove the MSSA card unless MSSA is in the product.]`

### Wave: "Report, analyse, act, improve"
**Tag:** Closed loop
**H2:** Report. Learn. Act. Improve.
**Body:** Every incident follows the same four steps, from first report to verified fix.
**Labels:** Report · Learn · Act · Improve

### Feature explorer (featureIndex)
**Eyebrow:** All features
**H2:** Every Assure feature, / in one place.
**Side:** Select a step in your safety program.
- **Reporting.** Capture incidents and near misses while the details are fresh.
  - Guided fields: severity, process stage, discovery, contributing factors, patient and medication details.
  - Near misses get the same structured record as incidents.
  - Incident data submitted to ISMP Canada's National Incident Data Repository. `[CONFIRM: current site says "NIDR-aligned, soon". Confirm submission is live.]`
- **Analysis.** Find where the process failed.
  - Contributing factors from a structured list: human, system, environmental.
  - Learnings recorded on the incident.
- **Action.** Owners, due dates, follow-through.
  - Corrective actions with owner, due date and status.
  - Compliance dashboard: open incidents, SOP training and CQI follow-ups, complete or overdue.
- **Analytics.** See the pattern.
  - Trends by degree of harm, contributing factor, medication, process stage and discovery.
  - Patient demographics across incidents.
- **Meetings.** CQI meetings with attendees, minutes, linked incidents and follow-ups.
- **Staff competency.** Assess staff on the work they do.
  - Role-based assessments, scored by module, with a risk level.
  - Results point to the SOP or refresher to assign.
  - Due-soon and overdue reminders. *Coming soon.*
- **Inspection readiness.** Records ready when asked.
  - Self-assessment PDF report.
  - SOP version history and who acknowledged each version.
  - Corrective actions with completion dates.
  - Individual logins for every team member.
`[CONFIRM: current tabs include "de-identify", "multiStore", "caseManagement" features not in PDF. Remove or confirm.]`

### CTA
**Eyebrow:** Built for pharmacy safety
**H2:** Walk into your next / inspection prepared.
**Button:** Book an Assure demo

### PDF content with no slot on the current page
- **Story: "Two CQI meetings, one near miss" (metoprolol).** `[CUT – narrative. Its value is already carried by the six cards and the wave.]` If a slot is wanted, use this instead: `[NEW BLOCK – needs design]` (reuse `steps`)
  **H2:** From near miss to closed action.
  1. **Logged.** Stage, discovery and contributing factors captured at the point of error.
  2. **Reviewed.** Linked to the next CQI meeting, with the learning recorded.
  3. **Assigned.** A corrective action with an owner and a due date.
  4. **Updated.** The affected SOP is revised and reassigned to staff.
  5. **Verified.** Action complete, sign-offs recorded, trend checked at the next meeting.
- **Hero media: guided reporting walkthrough video.** `[NEW BLOCK – needs design]` Hero currently uses a portrait plus timer card.
- **Know the difference.** `[NEW BLOCK – needs design]` (reuse `twoCard` or `table`)
  - **Pharmacy self-assessment:** how your site's practices measure up.
  - **Staff competency assessment:** how each person performs in their role.
  - **ISMP Canada MSSA:** ISMP Canada's validated Medication Safety Self-Assessment. Ask how ZeeNovo supports it.
- **FAQ.** `[NEW BLOCK – reuse faq]`
  - **Who can see an incident report?** Access is set by role. We will show you who can view and finalise each case.
  - **Does ZeeNovo submit reports to ISMP Canada?** Yes. Incident data goes to ISMP Canada's National Incident Data Repository. `[CONFIRM: NIDR status]`
  - **Is Assure encrypted?** Yes. ZeeNovo Assure is end-to-end encrypted. `[CONFIRM: strong technical claim; confirm architecture supports "end-to-end" before publishing]`
  - **Are your assessments the same as an OCP practice assessment?** No. They check your own readiness using ZeeNovo's questions. They are not OCP criteria and are not endorsed by OCP.
  - **What does Assure cost?** See pricing. Assure includes a longer free trial. `[CONFIRM: trial length]`
- **CTA body: "Bring an illustrative near miss to your demo, with no patient details."** Keep as CTA sub-line if the CTA block gets a body field; otherwise drop.

---

## Incident reporting · /products/assure/incident-reporting

**SEO title:** Medication incident and near-miss reporting | ZeeNovo Assure
**Meta description:** Guided incident and near-miss reporting with contributing factors, corrective actions and CQI links. Trends ready for your next meeting.

### Hero
**Eyebrow:** ZeeNovo Assure
**H1:** Record the close call. / Follow it through / to the fix.
**Body:** Guided incident and near-miss reporting, with the learning, the corrective action and the CQI follow-up on one record.
**Buttons:** Book an Assure demo · Start free trial
`[CONFIRM: current hero claims "root cause analysis, action plans, live trend dashboards, with anonymised peer benchmarking". PDF does not support peer benchmarking. Remove.]`

### Analytics cards: "Four ways analytics works harder for you" (4 cards)
**Eyebrow:** Analytics
**H2:** Four views your CQI / meeting needs.
**Side:** Every report reaches the dashboard when it is submitted. No spreadsheet in between.
1. **Trend dashboards.** Incidents by degree of harm, medication, process stage and discovery.
2. **Contributing factors.** See which human, system and environmental factors repeat.
3. **Case list.** Every report with its current status.
4. **Compliance dashboard.** Open incidents, overdue SOP sign-offs and CQI follow-ups.
`[CONFIRM: current cards "Insight surfacing" (automatic spike alerts) and "Scheduled reports" are not in the PDF. Replaced above.]`

### Features: "Compliance data that talks back"
**Eyebrow:** What you can see
**H2:** Find where the / process breaks down.
**Body:** Filter incidents by degree of harm, contributing factor, medication, process stage and discovery.
`[CONFIRM: current body says "cut by store, region, staff member, medication and time of day". Store/region/staff cuts are not in the PDF; time-of-day is shown in current UI art. Confirm before keeping.]`

### Features: "Share the results with the people who need them"
**Eyebrow:** Beyond the report
**H2:** Evidence ready for / the CQI meeting.
**Rows:**
- **Linked to CQI.** Attach incidents to a meeting and check progress at the next one.
- **Corrective actions.** Owner, due date and status on every action.
- **National reporting.** Incident data submitted to ISMP Canada's NIDR, with no extra data entry. `[CONFIRM: NIDR status]`
`[CONFIRM: current rows "Exports for everyone" (board/banner/college formats) and "Cross-product insight" are not in the PDF; PDF Magistral lists "Report exports" as not included today.]`

### Wave: "Collect, detect, compare, report and act"
**Tag:** From data to decision
**H2:** Capture, learn, act, review.
**Body:** Each incident follows the same four steps, from the first report to the change that prevents a repeat.
**Labels:**
1. **Capture.** Severity from near miss to fatal, stage, discovery, contributing factors, patient and medication.
2. **Learn.** The learning recorded on the incident.
3. **Act.** A corrective action with an owner, due date and status.
4. **Review.** Linked to a CQI meeting and checked at the next one.
`[Layout: current wave has 5 labels; PDF has 4 steps. Design needs one label removed.]`

### CTA
**Eyebrow:** Built for pharmacy safety
**H2:** Report in minutes. / Improve every month.
**Button:** Book an Assure demo

### PDF content with no slot on the current page
- **National reporting to ISMP Canada.** `[NEW BLOCK – needs design]` or fold into the "Beyond the report" rows above.
  **Body:** Assure submits incident data to ISMP Canada's National Incident Data Repository (NIDR). Your pharmacy contributes to national medication safety learning without re-entering data. **Link:** Learn about NIDR (https://ismpcanada.ca/resource/nidr/) `[CONFIRM: NIDR status]`

---

## Self-assessment · /products/assure/self-assessment

**SEO title:** Pharmacy safety self-assessment and action plan | ZeeNovo Assure
**Meta description:** 63 questions across six safety domains. Get a Pharmacy Safety Score, gaps by domain, an action plan with owners and a PDF report.

### Hero
**Eyebrow:** ZeeNovo Assure
**H1:** Find the gaps / before an inspector does.
**Body:** 63 questions across six safety domains. Get your score, your gaps and an action plan with owners.
**Buttons:** Book an Assure demo · Start free trial
**Media:** Sample self-assessment report (synthetic data) `[NEW – hero currently uses portrait + timer]`

### twoCard: "Two assessments, in the price"
`[CONFIRM: current right card describes the ISMP MSSA as included and tracked. PDF does not claim this. Replace with:]`
**Eyebrow:** What you get
**H2:** A score, a plan / and the evidence.
- **Left: Pharmacy self-assessment.** How your site's practices measure up, across six safety domains. **Chips:** Pharmacy Safety Score · Strengths · Gaps · Action plan
- **Right: The report.** A downloadable record of where you stand and what you are fixing. **Chips:** PDF report · Owners assigned · Due dates · Reviewed at CQI

### Steps: "From gap to action"
**Eyebrow:** From gap to action
**H2:** Every gap gets an owner.
**Side:** Results become corrective actions, not a PDF in a drawer.
1. **Assess.** Complete it as a team.
2. **Score.** Strengths and gaps by domain.
3. **Plan.** Turn each gap into an action.
4. **Assign.** Set an owner and a due date.
5. **Review.** Check progress at the CQI meeting.

### CTA
**Eyebrow:** Built for pharmacy safety
**H2:** No surprises on / inspection day.
**Button:** Book an Assure demo

---

## Analytics · /products/assure/analytics

**SEO title:** Pharmacy incident analytics for CQI | ZeeNovo Assure
**Meta description:** Incident trends by degree of harm, medication, process stage, contributing factor and discovery. Bring the evidence to every CQI meeting.

### Hero
**Eyebrow:** ZeeNovo Assure
**H1:** See the pattern / before it repeats.
**Body:** Incident trends by medication, process stage, contributing factor and discovery. The chart and the case sit in the same CQI discussion.
**Buttons:** Book an Assure demo · Start free trial
`[Fixes PDF subhead, which used rhetorical questions.]`

### featureIndex: "Four ways analytics works harder for you"
**Eyebrow:** Analytics
**H2:** What the dashboard / shows you.
**Side:** Dashboards update as reports come in.
- Incidents and near misses by degree of harm, medication and process stage.
- Contributing factors that repeat.
- Discovery: who caught it, and at which stage.
- Patient demographics across incidents.
- Compliance dashboard: open incidents, overdue SOP sign-offs and CQI follow-ups.
`[CONFIRM: current feature ids "insightAlerts", "performanceView", "scheduledReports", "crossProduct" are not in the PDF.]`

### Features: "Every view, cut the way you need it"
**Eyebrow:** What you can see
**H2:** Filter to the / cause, not the noise.
**Body:** Filter by degree of harm, medication, process stage, contributing factor and discovery.
**Rows:**
- **Incidents and near misses.** By degree of harm, medication and stage.
- **Repeating factors.** The contributing factors that keep appearing.
- **Follow-through.** Corrective actions and CQI follow-ups, open or complete.
`[CONFIRM: current rows "Store comparison" and "Goal progress" not in PDF.]`

### Features: "Benchmarking / Know where you really stand"
`[CUT – peer benchmarking, exports and cross-product insight are not in the PDF. Remove the block, or confirm the features exist and keep current copy.]`

### CTA
**Eyebrow:** Built for pharmacy safety
**H2:** Bring the numbers to / your next CQI meeting.
**Button:** Book an Assure demo

---

## SOPs and staff training · /products/assure/sops-and-training `[NEW PAGE]`

**SEO title:** Pharmacy SOP management and staff sign-off | ZeeNovo Assure
**Meta description:** Assign the current SOP version, record every staff acknowledgement and assess competency by role. Version history ready for inspection.

### Hero (reuse `hero`)
**Eyebrow:** ZeeNovo Assure
**H1:** The current SOP. / The right people. / Proof they read it.
**Body:** Assign each new version to the staff who use it. See who has signed off, and who is overdue.
**Buttons:** Book an Assure demo · Start free trial

### How it works (reuse `steps`, 4 items)
**Eyebrow:** SOP library
**H2:** Every version, / every sign-off.
**Side:** A record of who trained on what, and when.
1. **Start from a template.** Adopt a ZeeNovo SOP and adapt it for your pharmacy.
2. **Keep every version.** Compare ZeeNovo template updates with your version and choose what to bring across.
3. **Assign and confirm.** Set a due date. Marked complete only when the person acknowledges it.
4. **See who's done.** The compliance dashboard shows complete and overdue staff.

### Competency by role (reuse `features`, 3 rows)
**Eyebrow:** Staff competency
**H2:** Assess staff on / the work they do.
**Body:** 43 modules, 258 questions, scored by module. Managers see where a refresher is needed and assign the right SOP.
**Rows:**
- **Pharmacists and managers.** Clinical decisions, medication safety, documentation, patient communication, incident management.
- **Pharmacy technicians.** Dispensing accuracy, storage, workflow safety, SOP familiarity.
- **Pharmacy assistants.** Intake accuracy, privacy, workflow support, communication.

### CTA (reuse `cta`)
**Eyebrow:** Built for pharmacy safety
**H2:** Show who trained / on what, and when.
**Button:** Book an Assure demo

---

## ZeeNovo Magistral · /products/magistral

`[CONFIRM: current Magistral copy is placeholder. Everything below is from the PDF. Confirm ZeeNovo has approved this scope, and the "Early access" status, before publishing.]`

**SEO title:** ZeeNovo Magistral | Non-sterile compounding software
**Meta description:** Versioned master formulas, a formula engine that refuses unsafe inputs, PIN-signed batch records and lot-to-patient recalls. Built around NAPRA standards.

### Hero
**Eyebrow:** ZeeNovo Magistral · Early access
**H1:** Non-sterile compounding. / Calculated, signed / and traceable.
**Body:** Versioned master formulation records, server-side calculations, PIN-signed batch stages and lot-to-patient recall tracing. Built around the NAPRA Model Standards for non-sterile compounding.
**Buttons:** Ask about early access · Book a Magistral demo

### featureIndex: "Every preparation, traceable" (proposed tab structure)
**Eyebrow:** Compounding
**H2:** Every preparation, / traceable.
**Side:** From the master formula to the recall, on one record.

- **Tab 1: Master formulas.** One approved version in use at a time.
  - A version for every change. Past batches keep the version they used.
  - Second-pharmacist approval. Authors cannot approve their own formula.
  - Cited beyond-use date reference required before a formula goes active.
  - Starter formula library to adopt and adapt.
- **Tab 2: Formula engine.** Calculations done on the server and tested against worked examples.
  - Scales to any batch size, with overage for capsules and liquids.
  - q.s. and q.s. ad; % w/w, % w/v, % v/v, mg/mL, mg/g, ratio and mg per unit.
  - Salt-to-base conversion and potency correction from the certificate of analysis.
  - Capsule count and filler weight; suppository base with displacement factors and mould calibration; suspensions from crushed tablets.
  - Minimum weighable quantity checks with a suggested trituration.
  - Refuses unsafe inputs: negative q.s., missing density, unreferenced salt form, drug that won't fit the mould.
- **Tab 3: Risk assessment.** Guided NAPRA decision tree to Level A, B or C. The pharmacist answers each question; the path is saved with the formula.
- **Tab 4: Batch records.** No skipped steps, no self-verification.
  - Fixed stages: Materials → Compounding → QC → Verify → Release. Voiding needs a reason.
  - PIN e-signatures stored with the signer's role. A second person verifies and releases.
  - Release blocked until every QC check passes, every step is complete, a lot is assigned and the formula is cited.
  - Competency gates: staff with lapsed competency cannot sign.
  - CAPA gates: a voided batch cannot be remade until its CAPA is closed.
  - Post-release changes need an owner or manager PIN and a reason.
- **Tab 5: Ingredients and inventory.** Only usable stock can be selected.
  - Master ingredient list with salt factor, density, controlled schedule and hazard fields.
  - Certificates of analysis and SDS stored per ingredient.
  - Vendors, pack sizes, prices, purchase orders and receiving.
  - Quarantine on receipt. Expired stock and out-of-range potency rejected.
  - Quarantined, expired or recalled lots cannot be selected.
  - Low-stock flags, reorder points, lots listed by earliest expiry.
  - Ingredient versions: your pharmacy stays on its accepted version until a manager accepts an update. History kept for past batches.
- **Tab 6: Recalls.** Lot to batch to patient in one step.
  - Recall a lot and see affected batches, patients and the number to contact.
  - Contacts and returns logged. Closing a recall needs a PIN, and only once every contact is logged.
- **Tab 7: Quality and logs.** Inspection records kept as you work.
  - Temperature, cleaning, calibration and hazardous handling logs. Out-of-range temperature raises a deviation automatically.
  - Equipment register with calibration history. Batches blocked when the balance is out of calibration.
  - Deviations, CAPA, complaints and periodic log reviews, each e-signed. Complaints link to a deviation and CAPA.
  - Controlled substance register with witnessed entries, reconciliation, and loss and theft reporting.
- **Tab 8: Pricing.** Quote a compound in seconds.
  - Price calculated from the formula's ingredients and quantities.
  - Dispensing and compounding fees, including time-based fees, set once.
  - Every pharmacist quotes the same preparation the same way.

### Features: "Inspection-ready compounding records"
**Eyebrow:** Readiness
**H2:** Inspection-ready / compounding records.
**Body:** Built around the NAPRA Model Standards for non-sterile compounding. Your pharmacy remains responsible for compliance.
**Rows:**
- **Signed at every stage.** Compounding, verification and release each carry a PIN signature and role.
- **Full traceability.** Formula version, ingredient lots and patients linked on every batch.
- **Controlled changes.** Amendments after release need a manager PIN and a reason.
`[CONFIRM: current rows "Exports" and "Linked to Assure" conflict with PDF, which lists report exports as not included and does not mention an Assure link. Replaced above.]`

### CTA
**Eyebrow:** Built for compounding
**H2:** Every batch, / on the record.
**Body (if supported):** Bring one formula you make every week to the demo.
**Button:** Ask about early access

### PDF content with no slot on the current page
- **Story: "Naltrexone 4.5 mg capsules, from formula to recall."** `[CUT – narrative. Every fact in it is now in the tabs above.]` If a summary block is wanted, `[NEW BLOCK – reuse steps]`:
  **H2:** One record from formula to recall.
  1. **Formula.** Approved version, cited beyond-use date.
  2. **Calculate.** Scaled batch, filler and trituration worked out.
  3. **Compound.** Only usable lots and calibrated equipment.
  4. **Verify and release.** Second-person PIN sign-off.
  5. **Recall.** Lot traced to batches and patients; closed when every contact is logged.
- **Not included today.** `[NEW BLOCK – needs design; short list or note under featureIndex]`
  Label printing (on-screen preview only) · Report exports · Automatic beyond-use date calculation · Automatic lot selection by expiry · Multi-location management · Sterile compounding
- **FAQ.** `[NEW BLOCK – reuse faq]`
  - **Is Magistral NAPRA-certified?** NAPRA does not certify software. Magistral is built around the NAPRA Model Standards for non-sterile compounding. Your pharmacy remains responsible for compliance.
  - **Does it handle sterile compounding?** No. Non-sterile preparations only.
  - **Can we bring our existing formulas?** Yes. Tell us how you keep them today and we will plan setup with you.
  - **Does the formula engine replace the pharmacist's check?** No. It does the arithmetic and refuses unsafe inputs. A pharmacist approves every formula. A second person verifies every batch.
- **Technical sheet download.** `[NEW BLOCK – needs design]`
  **Title:** ZeeNovo Magistral: technical overview (PDF)
  **Body:** Two pages for compounding pharmacists: formula engine calculations, batch stages and sign-offs, lot and recall handling, quality records.
  **Button:** Download the technical sheet `[CONFIRM: PDF asset exists]`

---

## ZeeNovo Sites · /products/sites

**SEO title:** ZeeNovo Sites | Pharmacy website with live booking
**Meta description:** A branded pharmacy website that takes bookings 24/7 into your ZeeNovo calendar. Service pages, waitlist and prescription requests. Included with every plan.

### Hero
**Eyebrow:** ZeeNovo Sites
**H1:** A pharmacy website / that books patients / around the clock.
**Body:** Your services, hours and location on a mobile-friendly site, booking live into your ZeeNovo calendar. Included with every plan.
**Buttons:** Get your website · Book a demo

### featureIndex: "Built to fill your clinical calendar" (3 tabs)
**Eyebrow:** All features
**H2:** Built to fill your / clinical calendar.
**Side:** The site runs on your ZeeNovo services and calendar, so it is never out of date.
- **Tab 1: Your website.** Branded, and found in local search.
  - Seven themes with your name, logo and colours, on your ZeeNovo web address.
  - Ready-made pages for vaccines, minor ailments and every service you offer.
  - A page for each minor ailment you offer, created when you turn the service on, with your name, town and booking link.
  - An About page drafted from your hours, location and services. You edit before publishing. No patient information is used. `[CONFIRM: AI drafting conflicts with home page line "no AI touches patient care". Wording is compatible only if the home line is scoped to clinical care. Align both.]`
  - Included with every plan.
- **Tab 2: Booking.** Patients book what you offer, when you offer it.
  - Live booking with screening questions, consent and a one-time code.
  - Group and family bookings.
  - Waitlist for full services.
  - Prescription requests: new, refill, renewal and transfer.
  - A booking link for each service, for social media, email or posters.
- **Tab 3: Stay current.** Always in step with your pharmacy.
  - Live sync with your ZeeNovo services and calendar.
  - Turn a service on or off from your dashboard.
  - Email and SMS confirmations.
  - Voice booking into the same calendar.
  - Listed in ZeeNovo Central. *Launching soon.*
`[CONFIRM: current tab "Sync and tracking" includes "bookingSource" (booking source tracking). PDF mentions booking source only for Central/Enterprise.]`

### Features: "Your storefront, separate from the portal"
**Eyebrow:** Website and portal
**H2:** Your storefront, / separate from the portal.
**Body:** The website brings in new patients. The Patient Portal is where existing patients sign in. Use either or both.
**Rows:**
- **Public website.** Anyone can find your pharmacy and book.
- **Patient Portal.** Signed-in patients manage their own visits.
- **Same calendar.** Both book into one schedule.

### ctaSplit
**Eyebrow:** Built for independent pharmacy
**H2:** Launch your website / with your first service.
**Line:** Pick your services and brand. We publish the site.
**Buttons:** Book a demo · Get started
**Floating card:** **Bookings around the clock.** Patients book after hours, into your calendar.

### PDF content with no slot on the current page
- **Condition pages on your website.** Folded into Tab 1 above. If a dedicated block is wanted, `[NEW BLOCK – reuse features]`:
  **H2:** Get found by patients / searching nearby.
  **Body:** A page for each minor ailment you offer, built for local search, with booking on the page.
  **Rows:** **One page per condition.** Created when you turn the service on. · **Built for local search.** Your name, town and booking link on every page. · **Book from the page.** Straight into that service's booking.
- **FAQ.** `[NEW BLOCK – reuse faq]`
  - **How do patients give consent?** They tick a consent box and type the name of the person consenting: themselves or a family member.

---

## Patient Portal · /products/patient-portal

**SEO title:** Patient Portal | Online pharmacy appointments and refills
**Meta description:** Patients view, reschedule and cancel appointments, request prescriptions and answer follow-ups online. Fewer calls, every request in one queue.

### Hero
**Eyebrow:** ZeeNovo Patient Portal
**H1:** Fewer calls to the counter. / Patients manage / their own visits.
**Body:** Patients sign in to reschedule or cancel appointments, request prescriptions and answer follow-up and dose-reminder questions. Every action lands in your queue.
**Buttons:** Book a demo · See the patient experience

### featureIndex: "What patients can do without calling"
**Eyebrow:** Self-service
**H2:** What patients can do / without calling.
**Side:** Every action reaches the pharmacy's queue with a clear status.
- Book by voice, in plain language, matched to a service and open time.
- Sign in with email, password and a one-time code.
- View, reschedule or cancel appointments.
- Request prescriptions and track their status.
- Answer follow-up questions through a secure link.
- Respond to dose reminders and book the next dose.
- Keep their profile and family physician on file.

### Wave: "Self-service that comes back to you"
**Tag:** For the pharmacy
**H2:** Self-service that / comes back to you.
**Body:** Every reschedule, cancellation and request arrives in the pharmacy's queue with a clear status.
**Labels:** Fewer phone calls · Requests in one queue · Patients rebook with you · Individual patient logins
`[CONFIRM: current label "More repeat bookings" implies a measured outcome; PDF says "Patients rebook with the same pharmacy". Used softer wording.]`

### CTA
**Eyebrow:** Get started
**H2:** Give your patients / a better front door.
**Button:** Book a demo

### PDF content with no slot on the current page
- **Story: "Priya reschedules her second shingles dose at 11 p.m."** `[CUT – narrative. Value is carried by the wave body above.]`
- **FAQ.** `[NEW BLOCK – reuse faq]`
  - **Do patients need an account to book?** No. They can book on your pharmacy website. An account lets them manage visits and requests in one place.
  - **Does the portal cost patients anything?** No. Some pharmacy services have fees, as they do in person.
  - **Can patients book for their family?** Yes, with group booking.

---

## Condition page template · /[pharmacy]/conditions/[condition] `[NEW PAGE – template on each pharmacy's ZeeNovo website]`

Patient-facing. Replace [Condition], [Pharmacy name], [Town], [Province] per page.

**SEO title:** [Condition] treatment at [Pharmacy name], [Town]
**Meta description:** See a pharmacist at [Pharmacy name] in [Town] about [condition]. Book online. No doctor's appointment needed.

### Hero (reuse `hero`)
**H1:** [Condition]? / See a pharmacist at / [Pharmacy name].
**Body:** Pharmacists in [Province] can assess [condition]. Book online and answer a few questions before you arrive.
**Button:** Book an assessment

### How it works (reuse `steps`, 4 items)
**H2:** How it works.
1. **Book online.** Choose a time that suits you.
2. **Answer a few questions.** Your pharmacist sees them before you arrive.
3. **See the pharmacist.** They assess you and decide the next step, which may be a prescription or a referral to your doctor.
4. **Follow-up.** You may get an email asking how you are doing.

### What to bring (reuse `cards` or simple list)
Your health card · A list of the medicines you take · Your family doctor's name, if you have one

### When to get urgent care (reuse `features` note or alert block `[NEW BLOCK – needs design]`)
If you have severe symptoms or feel very unwell, go to the nearest emergency department or call 911.

### FAQ (reuse `faq`)
- **Is there a cost?** Many pharmacist assessments are covered by your provincial health plan. Ask the pharmacy if a fee applies.
- **Do I need an appointment?** Booking means less waiting. You can also walk in during opening hours.

**Footer line:** [Pharmacy name] · [Address] · [Phone] · [Hours]

---

## Voice booking · /products/voice-based-appointment-booking

`[CONFIRM: rename. Current site labels this "ZeeNovo Intelligence" (eyebrow, home card, footer). PDF uses "Voice booking". Apply one name everywhere.]`

**SEO title:** Voice appointment booking for pharmacies | ZeeNovo
**Meta description:** Patients book by speaking in plain language. ZeeNovo matches the service and an open time and books it into your calendar. No forms.

### Hero
**Eyebrow:** ZeeNovo Voice booking
**H1:** Patients book / by speaking.
**Body:** Patients say what they need in plain language. ZeeNovo matches the service and an open time and books it into your calendar.
**Buttons:** Try it now · Book a demo

### Steps: "From a sentence to a booking"
**Eyebrow:** How it works
**H2:** From a sentence / to a booking.
**Side:** No menus. No forms.
1. **Speak.** "I need a flu shot this week."
2. **Match.** The right service is found.
3. **Choose.** Open times are offered.
4. **Confirm.** The booking appears in your calendar.

### Features: "Easier for every patient to book"
**Eyebrow:** Accessibility
**H2:** Booking for patients / who find forms hard.
**Body:** Opens online booking to older patients and people with limited vision or mobility.
**Rows:**
- **Plain language.** No clinical terms needed.
- **Booking only.** It books appointments. It does not give health advice.
- **Same intake and calendar.** Screening runs in your pharmacy's intake; times come from your availability.
`[CONFIRM: current row "Booking source recorded" (see which bookings came by voice) not in PDF. Replaced with "Booking only".]`

### CTA
**Eyebrow:** Get started
**H2:** Add voice booking / to your pharmacy.
**Button:** Book a demo


---

# Part 3 · Solutions, Enterprise, Central, Platform, Provinces

## Solutions overview · /solutions

**SEO title:** Pharmacy software by role and pharmacy type | ZeeNovo
**Meta description:** ZeeNovo for independent pharmacies, owners, pharmacists, patients and pharmacy groups. Booking, clinical services and safety on one platform.

### Hero
**H1:** One platform. / Set up for your role.
**Description:** Owners get revenue and compliance visibility. Pharmacists get guided visits and generated records. Groups get network reporting. Patients get online booking.
**Buttons:** Book a demo · See pricing

### Cards · Solutions for (5 + 1)
**H2:** Find your starting point.
- **Independent pharmacies.** Booking, clinical services and a safety program, with no per-user fees and no IT project.
- **Pharmacy owners.** Estimated clinical revenue by service and pharmacist, plus open safety actions.
- **Pharmacists.** Guided screening, red flags at the point of decision and documents generated from the visit.
- **Patients.** Book a visit, request a prescription and get dose reminders online.
- **Inspection readiness.** Incident, CQI, SOP, clinical and compounding records kept as the work is done. `[NEW CARD – page is new]`
- **Multi-location groups.** Network reporting, a branded booking platform and one inbox per pharmacy. Launching soon.

### CTA
**H2:** See ZeeNovo with / your own services.
**Button:** Book a demo

---

## Independent pharmacies · /solutions/independent-pharmacies

**SEO title:** Software for independent pharmacies | ZeeNovo
**Meta description:** Online booking, guided clinical services, automated follow-up and a safety program. Unlimited users, website included, no IT project.

### Hero (solutionHero)
**Eyebrow:** Independent pharmacies
**H1:** Big pharmacy tools, / for a pharmacy with / one front door. *(keep approved line)*
**Description:** Online and voice booking, guided clinical services, automated follow-up and a safety program. No per-user fees. No IT project. Set up in about a day. `[CONFIRM: "set up in a day" needs a source]`
**Button:** Book a demo
**Secondary (if slot allows):** Start free trial

### Reality · 3 cards
**H2:** The week-to-week reality
1. **Clinical time is capped by admin.** Booking, documentation, fax and follow-up are done by hand, so fewer funded services get delivered.
2. **Chains have booking and reminders. Most independents don't.** Patients book where booking is easiest.
3. **Manual paperwork erodes service margin.** Each assessment adds documentation, a physician fax and a follow-up call.

### Wave · How the picture changes (4 labels on the approved design)
**H2:** How the picture changes
**Labels:** Admin automated · Online storefront · Clinical revenue tracked · No IT project
*(Replaces "Automation as staff" and "Competing storefront": both read as metaphors.)*

### Step cards · 5
**Eyebrow:** A better week
**H2:** Less admin around the care. *(keep)*
1. **Services published.** Your website lists every service you offer, with live booking.
2. **Bookings organised.** Patients choose the service and time. Walk-ins join the same queue.
3. **Visits guided.** Screening, red flags and documents are produced during the visit.
4. **Follow-ups sent.** Email follow-up runs automatically. Only flagged responses return to the team.
5. **Billing ready.** The billing PIN for the service, mode and outcome is shown on every visit.

### CTA
**H2:** Keep the independence. / Lose the operational drag. *(keep approved line; PDF's "Lose the paperwork" is also acceptable)*
**Buttons:** Book a demo · Start free trial

### PDF content with no slot on the current page
**What an independent pharmacy gets (5 tabs)** `[NEW BLOCK – needs design; reuse featureIndex]`
- **Automation.** Automated email follow-up · Dose reminders · Documents generated from the visit · Built-in fax
- **Storefront.** Branded pharmacy website · Live booking · Voice booking · A booking link per service · Group bookings and waitlist
- **Clinical services.** 28 minor ailments · Guided screening · Red flags at the point of decision · Saved directions · Flu, COVID-19 and other vaccines `[CONFIRM: 28 vs "20+" on the current home counters]`
- **No IT project.** Set up in a day · CSV patient import · Unlimited users · No per-seat fees · Website included
- **Safety program.** Incident and near-miss reporting · CQI meetings · Pharmacy self-assessment · SOP sign-off

---

## Pharmacy owners · /solutions/pharmacy-owners

**SEO title:** Clinical revenue and compliance visibility for owners | ZeeNovo
**Meta description:** Estimated clinical revenue by service and pharmacist, staff productivity, follow-up status and open safety actions, from work your team already records.

### Hero (solutionHero)
**Eyebrow:** Pharmacy owners
**H1:** Clinical revenue / you can see, / and grow. *(keep)*
**Description:** Estimated revenue by service and pharmacist, staff productivity and open safety actions, reported from the visits and records your team already completes in ZeeNovo.
**Buttons:** Book a demo · See pricing

### Reality · 3 cards
**H2:** What owners can't see today.
1. **No revenue view by service.** Services are delivered, but no report shows which ones grew or who delivered them.
2. **Staff hours limit new services.** Each added service needs time the team doesn't have.
3. **Compliance evidence is assembled late.** Inspection prep starts when the notice arrives.

### Wave · How the picture changes (4 labels)
**Labels:** Revenue by service · Fewer missed claims · Hours back per visit · Records ready for inspection

### Step cards · 5
**Eyebrow:** Where the revenue comes from
**H2:** Funded services, / fully captured.
**Side:** Provincial programs pay for minor ailment assessments, medication reviews and publicly funded vaccines. The constraint is time per visit and visits never booked.
1. **More visits booked.** Website, voice booking, service links, group bookings and a waitlist.
2. **Less time per visit.** Intake done before the pharmacist starts. Documents and fax generated from the visit.
3. **Fewer missed claims.** The billing PIN for the service, mode and outcome is on every visit.
4. **Patients brought back.** MedsCheck invitations and dose reminders sent automatically.
5. **Revenue reported.** Estimated revenue by service and pharmacist, every month.
**Button:** Open the ROI calculator

### Feature index · Features for owners
**H2:** The numbers and controls / owners ask for. *(keep)*
- **Estimated revenue by service and pharmacist.** Calculated per completed visit from your province's fees.
- **Staff productivity and top services.**
- **Billing PIN on every visit.** Fewer lookups. Fewer claim errors.
- **Follow-up status** across your patients.
- **Open safety actions.** Open incidents, overdue SOP sign-offs and CQI follow-ups.
- **Unlimited users.** No per-seat fees.
- **Set up in a day.** Import patients, choose services, start booking. `[CONFIRM: setup time source]`
**Note:** ZeeNovo estimates revenue and shows billing PINs. It doesn't submit claims.

### CTA (ctaSplit)
**H2:** Know what your pharmacy / delivered this month. *(keep)*
**Buttons:** Book a demo · See pricing

---

## Pharmacists · /solutions/pharmacists

**SEO title:** Clinical workflow software for pharmacists | ZeeNovo
**Meta description:** Guided screening, red flags at the point of decision, documents and physician fax generated from the visit, and follow-up by exception.

### Hero (solutionHero)
**Eyebrow:** Pharmacists
**H1:** More time with / the patient. Less / with the form. *(keep)*
**Description:** Guided screening, red flags where you decide, and documents generated from the visit. Every clinical decision stays with you.
**Buttons:** Book a demo · See minor ailments

### Reality · 3 cards
**H2:** The work around / the work. *(keep)*
1. **Criteria held in memory.** Each condition has its own criteria. Each province has its own rules.
2. **Documentation after hours.** Notes wait until the queue is clear.
3. **Follow-up calls get dropped.** Calling every patient back isn't possible on a busy shift.

### Wave · How the picture changes (4 labels)
**Labels:** Intake done before you · Screening guided · Record generated · Follow-up by exception

### Step cards · 6 (current block shows 5; merge 5 and 6 if count is fixed)
**Eyebrow:** A better shift
**H2:** Less admin around / the consultation. *(keep)*
1. **Intake complete.** Technicians finish intake and mark the visit ready for you.
2. **Screening guided.** The next question follows from the last answer.
3. **Decision recorded.** Your saved directions and protocol notes. Your decision.
4. **Record generated.** Documents and the physician fax are produced from the visit.
5. **Billing PIN shown.** No lookup.
6. **Follow-up sent.** Only patients who need you come back.

### CTA (ctaSplit)
**H2:** Practise to your full / scope, with support. *(keep)*
**Buttons:** Book a demo · See minor ailments

---

## Patients · /solutions/patients

**SEO title:** Book a pharmacy service online | ZeeNovo
**Meta description:** Book a minor ailment visit or vaccine, request a refill, and get dose reminders from your own pharmacy. Free for patients.

### Hero (solutionHero)
**Eyebrow:** Patients
**H1:** Your pharmacy, / open for booking / any time. *(keep; PDF "Book your pharmacy visit any time." also fits)*
**Description:** Book a minor ailment visit or vaccine, request a refill and get reminders, with the pharmacy you already use.
**Buttons:** Find a pharmacy · Patient login `[CONFIRM: "Find a pharmacy" depends on ZeeNovo Central, which is launching soon]`

### Feature index · What you can do
**H2:** Less waiting. / Fewer phone calls. *(keep)*
- **Book online or by voice.** Choose a service and time, or say what you need.
- **Manage appointments.** Reschedule or cancel online.
- **Request prescriptions.** Refill, renewal or transfer without a phone call.
- **Reminders and follow-ups.** Dose reminders, follow-up questions and a link to book again.
- **Book for your family.** Several people in one appointment.
- **Answer questions before you arrive.** Your pharmacist has your answers when you get there.

### Features · Your information
**H2:** Your health information / stays protected. *(keep)*
- **Your own login.** Only you and your pharmacy see your bookings.
- **Family doctor saved once.** Not repeated at every visit.
- **Stored in Canada.** Your pharmacy is responsible for your record. ZeeNovo stores it in Canada.

### FAQ
- **Do I need an account to book?** No. Book on your pharmacy's website. An account lets you manage bookings and requests in one place.
- **Is there a cost to use the portal?** No. Your pharmacy may charge for some services, as it does in person.
- **Can I book for my family?** Yes. Group booking covers several people in one appointment.

### CTA
**H2:** Find a pharmacy / near you.
**Button:** Find a pharmacy

---

## Inspection readiness · /solutions/inspection-readiness `[NEW PAGE]`

**SEO title:** Pharmacy inspection readiness: OCP and NAPRA records | ZeeNovo
**Meta description:** Incident, CQI, SOP, visit, vaccine and compounding records kept as work happens, so they're ready when an OCP assessor or inspector asks.

### Hero · reuse solutionHero
**Eyebrow:** Inspection readiness
**H1:** Assessment records, / kept as you work, / ready on request.
**Description:** ZeeNovo records the evidence assessors ask for during daily work, across your safety program, clinical services and compounding. No binder rebuild before the visit.
**Buttons:** Book a demo · See Assure

### Evidence map · reuse table
**Eyebrow:** Evidence on request
**H2:** What assessors ask for, / and where it lives.
| What you're asked | Where it is in ZeeNovo |
|---|---|
| How do you manage medication incidents and near misses? | Assure: each incident with contributing factors, learnings and corrective action. |
| Show us your CQI process. | Assure: CQI minutes, attendees, linked incidents and follow-ups. |
| Are your SOPs current, and has staff read them? | Assure: SOP version history and who acknowledged which version, and when. |
| How do you know your staff are competent? | Assure: role-based competency results by module. |
| Have you assessed your own practice? | Assure: self-assessment report and action plan. |
| Show the documentation for this assessment. | Clinical: visit record, outcome, prescription and physician notification. |
| Was the physician notified? | Clinical: fax log with each fax's status. |
| Which lot did this patient receive? | Clinical: DIN, lot, expiry, route, site and administering pharmacist on every vaccine. |
| Show this compounded batch record. | Magistral: formulation record version, ingredient lots, PIN-signed compounding, verification and release. `[CONFIRM: Magistral is early access]` |
| Is your equipment calibrated? | Magistral: equipment register and calibration history. |
| Show your cleaning and temperature logs. | Magistral: cleaning, temperature and environment logs with e-signed periodic reviews. |
| How do you handle deviations? | Magistral: deviations and CAPA through to the effectiveness check. |

### Readiness built in · reuse cards (3)
**Eyebrow:** Readiness is part of the work
**H2:** Records made during the work, / not reconstructed after it.
- **Every action has an owner and a date.** Nothing is lost between CQI meetings.
- **Sign-offs are recorded.** SOP acknowledgements, compounding e-signatures and log reviews show who did what, and when.
- **Check yourself first.** Run the pharmacy self-assessment before your assessment and close the gaps.
**Note:** OCP and NAPRA don't approve or endorse software. ZeeNovo keeps the records your practice needs.

### CTA · reuse cta
**H2:** Walk into your next / assessment prepared.
**Button:** Book a demo

---

## ZeeNovo Enterprise · /solutions/multi-location-groups

**SEO title:** ZeeNovo Enterprise | Software for pharmacy groups and chains
**Meta description:** Network analytics across Clinical and Assure, a branded booking platform and one inbox per pharmacy. Aggregate, de-identified reporting only. Launching soon.

### Hero (solutionHero)
**Eyebrow:** ZeeNovo Enterprise · Launching soon
**H1:** Run, see and speak / to your whole network / from one place. *(keep)*
**Description:** A branded booking platform, a network dashboard across Clinical and Assure, and one inbox in every member pharmacy. The group sees aggregate, de-identified data only.
**Buttons:** Join early access · Book a network demo
**Floating card:** "Network view · This month" · Active pharmacies 42 of 48 · 6 onboarding · Formulary update sent to all Ontario locations · caption *Illustrative example* (keep only with the caption visible)

### Reality · 3 cards
**H2:** Running a network / from the outside in. *(keep)*
**Side:** Groups are accountable for results they can't see.
1. **No common reporting.** Each store reports in its own format and timing, so results don't compare.
2. **No read receipts.** Network-wide updates go by email with no record of who read them.
3. **Booking split across sites.** The group brand is on the sign, but booking runs on separate pharmacy websites.

### Cards · 4
**Eyebrow:** What groups get
**H2:** Four layers above / your pharmacies. *(PDF; replaces "surfaces")*
**Side:** Built on the Clinical and Assure modules your pharmacies already use. Nothing changes at store level.
1. **Chain booking platform.** Patients choose a service, then a group pharmacy that offers it, on your brand and domain.
2. **Chain dashboard.** Network and pharmacy-level analytics across Clinical and Assure.
3. **Communication.** Send to the network, one province or one pharmacy. Messages land in one inbox per pharmacy.
4. **ZeeNovo Central.** Your pharmacies are listed in ZeeNovo's public directory by location and service. `[CONFIRM: Central launch timing]`

### Features · Privacy by design
**Eyebrow:** Privacy by design
**H2:** Aggregate and / de-identified. Always. *(keep)*
**Description:** Enterprise users see counts, rates and trends. They never see patients, records, notes or prescriptions.
- **Minimum group size.** Results appear only above a privacy threshold. Below it, the dashboard shows "insufficient data".
- **No patient identifiers.** Names, health card numbers, contact details, exact dates of birth, medication names, assessment answers and free-text notes never reach an enterprise screen.
- **Logged access.** Role-based access, with access and export logs.

### Feature index · All features (6 tabs)
**H2:** Every enterprise feature, / in one place. *(keep)*

**Tab 1 · Chain booking platform**
- **Your domain.** Start on a ZeeNovo subdomain (yourgroup.zeenovo.com). Point it to your own domain later.
- **Your brand.** Group name, logo and colours across the platform.
- **Service first.** Patients pick the service, then the pharmacy.
- **Only pharmacies that offer it.** Listed by province, filtered by the chosen service.
- **Booking in the pharmacy's own calendar.** Uses each pharmacy's existing ZeeNovo booking flow. No change for the store team.

**Tab 2 · Chain dashboard: Clinical**
Four layers: executive summary, program drill-downs, location comparison, methodology. Every figure compares with the previous period and breaks down by location where privacy thresholds allow.
*Executive summary, eight headline figures:* Active pharmacies · Module adoption rate · Clinical services completed · Unique patients served · Estimated service value · Appointment completion rate · Follow-up completion rate · Confirmed positive outcome rate

| Measure | What the group sees |
|---|---|
| Network status | Member locations: invited, onboarding, activated, inactive, suspended. Account setup shown separately from clinical activity. |
| Module adoption | Number and percentage of locations using Clinical, Assure, websites and online booking. |
| Program participation | Eligible and activated locations for minor ailments, flu, COVID-19, other vaccines, injections and medication reviews. |
| Services completed | Total, growth against the previous period, breakdown by program. Started and abandoned workflows counted separately. |
| Unique patients served | De-identified count with a completed service; new and returning trends where the threshold allows. |
| Location utilization | Active clinical locations, average and median services per location, spread and trend. |
| Estimated service value | From service values you set. Labelled as an estimate, not confirmed claims or payments. |
| Appointment fulfilment | Booked, completed, cancelled and missed, with completion, cancellation and no-show rates. |
| Booking origin | ZeeNovo Central, chain platform, pharmacy website, walk-in, staff entry, referral or campaign link. |
| Minor ailments | Completed assessments, prescription rate, self-care, red flags, referrals to physician, urgent care or emergency. |
| Flu and COVID-19 | Bookings, vaccinations, completion, walk-ins, cancellations and no-shows, per program. |
| Medication reviews | Completed reviews, issues identified, interventions, care plans, physician communications, follow-up actions and issue resolution. |
| Follow-up | Required, scheduled, delivered, responded and completed, by attempt, plus no response after all attempts. |
| Quality and CQI | Incident and CQI activity, SOP completion, staff assessment, self-assessment and corrective actions, from Assure. |

*Program drill-downs:* Minor ailments (volume by condition or broader category; completion, prescription, self-care, red flag, referral, follow-up coverage, response, improvement and escalation rates) · Flu and COVID-19 (bookings, walk-ins, doses, cancellations, no-shows; completion, consent and documentation rates; post-vaccination responses shown as reported concerns, never confirmed causes) · Medication reviews (issues, interventions, care plans, recommendation status, resolution; issue categories aggregate only) · Follow-up and outcomes (required through closed; outcomes always shown against valid responses).
*Location comparison:* Member pharmacies compared on the same definitions and thresholds.

**Tab 3 · Methodology**
Every calculation is documented. A number means the same thing at network, province and pharmacy level. Excluded records are listed, not silently dropped.
| Measure | Calculation | Safeguard |
|---|---|---|
| Program participation | Activated eligible locations ÷ eligible member locations | Count and percentage both shown |
| Module adoption | Locations actively using the module ÷ member locations | "Actively using" defined by a documented activity window |
| Appointment completion | Completed ÷ appointments whose time has passed | Cancellations and no-shows shown separately |
| Follow-up coverage | Follow-ups scheduled ÷ services requiring follow-up | Unscheduled follow-up never counted as completed |
| Follow-up response | Valid responses ÷ follow-ups due | Response rate shown beside outcome rate |
| Confirmed positive outcome | Resolved or improved ÷ valid outcome responses | Non-responders never counted as successes |
| Medication issue resolution | Resolved ÷ issues with a documented outcome | Pending and unknown kept separate |
| Escalation closure | Closed ÷ escalations requiring action | A response alone isn't clinical closure |

**Tab 4 · Chain dashboard: Assure**
Network and per-pharmacy quality analytics: incident and CQI activity, SOP completion, staff assessment and training, self-assessment, and corrective action completion.

**Tab 5 · Communication**
- **One inbox per pharmacy.** Group and ZeeNovo messages arrive in the same communication tab on the pharmacy dashboard.
- **Targeted sends.** Whole network, one province or one pharmacy.
- **Categorised.** For example, formulary updates and general updates.
- **Email as a nudge only.** Email flags that a message is waiting. The message lives in the dashboard.
- **Acknowledgement reports.** See which pharmacies have read each message.

**Tab 6 · Onboarding, roles and configuration**
- **Member import.** Send your member list. ZeeNovo imports locations and sends invitations.
- **Location status.** Invited, onboarding, activated, inactive or suspended. Activation is reported separately from clinical activity.
- **Configuration.** Group name, logo, colours, domain and the service values used to estimate care delivered.
| Capability | What it covers |
|---|---|
| View reporting | All dashboard layers. Always on. |
| Manage communication | Compose, publish, schedule, withdraw; view acknowledgements. Off by default. |
| Manage pharmacy network | Invite, resend, revoke, link and unlink locations. |
| Manage users | Invite, edit, deactivate and reactivate enterprise users. |
| Manage brand and domain | Brand, custom domain, DNS verification, ownership transfer. Primary Admin only. |
| Force lockout | Lock an account and end its sessions immediately. Primary Admin only. |
- **One Primary Admin, always.** Transferable to another active admin, never removed.
- **ZeeNovo support access** is separate from enterprise roles and logged separately.

### CTA (ctaSplit)
**H2:** One view of the network. / One voice to every store. *(keep)*
**Line:** Send us your member list. We handle the invitations.
**Buttons:** Join early access · Talk to us

### PDF content with no slot on the current page
**Full privacy safeguard list** `[NEW BLOCK – needs design; reuse cards or extend the Privacy features block]`
- **Minimum group size.** Below threshold, "insufficient data".
- **Protected totals.** A hidden figure can't be derived from surrounding totals.
- **Protected filters and exports.** No filter or export combination can cut a group below threshold.
- **Broader cuts when needed.** Broad age bands, weekly or monthly periods and broader clinical categories replace narrower cuts.
- **No patient identifiers** reach an enterprise screen.
- **No patient-level drill-down,** even when the location is known.
- **Same rules everywhere.** Cards, charts, tables, comparisons, rankings and downloads.
- **Full context on every percentage.** Numerator, denominator and response rate shown.
- **Logged access.** Role-based, with access and export logs.

**FAQ** `[NEW BLOCK – reuse faq]`
- **Can the group see patient records?** No. Aggregate, de-identified figures only. Records stay with each pharmacy.
- **Do our pharmacies change how they work?** No. Enterprise sits on the Clinical and Assure modules they already use.
- **Does ZeeNovo submit claims for the group?** No. Estimated service value is an estimate, not claims or payments.
- **Can we use our own domain?** Yes. Start on a ZeeNovo subdomain and point your domain to it when ready.
- **How do groups buy?** Through an enterprise agreement. Book a call to scope it.

`[CONFIRM: page is "Launching soon"; confirm which tabs are live at launch before publishing the full dashboard spec]`

---

## ZeeNovo Central · /products/zeenovo-central `[NEW PAGE]`

**SEO title:** ZeeNovo Central | Find a pharmacy by service and book
**Meta description:** Find a nearby pharmacy that offers the service you need, from flu shots to minor ailment assessments, and book online. Launching soon.

### Hero · reuse hero
**Eyebrow:** ZeeNovo Central · Launching soon
**H1:** Find a pharmacy by service. / Book in minutes.
**Description:** One directory of every pharmacy on ZeeNovo, searchable by location and service. Booking goes straight into the pharmacy's calendar.
**Buttons:** Find a pharmacy · List your pharmacy
**Web address:** central.zeenovo.com `[CONFIRM: domain live at launch]`

### For patients · reuse steps (4)
**Eyebrow:** For patients
**H2:** Start with the service.
1. **Choose a service.** Flu shot, COVID-19 vaccine, minor ailment assessment, medication review and more.
2. **Choose a pharmacy.** Listed by province. Only pharmacies offering that service appear.
3. **Book a time.** Booked directly into the pharmacy's ZeeNovo calendar.
4. **Answer intake questions.** The pharmacy has your answers before you arrive.

### For pharmacies · reuse features (4 rows)
**Eyebrow:** For pharmacies
**H2:** A new booking channel, / with nothing extra to manage.
- **Listed automatically.** Every ZeeNovo pharmacy can appear, by location and service.
- **Bookings in your calendar.** Central appointments land in your existing calendar.
- **Booking source tracked.** Each appointment shows whether it came from Central, your website, a walk-in, staff entry, a referral or a campaign link.
- **Listing stays current.** Turn a service on or off in ZeeNovo and the listing updates.

### Messages from ZeeNovo · fold into For pharmacies side text
ZeeNovo also sends product and program updates to the same communication tab on your pharmacy dashboard.

### FAQ · reuse faq
- **Does it cost patients anything?** No. Some pharmacy services carry fees, as they do in person.
- **How does my pharmacy get listed?** Every ZeeNovo pharmacy can be listed. Ask us to switch yours on.

### CTA · reuse cta
**H2:** Get found by patients / searching for your services.
**Button:** Book a demo

---

## Why ZeeNovo · /platform/why-zeenovo `[NEW PAGE]`

**SEO title:** Why ZeeNovo | Replace your booking tool, fax and binder
**Meta description:** Replace a separate booking tool, website builder, fax service and incident binder with one pharmacy platform. Website and unlimited users included.

### Hero · reuse hero
**Eyebrow:** Why ZeeNovo
**H1:** Replace four tools / with one platform.
**Description:** Most pharmacies run clinical services on a booking app, a fax machine, spreadsheets and a paper binder. ZeeNovo replaces them and removes the re-entry between them.
**Buttons:** Book a demo · Start free trial

### Comparison · reuse table
**Eyebrow:** Side by side
**H2:** Separate tools vs. ZeeNovo.
| Job | Separate tools | ZeeNovo |
|---|---|---|
| Booking | Generic app with no service or screening logic | Pharmacy website with live booking, screening and voice booking |
| Intake | Paper forms, retyped later | Patients answer before the visit; technicians complete walk-in intake |
| Assessment | From memory, notes written later | Guided screening with red flags at the point of decision |
| Documentation | Handwritten or word processor | Prescription, assessment and physician notification generated from the visit |
| Physician notification | Printed and faxed, no record | Faxed from the visit, with a status log |
| Billing | PIN looked up per visit | Correct billing PIN shown on every visit |
| Follow-up | Phone calls when time allows | Automated email follow-up; only flagged responses return |
| Second doses | Manual tracking | Automatic dose reminders with a booking link |
| Incidents | Paper binder | Guided reporting, corrective actions and CQI meetings |
| SOPs | Shared drive | Assigned versions with staff acknowledgement |
| Performance | Month-end estimate | Estimated revenue by service and pharmacist |

### Cost consolidation · reuse twoCard or features
**Eyebrow:** Consolidation
**H2:** Fewer subscriptions. / No re-entry between them.
**Body:** Remove a separate booking tool, website builder, fax service and incident reporting subscription, and the staff hours spent moving data between them. Every plan includes your website and unlimited users. `[CONFIRM: "replace fax service" assumes built-in fax is included in all plans]`

### CTA · reuse cta
**H2:** See it as / one platform.
**Button:** Book a demo

---

## Clinical content we maintain · /platform/clinical-content `[NEW PAGE]`

**SEO title:** Clinical and quality content maintained for you | ZeeNovo
**Meta description:** Minor ailment question trees, a daily-synced drug catalogue, billing PINs, SOP templates and assessments, built and kept current by ZeeNovo.

### Hero · reuse hero
**Eyebrow:** Platform
**H1:** Clinical content, / built and kept current.
**Description:** ZeeNovo ships with the clinical and quality content already built, and maintains it. No blank form builder. No in-house content upkeep.
**Buttons:** Book a demo · Start free trial

### What we maintain · reuse cards (7)
**Eyebrow:** Maintained by ZeeNovo
**H2:** Content your team / doesn't have to build.
- **Minor ailment question trees.** Screening questions, red flags, stop criteria and reference notes for each condition.
- **Medicine catalogue.** Health Canada's Drug Product Database, about 58,000 products, synced daily, with DIN, ingredients, schedule and ATC code. `[CONFIRM: product count and sync frequency]`
- **Billing PINs.** Configured for each service, province, visit mode and outcome.
- **SOP templates.** A library of pharmacy SOPs to adopt and adapt.
- **Staff competency assessments.** 258 questions across 43 modules for four roles. `[CONFIRM: counts]`
- **Pharmacy self-assessment.** 63 questions across six safety domains. `[CONFIRM: counts]`
- **Compounding content.** Master formulation templates and an ingredient master list for Magistral.

### Updates you control · reuse features (3 rows)
**Eyebrow:** Change control
**H2:** We update the source. / You approve what changes.
- **SOP templates.** Compare each update with your version and choose what to adopt.
- **Ingredients.** You stay on the accepted version until a manager reviews and accepts the update.
- **Your own version.** Adapt any template. Your changes are kept.
**Note:** Your pharmacy reviews the content it uses. The pharmacist remains responsible for every clinical decision.

### CTA · reuse cta
**H2:** Start with the / content already built.
**Button:** Book a demo

---

## Integrations · /platform/integrations `[NEW PAGE]`

**SEO title:** Integrations | ZeeNovo
**Meta description:** ZeeNovo works alongside your pharmacy system: CSV patient import, Kroll medication history import, Health Canada drug data, built-in fax, email and SMS.

### Hero · reuse hero
**Eyebrow:** Platform
**H1:** Works alongside / your pharmacy system.
**Description:** ZeeNovo doesn't replace your pharmacy management system. It imports the data it needs and sends out what physicians and patients need.
**Buttons:** Book a demo · Start free trial

### Bring information in · reuse features (3 rows)
**Eyebrow:** Inbound
**H2:** Data in.
- **CSV patient import.** From your pharmacy system's CSV export, in the Patients tab.
- **Kroll medication history import.** Early access. Import a Kroll PDF into a MedsCheck review, with each medicine matched to Health Canada's Drug Product Database.
- **Health Canada Drug Product Database.** About 58,000 products, synced daily. `[CONFIRM]`

### Send information out · reuse features (4 rows)
**Eyebrow:** Outbound
**H2:** Data out.
- **Built-in fax.** Fax physicians from the visit, with each fax's status logged.
- **Email.** Booking confirmations, follow-up questions, dose reminders and MedsCheck invitations.
- **SMS.** Sign-in codes, booking confirmations and appointment status texts.
- **PDF documents.** Download any generated document.

### Inside ZeeNovo · fold into a short cards block (2)
- **One login** across Clinical, Assure and Magistral.
- **One calendar** for Sites and the Patient Portal.

### FAQ · reuse faq
- **Is ZeeNovo connected live to Kroll, Propel or HealthWatch?** No. ZeeNovo imports CSV patient lists and Kroll medication history PDFs. Prescriptions are still processed in your pharmacy system.

### CTA · reuse cta
**H2:** Tell us what / you use today.
**Button:** Book a demo

---

## Switching to ZeeNovo · /platform/switching-to-zeenovo `[NEW PAGE]`

**SEO title:** Switching to ZeeNovo | Setup plan for day one to month one
**Meta description:** What setup covers on day one, in week one and in month one: patient import, services, billing PINs, team, website, fax and your safety program.

### Hero · reuse hero
**Eyebrow:** Platform
**H1:** Live on day one. / Fully running in a month.
**Description:** Most pharmacies are set up in under a day. Below is the standard rollout from first login to first month. `[CONFIRM: "under a day" needs a source]`
**Buttons:** Start free trial · Book a demo
*(Replaces "Switching is easier than you think.": banned pattern.)*

### Rollout · reuse steps (3 cards, one per phase) or wave (3 labels)
**Eyebrow:** Rollout plan
**H2:** Day one. Week one. / Month one.
- **Day one.** Choose a plan, no credit card needed. Import patients by CSV. Turn on services and set hours. Add your team with unlimited users.
- **Week one.** Publish your website. Share service booking links. Run first visits with walk-ins and online bookings in one queue. Send your first physician fax.
- **Month one.** Follow-ups running by email, with only flagged responses returning. First near miss and CQI meeting in Assure. SOPs assigned with tracked sign-off. Estimated revenue reviewed by service and pharmacist.

### Support · fold into steps side text
Setup is guided by the ZeeNovo team. Support in the app or at contact@zeenovo.com, Monday to Friday, 9 a.m. to 6 p.m. ET.

### FAQ · reuse faq
- **Do we stop using our pharmacy system?** No. ZeeNovo works alongside it.
- **Can we start with one service?** Yes. Many pharmacies start with minor ailments or a flu clinic and add more.
- **What happens to our data if we leave?** Your pharmacy owns its data. At contract end it is returned or deleted as agreed.

### CTA · reuse cta
**H2:** Take your first / booking this week.
**Button:** Start free trial

---

## Provinces overview · /provinces

**SEO title:** ZeeNovo by province | Canadian pharmacy software
**Meta description:** Services, billing PINs and forms set up for the province you practise in. Ontario, Alberta, BC, Saskatchewan, Nova Scotia, New Brunswick, Manitoba.

### Hero
**Eyebrow:** Canada
**H1:** Set up for your / province's programs. *(keep)*
**Description:** Pharmacist scope differs by province. ZeeNovo's services, billing PINs and forms follow the province you practise in.
**Buttons:** Book a demo · Start free trial *(current "Register Pharmacy" → align with site-wide "Start free trial")*

### Cards · 7
**H2:** Choose your province.
**Side:** Each page lists what ZeeNovo supports there today.
- **Ontario.** Minor ailments, MedsCheck, flu and COVID-19 clinics, and billing PINs.
- **Alberta · British Columbia · Saskatchewan · Nova Scotia · New Brunswick · Manitoba.** Online booking, guided visits, vaccine records and billing PINs set up for the province. `[CONFIRM: live vs coming per province; PDF drops the province-specific program lines the current cards use]`

### CTA
**H2:** See ZeeNovo with / your own services.
**Button:** Book a demo

---

## Ontario · /provinces/ontario

**SEO title:** Pharmacy software for Ontario pharmacies | ZeeNovo
**Meta description:** Minor ailments, flu and COVID-19 clinics, MedsCheck with Ontario forms, billing PINs on every visit and a safety program for OCP assessments.

### Hero (with signal card)
**Eyebrow:** Ontario · Canada
**H1:** Built in Ontario, / for Ontario pharmacies.
**Description:** Minor ailment visits, flu and COVID-19 clinics and MedsCheck reviews, with the correct billing PIN on every visit and safety records ready for your next OCP assessment.
**Buttons:** Book a demo · Start free trial
**Signal card:** Label: Ontario practice · Title: Minor ailments · Flow: Assessment → documentation → follow-up · Badge: Ontario billing PINs *(replaces any "OCP ready"-type badge, which implies endorsement)*

### Reality · 3 cards
**H2:** The week-to-week reality.
1. **Services compete for one team.** Minor ailments, MedsCheck and immunization share the same staff and hours.
2. **A visit isn't billable until it's documented.** Decision, outcome and follow-up must be on file.
3. **Assessment evidence should already exist.** Records built after notice are incomplete records.

### Cards · Less admin around Ontario care (current "A better week" block)
**Eyebrow:** Funded services
**H2:** Get paid for the clinical / work you already do.
- **Minor ailments.** Every assessment documented with its outcome. Billing PIN shown for the visit mode and whether you prescribed.
- **MedsCheck.** Queue of due patients, automatic invitations and Ontario forms filled in. Early access.
- **Flu and COVID-19.** Group bookings fill clinic days. Every dose recorded with DIN, lot and expiry.
- **Safety program.** Incident data submitted to ISMP Canada, plus CQI and SOP records for OCP assessments. `[CONFIRM: ISMP submission vs current site "NIDR-aligned, soon"]`
**Button:** Estimate your pharmacy's numbers

### Outcomes · What Ontario pharmacies run on ZeeNovo
**H2:** What Ontario pharmacies / run on ZeeNovo
- **Minor ailments.** Guided visits for the conditions Ontario pharmacists can assess.
- **Publicly funded flu and COVID-19.** Group bookings, lot and expiry capture, dose reminders.
- **MedsCheck.** Early access. Annual, Follow-up, Diabetes and At Home, with Ontario forms filled in.
- **Billing PINs.** By service, visit mode and outcome.
- **Ontario forms.** Coming soon. OHIP+ attestation, frequency of dispensing, smoking cessation, narcotic destruction, loss/theft and more.
- **Incident reporting.** Near misses and incidents, submitted to ISMP Canada.

### CTA
**H2:** See ZeeNovo with your / own Ontario services.
**Button:** Book a demo

### PDF content with no slot on the current page
**FAQ** `[NEW BLOCK – reuse faq]`
- **Is ZeeNovo approved by OCP?** No. OCP doesn't approve or endorse software. ZeeNovo keeps the records your practice needs.

---

## Province template · /provinces/{alberta, british-columbia, saskatchewan, nova-scotia, new-brunswick, manitoba}

`[CONFIRM: PDF replaces six province-specific pages with one generic template. The current pages name college standards and carry badges ("ACP ready", "CPBC ready", "SCPP ready", "NSCP ready", "NBCP ready", "CPhM ready") that imply college endorsement; remove the badges either way. Province status (live vs coming) is unconfirmed, and Manitoba and New Brunswick were not on the old site's province list. Clinical scope per province needs sign-off from ZeeNovo's clinical lead.]`

**SEO title:** Pharmacy software for [Province] pharmacies | ZeeNovo
**Meta description:** Online booking, guided clinical visits, vaccine records, physician fax, follow-up and a safety program, set up for [Province] community pharmacies.

### Hero (with signal card)
**Eyebrow:** [Province] · Canada
**H1:** ZeeNovo for / [Province] pharmacies.
**Description:** Online booking, guided clinical visits, vaccine records, physician fax and follow-up, with billing PINs and services set up for [Province].
**Buttons:** Book a demo · Start free trial
**Signal card:** Label: [Province] workflow · Title: Guided clinical visits · Flow: Assessment → documentation → follow-up · Badge: [Availability status, e.g. "Available" or "Ask about availability"] *(replaces college "ready" badge)*

### Reality · 3 cards (same for every province)
**H2:** The week-to-week reality.
1. **Services compete for one team.** Assessments, immunization and dispensing share the same day.
2. **Every service needs a complete record.** Decision, outcome and physician communication must be on file.
3. **Standards apply daily, not at inspection.** Records should be produced by the workflow, not rebuilt for an assessment.

### Cards · What [Province] pharmacies run on ZeeNovo (4 cards on current layout)
**Eyebrow:** On ZeeNovo
**H2:** What [Province] pharmacies / run on ZeeNovo
- **Online booking.** On your own pharmacy website.
- **Guided clinical visits.** For the services your pharmacy offers, with physician fax and follow-up from the record.
- **Vaccine clinics.** Lot and expiry capture, dose reminders.
- **Safety program.** Incident reporting, CQI meetings, self-assessment and SOP sign-off.
*(PDF also lists "Billing PINs set up for [Province]" and "Provincial forms. Coming soon." Add as cards 5–6 if the block allows, else fold billing PINs into the hero description, which already covers it.)*

### CTA
**H2:** Ask what's available / in [Province].
**Button:** Book a demo


---

# Part 4 · Hubs, Pricing, Company, Resources, Trust

## Products overview · /products

PDF has no copy for this hub. Copy below uses PDF facts only.

**SEO title:** ZeeNovo products | Clinical, safety, compounding and booking
**Meta description:** Clinical services, safety program, compounding records, pharmacy website and patient booking for Canadian pharmacies. One login, unlimited users.

### Hero
**Eyebrow:** Products
**H1:** Clinical services, safety and booking. / One login.
**Body:** Each product works on its own and shares the same patients, services and team logins. Start with one. Add the rest when you need them.
**Buttons:** Book a demo · See pricing

### Products grid (reused home grid)
Use the home grid copy from Part A.

### Cards · For your patients (2)
**Eyebrow:** Included with every plan
**H2:** The front door to your pharmacy.
**Side:** Patients book and manage visits online. Every booking lands in the same calendar.
- **ZeeNovo Sites.** Your pharmacy website with live booking for every service.
- **Patient Portal.** Patients reschedule, cancel, request prescriptions and answer follow-ups without calling.

`[CONFIRM]` Patient Portal is "price on request" in the PDF pricing, so it is not "included with every plan". Either change the eyebrow to "For your patients" or move the Portal card out.

### Steps · Shared foundation (4)
**Eyebrow:** Shared foundation
**H2:** Set up once. Used in every product.
**Side:** What you configure in one product is available in the others.
1. **One login.** Clinical, Assure and Magistral share one sign-in.
2. **Five roles, unlimited users.** Owner, Manager, Pharmacist, Technician and Assistant.
3. **One set of services.** Turn a service on and it appears in Clinical, on your website and in the portal.
4. **Separate by pharmacy.** Every record is scoped to your pharmacy, with changes logged.

`[CONFIRM]` Current site says "Every access and change is logged". PDF says "Changes to records are logged". Use the narrower PDF claim unless access logging is confirmed.

### CTA
**Eyebrow:** Get started
**H2:** See ZeeNovo with / your own services.
**Button:** Book a demo

---

## Pricing · /pricing

**SEO title:** ZeeNovo pricing | No per-user fees
**Meta description:** Clinical C$29.99/month, Assure C$19.99/month, both C$44.99/month. Unlimited users and a pharmacy website on every plan.

### Hero
**Eyebrow:** Pricing
**H1:** Simple pricing. / No per-user fees.
**Body:** Every plan includes unlimited users and your pharmacy website. Prices are in Canadian dollars.
**Buttons:** Start free trial · Book a demo

`[CONFIRM: CAD, tax, annual prices]` Confirm prices exclude tax.

### Pricing cards (3 plans)

**Assure**
**Line:** Incident reporting, CQI and SOP compliance for one pharmacy.
**Price:** C$19.99 / month · or C$199 a year
**Includes:**
- Incident and near-miss reporting
- Submission to ISMP Canada
- CQI meetings and corrective actions
- Pharmacy self-assessment
- Staff competency assessments
- SOP library and sign-off
- Safety analytics
**Button:** Start with Assure

**Combo** · badge: Most popular `[CONFIRM: needs sign-up data, or change badge to "Best value"]`
**Line:** Clinical and Assure on one account, for less than both separately.
**Price:** C$44.99 / month · or C$449.99 a year
**Includes:**
- Everything in Clinical
- Everything in Assure
**Button:** Get the Combo

`[CONFIRM]` Current site also lists "Priority support" and "Multi-location ready" on Combo. PDF drops both. Remove unless confirmed.
`[CONFIRM: annual price format]` Assure (C$199) and Clinical (C$299) annual prices are round numbers. Combo is C$449.99. Confirm whether it should be C$449.

**Clinical**
**Line:** Booking, guided clinical visits, documentation and follow-up.
**Price:** C$29.99 / month · or C$299 a year
**Includes:**
- Minor ailments
- Vaccinations and injections
- Prescription requests
- Automated email follow-up
- Documents and physician fax
- Billing PINs
**Button:** Start with Clinical

`[CONFIRM]` Current site lists "ISMP MSSA" under Assure and "Prescribing support" under Clinical. PDF removes both: the MSSA appears only as "ask us how ZeeNovo supports it", and "Prescribing support" conflicts with "the pharmacist decides". Use the PDF lists.

**Included line:** ZeeNovo Sites, your pharmacy website with live booking, is included with Assure, Clinical and Combo.

**Fact chips:** No credit card to start · Cancel anytime · Unlimited users · Website included · Set up in under a day

`[CONFIRM]` "Set up in under a day" needs a basis, such as median onboarding time.

**Add-ons (3)**
- **ZeeNovo Magistral.** Non-sterile compounding records and batch control. Early access. Price on request. Button: Ask about early access
  `[NEW ITEM]` The current add-ons row has 2 cards. This makes 3.
- **Patient Portal.** A patient login to book by voice, manage appointments, request prescriptions and answer follow-ups. Price on request. Button: See the Patient Portal
- **ZeeNovo Enterprise.** Launching soon. Branded group booking, network dashboards and one inbox for every member pharmacy. Enterprise agreement. Button: See ZeeNovo Enterprise

### FAQ (5)
**Eyebrow:** Pricing FAQ
**H2:** Before you start.
- **Is there a free trial?** Yes. No credit card is needed. Most pharmacies are set up within a day.
- **Do you charge per user?** No. Every plan includes unlimited users, each with their own login and role.
- **Can I change plans?** Yes. Move between Clinical, Assure and Combo, or add the Patient Portal. Changes apply from the next billing cycle.
- **Does ZeeNovo bill OHIP for us?** No. ZeeNovo shows the billing PIN for each visit. You submit claims through your pharmacy system.
- **How do multi-location groups buy?** Through an enterprise agreement. Book a call and we will scope it with you.

`[CUT – replaced]` Current FAQ "Is the ISMP MSSA included?" is replaced by the OHIP question. The PDF no longer claims MSSA is included.
`[CONFIRM]` The Assure FAQ says "Assure has a longer free trial". If so, add the trial length to the free-trial answer.

### CTA
**Eyebrow:** Not sure which plan?
**H2:** Estimate the return / for your pharmacy.
**Button:** Open the ROI calculator

---

## ROI calculator · /pricing/roi-calculator

**SEO title:** ZeeNovo ROI calculator | Time and revenue estimate
**Meta description:** Estimate staff hours saved and added clinical revenue each month, using your own visit volumes, fees and staff costs.

### Hero
**Eyebrow:** Pricing
**H1:** Estimate your monthly return / on ZeeNovo.
(Replaces the rhetorical question "What is ZeeNovo worth to your pharmacy?")
**Body:** Enter your monthly volumes, fees and staff cost. Every assumption can be edited, and the estimate updates as you type.
**Buttons:** Book a demo · See pricing

### ROI block
**Inputs:** Minor ailment visits per month · Fee per assessment (C$) · Vaccinations per month · Incident reports per month · Staff cost per hour (C$) · Minutes saved per clinical service (editable assumption) · Minutes saved per incident report (editable assumption) · Plan (Clinical, Assure or Combo)
**Outputs:** Staff hours saved · Value of time saved · Additional visits possible · Estimated additional clinical revenue · ZeeNovo cost · Estimated net monthly value
**Disclaimer:** This estimate uses the numbers and assumptions you entered. It is not a guarantee of revenue. Funded rates and eligibility vary by province.

`[CONFIRM]` State the default values for "minutes saved". If they come from the home "15 min saved per incident report" counter, they need the same source.

### CTA
**Eyebrow:** Get started
**H2:** Check the estimate / against your own workflow.
**Button:** Book a demo

---

## Book a demo · /book-a-demo

**SEO title:** Book a ZeeNovo demo | 30 minutes, your services
**Meta description:** A 30-minute demo built around your services, your province's billing and forms, and your questions on pricing, setup and data.

### Hero
**Eyebrow:** Book a demo
**H1:** A 30-minute demo / of your own workflow.
**Body:** Bring one service your team runs every week. We walk it through from booking to follow-up, using your province's setup.

### Cards · What to expect (3)
**Eyebrow:** What to expect
**H2:** Thirty minutes. / Three things covered.
**Side:** We show only the workflows you would use.
1. **Your services.** The workflows you run today, from booking to follow-up.
2. **Your province.** Services, forms and billing PINs for where you practise.
3. **Your questions.** Pricing, setup, data handling and switching.

### Form
**Eyebrow:** Book a demo
**H2:** Tell us about / your pharmacy.
**Body:** We email you within one business day to set a time.
**Fields:**
- First name
- Last name
- Work email
- Phone
- Pharmacy name
- Number of locations: 1 · 2 to 5 · 6 to 20 · More than 20
- Province: Ontario · Alberta · British Columbia · Saskatchewan · Nova Scotia · New Brunswick · Manitoba · Other
- Products of interest: Clinical · Assure · Magistral · Sites (pharmacy website) · Patient Portal · Pharmacy groups
- Pharmacy system you use: Kroll · Propel · HealthWatch · FillWare · Other `[NEW FIELD]`
- Anything we should know? (optional). Helper: Do not include patient information.
**Button:** Book my demo
**Confirmation:** Thanks. We will email you within one business day to set a time.

`[CONFIRM]` The PDF adds Magistral and the "Pharmacy system" field, and renames "Enterprise" to "Pharmacy groups". The "Other" province option is also new.

---

## Company · /company

PDF has no copy for this hub.

**SEO title:** ZeeNovo Health | Company
**Meta description:** ZeeNovo Health builds clinical, safety and compounding software for Canadian community pharmacies. Contact us or book a demo.

### Hero
**Eyebrow:** Company
**H1:** ZeeNovo Health.
**Body:** Clinical, safety and compounding software for Canadian community pharmacies, founded by a practising Ontario pharmacist.
**Buttons:** Book a demo · Contact us

### Cards · Where to next (3)
- **About.** Who builds ZeeNovo, and the principles behind it.
- **Contact.** Reach the team. Reply within one business day.
- **Book a demo.** 30 minutes with your own services.

### CTA
Default CTA.

---

## About · /company/about

**SEO title:** About ZeeNovo Health | Built by a Canadian pharmacist
**Meta description:** ZeeNovo Health builds clinical, safety and compounding software for Canadian pharmacies. Founded by a practising Ontario pharmacist and pharmacy owner.

### Hero
**Eyebrow:** About
**H1:** Pharmacy software built by / a practising pharmacist-owner.
**Body:** ZeeNovo puts clinical services, safety records and compounding in one system. Booking, documentation, physician fax, follow-up and inspection records are kept in one place, so pharmacists spend their time on patients.
**Buttons:** Book a demo · Contact us

`[CONFIRM: founder named]` The PDF names the founder: ZeeNovo was founded by Jeet Kandoriya, a practising pharmacist who owns community pharmacies in Ontario. The current site does not name him. Add one line to the hero body only with his approval.

### Cards · What we hold to (3)
**Eyebrow:** How we work
**H2:** Three rules for / what we build.
**Side:** These set what goes into the product and what stays out.
1. **The pharmacist decides.** ZeeNovo guides and records. It does not diagnose, prescribe or recommend treatment.
2. **Province first.** Services, forms and billing PINs follow the province you practise in.
3. **Patient data stays protected.** Your pharmacy is the custodian. ZeeNovo processes the data on your behalf and stores patient records in Canada.

`[CONFIRM]` The PDF also says "AI never touches clinical care". Sites uses AI to draft the About page, and voice booking interprets speech. Keep the AI line only if Legal is comfortable that neither counts as clinical care. Suggested safe wording: "No AI is used in clinical assessment or prescribing."

### Facts (4 slots)
- **2024** · Founded
- **50+** · Pharmacies on ZeeNovo `[CONFIRM: count and date]`
- **5** · Connected products (Clinical, Assure, Magistral, Sites, Patient Portal)
- **Canada** · Where patient records are stored

`[CONFIRM: facts mismatch]` The PDF has 3 stats, with 5 connected products. The site has 4 facts: 4 connected products and "100% Canadian data residency". "100%" overstates the PDF claim, because physician faxes go through a third-party fax provider. The fourth fact above uses the PDF wording. The product count is also open: should Voice booking count as a product?

### PDF content with no slot on the current page
**Credibility section** `[NEW BLOCK – needs design; reuse "cards" or "features" rows]`
**Eyebrow:** Why it matters
**H2:** Built and tested in a / working community pharmacy.
- **Tested on real shifts.** Every workflow is used in a working Ontario community pharmacy before release.
- **Built to the rules.** OCP practice expectations, the NAPRA compounding standards and provincial programs define the requirements.
- **Priced by an owner.** Unlimited users, no per-seat fees and same-day setup reflect what an independent pharmacy can carry.

**Proof line (optional, under the credibility section):** "Every feature had to save my team time on a real shift before it went to anyone else." Jeet Kandoriya, pharmacist and founder `[CONFIRM: founder approval]`

`[CUT – storytelling]` "The story / It started at Courtice IDA". This is a founder narrative: notes after closing, faxes one at a time, "so he built it". The facts it carries are kept in the credibility section. Naming Courtice IDA needs the owner's approval, and it is not needed to make the point.
`[CUT]` Photo "Jeet at the pharmacy counter". Keep only if the founder line is approved and a photo is supplied.

### CTA
Default CTA.

---

## Contact · /company/contact

**SEO title:** Contact ZeeNovo | Reply within one business day
**Meta description:** Contact ZeeNovo about Clinical, Assure, Magistral, your pharmacy website or pharmacy groups. We reply within one business day.

### Hero
**Eyebrow:** Company
**H1:** Contact us
**Body:** We reply within one business day.

### Form
**Eyebrow:** Contact
**H2:** Send us a message.
**Body:** Tell us about your pharmacy and what you need.
**Fields:**
- Pharmacy name
- Your name
- Work email
- Phone (optional)
- Province
- Interested in: Clinical · Assure · Combo · Magistral · Sites · Patient Portal · Pharmacy groups
- How can we help? Helper: Do not include patient information. `[NEW helper text]`
**Consent line:** By sending this form, you agree that ZeeNovo may contact you about your enquiry. See our Privacy Policy. `[NEW]`
**Button:** Send message
**Aside · Talk to us:** Email: contact@zeenovo.com · Hours: Monday to Friday, 9 a.m. to 6 p.m. ET · Existing customers: use in-app support or email contact@zeenovo.com.

`[CONFIRM]` The consent line references a Privacy Policy that is still a holding page.

---

## Resources · /resources

PDF has no copy for this hub.

**SEO title:** Resources | ZeeNovo
**Meta description:** Guides, articles, case studies and product updates for Canadian pharmacy teams running clinical services and safety programs.

### Hero
**Eyebrow:** Resources
**H1:** Guides and updates / for pharmacy teams.
**Body:** Setup guides, practice articles, customer results and product changes.
**Buttons:** Read the blog · See guides

### Cards · Start here (4 slots, PDF adds a 5th)
- **Blog.** Practice, policy and product articles.
- **Case studies.** How Ontario pharmacies run services on ZeeNovo.
- **Guides.** Step-by-step setup and program guides.
- **Changelog.** New features and improvements, newest first.
- **Roadmap.** What we are building next. `[NEW ITEM – grid currently holds 4]`

### CTA
Default CTA.

---

## Blog · /blog

**SEO title:** ZeeNovo blog | Canadian pharmacy practice and safety
**Meta description:** Practical articles on minor ailments, vaccine clinics, incident reporting, OCP assessments, MedsCheck and compounding for Canadian pharmacies.

### Hero
**Eyebrow:** Resources
**H1:** The ZeeNovo blog
**Body:** Practice, policy and product, for Canadian pharmacy teams.

### List · Articles
**Filters:** All · Clinical practice · Patient safety · Provincial programs · Pharmacy business · Product `[NEW – current list has no filters on blog]`
**Articles (PDF has 10. Current slot shows 5, all "Coming soon"):**
1. **Ontario's minor ailments program: what to document.** The conditions pharmacists can assess, what the record must show and where time is lost.
2. **Incident reporting: the fields that matter.** Which fields matter, and how guided steps cut reporting time without losing detail.
3. **Running a flu clinic week.** Slots, walk-in queues, group bookings and second-dose reminders.
4. **OCP practice assessment: the records to have ready.** What assessors look for, and how to check your readiness first.
5. **The ISMP MSSA: scope and frequency.** What the Medication Safety Self-Assessment covers, who takes part and how to act on results.
6. **MedsCheck forms, explained.** Which form is used when, and what each needs.
7. **Cold-chain excursions: what to record and who to tell.**
8. **SOPs your team will read.** Structure, length and sign-off.
9. **Billing PINs for pharmacist services in Ontario.**
10. **NAPRA non-sterile compounding: what the batch record must show.**

`[CUT – unsourced claim]` The current article 2 summary ("Why reports take 20 minutes ... bring that under five") repeats the unsourced 20-to-5-minute claim. It is replaced above.
`[CONFIRM]` Articles 6 to 10 have no summary in the PDF. The short summaries above are suggestions for whoever writes them.

### CTA
Default CTA.

---

## Case studies · /resources/case-studies

**SEO title:** ZeeNovo case studies | Ontario pharmacies
**Meta description:** How Ontario pharmacies run minor ailments, vaccinations, websites and new-store launches on ZeeNovo.

### Hero
**Eyebrow:** Case studies
**H1:** How Ontario pharmacies / run on ZeeNovo.
(Replaces "Real pharmacies. Real results.", which is a slogan with no figures behind it yet.)
**Body:** Each case covers the starting point, what changed in the workflow and the measured result.
**Buttons:** Book a demo · Start free trial

### List · Customer stories (3)
**Layout per case:** Starting point → Workflow change → Measured result → Quote
1. **MapleMeds Pharmacies** · Ontario · Clinical and vaccinations
   Minor ailment and immunization programs on ZeeNovo Clinical, with vaccine autofill and automated dose reminders across stores.
   **Result:** `[CONFIRM: metric needed]`
2. **Oshawa Lakeview Pharmacy** · Ontario · Clinical and website
   Moved clinical services to ZeeNovo Clinical and launched a ZeeNovo website. Guided assessments, generated documents and fax from the visit.
   **Result:** `[CONFIRM: metric needed]`
3. **KW Bruce Pharmacies** · Ontario · New store launch
   New location run on ZeeNovo from day one, with online and voice booking from the first week.
   **Result:** `[CONFIRM: metric needed]`

`[CUT – unsourced claims]` Current card titles "took clinical and vaccination revenue to record levels" and "grew clinical revenue" make claims without figures. Use neutral titles, as above, until each pharmacy supplies a number and written approval.
`[CONFIRM]` Customer approval is needed to name each pharmacy.

### CTA
Default CTA.

---

## Guides · /resources/guides

**SEO title:** ZeeNovo guides | Setup and program how-tos
**Meta description:** Step-by-step guides to set up ZeeNovo, run minor ailment and vaccine services, report incidents, run CQI meetings and launch your website.

### Hero
**Eyebrow:** Resources
**H1:** Guides
**Body:** Step-by-step setup and program guides.

### List · Guides
**Filters:** All · Getting started · Clinical · Assure · Sites
- **Getting started:** Set up your pharmacy · Import patients by CSV · Add your team · Set up billing PINs `[NEW]`
- **Clinical:** Set up minor ailment services · Run a vaccine clinic · Configure fax · Run a MedsCheck with a Kroll import (early access) `[NEW]`
- **Assure:** Report your first incident · Run your first CQI meeting · Assign an SOP and track sign-off `[NEW]`
- **Sites:** Launch your pharmacy website · Share service booking links

`[CUT – conflicts with PDF]` "Complete the ISMP MSSA" is cut, because the PDF no longer positions the MSSA as an Assure feature. "Configure eFax" is renamed "Configure fax", in line with the PDF's naming. The filter "Website" is renamed "Sites".

---

## Changelog · /resources/changelog

**SEO title:** ZeeNovo changelog | Product updates
**Meta description:** New features and improvements across ZeeNovo Clinical, Assure, Magistral, Sites and the Patient Portal, newest first.

### Hero
**Eyebrow:** Resources
**H1:** Changelog
**Body:** New features and improvements, newest first.

### List · Product updates
**Filters:** All · Clinical · Assure · Magistral · Sites · Patient Portal (adds Magistral)
**Entry format:** Date · Product · What is new · Who can use it · Status (Available or Early access)
**First entries (current list is empty):**
- Clinical · MedsCheck with Ontario forms filled in. Early access.
- Clinical · Point-of-care testing. Early access.
- Clinical · Expired vaccine lot guard. Early access.
- Assure · SOP versioning with template updates. Available.
- Assure · Staff competency assessments. Available.

`[CONFIRM]` Release dates and status for each entry. The PDF gives no dates.

---

## Roadmap · /resources/roadmap `[NEW PAGE]`

Suggested blocks: hero (page header) → list (reuse the changelog "list" block with a status tag) → CTA.

**SEO title:** ZeeNovo roadmap | What we are building next
**Meta description:** Features in development for Canadian pharmacies: forms library, fridge log, OAT roster, ZeeNovo Enterprise, ZeeNovo Central and Magistral labels.

### Hero
**Eyebrow:** Resources
**H1:** Roadmap
**Body:** Features in development. Ask us about early access.

### List · In development
- **Pharmacy forms library.** 27 national and provincial forms, signed and sent from ZeeNovo. Coming soon.
- **Fridge temperature log, OAT dosing roster, compliance pack schedules.** Coming soon.
- **ZeeNovo Enterprise.** Chain booking, network dashboards and group messaging. Launching soon.
- **ZeeNovo Central.** Find a ZeeNovo pharmacy by location and service. Launching soon.
- **Magistral label printing and report exports.** Coming soon.

`[CONFIRM]` Public timing per item, or keep the status tags only. Decide whether a public roadmap is wanted at all, because it commits to features in front of competitors.

### CTA
**Eyebrow:** Early access
**H2:** Ask about / early access.
**Button:** Ask about early access

---

## Security and privacy · /trust/security-and-compliance

**SEO title:** ZeeNovo security and privacy | Patient data in Canada
**Meta description:** How ZeeNovo protects patient data: records stored in Canada, pharmacy-level separation, role-based access, two-step sign-in and change logs. SOC 2 in progress.

`[CONFIRM: page name]` The PDF calls this "Security and privacy". The current route and nav say "Security and Compliance". Decide on one name and keep the route.

### Hero
**Eyebrow:** Trust
**H1:** How ZeeNovo protects / patient information.
**Body:** Your pharmacy is the custodian of its patients' health information under PHIPA, PIPEDA and provincial privacy laws. ZeeNovo processes it on your behalf. This page lists the controls in place and the ones in progress.
**Buttons:** Contact us · Book a demo

### Wave · At a glance (5 labels)
**Tag:** At a glance
**H2:** Controls in place today.
1. Patient records stored in Canada `[CONFIRM: hosting provider and region]`
2. Separate data for every pharmacy
3. Role-based access
4. Two-step sign-in
5. SOC 2 in progress `[CONFIRM: Type I or II, expected date]`

`[CONFIRM: HIPAA dropped]` The current wave shows "PHIPA aligned", "PIPEDA aligned" and "HIPAA-aligned safeguards". The PDF drops HIPAA entirely and does not claim "aligned". It frames PHIPA and PIPEDA as the pharmacy's obligations. Remove the HIPAA label unless ZeeNovo can evidence it. Do not show "PHIPA/PIPEDA aligned" badges without a privacy assessment to back them.

### Cards · How we protect data (6 slots, PDF has 8 points)
**Eyebrow:** How we protect data
**H2:** Controls that apply / to every product.
**Side:** In place today unless marked otherwise.
1. **The pharmacy owns the record.** ZeeNovo processes patient information only to provide the service to your pharmacy.
2. **Stored in Canada.** Patient records are stored in Canada. Physician faxes are sent through our fax provider under a data protection agreement. `[CONFIRM: hosting region; fax provider DPA signed]`
3. **Separate by pharmacy.** Each pharmacy's records are scoped to that pharmacy, and separation is tested. `[CONFIRM: how and how often it is tested]`
4. **Role-based access and two-step sign-in.** Owner, Manager, Pharmacist, Technician and Assistant roles. Staff sign in with a password and a one-time code. ZeeNovo administrators use an authenticator app.
5. **Change logging.** Changes to records are logged with who made them and when. `[CONFIRM: whether read access is also logged; the current site claims "every access"]`
6. **Assure is end-to-end encrypted.** Incident reports, assessments and quality records in ZeeNovo Assure are end-to-end encrypted. `[CONFIRM: true E2E (keys held client-side) or encryption in transit and at rest. If not true E2E, reword to "encrypted in transit and at rest".]`

**In progress (fold into the side text or a 7th card):**
- **SOC 2.** We are working towards a SOC 2 report. `[SOC 2 STATUS] [CONFIRM: type, auditor, date, and whether customers can request it under NDA]`

`[CONFIRM]` The current card text claims "encryption in transit and at rest", "least-privilege administration" and "continuous monitoring". The PDF does not repeat any of these. Keep each one only if confirmed.
`[CUT – unevidenced]` The current "HIPAA" card (designed to HIPAA Security Rule standards).
`[CUT – restates law]` The current "PHIPA" and "PIPEDA" cards. They describe the law rather than ZeeNovo controls. Their content is covered by the hero line and card 1.

### Cards · Enterprise reporting (3)
**Eyebrow:** Enterprise reporting
**H2:** Aggregate and / de-identified.
**Side:** Security questions or a vulnerability to report? Email security@zeenovo.com.
1. **Aggregate only.** Group dashboards show counts, rates and trends. No patients, records, notes or prescriptions.
2. **Minimum group size.** Results appear only when a group is large enough to protect privacy. Otherwise the dashboard shows "insufficient data".
3. **Related documents.** Privacy Policy, Data Processing Agreement and Sub-processors.

`[CONFIRM]` ZeeNovo Enterprise is "launching soon". Mark this block as applying to Enterprise on release.

### PDF content with no slot on the current page
**Security contact** fits the side text above. No new block is needed.

### CTA
Default CTA.

---

## Privacy Policy · /trust/privacy-policy

**SEO title:** Privacy Policy | ZeeNovo
**Meta description:** What personal information ZeeNovo collects, why, how it is protected and how to contact our Privacy Officer.

### Hero
**Eyebrow:** Trust and legal
**H1:** Privacy Policy

### Legal block
**Holding copy (replaces empty section headings until counsel supplies text):** Our privacy policy is being finalized. For a copy, or to reach our Privacy Officer, email contact@zeenovo.com.

`[CONFIRM]` The current page shows 12 empty section headings. Show the holding line only until counsel delivers the full policy. Empty headings read as unfinished to enterprise reviewers.

---

## Terms and Conditions · /trust/terms-and-conditions

**SEO title:** Terms and Conditions | ZeeNovo
**Meta description:** The terms that govern use of the ZeeNovo website and services.

### Hero
**Eyebrow:** Trust and legal
**H1:** Terms and Conditions

### Legal block
**Holding copy:** Our terms are being finalized. For a copy, email contact@zeenovo.com.
**Clinical responsibility (keep visible now):** The pharmacist remains responsible for all clinical decisions.

---

## Data Processing Agreement · /trust/data-processing-agreement

**SEO title:** Data Processing Agreement | ZeeNovo
**Meta description:** How ZeeNovo processes personal health information on behalf of pharmacies, the data custodians. Request the current agreement.

### Hero
**Eyebrow:** Trust and legal
**H1:** Data Processing / Agreement
**Body:** Pharmacies are the custodians of their patients' health information. ZeeNovo processes it on their behalf.

### Legal block · In plain language
- The pharmacy controls the data. ZeeNovo processes it only to provide the service.
- Patient records are stored in Canada.
- We notify the pharmacy without undue delay if a breach affects its data.
- When the contract ends, data is returned or deleted as agreed.

**Request the agreement:** Email contact@zeenovo.com for the current Data Processing Agreement.

`[CONFIRM]` The current site also says "ZeeNovo staff access data only when needed for support, and that access is logged". The PDF drops it, although the Enterprise section says "ZeeNovo support access is logged separately". Keep it only if confirmed.

---

## Sub-processors · /trust/sub-processors

**SEO title:** Sub-processors | ZeeNovo
**Meta description:** Third parties that process personal information on ZeeNovo's behalf. Customers are notified before a sub-processor is added.

### Hero
**Eyebrow:** Trust and legal
**H1:** Sub-processors
**Body:** Third parties that process personal information on ZeeNovo's behalf to deliver the service. We tell customers before adding one.

### Table
**Columns:** Sub-processor · Purpose · Data location
**Rows:** Hosting · Fax delivery · Email delivery · SMS delivery `[NEW row; the PDF confirms SMS is used]` · Voice booking
**Note:** For the current list, email contact@zeenovo.com.

`[CONFIRM]` The PDF removes the table and gives only an email request. Either publish named providers and locations, or show the note only. A table full of "To be confirmed" should not go live.

---

## Accessibility · /trust/accessibility

**SEO title:** Accessibility | ZeeNovo
**Meta description:** ZeeNovo aims for WCAG 2.1 AA across its website and products. Report a barrier and we respond within five business days.

### Hero
**Eyebrow:** Trust and legal
**H1:** Accessibility
**Body:** Every pharmacy team member and every patient should be able to use ZeeNovo.

### Legal block (4 sections)
1. **Our standard.** We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.1, level AA, on our website and products.
2. **What we do.** Keyboard navigation. Text alternatives for images. Sufficient colour contrast. Screen reader support. Reduced-motion settings respected. Voice booking for patients who find forms difficult.
3. **Feedback.** Report a barrier at accessibility@zeenovo.com. We respond within five business days.
4. **Ontario.** Ontario organizations can request information in an accessible format under the AODA.

`[CONFIRM]` The PDF says "aim to meet". The current site says "design and test to meet". Use "aim to meet" unless an audit has been done.
