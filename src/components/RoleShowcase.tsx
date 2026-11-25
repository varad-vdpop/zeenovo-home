"use client";

import Image from "next/image";
import { useId, useRef, useState, type CSSProperties } from "react";
import { useInView, useReducedMotion } from "motion/react";
import type { TabGroup } from "@/components/blocks/FeatureTabs";
import styles from "./RoleShowcase.module.css";

// Time each role stays open before the next one opens. The progress line under the open heading runs for the same
// time, and its animationend is what advances, so the line and the switch can never drift apart.
const STEP_MS = 4000;

/** Role headings on the left (one open at a time, advancing on a timer), the open role's points on the right.
    Every role's text stays in the markup, so all of it remains readable by search engines and screen readers. */
export default function RoleShowcase({ groups, reverse = false, feature = false }: { groups: TabGroup[]; reverse?: boolean; feature?: boolean }) {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const inView = useInView(rootRef, { amount: 0.2 });
  const reduceMotion = useReducedMotion();
  const id = useId();
  const autoplay = !reduceMotion;
  const running = autoplay && inView && !hovered && !focused;

  return (
    <div
      ref={rootRef}
      className={`${styles.showcase} ${reverse ? styles.reverse : ""} ${feature ? styles.feature : ""}`}
      style={{ "--step": `${STEP_MS}ms` } as CSSProperties}
      onPointerEnter={event => { if (event.pointerType === "mouse") setHovered(true); }}
      onPointerLeave={() => setHovered(false)}
      // Keyboard focus pauses the timer; a mouse click on a heading just opens that role and the timer carries on.
      onFocus={event => { if ((event.target as HTMLElement).matches(":focus-visible")) setFocused(true); }}
      onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget as Node)) setFocused(false); }}
    >
      <ul className={styles.list}>
        {groups.map((group, index) => {
          const open = index === active;
          return (
            <li key={group.title} className={styles.row} data-open={open}>
              <button
                type="button"
                className={styles.heading}
                aria-expanded={open}
                aria-controls={`${id}-detail-${index}`}
                onClick={() => setActive(index)}
              >
                <span className={styles.headingIcon}><Image src={group.items[0].src} alt="" width={20} height={20} /></span>
                {group.title}
              </button>
              <div className={styles.detail} id={`${id}-detail-${index}`}>
                <div>{group.text && <p>{group.text}</p>}</div>
              </div>
              <span className={styles.track} aria-hidden="true">
                {open && autoplay && (
                  <span
                    key={active}
                    className={styles.progress}
                    data-running={running}
                    onAnimationEnd={() => setActive((active + 1) % groups.length)}
                  />
                )}
              </span>
            </li>
          );
        })}
      </ul>

      <div className={styles.stage}>
        <Image className={`${styles.lines} ${styles.linesA}`} src="/assets/clinical/workflow-lines.svg" alt="" width={940} height={758} />
        <Image className={`${styles.lines} ${styles.linesB}`} src="/assets/clinical/workflow-lines.svg" alt="" width={940} height={758} />
        {groups.map((group, index) => (
          <div key={group.title} className={styles.panel} data-open={index === active} aria-hidden={index !== active}>
            <div className={styles.frame}>
              <ul className={styles.card} aria-label={`${group.title}: what ZeeNovo does`}>
                {group.items.map(item => (
                  <li className={styles.item} key={item.title}>
                    <span className={styles.itemIcon}><Image src={item.src} alt="" width={20} height={20} /></span>
                    <div><strong>{item.title}</strong><p>{item.text}</p></div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
