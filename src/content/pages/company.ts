import type { PageContent } from "@/components/blocks/types";

// Pricing, Resources, Company and Trust pages. Copy source: copy-review/02-copy-rewrite.md (Part 4).
// Claims still awaiting sign-off are logged in copy-review/open-items/4-company.md, not on the page.

const demo = { label: "Book a Demo", href: "/book-a-demo" };
const trial = { label: "Start Free Trial", href: "https://auth.zeenovo.com/signup" };
const contact = { label: "Contact Us", href: "/company/contact" };
const ctaDefault = { type: "cta", eyebrow: "Get started", title: "See ZeeNovo with / your own services.", action: demo } as const;

const provinces = ["Ontario", "Alberta", "British Columbia", "Saskatchewan", "Nova Scotia", "New Brunswick", "Manitoba", "Other"];

export const companyPages: Record<string, PageContent> = {
  // ---------- Pricing ----------
  "/pricing": {
    meta: { title: "ZeeNovo pricing | No per-user fees", description: "Clinical C$29.99/month, Assure C$19.99/month, both C$44.99/month. Unlimited users and a pharmacy website on every plan." },
    blocks: [
      { type: "hero", eyebrow: "Pricing", title: "Simple pricing. / No per-user fees.", description: "Every plan includes unlimited users and your pharmacy website. Prices are in Canadian dollars.", primary: trial, secondary: demo },
      {
        type: "pricing",
        plans: [
          { name: "Assure", text: "Incident reporting, CQI and SOP compliance for one pharmacy.", price: "C$19.99", annual: "or C$199 a year", features: ["Incident and near-miss reporting", "Submission to ISMP Canada", "CQI meetings and corrective actions", "Pharmacy self-assessment", "Staff competency assessments", "SOP library and sign-off", "Safety analytics"], action: { label: "Start with Assure", href: "https://auth.zeenovo.com/signup" } },
          { name: "Combo", text: "Clinical and Assure on one account, for less than both separately.", price: "C$44.99", annual: "or C$449.99 a year", featured: true, badge: "Most popular", features: ["Everything in Clinical", "Everything in Assure"], action: { label: "Get the Combo", href: "https://auth.zeenovo.com/signup" } },
          { name: "Clinical", text: "Booking, guided clinical visits, documentation and follow-up.", price: "C$29.99", annual: "or C$299 a year", features: ["Minor ailments", "Vaccinations and injections", "Prescription requests", "Automated email follow-up", "Documents and physician fax", "Billing PINs"], action: { label: "Start with Clinical", href: "https://auth.zeenovo.com/signup" } },
        ],
        included: "ZeeNovo Sites, your pharmacy website with live booking, is included with Assure, Clinical and Combo.",
        addons: [
          { title: "ZeeNovo Magistral", text: "Non-sterile compounding records and batch control. Early access. Price on request.", action: { label: "Ask about early access", href: "/company/contact" } },
          { title: "Patient Portal", text: "A patient login to book by voice, manage appointments, request prescriptions and answer follow-ups. Price on request.", action: { label: "See the Patient Portal", href: "/products/patient-portal" } },
          { title: "ZeeNovo Enterprise", text: "Launching soon. Branded group booking, network dashboards and one inbox for every member pharmacy. Enterprise agreement.", action: { label: "See ZeeNovo Enterprise", href: "/solutions/multi-location-groups" } },
        ],
        facts: ["No credit card to start", "Cancel anytime", "Unlimited users", "Website included", "Set up in under a day"],
      },
      {
        type: "faq", eyebrow: "Pricing FAQ", title: "Before you start.", items: [
          { q: "Is there a free trial?", a: "Yes. No credit card is needed. Most pharmacies are set up within a day." },
          { q: "Do you charge per user?", a: "No. Every plan includes unlimited users, each with their own login and role." },
          { q: "Can I change plans?", a: "Yes. Move between Clinical, Assure and Combo, or add the Patient Portal. Changes apply from the next billing cycle." },
          { q: "Does ZeeNovo bill OHIP for us?", a: "No. ZeeNovo shows the billing PIN for each visit. You submit claims through your pharmacy system." },
          { q: "How do multi-location groups buy?", a: "Through an enterprise agreement. Book a call and we will scope it with you." },
        ],
      },
      { type: "cta", eyebrow: "Not sure which plan?", title: "Estimate the return / for your pharmacy.", action: { label: "Open the ROI Calculator", href: "/pricing/roi-calculator" } },
    ],
  },
  "/pricing/roi-calculator": {
    meta: { title: "ZeeNovo ROI calculator | Time and revenue estimate", description: "Estimate staff hours saved and added clinical revenue each month, using your own visit volumes, fees and staff costs." },
    blocks: [
      { type: "hero", eyebrow: "Pricing", title: "Estimate your monthly return / on ZeeNovo.", description: "Enter your monthly volumes, fees and staff cost. Every assumption can be edited, and the estimate updates as you type.", primary: demo, secondary: { label: "See Pricing", href: "/pricing" } },
      { type: "roi" },
      { type: "cta", eyebrow: "Get started", title: "Check the estimate / against your own workflow.", action: demo },
    ],
  },

  // ---------- Resources ----------
  "/resources": {
    meta: { title: "Resources | ZeeNovo", description: "Guides, articles, case studies and product updates for Canadian pharmacy teams running clinical services and safety programs." },
    blocks: [
      { type: "hero", eyebrow: "Resources", title: "Guides and updates / for pharmacy teams.", description: "Setup guides, practice articles, customer results and product changes.", primary: { label: "Read the Blog", href: "/blog" }, secondary: { label: "See Guides", href: "/resources/guides" } },
      {
        type: "cards", eyebrow: "Browse", title: "Start here.", side: "Written for owners, pharmacists and pharmacy groups.", items: [
          { title: "Blog", text: "Practice, policy and product articles.", icon: "record", href: "/blog" },
          { title: "Case studies", text: "How Ontario pharmacies run services on ZeeNovo.", icon: "chartStar", href: "/resources/case-studies" },
          { title: "Guides", text: "Step-by-step setup and program guides.", icon: "steps", href: "/resources/guides" },
          { title: "Changelog", text: "New features and improvements, newest first.", icon: "calendarStar", href: "/resources/changelog" },
          { title: "Roadmap", text: "What we are building next, with early access.", icon: "plan", href: "/resources/roadmap" },
        ],
      },
      ctaDefault,
    ],
  },
  "/blog": {
    meta: { title: "ZeeNovo blog | Canadian pharmacy practice and safety", description: "Practical articles on minor ailments, vaccine clinics, incident reporting, OCP assessments, MedsCheck and compounding for Canadian pharmacies." },
    blocks: [
      { type: "hero", eyebrow: "Resources", title: "The ZeeNovo blog", description: "Practice, policy and product, for Canadian pharmacy teams." },
      {
        type: "list", eyebrow: "Articles", title: "Latest articles.",
        filters: ["All", "Clinical practice", "Patient safety", "Provincial programs", "Pharmacy business", "Product"],
        items: [
          { tag: "Provincial programs · Coming soon", title: "Ontario's minor ailments program: what to document", text: "The conditions pharmacists can assess, what the record must show and where time is lost.", meta: "Read article", href: "/blog/sample-article" },
          { tag: "Patient safety · Coming soon", title: "Incident reporting: the fields that matter", text: "Which fields matter, and how guided steps cut reporting time without losing detail.", meta: "Read article", href: "/blog/sample-article" },
          { tag: "Clinical practice · Coming soon", title: "Running a flu clinic week", text: "Slots, walk-in queues, group bookings and second-dose reminders.", meta: "Read article", href: "/blog/sample-article" },
          { tag: "Provincial programs · Coming soon", title: "OCP practice assessment: the records to have ready", text: "What assessors look for, and how to check your readiness first.", meta: "Read article", href: "/blog/sample-article" },
          { tag: "Patient safety · Coming soon", title: "The ISMP MSSA: scope and frequency", text: "What the Medication Safety Self-Assessment covers, who takes part and how to act on results.", meta: "Read article", href: "/blog/sample-article" },
          { tag: "Provincial programs · Coming soon", title: "MedsCheck forms, explained", text: "Which form is used when, and what each needs.", meta: "Read article", href: "/blog/sample-article" },
          { tag: "Clinical practice · Coming soon", title: "Cold-chain excursions: what to record and who to tell", text: "The readings, actions and reports a fridge temperature excursion needs.", meta: "Read article", href: "/blog/sample-article" },
          { tag: "Pharmacy business · Coming soon", title: "SOPs your team will read", text: "Structure, length and sign-off.", meta: "Read article", href: "/blog/sample-article" },
          { tag: "Pharmacy business · Coming soon", title: "Billing PINs for pharmacist services in Ontario", text: "Which PIN applies to each service, visit mode and outcome.", meta: "Read article", href: "/blog/sample-article" },
          { tag: "Clinical practice · Coming soon", title: "NAPRA non-sterile compounding: what the batch record must show", text: "The entries a non-sterile batch record needs under the NAPRA standards.", meta: "Read article", href: "/blog/sample-article" },
        ],
      },
      ctaDefault,
    ],
  },
  "/blog/sample-article": {
    meta: { title: "[Article title] | ZeeNovo Blog", description: "Blog post template for review. All text in brackets is placeholder." },
    blocks: [
      { type: "hero", eyebrow: "[Category] · [Author name], [Role] · [Date] · [n] min read", title: "[Article title, / under 70 characters]", description: "[One or two sentences that say what the reader will learn.]", primary: { label: "Back to the Blog", href: "/blog" }, secondary: demo },
      {
        type: "cards", eyebrow: "Related", title: "More on [Category].", side: "[Author name] is [role] at [organisation].", items: [
          { title: "[Related article title]", text: "[One-line summary.]", icon: "record", href: "/blog/sample-article" },
          { title: "[Related article title]", text: "[One-line summary.]", icon: "record", href: "/blog/sample-article" },
          { title: "[Related article title]", text: "[One-line summary.]", icon: "record", href: "/blog/sample-article" },
        ],
      },
      ctaDefault,
    ],
  },
  "/resources/case-studies": {
    meta: { title: "ZeeNovo case studies | Ontario pharmacies", description: "How Ontario pharmacies run minor ailments, vaccinations, websites and new-store launches on ZeeNovo." },
    blocks: [
      { type: "hero", eyebrow: "Case studies", title: "How Ontario pharmacies / run on ZeeNovo.", description: "Each case covers the starting point, what changed in the workflow and the measured result.", primary: demo, secondary: trial },
      {
        type: "list", eyebrow: "Case studies", title: "Customer stories.",
        items: [
          { tag: "Ontario · Clinical and vaccinations", title: "MapleMeds Pharmacies", text: "Minor ailment and immunization programs on ZeeNovo Clinical, with vaccine autofill and automated dose reminders across stores." },
          { tag: "Ontario · Clinical and website", title: "Oshawa Lakeview Pharmacy", text: "Moved clinical services to ZeeNovo Clinical and launched a ZeeNovo website. Guided assessments, generated documents and fax from the visit." },
          { tag: "Ontario · New store launch", title: "KW Bruce Pharmacies", text: "New location run on ZeeNovo from day one, with online and voice booking from the first week." },
        ],
      },
      ctaDefault,
    ],
  },
  "/resources/guides": {
    meta: { title: "ZeeNovo guides | Setup and program how-tos", description: "Step-by-step guides to set up ZeeNovo, run minor ailment and vaccine services, report incidents, run CQI meetings and launch your website." },
    blocks: [
      { type: "hero", eyebrow: "Resources", title: "Guides", description: "Step-by-step setup and program guides." },
      {
        type: "list", eyebrow: "Guides", title: "Set up and run / your programs.",
        filters: ["All", "Getting started", "Clinical", "Assure", "Sites"],
        items: [
          { tag: "Getting started", title: "Set up your pharmacy", text: "Services, team and calendar, in order." },
          { tag: "Getting started", title: "Import patients by CSV", text: "Bring your patient list across from your pharmacy system's CSV export." },
          { tag: "Getting started", title: "Add your team", text: "Give each person their own login and role." },
          { tag: "Getting started", title: "Set up billing PINs", text: "Set the PIN for each service, visit mode and outcome." },
          { tag: "Clinical", title: "Set up minor ailment services", text: "Choose the conditions you offer and open bookings." },
          { tag: "Clinical", title: "Run a vaccine clinic", text: "Slots, walk-ins, group bookings and reminders." },
          { tag: "Clinical", title: "Configure fax", text: "Send records to physicians from the visit." },
          { tag: "Clinical · Early access", title: "Run a MedsCheck with a Kroll import", text: "Import a Kroll medication history PDF, then complete the Ontario MedsCheck forms." },
          { tag: "Assure", title: "Report your first incident", text: "A guided report from start to finish." },
          { tag: "Assure", title: "Run your first CQI meeting", text: "Review incidents, goals and actions." },
          { tag: "Assure", title: "Assign an SOP and track sign-off", text: "Assign the current version and see who has acknowledged it." },
          { tag: "Sites", title: "Launch your pharmacy website", text: "Pick your services and brand, then publish." },
          { tag: "Sites", title: "Share service booking links", text: "Put a booking link on social, email and ads." },
        ],
      },
      ctaDefault,
    ],
  },
  "/resources/changelog": {
    meta: { title: "ZeeNovo changelog | Product updates", description: "New features and improvements across ZeeNovo Clinical, Assure, Magistral, Sites and the Patient Portal, newest first." },
    blocks: [
      { type: "hero", eyebrow: "Resources", title: "Changelog", description: "New features and improvements, newest first." },
      {
        type: "list", eyebrow: "Product updates", title: "What is new in ZeeNovo.",
        filters: ["All", "Clinical", "Assure", "Magistral", "Sites", "Patient Portal"],
        items: [
          { tag: "Clinical · Early access", title: "MedsCheck with Ontario forms filled in", text: "Annual, Follow-up, Diabetes and At Home reviews, with the Ontario forms filled in from what you recorded." },
          { tag: "Clinical · Early access", title: "Point-of-care testing", text: "Blood glucose, blood pressure, haemoglobin and COVID-19 tests, with a physician report you can fax." },
          { tag: "Clinical · Early access", title: "Expired vaccine lot guard", text: "An expired vaccine lot cannot be recorded." },
          { tag: "Assure · Available", title: "SOP versioning with template updates", text: "Every revision is kept. When ZeeNovo updates a template, compare it with your version and choose what to bring across." },
          { tag: "Assure · Available", title: "Staff competency assessments", text: "Role-based assessments for pharmacists, technicians, assistants and managers: 258 questions across 43 modules." },
        ],
      },
      ctaDefault,
    ],
  },
  "/resources/roadmap": {
    meta: { title: "ZeeNovo roadmap | What we are building next", description: "Features in development for Canadian pharmacies: forms library, fridge log, OAT roster, ZeeNovo Enterprise, ZeeNovo Central and Magistral labels." },
    blocks: [
      { type: "hero", eyebrow: "Resources", title: "Roadmap", description: "Features in development. Ask us about early access." },
      {
        type: "list", eyebrow: "In development", title: "What we are / building next.",
        items: [
          { tag: "Clinical · Coming soon", title: "Pharmacy forms library", text: "27 national and provincial forms, signed and sent from ZeeNovo." },
          { tag: "Clinical · Coming soon", title: "Fridge log, OAT roster and compliance packs", text: "A fridge temperature log, an opioid agonist therapy (OAT) dosing roster and compliance pack schedules." },
          { tag: "ZeeNovo Enterprise · Launching soon", title: "ZeeNovo Enterprise", text: "Chain booking, network dashboards and group messaging." },
          { tag: "ZeeNovo Central · Launching soon", title: "ZeeNovo Central", text: "Find a ZeeNovo pharmacy by location and service." },
          { tag: "Magistral · Coming soon", title: "Magistral label printing and report exports", text: "Magistral shows an on-screen label preview today. Label printing and report exports are in development." },
        ],
      },
      { type: "cta", eyebrow: "Early access", title: "Ask about / early access.", action: { label: "Ask About Early Access", href: "/company/contact" } },
    ],
  },

  // ---------- Company ----------
  "/company": {
    meta: { title: "ZeeNovo Health | Company", description: "ZeeNovo Health builds clinical, safety and compounding software for Canadian community pharmacies. Contact us or book a demo." },
    blocks: [
      { type: "hero", eyebrow: "Company", title: "ZeeNovo Health.", description: "Clinical, safety and compounding software for Canadian community pharmacies, founded by a practising Ontario pharmacist.", primary: demo, secondary: contact },
      {
        type: "cards", eyebrow: "Company", title: "Where to next.", items: [
          { title: "About", text: "Who builds ZeeNovo, and the principles behind it.", icon: "pharmacist", href: "/company/about" },
          { title: "Contact", text: "Reach the team. Reply within one business day.", icon: "globe", href: "/company/contact" },
          { title: "Book a demo", text: "30 minutes with your own services.", icon: "calendarStar", href: "/book-a-demo" },
        ],
      },
      ctaDefault,
    ],
  },
  "/company/about": {
    meta: { title: "About ZeeNovo Health | Built by a Canadian pharmacist", description: "ZeeNovo Health builds clinical, safety and compounding software for Canadian pharmacies. Founded by a practising Ontario pharmacist and pharmacy owner." },
    blocks: [
      { type: "hero", eyebrow: "About", title: "Pharmacy software built by / a practising pharmacist-owner.", description: "ZeeNovo puts clinical services, safety records and compounding in one system. Booking, documentation, physician fax, follow-up and inspection records are kept in one place, so pharmacists spend their time on patients.", primary: demo, secondary: contact, person: "followupPharmacist" },
      {
        type: "cards", eyebrow: "How we work", title: "Three rules for / what we build.", side: "These set what goes into the product and what stays out.", items: [
          { title: "The pharmacist decides", text: "ZeeNovo guides and records. It does not diagnose, prescribe or recommend treatment.", icon: "pharmacist" },
          { title: "Province first", text: "Services, forms and billing PINs follow the province you practise in.", icon: "province" },
          { title: "Patient data stays protected", text: "Your pharmacy is the custodian. ZeeNovo processes the data on your behalf and stores patient records in Canada.", icon: "safety" },
        ],
      },
      {
        type: "facts", items: [
          { value: "2024", label: "Founded" },
          { value: "50+", label: "Pharmacies on ZeeNovo" },
          { value: "5", label: "Connected products" },
          { value: "Canada", label: "Where patient records are stored" },
        ],
      },
      {
        type: "cards", eyebrow: "Why it matters", title: "Built and tested in a / working community pharmacy.", side: "“Every feature had to save my team time on a real shift before it went to anyone else.” Jeet Kandoriya, pharmacist and founder", items: [
          { title: "Tested on real shifts", text: "Every workflow is used in a working Ontario community pharmacy before release.", icon: "testing" },
          { title: "Built to the rules", text: "OCP practice expectations, the NAPRA compounding standards and provincial programs define the requirements.", icon: "record" },
          { title: "Priced by an owner", text: "Unlimited users, no per-seat fees and same-day setup reflect what an independent pharmacy can carry.", icon: "chartStar" },
        ],
      },
      ctaDefault,
    ],
  },
  "/company/contact": {
    meta: { title: "Contact ZeeNovo | Reply within one business day", description: "Contact ZeeNovo about Clinical, Assure, Magistral, your pharmacy website or pharmacy groups. We reply within one business day." },
    blocks: [
      { type: "hero", eyebrow: "Company", title: "Contact us", description: "We reply within one business day." },
      {
        type: "form", eyebrow: "Contact", title: "Send us a message.", description: "Tell us about your pharmacy and what you need.",
        fields: [
          { kind: "text", label: "Pharmacy name", half: true },
          { kind: "text", label: "Your name", half: true },
          { kind: "email", label: "Work email", half: true },
          { kind: "tel", label: "Phone", optional: true, half: true },
          { kind: "select", label: "Province", options: provinces },
          { kind: "checks", label: "Interested in", options: ["Clinical", "Assure", "Combo", "Magistral", "Sites", "Patient Portal", "Pharmacy groups"] },
          { kind: "textarea", label: "How can we help?" },
        ],
        consent: "Do not include patient information. By sending this form, you agree that ZeeNovo may contact you about your enquiry. See our Privacy Policy.",
        submit: "Send Message",
        success: "Thank you. We will reply within one business day.",
        aside: { title: "Talk to us", lines: ["Email: contact@zeenovo.com", "Hours: Monday to Friday, 9 a.m. to 6 p.m. ET", "Existing customers: use in-app support or email contact@zeenovo.com."] },
      },
    ],
  },
  "/book-a-demo": {
    meta: { title: "Book a ZeeNovo demo | 30 minutes, your services", description: "A 30-minute demo built around your services, your province's billing and forms, and your questions on pricing, setup and data." },
    blocks: [
      { type: "hero", eyebrow: "Book a demo", title: "A 30-minute demo / of your own workflow.", description: "Bring one service your team runs every week. We walk it through from booking to follow-up, using your province's setup." },
      {
        type: "cards", eyebrow: "What to expect", title: "Thirty minutes. / Three things covered.", side: "We show only the workflows you would use.", items: [
          { title: "Your services", text: "The workflows you run today, from booking to follow-up.", icon: "assessment" },
          { title: "Your province", text: "Services, forms and billing PINs for where you practise.", icon: "province" },
          { title: "Your questions", text: "Pricing, setup, data handling and switching.", icon: "pharmacist" },
        ],
      },
      {
        type: "form", eyebrow: "Book a demo", title: "Tell us about / your pharmacy.", description: "We email you within one business day to set a time.",
        fields: [
          { kind: "text", label: "First name", half: true },
          { kind: "text", label: "Last name", half: true },
          { kind: "email", label: "Work email", half: true },
          { kind: "tel", label: "Phone", half: true },
          { kind: "text", label: "Pharmacy name" },
          { kind: "select", label: "Number of locations", options: ["1", "2 to 5", "6 to 20", "More than 20"], half: true },
          { kind: "select", label: "Province", options: provinces, half: true },
          { kind: "checks", label: "Products of interest", options: ["Clinical", "Assure", "Magistral", "Sites (pharmacy website)", "Patient Portal", "Pharmacy groups"] },
          { kind: "select", label: "Pharmacy system you use", options: ["Kroll", "Propel", "HealthWatch", "FillWare", "Other"] },
          { kind: "textarea", label: "Anything we should know?", optional: true },
        ],
        consent: "Do not include patient information.",
        submit: "Book My Demo",
        success: "Thanks. We will email you within one business day to set a time.",
      },
    ],
  },

  // ---------- Trust & Legal ----------
  "/trust/security-and-compliance": {
    meta: { title: "ZeeNovo security and privacy | Patient data in Canada", description: "How ZeeNovo protects patient data: records stored in Canada, pharmacy-level separation, role-based access, two-step sign-in and change logs. SOC 2 in progress." },
    blocks: [
      { type: "hero", eyebrow: "Trust", title: "How ZeeNovo protects / patient information.", description: "Your pharmacy is the custodian of its patients' health information under PHIPA, PIPEDA and provincial privacy laws. ZeeNovo processes it on your behalf. This page lists the controls in place and the ones in progress.", primary: contact, secondary: demo },
      {
        type: "wave", tag: "At a glance", title: "Controls in place today.", items: [
          { label: "Patient records stored in Canada", icon: "globe" },
          { label: "Separate data for every pharmacy", icon: "grid" },
          { label: "Role-based access", icon: "shield" },
          { label: "Two-step sign-in", icon: "calendarStar" },
          { label: "SOC 2 in progress", icon: "chartStar" },
        ],
      },
      {
        type: "cards", eyebrow: "How we protect data", title: "Controls that apply / to every product.", side: "All six are in place today. We are also working towards a SOC 2 report.", items: [
          { title: "The pharmacy owns the record", text: "ZeeNovo processes patient information only to provide the service to your pharmacy.", icon: "record" },
          { title: "Stored in Canada", text: "Patient records are stored in Canada. Physician faxes are sent through our fax provider under a data protection agreement.", icon: "province" },
          { title: "Separate by pharmacy", text: "Each pharmacy's records are scoped to that pharmacy, and separation is tested.", icon: "safety" },
          { title: "Role-based access and two-step sign-in", text: "Owner, Manager, Pharmacist, Technician and Assistant roles. Staff sign in with a password and a one-time code. ZeeNovo administrators use an authenticator app.", icon: "pharmacist" },
          { title: "Change logging", text: "Changes to records are logged with who made them and when.", icon: "assessment" },
          { title: "Assure is end-to-end encrypted", text: "Incident reports, assessments and quality records in ZeeNovo Assure are end-to-end encrypted.", icon: "shield" },
        ],
      },
      {
        type: "features", variant: "workflow", eyebrow: "Enterprise reporting · Launching soon", title: "Aggregate and / de-identified.",
        description: "Applies to ZeeNovo Enterprise on release. Security questions or a vulnerability to report? Email security@zeenovo.com.",
        rows: [
          { title: "Aggregate only", text: "Group dashboards show counts, rates and trends. No patients, records, notes or prescriptions.", icon: "outcomes" },
          { title: "Minimum group size", text: "Results appear only when a group is large enough to protect privacy. Otherwise the dashboard shows “insufficient data”.", icon: "safeguards" },
          { title: "Related documents", text: "Privacy Policy, Data Processing Agreement and Sub-processors.", icon: "steps" },
        ],
        art: "analyticsChart", artAlt: "A group dashboard showing aggregate counts and trends",
      },
      ctaDefault,
    ],
  },
  "/trust/privacy-policy": {
    meta: { title: "Privacy Policy | ZeeNovo", description: "What personal information ZeeNovo collects, why, how it is protected and how to contact our Privacy Officer." },
    blocks: [
      { type: "hero", eyebrow: "Trust and legal", title: "Privacy Policy", description: "What personal information ZeeNovo collects, why, how it is protected and how to contact our Privacy Officer." },
      {
        type: "legal",
        intro: "Our privacy policy is being finalised. For a copy, or to reach our Privacy Officer, email contact@zeenovo.com.",
        sections: [{ title: "Contact our Privacy Officer", body: "Email contact@zeenovo.com." }],
      },
    ],
  },
  "/trust/terms-and-conditions": {
    meta: { title: "Terms and Conditions | ZeeNovo", description: "The terms that govern use of the ZeeNovo website and services." },
    blocks: [
      { type: "hero", eyebrow: "Trust and legal", title: "Terms and Conditions", description: "The terms that govern use of the ZeeNovo website and services." },
      {
        type: "legal",
        intro: "Our terms are being finalised. For a copy, email contact@zeenovo.com.",
        sections: [{ title: "Clinical responsibility", body: "The pharmacist remains responsible for all clinical decisions." }],
      },
    ],
  },
  "/trust/accessibility": {
    meta: { title: "Accessibility | ZeeNovo", description: "ZeeNovo aims for WCAG 2.1 AA across its website and products. Report a barrier and we respond within five business days." },
    blocks: [
      { type: "hero", eyebrow: "Trust and legal", title: "Accessibility", description: "Every pharmacy team member and every patient should be able to use ZeeNovo." },
      {
        type: "legal",
        intro: "Every pharmacy team member and every patient should be able to use ZeeNovo.",
        sections: [
          { title: "Our standard", body: "We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.1, level AA, on our website and products." },
          { title: "What we do", body: "Keyboard navigation. Text alternatives for images. Sufficient colour contrast. Screen reader support. Reduced-motion settings respected. Voice booking for patients who find forms difficult." },
          { title: "Feedback", body: "Report a barrier at accessibility@zeenovo.com. We respond within five business days." },
          { title: "Ontario", body: "Ontario organisations can request information in an accessible format under the AODA." },
        ],
      },
    ],
  },
  "/trust/data-processing-agreement": {
    meta: { title: "Data Processing Agreement | ZeeNovo", description: "How ZeeNovo processes personal health information on behalf of pharmacies, the data custodians. Request the current agreement." },
    blocks: [
      { type: "hero", eyebrow: "Trust and legal", title: "Data Processing / Agreement", description: "Pharmacies are the custodians of their patients' health information. ZeeNovo processes it on their behalf." },
      {
        type: "legal",
        intro: "Pharmacies are the custodians of their patients' health information. ZeeNovo processes it on their behalf.",
        summary: [
          "The pharmacy controls the data. ZeeNovo processes it only to provide the service.",
          "Patient records are stored in Canada.",
          "We notify the pharmacy without undue delay if a breach affects its data.",
          "When the contract ends, data is returned or deleted as agreed.",
        ],
        sections: [{ title: "Request the agreement", body: "Email contact@zeenovo.com for the current Data Processing Agreement." }],
      },
    ],
  },
  "/trust/sub-processors": {
    meta: { title: "Sub-processors | ZeeNovo", description: "Third parties that process personal information on ZeeNovo's behalf. Customers are notified before a sub-processor is added." },
    blocks: [
      { type: "hero", eyebrow: "Trust and legal", title: "Sub-processors", description: "Third parties that process personal information on ZeeNovo's behalf to deliver the service. We tell customers before adding one." },
      {
        type: "table", eyebrow: "Sub-processors", title: "Sub-processors by service.",
        columns: ["Service", "Purpose"],
        rows: [
          ["Hosting", "Application hosting and storage"],
          ["Fax delivery", "Fax delivery to physicians"],
          ["Email delivery", "Reminders and notifications"],
          ["SMS delivery", "Text message reminders and notifications"],
          ["Voice booking", "Voice appointment booking"],
        ],
        note: "For the current list, email contact@zeenovo.com.",
      },
    ],
  },
};
