import type { Metadata } from "next";
import Image from "next/image";
import styles from "./page.module.css";

const asset = (name: string) => `/assets/minor-ailments/${name}`;

export const metadata: Metadata = {
  title: "Minor Ailments | ZeeNovo Clinical",
  description: "Guided minor ailments consultations with connected intake, safety checks, treatment, documentation and follow-up.",
};

const capabilities = [
  { number: "01", title: "Intake", description: "Ask the next useful question.", icon: "icon-intake.svg", tone: "intake" },
  { number: "02", title: "Safety", description: "Surface red flags in context.", icon: "icon-safety.svg", tone: "safety" },
  { number: "03", title: "Treatment", description: "Compare medicine and self-care paths.", icon: "icon-treatment.svg", tone: "treatment" },
  { number: "04", title: "Record", description: "Write the outcome as care happens.", icon: "icon-record.svg", tone: "record" },
] as const;

const conditionGroups = [
  {
    title: "Skin & Dermatology",
    items: [
      ["Acne", "condition-acne.svg"],
      ["Contact dermatitis", "condition-contact.svg"],
      ["Diaper rash", "condition-diaper.svg"],
      ["Dandruff", "condition-dandruff.svg"],
      ["Minor skin infections", "condition-infection.svg"],
      ["Eczema", "condition-eczema.svg"],
      ["Ringworm", "condition-ringworm.svg"],
      ["Skin conditions", "condition-skin.svg"],
    ],
  },
  {
    title: "Infections & Parasitic",
    items: [
      ["Cold sores", "condition-cold-sores.svg"],
      ["Shingles (mild)", "condition-shingles.svg"],
      ["Insect bites", "condition-insect-bites.svg"],
      ["Impetigo", "condition-impetigo.svg"],
      ["Scabies", "condition-scabies.svg"],
      ["Pinworms", "condition-pinworms.svg"],
    ],
  },
  {
    title: "Digestive & GI",
    items: [
      ["Gastroesophageal reflux", "condition-reflux.svg"],
      ["Heartburn", "condition-heartburn.svg"],
      ["Hemorrhoids", "condition-hemorrhoids.svg"],
      ["Oral aphthous ulcers", "condition-oral-ulcers.svg"],
      ["Nausea & vomiting", "condition-nausea.svg"],
    ],
  },
  {
    title: "Pain & Musculoskeletal",
    items: [
      ["Minor musculoskeletal pain", "condition-musculoskeletal.svg"],
      ["Menstrual cramps", "condition-cramps.svg"],
      ["Headache", "condition-headache.svg"],
    ],
  },
  {
    title: "Respiratory & ENT",
    items: [
      ["Allergic rhinitis", "condition-rhinitis.svg"],
      ["Sinusitis (mild)", "condition-sinusitis.svg"],
      ["Conjunctivitis", "condition-conjunctivitis.svg"],
    ],
  },
  {
    title: "Women's & Urinary",
    items: [
      ["UTIs (uncomplicated)", "condition-uti.svg"],
      ["Vaginal candidiasis", "condition-candidiasis.svg"],
    ],
  },
  {
    title: "Oral Health",
    items: [["Oral candidiasis", "condition-oral-candidiasis.svg"]],
  },
] as const;

const assessmentFeatures = [
  { icon: "icon-province.svg", title: "Province-backed logic", description: "Assessment adapts to the service and province." },
  { icon: "icon-red-flag.svg", title: "Red flags in context", description: "Referral criteria appear where the decision is made." },
  { icon: "icon-pharmacist.svg", title: "Pharmacist controlled", description: "Recommendations support judgement, they do not replace it." },
] as const;

const trustSteps = [
  ["Booking & intake", "trust-step-1.svg"],
  ["Assessment", "trust-step-2.svg"],
  ["Documentation", "trust-step-3.svg"],
  ["Communication", "trust-step-4.svg"],
  ["Follow-up", "trust-step-5.svg"],
] as const;

function Hero() {
  return <section className={styles.hero} aria-labelledby="minor-title">
    <Image className={styles.heroPattern} src={asset("hero-pattern.svg")} alt="" width={1356} height={819} priority />
    <Image className={styles.heroEllipse} src={asset("hero-ellipse.svg")} alt="" width={619} height={619} />
    <Image className={styles.heroSmallEllipse} src={asset("hero-small-ellipse.svg")} alt="" width={87} height={87} />
    <div className={styles.heroCopy}>
      <p className={styles.heroEyebrow}>ZeeNovo Assure</p>
      <h1 id="minor-title">Structured consultations,<br /> without the clinical guesswork.</h1>
      <p className={styles.heroDescription}>Province-backed minor ailments workflows that keep intake, red flags, treatment and documentation connected.</p>
      <a className={styles.heroButton} href="#minor-capabilities">
        <Image src="/assets/zeenovo-nav-arrow-primary.svg" alt="" width={24} height={24} />Get Started
      </a>
    </div>
    <Image className={styles.heroWoman} src={asset("hero-woman.png")} alt="Pharmacist reviewing a clinical consultation" width={401} height={500} priority />
    <Image className={styles.heroAssessment} src={asset("hero-assessment.svg")} alt="Live assessment for allergic rhinitis" width={286} height={180} />
    <Image className={styles.heroRecord} src={asset("hero-record.svg")} alt="Clinical record ready" width={238} height={91} />
  </section>;
}

