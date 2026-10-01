"use client";

import { useRef, type CSSProperties, type HTMLAttributes } from "react";
import { useInView } from "motion/react";
import styles from "./RevealSequence.module.css";

type RevealSequenceProps = HTMLAttributes<HTMLElement> & {
  as: "div" | "h2" | "section";
  duration?: number;
};

// Observe the existing container once; CSS animates its individual illustration layers.
export default function RevealSequence({ as: Element, duration = 450, className = "", style, children, ...props }: RevealSequenceProps) {
  const ref = useRef<HTMLElement>(null);
  const visible = useInView(ref, { once: true, amount: 0.15, margin: "0px 0px -40px 0px" });
  return <Element {...props} ref={(element: HTMLElement | null) => { ref.current = element; }}
    className={`${className} ${styles.sequence}`} data-sequence-visible={visible}
    style={{ ...style, "--sequence-duration": `${duration}ms` } as CSSProperties}>{children}</Element>;
}
