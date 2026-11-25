import { shareMeta } from "@/lib/metadata";
import type { Metadata } from "next";
import { BlockList } from "@/components/blocks/BlockPage";
import type { Block } from "@/components/blocks/types";
import { clinicalFeatures } from "@/content/featureSections";
import Image from "next/image";
import FinalCta from "@/components/FinalCta";
import ScrollFade from "@/components/ScrollFade";
import RevealSequence from "@/components/RevealSequence";
import { ClinicalHeroFlags, ClinicalHeroTimer } from "@/components/ClinicalHeroVisuals";
import ClinicalProfilePreview from "@/components/ClinicalProfilePreview";
import ClinicalFlowPreview from "@/components/ClinicalFlowPreview";
import ClinicalFollowupPreview from "@/components/ClinicalFollowupPreview";
import styles from "./page.module.css";

const a = (name: string) => `/assets/clinical/${name}`;

export const metadata: Metadata = shareMeta({
  title: "ZeeNovo Clinical | Pharmacy clinical services software",
  description: "Minor ailments, vaccines, injections and prescription requests on one record, with physician fax, automated follow-up and billing PINs.",
});

// `badge` is an availability label, shown beside the tile number.
const services: readonly { title: string; icon: string; tone: "purple" | "lavender" | "peach" | "aqua"; badge?: string }[] = [
  { title: "Minor Ailments", icon: "service-minor.svg", tone: "purple" },
  { title: "Vaccinations", icon: "service-vaccination.svg", tone: "lavender" },
  { title: "Injections", icon: "service-injection.svg", tone: "peach" },
  { title: "Prescription Requests", icon: "service-prescription.svg", tone: "aqua" },
  { title: "Medication Review", icon: "service-review.svg", tone: "purple", badge: "Early access" },
  { title: "Point-of-Care Testing", icon: "service-testing.svg", tone: "peach", badge: "Early access" },
];

const conditions = [
  { title: "Acne", icon: "condition-acne.svg" },
  { title: "Contact dermatitis", icon: "condition-contact.svg" },
  { title: "Dandruff", icon: "condition-dandruff.svg" },
  { title: "Diaper rash", icon: "condition-diaper.svg" },
  { title: "Eczema", icon: "condition-eczema.svg" },
  { title: "Minor skin infections", icon: "condition-infection.svg" },
  { title: "Ringworm", icon: "condition-ringworm.svg" },
  { title: "Skin conditions", icon: "condition-skin.svg" },
] as const;

const prescriptions = [
  { title: "Refill Prescription", detail: "Most requested", icon: "prescription-refill.svg" },
  { title: "New Prescription", detail: "Open workflow", icon: "prescription-new.svg" },
  { title: "Renew Prescription", detail: "Open workflow", icon: "prescription-repeat.svg" },
  { title: "Transfer Prescription", detail: "Open workflow", icon: "prescription-transfer.svg" },
] as const;

const bookingFeatures = [
  { title: "Walk-in Patient Intake", icon: "booking-intake.svg" },
  { title: "Customizable Calendar", icon: "booking-calendar.svg" },
  { title: "Waitlist", icon: "booking-waitlist.svg" },
  { title: "Group Bookings", icon: "booking-group.svg" },
] as const;

const workflowFeatures = [
  { title: "Adaptive screening", description: "Questions branch on each answer, the patient's sex and your province's list.", icon: "workflow-assessment.svg" },
  { title: "Clinical safeguards", description: "Health flags, red flags with referral criteria, and stop flags that end the visit and record why.", icon: "workflow-safeguards.svg" },
  { title: "Saved directions", description: "Pick the medicine and directions from your pharmacy's presets. You confirm or change every step.", icon: "workflow-steps.svg" },
] as const;

