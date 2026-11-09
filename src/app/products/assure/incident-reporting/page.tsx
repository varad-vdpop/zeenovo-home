import type { Metadata } from "next";
import { BlockList } from "@/components/blocks/BlockPage";
import { incidentReportingFeatures } from "@/content/featureSections";
import Image from "next/image";
import Link from "next/link";
import { asset } from "@/lib/assets";
import styles from "./page.module.css";
import IncidentAnalyticsPanels from "./IncidentAnalyticsPanels";
import AfterVisitPanels from "./AfterVisitPanels";
import IncidentDashboard from "./IncidentDashboard";

const pageAsset = asset.incidentReporting;

export const metadata: Metadata = {
  title: "Incident Reporting | ZeeNovo Assure",
  description:
    "Guided incident and near-miss reporting, root cause analysis, action plans and live safety dashboards for Canadian pharmacies.",
};

function Arrow() {
  return <span data-cta-icon aria-hidden="true">↗</span>;
}

function Tag({ children }: { children: React.ReactNode }) {
  return <p className={styles.tag}><span aria-hidden="true">★</span>{children}</p>;
}

function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="incident-title">
      <div className={styles.heroBackdrop}>
        <Image className={styles.heroArt} src={pageAsset.heroArt} alt="" fill sizes="(max-width: 760px) 100vw, 1406px" priority />
      </div>
      <div className={styles.heroCopy}>
        <p className={styles.eyebrow}>ZeeNovo Assure</p>
        <h1 id="incident-title">Never miss an<br />important safety<br />insight.</h1>
        <p className={styles.heroDescription}>Guided incident and near-miss reporting, root cause analysis, action plans and live trend dashboards, with anonymised peer benchmarking.</p>
        <div className={styles.heroActions}>
          <Link data-cta className={styles.primaryButton} href="/book-a-demo"><Arrow />Get Started</Link>
          <Link data-cta className={styles.secondaryButton} href="/book-a-demo"><Arrow />Book a Demo</Link>
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
        <div><p>Analytics</p><h2 id="analytics-title">Four ways analytics works<br />harder for you.</h2></div>
        <span>Every report reaches the dashboard as soon as it is submitted. No spreadsheet in between.</span>
      </div>
      <IncidentAnalyticsPanels />
    </section>
  );
}

function Compliance() {
  return (
    <section className={styles.compliance} aria-labelledby="compliance-title">
      <div className={styles.splitHeading}>
        <div><p>What you can see</p><h2 id="compliance-title">Compliance data that talks back.</h2></div>
        <span>Every view can be cut by store, region, staff member, medication and time of day.</span>
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
      <div className={styles.sectionHeading}><p>Beyond the report</p><h2 id="after-visit-title">Share the results with the people who need them.</h2></div>
      <AfterVisitPanels />
    </section>
  );
}

function Process() {
  const steps = ["Collect", "Detect", "Compare", "Report", "Act"];

  return (
    <section className={styles.process} aria-labelledby="process-title">
      <div className={styles.processHeading}>
        <Tag>From data to decision</Tag>
        <h2 id="process-title">Collect, detect, compare, report<br />and act, without a spreadsheet.</h2>
        <p>Each incident follows the same five steps, from the first report to the action that prevents a repeat.</p>
      </div>
      <div className={styles.processTrack}>
        <Image className={styles.processWave} src={pageAsset.processWave} alt="" width={1440} height={181} />
        <Image className={`${styles.processWave} ${styles.processWaveTrace}`} src={pageAsset.processWave} alt="" aria-hidden="true" width={1440} height={181} />
        <div className={styles.processSteps}>
          {steps.map((step, index) => (
            <article className={styles.processStep} key={step}>
              <Image src={pageAsset.processIcons[index]} alt="" width={44} height={44} />
              <h3>{step}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section className={styles.cta} aria-labelledby="incident-cta-title">
      <Image className={styles.ctaWaves} src={pageAsset.ctaWaves} alt="" width={1290} height={369} />
      <div className={styles.ctaHeading}>
        <Tag>Built for pharmacy safety</Tag>
        <h2 id="incident-cta-title">Report in minutes.<br />Improve every month.</h2>
        <Link data-cta href="/book-a-demo"><Arrow />Book a Demo</Link>
      </div>
      <Image className={styles.reminders} src={pageAsset.doseReminders} alt="Dose reminders module" width={415} height={290} />
      <Image className={styles.ctaPerson} src={pageAsset.ctaPerson} alt="Pharmacist reviewing ZeeNovo on a tablet" width={319} height={382} />
      <Image className={styles.metrics} src={pageAsset.metrics} alt="Pharmacy revenue and active patient metrics" width={231} height={278} />
    </section>
  );
}

export default function IncidentReportingPage() {
  return <main className={styles.page}><Hero /><Analytics /><Compliance /><AfterVisit /><Process /><BlockList blocks={[incidentReportingFeatures]} /><Cta /></main>;
}
