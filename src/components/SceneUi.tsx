import Image from "next/image";
import localFont from "next/font/local";
import type { ReactNode } from "react";
import styles from "./SceneBento.module.css";

export { styles };

// Form controls in the shadcn/ui style (label, input, select with its open list, combobox, checkbox, switch, radio
// rows, segmented control, one-time-code slots, date picker, badges, list rows and bar rows) for the illustrations in
// SceneBento cards. They are drawings: nothing here is interactive.

export const inter = localFont({ src: "../../public/fonts/inter-variable.woff2", weight: "100 900", display: "swap", preload: false });

export const icon = {
  chevron: "m6 9 6 6 6-6",
  check: "M20 6 9 17l-5-5",
  left: "m15 18-6-6 6-6",
  right: "m9 18 6-6-6-6",
  calendar: "M8 2v4m8-4v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z",
  mail: "M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm18 2-10 7L2 6",
  lock: "M7 11V7a5 5 0 0 1 10 0v4M5 11h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2Z",
  search: "M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm9 2-4-4",
  upload: "M12 16V4m-5 5 5-5 5 5M4 16v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3",
  file: "M7 3h7l4 4v14H7zM14 3v4h4",
  send: "m21 3-9.5 9.5M21 3l-6.5 18-3-8.5L3 9.5z",
  user: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 8a7 7 0 0 1 14 0",
  plus: "M12 5v14M5 12h14",
  mic: "M12 3a3 3 0 0 1 3 3v6a3 3 0 0 1-6 0V6a3 3 0 0 1 3-3Zm-6 9a6 6 0 0 0 12 0M12 18v3",
  eyeOff: "M3 3l18 18M10.6 6.1A9.8 9.8 0 0 1 12 6c5 0 9 6 9 6a17 17 0 0 1-3.2 3.8M6.6 6.6C4.3 8.2 3 12 3 12s4 6 9 6a8.6 8.6 0 0 0 4.2-1.1M9.9 9.9a3 3 0 0 0 4.2 4.2",
  printer: "M7 8V3h10v5M6 17H4V9h16v8h-2M7 14h10v7H7z",
} as const;

export function Glyph({ name }: { name: keyof typeof icon }) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d={icon[name]} /></svg>;
}

/* shadcn/ui-style controls */
export function Field({ label, children }: { label: string; children: ReactNode }) {
  return <div className={styles.field}><span className={styles.label}>{label}</span>{children}</div>;
}
export function Input({ value, lead, muted = false }: { value: string; lead?: keyof typeof icon; muted?: boolean }) {
  return <span className={`${styles.input} ${muted ? styles.muted : ""}`}>{lead && <Glyph name={lead} />}{value}</span>;
}
export function Select({ value, options, open = false }: { value: string; options?: string[]; open?: boolean }) {
  return <span className={styles.selectWrap}>
    <span className={`${styles.input} ${styles.select} ${open ? styles.focused : ""}`}>{value}<Glyph name="chevron" /></span>
    {open && options && <span className={styles.list}>
      {options.map((option) => <span key={option} className={`${styles.option} ${option === value ? styles.selected : ""}`}>
        {option}{option === value && <Glyph name="check" />}
      </span>)}
    </span>}
  </span>;
}
export function Combobox({ value, query, options }: { value: string; query: string; options: string[] }) {
  return <span className={styles.selectWrap}>
    <span className={`${styles.input} ${styles.select} ${styles.focused}`}>{value}<Glyph name="chevron" /></span>
    <span className={styles.list}>
      <span className={styles.search}><Glyph name="search" />{query}<b /></span>
      {options.map((option) => <span key={option} className={`${styles.option} ${option === value ? styles.selected : ""}`}>
        {option}{option === value && <Glyph name="check" />}
      </span>)}
    </span>
  </span>;
}
export function Button({ children, outline = false }: { children: ReactNode; outline?: boolean }) {
  return <span className={`${styles.button} ${outline ? styles.buttonOutline : ""}`}>{children}</span>;
}
export function Checkbox({ label, checked = false }: { label: string; checked?: boolean }) {
  return <span className={`${styles.checkRow} ${checked ? styles.checkOn : ""}`}><i>{checked && <Glyph name="check" />}</i>{label}</span>;
}
export function Switch({ label, on = false, detail, flag }: { label: string; on?: boolean; detail?: string; flag?: "pregnant" | "breastfeeding" | "allergic" | "immunocompromised" }) {
  return <span className={styles.switchRow}>
    <span className={styles.switchLabel}>
      {flag && <span className={`${styles.flagIcon} ${styles[flag]}`}><Image src={`/assets/clinical/hero-flag-${flag}.svg`} alt="" width={14} height={14} /></span>}
      {label}{detail && <small>{detail}</small>}
    </span>
    <i className={on ? styles.switchOn : ""} />
  </span>;
}

