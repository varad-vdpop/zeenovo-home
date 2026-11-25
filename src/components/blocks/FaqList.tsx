"use client";

import { useId, useState } from "react";
import s from "./sections.module.css";

/** FAQ accordion. The first question starts open; answers ease open and closed, and the plus turns into a minus.
    Answers stay in the markup while closed, so search engines and in-page search still find them. */
export default function FaqList({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const id = useId();
  return (
    <div className={s.faqList}>
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <div className={s.faqItem} data-open={isOpen} key={item.q}>
            <h3 className={s.faqQuestion}>
              <button type="button" aria-expanded={isOpen} aria-controls={`${id}-${index}`} onClick={() => setOpen(isOpen ? null : index)}>
                {item.q}
                <span className={s.faqToggle} aria-hidden="true" />
              </button>
            </h3>
            <div className={s.faqAnswer} id={`${id}-${index}`} role="region" aria-hidden={!isOpen}>
              <div><p>{item.a}</p></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
