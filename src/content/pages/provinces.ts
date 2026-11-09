import type { PageContent } from "@/components/blocks/types";
import type { ProvinceContent } from "@/app/provinces/ProvincePage";

// Program names, regulators and availability need sign-off from ZeeNovo's clinical lead
// (content/README.md, open items 6 and 14).
const status = "Availability to confirm";

export const provincePages: Record<string, ProvinceContent> = {
  alberta: {
    name: "Alberta",
    status,
    title: "ZeeNovo for / Alberta pharmacies.",
    description: "Assessment and prescribing workflows, care plan documentation and publicly funded immunization, structured to Alberta College of Pharmacy standards.",
    signal: { label: "Alberta workflow", title: "Assess and prescribe", flow: "Assessment → documentation → follow-up", badge: "ACP ready" },
    reality: [
      { title: "Broad scope, more to record.", text: "Prescribing authority means every decision needs a clear rationale on file." },
      { title: "Care plans take time.", text: "Medication management assessments and care plans compete with dispensing." },
      { title: "Readiness is ongoing.", text: "ACP standards need to be visible in daily work, not rebuilt for an assessment." },
    ],
    programs: [
      { title: "Assess and prescribe", text: "Guided assessments with prescribing rationale recorded.", icon: "prescription" },
      { title: "Care plans", text: "Medication management assessments and follow-up dates on one record.", icon: "record" },
      { title: "Publicly funded immunization", text: "Influenza and COVID-19 bookings and records.", icon: "vaccination" },
      { title: "ACP readiness", text: "Self-assessment and exports for practice visits.", icon: "safety" },
    ],
  },
  "british-columbia": {
    name: "British Columbia",
    status,
    title: "ZeeNovo for / BC pharmacies.",
    description: "Assessment flows for BC's Minor Ailments and Contraception Service, medication reviews and publicly funded immunization, structured to CPBC expectations.",
    signal: { label: "BC workflow", title: "Minor ailments and contraception", flow: "Assessment → documentation → follow-up", badge: "CPBC ready" },
    reality: [
      { title: "A wider service list.", text: "Minor ailments and contraception arrive alongside dispensing and immunization." },
      { title: "Every assessment is recorded.", text: "Rationale, outcome and physician notification are part of the service." },
      { title: "Readiness is part of the work.", text: "CPBC expectations need to be met in the workflow, not after it." },
    ],
    programs: [
      { title: "Minor ailments and contraception", text: "Guided assessments for the conditions BC pharmacists can treat.", icon: "redFlag" },
      { title: "Medication reviews", text: "Structured reviews with care plans and follow-up.", icon: "record" },
      { title: "Publicly funded immunization", text: "Seasonal vaccine bookings and records.", icon: "vaccination" },
      { title: "CPBC readiness", text: "Self-assessment and audit-ready records.", icon: "safety" },
    ],
  },
  saskatchewan: {
    name: "Saskatchewan",
    status,
    title: "ZeeNovo for / Saskatchewan pharmacies.",
    description: "Minor ailments prescribing, medication assessments and publicly funded immunization, structured to Saskatchewan College of Pharmacy Professionals standards.",
    signal: { label: "Saskatchewan workflow", title: "Minor ailments", flow: "Assessment → documentation → follow-up", badge: "SCPP ready" },
    reality: [
      { title: "Rural and urban demand.", text: "Patients rely on the pharmacy where a clinic is far away." },
      { title: "Every service carries documentation.", text: "The record is part of the service, not an extra." },
      { title: "Readiness is part of the work.", text: "SCPP standards need to be visible in daily practice." },
    ],
    programs: [
      { title: "Minor ailments, end to end", text: "Guided assessments and prescribing records.", icon: "redFlag" },
      { title: "Medication assessments", text: "Reviews with care plans and follow-up.", icon: "record" },
      { title: "Publicly funded immunization", text: "Influenza and COVID-19 bookings and records.", icon: "vaccination" },
      { title: "SCPP readiness", text: "Self-assessment and exports.", icon: "safety" },
    ],
  },
  "nova-scotia": {
    name: "Nova Scotia",
    status,
    title: "ZeeNovo for / Nova Scotia pharmacies.",
    description: "Assessment and prescribing workflows for Nova Scotia's publicly funded pharmacy services and immunization, structured to Nova Scotia College of Pharmacists standards.",
    signal: { label: "Nova Scotia workflow", title: "Pharmacist assessments", flow: "Assessment → documentation → follow-up", badge: "NSCP ready" },
    reality: [
      { title: "Primary care at the counter.", text: "Patients come to the pharmacy first for more conditions each year." },
      { title: "Every service carries documentation.", text: "Assessments, outcomes and physician communication need a clear record." },
      { title: "Readiness is part of the work.", text: "NSCP standards are easier to meet when the workflow records them." },
    ],
    programs: [
      { title: "Pharmacist assessments", text: "Guided assessments for publicly funded conditions.", icon: "redFlag" },
      { title: "Prescribing records", text: "Rationale and outcome on every visit.", icon: "prescription" },
      { title: "Publicly funded immunization", text: "Seasonal vaccine bookings and records.", icon: "vaccination" },
      { title: "NSCP readiness", text: "Self-assessment and audit-ready records.", icon: "safety" },
    ],
  },
  "new-brunswick": {
    name: "New Brunswick",
    status,
    title: "ZeeNovo for / New Brunswick pharmacies.",
    description: "Minor ailments assessments, prescribing records and publicly funded immunization, structured to New Brunswick College of Pharmacists standards.",
    signal: { label: "New Brunswick workflow", title: "Minor ailments", flow: "Assessment → documentation → follow-up", badge: "NBCP ready" },
    reality: [
      { title: "More patients, same team.", text: "Expanded scope brings more visits to the same staff." },
      { title: "Every service carries documentation.", text: "The assessment is complete only when it is recorded." },
      { title: "Readiness is part of the work.", text: "NBCP standards need to show in daily practice." },
    ],
    programs: [
      { title: "Minor ailments, end to end", text: "Guided assessments and prescribing records.", icon: "redFlag" },
      { title: "Medication reviews", text: "Reviews with care plans and follow-up.", icon: "record" },
      { title: "Publicly funded immunization", text: "Seasonal vaccine bookings and records.", icon: "vaccination" },
      { title: "NBCP readiness", text: "Self-assessment and exports.", icon: "safety" },
    ],
  },
  manitoba: {
    name: "Manitoba",
    status,
    title: "ZeeNovo for / Manitoba pharmacies.",
    description: "Minor ailments assessments, prescribing records and publicly funded immunization, structured to College of Pharmacists of Manitoba standards.",
    signal: { label: "Manitoba workflow", title: "Minor ailments", flow: "Assessment → documentation → follow-up", badge: "CPhM ready" },
    reality: [
      { title: "Care rarely arrives one lane at a time.", text: "Assessments, immunization and dispensing share the same day." },
      { title: "Every service carries documentation.", text: "Rationale, outcome and follow-up need to be on file." },
      { title: "Readiness is part of the work.", text: "CPhM standards are easier to meet when the workflow records them." },
    ],
    programs: [
      { title: "Minor ailments, end to end", text: "Guided assessments and prescribing records.", icon: "redFlag" },
      { title: "Medication reviews", text: "Reviews with care plans and follow-up.", icon: "record" },
      { title: "Publicly funded immunization", text: "Seasonal vaccine bookings and records.", icon: "vaccination" },
      { title: "CPhM readiness", text: "Self-assessment and exports.", icon: "safety" },
    ],
  },
};

