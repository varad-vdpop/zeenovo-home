"use client";

import { useEffect } from "react";
import styles from "./page.module.css";

export default function OntarioMotion() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>("[data-ontario-page]");

    if (!root) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealItems = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]"));

    root.classList.add(styles.motionReady);

    if (reduceMotion || !("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.setAttribute("data-visible", "true"));
      return () => root.classList.remove(styles.motionReady);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.setAttribute("data-visible", "true");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -12%", threshold: 0.12 },
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => {
      observer.disconnect();
      root.classList.remove(styles.motionReady);
    };
  }, []);

  return null;
}
