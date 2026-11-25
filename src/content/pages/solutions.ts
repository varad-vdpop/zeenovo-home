import type { PageContent } from "@/components/blocks/types";

const demo = { label: "Book a Demo", href: "/book-a-demo" };
const ctaDefault = { type: "cta", eyebrow: "Get started", title: "See ZeeNovo with / your own services.", action: demo } as const;

export const solutionPages: Record<string, PageContent> = {
  "/solutions": {
    meta: { title: "Pharmacy software by role and pharmacy type | ZeeNovo", description: "ZeeNovo for independent pharmacies, owners, pharmacists, patients and pharmacy groups. Booking, clinical services and safety on one platform." },
    blocks: [
      { type: "hero", title: "One platform. / Set up for your role.", description: "Owners get revenue and compliance visibility. Pharmacists get guided visits and generated records. Groups get network reporting. Patients get online booking.", primary: demo, secondary: { label: "See Pricing", href: "/pricing" } },
      { type: "cards", eyebrow: "Solutions for", title: "Find your starting point.", side: "Each page shows what ZeeNovo changes for that role.", items: [
        { title: "Independent pharmacies", text: "Booking, clinical services and a safety program, with no per-user fees and no IT project.", icon: "storefront", href: "/solutions/independent-pharmacies" },
        { title: "Pharmacy owners", text: "Estimated clinical revenue by service and pharmacist, plus open safety actions.", icon: "revenue", href: "/solutions/pharmacy-owners" },
        { title: "Pharmacists", text: "Guided screening, red flags at the point of decision and documents generated from the visit.", icon: "pharmacist", href: "/solutions/pharmacists" },
        { title: "Patients", text: "Book a visit, request a prescription and get dose reminders online.", icon: "assessment", href: "/solutions/patients" },
        { title: "Inspection readiness", text: "Incident, CQI, SOP, clinical and compounding records kept as the work is done.", icon: "shield", href: "/solutions/inspection-readiness" },
        { title: "Multi-location groups", text: "Network reporting, a branded booking platform and one inbox per pharmacy. Launching soon.", icon: "grid", href: "/solutions/multi-location-groups" },
      ] },
      ctaDefault,
    ],
  },

  // The hero, reality, wave, steps and CTA copy lives in src/app/solutions/independent-pharmacies/page.tsx
  // (approved custom layout). This entry holds its meta and the feature explorer.
  "/solutions/independent-pharmacies": {
    meta: { title: "Software for independent pharmacies | ZeeNovo", description: "Online booking, guided clinical services, automated follow-up and a safety program. Unlimited users, website included, no IT project." },
    blocks: [
      {"type": "featureIndex", "eyebrow": "Features", "title": "What an independent / pharmacy gets.", "side": "Choose an area to see what ZeeNovo does there.", "groups": [{"title": "Automation", "ids": ["autoFollowup", "doseReminders", "autoDocs", "efax"], "text": "Follow-up, reminders, documents and fax, handled without staff time."}, {"title": "Storefront", "ids": ["siteDesign", "liveBooking", "voiceBooking", "serviceLinks", "groupBooking", "waitlist"], "text": "A website and online booking of your own."}, {"title": "Clinical services", "ids": ["conditionLibrary", "adaptiveAssessment", "redFlags", "medicineSig", "vaccinePrograms"], "text": "Guided visits for minor ailments and vaccines."}, {"title": "No IT project", "ids": ["quickSetup", "csvImport", "unlimitedUsers", "siteIncluded"], "text": "Set up in a day, with no per-seat fees."}, {"title": "Safety program", "ids": ["incidentCapture", "cqi", "selfAssessment", "sop"], "text": "Incidents, CQI, self-assessment and SOPs in the same place."}], "wording": {"conditionLibrary": "28 minor ailments, shown according to your province's list.", "adaptiveAssessment": "Guided screening. The next question follows from the last answer.", "redFlags": "Red flags at the point of decision, with referral criteria shown.", "medicineSig": "Saved directions for each condition, for the pharmacist to confirm.", "vaccinePrograms": "Flu, COVID-19 and other vaccines, each with its own booking and documentation.", "unlimitedUsers": "Every team member has their own login. No per-seat fees.", "sop": "SOPs assigned by version, with staff sign-off recorded."}},
    ],
  },

  "/solutions/multi-location-groups": {
    meta: { title: "ZeeNovo Enterprise | Software for pharmacy groups and chains", description: "Network analytics across Clinical and Assure, a branded booking platform and one inbox per pharmacy. Aggregate, de-identified reporting only. Launching soon." },
    blocks: [
      { type: "solutionHero", eyebrow: "ZeeNovo Enterprise · Launching soon", title: "Run, see and speak / to your whole network / from one place.", description: "A branded booking platform, a network dashboard across Clinical and Assure, and one inbox in every member pharmacy. The group sees aggregate, de-identified data only.", primary: { label: "Join Early Access", href: "/book-a-demo" }, secondary: { label: "Book a Network Demo", href: "/book-a-demo" }, person: "clinicalPharmacist",
        liveCard: { label: "This month", chip: "Illustrative example", title: "Active pharmacies", itemTitle: "42 of 48", itemText: "6 onboarding" },
        noteCard: { title: "Message sent", text: "Formulary update to all Ontario locations." } },
      { type: "reality", eyebrow: "The reality", title: "Running a network / from the outside in.", side: "Groups are accountable for results they can't see.", items: [
        { title: "No common reporting", text: "Each store reports in its own format and timing, so results don't compare." },
        { title: "No read receipts", text: "Network-wide updates go by email with no record of who read them." },
        { title: "Booking split across sites", text: "The group brand is on the sign, but booking runs on separate pharmacy websites." },
      ] },
      { type: "cards", eyebrow: "What groups get", title: "Four layers above / your pharmacies.", side: "Built on the Clinical and Assure modules your pharmacies already use. Nothing changes at store level.", items: [
        { title: "Chain booking platform", text: "Patients choose a service, then a group pharmacy that offers it, on your brand and domain.", icon: "storefront" },
        { title: "Chain dashboard", text: "Network and pharmacy-level analytics across Clinical and Assure.", icon: "chartStar" },
        { title: "Communication", text: "Send to the network, one province or one pharmacy. Messages land in one inbox per pharmacy.", icon: "globe" },
        { title: "ZeeNovo Central", text: "Your pharmacies are listed in ZeeNovo's public directory by location and service.", icon: "grid", href: "/products/zeenovo-central" },
      ] },
      { type: "table", eyebrow: "Chain dashboard: Clinical", title: "What the group sees, / measure by measure.", columns: ["Measure", "What the group sees"], rows: [
        ["Network status", "Member locations: invited, onboarding, activated, inactive, suspended. Account setup shown separately from clinical activity."],
        ["Module adoption", "Number and percentage of locations using Clinical, Assure, websites and online booking."],
        ["Program participation", "Eligible and activated locations for minor ailments, flu, COVID-19, other vaccines, injections and medication reviews."],
        ["Services completed", "Total, growth against the previous period, breakdown by program. Started and abandoned workflows counted separately."],
        ["Unique patients served", "De-identified count with a completed service; new and returning trends where the threshold allows."],
        ["Location utilization", "Active clinical locations, average and median services per location, spread and trend."],
        ["Estimated service value", "From service values you set. Labelled as an estimate, not confirmed claims or payments."],
        ["Appointment fulfilment", "Booked, completed, cancelled and missed, with completion, cancellation and no-show rates."],
        ["Booking origin", "ZeeNovo Central, chain platform, pharmacy website, walk-in, staff entry, referral or campaign link."],
        ["Minor ailments", "Completed assessments, prescription rate, self-care, red flags, referrals to physician, urgent care or emergency."],
        ["Flu and COVID-19", "Bookings, vaccinations, completion, walk-ins, cancellations and no-shows, per program."],
        ["Medication reviews", "Completed reviews, issues identified, interventions, care plans, physician communications, follow-up actions and issue resolution."],
        ["Follow-up", "Required, scheduled, delivered, responded and completed, by attempt, plus no response after all attempts."],
        ["Quality and CQI", "Incident and CQI activity, SOP completion, staff assessment, self-assessment and corrective actions, from Assure."],
      ], note: "Four layers: executive summary, program drill-downs, location comparison and methodology. Every figure compares with the previous period and breaks down by location where privacy thresholds allow." },
      {"type": "featureIndex", "eyebrow": "All features", "title": "Every enterprise feature, / in one place.", "side": "Choose an area to see what the group gets.", "groups": [{"title": "Chain booking platform", "ids": ["chainDomain", "chainPlatform", "serviceFirst", "chainServiceFilter", "chainCalendar", "central"], "text": "Your brand, your pharmacies, one place to book."}, {"title": "Chain dashboard: Clinical", "ids": ["execSummary", "reportingParameters", "drillDowns", "locationComparison", "periodComparison", "serviceValues"], "text": "From the network view down to each program and pharmacy."}, {"title": "Methodology", "ids": ["methodology", "methodExclusions", "methodResponses"], "text": "Every calculation is documented."}, {"title": "Chain dashboard: Assure", "ids": ["networkQuality"], "text": "Network and per-pharmacy quality analytics."}, {"title": "Communication", "ids": ["communication", "targetedSends", "messageAlerts", "messageReceipts"], "text": "One inbox in every pharmacy."}, {"title": "Onboarding, roles and configuration", "ids": ["onboarding", "locationStatus", "networkConfig", "roles", "primaryAdmin", "supportAccess", "accessLogs"], "text": "The right access for each person."}]},
      { type: "table", eyebrow: "Methodology", title: "Every calculation, / documented.", columns: ["Measure", "Calculation", "Safeguard"], rows: [
        ["Program participation", "Activated eligible locations ÷ eligible member locations", "Count and percentage both shown"],
        ["Module adoption", "Locations actively using the module ÷ member locations", "\"Actively using\" defined by a documented activity window"],
        ["Appointment completion", "Completed ÷ appointments whose time has passed", "Cancellations and no-shows shown separately"],
        ["Follow-up coverage", "Follow-ups scheduled ÷ services requiring follow-up", "Unscheduled follow-up never counted as completed"],
        ["Follow-up response", "Valid responses ÷ follow-ups due", "Response rate shown beside outcome rate"],
        ["Confirmed positive outcome", "Resolved or improved ÷ valid outcome responses", "Non-responders never counted as successes"],
        ["Medication issue resolution", "Resolved ÷ issues with a documented outcome", "Pending and unknown kept separate"],
        ["Escalation closure", "Closed ÷ escalations requiring action", "A response alone isn't clinical closure"],
      ], note: "A number means the same thing at network, province and pharmacy level. Excluded records are listed, not silently dropped." },
      { type: "features", variant: "followup", eyebrow: "Privacy by design", title: "Aggregate and / de-identified. Always.", description: "Enterprise users see counts, rates and trends. They never see patients, records, notes or prescriptions.", rows: [
        { title: "Minimum group size", text: "Results appear only above a privacy threshold. Below it, the dashboard shows \"insufficient data\".", icon: "safeguards" },
        { title: "No patient identifiers", text: "Names, health card numbers, contact details, exact dates of birth, medication names, assessment answers and free-text notes never reach an enterprise screen.", icon: "assessment" },
        { title: "Logged access", text: "Role-based access, with access and export logs.", icon: "steps" },
      ], art: "analyticsChart", artAlt: "Aggregate network trend chart" },
      {"type": "featureIndex", "eyebrow": "Every safeguard", "title": "The same privacy rules / on every screen.", "side": "Cards, charts, tables, comparisons, rankings and downloads all follow them.", "groups": [{"title": "Privacy controls", "ids": ["minimumCohort", "suppression", "privacyFilters", "privacyBroaderCuts", "noPatientData", "privacySameRules", "privacyContext"]}]},
      { type: "table", eyebrow: "Roles and capabilities", title: "The right access / for each person.", columns: ["Capability", "What it covers"], rows: [
        ["View reporting", "All dashboard layers. Always on."],
        ["Manage communication", "Compose, publish, schedule, withdraw; view acknowledgements. Off by default."],
        ["Manage pharmacy network", "Invite, resend, revoke, link and unlink locations."],
        ["Manage users", "Invite, edit, deactivate and reactivate enterprise users."],
        ["Manage brand and domain", "Brand, custom domain, DNS verification, ownership transfer. Primary Admin only."],
        ["Force lockout", "Lock an account and end its sessions immediately. Primary Admin only."],
      ], note: "There is always one Primary Admin. The role can be transferred to another active admin, never removed. ZeeNovo support access is separate from enterprise roles and logged separately." },
      { type: "faq", eyebrow: "Questions", title: "Common questions.", items: [
        { q: "Can the group see patient records?", a: "No. Aggregate, de-identified figures only. Records stay with each pharmacy." },
        { q: "Do our pharmacies change how they work?", a: "No. Enterprise sits on the Clinical and Assure modules they already use." },
        { q: "Does ZeeNovo submit claims for the group?", a: "No. Estimated service value is an estimate, not claims or payments." },
        { q: "Can we use our own domain?", a: "Yes. Start on a ZeeNovo subdomain and point your domain to it when ready." },
        { q: "How do groups buy?", a: "Through an enterprise agreement. Book a call to scope it." },
      ] },
      { type: "cta", eyebrow: "Built for pharmacy groups", title: "One view of the network. / One voice to every store.", text: "Send us your member list. We handle the invitations.", action: { label: "Join Early Access", href: "/book-a-demo" } },
    ],
  },

  "/solutions/pharmacy-owners": {
    meta: { title: "Clinical revenue and compliance visibility for owners | ZeeNovo", description: "Estimated clinical revenue by service and pharmacist, staff productivity, follow-up status and open safety actions, from work your team already records." },
    blocks: [
      { type: "solutionHero", eyebrow: "Pharmacy owners", title: "Clinical revenue / you can see, / and grow.", description: "Estimated revenue by service and pharmacist, staff productivity and open safety actions, reported from the visits and records your team already completes in ZeeNovo.", primary: demo, secondary: { label: "See Pricing", href: "/pricing" }, person: "independentPharmacist",
        liveCard: { label: "This month", chip: "Up on last month", title: "Clinical services", itemTitle: "186 delivered", itemText: "Minor ailments and vaccines" },
        noteCard: { title: "Safety score", text: "Self-assessment up from last quarter." } },
      { type: "reality", eyebrow: "The reality", title: "What owners can't / see today.", side: "Most owners find out how clinical services went after the month ends.", items: [
        { title: "No revenue view by service", text: "Services are delivered, but no report shows which ones grew or who delivered them." },
        { title: "Staff hours limit new services", text: "Each added service needs time the team doesn't have." },
        { title: "Compliance evidence is assembled late", text: "Inspection prep starts when the notice arrives." },
      ] },
      { type: "wave", tag: "With ZeeNovo", title: "How the picture changes", description: "The numbers come from the work itself, so nobody has to compile them.", items: [
        { label: "Revenue by service", icon: "revenue" },
        { label: "Fewer missed claims", icon: "chartStar" },
        { label: "Hours back per visit", icon: "automation" },
        { label: "Records ready for inspection", icon: "shield" },
      ] },
      { type: "steps", eyebrow: "Where the revenue comes from", title: "Funded services, / fully captured.", side: "Provincial programs pay for minor ailment assessments, medication reviews and publicly funded vaccines. The constraint is time per visit and visits never booked.", items: [
        { title: "More visits booked", text: "Website, voice booking, service links, group bookings and a waitlist.", icon: "dayBookings" },
        { title: "Less time per visit", text: "Intake done before the pharmacist starts. Documents and fax generated from the visit.", icon: "dayVisits" },
        { title: "Fewer missed claims", text: "The billing PIN for the service, mode and outcome is on every visit.", icon: "dayServices" },
        { title: "Patients brought back", text: "MedsCheck invitations and dose reminders sent automatically.", icon: "dayFollowups" },
        { title: "Revenue reported", text: "Estimated revenue by service and pharmacist, every month.", icon: "dayRevenue" },
      ], action: { label: "Open the ROI Calculator", href: "/pricing/roi-calculator" } },
      {"type": "featureIndex", "eyebrow": "Features for owners", "title": "The numbers and controls / owners ask for.", "side": "ZeeNovo estimates revenue and shows billing PINs. It doesn't submit claims.", "art": "analyticsChart", "artAlt": "Pharmacy performance chart", "groups": [{"title": "Visibility", "ids": ["performanceView", "billingPins", "followupTracking", "correctiveActions", "unlimitedUsers", "quickSetup"]}], "wording": {"performanceView": "Estimated revenue by service and pharmacist, calculated per completed visit from your province's fees. Staff productivity and top services on the same view.", "followupTracking": "Follow-up status across your patients.", "correctiveActions": "Open incidents, overdue SOP sign-offs and CQI follow-ups.", "unlimitedUsers": "No per-seat fees.", "quickSetup": "Import patients, choose services, start booking."}},
      { type: "cta", eyebrow: "Built for pharmacy owners", title: "Know what your pharmacy / delivered this month.", text: "Start with the services you offer today.", action: demo },
    ],
  },

  "/solutions/pharmacists": {
    meta: { title: "Clinical workflow software for pharmacists | ZeeNovo", description: "Guided screening, red flags at the point of decision, documents and physician fax generated from the visit, and follow-up by exception." },
    blocks: [
      { type: "solutionHero", eyebrow: "Pharmacists", title: "More time with / the patient. Less / with the form.", description: "Guided screening, red flags where you decide, and documents generated from the visit. Every clinical decision stays with you.", primary: demo, secondary: { label: "See Minor Ailments", href: "/products/clinical/minor-ailments" }, person: "followupPharmacist",
        liveCard: { label: "Live assessment", chip: "Red flag cleared", title: "Allergic rhinitis", itemTitle: "Symptoms", itemText: "3 answers captured" },
        noteCard: { title: "Record ready", text: "Assessment, outcome and physician note." } },
      { type: "reality", eyebrow: "The reality", title: "The work around / the work.", side: "The consultation is the easy part. Everything around it takes the time.", items: [
        { title: "Criteria held in memory", text: "Each condition has its own criteria. Each province has its own rules." },
        { title: "Documentation after hours", text: "Notes wait until the queue is clear." },
        { title: "Follow-up calls get dropped", text: "Calling every patient back isn't possible on a busy shift." },
      ] },
      { type: "wave", tag: "With ZeeNovo", title: "How the picture changes", description: "The structure is handled. The judgement stays yours.", items: [
        { label: "Intake done before you", icon: "calendarStar" },
        { label: "Screening guided", icon: "grid" },
        { label: "Record generated", icon: "automation" },
        { label: "Follow-up by exception", icon: "chartStar" },
      ] },
      { type: "steps", eyebrow: "A better shift", title: "Less admin around / the consultation.", side: "What happens before and after the visit is handled.", items: [
        { title: "Intake complete", text: "Technicians finish intake and mark the visit ready for you.", icon: "dayBookings" },
        { title: "Screening guided", text: "The next question follows from the last answer.", icon: "dayVisits" },
        { title: "Decision recorded", text: "Your saved directions and protocol notes. Your decision.", icon: "dayServices" },
        { title: "Record generated", text: "Documents and the physician fax are produced from the visit.", icon: "dayRevenue" },
        { title: "PIN shown, follow-up sent", text: "No billing lookup. Only patients who need you come back.", icon: "dayFollowups" },
      ] },
      { type: "cta", eyebrow: "Built with pharmacists", title: "Practise to your full / scope, with support.", text: "See a guided assessment from start to finish.", action: demo },
    ],
  },

  "/solutions/patients": {
    meta: { title: "Book a pharmacy service online | ZeeNovo", description: "Book a minor ailment visit or vaccine, request a refill, and get dose reminders from your own pharmacy. Free for patients." },
    blocks: [
      { type: "solutionHero", eyebrow: "Patients", title: "Your pharmacy, / open for booking / any time.", description: "Book a minor ailment visit or vaccine, request a refill and get reminders, with the pharmacy you already use.", primary: { label: "Find a Pharmacy", href: "https://central.zeenovo.com" }, secondary: { label: "Patient Login", href: "https://patient.zeenovo.com/login" }, person: "minorPharmacist",
        liveCard: { label: "Booked", chip: "Confirmed", title: "Flu vaccine", itemTitle: "Thursday, 10:30 am", itemText: "Reminder the day before" },
        noteCard: { title: "Second dose due", text: "Book your time from the reminder link." } },
      {"type": "featureIndex", "eyebrow": "What you can do", "title": "Less waiting. / Fewer phone calls.", "side": "Everything happens with your own pharmacy and your own pharmacist.", "art": "voicePhone", "artAlt": "Voice booking on a phone", "groups": [{"title": "Booking", "ids": ["voiceBooking", "manageAppointments", "portalRx", "portalReminders", "groupBooking", "preVisitQuestionnaire"]}], "wording": {"voiceBooking": "Book online or by voice. Choose a service and time, or say what you need.", "manageAppointments": "Reschedule or cancel online.", "portalRx": "Refill, renewal or transfer without a phone call.", "portalReminders": "Dose reminders, follow-up questions and a link to book again.", "groupBooking": "Book for your family. Several people in one appointment.", "preVisitQuestionnaire": "Answer questions before you arrive. Your pharmacist has your answers when you get there."}},
      { type: "features", variant: "followup", eyebrow: "Your information", title: "Your health information / stays protected.", description: "Your pharmacy controls your record. ZeeNovo stores it in Canada and logs every access.", rows: [
        { title: "Your own login", text: "Only you and your pharmacy see your bookings.", icon: "safeguards" },
        { title: "Family doctor saved once", text: "Not repeated at every visit.", icon: "progress" },
        { title: "Stored in Canada", text: "Your pharmacy is responsible for your record. ZeeNovo stores it in Canada.", icon: "plan" },
      ], art: "doseReminders", artAlt: "Dose reminders for a patient" },
      { type: "faq", eyebrow: "Questions", title: "Common questions.", items: [
        { q: "Do I need an account to book?", a: "No. Book on your pharmacy's website. An account lets you manage bookings and requests in one place." },
        { q: "Is there a cost to use the portal?", a: "No. Your pharmacy may charge for some services, as it does in person." },
        { q: "Can I book for my family?", a: "Yes. Group booking covers several people in one appointment." },
      ] },
      { type: "cta", eyebrow: "For patients", title: "Find a pharmacy / near you.", action: { label: "Find a Pharmacy", href: "https://central.zeenovo.com" } },
    ],
  },

  "/solutions/inspection-readiness": {
    meta: { title: "Pharmacy inspection readiness: OCP and NAPRA records | ZeeNovo", description: "Incident, CQI, SOP, visit, vaccine and compounding records kept as work happens, so they're ready when an OCP assessor or inspector asks." },
    blocks: [
      { type: "solutionHero", eyebrow: "Inspection readiness", title: "Assessment records, / kept as you work, / ready on request.", description: "ZeeNovo records the evidence assessors ask for during daily work, across your safety program, clinical services and compounding. No binder rebuild before the visit.", primary: demo, secondary: { label: "See Assure", href: "/products/assure" }, person: "vaccinationPharmacist",
        liveCard: { label: "Self-assessment", chip: "Action plan", title: "Before your assessment", itemTitle: "Gaps assigned", itemText: "Each with an owner and a date" },
        noteCard: { title: "Records on request", text: "Incident, CQI, SOP and visit records." } },
      { type: "table", eyebrow: "Evidence on request", title: "What assessors ask for, / and where it lives.", columns: ["What you're asked", "Where it is in ZeeNovo"], rows: [
        ["How do you manage medication incidents and near misses?", "Assure: each incident with contributing factors, learnings and corrective action."],
        ["Show us your CQI process.", "Assure: CQI minutes, attendees, linked incidents and follow-ups."],
        ["Are your SOPs current, and has staff read them?", "Assure: SOP version history and who acknowledged which version, and when."],
        ["How do you know your staff are competent?", "Assure: role-based competency results by module."],
        ["Have you assessed your own practice?", "Assure: self-assessment report and action plan."],
        ["Show the documentation for this assessment.", "Clinical: visit record, outcome, prescription and physician notification."],
        ["Was the physician notified?", "Clinical: fax log with each fax's status."],
        ["Which lot did this patient receive?", "Clinical: DIN, lot, expiry, route, site and administering pharmacist on every vaccine."],
        ["Show this compounded batch record.", "Magistral: formulation record version, ingredient lots, PIN-signed compounding, verification and release."],
        ["Is your equipment calibrated?", "Magistral: equipment register and calibration history."],
        ["Show your cleaning and temperature logs.", "Magistral: cleaning, temperature and environment logs with e-signed periodic reviews."],
        ["How do you handle deviations?", "Magistral: deviations and CAPA through to the effectiveness check."],
      ], note: "ZeeNovo Magistral is in early access." },
      { type: "cards", eyebrow: "Readiness is part of the work", title: "Records made during the work, / not reconstructed after it.", side: "OCP and NAPRA don't approve or endorse software. ZeeNovo keeps the records your practice needs.", items: [
        { title: "Every action has an owner and a date", text: "Nothing is lost between CQI meetings.", icon: "record" },
        { title: "Sign-offs are recorded", text: "SOP acknowledgements, compounding e-signatures and log reviews show who did what, and when.", icon: "pharmacist" },
        { title: "Check yourself first", text: "Run the pharmacy self-assessment before your assessment and close the gaps.", icon: "safety" },
      ] },
      { type: "cta", eyebrow: "Get started", title: "Walk into your next / assessment prepared.", action: demo },
    ],
  },
};
