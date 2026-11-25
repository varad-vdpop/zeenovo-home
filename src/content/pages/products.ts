import type { PageContent } from "@/components/blocks/types";

const demo = { label: "Book a Demo", href: "/book-a-demo" };
const trial = { label: "Start Free Trial", href: "https://auth.zeenovo.com/signup" };
const assureDemo = { label: "Book an Assure Demo", href: "/book-a-demo" };
const earlyAccess = { label: "Ask About Early Access", href: "/book-a-demo" };
const ctaDefault = { type: "cta", eyebrow: "Get started", title: "See ZeeNovo with / your own services.", action: demo } as const;

export const productPages: Record<string, PageContent> = {
  "/products": {
    gutter: 58, // aligns with the home "Our Products" grid reused on this page
    meta: { title: "ZeeNovo products | Clinical, safety, compounding and booking", description: "Clinical services, safety program, compounding records, pharmacy website and patient booking for Canadian pharmacies. One login, unlimited users." },
    blocks: [
      { type: "hero", eyebrow: "Products", title: "Clinical services, safety and booking. / One login.", description: "Each product works on its own and shares the same patients, services and team logins. Start with one. Add the rest when you need them.", primary: demo, secondary: { label: "See Pricing", href: "/pricing" }, person: "clinicalPharmacist", extras: ["badge"] },
      { type: "productsGrid", title: "Our Products" },
      { type: "cards", eyebrow: "For your patients", title: "The front door to / your pharmacy.", side: "Patients book and manage visits online. Every booking lands in the same calendar.", items: [
        { title: "ZeeNovo Sites", text: "Your pharmacy website with live booking for every service.", icon: "storefront", href: "/products/sites" },
        { title: "Patient Portal", text: "Patients reschedule, cancel, request prescriptions and answer follow-ups without calling.", icon: "pharmacist", href: "/products/patient-portal" },
      ] },
      { type: "steps", eyebrow: "Shared foundation", title: "Set up once. / Used in every product.", side: "What you configure in one product is available in the others.", items: [
        { title: "One login", text: "Clinical, Assure and Magistral share one sign-in.", icon: "pharmacist" },
        { title: "Five roles, unlimited users", text: "Owner, Manager, Pharmacist, Technician and Assistant.", icon: "noIt" },
        { title: "One set of services", text: "Turn a service on and it appears in Clinical, on your website and in the portal.", icon: "assessment" },
        { title: "Separate by pharmacy", text: "Every record is scoped to your pharmacy, with changes logged.", icon: "safety" },
        { title: "Content kept current", text: "Question trees, the medicine catalogue and SOP templates are maintained by ZeeNovo.", icon: "record" },
      ], action: { label: "See What We Maintain", href: "/platform/clinical-content" } },
      ctaDefault,
    ],
  },

  "/products/clinical/vaccinations": {
    meta: { title: "Pharmacy vaccination and injection software | ZeeNovo", description: "Run flu and COVID-19 clinics faster with Quick Complete, saved vaccine preferences, group booking and automatic dose reminders." },
    blocks: [
      { type: "hero", eyebrow: "ZeeNovo Clinical", title: "Vaccines and injections, / booking to next dose.", description: "Flu, COVID-19, other vaccines and pharmacist-administered injections in one module. Lot details autofill. Dose reminders bring patients back.", primary: demo, secondary: trial, person: "vaccinationPharmacist", extras: ["flags", "badge"] },
      { type: "cards", eyebrow: "Vaccinations", title: "One flow from booking / to the next dose.", side: "Publicly funded flu and COVID-19, other routine and travel vaccines, and medicine injections.", items: [
        { title: "Book", text: "Walk-in, online, voice or group booking for families and clinics.", icon: "assessment" },
        { title: "Screen", text: "Screening and consent before every vaccine or injection.", icon: "safety" },
        { title: "Record", text: "DIN, lot, expiry, route, site and administering pharmacist on every dose.", icon: "record" },
        { title: "Remind", text: "Automatic email reminder with a booking link for the next dose.", icon: "vaccination" },
      ] },
      {"type": "featureIndex", "eyebrow": "Quick Complete", "title": "Public immunization / at clinic speed.", "side": "For publicly funded flu and COVID-19, Quick Complete goes from screening to documented administration in a few clicks. Only the fields a public immunization visit needs.", "groups": [{"title": "Quick Complete", "ids": ["quickVaccineFlow", "vaccineAutofill", "vaccineEditVisit", "injections", "groupBooking", "walkIn"]}], "art": "appointmentProfile", "artAlt": "Appointment booking form"},
      { type: "twoCard", eyebrow: "After the vaccine", title: "The record and the reminder, / handled for you.", left: { title: "Dose reminders", text: "Second doses, boosters and injection series reminded automatically. Patients book from the email or reply that they've had the dose elsewhere.", chips: ["Dose series", "Boosters", "Booking link", "Patient replies"] }, right: { title: "Documentation", text: "Vaccine administration record generated at the point of care and faxed to the physician.", chips: ["Generated record", "Built-in fax", "Stored in Canada", "Lot traceability"] } },
      { type: "cards", eyebrow: "Safety", title: "Safety on / every dose.", items: [
        { title: "Expired-lot guard", text: "An expired lot can't be recorded. Early access.", icon: "redFlag" },
        { title: "Duty PIN", text: "The pharmacist on duty is recorded as the administrator. Coming soon.", icon: "pharmacist" },
        { title: "Fridge temperature log", text: "Daily readings and cold-chain excursion reports. Coming soon.", icon: "shield" },
      ] },
      { type: "faq", eyebrow: "Questions", title: "Common questions.", items: [
        { q: "Can pharmacists give medicine injections here?", a: "Yes. Medicine injections are part of the same module, with their own screening, record and dose reminders." },
        { q: "Does ZeeNovo report to Panorama or COVaxON?", a: "No. Record the immunization in the provincial system as you do today. ZeeNovo keeps the pharmacy's record." },
      ] },
      { type: "cta", eyebrow: "Built for clinical care", title: "Run your next vaccine / clinic on ZeeNovo.", action: demo },
    ],
  },

  "/products/clinical/follow-up-and-reminders": {
    meta: { title: "Automated pharmacy follow-up and dose reminders | ZeeNovo", description: "Follow up with every patient without a call list. Secure email follow-up, pharmacist review only when flagged, and automatic dose reminders." },
    blocks: [
      { type: "hero", eyebrow: "ZeeNovo Clinical", title: "Follow up every patient. / Call only the ones / who need it.", description: "ZeeNovo sends follow-up questions after the visit. Patients answer by secure link, and a pharmacist reviews only flagged responses.", primary: demo, secondary: trial, person: "followupPharmacist", extras: ["flags", "badge"] },
      { type: "steps", eyebrow: "How it works", title: "Automated follow-up, / start to outcome.", side: "Set up once for each service. Every visit after that follows up on its own.", items: [
        { title: "Configured per service", text: "Timing set for each condition.", icon: "dayServices" },
        { title: "Sent automatically", text: "Email with a secure link to the follow-up questions.", icon: "dayBookings" },
        { title: "Answered by the patient", text: "Symptoms, adherence and side effects.", icon: "dayVisits" },
        { title: "Flagged when needed", text: "Worse symptoms or side effects go to a pharmacist.", icon: "dayFollowups" },
        { title: "Outcome recorded", text: "Resolved, improved, unchanged or worse, on the original visit.", icon: "dayRevenue" },
      ] },
      { type: "features", variant: "followup", eyebrow: "Follow-up by exception", title: "No call list. / Full documentation.", description: "Patients who are recovering answer and they're done. Only flagged responses come to a pharmacist.", art: "followupPanel", artAlt: "Follow-up panel with outcomes", ui: "followup", rows: [
        { title: "Review only flagged responses", text: "Act by calling, booking a visit or referring.", icon: "progress" },
        { title: "Manual follow-up", text: "Schedule one yourself at the end of any visit.", icon: "plan" },
        { title: "One record", text: "Questions, answers, flags and outcomes stay with the visit.", icon: "outcomes" },
      ] },
      {"type": "featureIndex", "eyebrow": "Dose reminders", "title": "More completed / dose series.", "side": "For vaccines and injections given in a series.", "groups": [{"title": "Dose reminders", "ids": ["doseReminders", "reminderBookingLink", "doseElsewhere", "reminderHistory"]}], "art": "doseReminders", "artAlt": "Dose reminders for two patients"},
      { type: "cards", eyebrow: "The difference", title: "Why it matters.", items: [
        { title: "Coverage", text: "Every patient is checked on, not only the ones staff had time to call.", icon: "pharmacist" },
        { title: "Documentation", text: "Every follow-up and outcome is recorded for your files and your next assessment.", icon: "record" },
        { title: "Return visits", text: "Patients come back for second doses and boosters.", icon: "vaccination" },
      ] },
      { type: "cta", eyebrow: "Built for clinical care", title: "Let follow-up / run itself.", action: demo },
    ],
  },

  "/products/clinical/medication-review": {
    meta: { title: "MedsCheck software for Ontario pharmacies | ZeeNovo", description: "MedsCheck Annual, Follow-up, Diabetes and At Home with Ontario forms filled in, Kroll medication history import and a due-invited-booked queue." },
    blocks: [
      { type: "hero", eyebrow: "ZeeNovo Clinical · Early access", title: "MedsCheck, without / retyping the med list.", description: "Import the Kroll medication history PDF, complete the review, and ZeeNovo fills in the Ontario MedsCheck forms.", primary: earlyAccess, secondary: demo, person: "clinicalPharmacist", extras: ["flags", "badge"] },
      { type: "cards", eyebrow: "Medication review", title: "One review. / Every form completed.", side: "Annual, Follow-up, Diabetes Annual, Diabetes Education follow-up and MedsCheck at Home.", items: [
        { title: "Kroll PDF import", text: "Each medicine matched to Health Canada's Drug Product Database.", icon: "record" },
        { title: "Ontario forms filled in", text: "Worksheet, personal medication record, take-home summary, acknowledgement and provider notification, plus the diabetes forms.", icon: "province" },
        { title: "Recall queue", text: "See who is due, invited and booked, with automatic invitation emails.", icon: "calendarStar" },
        { title: "Provider fax", text: "Fax the notification from the review.", icon: "steps" },
      ] },
      { type: "features", variant: "workflow", eyebrow: "Physician communication", title: "Keep the prescriber / in the loop.", description: "The provider notification is generated from the review and faxed from the same screen.", art: "physicianCard", artAlt: "Family physician details reused for fax", rows: [
        { title: "Physician on file", text: "Looked up once and reused.", icon: "assessment" },
        { title: "Provider notification", text: "Generated from the review.", icon: "steps" },
        { title: "Fax from the review", text: "Status shown in the log.", icon: "progress" },
      ] },
      { type: "features", variant: "followup", eyebrow: "Recall", title: "Bring patients back / when they're due.", description: "The recall queue shows who is due, invited and booked for their next review.", art: "followupPanel", artAlt: "Follow-up panel with review status", rows: [
        { title: "Due list", text: "See which patients are due for their next review.", icon: "plan" },
        { title: "Automatic invitations", text: "Email invitations from the queue.", icon: "progress" },
        { title: "Booked status", text: "Track who has booked.", icon: "outcomes" },
      ] },
      { type: "faq", eyebrow: "Questions", title: "Common questions.", items: [
        { q: "Is this connected to Kroll?", a: "No live connection. You import Kroll's medication history PDF." },
        { q: "Is it available in other provinces?", a: "Forms are for Ontario MedsCheck today. Ask about your province's program." },
      ] },
      { type: "cta", eyebrow: "Built for clinical care", title: "Turn reviews into / documented outcomes.", action: earlyAccess },
    ],
  },

  "/products/clinical/point-of-care-testing": {
    meta: { title: "Point-of-care testing software for pharmacies | ZeeNovo", description: "Record blood glucose, blood pressure, haemoglobin and COVID-19 results on the visit and fax a physician report from the same record." },
    blocks: [
      { type: "hero", eyebrow: "ZeeNovo Clinical · Early access", title: "Point-of-care tests, / recorded with the visit.", description: "Register devices, record results in the fields each test needs, and fax a physician report from the same record.", primary: earlyAccess, secondary: demo, person: "minorPharmacist", extras: ["flags", "badge"] },
      { type: "steps", eyebrow: "How it works", title: "From booking to result.", side: "The test is one step in the visit, not a separate log.", items: [
        { title: "Booked", text: "Online or walk-in.", icon: "dayBookings" },
        { title: "Screened", text: "Screening questions before the test.", icon: "dayVisits" },
        { title: "Recorded", text: "Result entered against the visit.", icon: "dayServices" },
        { title: "Interpreted", text: "The pharmacist records the interpretation and next step.", icon: "dayFollowups" },
        { title: "Documented", text: "A physician report to fax and a patient report by email.", icon: "dayRevenue" },
      ] },
      {"type": "featureIndex", "eyebrow": "Key features", "title": "Testing that stays / with the visit.", "side": "Blood glucose, blood pressure, haemoglobin and COVID-19.", "groups": [{"title": "Point-of-care testing", "ids": ["poct", "poctDevices", "poctWorkflows", "poctPhysicianReport", "poctPatientReport"]}], "art": "assessmentPanel", "artAlt": "Guided safety check in an assessment"},
      { type: "faq", eyebrow: "Questions", title: "Common questions.", items: [
        { q: "Does it connect to my testing device?", a: "Not today. Results are entered by hand." },
        { q: "Who interprets the result?", a: "The pharmacist interprets the result and decides the next step." },
      ] },
      { type: "cta", eyebrow: "Built for clinical care", title: "Add testing without / adding another system.", action: earlyAccess },
    ],
  },

  "/products/clinical/prescriptions-and-injections": {
    meta: { title: "Online prescription requests for pharmacies | ZeeNovo", description: "New, refill, renewal and transfer requests from your website and patient portal in one queue, each with a clear status." },
    blocks: [
      { type: "hero", eyebrow: "ZeeNovo Clinical", title: "Every prescription request, / in one queue.", description: "New, refill, renewal and transfer requests from your website and the Patient Portal, each with a status. Fewer phone calls to the counter.", primary: demo, secondary: trial, person: "clinicalPharmacist", extras: ["flags", "badge"] },
      { type: "cards", eyebrow: "Prescriptions", title: "Four request types. One queue.", side: "Patients request online or in the portal. The team sees every request and its status.", items: [
        { title: "Refill", text: "The most common request, handled without a phone call.", icon: "prescription" },
        { title: "New prescription", text: "Captured with the details the pharmacist needs.", icon: "record" },
        { title: "Renewal", text: "Tracked through to completion.", icon: "steps" },
        { title: "Transfer", text: "Incoming transfers in the same queue.", icon: "assessment" },
      ] },
      { type: "features", variant: "workflow", eyebrow: "Request status", title: "Status on / every request.", description: "Every request carries a status from the moment it arrives.", art: "appointmentProfile", artAlt: "Patient profile in ZeeNovo", rows: [
        { title: "One queue", text: "Website and portal requests arrive in the same place.", icon: "steps" },
        { title: "Clear status", text: "Patients and staff see where each request stands.", icon: "progress" },
        { title: "Patients informed", text: "Portal users see their request status without calling.", icon: "assessment" },
      ] },
      { type: "features", variant: "followup", eyebrow: "Injections", title: "Injection schedules / that keep themselves.", description: "Medicine injections are part of the Vaccinations and injections module, with screening, a full record and dose reminders.", art: "doseReminders", artAlt: "Dose reminders for two patients", rows: [
        { title: "Booked like any service", text: "Injection appointments on the same calendar, with group booking.", icon: "plan" },
        { title: "Complete record", text: "DIN, lot, expiry, route and site on every injection.", icon: "outcomes" },
        { title: "Dose reminders", text: "An email with a link to book the next dose.", icon: "progress" },
      ], link: { label: "See Vaccinations and Injections", href: "/products/clinical/vaccinations" } },
      { type: "cta", eyebrow: "Built for clinical care", title: "Put every request / in one place.", action: demo },
    ],
  },

  "/products/clinical/appointments": {
    meta: { title: "Pharmacy appointment booking and calendar | ZeeNovo", description: "A clinical calendar built on your hours, with walk-ins, phone and virtual visits, group bookings, a waitlist and booking links per service." },
    blocks: [
      { type: "hero", eyebrow: "ZeeNovo Clinical", title: "A calendar that only / offers deliverable times.", description: "Scheduled visits, walk-ins, waitlists and group bookings on one calendar, built on your hours and your team.", primary: demo, secondary: trial, person: "independentPharmacist", extras: ["flags", "badge"] },
      { type: "cards", eyebrow: "Calendar", title: "Set up the way / your pharmacy runs.", side: "Configure once. Patients only see the times you can actually deliver.", items: [
        { title: "Your hours", text: "Opening hours, breaks and holidays, in your time zone.", icon: "calendarStar" },
        { title: "Walk-in or later", text: "Staff take walk-ins now or book a later time. Patients self-book online.", icon: "assessment" },
        { title: "Visit modes", text: "In person, phone or virtual.", icon: "globe" },
        { title: "Group bookings", text: "Families and clinics in one appointment.", icon: "pharmacist" },
      ] },
      { type: "features", variant: "workflow", eyebrow: "Service control", title: "Control what / patients can book.", description: "Turn services on or off, collect a waitlist when a service is full and share a link for each one.", art: "appointmentProfile", artAlt: "Appointment booking form", rows: [
        { title: "Service on/off", text: "Turn online booking on or off per service.", icon: "safeguards" },
        { title: "Waitlist", text: "Full services collect a waitlist with a booking link.", icon: "plan" },
        { title: "Booking links and daily digest", text: "A direct link per service, and an email summary of upcoming appointments.", icon: "steps" },
      ] },
      {"type": "featureIndex", "eyebrow": "Patient list", "title": "Start with the patients / you already have.", "side": "Patient details are captured once and reused at every visit.", "groups": [{"title": "Patient list", "ids": ["csvImport", "familyDoctor", "preVisitQuestionnaire", "readyForPharmacist", "voiceBooking"]}], "art": "physicianCard", "artAlt": "Family physician details saved to the patient", "wording": {"voiceBooking": "Patients book by speaking, into the same calendar."}},
      { type: "cta", eyebrow: "Built for clinical care", title: "Keep your clinical / calendar full.", action: demo },
    ],
  },

  "/products/clinical/documentation-and-efax": {
    meta: { title: "Pharmacy clinical documentation and physician fax | ZeeNovo", description: "Prescription, assessment, vaccine and physician notification PDFs generated from the visit and faxed with status tracking." },
    blocks: [
      { type: "hero", eyebrow: "ZeeNovo Clinical", title: "The record is written / while you work.", description: "Prescription, assessment, vaccine administration and physician notification PDFs, generated from the visit. Fax or download from the same screen.", primary: demo, secondary: trial, person: "minorPharmacist", extras: ["flags", "badge"] },
      { type: "cards", eyebrow: "Documentation", title: "Four tasks you no / longer do by hand.", side: "Documentation comes from the visit, so it matches what happened.", items: [
        { title: "Generated documents", text: "PDFs created from the visit.", icon: "record" },
        { title: "Built-in fax", text: "Fax the physician without leaving ZeeNovo.", icon: "steps" },
        { title: "Fax status log", text: "What was sent, when, and its status.", icon: "shield" },
        { title: "Stored in Canada", text: "Patient records in Canada, with role-based access.", icon: "safety" },
      ] },
      { type: "features", variant: "workflow", eyebrow: "Fax", title: "Your choice on / every visit.", description: "Decide per visit where the documents go. No separate fax machine.", art: "sopTable", artAlt: "Document table in ZeeNovo", rows: [
        { title: "Fax the physician", text: "The family physician receives the notification.", icon: "steps" },
        { title: "Download", text: "Keep a copy of every document for the visit.", icon: "plan" },
        { title: "Physician on file", text: "Details reused at every visit and fax.", icon: "assessment" },
      ] },
      { type: "cta", eyebrow: "Built for clinical care", title: "Spend the time on the / patient, not the paperwork.", action: demo },
    ],
  },

  "/products/clinical/forms": {
    meta: { title: "Pharmacy forms library: national and provincial | ZeeNovo", description: "Fill in, sign and send 27 national and provincial pharmacy forms by fax or email, pre-filled from the patient record where possible." },
    blocks: [
      { type: "hero", eyebrow: "ZeeNovo Clinical · Coming soon", title: "27 pharmacy forms. / Filled, signed and sent.", description: "National and provincial forms pre-filled from the patient record where possible, signed electronically and sent by fax or email. A copy is kept on file.", primary: earlyAccess, secondary: demo, person: "independentPharmacist" },
      { type: "steps", eyebrow: "How it works", title: "Four steps, / no hunting.", side: "Every form starts from the patient and pharmacy details already in ZeeNovo.", items: [
        { title: "Choose", text: "Search by name or filter by province.", icon: "dayServices" },
        { title: "Fill", text: "Patient and pharmacy details added for you.", icon: "dayVisits" },
        { title: "Sign", text: "Electronic signature in ZeeNovo.", icon: "dayBookings" },
        { title: "Send", text: "Fax or email from the form. A copy stays on file.", icon: "dayFollowups" },
      ] },
      { type: "table", eyebrow: "Forms library", title: "Forms included.", columns: ["Group", "Forms include"], rows: [
        ["Clinical services", "Immunization consent · Smoking cessation · Pharmaceutical opinion · Prescriber notification · Adverse drug reaction report"],
        ["Dispensing", "Frequency of dispensing · Vacation supply · Prescription transfer · OHIP+ attestation"],
        ["Opioids and controlled substances", "OAT patient agreement · Naloxone record · Narcotic destruction · Loss or theft report · Forgery report"],
        ["Federal programs", "Non-Insured Health Benefits (NIHB)"],
        ["Cold chain", "Vaccine fridge temperature excursion report"],
        ["Provincial", "Alberta, BC Special Authority, Saskatchewan Exceptional Drug Status, Northwest Territories and Yukon forms"],
      ] },
      { type: "faq", eyebrow: "Questions", title: "Common questions.", items: [
        { q: "Can I send a form to the prescriber?", a: "Yes, by fax or email from the form." },
        { q: "Is a copy kept?", a: "Yes. Every completed form stays on file in ZeeNovo." },
      ] },
      { type: "cta", eyebrow: "Built for clinical care", title: "Stop hunting for / the right form.", action: earlyAccess },
    ],
  },

  "/products/assure": {
    meta: { title: "ZeeNovo Assure | Pharmacy incident reporting, CQI and SOPs", description: "Report incidents and near misses, run CQI, track corrective actions and SOP sign-off in one record. Inspection evidence kept as your team works." },
    blocks: [
      { type: "hero", eyebrow: "Provincial College Compliant", title: "Your safety program, / in one record. / Ready for inspection.", description: "Incident reporting, CQI meetings, corrective actions, SOP sign-off and staff competency in one place. Every record your College asks for is kept as the work is done.", primary: assureDemo, secondary: trial, person: "clinicalPharmacist", extras: ["timer"] },
      { type: "cards", eyebrow: "What is included", title: "Six parts of one / quality program.", side: "Each part feeds the next. A report becomes a documented improvement.", items: [
        { title: "Incident and near-miss reporting", text: "Structured capture of what happened, the stage, who caught it and why.", icon: "report", href: "/products/assure/incident-reporting" },
        { title: "Learnings and corrective actions", text: "Every action has an owner, a due date and a status.", icon: "act" },
        { title: "CQI meetings", text: "Attendees, minutes, linked incidents and follow-ups in one record.", icon: "pharmacist" },
        { title: "Pharmacy self-assessment", text: "63 questions, six safety domains, a score and an action plan.", icon: "compare", href: "/products/assure/self-assessment" },
        { title: "Staff competency", text: "Role-based staff assessments. Assign one to anyone on the team, track progress, review scores and get suggested SOPs to improve. Training and staff productivity in one cycle.", icon: "chartStar", href: "/products/assure/sops-and-training" },
        { title: "SOP library and sign-off", text: "Review SOPs, assign them to staff and track every sign-off. All your procedures and training in one place.", icon: "record", href: "/products/assure/sops-and-training" },
      ] },
      { type: "wave", tag: "Closed loop", title: "Report. Learn. Act. Improve.", description: "Every incident follows the same four steps, from first report to verified fix.", items: [
        { label: "Report", icon: "collect" },
        { label: "Learn", icon: "detect" },
        { label: "Act", icon: "act" },
        { label: "Improve", icon: "chartStar" },
      ] },
      {"type": "featureIndex", "eyebrow": "All features", "title": "Every Assure feature, / in one place.", "side": "Seven steps in your safety program. Each one opens to show the features behind it.", "groups": [{"title": "Reporting", "ids": ["guidedReporting", "incidentCapture", "nidr"], "text": "Capture incidents and near misses while the details are fresh, with guided fields and national reporting to ISMP Canada."}, {"title": "Analysis", "ids": ["contributingFactors", "learnings"], "text": "Find where the process failed. Contributing factors come from a structured list, and the learning is recorded on the incident."}, {"title": "Action", "ids": ["correctiveActions", "complianceDashboard"], "text": "Every corrective action has an owner, a due date and a status, with open items shown as complete or overdue."}, {"title": "Analytics", "ids": ["trendDashboards", "patientDemographics"], "text": "See the pattern: incident trends by degree of harm, contributing factor, medication and process stage."}, {"title": "Meetings", "ids": ["cqi"], "text": "CQI meetings with attendees, minutes, linked incidents and follow-ups, all kept in one record."}, {"title": "Staff competency", "ids": ["staffTraining", "competencyRefresher", "competencyReminders"], "text": "Assess staff on the work they do, with role-based modules and the SOP or refresher to assign next."}, {"title": "Inspection readiness", "ids": ["selfAssessment", "mssa", "sop", "userAccess"], "text": "Self-assessment scores, SOP sign-offs and individual logins, so the records are ready when asked."}]},
      { type: "steps", eyebrow: "Near miss to fix", title: "From near miss / to closed action.", side: "Every step is recorded against the same incident.", items: [
        { title: "Logged", text: "Stage, discovery and contributing factors captured at the point of error.", icon: "collect" },
        { title: "Reviewed", text: "Linked to the next CQI meeting, with the learning recorded.", icon: "compare" },
        { title: "Assigned", text: "A corrective action with an owner and a due date.", icon: "act" },
        { title: "Updated", text: "The affected SOP is revised and reassigned to staff.", icon: "report" },
        { title: "Verified", text: "Action complete, sign-offs recorded, trend checked at the next meeting.", icon: "detect" },
      ] },
      { type: "compare", eyebrow: "Assessments", title: "Know the difference.", description: "Three assessments answer three different questions. Use each one for what it measures.", items: [
        { title: "Pharmacy self-assessment", text: "How your site's practices measure up: 63 questions across six safety domains, with a score and an action plan.", icon: "screening" },
        { title: "Staff competency assessment", text: "How each person performs in their role, scored by module across 43 modules and four roles.", icon: "profile" },
        { title: "ISMP Canada MSSA", text: "ISMP Canada's validated Medication Safety Self-Assessment. Ask how ZeeNovo supports it.", icon: "shield" },
      ] },
      { type: "faq", eyebrow: "Questions", title: "Common questions.", items: [
        { q: "Who can see an incident report?", a: "Access is set by role. We will show you who can view and finalise each case." },
        { q: "Does ZeeNovo submit reports to ISMP Canada?", a: "Yes. Incident data goes to ISMP Canada's National Incident Data Repository." },
        { q: "Is Assure encrypted?", a: "Yes. ZeeNovo Assure is end-to-end encrypted." },
        { q: "Are your assessments the same as an OCP practice assessment?", a: "No. They check your own readiness using ZeeNovo's questions. They are not OCP criteria and are not endorsed by OCP." },
        { q: "What does Assure cost?", a: "See pricing. Assure includes a longer free trial." },
      ] },
      { type: "cta", eyebrow: "Built for pharmacy safety", title: "Walk into your next / inspection prepared.", text: "Bring an illustrative near miss to your demo, with no patient details.", action: assureDemo },
    ],
  },

  "/products/assure/self-assessment": {
    meta: { title: "Pharmacy safety self-assessment and action plan | ZeeNovo Assure", description: "63 questions across six safety domains. Get a Pharmacy Safety Score, gaps by domain, an action plan with owners and a PDF report." },
    blocks: [
      { type: "hero", eyebrow: "ZeeNovo Assure", title: "Find the gaps / before an inspector does.", description: "63 questions across six safety domains. Get your score, your gaps and an action plan with owners.", primary: assureDemo, secondary: trial, person: "followupPharmacist", extras: ["timer"] },
      { type: "twoCard", eyebrow: "What you get", title: "A score, a plan / and the evidence.", left: { title: "Pharmacy self-assessment", text: "How your site's practices measure up, across six safety domains.", chips: ["Pharmacy Safety Score", "Strengths", "Gaps", "Action plan"] }, right: { title: "The report", text: "A downloadable record of where you stand and what you are fixing.", chips: ["PDF report", "Owners assigned", "Due dates", "Reviewed at CQI"] } },
      { type: "steps", eyebrow: "From gap to action", title: "Every gap gets an owner.", side: "Results become corrective actions, not a PDF in a drawer.", items: [
        { title: "Assess", text: "Complete it as a team.", icon: "dayServices" },
        { title: "Score", text: "Strengths and gaps by domain.", icon: "dayRevenue" },
        { title: "Plan", text: "Turn each gap into an action.", icon: "dayVisits" },
        { title: "Assign", text: "Set an owner and a due date.", icon: "dayBookings" },
        { title: "Review", text: "Check progress at the CQI meeting.", icon: "dayFollowups" },
      ] },
      { type: "cta", eyebrow: "Built for pharmacy safety", title: "No surprises on / inspection day.", action: assureDemo },
    ],
  },

  "/products/assure/analytics": {
    meta: { title: "Pharmacy incident analytics for CQI | ZeeNovo Assure", description: "Incident trends by degree of harm, medication, process stage, contributing factor and discovery. Bring the evidence to every CQI meeting." },
    blocks: [
      { type: "hero", eyebrow: "ZeeNovo Assure", title: "See the pattern / before it repeats.", description: "Incident trends by medication, process stage, contributing factor and discovery. The chart and the case sit in the same CQI discussion.", primary: assureDemo, secondary: trial, person: "independentPharmacist", extras: ["timer"] },
      {"type": "featureIndex", "eyebrow": "Analytics", "title": "What the dashboard / shows you.", "side": "Dashboards update as reports come in.", "groups": [{"title": "Analytics", "ids": ["trendDashboards", "contributingFactors", "discovery", "patientDemographics", "complianceDashboard"]}], "art": "analyticsChart", "artAlt": "Incident analytics chart", "wording": {"trendDashboards": "Incidents and near misses by degree of harm, medication and process stage.", "contributingFactors": "The human, system and environmental factors that keep repeating."}},
      { type: "features", variant: "workflow", eyebrow: "What you can see", title: "Filter to the / cause, not the noise.", description: "Filter by degree of harm, medication, process stage, contributing factor and discovery.", art: "complianceList", artAlt: "Incident analytics categories", rows: [
        { title: "Incidents and near misses", text: "By degree of harm, medication and stage.", icon: "progress" },
        { title: "Repeating factors", text: "The contributing factors that keep appearing.", icon: "outcomes" },
        { title: "Follow-through", text: "Corrective actions and CQI follow-ups, open or complete.", icon: "plan" },
      ] },
      { type: "cta", eyebrow: "Built for pharmacy safety", title: "Bring the numbers to / your next CQI meeting.", action: assureDemo },
    ],
  },

  "/products/assure/sops-and-training": {
    meta: { title: "Pharmacy SOP management and staff sign-off | ZeeNovo Assure", description: "Assign the current SOP version, record every staff acknowledgement and assess competency by role. Version history ready for inspection." },
    blocks: [
      { type: "hero", eyebrow: "ZeeNovo Assure", title: "The current SOP. / The right people. / Proof they read it.", description: "Assign each new version to the staff who use it. See who has signed off, and who is overdue.", primary: assureDemo, secondary: trial, person: "clinicalPharmacist", extras: ["timer"] },
      { type: "steps", eyebrow: "SOP library", title: "Every version, / every sign-off.", side: "A record of who trained on what, and when.", items: [
        { title: "Start from a template", text: "Adopt a ZeeNovo SOP and adapt it for your pharmacy.", icon: "dayServices" },
        { title: "Keep every version", text: "Compare ZeeNovo template updates with your version and choose what to bring across.", icon: "dayVisits" },
        { title: "Assign and confirm", text: "Set a due date. Marked complete only when the person acknowledges it.", icon: "dayBookings" },
        { title: "See who's done", text: "The compliance dashboard shows complete and overdue staff.", icon: "dayFollowups" },
      ] },
      { type: "features", variant: "workflow", eyebrow: "Staff competency", title: "Assess staff on / the work they do.", description: "43 modules, 258 questions, scored by module. Managers see where a refresher is needed and assign the right SOP.", art: "sopDashboard", artAlt: "SOP and training dashboard", rows: [
        { title: "Pharmacists and managers", text: "Clinical decisions, medication safety, documentation, patient communication, incident management.", icon: "assessment" },
        { title: "Pharmacy technicians", text: "Dispensing accuracy, storage, workflow safety, SOP familiarity.", icon: "safeguards" },
        { title: "Pharmacy assistants", text: "Intake accuracy, privacy, workflow support, communication.", icon: "steps" },
      ] },
      { type: "cta", eyebrow: "Built for pharmacy safety", title: "Show who trained / on what, and when.", action: assureDemo },
    ],
  },

  "/products/magistral": {
    meta: { title: "ZeeNovo Magistral | Non-sterile compounding software", description: "Versioned master formulas, a formula engine that refuses unsafe inputs, PIN-signed batch records and lot-to-patient recalls. Built around NAPRA standards." },
    blocks: [
      { type: "hero", eyebrow: "Compound with confidence", title: "Non-sterile compounding. / Calculated, signed / and traceable.", description: "Versioned master formulation records, server-side calculations, PIN-signed batch stages and lot-to-patient recall tracing. Built around the NAPRA Model Standards for non-sterile compounding.", primary: earlyAccess, secondary: { label: "Book a Magistral Demo", href: "/book-a-demo" }, person: "clinicalPharmacist" },
      {"type": "featureIndex", "eyebrow": "Compounding", "title": "Every preparation, / traceable.", "side": "From the master formula to the recall, on one record.", "groups": [{"title": "Master formulas", "ids": ["masterFormulas", "formulaApproval", "budDates", "formulaLibrary"], "text": "One approved version in use at a time."}, {"title": "Formula engine", "ids": ["batchScaling", "concentrationUnits", "saltPotency", "dosageForms", "minWeighable", "unsafeInputs"], "text": "Calculations done on the server and tested against worked examples."}, {"title": "Risk assessment", "ids": ["riskAssessment"], "text": "Guided NAPRA decision tree to Level A, B or C."}, {"title": "Batch records", "ids": ["batchRecords", "secondCheck", "releaseChecks", "competencyGates", "capaGates", "postReleaseChanges"], "text": "No skipped steps, no self-verification."}, {"title": "Ingredients and inventory", "ids": ["ingredientList", "ingredientDocs", "purchasing", "quarantine", "lotBlocking", "lowStock", "ingredientVersions"], "text": "Only usable stock can be selected."}, {"title": "Recalls", "ids": ["recallTrace", "recallClose"], "text": "Lot to batch to patient in one step."}, {"title": "Quality and logs", "ids": ["qualityLogs", "equipmentRegister", "deviationsCapa", "controlledRegister"], "text": "Inspection records kept as you work."}, {"title": "Pricing", "ids": ["compoundPricing", "compoundFees", "consistentQuotes"], "text": "Quote a compound in seconds."}]},
      { type: "steps", eyebrow: "Formula to recall", title: "One record from / formula to recall.", side: "The formula version, ingredient lots, sign-offs and patients stay linked.", items: [
        { title: "Formula", text: "Approved version, cited beyond-use date.", icon: "dayServices" },
        { title: "Calculate", text: "Scaled batch, filler and trituration worked out.", icon: "dayVisits" },
        { title: "Compound", text: "Only usable lots and calibrated equipment.", icon: "dayBookings" },
        { title: "Verify and release", text: "Second-person PIN sign-off.", icon: "dayFollowups" },
        { title: "Recall", text: "Lot traced to batches and patients. Closed when every contact is logged.", icon: "dayRevenue" },
      ] },
      { type: "features", variant: "followup", eyebrow: "Readiness", title: "Inspection-ready / compounding records.", description: "Built around the NAPRA Model Standards for non-sterile compounding. Your pharmacy remains responsible for compliance.", art: "sopTable", artAlt: "Compounding records table", rows: [
        { title: "Signed at every stage", text: "Compounding, verification and release each carry a PIN signature and role.", icon: "progress" },
        { title: "Full traceability", text: "Formula version, ingredient lots and patients linked on every batch.", icon: "outcomes" },
        { title: "Controlled changes", text: "Amendments after release need a manager PIN and a reason.", icon: "plan" },
      ] },
      { type: "callout", eyebrow: "Not included today", title: "Clear about what / Magistral does not do yet.", text: "These are on the roadmap. Your pharmacy keeps its current process for each until they ship.", chips: ["Label printing (on-screen preview only)", "Report exports", "Automatic beyond-use date calculation", "Automatic lot selection by expiry", "Multi-location management", "Sterile compounding"], tone: "peach", action: { label: "See the Roadmap", href: "/resources/roadmap" } },
      { type: "faq", eyebrow: "Questions", title: "Common questions.", items: [
        { q: "Is Magistral NAPRA-certified?", a: "NAPRA does not certify software. Magistral is built around the NAPRA Model Standards for non-sterile compounding. Your pharmacy remains responsible for compliance." },
        { q: "Does it handle sterile compounding?", a: "No. Non-sterile preparations only." },
        { q: "Can we bring our existing formulas?", a: "Yes. Tell us how you keep them today and we will plan setup with you." },
        { q: "Does the formula engine replace the pharmacist's check?", a: "No. It does the arithmetic and refuses unsafe inputs. A pharmacist approves every formula. A second person verifies every batch." },
      ] },
      { type: "callout", eyebrow: "Technical overview", title: "ZeeNovo Magistral / technical sheet.", text: "A two-page summary for compounding pharmacists: the formula engine's calculations, batch stages and sign-offs, lot and recall handling, and the quality records.", tone: "lavender", action: { label: "Request the Technical Sheet", href: "/company/contact" } },
      { type: "cta", eyebrow: "Built for compounding", title: "Every batch, / on the record.", text: "Bring one formula you make every week to the demo.", action: earlyAccess },
    ],
  },

  "/products/sites": {
    meta: { title: "ZeeNovo Sites | Pharmacy website with live booking", description: "A branded pharmacy website that takes bookings 24/7 into your ZeeNovo calendar. Service pages, waitlist and prescription requests. Included with every plan." },
    blocks: [
      { type: "hero", eyebrow: "ZeeNovo Sites", title: "A pharmacy website / that books patients / around the clock.", description: "Your services, hours and location on a mobile-friendly site, booking live into your ZeeNovo calendar. Included with every plan.", primary: { label: "Get Your Website", href: "https://auth.zeenovo.com/signup" }, secondary: demo, person: "independentPharmacist" },
      {"type": "featureIndex", "eyebrow": "All features", "title": "Built to fill your / clinical calendar.", "side": "The site runs on your ZeeNovo services and calendar, so it is never out of date.", "groups": [{"title": "Your website", "ids": ["siteDesign", "categoryPages", "conditionPages", "seo", "aboutDraft", "siteIncluded"], "text": "Branded, and found in local search."}, {"title": "Booking", "ids": ["liveBooking", "groupBooking", "waitlist", "rxRequests", "serviceLinks"], "text": "Patients book what you offer, when you offer it."}, {"title": "Stay current", "ids": ["liveSync", "siteServiceControl", "confirmations", "voiceBooking", "centralListing"], "text": "Always in step with your pharmacy."}], "wording": {"voiceBooking": "Patients book by speaking, into the same calendar."}},
      { type: "features", variant: "workflow", eyebrow: "Website and portal", title: "Your storefront, / separate from the portal.", description: "The website brings in new patients. The Patient Portal is where existing patients sign in. Use either or both.", art: "appointmentProfile", artAlt: "A pharmacy website built on ZeeNovo Sites, with online booking", ui: "sites", reverse: true, rows: [
        { title: "Public website", text: "Anyone can find your pharmacy and book.", icon: "assessment" },
        { title: "Patient Portal", text: "Signed-in patients manage their own visits.", icon: "steps" },
        { title: "Same calendar", text: "Both book into one schedule.", icon: "plan" },
      ] },
      { type: "faq", eyebrow: "Questions", title: "Common questions.", items: [
        { q: "How do patients give consent?", a: "They tick a consent box and type the name of the person consenting: themselves or a family member." },
      ] },
      { type: "cta", eyebrow: "Built for independent pharmacy", title: "Launch your website / with your first service.", text: "Pick your services and brand. We publish the site.", action: demo },
    ],
  },

  "/products/patient-portal": {
    meta: { title: "Patient Portal | Online pharmacy appointments and refills", description: "Patients view, reschedule and cancel appointments, request prescriptions and answer follow-ups online. Fewer calls, every request in one queue." },
    blocks: [
      { type: "hero", eyebrow: "ZeeNovo Patient Portal", title: "Fewer counter calls. / Patients manage / their own visits.", description: "Patients sign in to reschedule or cancel appointments, request prescriptions and answer follow-up and dose-reminder questions. Every action lands in your queue.", primary: demo, secondary: { label: "See the Patient Experience", href: "/solutions/patients" }, person: "followupPharmacist" },
      {"type": "featureIndex", "eyebrow": "Self-service", "title": "What patients can do / without calling.", "side": "Every action reaches the pharmacy's queue with a clear status.", "groups": [{"title": "Patient self-service", "ids": ["voiceBooking", "patientLogins", "manageAppointments", "portalRx", "portalReminders", "portalDoseReplies", "patientProfile"]}], "art": "voicePhone", "artAlt": "Voice booking on a phone"},
      { type: "wave", tag: "For the pharmacy", title: "Self-service that / comes back to you.", description: "Every reschedule, cancellation and request arrives in the pharmacy's queue with a clear status.", items: [
        { label: "Fewer phone calls", icon: "automation" },
        { label: "Requests in one queue", icon: "grid" },
        { label: "Patients rebook with you", icon: "revenue" },
        { label: "Individual patient logins", icon: "shield" },
      ] },
      { type: "faq", eyebrow: "Questions", title: "Common questions.", items: [
        { q: "Do patients need an account to book?", a: "No. They can book on your pharmacy website. An account lets them manage visits and requests in one place." },
        { q: "Does the portal cost patients anything?", a: "No. Some pharmacy services have fees, as they do in person." },
        { q: "Can patients book for their family?", a: "Yes, with group booking." },
      ] },
      { type: "cta", eyebrow: "Get started", title: "Give your patients / a better front door.", action: demo },
    ],
  },

  "/products/voice-based-appointment-booking": {
    meta: { title: "Voice appointment booking for pharmacies | ZeeNovo", description: "Patients book by speaking in plain language. ZeeNovo matches the service and an open time and books it into your calendar. No forms." },
    blocks: [
      { type: "hero", eyebrow: "ZeeNovo Voice Booking", title: "Patients book / by speaking.", description: "Patients say what they need in plain language. ZeeNovo matches the service and an open time and books it into your calendar.", primary: { label: "Try It Now", href: "https://patient.zeenovo.com/login" }, secondary: demo, person: "minorPharmacist" },
      { type: "steps", eyebrow: "How it works", title: "From a sentence / to a booking.", side: "Patients say what they need in their own words. ZeeNovo finds the service and an open time, with no menus to search and no forms to fill in.", items: [
        { title: "Speak", text: "“I need a flu shot this week.”", icon: "dayServices" },
        { title: "Match", text: "The right service is found.", icon: "dayVisits" },
        { title: "Choose", text: "Open times are offered.", icon: "dayBookings" },
        { title: "Confirm", text: "The booking appears in your calendar.", icon: "dayFollowups" },
      ] },
      { type: "features", variant: "followup", eyebrow: "Accessibility", title: "Booking for patients / who find forms hard.", description: "Opens online booking to older patients and people with limited vision or mobility.", art: "voicePhone", artAlt: "Voice booking on a phone", rows: [
        { title: "Plain language", text: "No clinical terms needed.", icon: "assessment" },
        { title: "Booking only", text: "It books appointments. It does not give health advice.", icon: "safeguards" },
        { title: "Same intake and calendar", text: "Screening runs in your pharmacy's intake. Times come from your availability.", icon: "dayBookings" },
      ] },
      { type: "cta", eyebrow: "Get started", title: "Add voice booking / to your pharmacy.", action: demo },
    ],
  },
};
