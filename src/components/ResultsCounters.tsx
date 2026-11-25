"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";
import { counterTransition } from "@/lib/motion";
import styles from "./ResultsCounters.module.css";

// A result with `text` is a word, not a number: it is shown as is, without the count-up.
type Result = { value: number; prefix: string; suffix: string; label: string; text?: string };

const results: readonly Result[] = [
  { value: 28, prefix: "", suffix: "", label: "minor ailments supported" },
  { value: 1, prefix: "<", suffix: " day", label: "to set up" },
  { value: 0, prefix: "", suffix: "", label: "users on every plan", text: "Unlimited" },
  { value: 15, prefix: "", suffix: " min", label: "saved per incident report" },
];

const display = (result: Result, progress = 1) => result.text ?? `${result.prefix}${Math.round(result.value * progress)}${result.suffix}`;

export default function ResultsCounters() {
  const sectionRef = useRef<HTMLElement>(null);
  const numberRefs = useRef<(HTMLElement | null)[]>([]);
  const progress = useRef(0);
  const inView = useInView(sectionRef, { once: true, amount: 0.25 });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    function update(value: number) {
      progress.current = value;
      results.forEach((result, index) => {
        const element = numberRefs.current[index];
        if (element) element.textContent = display(result, value);
      });
    }

    if (reduceMotion) {
      update(1);
      return;
    }
    if (!inView) {
      update(0);
      return;
    }
    if (progress.current === 1) return;

    const controls = animate(progress.current, 1, {
      ...counterTransition,
      onUpdate: update,
      onComplete: () => update(1),
    });
    return () => controls.stop();
  }, [inView, reduceMotion]);

  return <section ref={sectionRef} className="stats" aria-label="ZeeNovo results">
    {results.map((result, index) => <div key={result.label}>
      <b aria-hidden="true" ref={element => { numberRefs.current[index] = element; }}>{display(result)}</b>
      <span className={styles.accessibleValue}>{display(result)}</span>
      <span>{result.label}</span>
    </div>)}
  </section>;
}