function Capabilities() {
  return <section className={styles.capabilities} id="minor-capabilities" aria-labelledby="capabilities-title">
    <div className={styles.sectionInner}>
      <div className={styles.sectionHeading}>
        <div><p className={styles.eyebrow}>Minor Ailments</p><h2 id="capabilities-title">One guided consultation.<br />Four jobs handled.</h2></div>
        <p>The workflow supports the pharmacist without taking the clinical decision away.</p>
      </div>
      <div className={styles.capabilityGrid}>{capabilities.map(item => <article className={`${styles.capabilityCard} ${styles[item.tone]}`} key={item.title}>
        <span className={styles.capabilityNumber}>{item.number}</span>
        <Image src={asset(item.icon)} alt="" width={64} height={64} />
        <div><h3>{item.title}</h3><p>{item.description}</p></div>
      </article>)}</div>
    </div>
  </section>;
}

function ConditionCard({ group, wide = false }: { group: typeof conditionGroups[number]; wide?: boolean }) {
  return <article className={`${styles.conditionCard} ${wide ? styles.conditionCardWide : ""}`}>
    <h3>{group.title}</h3>
    <ul>{group.items.map(([name, icon]) => <li key={name}><span className={styles.conditionIcon}><Image src={asset(icon)} alt="" width={34} height={34} /></span><span>{name}</span></li>)}</ul>
  </article>;
}

function Conditions() {
  return <section className={styles.conditions} aria-labelledby="conditions-title">
    <div className={styles.conditionsInner}>
      <div className={styles.conditionHeading}>
        <div><p className={styles.mutedEyebrow}>Supported Conditions</p><h2 id="conditions-title">Twenty-eight ailments,<br />one consistent way of working.</h2></div>
        <p>Support common, province-backed conditions through a guided flow that keeps questions, red flags and treatment paths connected.</p>
      </div>
      <div className={styles.conditionsGrid}>{conditionGroups.map((group, index) => <ConditionCard key={group.title} group={group} wide={index === 0} />)}</div>
    </div>
  </section>;
}

function GuidedAssessment() {
  return <section className={styles.assessment} aria-labelledby="assessment-title">
    <div className={styles.assessmentInner}>
      <div className={styles.assessmentCopy}>
        <p className={styles.eyebrow}>Guided Assessment</p>
        <h2 id="assessment-title">The right question,<br />at the right point.</h2>
        <p className={styles.assessmentDescription}>Patient details, screening, safety checks and treatment stay in one clinical path.</p>
        <div className={styles.assessmentFeatures}>{assessmentFeatures.map(item => <div className={styles.assessmentFeature} key={item.title}>
          <span><Image src={asset(item.icon)} alt="" width={39} height={39} /></span>
          <div><h3>{item.title}</h3><p>{item.description}</p></div>
        </div>)}</div>
      </div>
      <div className={styles.assessmentArt}>
        <Image className={styles.assessmentPattern} src={asset("assessment-pattern.svg")} alt="" width={939} height={757} />
        <Image className={styles.assessmentPanel} src={asset("assessment-panel.svg")} alt="Guided minor ailments safety check with red flag questions" width={600} height={600} />
      </div>
    </div>
  </section>;
}

function ConnectedCare() {
  return <section className={styles.connectedCare} aria-labelledby="connected-care-title">
    <div className={styles.connectedHeading}>
      <p className={styles.trustTag}><Image src={asset("trust-star.svg")} alt="" width={20} height={20} />You can trust us</p>
      <h2 id="connected-care-title">Your pharmacy is in good hands.</h2>
      <p>Support common, province-backed conditions through a guided flow that keeps questions, red flags and treatment paths connected.</p>
    </div>
    <div className={styles.trustJourney}>
      <Image className={styles.trustWave} src={asset("trust-wave.svg")} alt="" width={1440} height={181} />
      <div className={styles.trustStepGrid}>{trustSteps.map(([label, icon]) => <div className={styles.trustStep} key={label}>
        <Image src={asset(icon)} alt="" width={40} height={42} /><span>{label}</span>
      </div>)}</div>
    </div>
  </section>;
}

function AfterVisit() {
  return <section className={styles.afterVisit} aria-labelledby="after-visit-title">
    <div className={styles.sectionInner}>
      <div className={styles.sectionHeading}>
        <div><p className={styles.eyebrow}>After the Visit</p><h2 id="after-visit-title">Care continues without<br />creating another queue.</h2></div>
        <p>Physician communication and follow-up are prepared from the same consultation record.</p>
      </div>
      <div className={styles.afterVisitCards}>
        <Image src={asset("physician-card.svg")} alt="Physician handoff with matched details and eFax status" width={636} height={584} />
        <Image src={asset("followup-card.svg")} alt="Follow-up timeline with visit completion, patient check-in and pharmacist review" width={636} height={584} />
      </div>
    </div>
  </section>;
}

export default function MinorAilmentsPage() {
  return <main className={styles.page}>
    <Hero />
    <Capabilities />
    <Conditions />
    <GuidedAssessment />
    <ConnectedCare />
    <AfterVisit />
  </main>;
}