const patientFeatures = [
  { title: "Patient Relationship Management", icon: "patient-relationship.svg" },
  { title: "Follow-up Scheduling", icon: "patient-followup.svg" },
  { title: "Additional Dose Reminders", icon: "patient-dose.svg" },
  { title: "Autofill Preferences", icon: "patient-autofill.svg" },
] as const;

const documentFeatures = [
  { title: "Automated Clinical Documentation", icon: "document-auto.svg" },
  { title: "Built-in eFax Integration", icon: "document-efax.svg" },
  { title: "Compliant Storage", icon: "document-storage.svg" },
  { title: "Audit-Ready Records", icon: "document-audit.svg" },
] as const;

const followupFeatures = [
  { title: "Triggered by the service", description: "Each service sends its own follow-up automatically, by secure email link, on its own schedule.", icon: "followup-plan.svg" },
  { title: "Up to three attempts", description: "If the patient doesn't answer, ZeeNovo sends it again, up to three attempts.", icon: "followup-progress.svg" },
  { title: "Flagged for pharmacist review", description: "Answers that need a pharmacist are flagged. Every outcome is recorded on the original visit.", icon: "followup-outcomes.svg" },
] as const;

const connectedSteps = [
  { title: "Booking", icon: "connected-booking.svg" },
  { title: "Intake", icon: "connected-intake.svg" },
  { title: "Assessment", icon: "connected-assessment.svg" },
  { title: "Documentation", icon: "connected-documentation.svg" },
  { title: "Communication", icon: "connected-communication.svg" },
  { title: "Patient Directed Follow-up", icon: "connected-followup.svg" },
] as const;

function Arrow({ tone = "purple" }: { tone?: "purple" | "white" | "dark" }) {
  const src = tone === "white" ? "/assets/zeenovo-nav-arrow-primary.svg" : tone === "dark" ? "/assets/f8683db4-d9e8-40c7-bdd8-b73e078b4cb5.svg" : "/assets/zeenovo-nav-arrow-outline.svg";
  return <Image data-cta-icon src={src} alt="" aria-hidden="true" className={styles.arrow} width={24} height={24} />;
}

function Hero() {
  return <section className={styles.hero} aria-labelledby="clinical-title">
    <Image className={styles.heroWave} src={a("hero-wave.svg")} alt="" width={480} height={819} priority />
    <Image className={styles.heroEllipse} src={a("hero-ellipse.svg")} alt="" width={619} height={619} priority />
    <div className={styles.heroCopy}>
      <span className={`tag hero-pill ${styles.heroEnter}`}><span aria-hidden="true">★</span>From product to platform</span>
      <h1 className={styles.heroEnter} id="clinical-title">Every clinical service,<br /> <span style={{ whiteSpace: "nowrap" }}>end-to-end</span> workflow.</h1>
      <p className={`${styles.heroEnter} ${styles.heroDescription}`}>Minor ailments, vaccinations, injections and point-of-care testing on one calendar. Guided screening, generated documents, physician fax and automated follow-up. The pharmacist makes every decision.</p>
      <div className={`${styles.heroActions} ${styles.heroEnter}`}>
        <a data-cta className={styles.primaryButton} href="/book-a-demo"><Arrow tone="white" />Book a Clinical Demo</a>
        <a data-cta className={styles.outlineButton} href="https://auth.zeenovo.com/signup"><Arrow />Start Free Trial</a>
      </div>
    </div>
    <div className={styles.heroVisual}>
      <ClinicalHeroFlags />
      <Image className={styles.heroPharmacist} src={a("hero-pharmacist.png")} alt="Pharmacist reviewing a clinical assessment" width={1086} height={1448} sizes="(max-width: 760px) 245px, 424px" priority />
      <ClinicalHeroTimer />
      <Image className={styles.heroConnectedBadge} src={a("hero-connected-badge.svg")} alt="One connected clinical workflow" width={240} height={36} priority />
    </div>
  </section>;
}

