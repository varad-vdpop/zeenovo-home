"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import styles from "./ProductUiPreviews.module.css";

function Icon({ name }: { name: string }) {
  return <Image className={styles.icon} src={`/assets/ui-previews/${name}.svg`} alt="" width={24} height={24} />;
}

const sopRows = [
  ["Medication Dispensing", "Dispensing", "All Pharmacies", "v2"],
  ["Controlled Substance Handling", "Compliance", "Ontario", "v1"],
  ["Patient Counselling", "Clinical", "All Pharmacies", "v3"],
  ["Compounding Safety Standards", "Safety", "Ontario", "v1"],
];
const sidebarRows = [
  ["Pharmacies", "/assets/hero-ui/pharmacies.svg"],
  ["SOP Templates", "/assets/hero-ui/document.svg"],
  ["Medicines", "/assets/hero-ui/medicines.svg"],
  ["Drugs", "/assets/hero-ui/drugs.svg"],
  ["Doctors", "/assets/hero-ui/doctor.svg"],
  ["Analytics", "/assets/ui-previews/analytics.svg"],
  ["Pending Approvals", "/assets/ui-previews/clock.svg"],
  ["Category Settings", "/assets/ui-previews/settings.svg"],
];

export function AssureDashboardPreview() {
  const [activeRow, setActiveRow] = useState(1);
  const [instant, setInstant] = useState(false);
  const [query, setQuery] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);
  const reducedMotion = useReducedMotion();
  const visibleRows = sopRows.filter(row => row.join(" ").toLowerCase().includes(query.trim().toLowerCase()));

  return <div className="assure-dashboard">
    <div className={styles.sopPanel} role="group" aria-label="ZeeNovo Assure dashboard preview">
      <div className={styles.sopHeader}>
        <Image className={styles.sopLogo} src="/assets/ui-previews/assure-logo.png" alt="" width={119} height={36} />
        <div className={styles.breadcrumb}>Home <span>›</span><b>SOP Templates</b></div>
      </div>
      <div className={styles.sopSidebar}>
        <motion.div className={styles.sopIndicator} aria-hidden="true" initial={false}
          animate={{ transform: `translateY(${activeRow * 6.2}cqw)` }}
          transition={{ duration: reducedMotion || instant ? 0 : 0.22, ease: [0.77, 0, 0.175, 1] }} />
        {sidebarRows.map(([label, src], index) => <button type="button" key={label}
          className={`${styles.sopNavRow} ${activeRow === index ? styles.sopSelected : ""}`}
          tabIndex={index > 5 ? -1 : 0} aria-hidden={index > 5 ? true : undefined}
          onMouseEnter={() => { if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) { setInstant(false); setActiveRow(index); } }}
          onFocus={event => { if (event.currentTarget.matches(":focus-visible")) { setInstant(true); setActiveRow(index); } }}
          onClick={event => { setInstant(event.detail === 0); setActiveRow(index); }}>
          <Image src={src} alt="" width={16} height={16} /><span>{label}</span>
        </button>)}
      </div>
      <div className={styles.sopContent}>
        <div className={styles.sopSearch}>
          <button type="button" className={styles.searchButton} aria-label="Focus SOP search" onClick={() => searchRef.current?.focus()}><Icon name="search" /></button>
          <input ref={searchRef} type="search" aria-label="Search SOP templates" placeholder="Search SOP templates..." value={query} onChange={event => setQuery(event.target.value)} />
        </div>
        <div className={styles.sopFilters}>
          <div className={styles.filterSelected}><Icon name="filter" />View Filters</div>
          <div>Category - Dispensing</div><div>Province - Ontario</div>
        </div>
        <table className={styles.sopTable}>
          <thead><tr>{["SOP title", "Category", "Province", "Latest version"].map(label => <th key={label}>{label}</th>)}</tr></thead>
          <tbody>{visibleRows.map(row => <tr key={row[0]}>{row.map((value, index) => <td key={index}>{value}</td>)}</tr>)}
            {visibleRows.length === 0 && <tr><td colSpan={4}>No matching templates</td></tr>}
          </tbody>
        </table>
        <div className={styles.sopPagination}>10 <span>50</span> 100</div>
      </div>
    </div>
  </div>;
}

const measures = [
  "Drink warm fluids to stay hydrated and soothe your throat.",
  "Inhale steam to relieve nasal congestion.",
  "Gargle with salt water to ease a sore throat.",
  "Use paracetamol or decongestants as needed.",
];

export function TreatmentPreview() {
  const [checked, setChecked] = useState([true, false, false, false]);
  return <div className="treatment-ui">
    <div className={styles.treatmentPanel} role="group" aria-label="Guided treatment preview">
      <div className={styles.treatmentTabs}>
        <div className={styles.treatmentSelected}><Icon name="medicine-add" />Add medicines</div>
        <div><Icon name="self-care" />Self care measures</div>
      </div>
      <div className={styles.measureList}>
        <div className={styles.measureHeading}>Select a few<Icon name="chevron" /></div>
        <div className={styles.measureSearch}><div><Icon name="find" />Find an item</div></div>
        {measures.map((label, index) => <label key={label} className={`${styles.measureRow} ${checked[index] ? styles.measureSelected : ""}`}>
          <span className={styles.checkbox}>
            <input type="checkbox" checked={checked[index]} onChange={event => {
              const isChecked = event.target.checked;
              setChecked(previous => previous.map((value, position) => position === index ? isChecked : value));
            }} />
            <Icon name="check" />
          </span><div>{label}</div>
        </label>)}
      </div>
    </div>
  </div>;
}
