import type { Metadata } from "next";
import Image from "next/image";
import FinalCta from "@/components/FinalCta";
import ScrollFade from "@/components/ScrollFade";
import RevealSequence from "@/components/RevealSequence";
import { ClinicalHeroFlags, ClinicalHeroTimer } from "@/components/ClinicalHeroVisuals";
import ClinicalProfilePreview from "@/components/ClinicalProfilePreview";
import styles from "./page.module.css";

const a = (name: string) => `/assets/clinical/${name}`;

export const metadata: Metadata = {
  title: "ZeeNovo Clinical | Clinical tools for modern pharmacies",
  description: "Guided clinical services, patient management, documentation and follow-up in one connected pharmacy workflow.",
};

const services = [
  { title: "Minor Ailments", icon: "service-minor.svg", tone: "purple" },
  { title: "Vaccinations", icon: "service-vaccination.svg", tone: "lavender" },
  { title: "Medicine Injections", icon: "service-injection.svg", tone: "peach" },
  { title: "Prescriptions", icon: "service-prescription.svg", tone: "aqua" },
  { title: "Medication Review.", icon: "service-review.svg", tone: "purple" },
  { title: "Point of Care testing.", icon: "service-testing.svg", tone: "peach" },
] as const;

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
  { title: "Repeat Prescription", detail: "Open workflow", icon: "prescription-repeat.svg" },
  { title: "Transfer Prescription", detail: "Open workflow", icon: "prescription-transfer.svg" },
] as const;

const bookingFeatures = [
  { title: "Walk-in Patient Intake", icon: "booking-intake.svg" },
  { title: "Customizable Calendar", icon: "booking-calendar.svg" },
  { title: "Waitlist", icon: "booking-waitlist.svg" },
  { title: "Group Bookings", icon: "booking-group.svg" },
] as const;

const workflowFeatures = [
  { title: "Adaptive assessment", description: "Assessment questionnaires, Province-specific logic.", icon: "workflow-assessment.svg" },
  { title: "Clinical safeguards", description: "Patient health flags, Red flag identification.", icon: "workflow-safeguards.svg" },
  { title: "Guided next steps", description: "Smart clinical questions, Guided treatment paths.", icon: "workflow-steps.svg" },
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
  { title: "Track patient progress", description: "See follow-up status and treatment outcomes at a glance.", icon: "followup-progress.svg" },
  { title: "Record outcomes", description: "Log recovery, persistent symptoms and other treatment results.", icon: "followup-outcomes.svg" },
  { title: "Plan the next step", description: "Schedule follow-ups and keep ongoing care organised.", icon: "followup-plan.svg" },
] as const;

