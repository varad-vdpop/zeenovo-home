"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";
import { counterTransition } from "@/lib/motion";
import styles from "./ResultsCounters.module.css";

const results = [
  { value: 3, prefix: "", suffix: "×", label: "more clinical services billed" },
  { value: 15, prefix: "", suffix: " min", label: "saved per incident report" },
  { value: 20, prefix: "", suffix: "+", label: "minor ailments supported" },
  { value: 1, prefix: "<", suffix: " day", label: "average setup time" },
] as const;

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
        if (element) element.textContent = `${result.prefix}${Math.round(result.value * value)}${result.suffix}`;
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
      <b className={styles.number} aria-hidden="true" ref={element => { numberRefs.current[index] = element; }}>{result.prefix}{result.value}{result.suffix}</b>
      <span className={styles.accessibleValue}>{result.prefix}{result.value}{result.suffix}</span>
      <span>{result.label}</span>
    </div>)}
  </section>;
}
