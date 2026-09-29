import Image from "next/image";
import { asset } from "@/lib/assets";
import styles from "./FinalCta.module.css";

type FinalCtaProps = {
  id?: string;
  actionHref?: string;
};

export default function FinalCta({ id = "contact", actionHref = "#contact" }: FinalCtaProps) {
  return (
    <section className={styles.cta} id={id} aria-labelledby={`${id}-heading`}>
      <Image className={styles.lines} src={asset.ctaLines} alt="" width={1290} height={369} />
      <div className={styles.heading}>
        <span className={styles.tag}><span aria-hidden="true">★</span> You can trust us</span>
        <h2 id={`${id}-heading`}>Handling a pharmacy has<br className={styles.desktopBreak} /> never been easier</h2>
        <a className={styles.action} href={actionHref}><span aria-hidden="true">↗</span> Sign Up now</a>
      </div>
      <Image className={styles.reminders} src={asset.ctaDoseReminders} alt="Dose reminders for upcoming medications" width={415} height={290} />
      <Image className={styles.pharmacist} src={asset.ctaDoctor} alt="Pharmacist using a tablet" width={319} height={382} />
      <Image className={styles.stats} src={asset.ctaStatCards} alt="Total revenue and active patient metrics" width={231} height={278} />
    </section>
  );
}
