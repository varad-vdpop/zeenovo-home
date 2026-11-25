"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useReducedMotion } from "motion/react";
import { counterTransition } from "@/lib/motion";
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
// Time per appointment drops from 15 minutes to 3: the ring empties to 3/15 while the minutes count down.
const fromMinutes = 15;
const toMinutes = 3;

export function ClinicalHeroTimer() {
  const ref = useRef<HTMLDivElement>(null);
  const valueRef = useRef<HTMLSpanElement>(null);
  const progress = useRef(fromMinutes);
  const inView = useInView(ref, { once: true, amount: 0.25 });
  const reduceMotion = useReducedMotion();
  const reveal = inView || !!reduceMotion;

  useEffect(() => {
    if (!inView || !valueRef.current) return;
    const update = (value: number) => {
      progress.current = value;
      if (valueRef.current) valueRef.current.textContent = String(Math.round(value));
    };
    if (reduceMotion || progress.current === toMinutes) {
      update(toMinutes);
      return;
    }
    const controls = animate(progress.current, toMinutes, {
      ...timerTransition,
      onUpdate: update,
      onComplete: () => update(toMinutes),
    });
    return () => controls.stop();
  }, [inView, reduceMotion]);

  return <div ref={ref} className={styles.timerPanel} role="img" aria-label={`Time per appointment reduced from ${fromMinutes} minutes to ${toMinutes} minutes`}>
    <div className={styles.timerHeading}>Time per<br />appointment</div>
    <svg className={styles.timerSvg} viewBox="0 0 129.756 163.5" fill="none" aria-hidden="true">
      <circle cx="64.878" cy="100.43" r="39.1757" stroke="#7f74e1" strokeWidth="6.8132" />
      <motion.circle className={styles.timerRing} cx="64.878" cy="100.43" r="39.1757" stroke="#e5ecff" strokeWidth="6.8132" strokeLinecap="round"
        initial={{ pathLength: 1 }} animate={{ pathLength: reveal ? toMinutes / fromMinutes : 1 }}
        transition={reduceMotion ? { duration: 0 } : timerTransition} />
    </svg>
    <div className={styles.timerValue} aria-hidden="true">
      <span className={styles.timerMinutes}><span className={styles.counterMotion} ref={valueRef}>{fromMinutes}</span><span className={styles.counterStatic}>{toMinutes}</span><small>min</small></span>
      <span className={styles.timerWas}>from {fromMinutes} min</span>
    </div>
  </div>;
}
