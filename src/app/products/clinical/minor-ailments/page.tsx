import { shareMeta } from "@/lib/metadata";
import type { Metadata } from "next";
import { BlockList } from "@/components/blocks/BlockPage";
import type { Block } from "@/components/blocks/types";
import { minorAilmentsFeatures } from "@/content/featureSections";
import Image from "next/image";
import ScrollFade from "@/components/ScrollFade";
import { MinorHeroAssessment, MinorHeroRecord, MinorPhysicianHandoff, MinorFollowup } from "@/components/MinorAilmentsUi";
import MinorScreeningPreview from "@/components/MinorScreeningPreview";
import styles from "./page.module.css";

const asset = (name: string) => `/assets/minor-ailments/${name}`;

export const metadata: Metadata = shareMeta({
  title: "Minor ailments software for pharmacists | ZeeNovo",
  description: "Guided minor ailment assessments with red flags, stop criteria, saved directions, prescription PDFs, physician fax and automated follow-up.",
});

const capabilities = [
  { number: "01", title: "Intake", description: "Screening answered at booking or captured at the counter.", icon: "icon-intake.svg", tone: "intake" },
  { number: "02", title: "Safety", description: "Red flags with referral criteria. Stop flags end visits that shouldn't continue.", icon: "icon-safety.svg", tone: "safety" },
  { number: "03", title: "Decision", description: "Prescribed, not prescribed or referred, using your saved directions.", icon: "icon-treatment.svg", tone: "treatment" },
  // The grid is designed for four cards, so Record and Follow up share the last one.
  { number: "04", title: "Record and follow up", description: "PDFs faxed from the visit. Only flagged follow-ups come back.", icon: "icon-record.svg", tone: "record" },
] as const;

const conditionGroups = [
  {
    title: "Skin and dermatology",
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
    title: "Infections and parasitic",
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
    title: "Digestive and GI",
    items: [
      ["Gastroesophageal reflux", "condition-reflux.svg"],
      ["Heartburn", "condition-heartburn.svg"],
      ["Hemorrhoids", "condition-hemorrhoids.svg"],
      ["Oral aphthous ulcers", "condition-oral-ulcers.svg"],
      ["Nausea and vomiting", "condition-nausea.svg"],
    ],
  },
  {
    title: "Pain and musculoskeletal",
    items: [
      ["Minor musculoskeletal pain", "condition-musculoskeletal.svg"],
      ["Menstrual cramps", "condition-cramps.svg"],
      ["Headache", "condition-headache.svg"],
    ],
  },
  {
    title: "Respiratory and ENT",
    items: [
      ["Allergic rhinitis", "condition-rhinitis.svg"],
      ["Sinusitis (mild)", "condition-sinusitis.svg"],
      ["Conjunctivitis", "condition-conjunctivitis.svg"],
    ],
  },
  {
    title: "Women's and urinary health",
    items: [
      ["Uncomplicated urinary tract infections", "condition-uti.svg"],
      ["Vaginal candidiasis", "condition-candidiasis.svg"],
    ],
  },
  {
    title: "Oral health",
    items: [["Oral candidiasis", "condition-oral-candidiasis.svg"]],
  },
] as const;

const assessmentFeatures = [
  { icon: "icon-province.svg", title: "Adaptive questions", description: "Each answer decides the next question." },
  { icon: "icon-red-flag.svg", title: "Red flags in context", description: "Referral criteria appear at the step where you decide." },
  { icon: "icon-pharmacist.svg", title: "Pharmacist controlled", description: "Reference notes support your judgement. They don't replace it." },
] as const;

// One record: the site's shared wave strip (animated line art), like every other page.
const oneRecord: Block = { type: "wave", tag: "One record", title: "Every step on the / same visit record.", description: "Booking, assessment, documentation, physician communication and follow-up share one record. Nothing is entered twice.", items: [
  { label: "Booking & intake", icon: "shield" },
  { label: "Assessment", icon: "calendarStar" },
  { label: "Documentation", icon: "chartStar" },
  { label: "Communication", icon: "grid" },
  { label: "Follow-up", icon: "globe" },
] };

