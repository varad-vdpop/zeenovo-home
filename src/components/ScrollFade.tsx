"use client";

import { useRef, type CSSProperties, type HTMLAttributes } from "react";
import { useInView } from "motion/react";
import styles from "./ScrollFade.module.css";

type ScrollFadeProps = HTMLAttributes<HTMLElement> & {
  as: "h2" | "article" | "section" | "a" | "div";
  href?: string;
  distance?: number;
  duration?: number;
  delay?: number;
  responsiveDelay?: boolean;
};

export default function ScrollFade({ as: Element, className = "", children, distance = 0, duration = 500, delay = 0, responsiveDelay = false, style, ...props }: ScrollFadeProps) {
  const elementRef = useRef<HTMLElement>(null);
  const inView = useInView(elementRef, { once: true, amount: 0.15, margin: "0px 0px -40px 0px" });

  return (
    <Element {...props} ref={(element: HTMLElement | null) => { elementRef.current = element; }}
      className={`${className} ${styles.reveal} ${distance ? styles.rise : ""} ${responsiveDelay ? styles.responsiveDelay : ""}`}
      style={{ ...style, "--reveal-distance": `${distance}px`, "--reveal-duration": `${duration}ms`, "--reveal-delay": `${delay}ms` } as CSSProperties} data-visible={inView}>
      {children}
    </Element>
  );
}
