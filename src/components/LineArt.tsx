"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import styles from "./LineArt.module.css";

type Art = { width: number; height: number; markup: string };

// Figma line artwork drawn inline: a faint static copy of every line, with the full line drawn over it and a short
// break travelling slowly along it. The motion runs only while the artwork is on screen and the tab is visible.

// Travel speed of the break, in artwork units per second: the pace of the hero line pattern.
const SPEED = 80;
export default function LineArt({ art, className = "" }: { art: Art; className?: string }) {
  const svgRef = useRef<SVGSVGElement>(null);
  const inView = useInView(svgRef, { amount: 0.05 });
  const [pageVisible, setPageVisible] = useState(true);

  // Every line moves at the same speed, so its loop time follows its length (the loop covers 103% of the line).
  useEffect(() => {
    svgRef.current?.querySelectorAll<SVGPathElement>(".la-line").forEach(line => {
      line.style.setProperty("--dur", `${((line.getTotalLength() * 1.03) / SPEED).toFixed(2)}s`);
    });
  }, [art]);

  useEffect(() => {
    const update = () => setPageVisible(document.visibilityState === "visible");
    update();
    document.addEventListener("visibilitychange", update);
    return () => document.removeEventListener("visibilitychange", update);
  }, []);

  return (
    <svg
      ref={svgRef}
      className={`${styles.art} ${className}`}
      data-running={inView && pageVisible}
      width={art.width}
      height={art.height}
      viewBox={`0 0 ${art.width} ${art.height}`}
      fill="none"
      aria-hidden="true"
      focusable="false"
      dangerouslySetInnerHTML={{ __html: art.markup }}
    />
  );
}
