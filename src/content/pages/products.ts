import type { PageContent } from "@/components/blocks/types";

const demo = { label: "Book a Demo", href: "/book-a-demo" };
const start = { label: "Get Started", href: "https://auth.zeenovo.com/signup" };
const ctaDefault = { type: "cta", eyebrow: "Get started", title: "See ZeeNovo with / your own services.", action: demo } as const;

export const productPages: Record<string, PageContent> = {
  "/products": {
    gutter: 58, // aligns with the home "Our Products" grid reused on this page
    meta: { title: "Products | ZeeNovo", description: "ZeeNovo Clinical, Assure, Magistral, Sites and Intelligence. Clinical care, compliance, your website and patient booking on one platform." },
    blocks: [
      { type: "hero", title: "One platform for / pharmacy operations.", description: "Start with the product you need. Every product shares the same patients, records and login.", primary: demo, secondary: { label: "See Pricing", href: "/pricing" }, person: "clinicalPharmacist", extras: ["badge"] },
      { type: "productsGrid", title: "Our Products" },
      { type: "cards", eyebrow: "Also included", title: "For your patients.", side: "Two products that bring patients to your pharmacy and keep them coming back.", items: [
        { title: "ZeeNovo Sites", text: "Your pharmacy website, with live booking for every service.", icon: "storefront", href: "/products/sites" },
        { title: "Patient Portal", text: "Patients book, request refills and follow up online.", icon: "pharmacist", href: "/products/patient-portal" },
      ] },
      { type: "steps", eyebrow: "Shared foundation", title: "Built once, used everywhere.", side: "What you set up in one product is available in the others.", items: [
        { title: "One patient record", text: "Bookings, assessments and follow-ups sit on the same patient.", icon: "record" },
        { title: "One login per person", text: "Every team member has their own account and permissions.", icon: "pharmacist" },
        { title: "One set of services", text: "Turn a service on and it appears in Clinical, on your website and in the portal.", icon: "assessment" },
        { title: "One audit trail", text: "Every access and change is logged.", icon: "safety" },
      ] },
      ctaDefault,
    ],
  },

  "/products/clinical/vaccinations": {
    meta: { title: "Vaccinations | ZeeNovo Clinical", description: "Book, administer, document and remind for COVID-19, flu and other vaccines. Group booking, one-click auto-fill and dose reminders." },
    blocks: [
      { type: "hero", eyebrow: "ZeeNovo Clinical", title: "Vaccination clinics, / without the paperwork.", description: "Book, screen, administer and document COVID-19, flu and other vaccines, with dose reminders sent automatically.", primary: start, secondary: demo, person: "vaccinationPharmacist", extras: ["flags", "badge"] },
      { type: "cards", eyebrow: "Vaccinations", title: "One flow from booking / to the next dose.", side: "Built for busy flu and COVID-19 seasons, and for the vaccines you give all year.", items: [
        { title: "Book", text: "Online, walk-in or group bookings for families and clinics.", icon: "assessment" },
        { title: "Screen", text: "Consent and screening questions before the needle.", icon: "safety" },
        { title: "Record", text: "One-click auto-fill for lot, dose and site.", icon: "record" },
        { title: "Remind", text: "The next dose is booked from a reminder link.", icon: "vaccination" },
      ] },
      { type: "features", variant: "workflow", eyebrow: "Clinic days", title: "Built for the busiest / weeks of the year.", description: "Run a full flu clinic without a separate system. Slots, walk-ins and documentation stay in one place.", art: "appointmentProfile", artAlt: "Appointment booking form", rows: [
        { title: "Group booking", text: "Book a household or a workplace clinic in one appointment.", icon: "assessment" },
        { title: "One-click auto-fill", text: "Reuse vaccine details across a session instead of retyping them.", icon: "steps" },
        { title: "Walk-in intake", text: "Walk-in patients join the same queue as booked ones.", icon: "plan" },
      ] },
      { type: "twoCard", eyebrow: "After the vaccine", title: "The record and the reminder, / handled for you.", left: { title: "Dose reminders", text: "Second doses and boosters are reminded with a booking link.", chips: ["Dose series", "Booster reminders", "Rebooking link", "Reminder history"] }, right: { title: "Documentation", text: "The vaccination record is generated at the point of care.", chips: ["Automated records", "Built-in eFax", "Compliant storage", "Audit-ready"] } },
      {"type": "featureIndex", "eyebrow": "Key features", "title": "What you get for / vaccine programs.", "groups": [{"title": "Vaccinations", "ids": ["vaccinePrograms", "vaccineAutofill", "quickVaccineFlow", "groupBooking", "doseReminders"], "layout": "steps"}], "side": "From booking to the next dose."},
      { type: "cta", eyebrow: "Built for clinical care", title: "Run your next vaccine / clinic on ZeeNovo.", action: demo },
    ],
  },

  "/products/clinical/medication-review": {
    meta: { title: "Medication Review | ZeeNovo Clinical", description: "Structured medication reviews with issue tracking, pharmacist interventions, care plans, physician communication and follow-up." },
    blocks: [
      { type: "hero", eyebrow: "ZeeNovo Clinical", title: "Medication reviews / that finish with a plan.", description: "Capture the medication list, identify issues, record interventions and send the care plan to the physician from one review.", primary: start, secondary: demo, person: "clinicalPharmacist", extras: ["flags", "badge"] },
      { type: "cards", eyebrow: "Medication review", title: "One review. Four outputs.", side: "Each review produces the records your program and the patient's physician expect.", items: [
        { title: "Medication list", text: "A current list built with the patient.", icon: "record" },
        { title: "Issues identified", text: "Drug therapy problems recorded by category.", icon: "redFlag" },
        { title: "Interventions", text: "What the pharmacist did and why.", icon: "pharmacist" },
        { title: "Care plan", text: "Goals, actions and the follow-up date.", icon: "record" },
      ] },
      { type: "features", variant: "workflow", eyebrow: "Physician communication", title: "Keep the prescriber / in the loop.", description: "Recommendations are prepared from the review itself, so the physician receives a clear, consistent note.", art: "physicianCard", artAlt: "Family physician details reused for fax", rows: [
        { title: "Physician on file", text: "The family physician is looked up once and reused.", icon: "assessment" },
        { title: "Recommendation status", text: "Track what was sent, accepted or still open.", icon: "progress" },
        { title: "eFax from the record", text: "Send the note without leaving the review.", icon: "steps" },
      ] },
      { type: "features", variant: "followup", eyebrow: "Follow-up", title: "Close the loop / on every issue.", description: "Follow-up actions stay attached to the review until each issue has a documented outcome.", art: "followupPanel", artAlt: "Follow-up panel with outcomes", rows: [
        { title: "Scheduled follow-up", text: "Set the next check at the end of the review.", icon: "plan" },
        { title: "Issue resolution", text: "Record whether each issue was resolved.", icon: "outcomes" },
        { title: "Annual recurrence", text: "See when the patient is due for the next review.", icon: "progress" },
      ] },
      {"type": "featureIndex", "eyebrow": "Key features", "title": "What you get for / medication reviews.", "groups": [{"title": "Medication review", "ids": ["medicationReview", "familyDoctor", "efax", "followupTracking"], "layout": "cards"}], "side": "A review that ends in a documented plan."},
      { type: "cta", eyebrow: "Built for clinical care", title: "Turn reviews into / documented outcomes.", action: demo },
    ],
  },

  "/products/clinical/point-of-care-testing": {
    meta: { title: "Point of Care Testing | ZeeNovo Clinical", description: "Book, record and act on point of care tests in the same workflow as the rest of your clinical services." },
    blocks: [
      { type: "hero", eyebrow: "ZeeNovo Clinical", title: "Point of care testing, / recorded with the visit.", description: "Book the test, record the result and decide the next step inside the same consultation record.", primary: start, secondary: demo, person: "minorPharmacist", extras: ["flags", "badge"] },
      { type: "steps", eyebrow: "How it works", title: "From booking to result.", side: "The test is one step in the consultation, not a separate log.", items: [
        { title: "Booked", text: "Patients choose the test online or walk in.", icon: "dayBookings" },
        { title: "Screened", text: "Eligibility questions before the test.", icon: "dayVisits" },
        { title: "Recorded", text: "The result is entered against the visit.", icon: "dayServices" },
        { title: "Acted on", text: "Treatment, referral or self-care follows.", icon: "dayFollowups" },
        { title: "Documented", text: "The record and physician note are produced.", icon: "dayRevenue" },
      ] },
      {"type": "featureIndex", "eyebrow": "Key features", "title": "What you get for / point of care testing.", "groups": [{"title": "Testing", "ids": ["poct", "preVisitQuestionnaire", "guidedTreatment", "autoDocs"], "layout": "cards"}], "side": "The test is part of the consultation."},
      { type: "cta", eyebrow: "Built for clinical care", title: "Add testing without / adding another system.", action: demo },
    ],
  },

  "/products/clinical/prescriptions-and-injections": {
    meta: { title: "Prescriptions and Injections | ZeeNovo Clinical", description: "Refill, new, repeat and transfer requests in one queue. Condition-based medicine and SIG suggestions. Injection appointments with dose reminders." },
    blocks: [
      { type: "hero", eyebrow: "ZeeNovo Clinical", title: "Every prescription request, / on one trackable path.", description: "Refills, new prescriptions, repeats, transfers and injections, with suggested medicine and SIG by condition.", primary: start, secondary: demo, person: "clinicalPharmacist", extras: ["flags", "badge"] },
      { type: "cards", eyebrow: "Prescriptions", title: "Four request types. One queue.", side: "Patients request online or in the portal. The team sees every request and its status.", items: [
        { title: "Refill", text: "The most requested. Approved in a few clicks.", icon: "prescription" },
        { title: "New prescription", text: "Captured with the details the pharmacist needs.", icon: "record" },
        { title: "Repeat", text: "Repeat requests tracked to completion.", icon: "steps" },
        { title: "Transfer", text: "Incoming transfers in the same queue.", icon: "assessment" },
      ] },
      { type: "features", variant: "workflow", eyebrow: "Prescribing support", title: "Suggested, never / decided for you.", description: "Where a pharmacist prescribes, ZeeNovo suggests medicine and SIG for the condition. The pharmacist confirms or changes it.", art: "guidedTreatment", artAlt: "Guided treatment options", rows: [
        { title: "Medicine and SIG by condition", text: "Suggestions follow the assessment.", icon: "assessment" },
        { title: "Multiple SIGs per platform", text: "Match the format your prescribing system expects.", icon: "steps" },
        { title: "Custom selection", text: "Choose any medicine and SIG when the suggestion does not fit.", icon: "safeguards" },
      ] },
      { type: "features", variant: "followup", eyebrow: "Injections", title: "Injection schedules / that keep themselves.", description: "Book injection appointments and send the next-dose reminder automatically.", art: "doseReminders", artAlt: "Dose reminders for two patients", rows: [
        { title: "Injection appointments", text: "Booked like any other clinical service.", icon: "plan" },
        { title: "Dose reminders", text: "Patients receive a reminder with a rebooking link.", icon: "progress" },
        { title: "Group booking", text: "Book several patients in one appointment.", icon: "outcomes" },
      ] },
      {"type": "featureIndex", "eyebrow": "Key features", "title": "What you get for prescriptions / and injections.", "groups": [{"title": "Prescriptions and injections", "ids": ["rxRequests", "portalRx", "medicineSig", "customDrug", "injections"], "layout": "list"}], "side": "Every request, suggestion and dose in one place."},
      { type: "cta", eyebrow: "Built for clinical care", title: "Put every request / in one place.", action: demo },
    ],
  },

  "/products/clinical/appointments": {
    meta: { title: "Appointments | ZeeNovo Clinical", description: "A pharmacy calendar for clinical services. Time slots by pharmacist and service, walk-ins, waitlists, group bookings and per-service booking links." },
    blocks: [
      { type: "hero", eyebrow: "ZeeNovo Clinical", title: "Appointment booking / that flexes with the day.", description: "Scheduled visits, walk-ins, waitlists and group bookings on one calendar, configured by pharmacist and by service.", primary: start, secondary: demo, person: "independentPharmacist", extras: ["flags", "badge"] },
      { type: "cards", eyebrow: "Calendar", title: "Set it up the way / your pharmacy runs.", side: "Configure once. Patients only see the times you can actually deliver.", items: [
        { title: "Walk-in intake", text: "Walk-ins join the same queue as bookings.", icon: "assessment" },
        { title: "Custom calendar", text: "Time slots per pharmacist and per service.", icon: "calendarStar" },
        { title: "Waitlist", text: "Fill cancellations from the waitlist.", icon: "steps" },
        { title: "Group bookings", text: "Families and clinics in one appointment.", icon: "pharmacist" },
      ] },
      { type: "features", variant: "workflow", eyebrow: "Service control", title: "Turn services on, off / or onto a waitlist.", description: "Change what patients can book in seconds, one service at a time or in bulk.", art: "appointmentProfile", artAlt: "Appointment booking form", rows: [
        { title: "Bulk service control", text: "Enable, disable or waitlist several services at once.", icon: "safeguards" },
        { title: "Holiday management", text: "Block dates once for the whole team.", icon: "plan" },
        { title: "Per-service booking links", text: "Share a direct link for any service.", icon: "steps" },
      ] },
      { type: "features", variant: "followup", eyebrow: "Patient list", title: "Start with the patients / you already have.", description: "Import your patient list by CSV from your pharmacy management system. Booking finds the patient instantly.", art: "physicianCard", artAlt: "Family physician details saved to the patient", rows: [
        { title: "CSV patient import", text: "Bring patients across from your PMS.", icon: "assessment" },
        { title: "Family physician saved", text: "Reused on every appointment.", icon: "outcomes" },
        { title: "Booking source", text: "See whether a booking came from your website, the portal, a walk-in or staff.", icon: "progress" },
      ] },
      {"type": "featureIndex", "eyebrow": "Key features", "title": "What you get in / the calendar.", "groups": [{"title": "Appointments", "ids": ["calendar", "waitlist", "holidays", "bookingSource", "csvImport"], "layout": "steps"}], "side": "Configure once. Patients see only what you can deliver."},
      { type: "cta", eyebrow: "Built for clinical care", title: "Keep your clinical / calendar full.", action: demo },
    ],
  },

  "/products/clinical/documentation-and-efax": {
    meta: { title: "Documentation and eFax | ZeeNovo Clinical", description: "Clinical documentation generated during the consultation. Fax to the physician, keep a copy, or download. Stored securely and audit-ready." },
    blocks: [
      { type: "hero", eyebrow: "ZeeNovo Clinical", title: "The record is written / while care happens.", description: "Every assessment produces its documentation automatically. Fax it, store it or download it from the same screen.", primary: start, secondary: demo, person: "minorPharmacist", extras: ["flags", "badge"] },
      { type: "cards", eyebrow: "Documentation", title: "Four things you no / longer do by hand.", side: "Documentation comes from the consultation, so it matches what happened.", items: [
        { title: "Automated documentation", text: "PDFs generated from the assessment.", icon: "record" },
        { title: "Built-in eFax", text: "Fax the physician without leaving ZeeNovo.", icon: "steps" },
        { title: "Compliant storage", text: "Records stored in Canada with access controls.", icon: "safety" },
        { title: "Audit-ready records", text: "Every record and change is logged.", icon: "shield" },
      ] },
      { type: "features", variant: "workflow", eyebrow: "eFax", title: "Your choice on / every visit.", description: "Decide per visit where the record goes. Nothing depends on a separate fax machine.", art: "sopTable", artAlt: "Document table in ZeeNovo", rows: [
        { title: "Self-fax", text: "Send a copy to the pharmacy so the record is never lost.", icon: "safeguards" },
        { title: "Auto-fax to the physician", text: "The family physician receives the note automatically.", icon: "steps" },
        { title: "Download", text: "Export every document for the visit.", icon: "plan" },
      ] },
      {"type": "featureIndex", "eyebrow": "Key features", "title": "What you get for / documentation.", "groups": [{"title": "Documentation", "ids": ["efax", "familyDoctor", "storage", "selfCare"], "layout": "followup", "art": "physicianCard", "artAlt": "Family physician details reused for fax"}], "side": "The right document reaches the right person."},
      { type: "cta", eyebrow: "Built for clinical care", title: "Spend the time on the / patient, not the paperwork.", action: demo },
    ],
  },

  "/products/assure": {
    meta: { title: "ZeeNovo Assure | Pharmacy quality and safety platform", description: "Incident reporting, root cause analysis, ISMP MSSA, pharmacy self-assessment, CQI meetings, goals and analytics in one platform." },
    blocks: [
      { type: "hero", eyebrow: "ZeeNovo Assure", title: "Your whole safety / program, in one place.", description: "Incident reporting, self-assessment, CQI meetings, goals and analytics. Know where you stand before an inspection.", primary: start, secondary: demo, person: "clinicalPharmacist", extras: ["timer"] },
      { type: "cards", eyebrow: "What is included", title: "Six parts of one / quality program.", side: "Each part feeds the next, so a report becomes an improvement you can show.", items: [
        { title: "Incident reporting", text: "Guided capture of incidents and near misses.", icon: "report", href: "/products/assure/incident-reporting" },
        { title: "Root cause analysis", text: "A structured 5 Whys and contributing factors.", icon: "detect" },
        { title: "ISMP MSSA", text: "The Medication Safety Self-Assessment, included.", icon: "safety" },
        { title: "Self-assessment", text: "Check your safety score before inspectors arrive.", icon: "compare", href: "/products/assure/self-assessment" },
        { title: "CQI meetings", text: "Run and record quality improvement meetings.", icon: "pharmacist" },
        { title: "Goals and actions", text: "Owners, due dates and reminders.", icon: "act" },
      ] },
      { type: "wave", tag: "Closed loop", title: "Report, analyse, act, improve.", description: "Every incident moves through the same steps, from the first report to the change that prevents a repeat.", items: [
        { label: "Report", icon: "report" },
        { label: "Analyse", icon: "detect" },
        { label: "Act", icon: "act" },
        { label: "Improve", icon: "chartStar" },
      ] },
      { type: "features", variant: "workflow", eyebrow: "Analytics", title: "See the pattern / before it repeats.", description: "Live dashboards across incidents, assessments and goals, with anonymised peer benchmarking.", art: "incidentDashboard", artAlt: "ZeeNovo Assure analytics dashboard", rows: [
        { title: "Trend dashboards", text: "Error types, timing and medications in real time.", icon: "progress" },
        { title: "Scheduled reports", text: "For your team, board or inspector.", icon: "plan" },
        { title: "Benchmarking", text: "Your figures beside the anonymised peer range.", icon: "outcomes" },
      ] },
      {"type": "featureIndex", "eyebrow": "All features", "title": "Everything in / ZeeNovo Assure.", "groups": [{"title": "Reporting", "ids": ["incidentCapture", "guidedReporting", "nidr", "deidentify"], "layout": "followup", "art": "incidentDashboard", "artAlt": "ZeeNovo Assure analytics dashboard"}, {"title": "Analysis", "ids": ["rca", "contributingFactors", "caseManagement"], "layout": "cards", "text": "Find where the gap / really occurred."}, {"title": "Action", "ids": ["actionPlans", "multiStore", "correctiveActions"], "layout": "list", "text": "Owners, due dates / and follow-through."}, {"title": "Analytics", "ids": ["trendDashboards", "insightAlerts", "performanceView", "scheduledReports"], "layout": "steps", "text": "Patterns, alerts and / regular reports."}, {"title": "Comparison and exports", "ids": ["benchmarking", "crossProduct", "exports"], "layout": "workflow", "text": "Context from peers / and other products.", "art": "exports", "artAlt": "Report export preview"}, {"title": "Quality meetings and goals", "ids": ["cqi", "goals", "staffTraining"], "layout": "cards", "text": "The team improves / together."}, {"title": "Inspection readiness", "ids": ["mssa", "selfAssessment", "sop", "userAccess"], "layout": "steps", "text": "Ready when / the inspector asks."}], "side": "Every Assure feature, grouped by step in your safety program."},
      { type: "cta", eyebrow: "Built for pharmacy safety", title: "Walk into your next / inspection prepared.", action: demo },
    ],
  },

  "/products/assure/self-assessment": {
    meta: { title: "Pharmacy Self-Assessment | ZeeNovo Assure", description: "A built-in pharmacy self-assessment and the ISMP Medication Safety Self-Assessment, with goals and corrective actions tracked to completion." },
    blocks: [
      { type: "hero", eyebrow: "ZeeNovo Assure", title: "Know your safety score / before the inspector.", description: "Run the built-in pharmacy self-assessment and the ISMP MSSA inside ZeeNovo, then track every gap to a completed action.", primary: start, secondary: demo, person: "followupPharmacist", extras: ["timer"] },
      { type: "twoCard", eyebrow: "Included", title: "Two assessments, / in the price.", left: { title: "Pharmacy self-assessment", text: "Check readiness against the standards your inspection covers.", chips: ["Safety score", "Strengths identified", "Gaps identified", "Action plan"] }, right: { title: "ISMP MSSA", text: "The Medication Safety Self-Assessment, completed every two years and tracked here.", chips: ["Guided sections", "Progress saved", "Results stored", "Next due date"] } },
      { type: "steps", eyebrow: "From gap to action", title: "Every gap gets an owner.", side: "Results turn into goals and corrective actions, not a PDF in a drawer.", items: [
        { title: "Assess", text: "Complete the assessment as a team.", icon: "dayServices" },
        { title: "Score", text: "See strengths and gaps by area.", icon: "dayRevenue" },
        { title: "Plan", text: "Turn each gap into a goal.", icon: "dayVisits" },
        { title: "Assign", text: "Set an owner and a due date.", icon: "dayBookings" },
        { title: "Review", text: "Discuss progress at the CQI meeting.", icon: "dayFollowups" },
      ] },
      {"type": "featureIndex", "eyebrow": "Key features", "title": "What you get for / inspection readiness.", "groups": [{"title": "Self-assessment", "ids": ["selfAssessment", "mssa", "correctiveActions", "cqi", "staffTraining"], "layout": "list"}], "side": "Assess, assign and improve in one place."},
      { type: "cta", eyebrow: "Built for pharmacy safety", title: "No surprises on / inspection day.", action: demo },
    ],
  },

  "/products/assure/analytics": {
    meta: { title: "Safety Analytics | ZeeNovo Assure", description: "Trend dashboards, insight alerts, anonymised peer benchmarking and scheduled reports across incidents, assessments and goals." },
    blocks: [
      { type: "hero", eyebrow: "ZeeNovo Assure", title: "See the pattern / before it repeats.", description: "Live dashboards across incidents, assessments and goals, cut by store, staff member, medication and time of day.", primary: start, secondary: demo, person: "independentPharmacist", extras: ["timer"] },
      { type: "cards", eyebrow: "Analytics", title: "Four ways analytics / works harder for you.", side: "Dashboards update as reports come in.", items: [
        { title: "Trend dashboards", text: "Error patterns, timing and medications, visible in real time.", icon: "chartStar" },
        { title: "Insight surfacing", text: "Spikes, drops and emerging patterns are flagged for you.", icon: "detect" },
        { title: "Track what matters", text: "Productivity, follow-ups and performance at a glance.", icon: "compare" },
        { title: "Scheduled reports", text: "For your team, board or inspector, on a schedule or on demand.", icon: "report" },
      ] },
      { type: "features", variant: "workflow", eyebrow: "What you can see", title: "Every view, cut / the way you need it.", description: "Filter by store, region, staff member, medication and time of day.", art: "complianceList", artAlt: "Incident analytics categories", rows: [
        { title: "Incidents and near misses", text: "By type, medication and time of day.", icon: "progress" },
        { title: "Store comparison", text: "Your locations side by side, on the same definitions.", icon: "outcomes" },
        { title: "Goal progress", text: "Assessment scores and goal completion over time.", icon: "plan" },
      ] },
      { type: "features", variant: "followup", eyebrow: "Benchmarking", title: "Know where you / really stand.", description: "Compare your safety performance with anonymised peer pharmacies. No other pharmacy is identifiable.", art: "exports", artAlt: "Report export preview", rows: [
        { title: "Peer comparison", text: "Your figures beside the anonymised peer range.", icon: "outcomes" },
        { title: "Exports", text: "In the format your board, banner or college expects.", icon: "steps" },
        { title: "Cross-product insight", text: "Clinical volume, bookings and safety trends side by side.", icon: "progress" },
      ] },
      {"type": "featureIndex", "eyebrow": "Key features", "title": "What you get in / Assure analytics.", "groups": [{"title": "Analytics", "ids": ["trendDashboards", "insightAlerts", "scheduledReports", "benchmarking", "exports"], "layout": "steps"}], "side": "From the first report to the board pack."},
      { type: "cta", eyebrow: "Built for pharmacy safety", title: "Bring numbers to / your next CQI meeting.", action: demo },
    ],
  },

  "/products/magistral": {
    dummy: true,
    meta: { title: "ZeeNovo Magistral | Compounding software for pharmacies", description: "Master formulas, batch records, beyond-use dates and compounding documentation for Canadian pharmacies." },
    blocks: [
      { type: "hero", eyebrow: "ZeeNovo Magistral · Placeholder copy", title: "Compounding, / documented as you prepare.", description: "Keep master formulas, record every batch and have compounding documentation ready when the inspector asks.", primary: start, secondary: demo, person: "clinicalPharmacist" },
      { type: "cards", eyebrow: "Compounding", title: "Four records, / kept for you.", side: "Every preparation is traceable from the formula to the patient.", items: [
        { title: "Master formulas", text: "One approved version of every formula, with change history.", icon: "record" },
        { title: "Batch records", text: "Ingredients, lot numbers, quantities and who prepared it.", icon: "treatment" },
        { title: "Beyond-use dates", text: "Calculated and printed on the label.", icon: "calendarStar" },
        { title: "Patient link", text: "Each preparation attached to the patient and prescription.", icon: "pharmacist" },
      ] },
      { type: "features", variant: "workflow", eyebrow: "Preparation", title: "The right steps, / in the right order.", description: "Guided preparation steps follow the master formula, so each batch is made the same way.", art: "sopDashboard", artAlt: "SOP dashboard", rows: [
        { title: "Step-by-step preparation", text: "Each step confirmed before the next.", icon: "steps" },
        { title: "Second check", text: "A second person verifies before release.", icon: "safeguards" },
        { title: "Labels", text: "Generated from the batch record.", icon: "plan" },
      ] },
      { type: "features", variant: "followup", eyebrow: "Readiness", title: "Inspection-ready / compounding records.", description: "Records are structured to Canadian model standards for pharmacy compounding.", art: "exports", artAlt: "Report export preview", rows: [
        { title: "Audit trail", text: "Every change to a formula or batch is logged.", icon: "progress" },
        { title: "Exports", text: "Batch and formula reports on demand.", icon: "outcomes" },
        { title: "Linked to Assure", text: "Compounding incidents go straight to incident reporting.", icon: "plan" },
      ] },
      {"type": "featureIndex", "eyebrow": "All features", "title": "Everything in / ZeeNovo Magistral.", "groups": [{"title": "Formulas and batches", "ids": ["masterFormulas", "batchRecords", "budDates"], "layout": "workflow", "art": "sopDashboard", "artAlt": "SOP dashboard"}, {"title": "Preparation", "ids": ["prepSteps", "secondCheck", "compoundLabels"], "layout": "cards", "text": "Each batch made / the same way."}], "side": "Placeholder features until the product scope is confirmed."},
      { type: "cta", eyebrow: "Built for compounding", title: "Every batch, / on the record.", action: demo },
    ],
  },

  "/products/sites": {
    meta: { title: "ZeeNovo Sites | Pharmacy websites with live booking", description: "A pharmacy website with live booking for every service you offer. Search-friendly, mobile-first and included with every plan." },
    blocks: [
      { type: "hero", eyebrow: "ZeeNovo Sites", title: "A pharmacy website / that books patients.", description: "Show the services you offer, take bookings around the clock and turn services on or off yourself. Included with every plan.", primary: { label: "Get Your Website", href: "https://auth.zeenovo.com/signup" }, secondary: demo, person: "independentPharmacist" },
      { type: "cards", eyebrow: "What you get", title: "Built to fill your / clinical calendar.", side: "The website is connected to your ZeeNovo services and calendar, so it is never out of date.", items: [
        { title: "Live booking", text: "Patients book the services you offer, at times you have open.", icon: "calendarStar" },
        { title: "Service control", text: "Turn a service on or off from your dashboard.", icon: "grid" },
        { title: "Service links", text: "A booking link for each service, for social, email and ads.", icon: "steps" },
        { title: "Category pages", text: "Ready-made pages for vaccines, minor ailments and more.", icon: "record" },
        { title: "Search-friendly", text: "Fast, structured pages that patients can find.", icon: "globe" },
        { title: "Your brand", text: "Your name, logo and colours, on every screen size.", icon: "storefront" },
      ] },
      { type: "features", variant: "workflow", eyebrow: "Website and portal", title: "Your storefront, / separate from the portal.", description: "The website is public and brings in new patients. The Patient Portal is where existing patients log in. Use either or both.", art: "appointmentProfile", artAlt: "Booking form on a pharmacy website", rows: [
        { title: "Public website", text: "Anyone can find your pharmacy and book.", icon: "assessment" },
        { title: "Patient Portal", text: "Logged-in patients manage their own care.", icon: "steps" },
        { title: "Same calendar", text: "Both book into the same schedule.", icon: "plan" },
      ] },
      {"type": "featureIndex", "eyebrow": "All features", "title": "Everything in / ZeeNovo Sites.", "groups": [{"title": "Your website", "ids": ["siteDesign", "seo", "categoryPages", "siteIncluded"], "layout": "followup", "art": "appointmentProfile", "artAlt": "Booking form on a pharmacy website"}, {"title": "Booking and tracking", "ids": ["liveBooking", "siteServiceControl", "serviceLinks", "liveSync", "bookingSource"], "layout": "steps", "text": "Patients book what you offer, / and you see where they came from."}], "side": "Each feature in one or two lines."},
      { type: "ctaSplit", eyebrow: "Built for independent pharmacy", title: "Launch your website / with your first service.", text: "Pick your services and brand. We publish the site.", primary: demo, secondary: { label: "Get Started", href: "https://auth.zeenovo.com/signup" }, note: { title: "Bookings around the clock", text: "Your website takes them while you sleep." } },
    ],
  },

  "/products/patient-portal": {
    meta: { title: "Patient Portal | ZeeNovo", description: "A logged-in portal where patients book and manage appointments, request prescriptions and receive reminders, including voice booking." },
    blocks: [
      { type: "hero", eyebrow: "ZeeNovo Patient Portal", title: "Patients manage their / own care, online.", description: "A logged-in portal where your patients book, reschedule, request prescriptions and keep up with reminders. Fewer calls to the counter.", primary: start, secondary: demo, person: "followupPharmacist" },
      { type: "cards", eyebrow: "Self-service", title: "What patients can do / without calling.", side: "Every action lands in the pharmacy's queue with a clear status.", items: [
        { title: "Book by voice", text: "Speak to book, hands-free.", icon: "pharmacist", href: "/products/voice-based-appointment-booking" },
        { title: "Manage appointments", text: "Book, reschedule or cancel.", icon: "calendarStar" },
        { title: "Prescription requests", text: "Refills, renewals and transfers.", icon: "prescription" },
        { title: "Reminders", text: "Dose reminders and next-visit links.", icon: "vaccination" },
        { title: "Follow-up questions", text: "Answer follow-ups from the pharmacist.", icon: "assessment" },
        { title: "Physician on file", text: "Their family physician carries through every booking.", icon: "record" },
      ] },
      { type: "wave", tag: "For the pharmacy", title: "Self-service that / comes back to you.", description: "Patients who manage their care online book again with the same pharmacy.", items: [
        { label: "Fewer phone calls", icon: "automation" },
        { label: "More repeat bookings", icon: "revenue" },
        { label: "Requests in one queue", icon: "grid" },
        { label: "Independent patient logins", icon: "shield" },
      ] },
      {"type": "featureIndex", "eyebrow": "All features", "title": "Everything in the / Patient Portal.", "groups": [{"title": "Requests and reminders", "ids": ["portalRx", "portalReminders", "doseReminders"], "layout": "followup", "art": "doseReminders", "artAlt": "Dose reminders for two patients"}, {"title": "Booking and account", "ids": ["voiceBooking", "manageAppointments", "familyDoctor", "patientLogins"], "layout": "cards", "text": "Book their way, / with details kept private."}], "side": "Each feature in one or two lines."},
      { type: "cta", eyebrow: "Get started", title: "Give your patients / a better front door.", action: demo },
    ],
  },

  "/products/voice-based-appointment-booking": {
    meta: { title: "Voice-Based Appointment Booking | ZeeNovo Intelligence", description: "Patients book pharmacy appointments by speaking in plain language. Bookings land in your ZeeNovo calendar." },
    blocks: [
      { type: "hero", eyebrow: "ZeeNovo Intelligence", title: "Patients book / by speaking.", description: "Patients say what they need in plain language. ZeeNovo finds the service and an open time, and books it into your calendar.", primary: { label: "Try It Now", href: "https://patient.zeenovo.com/login" }, secondary: demo, person: "minorPharmacist" },
      { type: "steps", eyebrow: "How it works", title: "From a sentence / to a booking.", side: "No menus to navigate and no forms to type.", items: [
        { title: "Speak", text: "“I need a flu shot this week.”", icon: "dayServices" },
        { title: "Match", text: "The right service is found.", icon: "dayVisits" },
        { title: "Choose", text: "Open times are offered.", icon: "dayBookings" },
        { title: "Confirm", text: "The booking appears in your calendar.", icon: "dayFollowups" },
      ] },
      { type: "features", variant: "followup", eyebrow: "Accessibility", title: "Easier for every / patient to book.", description: "Voice booking helps patients who find forms difficult, including older patients and those with limited vision or mobility.", art: "voicePhone", artAlt: "Voice booking on a phone", rows: [
        { title: "Plain language", text: "No clinical terms needed.", icon: "assessment" },
        { title: "Same calendar", text: "Uses your services and availability.", icon: "plan" },
        { title: "Booking source recorded", text: "See which bookings came by voice.", icon: "progress" },
      ] },
      {"type": "featureIndex", "eyebrow": "Key features", "title": "What you get with / voice booking.", "groups": [{"title": "Voice booking", "ids": ["voiceBooking", "manageAppointments", "bookingSource", "patientLogins"], "layout": "cards"}], "side": "Plain-language booking into your own calendar."},
      { type: "cta", eyebrow: "Get started", title: "Add voice booking / to your pharmacy.", action: demo },
    ],
  },
};