type DayState = "past" | "booked" | "picked" | "off";

/** A cal.com-style picker: the month on the left, the picked day's open times on the right. `startWeekday` is the
    weekday of the 1st (0 = Sunday). Days before `firstOpen`, Sundays and `closed` days can't be picked. */
export function DatePicker({ month, startWeekday, length, firstOpen, picked, booked, closed = [], dayLabel, times, time }: {
  month: string; startWeekday: number; length: number; firstOpen: number; picked: number; booked?: number;
  closed?: number[]; dayLabel: string; times: string[]; time: string;
}) {
  const cells: { date: number | ""; state?: DayState }[] = [
    ...Array.from({ length: startWeekday }, () => ({ date: "" as const })),
    ...Array.from({ length }, (_, index) => {
      const date = index + 1;
      const sunday = (startWeekday + index) % 7 === 0;
      const state: DayState | undefined = date === booked ? "booked" : date < firstOpen ? "past" : date === picked ? "picked" : sunday || closed.includes(date) ? "off" : undefined;
      return { date, state };
    }),
  ];
  return <div className={styles.picker}>
    <div className={styles.month}>
      <div className={styles.monthHead}><b>{month}</b><span><Glyph name="left" /><Glyph name="right" /></span></div>
      <div className={styles.days}>
        {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => <span key={index} className={styles.weekday}>{day}</span>)}
        {cells.map((cell, index) => <span key={index} className={`${styles.day} ${cell.state ? styles[cell.state] : ""}`}>{cell.date}</span>)}
      </div>
    </div>
    <div className={styles.times}>
      <b>{dayLabel}</b>
      {times.map((slot) => <span key={slot} className={`${styles.time} ${slot === time ? styles.timeOn : ""}`}>{slot}</span>)}
    </div>
  </div>;
}


export type Tone = "ok" | "info" | "warn" | "danger" | "neutral";

export function Badge({ tone = "neutral", children }: { tone?: Tone; children: ReactNode }) {
  return <span className={`${styles.badge} ${styles[`badge_${tone}`]}`}>{children}</span>;
}

/** List rows: a title with an optional detail line, an optional leading tile and a trailing badge or value. */
export function Rows({ rows }: { rows: { title: string; detail?: string; lead?: ReactNode; tone?: Tone; status?: string; value?: string }[] }) {
  return <span className={styles.rows}>{rows.map((row) => <span key={row.title} className={styles.rowItem}>
    {row.lead && <span className={styles.rowLead}>{row.lead}</span>}
    <span className={styles.rowText}><b>{row.title}</b>{row.detail && <small>{row.detail}</small>}</span>
    {row.status && <Badge tone={row.tone}>{row.status}</Badge>}
    {row.value && <span className={styles.rowValue}>{row.value}</span>}
  </span>)}</span>;
}

/** Horizontal bars, scaled to the largest value. */
export function Bars({ rows, unit = "" }: { rows: [string, number][]; unit?: string }) {
  const max = Math.max(...rows.map(([, value]) => value));
  return <span className={styles.bars}>{rows.map(([label, value]) => <span key={label} className={styles.barRow}>
    <span>{label}</span>
    <i><b style={{ width: `${Math.max(4, (value / max) * 100)}%` }} /></i>
    <em>{unit}{value.toLocaleString("en-CA")}</em>
  </span>)}</span>;
}

export function Segment({ options, value }: { options: string[]; value: string }) {
  return <span className={styles.segment} style={{ gridTemplateColumns: `repeat(${options.length}, minmax(0, 1fr))` }}>
    {options.map((option) => <i key={option} className={option === value ? styles.segmentOn : ""}>{option}</i>)}
  </span>;
}

export function Radios({ label, options, value }: { label: string; options: string[]; value: string }) {
  return <div className={styles.radioGroup}>
    <span className={styles.label}>{label}</span>
    <span className={styles.radioRow} style={{ gridTemplateColumns: `repeat(${options.length}, minmax(0, 1fr))` }}>
      {options.map((option) => <span key={option} className={`${styles.radio} ${option === value ? styles.radioOn : ""}`}><i />{option}</span>)}
    </span>
  </div>;
}

export function Stat({ label, value, note, tone }: { label: string; value: string; note?: string; tone?: Tone }) {
  return <span className={styles.stat}><small>{label}</small><b>{value}</b>{note && <Badge tone={tone ?? "ok"}>{note}</Badge>}</span>;
}

export function Avatar({ initials }: { initials: string }) {
  return <span className={styles.avatar}>{initials}</span>;
}

export function Head({ title, note }: { title: string; note?: string }) {
  return <p className={styles.panelHead}>{title}{note && <small>{note}</small>}</p>;
}