function ClinicalServices() {
  return <section className={styles.services} id="clinical-services" aria-labelledby="clinical-services-title">
    <div className={styles.sectionInner}>
      <ScrollFade as="div" className={styles.splitHeading}>
        <div><p className={styles.eyebrow}>Clinical Services</p><h2 id="clinical-services-title">Six services.<br /> One structured workflow.</h2></div>
        <p>Intake, assessment, documentation and billing work the same way for every service.</p>
      </ScrollFade>
      <div className={styles.serviceGrid}>
        {services.map((service, index) => <ScrollFade as="article" className={`${styles.serviceCard} ${styles[service.tone]}`} delay={index * 60} responsiveDelay key={service.title}>
          <div className={styles.serviceTop}><span>{String(index + 1).padStart(2, "0")}{service.badge && ` · ${service.badge}`}</span><span className={styles.serviceArrow}><Arrow /></span></div>
          <div className={styles.serviceBottom}><Image src={a(service.icon)} alt="" width={48} height={48} /><h3>{service.title}</h3></div>
        </ScrollFade>)}
      </div>
    </div>
  </section>;
}

function MinorAilments() {
  return <section className={styles.minor} aria-labelledby="minor-title">
    <Image className={styles.minorWave} src={a("minor-wave.svg")} alt="" width={1440} height={395} />
    <div className={styles.minorInner}>
      <ScrollFade as="div" className={styles.splitHeading}>
        <div><p className={styles.eyebrow}>Minor Ailments</p><h2 id="minor-title">28 conditions,<br /> one consistent assessment.</h2></div>
        <p>Screening follows your province&apos;s list. Red flags, outcome, prescription and physician notification sit on one record.</p>
      </ScrollFade>
      <div className={styles.minorBody}>
        <ScrollFade as="div" className={styles.minorPhoto}><Image src={a("minor-editorial.png")} alt="Medication and a glass of water during a clinical consultation" fill sizes="(max-width: 760px) 100vw, 444px" /></ScrollFade>
        <ScrollFade as="div" className={styles.conditionArea} delay={60} responsiveDelay>
          <div className={styles.conditionGrid}>{conditions.map((condition) => <div className={styles.condition} key={condition.title}>
            <span className={styles.conditionIcon}><Image src={a(condition.icon)} alt="" width={34} height={34} /></span><span>{condition.title}</span>
          </div>)}</div>
          <a data-cta className={styles.seeAll} href="/products/clinical/minor-ailments"><Arrow />See all</a>
        </ScrollFade>
      </div>
    </div>
  </section>;
}

function MoreServices() {
  return <section className={styles.moreServices} aria-labelledby="more-services-title">
    <div className={styles.sectionInner}>
      <ScrollFade as="div">
        <p className={styles.eyebrow}>More Clinical Services</p>
        <h2 id="more-services-title">One system. More services.</h2>
      </ScrollFade>
      <div className={styles.moreCards}>
        <ScrollFade as="article" className={styles.vaccinationCard}>
          <Image className={styles.vaccinationEllipse} src={a("vaccination-ellipse.svg")} alt="" width={612} height={612} />
          <h3>Vaccinations</h3><p>Flu, COVID-19 and other vaccines, with Quick Complete for public immunization and automatic dose reminders.</p>
          <div className={styles.vaccinePills}>
            <span><i><Image src={a("vaccine-covid.svg")} alt="" width={24} height={24} /></i>COVID-19 Vaccine<Arrow tone="dark" /></span>
            <span><i><Image src={a("vaccine-syringe.svg")} alt="" width={24} height={24} /></i>Flu Vaccine<Arrow tone="dark" /></span>
            <span><i><Image src={a("vaccine-syringe.svg")} alt="" width={24} height={24} /></i>Other Vaccines<Arrow tone="dark" /></span>
          </div>
          <Image className={styles.vaccinationPerson} src={a("vaccination-pharmacist.png")} alt="Pharmacist working on a laptop" width={310} height={413} />
        </ScrollFade>
        <ScrollFade as="article" className={styles.prescriptionCard} delay={60} responsiveDelay>
          <h3>Prescriptions</h3><p>New, refill, renewal and transfer requests in one queue.</p>
          <div className={styles.prescriptionList}>{prescriptions.map((item) => <div className={styles.prescriptionRow} key={item.title}>
            <span className={styles.prescriptionIcon}><Image src={a(item.icon)} alt="" width={18} height={18} /></span><strong>{item.title}</strong><Arrow tone="dark" /><small>{item.detail}</small>
          </div>)}</div>
        </ScrollFade>
      </div>
      <ScrollFade as="article" className={styles.bookingCard}>
        <Image className={styles.bookingWave} src={a("booking-wave.svg")} alt="" width={684} height={246} />
        <h3>Appointments</h3>
        <p>Walk-ins, scheduled visits, waitlists and group bookings on one calendar.</p>
        <div className={styles.bookingFeatures}>{bookingFeatures.map((item, index) => <span className={index === 0 ? styles.bookingActive : ""} key={item.title}>
          <i><Image src={a(item.icon)} alt="" width={18} height={18} /></i>{item.title}
        </span>)}</div>
      </ScrollFade>
    </div>
  </section>;
}

