import { shareMeta } from "@/lib/metadata";
import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { asset } from "@/lib/assets";
import { BlockList } from "@/components/blocks/BlockPage";
import { ontario } from "@/content/pages/provinces";
import styles from "../page.module.css";
import OntarioMotion from "../OntarioMotion";
import OntarioMapTrace from "../OntarioMapTrace";

const pageAsset = asset.provinces;

const realities = [
  { number: "01", title: "Services compete for one team.", body: "Minor ailments, MedsCheck and immunization share the same staff and hours." },
  { number: "02", title: "A visit isn't billable until it's documented.", body: "Decision, outcome and follow-up must be on file." },
  { number: "03", title: "Assessment evidence should already exist.", body: "Records built after notice are incomplete records." },
];

export const metadata = shareMeta(ontario.meta);

function Arrow() {
  return <span data-cta-icon aria-hidden="true">↗</span>;
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
        <h1 id="provinces-title">Built in Ontario,<br />for Ontario pharmacies.</h1>
        <p className={styles.heroDescription}>Minor ailment visits, flu and COVID-19 clinics and MedsCheck reviews, with the correct billing PIN on every visit and safety records ready for your next OCP assessment.</p>
        <div className={styles.heroActions}>
          <Link data-cta className={styles.primaryButton} href="/book-a-demo"><Arrow />Book a Demo</Link>
          <Link data-cta className={styles.secondaryButton} href="https://auth.zeenovo.com/signup"><Arrow />Start Free Trial</Link>
        </div>
      </div>
      <div className={styles.heroSignal} data-reveal>
        <div><span>Ontario practice</span><strong>Minor ailments</strong></div>
        <p>Assessment → documentation → follow-up</p>
        <em>Ontario billing PINs</em>
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
        <span>Pharmacy work rarely arrives one role, or one program, at a time.</span>
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

function Cta() {
  return (
    <section className={styles.cta} aria-labelledby="provinces-cta-title" data-reveal>
      <Image className={styles.ctaWaves} src={pageAsset.ctaWaves} alt="" width={1290} height={369} />
      <div className={styles.ctaHeading}>
        <Tag>Get started</Tag>
        <h2 id="provinces-cta-title">See ZeeNovo with your{" "}<br />own Ontario services.</h2>
        <Link data-cta href="/book-a-demo"><Arrow />Book a Demo</Link>
      </div>
      <Image className={styles.reminders} src={pageAsset.doseReminders} alt="Dose reminders module" width={415} height={290} />
      <Image className={styles.ctaPerson} src={pageAsset.ctaPerson} alt="Pharmacist reviewing ZeeNovo on a tablet" width={319} height={402} />
      <Image className={styles.metrics} src={pageAsset.metrics} alt="Pharmacy revenue and active patient metrics" width={231} height={278} />
    </section>
  );
}

export default function ProvincesPage() {
  // The reused blocks align to the 77px edge of the approved hero and reality cards, as on the province template.
  return <main className={styles.page} data-ontario-page style={{ "--block-gutter": "77px" } as CSSProperties}><OntarioMotion /><Hero /><Reality /><BlockList blocks={ontario.blocks} /><Cta /></main>;
}
