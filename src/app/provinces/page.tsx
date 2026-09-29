import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { asset } from "@/lib/assets";
import styles from "./page.module.css";

const pageAsset = asset.provinces;
const ctaAsset = asset.incidentReporting;

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
    <section className={styles.hero} aria-labelledby="provinces-title">
      <div className={styles.heroBackdrop}>
        <Image className={styles.heroArt} src={pageAsset.heroArt} alt="" width={574} height={816} priority />
      </div>
      <div className={styles.heroCopy}>
        <p className={styles.eyebrow}>Provinces</p>
        <h1 id="provinces-title">ZeeNovo for<br />Ontario pharmacies.</h1>
        <p className={styles.heroDescription}>Assessment flows, documentation and terminology for Ontario&apos;s pharmacist minor ailments program, MedsCheck reviews and publicly funded immunization, aligned with OCP documentation expectations.</p>
        <div className={styles.heroActions}>
          <Link className={styles.primaryButton} href="/register-pharmacy"><Arrow />Register Pharmacy</Link>
          <Link className={styles.secondaryButton} href="/book-a-demo"><Arrow />Book a Demo</Link>
        </div>
      </div>
      <Image className={styles.ontarioMap} src={pageAsset.ontarioMap} alt="Map of Ontario" width={291} height={300} priority />
    </section>
  );
}

function OntarioProgram() {
  return (
    <section className={styles.program} aria-labelledby="program-title">
      <div className={styles.splitHeading}>
        <div>
          <p>Built for Ontario</p>
          <h2 id="program-title">Live across Ontario, built around<br />the minor ailments program.</h2>
        </div>
        <span>Regulator: Ontario College of Pharmacists.</span>
      </div>
      <div className={styles.programCardsViewport}>
        <Image className={styles.programCards} src={pageAsset.programCards} alt="Minor ailments, MedsCheck reviews, public immunization and OCP inspection readiness" width={1302} height={358} />
      </div>
    </section>
  );
}

function Outcomes() {
  return (
    <section className={styles.outcomes} aria-labelledby="outcomes-title">
      <div className={styles.outcomesHeading}>
        <Tag>With ZeeNovo</Tag>
        <h2 id="outcomes-title">What Ontario Pharmacies<br />run on Zeenovo</h2>
      </div>
      <div className={styles.outcomesViewport}>
        <Image className={styles.outcomesWave} src={pageAsset.outcomesWave} alt="Care plans and follow ups, injection and dose series, immunization programs and medication reviews" width={1440} height={222} />
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section className={styles.cta} aria-labelledby="provinces-cta-title">
      <Image className={styles.ctaWaves} src={ctaAsset.ctaWaves} alt="" width={1290} height={369} />
      <div className={styles.ctaHeading}>
        <Tag>You can trust us</Tag>
        <h2 id="provinces-cta-title">Handling a pharmacy has<br />never been easier</h2>
        <Link href="/register-pharmacy"><Arrow />Sign Up now</Link>
      </div>
      <Image className={styles.reminders} src={ctaAsset.doseReminders} alt="Dose reminders module" width={415} height={290} />
      <Image className={styles.ctaPerson} src={ctaAsset.ctaPerson} alt="Pharmacist reviewing ZeeNovo on a tablet" width={319} height={382} />
      <Image className={styles.metrics} src={ctaAsset.metrics} alt="Pharmacy revenue and active patient metrics" width={231} height={278} />
    </section>
  );
}

export default function ProvincesPage() {
  return <main className={styles.page}><Hero /><OntarioProgram /><Outcomes /><Cta /></main>;
}
