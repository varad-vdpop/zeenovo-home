import { shareMeta } from "@/lib/metadata";
import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { asset } from "@/lib/assets";
import { BlockList } from "@/components/blocks/BlockPage";
import type { Block } from "@/components/blocks/types";
import { ontario } from "@/content/pages/provinces";
import styles from "../page.module.css";
import OntarioMotion from "../OntarioMotion";
import OntarioMapTrace from "../OntarioMapTrace";
import Icon from "@/components/Icon";

const pageAsset = asset.provinces;

const realities = [
  { number: "01", title: "Services compete for one team.", body: "Minor ailments, MedsCheck and immunization share the same staff and hours." },
  { number: "02", title: "A visit isn't billable until it's documented.", body: "Decision, outcome and follow-up must be on file." },
  { number: "03", title: "Assessment evidence should already exist.", body: "Records built after notice are incomplete records." },
];

export const metadata = shareMeta(ontario.meta);

function Arrow() {
  return <span data-cta-icon aria-hidden="true"><Icon /></span>;
}

function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="provinces-title" data-parallax-zone>
      <div className={styles.heroBackdrop}>
        <Image className={styles.heroArt} src={pageAsset.heroArt} alt="" width={574} height={816} priority />
      </div>
      <div className={styles.heroCopy} data-reveal>
        <span className="tag hero-pill"><span aria-hidden="true">★</span>Ontario · Canada</span>
        <h1 id="provinces-title">Built in Ontario,<br />for Ontario pharmacies.</h1>
        <p className={styles.heroDescription}>Minor ailment visits, flu and COVID-19 clinics and MedsCheck reviews, with the correct billing PIN on every visit and safety records ready for your next OCP assessment.</p>
        <div className={styles.heroActions}>
          <Link data-cta className={styles.primaryButton} href="/book-a-demo"><Arrow />Book a Demo</Link>
          <Link data-cta className={styles.secondaryButton} href="https://auth.zeenovo.com/signup"><Arrow />Start Free Trial</Link>
        </div>
      </div>
      <div className={styles.heroSignal} data-reveal>
        <div><span>Ontario practice</span><strong>Minor ailments</strong></div>
        <p>Assessment <Icon name="arrowRight" style={{ margin: "0 4px" }} /> documentation <Icon name="arrowRight" style={{ margin: "0 4px" }} /> follow-up</p>
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

// Closing call to action: the site's shared CTA block, like every other page.
const closingCta: Block = { type: "cta", eyebrow: "Get started", title: "See ZeeNovo with your / own Ontario services.", action: { label: "Book a Demo", href: "/book-a-demo" } };

export default function ProvincesPage() {
  // The reused blocks align to the 77px edge of the approved hero and reality cards, as on the province template.
  return <main className={styles.page} data-ontario-page style={{ "--block-gutter": "77px" } as CSSProperties}><OntarioMotion /><Hero /><Reality /><BlockList blocks={[...ontario.blocks, closingCta]} /></main>;
}
