"use client";

import Image from "next/image";
import { useId, useRef, useState, type KeyboardEvent } from "react";
import s from "./sections.module.css";

export type TabGroup = { title: string; text?: string; items: { title: string; text: string; src: string }[] };

/** Feature explorer: one tab per feature area, one panel at a time.
    Every panel stays in the page markup, so all features remain readable by search engines. */
export default function FeatureTabs({ groups }: { groups: TabGroup[] }) {
  const [active, setActive] = useState(0);
  const id = useId();
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const total = String(groups.length).padStart(2, "0");

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const delta = event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
    if (!delta) return;
    event.preventDefault();
    const next = (active + delta + groups.length) % groups.length;
    setActive(next);
    tabs.current[next]?.focus();
  }

  return <div>
    <div className={s.tabList} role="tablist" aria-label="Feature areas" onKeyDown={onKeyDown}>
      {groups.map((group, index) => <button key={group.title} ref={(element) => { tabs.current[index] = element; }} type="button" role="tab"
        id={`${id}-tab-${index}`} aria-selected={index === active} aria-controls={`${id}-panel-${index}`} tabIndex={index === active ? 0 : -1}
        className={`${s.tab} ${index === active ? s.tabActive : ""}`} onClick={() => setActive(index)}>
        <span className={s.tabIcon}><Image src={group.items[0].src} alt="" width={18} height={18} /></span>{group.title}
      </button>)}
    </div>
    {groups.map((group, index) => <div key={group.title} role="tabpanel" id={`${id}-panel-${index}`} aria-labelledby={`${id}-tab-${index}`} hidden={index !== active} className={s.tabPanel}>
      <Image className={`${s.panelLines} ${s.panelLinesA}`} src="/assets/clinical/workflow-lines.svg" alt="" width={940} height={758} />
      <Image className={`${s.panelLines} ${s.panelLinesB}`} src="/assets/clinical/workflow-lines.svg" alt="" width={940} height={758} />
      <div className={s.panelIntro}>
        <span className={s.panelCount}>{String(index + 1).padStart(2, "0")} / {total}</span>
        <h3>{group.title}</h3>
        {group.text && <p>{group.text}</p>}
      </div>
      <div className={s.panelFrame}>
        <div className={`${s.panelCard} ${group.items.length < 3 ? s.panelCardSingle : ""}`}>
          {group.items.map((item) => <div className={s.panelItem} key={item.title}>
            <span className={s.itemIcon}><Image src={item.src} alt="" width={20} height={20} /></span>
            <div><strong>{item.title}</strong><p>{item.text}</p></div>
          </div>)}
        </div>
      </div>
    </div>)}
  </div>;
}
