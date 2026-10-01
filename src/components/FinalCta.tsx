import Image from "next/image";
import { asset } from "@/lib/assets";
import styles from "./FinalCta.module.css";
import { DoseRemindersPreview, PharmacyMetricsPreview } from "./ProductUiPreviews";
import ScrollFade from "./ScrollFade";
import RevealSequence from "./RevealSequence";
import type { CSSProperties } from "react";

type FinalCtaProps = {
  id?: string;
  actionHref?: string;
  eyebrow?: string;
  heading?: React.ReactNode;
  actionLabel?: string;
  variant?: "default" | "clinical";
  animated?: boolean;
};

export default function FinalCta({
  id = "contact",
  actionHref = "#contact",
  eyebrow = "You can trust us",
  heading = <>Handling a pharmacy has<br className={styles.desktopBreak} /> never been easier</>,
  actionLabel = "Sign Up now",
  variant = "default",
  animated = false,
}: FinalCtaProps) {
  const content = <>
      <Image className={styles.lines} src={asset.ctaLines} alt="" width={1290} height={369} />
      <div className={styles.heading} data-reveal="fade">
        <span className={styles.tag}><span aria-hidden="true">★</span> {eyebrow}</span>
        <h2 id={`${id}-heading`}>{heading}</h2>
        <a className={styles.action} href={actionHref}><Image className={styles.actionArrow} src="/assets/zeenovo-nav-arrow-primary.svg" alt="" aria-hidden="true" width={24} height={24} />{actionLabel}</a>
      </div>
      <div className={styles.reminders} data-reveal="rise" style={{ "--sequence-delay": "120ms" } as CSSProperties}><DoseRemindersPreview /></div>
      <Image className={styles.pharmacist} data-reveal="rise" style={{ "--sequence-delay": "60ms" } as CSSProperties} src={asset.ctaDoctor} alt="Pharmacist using a tablet" width={319} height={382} />
      <div className={styles.stats} data-reveal="rise" style={{ "--sequence-delay": "180ms" } as CSSProperties}><PharmacyMetricsPreview /></div>
  </>;
  const className = `${styles.cta} ${variant === "clinical" ? styles.clinical : ""}`;
  return animated
    ? <RevealSequence as="section" className={className} id={id} aria-labelledby={`${id}-heading`}>{content}</RevealSequence>
    : <ScrollFade as="section" className={className} id={id} aria-labelledby={`${id}-heading`}>{content}</ScrollFade>;
}
