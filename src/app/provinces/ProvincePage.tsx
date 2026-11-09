import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { asset } from "@/lib/assets";
import { BlockList, lines } from "@/components/blocks/BlockPage";
import { art } from "@/components/blocks/media";
import type { CardsBlock, CtaBlock } from "@/components/blocks/types";
import styles from "./page.module.css";
import OntarioMotion from "./OntarioMotion";

// Province template. Same layout and motion as the approved Ontario page.
// The Ontario-only map and program-card artwork are swapped for the Canada map
// and native program cards, so no artwork carries another province's text.

export type ProvinceContent = {
  name: string;
  status: string;
  title: string;
  description: string;
  signal: { label: string; title: string; flow: string; badge: string };
  reality: { title: string; text: string }[];
  programs: CardsBlock["items"];
};

function Arrow() {
  return <span data-cta-icon aria-hidden="true">↗</span>;
}

export default function ProvincePage({ province }: { province: ProvinceContent }) {
  const map = art.canadaMap;
  const programs: CardsBlock = {
    type: "cards",
    eyebrow: "A better week",
    title: `Less admin around / ${province.name} care.`,
    side: `ZeeNovo runs quietly around the pharmacy's real work, with ${province.name}-ready workflows and connected records.`,
    items: province.programs,
  };
  const cta: CtaBlock = { type: "cta", eyebrow: "Get started", title: "See ZeeNovo with / your own services.", action: { label: "Book a Demo", href: "/book-a-demo" } };

  return <main className={styles.page} data-ontario-page>
    <OntarioMotion />
    <section className={styles.hero} aria-labelledby="province-title" data-parallax-zone>
      <div className={styles.heroBackdrop}>
        <Image className={styles.heroArt} src={asset.provinces.heroArt} alt="" width={574} height={816} priority />
      </div>
      <div className={styles.heroCopy} data-reveal>
        <p className={styles.eyebrow}>{province.name} · Canada · {province.status}</p>
        <h1 id="province-title">{lines(province.title)}</h1>
        <p className={styles.heroDescription}>{province.description}</p>
        <div className={styles.heroActions}>
          <Link data-cta className={styles.primaryButton} href="https://auth.zeenovo.com/signup"><Arrow />Register Pharmacy</Link>
          <Link data-cta className={styles.secondaryButton} href="/book-a-demo"><Arrow />Book a Demo</Link>
        </div>
      </div>
      <div className={styles.heroSignal} data-reveal>
        <div><span>{province.signal.label}</span><strong>{province.signal.title}</strong></div>
        <p>{province.signal.flow}</p>
        <em>{province.signal.badge}</em>
      </div>
      <div className={styles.ontarioMapFrame} data-reveal>
        <div className={styles.ontarioMapVisual}>
          <Image className={styles.ontarioMap} src={map.src} alt="Map of Canada" width={map.width} height={map.height} priority />
        </div>
      </div>
    </section>

    <section className={styles.reality}>
      <div className={styles.realityHeading} data-reveal>
        <div><p>{province.name} practice</p><h2>The week-to-week reality.</h2></div>
        <span>Pharmacy work rarely arrives one role, or one program, at a time.</span>
      </div>
      <div className={styles.realityGrid}>
        {province.reality.map((item, index) => <article className={styles.realityCard} key={item.title} data-reveal style={{ "--delay": `${index * 80}ms` } as CSSProperties}>
          <small>{String(index + 1).padStart(2, "0")}</small>
          <span aria-hidden="true">“</span>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </article>)}
      </div>
    </section>

    <BlockList blocks={[programs]} />

    <section className={styles.outcomes}>
      <div className={styles.outcomesHeading} data-reveal>
        <p className={styles.tag}><span aria-hidden="true">★</span>With ZeeNovo</p>
        <h2>What {province.name} pharmacies<br />run on ZeeNovo</h2>
      </div>
      <div className={styles.outcomesViewport} data-reveal>
        <div className={styles.outcomesWaveLayer}>
          <Image className={styles.outcomesWave} src={asset.provinces.outcomesWave} alt="Care plans and follow ups, injection and dose series, immunization programs and medication reviews" width={1440} height={222} />
          <Image className={`${styles.outcomesWave} ${styles.outcomesWaveTrace}`} src={asset.provinces.outcomesWave} alt="" aria-hidden="true" width={1440} height={222} />
        </div>
      </div>
    </section>

    <BlockList blocks={[cta]} />
  </main>;
}
