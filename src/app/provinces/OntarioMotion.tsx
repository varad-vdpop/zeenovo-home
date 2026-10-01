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

    const hero = root.querySelector<HTMLElement>("[data-parallax-zone]");
    const onPointerMove = (event: PointerEvent) => {
      if (!hero || event.pointerType === "touch") return;
      const bounds = hero.getBoundingClientRect();
      const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
      const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
      hero.style.setProperty("--pointer-x", `${x.toFixed(3)}`);
      hero.style.setProperty("--pointer-y", `${y.toFixed(3)}`);
    };
    const resetPointer = () => {
      hero?.style.setProperty("--pointer-x", "0");
      hero?.style.setProperty("--pointer-y", "0");
    };

    hero?.addEventListener("pointermove", onPointerMove, { passive: true });
    hero?.addEventListener("pointerleave", resetPointer);

    return () => {
      observer.disconnect();
      hero?.removeEventListener("pointermove", onPointerMove);
      hero?.removeEventListener("pointerleave", resetPointer);
      root.classList.remove(styles.motionReady);
    };
  }, []);

  return null;
}