function ClinicalWorkflow() {
  return <section className={styles.workflow} aria-labelledby="workflow-title">
    <div className={styles.workflowPatterns} aria-hidden="true">
      <Image className={styles.workflowLines} src={a("workflow-lines.svg")} alt="" width={939.707} height={757.707} />
      <Image className={styles.workflowBottomLines} src={a("workflow-lines.svg")} alt="" width={939.707} height={757.707} />
    </div>
    <div className={styles.workflowInner}>
      <ScrollFade as="div" className={styles.workflowCopy}>
        <p className={styles.eyebrow}>Clinical Workflow</p>
        <h2 id="workflow-title">Risk shown at the<br /> point of decision.</h2>
        <p className={styles.workflowDescription}>Questionnaires, health flags and province-specific logic work together so each consultation moves forward with context.</p>
        <div className={styles.workflowFeatures}>{workflowFeatures.map((item) => <div className={styles.featureRow} key={item.title}>
          <span className={styles.featureIcon}><Image src={a(item.icon)} alt="" width={39} height={39} /></span>
          <span><strong>{item.title}</strong><small>{item.description}</small></span>
        </div>)}</div>
      </ScrollFade>
      <RevealSequence as="div" className={styles.workflowArt} duration={500}>
        <div className={styles.workflowForm} data-reveal="fade"><ClinicalProfilePreview /></div>
        <div className={styles.redFlag} data-reveal="fade">
          <div className={styles.redFlagContent}>
            <div className={styles.redFlagHeading}><Image src={a("workflow-ui-shield.svg")} alt="" width={24} height={24} /><strong>Red flag identified</strong></div>
            <p>The next question adapts automatically.</p>
          </div>
        </div>
      </RevealSequence>
    </div>
  </section>;
}

function AfterAssessment() {
  return <section className={styles.afterAssessment} aria-labelledby="after-assessment-title">
    <div className={styles.sectionInner}>
      <ScrollFade as="div">
        <p className={styles.eyebrow}>After the Assessment</p>
        <h2 id="after-assessment-title">Documents and fax,<br /> done before the patient leaves.</h2>
      </ScrollFade>
      <div className={styles.assessmentCards}>
        <ScrollFade as="article" className={styles.patientCard}>
          <h3>Patient Management</h3><p>Family physician on file, visit history and dose reminders on one record.</p>
          <ul>{patientFeatures.map((item) => <li key={item.title}><i><Image src={a(item.icon)} alt="" width={17} height={17} /></i>{item.title}</li>)}</ul>
          <Image className={styles.remindersImage} src={a("patient-reminders.svg")} alt="Dose reminders for two patients" width={579} height={404} />
        </ScrollFade>
        <ScrollFade as="article" className={styles.documentationCard} delay={60} responsiveDelay>
          <h3>Documentation</h3><p>Prescription, assessment and physician notification PDFs, generated from the visit and faxed with status tracking.</p>
          <div className={styles.documentFeatures}>{documentFeatures.map((item) => <div key={item.title}><i><Image src={a(item.icon)} alt="" width={17} height={17} /></i><strong>{item.title}</strong></div>)}</div>
          <div className={styles.flowPreview}><ClinicalFlowPreview /></div>
        </ScrollFade>
      </div>
    </div>
  </section>;
}