const connectedSteps = [
  { title: "Booking", icon: "connected-booking.svg" },
  { title: "Intake", icon: "connected-intake.svg" },
  { title: "Assessment", icon: "connected-assessment.svg" },
  { title: "Documentation", icon: "connected-documentation.svg" },
  { title: "Communication", icon: "connected-communication.svg" },
  { title: "Follow-up", icon: "connected-followup.svg" },
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
      <h1 className={styles.heroEnter} id="clinical-title">Innovative solutions<br /> for modern pharmacies.</h1>
      <p className={`${styles.heroEnter} ${styles.heroDescription}`}>Clinical tools designed to help pharmacy teams deliver services more efficiently.</p>
      <div className={`${styles.heroActions} ${styles.heroEnter}`}>
        <a data-cta className={styles.primaryButton} href="#clinical-services"><Arrow tone="white" />Get Started</a>
        <a data-cta className={styles.outlineButton} href="#clinical-cta"><Arrow />Book a Demo</a>
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
        <div><p className={styles.eyebrow}>Clinical Services</p><h2 id="clinical-services-title">Four ways to extend clinical care.</h2></div>
        <p>Choose a service, then move through one consistent intake, assessment and documentation flow.</p>
      </ScrollFade>
      <div className={styles.serviceGrid}>
        {services.map((service, index) => <ScrollFade as="article" className={`${styles.serviceCard} ${styles[service.tone]}`} delay={index * 60} responsiveDelay key={service.title}>
          <div className={styles.serviceTop}><span>{String(index + 1).padStart(2, "0")}</span><span className={styles.serviceArrow}><Arrow /></span></div>
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
        <div><p className={styles.eyebrow}>Minor Ailments</p><h2 id="minor-title">Structured consultations,<br /> without the clinical guesswork.</h2></div>
        <p>Support common, province-backed conditions through a guided flow that keeps questions, red flags and treatment paths connected.</p>
      </ScrollFade>
      <div className={styles.minorBody}>
        <ScrollFade as="div" className={styles.minorPhoto}><Image src={a("minor-editorial.png")} alt="Medication and a glass of water during a clinical consultation" fill sizes="(max-width: 760px) 100vw, 444px" /></ScrollFade>
        <ScrollFade as="div" className={styles.conditionArea} delay={60} responsiveDelay>
          <div className={styles.conditionGrid}>{conditions.map((condition) => <div className={styles.condition} key={condition.title}>
            <span className={styles.conditionIcon}><Image src={a(condition.icon)} alt="" width={34} height={34} /></span><span>{condition.title}</span>
          </div>)}</div>
          <a data-cta className={styles.seeAll} href="#clinical-services"><Arrow />See all</a>
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
          <h3>Vaccinations</h3><p>Covid, flu and other vaccine programs.</p>
          <div className={styles.vaccinePills}>
            <span><i><Image src={a("vaccine-covid.svg")} alt="" width={24} height={24} /></i>Covid Vaccine<Arrow tone="dark" /></span>
            <span><i><Image src={a("vaccine-syringe.svg")} alt="" width={24} height={24} /></i>Flu Vaccine<Arrow tone="dark" /></span>
            <span><i><Image src={a("vaccine-syringe.svg")} alt="" width={24} height={24} /></i>Other Vaccines<Arrow tone="dark" /></span>
          </div>
          <Image className={styles.vaccinationPerson} src={a("vaccination-pharmacist.png")} alt="Pharmacist working on a laptop" width={310} height={413} />
        </ScrollFade>
        <ScrollFade as="article" className={styles.prescriptionCard} delay={60} responsiveDelay>
          <h3>Prescriptions</h3><p>Every prescription request enters a clear, trackable path.</p>
          <div className={styles.prescriptionList}>{prescriptions.map((item) => <div className={styles.prescriptionRow} key={item.title}>
            <span className={styles.prescriptionIcon}><Image src={a(item.icon)} alt="" width={18} height={18} /></span><strong>{item.title}</strong><Arrow tone="dark" /><small>{item.detail}</small>
          </div>)}</div>
        </ScrollFade>
      </div>
      <ScrollFade as="article" className={styles.bookingCard}>
        <Image className={styles.bookingWave} src={a("booking-wave.svg")} alt="" width={684} height={246} />
        <h3>Appointment booking that flexes with the day.</h3>
        <p>Walk-ins and scheduled care belong in the same operational view.</p>
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
        <h2 id="workflow-title">Clinical decisions,<br /> made easier to follow.</h2>
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
        <h2 id="after-assessment-title">Keep care moving after the visit.</h2>
      </ScrollFade>
      <div className={styles.assessmentCards}>
        <ScrollFade as="article" className={styles.patientCard}>
          <h3>Patient Management</h3><p>Relationship context and timely follow-up remain part of the same record.</p>
          <ul>{patientFeatures.map((item) => <li key={item.title}><i><Image src={a(item.icon)} alt="" width={17} height={17} /></i>{item.title}</li>)}</ul>
          <Image className={styles.remindersImage} src={a("patient-reminders.svg")} alt="Dose reminders for two patients" width={579} height={404} />
        </ScrollFade>
        <ScrollFade as="article" className={styles.documentationCard} delay={60} responsiveDelay>
          <h3>Documentation</h3><p>Capture the clinical record while the work is happening.</p>
          <div className={styles.documentFeatures}>{documentFeatures.map((item) => <div key={item.title}><i><Image src={a(item.icon)} alt="" width={17} height={17} /></i><strong>{item.title}</strong></div>)}</div>
          <Image className={styles.sopImage} src={a("documentation-sop.svg")} alt="ZeeNovo Assure SOP table" width={549} height={328} />
          <Image className={styles.efaxImage} src={a("documentation-efax-notice.svg")} alt="eFax sent; record updated" width={202} height={86} />
        </ScrollFade>
      </div>
    </div>
  </section>;
}

function FollowUp() {
  return <section className={styles.followup} aria-labelledby="followup-title">
    <div className={styles.followupInner}>
      <RevealSequence as="div" className={styles.followupVisual} duration={500}><Image data-reveal="fade" src={a("followup-panel.svg")} alt="ZeeNovo Clinical follow-up panel showing patient progress and outcomes" width={622} height={421} /></RevealSequence>
      <ScrollFade as="div" className={styles.followupCopy} delay={60} responsiveDelay>
        <p className={styles.eyebrow}>Clinical Follow-up</p>
        <h2 id="followup-title">Follow-up care,<br /> without losing context.</h2>
        <p className={styles.followupDescription}>Track patient progress, record treatment outcomes and schedule the next step from one clear workflow.</p>
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
        <h2 id="connected-title">Bring booking, intake, assessment,<br /> documentation, communication and<br /> follow-up together.</h2>
      </ScrollFade>
      <div className={styles.connectedSteps}>{connectedSteps.map((step, index) => <ScrollFade as="div" className={styles.stepWrap} delay={index * 60} responsiveDelay key={step.title}>
        <div className={`${styles.connectedStep} ${styles[`step${index + 1}`]}`}><i><Image src={a(step.icon)} alt="" width={22} height={22} /></i><strong>{step.title}</strong></div>
        {index < connectedSteps.length - 1 && <Image className={styles.stepArrow} src="/assets/zeenovo-nav-arrow-primary.svg" alt="" aria-hidden="true" width={20} height={20} />}
      </ScrollFade>)}</div>
    </div>
  </section>;
}

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
    <div className={styles.ctaWrap}><FinalCta animated id="clinical-cta" variant="clinical" eyebrow="Built for clinical care" heading={<>Deliver more clinical services<br />with less administrative work.</>} actionLabel="Book a Demo" actionHref="/book-a-demo" /></div>
  </main>;
}
