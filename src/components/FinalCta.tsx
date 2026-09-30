import Image from "next/image";
import { asset } from "@/lib/assets";
import styles from "./FinalCta.module.css";
import { DoseRemindersPreview, PharmacyMetricsPreview } from "./ProductUiPreviews";

type FinalCtaProps = {
  id?: string;
  actionHref?: string;
  eyebrow?: string;
  heading?: React.ReactNode;
  actionLabel?: string;
  variant?: "default" | "clinical";
};

export default function FinalCta({
  id = "contact",
  actionHref = "#contact",
  eyebrow = "You can trust us",
  heading = <>Handling a pharmacy has<br className={styles.desktopBreak} /> never been easier</>,
  actionLabel = "Sign Up now",
  variant = "default",
}: FinalCtaProps) {
  return (
    <section className={`${styles.cta} ${variant === "clinical" ? styles.clinical : ""}`} id={id} aria-labelledby={`${id}-heading`}>
      <Image className={styles.lines} src={asset.ctaLines} alt="" width={1290} height={369} />
      <div className={styles.heading}>
        <span className={styles.tag}><span aria-hidden="true">★</span> {eyebrow}</span>
        <h2 id={`${id}-heading`}>{heading}</h2>
        <a className={styles.action} href={actionHref}><Image className={styles.actionArrow} src="/assets/zeenovo-nav-arrow-primary.svg" alt="" aria-hidden="true" width={24} height={24} />{actionLabel}</a>
      </div>
      <div className={styles.reminders}><DoseRemindersPreview /></div>
      <Image className={styles.pharmacist} src={asset.ctaDoctor} alt="Pharmacist using a tablet" width={319} height={382} />
      <div className={styles.stats}><PharmacyMetricsPreview /></div>
    </section>
  );
}
