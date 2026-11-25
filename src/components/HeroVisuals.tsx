"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import { animate, motion, useInView, useReducedMotion } from "motion/react";
import { counterTransition } from "@/lib/motion";
import styles from "./HeroVisuals.module.css";

// The ZeeNovo platforms, in the order of the navigation's Platforms menu.
const menuItems = [
  { label: "Clinical", icon: "doctor", width: 17.448, height: 17.448 },
  { label: "Assure", icon: "shield", width: 15, height: 15 },
  { label: "Magistral", icon: "medicines", width: 14.1416, height: 14.1416 },
  { label: "Sites", icon: "globe", width: 15, height: 15 },
  { label: "Voice Booking", icon: "mic", width: 15, height: 15 },
] as const;

const rowStep = 45.36486;
const revenue = 30700;
const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});
// Draw during the panel fade, which begins alongside the left-side content.
const chartTransition = { ...counterTransition, delay: 0.4 };
// The original Figma curve, kept as a live SVG path so it can draw itself.
const revenueCurve = "M18.1973 147.808C34.2421 143.742 50.2863 139.676 66.3311 135.61C82.3758 131.543 98.4201 123.411 114.465 123.411C130.51 123.411 146.554 126.461 162.599 126.461C178.643 126.461 194.688 115.787 210.732 111.212C226.777 106.638 242.821 102.064 258.866 99.0139C274.911 95.9642 290.955 94.4389 307 92.9144";

function MenuRows() {
  return menuItems.map(item => (
    <li className={styles.menuRow} key={item.icon}>
      <div className={styles.menuIcon}>
        <Image src={`/assets/hero-ui/${item.icon}.svg`} alt="" width={item.width} height={item.height} />
      </div>
      <p>{item.label}</p>
    </li>
  ));
}

export function HeroMenuPreview() {
  const panelRef = useRef<HTMLDivElement>(null);
  const cursor = useRef(0);
  const direction = useRef(1);
  const [activeIndex, setActiveIndex] = useState(0);
  const inView = useInView(panelRef, { amount: 0.25 });
  const reduceMotion = useReducedMotion();
  // The server cannot know the visitor's motion setting, so it renders the first item. Apply the reduced-motion
  // selection only after hydration, so the first client render matches the server HTML.
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);
  const selectedIndex = hydrated && reduceMotion ? 1 : activeIndex;

  useEffect(() => {
    if (!inView || reduceMotion) return;
    const timer = window.setInterval(() => {
      if (document.visibilityState !== "visible") return;
      if (cursor.current === menuItems.length - 1) direction.current = -1;
      else if (cursor.current === 0) direction.current = 1;
      cursor.current += direction.current;
      setActiveIndex(cursor.current);
    }, 1300);
    return () => window.clearInterval(timer);
  }, [inView, reduceMotion]);

  return (
    <div className="hero-menu">
      <div ref={panelRef} className={styles.menuPanel} role="img" aria-label="ZeeNovo platforms: Clinical, Assure, Magistral, Sites, Voice Booking">
        <div className={styles.menuList}>
          <ul className={styles.menuRows}><MenuRows /></ul>
          <motion.div
            className={styles.menuHighlight}
            aria-hidden="true"
            initial={false}
            animate={{ transform: `translateY(${selectedIndex * rowStep}px)` }}
            transition={{ duration: reduceMotion ? 0 : 0.5, ease: [0.77, 0, 0.175, 1] }}
          >
            <motion.ul
              className={`${styles.menuRows} ${styles.menuActiveRows}`}
              initial={false}
              animate={{ transform: `translateY(${-selectedIndex * rowStep}px)` }}
              transition={{ duration: reduceMotion ? 0 : 0.5, ease: [0.77, 0, 0.175, 1] }}
            >
              <MenuRows />
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export function HeroRevenuePreview() {
  const panelRef = useRef<HTMLDivElement>(null);
  const amountRef = useRef<HTMLDivElement>(null);
  const counterCompleted = useRef(false);
  const gradientId = useId();
  const inView = useInView(panelRef, { once: true, amount: 0.25 });
  const reduceMotion = useReducedMotion();
  const reveal = inView || !!reduceMotion;
  const transition = reduceMotion ? { duration: 0 } : chartTransition;

  useEffect(() => {
    if (!inView || !amountRef.current) return;
    if (reduceMotion || counterCompleted.current) {
      amountRef.current.textContent = currency.format(revenue);
      counterCompleted.current = true;
      return;
    }
    const controls = animate(0, revenue, {
      ...chartTransition,
      onUpdate: value => {
        if (amountRef.current) amountRef.current.textContent = currency.format(Math.round(value));
      },
      onComplete: () => { counterCompleted.current = true; },
    });
    return () => controls.stop();
  }, [inView, reduceMotion]);

  return (
    <div className="hero-chart">
      <div ref={panelRef} className={styles.chartPanel} role="img" aria-label="Monthly total revenue: $30,700, with an upward revenue trend">
        <p className={styles.revenueLabel}>Total Revenue</p>
        <div className={styles.revenueAmount} aria-hidden="true">
          <div ref={amountRef} className={styles.counterMotion}>$0</div>
          <div className={styles.counterStatic}>{currency.format(revenue)}</div>
        </div>
        <div className={styles.periodLabel} aria-hidden="true">
          <p>Monthly</p><Image src="/assets/hero-ui/chevron.svg" alt="" width={15.1} height={15.1} />
        </div>
        <svg className={styles.chartSvg} viewBox="0 0 329 237" aria-hidden="true">
          <defs>
            <linearGradient id={gradientId} x1="0" y1="92.9144" x2="0" y2="215" gradientUnits="userSpaceOnUse">
              <stop offset="0.05" stopColor="#A5B4FC" stopOpacity="0.8" />
              <stop offset="0.95" stopColor="#A5B4FC" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          {[87.6542, 115.694, 143.735, 171.775, 199.815].map(y => (
            <line key={y} x1="22" y1={y} x2="307" y2={y} stroke="#F4F4F5" strokeWidth="0.623693" strokeDasharray="1.87 1.87" />
          ))}
          {/* The Figma curve ran 18.2 to 307 with uneven side gaps; scale it to a 22px inset on both sides. */}
          <g transform="matrix(0.98683 0 0 1 4.0422 0)">
          <motion.path
            className={styles.chartArea}
            d={`${revenueCurve}V215H18.1973Z`}
            fill={`url(#${gradientId})`}
            fillOpacity="0.6"
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: reveal ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)" }}
            transition={transition}
          />
          <motion.path
            className={styles.chartLine}
            d={revenueCurve}
            fill="none"
            stroke="#3950D3"
            strokeWidth="1.24739"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: reveal ? 1 : 0 }}
            transition={transition}
          />
          </g>
        </svg>
      </div>
    </div>
  );
}
