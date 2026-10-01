import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { asset } from "@/lib/assets";
import styles from "./page.module.css";
import OntarioMotion from "./OntarioMotion";
import OntarioMapTrace from "./OntarioMapTrace";

const pageAsset = asset.provinces;

const realities = [
  { number: "01", title: "Care rarely arrives one lane at a time.", body: "Minor ailments, MedsCheck reviews and immunizations all compete for the same team and the same day." },
  { number: "02", title: "Every service carries documentation.", body: "The assessment is only complete when the rationale, outcome and follow-up are recorded clearly." },
  { number: "03", title: "Readiness is part of the work.", body: "OCP expectations need to be visible in the workflow, not reconstructed when an inspection arrives." },
];

const programs = [
  "Minor ailments, end to end",
  "MedsCheck ready reviews",
  "UIIP and public immunization",
  "OCP inspection readiness",
];

export const metadata: Metadata = {
  title: "Ontario Pharmacies | ZeeNovo",
  description:
    "Assessment, documentation and clinical workflows for Ontario pharmacies, aligned with OCP expectations.",
};

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function Tag({ children }: { children: React.ReactNode }) {
  return <p className={styles.tag}><span aria-hidden="true">★</span>{children}</p>;
}

function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="provinces-title" data-parallax-zone>
      <div className={styles.heroBackdrop}>
        <Image className={styles.heroArt} src={pageAsset.heroArt} alt="" width={574} height={816} priority />
      </div>
      <div className={styles.heroCopy} data-reveal>
        <p className={styles.eyebrow}>Ontario · Canada</p>
        <h1 id="provinces-title">ZeeNovo for<br />Ontario pharmacies.</h1>
        <p className={styles.heroDescription}>Assessment flows, documentation and terminology for Ontario&apos;s pharmacist minor ailments program, MedsCheck reviews and publicly funded immunization, aligned with OCP documentation expectations.</p>
        <div className={styles.heroActions}>
          <Link className={styles.primaryButton} href="/register-pharmacy"><Arrow />Register Pharmacy</Link>
          <Link className={styles.secondaryButton} href="/book-a-demo"><Arrow />Book a Demo</Link>
        </div>
      </div>
      <div className={styles.heroSignal} data-reveal>
        <div><span>Ontario workflow</span><strong>Minor ailments</strong></div>
        <p>Assessment → documentation → follow-up</p>
        <em>OCP aligned</em>
      </div>
      <div className={styles.ontarioMapFrame} data-reveal>
        <div className={styles.ontarioMapVisual}>
          <Image className={styles.ontarioMap} src={pageAsset.ontarioMap} alt="Map of Ontario" width={291} height={300} priority />
          <OntarioMapTrace />
        </div>
      </div>
    </section>
  );
}

function Reality() {
  return (
    <section className={styles.reality} aria-labelledby="reality-title">
      <div className={styles.realityHeading} data-reveal>
        <div>
          <p>Ontario practice</p>
          <h2 id="reality-title">The week-to-week reality.</h2>
        </div>
        <span>Pharmacy work rarely arrives one role—or one program—at a time.</span>
      </div>
      <div className={styles.realityGrid}>
        {realities.map((item, index) => (
          <article className={styles.realityCard} key={item.number} data-reveal style={{ "--delay": `${index * 80}ms` } as CSSProperties}>
            <small>{item.number}</small>
            <span aria-hidden="true">“</span>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function OntarioProgram() {
  return (
    <section className={styles.program} aria-labelledby="program-title">
      <div className={styles.splitHeading} data-reveal>
        <div>
          <p>A better week</p>
          <h2 id="program-title">Less admin around<br />Ontario care.</h2>
        </div>
        <span>ZeeNovo runs quietly around the pharmacy&apos;s real work—with Ontario-ready workflows and connected records.</span>
      </div>
      <div className={styles.programCardsViewport} role="list" aria-label="Ontario pharmacy workflows">
        {programs.map((program, index) => (
          <div className={styles.programCard} role="listitem" key={program} data-reveal style={{ "--card-index": index, "--delay": `${index * 70}ms` } as CSSProperties}>
            <Image className={styles.programCardStrip} src={pageAsset.programCards} alt="" width={1302} height={358} />
            <span className={styles.srOnly}>{program}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Outcomes() {
  return (
    <section className={styles.outcomes} aria-labelledby="outcomes-title">
      <div className={styles.outcomesHeading} data-reveal>
        <Tag>With ZeeNovo</Tag>
        <h2 id="outcomes-title">What Ontario Pharmacies<br />run on Zeenovo</h2>
      </div>
      <div className={styles.outcomesViewport} data-reveal>
        <div className={styles.outcomesWaveLayer}>
          <Image className={styles.outcomesWave} src={pageAsset.outcomesWave} alt="Care plans and follow ups, injection and dose series, immunization programs and medication reviews" width={1440} height={222} />
          <Image className={`${styles.outcomesWave} ${styles.outcomesWaveTrace}`} src={pageAsset.outcomesWave} alt="" aria-hidden="true" width={1440} height={222} />
        </div>
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section className={styles.cta} aria-labelledby="provinces-cta-title" data-reveal>
      <Image className={styles.ctaWaves} src={pageAsset.ctaWaves} alt="" width={1290} height={369} />
      <div className={styles.ctaHeading}>
        <Tag>You can trust us</Tag>
        <h2 id="provinces-cta-title">Handling a pharmacy has<br />never been easier</h2>
        <Link href="/register-pharmacy"><Arrow />Sign Up now</Link>
      </div>
      <Image className={styles.reminders} src={pageAsset.doseReminders} alt="Dose reminders module" width={415} height={290} />
      <Image className={styles.ctaPerson} src={pageAsset.ctaPerson} alt="Pharmacist reviewing ZeeNovo on a tablet" width={319} height={402} />
      <Image className={styles.metrics} src={pageAsset.metrics} alt="Pharmacy revenue and active patient metrics" width={231} height={278} />
    </section>
  );
}

export default function ProvincesPage() {
  return <main className={styles.page} data-ontario-page><OntarioMotion /><Hero /><Reality /><OntarioProgram /><Outcomes /><Cta /></main>;
}