// The prescribing bento keeps its features from featureSections.ts. Its heading follows the copy rewrite:
// the pharmacist picks from saved directions, nothing is suggested.
const prescribingFeatures: Block = {
  ...minorAilmentsFeatures,
  title: "Your directions, / your decision.",
  side: "Saved directions follow the assessment. The pharmacist confirms or changes every one.",
  wording: { ...minorAilmentsFeatures.wording, medicineSig: "Pick the medicine and directions from your pharmacy's saved presets. You confirm or change every step.", customDrug: "Choose any medicine and directions when your saved presets don't fit the patient." },
};

const questions: Block = { type: "faq", eyebrow: "FAQ", title: "Common questions.", items: [
  { q: "Does ZeeNovo tell me what to prescribe?", a: "No. Your pharmacy sets the reference notes and directions, and you choose." },
  { q: "What happens with a red flag?", a: "Referral criteria appear at that step. You can refer at any point, and stop flags end the visit with a reason recorded." },
  { q: "Can a technician start the visit?", a: "Yes. Staff complete intake and mark the visit ready for the pharmacist." },
] };

function Hero() {
  return <section className={styles.hero} aria-labelledby="minor-title">
    <Image className={styles.heroPattern} src={asset("hero-pattern.svg")} alt="" width={1356} height={819} priority />
    <Image className={styles.heroEllipse} src={asset("hero-ellipse.svg")} alt="" width={619} height={619} />
    <Image className={styles.heroSmallEllipse} src={asset("hero-small-ellipse.svg")} alt="" width={87} height={87} />
    <div className={styles.heroCopy}>
      <span className={`tag hero-pill ${styles.heroEnter}`}><span aria-hidden="true">★</span>ZeeNovo Clinical</span>
      <h1 className={`${styles.heroHeading} ${styles.heroEnter}`} id="minor-title">Structured minor ailment visits.<br /> Fully documented.</h1>
      <p className={`${styles.heroDescription} ${styles.heroEnter}`}>Screening that branches on every answer, red flags at the decision point, and a complete record with physician notification before the patient leaves.</p>
      <div className={`${styles.heroActions} ${styles.heroEnter}`}>
        <a data-cta className={styles.heroButton} href="#minor-capabilities">
          <Image data-cta-icon src="/assets/zeenovo-nav-arrow-primary.svg" alt="" width={24} height={24} />See a Minor Ailment Visit
        </a>
        <a data-cta className={`${styles.heroButton} ${styles.heroOutline}`} href="/book-a-demo">
          <Image data-cta-icon src="/assets/zeenovo-nav-arrow-outline.svg" alt="" width={24} height={24} />Book a Demo
        </a>
      </div>
    </div>
    <Image className={styles.heroWoman} src={asset("hero-woman.png")} alt="Pharmacist reviewing a clinical consultation" width={401} height={500} priority />
    <MinorHeroAssessment className={styles.heroAssessment} />
    <MinorHeroRecord className={styles.heroRecord} />
  </section>;
}

function Capabilities() {
  return <section className={styles.capabilities} id="minor-capabilities" aria-labelledby="capabilities-title">
    <div className={styles.sectionInner}>
      <ScrollFade as="div" className={styles.sectionHeading}>
        <div><p className={styles.eyebrow}>Minor Ailments</p><h2 id="capabilities-title">One guided visit.<br />Intake to follow-up.</h2></div>
        <p>The workflow supports the pharmacist without taking the clinical decision away.</p>
      </ScrollFade>
      <div className={styles.capabilityGrid}>{capabilities.map((item, index) => <ScrollFade as="article" className={`${styles.capabilityCard} ${styles[item.tone]}`} delay={index * 60} responsiveDelay key={item.title}>
        <span className={styles.capabilityNumber}>{item.number}</span>
        <Image src={asset(item.icon)} alt="" width={64} height={64} />
        <div><h3>{item.title}</h3><p>{item.description}</p></div>
      </ScrollFade>)}</div>
    </div>
  </section>;
}

