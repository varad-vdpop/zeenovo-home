import type { PageContent } from "@/components/blocks/types";

// Platform pages (/platform/*) and ZeeNovo Central (/products/zeenovo-central).

const demo = { label: "Book a Demo", href: "/book-a-demo" };
const trial = { label: "Start Free Trial", href: "https://auth.zeenovo.com/signup" };

export const platformPages: Record<string, PageContent> = {
  "/platform": {
    meta: { title: "Platform | ZeeNovo", description: "Why pharmacies choose ZeeNovo, the clinical content we maintain, how ZeeNovo works alongside your pharmacy system and what setup looks like." },
    blocks: [
      { type: "hero", eyebrow: "Platform", title: "One platform, / and how it fits your pharmacy.", description: "What ZeeNovo replaces, the content we keep current, the systems it works alongside and the rollout from day one.", primary: demo, secondary: trial },
      { type: "cards", eyebrow: "Platform", title: "Start with the question / you have today.", side: "Four short pages on how ZeeNovo works in practice.", items: [
        { title: "Why ZeeNovo", text: "Replace a booking tool, fax service, spreadsheets and a paper binder with one platform.", icon: "grid", href: "/platform/why-zeenovo" },
        { title: "Clinical content we maintain", text: "Question trees, the drug catalogue, billing PINs and SOP templates, kept current by ZeeNovo.", icon: "record", href: "/platform/clinical-content" },
        { title: "Integrations", text: "CSV patient import, Kroll medication history import, built-in fax, email and SMS.", icon: "globe", href: "/platform/integrations" },
        { title: "Switching to ZeeNovo", text: "What setup covers on day one, in week one and in month one.", icon: "calendarStar", href: "/platform/switching-to-zeenovo" },
      ] },
      { type: "cta", eyebrow: "Get started", title: "See ZeeNovo with / your own services.", action: demo },
    ],
  },

  "/platform/why-zeenovo": {
    meta: { title: "Why ZeeNovo | Replace your booking tool, fax and binder", description: "Replace a separate booking tool, website builder, fax service and incident binder with one pharmacy platform. Website and unlimited users included." },
    blocks: [
      { type: "hero", eyebrow: "Why ZeeNovo", title: "Replace four tools / with one platform.", description: "Most pharmacies run clinical services on a booking app, a fax machine, spreadsheets and a paper binder. ZeeNovo replaces them and removes the re-entry between them.", primary: demo, secondary: trial },
      { type: "versus", eyebrow: "Side by side", title: "Separate tools vs. ZeeNovo.", side: "Every job a clinical service needs, done in one platform instead of several.", items: [
        { title: "Booking", text: "How patients find a time and book a service.", before: "Generic app with no service or screening logic", after: "Pharmacy website with live booking, screening and voice booking" },
        { title: "Intake", text: "Collecting the patient's details and health history.", before: "Paper forms, retyped later", after: "Patients answer before the visit; technicians complete walk-in intake" },
        { title: "Assessment", text: "Screening the patient and deciding on treatment.", before: "From memory, notes written later", after: "Guided screening with red flags at the point of decision" },
        { title: "Documentation", text: "The records each visit has to produce.", before: "Handwritten or word processor", after: "Prescription, assessment and physician notification generated from the visit" },
        { title: "Physician notification", text: "Telling the family physician what was done.", before: "Printed and faxed, no record", after: "Faxed from the visit, with a status log" },
        { title: "Billing", text: "Claiming the right fee for each service.", before: "PIN looked up per visit", after: "Correct billing PIN shown on every visit" },
        { title: "Follow-up", text: "Checking in with the patient after the visit.", before: "Phone calls when time allows", after: "Automated email follow-up; only flagged responses return" },
        { title: "Second doses", text: "Bringing patients back for the next dose.", before: "Manual tracking", after: "Automatic dose reminders with a booking link" },
        { title: "Incidents", text: "Recording errors and near misses, and fixing the cause.", before: "Paper binder", after: "Guided reporting, corrective actions and CQI meetings" },
        { title: "SOPs", text: "Keeping procedures current and signed off.", before: "Shared drive", after: "Assigned versions with staff acknowledgement" },
        { title: "Performance", text: "Knowing what each service earns.", before: "Month-end estimate", after: "Estimated revenue by service and pharmacist" },
      ] },
      { type: "twoCard", eyebrow: "Consolidation", title: "Fewer subscriptions. / No re-entry between them.",
        left: { title: "What you can remove", text: "A separate booking tool, website builder, fax service and incident reporting subscription, and the staff hours spent moving data between them.", chips: ["Booking tool", "Website builder", "Fax service", "Incident reporting"] },
        right: { title: "What every plan includes", text: "Your pharmacy website and unlimited users.", chips: ["Pharmacy website", "Unlimited users"] } },
      { type: "cta", eyebrow: "Get started", title: "See it as / one platform.", action: demo },
    ],
  },

  "/platform/clinical-content": {
    meta: { title: "Clinical and quality content maintained for you | ZeeNovo", description: "Minor ailment question trees, a daily-synced drug catalogue, billing PINs, SOP templates and assessments, built and kept current by ZeeNovo." },
    blocks: [
      { type: "hero", eyebrow: "Platform", title: "Clinical content, / built and kept current.", description: "ZeeNovo ships with the clinical and quality content already built, and maintains it. No blank form builder. No in-house content upkeep.", primary: demo, secondary: trial },
      { type: "cards", eyebrow: "Maintained by ZeeNovo", title: "Content your team / doesn't have to build.", items: [
        { title: "Minor ailment question trees", text: "Screening questions, red flags, stop criteria and reference notes for each condition.", icon: "redFlag" },
        { title: "Medicine catalogue", text: "Health Canada's Drug Product Database, about 58,000 products, synced daily, with DIN, ingredients, schedule and ATC code.", icon: "prescription" },
        { title: "Billing PINs", text: "Configured for each service, province, visit mode and outcome.", icon: "province" },
        { title: "SOP templates", text: "A library of pharmacy SOPs to adopt and adapt.", icon: "record" },
        { title: "Staff competency assessments", text: "258 questions across 43 modules for four roles.", icon: "pharmacist" },
        { title: "Pharmacy self-assessment", text: "63 questions across six safety domains.", icon: "safety" },
        { title: "Compounding content", text: "Master formulation templates and an ingredient master list for Magistral.", icon: "treatment" },
      ] },
      { type: "features", variant: "workflow", eyebrow: "Change control", title: "We update the source. / You approve / what changes.", description: "Your pharmacy reviews the content it uses. The pharmacist remains responsible for every clinical decision.", rows: [
        { title: "SOP templates", text: "Compare each update with your version and choose what to adopt.", icon: "steps" },
        { title: "Ingredients", text: "You stay on the accepted version until a manager reviews and accepts the update.", icon: "safeguards" },
        { title: "Your own version", text: "Adapt any template. Your changes are kept.", icon: "assessment" },
      ], art: "sopTable", artAlt: "SOP versions and sign-off", ui: "sopUpdate" },
      { type: "cta", eyebrow: "Get started", title: "Start with the / content already built.", action: demo },
    ],
  },

  "/platform/integrations": {
    meta: { title: "Integrations | ZeeNovo", description: "ZeeNovo works alongside your pharmacy system: CSV patient import, Kroll medication history import, Health Canada drug data, built-in fax, email and SMS." },
    blocks: [
      { type: "hero", eyebrow: "Platform", title: "Works alongside / your pharmacy system.", description: "ZeeNovo doesn't replace your pharmacy management system. It imports the data it needs and sends out what physicians and patients need.", primary: demo, secondary: trial },
      { type: "features", variant: "workflow", eyebrow: "Inbound", title: "Data in.", description: "ZeeNovo imports what it needs from the systems you already use.", rows: [
        { title: "CSV patient import", text: "From your pharmacy system's CSV export, in the Patients tab.", icon: "progress" },
        { title: "Kroll medication history import", text: "Early access. Import a Kroll PDF into a MedsCheck review, with each medicine matched to Health Canada's Drug Product Database.", icon: "plan" },
        { title: "Health Canada Drug Product Database", text: "About 58,000 products, synced daily.", icon: "outcomes" },
      ], art: "appointmentProfile", artAlt: "Patient profile in ZeeNovo", ui: "medsImport" },
      { type: "steps", eyebrow: "Outbound", title: "Data out.", side: "What physicians and patients need, sent from the visit.", items: [
        { title: "Built-in fax", text: "Fax physicians from the visit, with each fax's status logged.", icon: "dayRevenue" },
        { title: "Email", text: "Booking confirmations, follow-up questions, dose reminders and MedsCheck invitations.", icon: "dayFollowups" },
        { title: "SMS", text: "Sign-in codes, booking confirmations and appointment status texts.", icon: "dayBookings" },
        { title: "PDF documents", text: "Download any generated document.", icon: "dayVisits" },
      ] },
      { type: "cards", eyebrow: "Inside ZeeNovo", title: "One login. / One calendar.", items: [
        { title: "One login", text: "Across Clinical, Assure and Magistral.", icon: "pharmacist" },
        { title: "One calendar", text: "For Sites and the Patient Portal.", icon: "record" },
      ] },
      { type: "faq", eyebrow: "Questions", title: "Common questions.", items: [
        { q: "Is ZeeNovo connected live to Kroll, Propel or HealthWatch?", a: "No. ZeeNovo imports CSV patient lists and Kroll medication history PDFs. Prescriptions are still processed in your pharmacy system." },
      ] },
      { type: "cta", eyebrow: "Get started", title: "Tell us what / you use today.", action: demo },
    ],
  },

  "/platform/switching-to-zeenovo": {
    meta: { title: "Switching to ZeeNovo | Setup plan for day one to month one", description: "What setup covers on day one, in week one and in month one: patient import, services, billing PINs, team, website, fax and your safety program." },
    blocks: [
      { type: "hero", eyebrow: "Platform", title: "Live on day one. / Fully running in a month.", description: "Most pharmacies are set up in under a day. Below is the standard rollout from first login to first month.", primary: trial, secondary: demo },
      { type: "cards", eyebrow: "Rollout plan", title: "Day one. Week one. / Month one.", side: "Setup is guided by the ZeeNovo team. Support in the app or at contact@zeenovo.com, Monday to Friday, 9 a.m. to 6 p.m. ET.", items: [
        { title: "Day one", text: "Choose a plan, no credit card needed. Import patients by CSV. Turn on services and set hours. Add your team with unlimited users.", icon: "record" },
        { title: "Week one", text: "Publish your website. Share service booking links. Run first visits with walk-ins and online bookings in one queue. Send your first physician fax.", icon: "pharmacist" },
        { title: "Month one", text: "Follow-ups running by email, with only flagged responses returning. First near miss and CQI meeting in Assure. SOPs assigned with tracked sign-off. Estimated revenue reviewed by service and pharmacist.", icon: "safety" },
      ] },
      { type: "faq", eyebrow: "Questions", title: "Common questions.", items: [
        { q: "Do we stop using our pharmacy system?", a: "No. ZeeNovo works alongside it." },
        { q: "Can we start with one service?", a: "Yes. Many pharmacies start with minor ailments or a flu clinic and add more." },
        { q: "What happens to our data if we leave?", a: "Your pharmacy owns its data. At contract end it is returned or deleted as agreed." },
      ] },
      { type: "cta", eyebrow: "Get started", title: "Take your first / booking this week.", action: trial },
    ],
  },

  "/products/zeenovo-central": {
    meta: { title: "ZeeNovo Central | Find a pharmacy by service and book", description: "Find a nearby pharmacy that offers the service you need, from flu shots to minor ailment assessments, and book online. Launching soon." },
    blocks: [
      { type: "hero", eyebrow: "ZeeNovo Central · Launching soon", title: "Find a pharmacy by service. / Book in minutes.", description: "One directory of every pharmacy on ZeeNovo, searchable by location and service. Booking goes straight into the pharmacy's calendar.", primary: { label: "Find a Pharmacy", href: "https://central.zeenovo.com" }, secondary: { label: "List Your Pharmacy", href: "/company/contact" } },
      { type: "steps", eyebrow: "For patients", title: "Start with the service.", side: "Patients search by service first, then choose a pharmacy near them.", items: [
        { title: "Choose a service", text: "Flu shot, COVID-19 vaccine, minor ailment assessment, medication review and more.", icon: "dayServices" },
        { title: "Choose a pharmacy", text: "Listed by province. Only pharmacies offering that service appear.", icon: "storefront" },
        { title: "Book a time", text: "Booked directly into the pharmacy's ZeeNovo calendar.", icon: "dayBookings" },
        { title: "Answer intake questions", text: "The pharmacy has your answers before you arrive.", icon: "dayVisits" },
      ] },
      { type: "features", variant: "workflow", eyebrow: "For pharmacies", title: "A new booking channel, / with nothing extra to manage.", description: "ZeeNovo also sends product and program updates to the same communication tab on your pharmacy dashboard.", rows: [
        { title: "Listed automatically, kept current", text: "Every ZeeNovo pharmacy can appear, by location and service. Turn a service on or off in ZeeNovo and the listing updates.", icon: "steps" },
        { title: "Bookings in your calendar", text: "Central appointments land in your existing calendar.", icon: "plan" },
        { title: "Booking source tracked", text: "Each appointment shows whether it came from Central, your website, a walk-in, staff entry, a referral or a campaign link.", icon: "outcomes" },
      ], art: "appointmentProfile", artAlt: "Appointment in the pharmacy calendar" },
      { type: "faq", eyebrow: "Questions", title: "Common questions.", items: [
        { q: "Does it cost patients anything?", a: "No. Some pharmacy services carry fees, as they do in person." },
        { q: "How does my pharmacy get listed?", a: "Every ZeeNovo pharmacy can be listed. Ask us to switch yours on." },
      ] },
      { type: "cta", eyebrow: "Get started", title: "Get found by patients / searching for your services.", action: demo },
    ],
  },
};
