import type { PageContent } from "@/components/blocks/types";

// Pricing, Resources, Company and Trust pages. Copy source: content/05 to 08.
// Lines marked [ ] or [CONFIRM] in the content docs stay bracketed here.

const demo = { label: "Book a Demo", href: "/book-a-demo" };
const register = { label: "Register Pharmacy", href: "https://auth.zeenovo.com/signup" };
const contact = { label: "Contact Us", href: "/company/contact" };
const ctaDefault = { type: "cta", eyebrow: "Get started", title: "See ZeeNovo with / your own services.", action: demo } as const;

const provinces = ["Ontario", "Alberta", "British Columbia", "Saskatchewan", "Nova Scotia", "New Brunswick", "Manitoba", "Other"];

export const companyPages: Record<string, PageContent> = {
  // ---------- Pricing ----------
  "/pricing": {
    meta: { title: "Pricing | ZeeNovo", description: "ZeeNovo Clinical from C$29.99 a month, Assure from C$19.99 a month. Unlimited users on every plan, and your pharmacy website included." },
    blocks: [
      { type: "hero", title: "Simple pricing. / No per-user fees.", description: "Every plan includes unlimited team members, each with their own login, and your pharmacy website.", primary: demo, secondary: register },
      {
        type: "pricing",
        plans: [
          { name: "Assure", price: "C$19.99", annual: "or C$199 a year", features: ["Incident reporting", "ISMP MSSA", "Pharmacy self-assessment", "CQI meetings and goals", "Safety analytics"], action: { label: "Start with Assure", href: "https://auth.zeenovo.com/signup" } },
          { name: "Combo", price: "C$44.99", annual: "or C$449.99 a year", featured: true, features: ["Everything in Clinical", "Everything in Assure", "Priority support", "Multi-location ready"], action: { label: "Get the Combo", href: "https://auth.zeenovo.com/signup" } },
          { name: "Clinical", price: "C$29.99", annual: "or C$299 a year", features: ["Minor ailments", "Vaccinations and injections", "Prescribing support", "Automated follow-up", "Documentation and eFax"], action: { label: "Start with Clinical", href: "https://auth.zeenovo.com/signup" } },
        ],
        included: "ZeeNovo Sites, your pharmacy website with live booking.",
        addons: ["ZeeNovo Patient Portal with voice booking. Price on request.", "Multi-location groups and chain dashboards. Talk to us."],
        facts: ["No credit card to start", "Cancel anytime", "Unlimited users", "Website included", "Set up in under a day"],
      },
      {
        type: "faq", eyebrow: "Pricing FAQ", title: "Questions before you start.", items: [
          { q: "Is there a free trial?", a: "Yes. You can start without a credit card. Most pharmacies are set up within a day." },
          { q: "Do you charge per user?", a: "No. Every plan includes unlimited team members, each with their own login and role." },
          { q: "Can I change plans later?", a: "Yes. Move between Clinical, Assure and Combo, or add the Patient Portal, at any time. Changes apply from your next billing cycle." },
          { q: "Is the ISMP MSSA included?", a: "Yes. It is included in ZeeNovo Assure at no extra cost." },
          { q: "Do prices include tax?", a: "[CONFIRM: tax treatment and currency.]" },
          { q: "How do multi-location groups buy?", a: "Through an enterprise agreement. Book a call and we will scope it with you." },
        ],
      },
      { type: "cta", eyebrow: "Not sure which plan?", title: "Work out what ZeeNovo / is worth to your pharmacy.", action: { label: "Open the ROI Calculator", href: "/pricing/roi-calculator" } },
    ],
  },
  "/pricing/roi-calculator": {
    meta: { title: "ROI Calculator | ZeeNovo", description: "Estimate the clinical revenue and staff time ZeeNovo could add to your pharmacy each month." },
    blocks: [
      { type: "hero", eyebrow: "Pricing", title: "What is ZeeNovo / worth to your pharmacy?", description: "Enter a few numbers from a typical month. The estimate updates as you type.", primary: demo, secondary: { label: "See Pricing", href: "/pricing" } },
      { type: "roi" },
      ctaDefault,
    ],
  },

  // ---------- Resources ----------
  "/resources": {
    meta: { title: "Resources | ZeeNovo", description: "Guides, case studies, product updates and articles for Canadian pharmacy teams." },
    blocks: [
      { type: "hero", title: "Resources for / pharmacy teams.", description: "Practical guides, customer results and product updates from ZeeNovo.", primary: { label: "Read the Blog", href: "/blog" }, secondary: demo },
      {
        type: "cards", eyebrow: "Browse", title: "Start here.", side: "Written for owners, pharmacists and pharmacy groups.", items: [
          { title: "Blog", text: "Practice, policy and product articles.", icon: "record", href: "/blog" },
          { title: "Case Studies", text: "How pharmacies use ZeeNovo.", icon: "chartStar", href: "/resources/case-studies" },
          { title: "Guides", text: "Step-by-step setup and program guides.", icon: "steps", href: "/resources/guides" },
          { title: "Changelog", text: "What is new in ZeeNovo.", icon: "calendarStar", href: "/resources/changelog" },
        ],
      },
      ctaDefault,
    ],
  },
  "/blog": {
    meta: { title: "Blog | ZeeNovo", description: "Articles on pharmacy practice, provincial programs, patient safety and running a clinical pharmacy." },
    blocks: [
      { type: "hero", title: "The ZeeNovo blog", description: "Practice, policy and product, for Canadian pharmacy teams.", primary: { label: "Browse Articles", href: "#articles" }, secondary: demo },
      {
        type: "list", eyebrow: "Articles", title: "Latest articles.",
        filters: ["All", "Clinical practice", "Patient safety", "Provincial programs", "Pharmacy business", "Product"],
        items: [
          { tag: "Provincial programs · Coming soon", title: "What Ontario's minor ailments program covers, and how to document it", text: "Brief for ZeeNovo to approve.", meta: "Read article", href: "/blog/sample-article" },
          { tag: "Patient safety · Coming soon", title: "How to cut incident reporting time without losing detail", text: "Brief for ZeeNovo to approve.", meta: "Read article", href: "/blog/sample-article" },
          { tag: "Clinical practice · Coming soon", title: "Running a flu clinic week: booking, walk-ins and dose reminders", text: "Brief for ZeeNovo to approve.", meta: "Read article", href: "/blog/sample-article" },
          { tag: "Provincial programs · Coming soon", title: "Preparing for an OCP practice assessment", text: "Brief for ZeeNovo to approve.", meta: "Read article", href: "/blog/sample-article" },
          { tag: "Patient safety · Coming soon", title: "What the ISMP MSSA is and how often to complete it", text: "Brief for ZeeNovo to approve.", meta: "Read article", href: "/blog/sample-article" },
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
    meta: { title: "Case Studies | ZeeNovo", description: "How Ontario pharmacies use ZeeNovo to grow clinical services and simplify daily operations." },
    blocks: [
      { type: "hero", title: "Real pharmacies. / Real results.", description: "How pharmacies across Ontario run their clinical services, websites and operations on ZeeNovo.", primary: demo, secondary: register },
      {
        type: "list", eyebrow: "Case studies", title: "Customer stories.",
        items: [
          { tag: "Ontario · Clinical and Vaccinations", title: "MapleMeds Pharmacies took clinical and vaccination revenue to record levels", text: "MapleMeds runs its minor ailments and immunization programs on ZeeNovo Clinical, using one-click vaccine auto-fill and automated dose reminders across its stores.", meta: "Record clinical and vaccination revenue" },
          { tag: "Ontario · Clinical and Website", title: "Oshawa Lakeview Pharmacy grew clinical revenue and simplified daily operations", text: "After moving to ZeeNovo Clinical and launching its ZeeNovo website, the pharmacy improved clinical revenue and made daily clinical work easier to run, from guided assessments to automatic documentation and fax.", meta: "Simpler daily clinical operations" },
          { tag: "Ontario · New store launch", title: "KW Bruce Pharmacies opened a new store with a head start", text: "KW Bruce built its new location on ZeeNovo from day one, using online and voice booking to bring in patients from the first week.", meta: "Early patient traction from day one" },
        ],
      },
      ctaDefault,
    ],
  },
  "/resources/guides": {
    meta: { title: "Guides | ZeeNovo", description: "Step-by-step guides for setting up ZeeNovo and running clinical and safety programs." },
    blocks: [
      { type: "hero", title: "Guides", description: "Step-by-step help for setting up ZeeNovo and running your programs.", primary: demo, secondary: contact },
      {
        type: "list", eyebrow: "Guides", title: "Set up and run / your programs.",
        filters: ["All", "Getting started", "Clinical", "Assure", "Website"],
        items: [
          { tag: "Getting started", title: "Set up your pharmacy in a day", text: "Services, team and calendar, in order." },
          { tag: "Getting started", title: "Import patients from your PMS", text: "Bring your patient list across by CSV." },
          { tag: "Getting started", title: "Add your team", text: "Give each person their own login and role." },
          { tag: "Clinical", title: "Set up minor ailments services", text: "Choose the conditions you offer and open bookings." },
          { tag: "Clinical", title: "Run a vaccine clinic", text: "Slots, walk-ins, group bookings and reminders." },
          { tag: "Clinical", title: "Configure eFax", text: "Send records to physicians from the visit." },
          { tag: "Assure", title: "Report your first incident", text: "A guided report from start to finish." },
          { tag: "Assure", title: "Complete the ISMP MSSA", text: "Work through the assessment as a team." },
          { tag: "Assure", title: "Run a CQI meeting", text: "Review incidents, goals and actions." },
          { tag: "Website", title: "Launch your pharmacy website", text: "Pick your services and brand, then publish." },
          { tag: "Website", title: "Share service booking links", text: "Put a booking link on social, email and ads." },
        ],
      },
      ctaDefault,
    ],
  },
  "/resources/changelog": {
    meta: { title: "Changelog | ZeeNovo", description: "New features and improvements in ZeeNovo, in date order." },
    blocks: [
      { type: "hero", title: "Changelog", description: "New features and improvements, newest first.", primary: demo, secondary: contact },
      {
        type: "list", eyebrow: "Product updates", title: "What is new in ZeeNovo.",
        filters: ["All", "Clinical", "Assure", "Sites", "Patient Portal"],
        items: [],
        empty: "Entries will be published by the ZeeNovo product team.",
      },
      ctaDefault,
    ],
  },

  // ---------- Company ----------
  "/company": {
    meta: { title: "Company | ZeeNovo", description: "Who we are, how to reach us and how to see ZeeNovo." },
    blocks: [
      { type: "hero", title: "About ZeeNovo.", description: "Who we are, how to reach us and how to see the product.", primary: demo, secondary: contact },
      {
        type: "cards", eyebrow: "Company", title: "Where to next.", side: "Who we are, how to reach us and how to see the product.", items: [
          { title: "About", text: "Our mission and team.", icon: "pharmacist", href: "/company/about" },
          { title: "Contact", text: "Talk to the ZeeNovo team.", icon: "globe", href: "/company/contact" },
          { title: "Book a Demo", text: "See ZeeNovo with your services.", icon: "calendarStar", href: "/book-a-demo" },
        ],
      },
      ctaDefault,
    ],
  },
  "/company/about": {
    meta: { title: "About ZeeNovo", description: "ZeeNovo builds clinical, compliance and patient software for Canadian pharmacies." },
    blocks: [
      { type: "hero", eyebrow: "About", title: "Modernising Canadian / pharmacy care.", description: "ZeeNovo builds software that gives pharmacists their time back and helps pharmacies deliver more clinical care, safely and profitably.", primary: demo, secondary: contact, person: "followupPharmacist" },
      {
        type: "cards", eyebrow: "How we work", title: "What we hold to.", side: "These decide what we build and what we leave out.", items: [
          { title: "The pharmacist decides", text: "Our tools guide and record. They never make the clinical decision.", icon: "pharmacist" },
          { title: "Province first", text: "Scope differs by province. Our software follows the rules where you practise.", icon: "province" },
          { title: "Data stays protected", text: "Health information is stored in Canada, with every access logged.", icon: "safety" },
        ],
      },
      {
        type: "facts", items: [
          { value: "[2024]", label: "Founded [CONFIRM]" },
          { value: "[4]", label: "Connected products [CONFIRM]" },
          { value: "[n]", label: "Pharmacies [CONFIRM]" },
          { value: "Canada", label: "Data residency" },
        ],
      },
      {
        type: "cards", eyebrow: "The team", title: "The team.", side: "Leadership names, roles and photos to be supplied by ZeeNovo.", items: [
          { title: "[Name]", text: "[Role]. [One line on background.]", icon: "pharmacist" },
          { title: "[Name]", text: "[Role]. [One line on background.]", icon: "pharmacist" },
          { title: "[Name]", text: "[Role]. [One line on background.]", icon: "pharmacist" },
        ],
      },
      ctaDefault,
    ],
  },
  "/company/contact": {
    meta: { title: "Contact ZeeNovo", description: "Contact the ZeeNovo team about Clinical, Assure, your pharmacy website or enterprise plans. We reply within one business day." },
    blocks: [
      { type: "hero", title: "Contact us", description: "Send us a note and we will reply within one business day.", primary: demo, secondary: register },
      {
        type: "form", eyebrow: "Contact", title: "Send us a message.", description: "Tell us about your pharmacy and what you need.",
        fields: [
          { kind: "text", label: "Pharmacy name", half: true },
          { kind: "text", label: "Your name", half: true },
          { kind: "email", label: "Work email", half: true },
          { kind: "tel", label: "Phone", optional: true, half: true },
          { kind: "select", label: "Province", options: provinces },
          { kind: "checks", label: "Interested in", options: ["Clinical", "Assure", "Combo", "Website", "Patient Portal", "Multi-location groups"] },
          { kind: "textarea", label: "How can we help?" },
        ],
        consent: "By sending this form you agree that ZeeNovo may contact you about your enquiry. See our Privacy Policy.",
        submit: "Send Message",
        success: "Thank you. We will reply within one business day.",
        aside: { title: "Talk to us", lines: ["Email: contact@zeenovo.com", "Phone: [number]", "Hours: Monday to Friday, 9 am to 6 pm ET", "Address: [registered office]", "Existing customers: log in and use in-app support, or email contact@zeenovo.com."] },
      },
    ],
  },
  "/book-a-demo": {
    meta: { title: "Book a Demo | ZeeNovo", description: "See ZeeNovo with your own services in a 30-minute demo with our team." },
    blocks: [
      { type: "hero", title: "See ZeeNovo with / your own services.", description: "A 30-minute call with our team. We set up the demo around the services you offer and the province you practise in.", primary: { label: "Book My Demo", href: "#book" }, secondary: contact },
      {
        type: "cards", eyebrow: "What to expect", title: "Thirty minutes, / built around you.", side: "No generic slides. We show what you would actually use.", items: [
          { title: "Your services", text: "We show the workflows you would actually use.", icon: "assessment" },
          { title: "Your province", text: "Assessments and terminology for where you practise.", icon: "province" },
          { title: "Your questions", text: "Pricing, setup, data and migration.", icon: "pharmacist" },
        ],
      },
      {
        type: "form", eyebrow: "Book a demo", title: "Tell us about / your pharmacy.", description: "We will email you within one business day to confirm a time.",
        fields: [
          { kind: "text", label: "First name", half: true },
          { kind: "text", label: "Last name", half: true },
          { kind: "email", label: "Work email", half: true },
          { kind: "tel", label: "Phone", half: true },
          { kind: "text", label: "Pharmacy name" },
          { kind: "select", label: "Number of locations", options: ["1", "2 to 5", "6 to 20", "More than 20"], half: true },
          { kind: "select", label: "Province", options: provinces, half: true },
          { kind: "checks", label: "Products of interest", options: ["Clinical", "Assure", "Website", "Patient Portal", "Enterprise"] },
          { kind: "textarea", label: "Anything we should know?", optional: true },
        ],
        submit: "Book My Demo",
        success: "Thank you. We will email you within one business day to confirm a time.",
      },
    ],
  },

  // ---------- Trust & Legal ----------
  "/trust/security-and-compliance": {
    meta: { title: "Security and Compliance | ZeeNovo", description: "How ZeeNovo protects personal health information: aligned with PHIPA, PIPEDA and HIPAA, SOC 2 audit in progress, with Canadian data residency, encryption and full audit trails." },
    blocks: [
      { type: "hero", eyebrow: "Trust", title: "Security built for / Canadian health data.", description: "ZeeNovo helps pharmacies meet their obligations under PHIPA and PIPEDA, applies HIPAA-aligned safeguards, and is completing a SOC 2 audit.", primary: contact, secondary: demo },
      {
        type: "wave", tag: "At a glance", title: "Your data is in good hands.", items: [
          { label: "PHIPA aligned", icon: "shield" },
          { label: "PIPEDA aligned", icon: "calendarStar" },
          { label: "HIPAA-aligned safeguards", icon: "chartStar" },
          { label: "SOC 2 audit in progress", icon: "grid" },
          { label: "Canadian data residency", icon: "globe" },
        ],
      },
      {
        type: "cards", eyebrow: "How we protect data", title: "Six layers of protection.", side: "These apply to every ZeeNovo product.", items: [
          { title: "PHIPA", text: "As an electronic service provider to pharmacies, ZeeNovo supports consent, access control, audit logging and secure handling of personal health information.", icon: "safety" },
          { title: "PIPEDA", text: "Our data practices follow PIPEDA's fair information principles, including accountability, limited collection and use, safeguards, openness and individual access.", icon: "record" },
          { title: "Safeguards", text: "Encryption in transit and at rest, role-based access, least-privilege administration, Canadian hosting and continuous monitoring.", icon: "safeguards" },
          { title: "Accountability", text: "Every access and change is logged, supporting patient access, correction and breach notification requirements.", icon: "assessment" },
          { title: "HIPAA", text: "Our administrative, physical and technical safeguards are designed to HIPAA Security Rule standards, for pharmacies and partners that work with US health data.", icon: "shield" },
          { title: "SOC 2", text: "We are completing an independent SOC 2 audit of our security, availability and confidentiality controls. The report will be available to customers under NDA once issued.", icon: "chartStar" },
        ],
      },
      {
        type: "cards", eyebrow: "Enterprise reporting", title: "Aggregate and / de-identified.", side: "Security questions or a vulnerability to report? Email security@zeenovo.com.", items: [
          { title: "Aggregate only", text: "Enterprise and chain dashboards show aggregate, de-identified data only.", icon: "chartStar" },
          { title: "Minimum cohorts", text: "Minimum cohort sizes and suppression prevent any patient from being identified.", icon: "safety" },
          { title: "Related documents", text: "Privacy Policy, Data Processing Agreement and Sub-processors.", icon: "record", href: "/trust/privacy-policy" },
        ],
      },
      ctaDefault,
    ],
  },
  "/trust/privacy-policy": {
    meta: { title: "Privacy Policy | ZeeNovo", description: "What personal information ZeeNovo collects, why, how we protect it, and the choices you have." },
    blocks: [
      { type: "hero", eyebrow: "Trust & Legal", title: "Privacy Policy", description: "What personal information ZeeNovo collects, why, how we protect it, and the choices you have.", primary: contact, secondary: { label: "Security and Compliance", href: "/trust/security-and-compliance" } },
      {
        type: "legal", updated: "[date]",
        intro: "This policy explains what personal information ZeeNovo collects, why, how we protect it, and the choices you have. It applies to our website and our products.",
        sections: [
          { title: "Who we are" },
          { title: "Our role: service provider to pharmacies, and our own website visitors" },
          { title: "Information we collect" },
          { title: "How we use it" },
          { title: "Who we share it with" },
          { title: "Where it is stored" },
          { title: "How long we keep it" },
          { title: "How we protect it" },
          { title: "Your rights: access, correction, withdrawal of consent" },
          { title: "Cookies and analytics" },
          { title: "Changes to this policy" },
          { title: "Contact our Privacy Officer" },
        ],
        note: "Legal text must come from ZeeNovo's counsel. Section headings are a starting structure only.",
      },
    ],
  },
  "/trust/terms-and-conditions": {
    meta: { title: "Terms and Conditions | ZeeNovo", description: "The terms that govern your use of the ZeeNovo website and services." },
    blocks: [
      { type: "hero", eyebrow: "Trust & Legal", title: "Terms and Conditions", description: "The terms that govern your use of the ZeeNovo website and services.", primary: contact, secondary: { label: "Privacy Policy", href: "/trust/privacy-policy" } },
      {
        type: "legal", updated: "[date]",
        intro: "These terms govern your use of the ZeeNovo website and services. By using them you agree to these terms.",
        sections: [
          { title: "Definitions" },
          { title: "Accounts and access" },
          { title: "Subscriptions and payment" },
          { title: "Acceptable use" },
          { title: "Clinical responsibility", body: "The pharmacist remains responsible for all clinical decisions. [Full clause from counsel.]" },
          { title: "Data and privacy" },
          { title: "Availability and support" },
          { title: "Intellectual property" },
          { title: "Limitation of liability" },
          { title: "Termination" },
          { title: "Governing law" },
          { title: "Changes" },
          { title: "Contact" },
        ],
        note: "Legal text must come from ZeeNovo's counsel.",
      },
    ],
  },
  "/trust/accessibility": {
    meta: { title: "Accessibility | ZeeNovo", description: "How ZeeNovo designs and tests for accessibility, and how to tell us when something is hard to use." },
    blocks: [
      { type: "hero", eyebrow: "Trust & Legal", title: "Accessibility", description: "We want every pharmacy team member and every patient to be able to use ZeeNovo.", primary: contact, secondary: demo },
      {
        type: "legal", updated: "[date]",
        intro: "We want every pharmacy team member and every patient to be able to use ZeeNovo.",
        sections: [
          { title: "Our standard", body: "We design and test our website and products to meet the Web Content Accessibility Guidelines (WCAG) 2.1, level AA. [CONFIRM target level]" },
          { title: "What we do", body: "Keyboard navigation. Text alternatives for images. Sufficient colour contrast. Support for screen readers. Reduced motion respected. Voice booking for patients who find forms difficult." },
          { title: "Known limitations", body: "[List any, or remove this section.]" },
          { title: "Feedback", body: "If something is hard to use, tell us at accessibility@zeenovo.com and we will respond within five business days. [CONFIRM address and response time]" },
          { title: "Ontario", body: "Ontario organisations may also ask us for information in an accessible format under the AODA." },
        ],
      },
    ],
  },
  "/trust/data-processing-agreement": {
    meta: { title: "Data Processing Agreement | ZeeNovo", description: "How ZeeNovo processes personal health information on behalf of pharmacies." },
    blocks: [
      { type: "hero", eyebrow: "Trust & Legal", title: "Data Processing / Agreement", description: "Pharmacies are the custodians of their patients' personal health information. ZeeNovo processes it on their behalf. This agreement sets out how.", primary: contact, secondary: { label: "Sub-processors", href: "/trust/sub-processors" } },
      {
        type: "legal", updated: "[date]",
        intro: "Pharmacies are the custodians of their patients' personal health information. ZeeNovo processes it on their behalf. This agreement sets out how.",
        summary: [
          "The pharmacy controls the data. ZeeNovo processes it only to provide the service.",
          "Data is stored in Canada. [CONFIRM]",
          "ZeeNovo staff access data only when needed for support, and that access is logged.",
          "We notify the pharmacy without undue delay if a breach affects its data.",
          "When the contract ends, data is returned or deleted as agreed.",
        ],
        sections: [{ title: "Agreement" }, { title: "Download the DPA (PDF)" }],
        note: "Legal text must come from ZeeNovo's counsel.",
      },
    ],
  },
  "/trust/sub-processors": {
    meta: { title: "Sub-processors | ZeeNovo", description: "The third parties that process personal information on ZeeNovo's behalf." },
    blocks: [
      { type: "hero", eyebrow: "Trust & Legal", title: "Sub-processors", description: "These are the third parties that process personal information on ZeeNovo's behalf to deliver our services.", primary: contact, secondary: { label: "Data Processing Agreement", href: "/trust/data-processing-agreement" } },
      {
        type: "table", eyebrow: "Last updated: [date]", title: "Current sub-processors.",
        columns: ["Sub-processor", "Purpose", "Data location"],
        rows: [
          ["[Hosting provider]", "Application hosting and storage", "Canada"],
          ["[eFax provider]", "Fax delivery to physicians", "[ ]"],
          ["[Email provider]", "Reminders and notifications", "[ ]"],
          ["[Voice provider]", "Voice booking", "[ ]"],
        ],
        note: "We give customers [30] days' notice before adding a sub-processor. Subscribe to updates: [link]. [CONFIRM all entries]",
      },
    ],
  },
};