function FollowUp() {
  return <section className={styles.followup} aria-labelledby="followup-title">
    <div className={styles.followupInner}>
      <RevealSequence as="div" className={styles.followupVisual} duration={500}><div className={styles.followupPreview} data-reveal="fade"><ClinicalFollowupPreview /></div></RevealSequence>
      <ScrollFade as="div" className={styles.followupCopy} delay={60} responsiveDelay>
        <p className={styles.eyebrow}>Clinical Follow-up</p>
        <h2 id="followup-title">Follow-up by exception.</h2>
        <p className={styles.followupDescription}>Follow-ups go out and retry on their own, all automatically. Only the cases that need a pharmacist are flagged.</p>
        <div className={styles.followupFeatures}>{followupFeatures.map((item) => <div className={styles.featureRow} key={item.title}>
          <span className={styles.featureIcon}><Image src={a(item.icon)} alt="" width={39} height={39} /></span>
          <span><strong>{item.title}</strong><small>{item.description}</small></span>
        </div>)}</div>
      </ScrollFade>
    </div>
  </section>;
}

function ConnectedWorkflow() {
  return <section className={styles.connected} aria-labelledby="connected-title">
    <Image className={styles.connectedWave} src={a("connected-wave.svg")} alt="" width={745} height={525} />
    <div className={styles.sectionInner}>
      <ScrollFade as="div">
        <p className={styles.eyebrow}>One Connected Clinical Workflow</p>
        <h2 id="connected-title">Booking, intake, assessment,<br /> documentation, communication and<br /> follow-up on one record.</h2>
      </ScrollFade>
      <div className={styles.connectedSteps}>{connectedSteps.map((step, index) => <ScrollFade as="div" className={styles.stepWrap} delay={index * 60} responsiveDelay key={step.title}>
        <div className={`${styles.connectedStep} ${styles[`step${index + 1}`]}`}><i><Image src={a(step.icon)} alt="" width={22} height={22} /></i><strong>{step.title}</strong></div>
        {index < connectedSteps.length - 1 && <Image className={styles.stepArrow} src="/assets/zeenovo-nav-arrow-primary.svg" alt="" aria-hidden="true" width={20} height={20} />}
      </ScrollFade>)}</div>
    </div>
  </section>;
}

// Area summaries, value first and two lines long like the Assure list. The areas and their feature ids stay in
// featureSections.ts.
const tabText: Record<string, string> = {
  Assessment: "Screening that adapts to every answer, the patient's sex and your province's list of conditions.",
  Safety: "Red flags, health flags and referral criteria, shown at the moment the pharmacist decides.",
  Prescribing: "Saved directions for each condition. The pharmacist confirms or changes every one.",
  Scheduling: "Walk-ins, booked visits, waitlists and group bookings on one calendar, with holidays blocked out.",
  Bookings: "Choose which services patients can book online, and see where each booking came from.",
  "Follow-up": "Follow-ups and dose reminders go out automatically. Only flagged answers reach a pharmacist.",
  "Patient record": "Family physician, preferences and visit history, captured once and reused at every visit.",
  Documentation: "Prescription, assessment and physician notification PDFs, written as the visit happens.",
  "Revenue and billing": "The billing PIN on every visit, and estimated revenue by service and by pharmacist.",
  Team: "Unlimited users, each with their own login and role permissions, set up in a day.",
};

