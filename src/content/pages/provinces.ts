import type { Block, PageContent } from "@/components/blocks/types";
import type { ProvinceContent } from "@/app/provinces/ProvincePage";

// One template for the six province pages outside Ontario. Availability and clinical scope per province
// need sign-off from ZeeNovo (content/README.md, open items 6 and 14), so pages make no college or
// program-readiness claims and the signal card asks about availability.
const status = "Ask about availability";

function province(name: string): ProvinceContent {
  return {
    name,
    status,
    title: `ZeeNovo for / ${name} pharmacies.`,
    description: `Online booking, guided clinical visits, vaccine records, physician fax and follow-up, with billing PINs and services set up for ${name}.`,
    signal: { label: `${name} workflow`, title: "Guided clinical visits", flow: "Assessment → documentation → follow-up", badge: status },
    reality: [
      { title: "Services compete for one team.", text: "Assessments, immunization and dispensing share the same day." },
      { title: "Every service needs a complete record.", text: "Decision, outcome and physician communication must be on file." },
      { title: "Standards apply daily, not at inspection.", text: "Records should be produced by the workflow, not rebuilt for an assessment." },
    ],
    programs: [
      { title: "Online booking", text: "On your own pharmacy website.", icon: "storefront" },
      { title: "Guided clinical visits", text: "For the services your pharmacy offers, with physician fax and follow-up from the record.", icon: "redFlag" },
      { title: "Vaccine clinics", text: "Lot and expiry capture, dose reminders.", icon: "vaccination" },
      { title: "Safety program", text: "Incident reporting, CQI meetings, self-assessment and SOP sign-off.", icon: "safety" },
      { title: "Billing PINs", text: `Set up for ${name}.`, icon: "province" },
      { title: "Provincial forms", text: "Coming soon.", icon: "record" },
    ],
  };
}

export const provincePages: Record<string, ProvinceContent> = {
  alberta: province("Alberta"),
  "british-columbia": province("British Columbia"),
  saskatchewan: province("Saskatchewan"),
  "nova-scotia": province("Nova Scotia"),
  "new-brunswick": province("New Brunswick"),
  manitoba: province("Manitoba"),
};

const meta = (name: string) => ({
  title: `Pharmacy software for ${name} pharmacies | ZeeNovo`,
  description: `Online booking, guided clinical visits, vaccine records, physician fax, follow-up and a safety program, set up for ${name} community pharmacies.`,
});

export const provinceMeta: Record<string, { title: string; description: string }> = Object.fromEntries(
  Object.entries(provincePages).map(([slug, page]) => [slug, meta(page.name)]),
);

// Ontario keeps its approved custom hero, reality cards and CTA (src/app/provinces/ontario/page.tsx).
// The blocks below replace the old program-card artwork and outcomes wave, whose labels were baked into images.
export const ontario: { meta: PageContent["meta"]; blocks: Block[] } = {
  meta: { title: "Pharmacy software for Ontario pharmacies | ZeeNovo", description: "Minor ailments, flu and COVID-19 clinics, MedsCheck with Ontario forms, billing PINs on every visit and a safety program for OCP assessments." },
  blocks: [
    { type: "cards", eyebrow: "Funded services", title: "Get paid for the clinical / work you already do.", items: [
      { title: "Minor ailments", text: "Every assessment documented with its outcome. Billing PIN shown for the visit mode and whether you prescribed.", icon: "redFlag" },
      { title: "MedsCheck", text: "Queue of due patients, automatic invitations and Ontario forms filled in. Early access.", icon: "record" },
      { title: "Flu and COVID-19", text: "Group bookings fill clinic days. Every dose recorded with DIN, lot and expiry.", icon: "vaccination" },
      { title: "Safety program", text: "Incident data submitted to ISMP Canada, plus CQI and SOP records for OCP assessments.", icon: "safety" },
    ], action: { label: "Estimate Your Pharmacy's Numbers", href: "/pricing/roi-calculator" } },
    { type: "table", eyebrow: "With ZeeNovo", title: "What Ontario pharmacies / run on ZeeNovo", columns: ["Program", "On ZeeNovo"], rows: [
      ["Minor ailments", "Guided visits for the conditions Ontario pharmacists can assess."],
      ["Publicly funded flu and COVID-19", "Group bookings, lot and expiry capture, dose reminders."],
      ["MedsCheck · Early access", "Annual, Follow-up, Diabetes and At Home, with Ontario forms filled in."],
      ["Billing PINs", "By service, visit mode and outcome."],
      ["Ontario forms · Coming soon", "OHIP+ attestation, frequency of dispensing, smoking cessation, narcotic destruction, loss/theft and more."],
      ["Incident reporting", "Near misses and incidents, submitted to ISMP Canada."],
    ] },
    { type: "faq", eyebrow: "Questions", title: "Common questions.", items: [
      { q: "Is ZeeNovo approved by OCP?", a: "No. OCP doesn't approve or endorse software. ZeeNovo keeps the records your practice needs." },
    ] },
  ],
};

export const provincesOverview: PageContent = {
  meta: { title: "ZeeNovo by province | Canadian pharmacy software", description: "Services, billing PINs and forms set up for the province you practise in. Ontario, Alberta, BC, Saskatchewan, Nova Scotia, New Brunswick, Manitoba." },
  blocks: [
    { type: "hero", eyebrow: "Canada", title: "Set up for your / province's programs.", description: "Pharmacist scope differs by province. ZeeNovo's services, billing PINs and forms follow the province you practise in.", primary: { label: "Book a Demo", href: "/book-a-demo" }, secondary: { label: "Start Free Trial", href: "https://auth.zeenovo.com/signup" } },
    { type: "cards", eyebrow: "Explore by province", title: "Choose your province.", side: "Each page lists what ZeeNovo supports there today.", items: [
      { title: "Ontario", text: "Minor ailments, MedsCheck, flu and COVID-19 clinics, and billing PINs.", icon: "province", href: "/provinces/ontario" },
      ...Object.entries(provincePages).map(([slug, page]) => ({
        title: page.name,
        text: "Online booking, guided visits, vaccine records and billing PINs set up for the province.",
        icon: "province" as const,
        href: `/provinces/${slug}`,
      })),
    ] },
    { type: "cta", eyebrow: "Get started", title: "See ZeeNovo with / your own services.", action: { label: "Book a Demo", href: "/book-a-demo" } },
  ],
};
