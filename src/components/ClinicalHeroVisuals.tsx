"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { animate, motion, useInView, useReducedMotion } from "motion/react";
import { counterTransition } from "@/lib/motion";
import { clinicalTimerArc } from "./ClinicalHeroRing";
import styles from "./ClinicalHeroVisuals.module.css";

const flags = [
  ["Differential diagnosis", "diagnosis"],
  ["Breastfeeding", "breastfeeding"],
  ["Red flag", "red-flag"],
  ["Pregnant", "pregnant"],
  ["Immunocompromised", "immunocompromised"],
  ["Allergic to medicine", "allergic"],
] as const;

export function ClinicalHeroFlags() {
  const ref = useRef<HTMLDivElement>(null);
  const cursor = useRef(0);
  const direction = useRef(1);
  const [active, setActive] = useState(0);
  const inView = useInView(ref, { amount: 0.25 });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!inView || reduceMotion) return;
    const interval = window.setInterval(() => {
      if (document.visibilityState !== "visible") return;
      if (cursor.current === flags.length - 1) direction.current = -1;
      else if (cursor.current === 0) direction.current = 1;
      cursor.current += direction.current;
      setActive(cursor.current);
    }, 1300);
    return () => window.clearInterval(interval);
  }, [inView, reduceMotion]);

  return <div ref={ref} className={styles.flagsPanel} role="img" aria-label="Patient flags: differential diagnosis, breastfeeding, red flag, pregnant, immunocompromised, allergic to medicine">
    <div className={styles.flagsHeading}>Patient Flags</div>
    <div className={styles.flagList} aria-hidden="true">
      <motion.div className={styles.highlight} initial={false}
        animate={{ transform: `translateY(${(reduceMotion ? 0 : active) * 21.5168}cqw)` }}
        transition={{ duration: reduceMotion ? 0 : 0.5, ease: [0.77, 0, 0.175, 1] }} />
      <ul className={styles.flagRows}>{flags.map(([label, icon]) => <li className={styles.flagRow} key={icon}>
        <span className={`${styles.flagIcon} ${styles[icon]}`}><Image src={`/assets/clinical/hero-flag-${icon}.svg`} alt="" width={10} height={10} /></span>
        <span>{label}</span>
      </li>)}</ul>
    </div>
  </div>;
}

const timerTransition = { ...counterTransition, delay: 0.3 };
const elapsedSeconds = 4 * 60 + 53;

export function ClinicalHeroTimer() {
  const ref = useRef<HTMLDivElement>(null);
  const valueRef = useRef<HTMLSpanElement>(null);
  const progress = useRef(0);
  const id = useId();
  const inView = useInView(ref, { once: true, amount: 0.25 });
  const reduceMotion = useReducedMotion();
  const reveal = inView || !!reduceMotion;

  useEffect(() => {
    if (!inView || !valueRef.current) return;
    const update = (value: number) => {
      progress.current = value;
      const seconds = Math.round(value);
      if (valueRef.current) valueRef.current.textContent = `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
    };
    if (reduceMotion || progress.current === elapsedSeconds) {
      update(elapsedSeconds);
      return;
    }
    const controls = animate(progress.current, elapsedSeconds, {
      ...timerTransition,
      onUpdate: update,
      onComplete: () => update(elapsedSeconds),
    });
    return () => controls.stop();
  }, [inView, reduceMotion]);

  return <div ref={ref} className={styles.timerPanel} role="img" aria-label="Fast and guided reporting workflow: 4 minutes 53 seconds">
    <div className={styles.timerHeading}>Fast &amp; Guided<br />Reporting Workflow</div>
    <svg className={styles.timerSvg} viewBox="0 375 129.756 163.5" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-gradient`} x1="60.797" y1="437.469" x2="86.3299" y2="475.43" gradientUnits="userSpaceOnUse"><stop stopColor="#e5ecff" stopOpacity="0" /><stop offset="1" stopColor="#e5ecff" /></linearGradient>
        <mask id={`${id}-sweep`} maskUnits="userSpaceOnUse" x="0" y="425" width="115" height="105">
          <motion.path className={styles.sweep} d="M58.6514 436.2543A39.1757 39.1757 0 1 1 31.8338 503.988" stroke="white" strokeWidth="12" strokeLinecap="round"
            initial={{ pathLength: 0 }} animate={{ pathLength: reveal ? 1 : 0 }}
            transition={reduceMotion ? { duration: 0 } : timerTransition} />
        </mask>
      </defs>
      <circle cx="58.6514" cy="475.43" r="39.1757" stroke="#7f74e1" strokeWidth="6.8132" />
      <path d={clinicalTimerArc} fill={`url(#${id}-gradient)`} mask={`url(#${id}-sweep)`} />
    </svg>
    <div className={styles.timerValue} aria-hidden="true"><span className={styles.counterMotion} ref={valueRef}>0:00</span><span className={styles.counterStatic}>4:53</span></div>
  </div>;
}
