import type { PageContent } from "@/components/blocks/types";

const demo = { label: "Book a Demo", href: "/book-a-demo" };
const ctaDefault = { type: "cta", eyebrow: "Get started", title: "See ZeeNovo with / your own services.", action: demo } as const;

export const solutionPages: Record<string, PageContent> = {
  "/solutions": {
    meta: { title: "Solutions | ZeeNovo", description: "ZeeNovo for independent pharmacies, multi-location groups, pharmacy owners, pharmacists and patients." },
    blocks: [
      { type: "hero", title: "Built for everyone / behind the counter.", description: "The same platform, set up for the way each role works.", primary: demo, secondary: { label: "See Pricing", href: "/pricing" } },
      { type: "cards", eyebrow: "Solutions for", title: "Find your starting point.", side: "Each page shows what ZeeNovo changes for that role.", items: [
        { title: "Independent Pharmacies", text: "Big pharmacy tools for one front door.", icon: "storefront", href: "/solutions/independent-pharmacies" },
        { title: "Multi-Location Groups", text: "Run, see and speak to your whole network.", icon: "grid", href: "/solutions/multi-location-groups" },
        { title: "Pharmacy Owners", text: "Clinical revenue you can see and grow.", icon: "revenue", href: "/solutions/pharmacy-owners" },
        { title: "Pharmacists", text: "Structured consultations, less admin.", icon: "pharmacist", href: "/solutions/pharmacists" },
        { title: "Patients", text: "Book, request and follow up online.", icon: "assessment", href: "/solutions/patients" },
      ] },
      ctaDefault,
    ],
  },

  "/solutions/multi-location-groups": {
    meta: { title: "Multi-Location Pharmacy Groups | ZeeNovo Enterprise", description: "A branded booking platform for your chain, network-level clinical and quality analytics, and one communication channel to every member pharmacy. Aggregate and de-identified." },
    blocks: [
      { type: "solutionHero", eyebrow: "Multi-location groups", title: "Run, see and speak / to your whole network / from one place.", description: "A branded booking platform for your group, network analytics across Clinical and Assure, and one inbox in every member pharmacy.", primary: demo, person: "clinicalPharmacist",
        liveCard: { label: "Network view", chip: "This month", title: "Active pharmacies", itemTitle: "42 of 48", itemText: "6 still onboarding" },
        noteCard: { title: "Message sent", text: "Formulary update to all Ontario locations." } },
      { type: "reality", eyebrow: "The reality", title: "Running a network / from the outside in.", side: "Groups are accountable for results they cannot see.", items: [
        { title: "Every store reports differently", text: "Numbers arrive in different formats and on different days. Nothing compares." },
        { title: "Messages get lost", text: "Email to forty pharmacies, and nobody knows who read the formulary update." },
        { title: "Patients cannot find you", text: "Your brand is on the sign, but booking happens on forty different websites." },
      ] },
      { type: "cards", eyebrow: "What groups get", title: "Four surfaces above / your pharmacies.", side: "Built on the ZeeNovo modules your pharmacies already use. Nothing is rebuilt at store level.", items: [
        { title: "Chain booking platform", text: "Patients pick a service, then a pharmacy that offers it, on your brand and domain.", icon: "storefront" },
        { title: "Chain dashboard", text: "Network and pharmacy-level analytics across Clinical and Assure.", icon: "chartStar" },
        { title: "Communication", text: "Send to the network, a province or one pharmacy. It lands in one inbox.", icon: "globe" },
        { title: "Onboarding", text: "Import your member list and track each pharmacy from invited to activated.", icon: "grid" },
      ] },
      { type: "features", variant: "followup", eyebrow: "Privacy by design", title: "Aggregate and / de-identified. Always.", description: "Enterprise users see counts, rates and trends. They do not see patients, records, notes or prescriptions.", rows: [
        { title: "Small groups protected", text: "Results appear only for groups large enough to keep every patient anonymous.", icon: "safeguards" },
        { title: "Protected totals", text: "Hidden figures cannot be worked out from other numbers on the screen.", icon: "assessment" },
        { title: "Logged access", text: "Role-based access, with access and export logs.", icon: "steps" },
      ], art: "analyticsChart", artAlt: "Aggregate network trend chart" },
      {"type": "featureIndex", "eyebrow": "All features", "title": "Every enterprise feature, / in one place.", "side": "Choose an area to see what the group gets.", "groups": [{"title": "Chain booking platform", "ids": ["chainPlatform", "serviceFirst", "central"], "text": "Your brand, your pharmacies, one place to book."}, {"title": "Chain dashboard", "ids": ["execSummary", "reportingParameters", "periodComparison", "methodology"], "text": "The network view on one screen."}, {"title": "Drill-downs and value", "ids": ["drillDowns", "locationComparison", "networkQuality", "serviceValues"], "text": "From network to program to pharmacy."}, {"title": "Privacy controls", "ids": ["minimumCohort", "suppression", "noPatientData", "accessLogs"], "text": "Aggregate and de-identified, always."}, {"title": "Communication", "ids": ["communication", "messageAlerts"], "text": "One inbox in every pharmacy."}, {"title": "Network management", "ids": ["onboarding", "roles", "primaryAdmin"], "text": "The right access for each person."}]},
      { type: "ctaSplit", eyebrow: "Built for pharmacy groups", title: "One view of the network. / One voice to every store.", text: "Send us your member list. We handle the invitations.", primary: demo, secondary: { label: "Talk to Us", href: "/company/contact" }, note: { title: "Network onboarding", text: "Invitations sent from your member list." } },
    ],
  },

  "/solutions/pharmacy-owners": {
    meta: { title: "For Pharmacy Owners | ZeeNovo", description: "See clinical revenue, service volume and safety performance in one place. Grow clinical services without adding staff." },
    blocks: [
      { type: "solutionHero", eyebrow: "Pharmacy owners", title: "Clinical revenue / you can see, / and grow.", description: "Know which services are booked, delivered and billed, and where your safety program stands, from one dashboard.", primary: demo, person: "independentPharmacist",
        liveCard: { label: "This month", chip: "Up on last month", title: "Clinical services", itemTitle: "186 delivered", itemText: "Minor ailments and vaccines" },
        noteCard: { title: "Safety score", text: "Self-assessment up from last quarter." } },
      { type: "reality", eyebrow: "The reality", title: "Growth with the / lights off.", side: "Most owners find out how clinical services went after the month ends.", items: [
        { title: "Revenue without a view", text: "Services are delivered, but nobody can say which ones grew." },
        { title: "Staff time is the limit", text: "Every new service needs hours the team does not have." },
        { title: "Compliance is a scramble", text: "Inspection prep starts when the letter arrives." },
      ] },
      { type: "wave", tag: "With ZeeNovo", title: "How the picture changes", description: "The numbers come from the work itself, so nobody has to compile them.", items: [
        { label: "Revenue visible", icon: "revenue" },
        { label: "Services published", icon: "storefront" },
        { label: "Automation as staff", icon: "automation" },
        { label: "Inspection ready", icon: "shield" },
      ] },
      { type: "steps", eyebrow: "A better month", title: "Run the business, / not the back office.", side: "ZeeNovo keeps the operational record as the team works.", items: [
        { title: "Services published", text: "Your website shows what you offer.", icon: "dayServices" },
        { title: "Bookings filled", text: "Patients book online, by voice or walk in.", icon: "dayBookings" },
        { title: "Care documented", text: "Records are produced at the point of care.", icon: "dayVisits" },
        { title: "Safety tracked", text: "Incidents and goals stay visible.", icon: "dayFollowups" },
        { title: "Results reviewed", text: "Volume and revenue by service.", icon: "dayRevenue" },
      ] },
      {"type": "featureIndex", "eyebrow": "Features for owners", "title": "The numbers and controls / owners ask for.", "side": "Each one comes from the work your team already does in ZeeNovo.", "art": "analyticsChart", "artAlt": "Pharmacy performance chart", "groups": [{"title": "Visibility", "ids": ["performanceView", "bookingSource", "scheduledReports", "selfAssessment", "trendDashboards", "unlimitedUsers", "quickSetup"]}]},
      { type: "ctaSplit", eyebrow: "Built for pharmacy owners", title: "Know what your pharmacy / delivered this month.", text: "Start with the services you offer today.", primary: demo, secondary: { label: "See Pricing", href: "/pricing" }, note: { title: "Revenue visible", text: "Delivered services, tracked by service." } },
    ],
  },

  "/solutions/pharmacists": {
    meta: { title: "For Pharmacists | ZeeNovo", description: "Guided minor ailments assessments, red flag checks, documentation and follow-up that support your clinical judgement." },
    blocks: [
      { type: "solutionHero", eyebrow: "Pharmacists", title: "More time with / the patient. Less / with the form.", description: "Guided assessments, red flag checks and documentation that writes itself, with every clinical decision left to you.", primary: demo, person: "followupPharmacist",
        liveCard: { label: "Live assessment", chip: "Red flag cleared", title: "Allergic rhinitis", itemTitle: "Symptoms", itemText: "3 answers captured" },
        noteCard: { title: "Record ready", text: "Assessment, outcome and physician note." } },
      { type: "reality", eyebrow: "The reality", title: "The work around / the work.", side: "The consultation is the easy part. Everything around it takes the time.", items: [
        { title: "Questions from memory", text: "Every condition has its own criteria, and every province its own rules." },
        { title: "Notes after hours", text: "Documentation waits until the queue is clear." },
        { title: "Follow-ups slip", text: "Calling back every patient is not realistic on a busy day." },
      ] },
      { type: "wave", tag: "With ZeeNovo", title: "How the picture changes", description: "The structure is handled. The judgement stays yours.", items: [
        { label: "Guided questions", icon: "grid" },
        { label: "Red flags in context", icon: "shield" },
        { label: "Records written for you", icon: "calendarStar" },
        { label: "Follow-ups by exception", icon: "chartStar" },
      ] },
      { type: "steps", eyebrow: "A better shift", title: "Less admin around / the consultation.", side: "What happens before and after the visit is handled.", items: [
        { title: "Intake done", text: "Patient history is captured before the visit.", icon: "dayBookings" },
        { title: "Assessment guided", text: "The next question adapts to the last answer.", icon: "dayVisits" },
        { title: "Decision yours", text: "Suggested options, never automatic.", icon: "dayServices" },
        { title: "Record written", text: "Documentation and physician fax produced.", icon: "dayRevenue" },
        { title: "Follow-up sent", text: "Only the patients who need you come back.", icon: "dayFollowups" },
      ] },
      { type: "ctaSplit", eyebrow: "Built with pharmacists", title: "Practise to your full / scope, with support.", text: "See a guided assessment from start to finish.", primary: demo, secondary: { label: "See Minor Ailments", href: "/products/clinical/minor-ailments" }, note: { title: "Time returned to care", text: "The record is written as you work." } },
    ],
  },

  "/solutions/patients": {
    meta: { title: "For Patients | ZeeNovo", description: "Book pharmacy services online or by voice, request prescriptions, and get reminders for your next dose from your local pharmacy." },
    blocks: [
      { type: "solutionHero", eyebrow: "Patients", title: "Your pharmacy, / open for booking / any time.", description: "Book a minor ailment visit or vaccine, request a refill and get reminders, with the pharmacy you already trust.", primary: { label: "Patient Login", href: "https://patient.zeenovo.com/login" }, person: "minorPharmacist",
        liveCard: { label: "Booked", chip: "Confirmed", title: "Flu vaccine", itemTitle: "Thursday, 10:30 am", itemText: "Reminder the day before" },
        noteCard: { title: "Second dose due", text: "Book your time from the reminder link." } },
      {"type": "featureIndex", "eyebrow": "What you can do", "title": "Less waiting. / Fewer phone calls.", "side": "Everything happens with your own pharmacy and your own pharmacist.", "art": "voicePhone", "artAlt": "Voice booking on a phone", "groups": [{"title": "Booking", "ids": ["voiceBooking", "manageAppointments", "portalRx", "portalReminders", "groupBooking", "preVisitQuestionnaire"]}], "wording": {"voiceBooking": "Say what you need in plain language. ZeeNovo finds the service and an open time, and books it.", "manageAppointments": "Book, reschedule or cancel your own appointments, at any time.", "portalRx": "Ask for a refill, renewal or transfer without a phone call.", "portalReminders": "Dose reminders, follow-up questions and links to your next visit, in one place.", "groupBooking": "Book your whole family in one appointment.", "preVisitQuestionnaire": "Answer a few questions before your visit, so your pharmacist is ready when you arrive."}},
      { type: "features", variant: "followup", eyebrow: "Your information", title: "Your health information / stays protected.", description: "Your pharmacy controls your record. ZeeNovo stores it in Canada and logs every access.", rows: [
        { title: "Your own login", text: "Only you and your pharmacy see your bookings.", icon: "safeguards" },
        { title: "Your family doctor", text: "Saved once, so you do not repeat it at every visit.", icon: "progress" },
        { title: "Stored in Canada", text: "Protected under Canadian privacy law.", icon: "plan" },
      ], art: "doseReminders", artAlt: "Dose reminders for a patient" },
      { type: "faq", eyebrow: "Questions", title: "Common questions.", items: [
        { q: "Do I need an account to book?", a: "No. You can book on your pharmacy's website. An account lets you manage bookings and requests in one place." },
        { q: "Is there a cost to use the portal?", a: "No. The pharmacy may charge for some services, as it would in person." },
        { q: "Can I book for my family?", a: "Yes. Group booking lets you book several people in one appointment." },
      ] },
      { type: "cta", eyebrow: "For patients", title: "Find a pharmacy / near you.", action: { label: "Find a Pharmacy", href: "https://central.zeenovo.com" } },
    ],
  },
};