export const provinceMeta: Record<string, { title: string; description: string }> = {
  alberta: { title: "Alberta Pharmacies | ZeeNovo", description: "Assessment, prescribing and care plan documentation for Alberta pharmacists, structured to Alberta College of Pharmacy expectations." },
  "british-columbia": { title: "British Columbia Pharmacies | ZeeNovo", description: "Minor ailments and contraception assessments, medication reviews and immunization for BC pharmacists, structured to CPBC expectations." },
  saskatchewan: { title: "Saskatchewan Pharmacies | ZeeNovo", description: "Minor ailments prescribing, medication assessments and immunization for Saskatchewan pharmacists, structured to SCPP expectations." },
  "nova-scotia": { title: "Nova Scotia Pharmacies | ZeeNovo", description: "Pharmacist assessments, prescribing and immunization for Nova Scotia pharmacies, structured to NSCP expectations." },
  "new-brunswick": { title: "New Brunswick Pharmacies | ZeeNovo", description: "Minor ailments assessments, prescribing and immunization for New Brunswick pharmacists, structured to NBCP expectations." },
  manitoba: { title: "Manitoba Pharmacies | ZeeNovo", description: "Minor ailments assessments, prescribing and immunization for Manitoba pharmacists, structured to CPhM expectations." },
};

export const provincesOverview: PageContent = {
  meta: { title: "ZeeNovo by Province | Canadian pharmacy software", description: "Assessment logic, terminology and documentation set up for each province's pharmacy programs." },
  blocks: [
    { type: "hero", eyebrow: "Canada", title: "Set up for your / province's programs.", description: "Pharmacist scope is different in every province. ZeeNovo's assessments, terminology and documentation follow the rules where you practise.", primary: { label: "Register Pharmacy", href: "https://auth.zeenovo.com/signup" }, secondary: { label: "Book a Demo", href: "/book-a-demo" } },
    { type: "cards", eyebrow: "Explore by province", title: "Choose your province.", side: "Each page lists the programs ZeeNovo supports there today.", items: [
      { title: "Ontario", text: "Available now", icon: "province", href: "/provinces/ontario" },
      { title: "Alberta", text: status, icon: "province", href: "/provinces/alberta" },
      { title: "British Columbia", text: status, icon: "province", href: "/provinces/british-columbia" },
      { title: "Saskatchewan", text: status, icon: "province", href: "/provinces/saskatchewan" },
      { title: "Nova Scotia", text: status, icon: "province", href: "/provinces/nova-scotia" },
      { title: "New Brunswick", text: status, icon: "province", href: "/provinces/new-brunswick" },
      { title: "Manitoba", text: status, icon: "province", href: "/provinces/manitoba" },
    ] },
    { type: "cta", eyebrow: "Get started", title: "See ZeeNovo with / your own services.", action: { label: "Book a Demo", href: "/book-a-demo" } },
  ],
};
