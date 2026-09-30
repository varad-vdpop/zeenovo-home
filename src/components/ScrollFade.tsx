"use client";

import { useRef, type HTMLAttributes } from "react";
import { useInView } from "motion/react";
import styles from "./ScrollFade.module.css";

type ScrollFadeProps = HTMLAttributes<HTMLElement> & {
  as: "h2" | "article";
};

export default function ScrollFade({ as: Element, className = "", children, ...props }: ScrollFadeProps) {
  const elementRef = useRef<HTMLElement>(null);
  const inView = useInView(elementRef, { once: true, amount: 0.15, margin: "0px 0px -40px 0px" });

  return (
    <Element {...props} ref={element => { elementRef.current = element; }} className={`${className} ${styles.reveal}`} data-visible={inView}>
      {children}
    </Element>
  );
}