// Catalogue lines that the rewrite corrects (no suggested treatment; renewal, not repeat).
const rewriteWording: Record<string, string> = {
  medicineSig: "Pick the medicine and directions from your pharmacy's saved presets. You confirm or change every step.",
  rxRequests: "New, refill, renewal and transfer requests arrive in one queue, each with a clear status.",
  customDrug: "Choose any medicine and directions when your saved presets don't fit the patient.",
};

const allFeatures: Block = {
  ...clinicalFeatures,
  side: "Ten areas of clinical work. Each one opens to show the features behind it.",
  groups: clinicalFeatures.groups.map((group) => ({ ...group, text: tabText[group.title] ?? group.text })),
  split: true,
  wording: { ...clinicalFeatures.wording, ...rewriteWording },
};

const beyondTheCounter: Block = {
  type: "callout",
  eyebrow: "Coming soon",
  title: "The paperwork beyond / the counter.",
  text: "Daily operational records that sit outside the clinical visit, signed and kept in ZeeNovo.",
  chips: ["Fridge temperature log", "OAT dosing roster", "Compliance pack schedules", "Narcotic destruction, loss and theft forms"],
  tone: "lavender",
  action: { label: "See the Roadmap", href: "/resources/roadmap" },
};

const limitsAndQuestions: Block[] = [
  { type: "cards", eyebrow: "What it does not do", title: "Clear limits.", items: [
    { title: "No Diagnosis or Prescribing", text: "It doesn't diagnose, prescribe or recommend treatment. The pharmacist decides.", icon: "pharmacist" },
    { title: "No Claim Submission", text: "It doesn't submit claims to OHIP, ODB or other payers.", icon: "revenue" },
    { title: "No Live PMS Connection", text: "It doesn't connect live to your pharmacy management system.", icon: "noIt" },
    { title: "No Immunization Reporting", text: "It doesn't report immunizations to Panorama or COVaxON.", icon: "vaccination" },
  ] },
  { type: "faq", eyebrow: "FAQ", title: "Common questions.", items: [
    { q: "Who makes the clinical decision?", a: "The pharmacist, always. ZeeNovo guides the screening, shows the information you need and records your decision. It doesn't diagnose or prescribe." },
    { q: "Can walk-ins and booked visits share the calendar?", a: "Yes. Walk-ins join the same queue as online bookings." },
    { q: "Does ZeeNovo submit claims to OHIP or ODB?", a: "No. ZeeNovo shows the correct billing PIN for each visit, and you submit the claim through your pharmacy system." },
    { q: "Does it connect to Kroll or our pharmacy system?", a: "ZeeNovo isn't connected to your pharmacy management system. For medication reviews, you can import a Kroll medication history PDF (early access)." },
    { q: "How do patients get follow-up questions?", a: "By secure email link. SMS is used only for sign-in codes and appointment status." },
    { q: "Is ZeeNovo available in French?", a: "The interface is in English today." },
  ] },
];

export default function ClinicalPage() {
  return <main className={styles.page}>
    <Hero />
    <ClinicalServices />
    <MinorAilments />
    <MoreServices />
    <ClinicalWorkflow />
    <AfterAssessment />
    <FollowUp />
    <ConnectedWorkflow />
    {/* The Clinical page's own sections sit on a 56px edge; align the feature sections to it. */}
    <div style={{ "--block-gutter": "56px" } as React.CSSProperties}><BlockList blocks={[allFeatures, beyondTheCounter, ...limitsAndQuestions]} /></div>
    <div className={styles.ctaWrap}><FinalCta animated id="clinical-cta" variant="clinical" eyebrow="Built for clinical care" heading={<>Deliver more clinical services<br />without adding admin.</>} actionLabel="Book a Clinical Demo" actionHref="/book-a-demo" /></div>
  </main>;
}