function ConditionCard({ group, wide = false, delay = 0 }: { group: typeof conditionGroups[number]; wide?: boolean; delay?: number }) {
  return <ScrollFade as="article" className={`${styles.conditionCard} ${wide ? styles.conditionCardWide : ""}`} delay={delay} responsiveDelay>
    <h3>{group.title}</h3>
    <ul>{group.items.map(([name, icon]) => <li key={name}><span className={styles.conditionIcon}><Image src={asset(icon)} alt="" width={34} height={34} /></span><span>{name}</span></li>)}</ul>
  </ScrollFade>;
}

function Conditions() {
  return <section className={styles.conditions} aria-labelledby="conditions-title">
    <div className={styles.conditionsInner}>
      <ScrollFade as="div" className={styles.conditionHeading}>
        <div><p className={styles.mutedEyebrow}>Supported Conditions</p><h2 id="conditions-title">Twenty-eight ailments,<br />one consistent way of working.</h2></div>
        <p>Each province sets its own list. ZeeNovo shows only the conditions your pharmacists can assess, and you choose which ones patients can book online.</p>
      </ScrollFade>
      <div className={styles.conditionsGrid}>{conditionGroups.map((group, index) => <ConditionCard key={group.title} group={group} wide={index === 0} delay={index === 0 ? 0 : ((index - 1) % 2) * 60} />)}</div>
    </div>
  </section>;
}

function GuidedAssessment() {
  return <section className={styles.assessment} aria-labelledby="assessment-title">
    <div className={styles.assessmentInner}>
      <ScrollFade as="div" className={styles.assessmentCopy}>
        <p className={styles.eyebrow}>Guided Assessment</p>
        <h2 id="assessment-title">The right question,<br />at the right point.</h2>
        <p className={styles.assessmentDescription}>Patient details, screening, safety checks and treatment stay in one clinical path.</p>
        <div className={styles.assessmentFeatures}>{assessmentFeatures.map(item => <div className={styles.assessmentFeature} key={item.title}>
          <span><Image src={asset(item.icon)} alt="" width={39} height={39} /></span>
          <div><h3>{item.title}</h3><p>{item.description}</p></div>
        </div>)}</div>
      </ScrollFade>
      <div className={styles.assessmentArt}>
        <Image className={styles.assessmentPattern} src={asset("assessment-pattern.svg")} alt="" width={939} height={757} />
        <div className={styles.assessmentPanel}><MinorScreeningPreview className={styles.nativeAssessment} /></div>
      </div>
    </div>
  </section>;
}

function AfterVisit() {
  return <section className={styles.afterVisit} aria-labelledby="after-visit-title">
    <div className={styles.sectionInner}>
      <ScrollFade as="div" className={styles.sectionHeading}>
        <div><p className={styles.eyebrow}>After the Visit</p><h2 id="after-visit-title">Follow-up without<br />another call list.</h2></div>
        <p>Physician communication and follow-up are prepared from the same consultation record.</p>
      </ScrollFade>
      <div className={styles.afterVisitCards}>
        <ScrollFade as="article" className={`${styles.afterVisitCard} ${styles.physicianCard}`} aria-labelledby="physician-card-title">
          <p className={styles.eyebrow}>Family Physician</p>
          <h3 id="physician-card-title">Keep the physician in the loop.</h3>
          <p className={styles.afterVisitDescription}>Look up the family physician once and reuse their details for every visit and fax.</p>
          <MinorPhysicianHandoff className={styles.afterVisitIllustration} />
        </ScrollFade>
        <ScrollFade as="article" className={`${styles.afterVisitCard} ${styles.followupCard}`} delay={60} responsiveDelay aria-labelledby="followup-card-title">
          <p className={styles.eyebrow}>Follow-up</p>
          <h3 id="followup-card-title">Only return when care needs you.</h3>
          <p className={styles.afterVisitDescription}>Patients report symptoms, adherence and side effects by secure link. Worse, unchanged or side-effect responses are flagged for a pharmacist. Outcomes are recorded on the original assessment.</p>
          <MinorFollowup className={styles.afterVisitIllustration} />
        </ScrollFade>
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
    <BlockList blocks={[oneRecord]} />
    <AfterVisit />
    <BlockList blocks={[prescribingFeatures, questions]} />
  </main>;
}
