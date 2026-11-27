import { shareMeta } from "@/lib/metadata";
import type { Metadata } from "next";
import { BlockList } from "@/components/blocks/BlockPage";
import type { Block } from "@/components/blocks/types";
import { incidentReportingFeatures } from "@/content/featureSections";
import Image from "next/image";
import Link from "next/link";
import { asset } from "@/lib/assets";
import styles from "./page.module.css";
import IncidentAnalyticsPanels from "./IncidentAnalyticsPanels";
import AfterVisitPanels from "./AfterVisitPanels";
import IncidentDashboard from "./IncidentDashboard";
import Icon from "@/components/Icon";

const pageAsset = asset.incidentReporting;

export const metadata: Metadata = shareMeta({
  title: "Medication incident and near-miss reporting | ZeeNovo Assure",
  description:
    "Guided incident and near-miss reporting with contributing factors, corrective actions and CQI links. Trends ready for your next meeting.",
});

// The bento keeps its features from featureSections.ts. Its eyebrow differs from the "Beyond the report"
// section above, and its side line carries the national reporting row, which has no card of its own.
const caseFeatures: Block = {
  ...incidentReportingFeatures,
  eyebrow: "Case management",
  side: "Each incident is analysed, assigned and closed in the same place.",
};

function Arrow() {
  return <span data-cta-icon aria-hidden="true"><Icon /></span>;
}

function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="incident-title">
      <div className={styles.heroBackdrop}>
        <Image className={styles.heroArt} src={pageAsset.heroArt} alt="" fill sizes="(max-width: 760px) 100vw, 1406px" priority />
      </div>
      <div className={styles.heroCopy}>
        <span className="tag hero-pill"><span aria-hidden="true">★</span>ZeeNovo Assure</span>
        <h1 id="incident-title">Record the<br />close call.<br />Follow it through<br />to the fix.</h1>
        <p className={styles.heroDescription}>Guided incident and near-miss reporting, with the learning, the corrective action and the CQI follow-up on one record.</p>
        <div className={styles.heroActions}>
          <Link data-cta className={styles.primaryButton} href="/book-a-demo"><Arrow />Book an Assure Demo</Link>
          <Link data-cta className={styles.secondaryButton} href="https://auth.zeenovo.com/signup"><Arrow />Start Free Trial</Link>
        </div>
      </div>
      <div className={styles.heroDashboardShell}>
        <IncidentDashboard />
      </div>
    </section>
  );
}

function Analytics() {
  return (
    <section className={styles.analytics} aria-labelledby="analytics-title">
      <div className={styles.splitHeading}>
        <div><p>Analytics</p><h2 id="analytics-title">Four views your CQI<br />meeting needs.</h2></div>
        <span>Every report reaches the dashboard when it is submitted. No spreadsheet in between.</span>
      </div>
      <IncidentAnalyticsPanels />
    </section>
  );
}

function Compliance() {
  return (
    <section className={styles.compliance} aria-labelledby="compliance-title">
      <div className={styles.splitHeading}>
        <div><p>What you can see</p><h2 id="compliance-title">Find where the<br />process breaks down.</h2></div>
        <span>Filter incidents by degree of harm, contributing factor, medication, process stage and discovery.</span>
      </div>
      <div className={styles.complianceBody}>
        <Image src={pageAsset.complianceList} alt="Incident reporting analytics categories" width={637} height={483} />
        <Image src={pageAsset.complianceVisual} alt="Pharmacy care team" width={611} height={544} />
      </div>
    </section>
  );
}

function AfterVisit() {
  return (
    <section className={styles.afterVisit} aria-labelledby="after-visit-title">
      <div className={styles.sectionHeading}><p>Beyond the report</p><h2 id="after-visit-title">Evidence ready for<br />the CQI meeting.</h2></div>
      <AfterVisitPanels />
    </section>
  );
}

// The four steps on the site's four-loop wave (the same strip as the Assure overview): one icon in each loop, no motion
// on the icons.
const processWave: Block = {
  type: "wave",
  tag: "From data to decision",
  title: "Capture, learn, act, review.",
  description: "Each incident follows the same four steps, from the first report to the change that prevents a repeat.",
  items: [
    { label: "Capture", icon: "collect" },
    { label: "Learn", icon: "detect" },
    { label: "Act", icon: "act" },
    { label: "Review", icon: "chartStar" },
  ],
};

const nationalReporting: Block = {
  type: "callout",
  eyebrow: "National reporting",
  title: "Submitted to ISMP Canada, / with no extra data entry.",
  text: "Incident data from ZeeNovo Assure goes to ISMP Canada's National Incident Data Repository (NIDR), so your pharmacy contributes to national medication safety learning.",
  tone: "mint",
  action: { label: "Learn About NIDR", href: "https://ismpcanada.ca/resource/nidr/" },
};

// Closing call to action: the site's shared CTA block, like every other page.
const closingCta: Block = { type: "cta", eyebrow: "Built for pharmacy safety", title: "Report in minutes. / Improve every month.", action: { label: "Book an Assure Demo", href: "/book-a-demo" } };

export default function IncidentReportingPage() {
  return <main className={styles.page}><Hero /><Analytics /><Compliance /><AfterVisit /><div style={{ "--block-gutter": "60px" } as React.CSSProperties}><BlockList blocks={[processWave, caseFeatures, nationalReporting, closingCta]} /></div></main>;
}
