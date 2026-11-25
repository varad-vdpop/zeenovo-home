import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { asset } from "@/lib/assets";
import { BlockList, lines } from "@/components/blocks/BlockPage";
import { art } from "@/components/blocks/media";
import type { CardsBlock, CtaBlock } from "@/components/blocks/types";
import styles from "./page.module.css";
import OntarioMotion from "./OntarioMotion";
import Icon from "@/components/Icon";
import { Fragment } from "react";

// Province template. Same layout and motion as the approved Ontario page.
// The Ontario-only map and program-card artwork are swapped for the Canada map
// and native program cards, so no artwork carries another province's text.
// The signal card badge states availability. It never names a college or claims readiness.

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
  return <span data-cta-icon aria-hidden="true"><Icon /></span>;
}

export default function ProvincePage({ province }: { province: ProvinceContent }) {
  const map = art.canadaMap;
  const programs: CardsBlock = {
    type: "cards",
    eyebrow: "On ZeeNovo",
    title: `What ${province.name} pharmacies / run on ZeeNovo`,
    items: province.programs,
  };
  const cta: CtaBlock = { type: "cta", eyebrow: "Get started", title: `Ask what's available / in ${province.name}.`, action: { label: "Book a Demo", href: "/book-a-demo" } };

  // The approved province hero and reality cards sit on a 77px edge; align the reused blocks to it.
  return <main className={styles.page} data-ontario-page style={{ "--block-gutter": "77px" } as CSSProperties}>
    <OntarioMotion />
    <section className={styles.hero} aria-labelledby="province-title" data-parallax-zone>
      <div className={styles.heroBackdrop}>
        <Image className={styles.heroArt} src={asset.provinces.heroArt} alt="" width={574} height={816} priority />
      </div>
      <div className={styles.heroCopy} data-reveal>
        <span className="tag hero-pill"><span aria-hidden="true">★</span>{province.name} · Canada</span>
        <h1 id="province-title">{lines(province.title)}</h1>
        <p className={styles.heroDescription}>{province.description}</p>
        <div className={styles.heroActions}>
          <Link data-cta className={styles.primaryButton} href="/book-a-demo"><Arrow />Book a Demo</Link>
          <Link data-cta className={styles.secondaryButton} href="https://auth.zeenovo.com/signup"><Arrow />Start Free Trial</Link>
        </div>
      </div>
      <div className={styles.heroSignal} data-reveal>
        <div><span>{province.signal.label}</span><strong>{province.signal.title}</strong></div>
        <p>{province.signal.flow.split(" → ").map((step, index) => <Fragment key={step}>{index > 0 && <Icon name="arrowRight" style={{ margin: "0 4px" }} />}{step}</Fragment>)}</p>
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

    <BlockList blocks={[programs, cta]} />
  </main>;
}
