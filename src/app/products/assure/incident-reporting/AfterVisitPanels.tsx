"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

const nodeAsset = (name: string) => `/assets/incident-reporting/nodes/${name}`;

const incidents = [
  ["Drug Therapy Contraindication", "ZA-INC/1/26/0004 · Sep 15, 2026", "Resolved"],
  ["Allergy to Penicillin", "ZA-INC/1/29/0012 · Oct 20, 2026", "Active"],
  ["Severe Liver Impairment", "ZA-INC/1/30/0035 · Nov 05, 2026", "Under Review"],
];

const reportItems = [
  ["risk.svg", "Risk Score", "risk"],
  ["strength.svg", "Strengths Identified", "strength"],
  ["gap.svg", "Gaps Identified", "risk"],
  ["action.svg", "Action Plan Flow", "action"],
];

export default function AfterVisitPanels() {
  const [exported, setExported] = useState(false);

  useEffect(() => {
    if (!exported) return;
    const timer = window.setTimeout(() => setExported(false), 2400);
    return () => window.clearTimeout(timer);
  }, [exported]);

  return (
    <div className={styles.visitCards}>
      <article className={`${styles.visitUiCard} ${styles.crossProductCard}`}>
        <Image className={styles.afterOrbit} src={nodeAsset("after-orbit.svg")} alt="" width={638} height={524} />
        <div className={styles.visitPanelCopy}><h3>Cross product insight</h3><p>Clinical volume, website bookings and safety trends side by side.</p></div>
        <div className={styles.incidentList}>
          <div className={styles.incidentListHeader}>
            <div><strong>Incident Reports</strong><span>Last 30 days</span></div>
            <button type="button"><Image src={nodeAsset("add.svg")} alt="" width={14} height={14} />Add report</button>
          </div>
          <div className={styles.incidentRows}>
            {incidents.map(([title, meta, status], index) => (
              <div className={styles.incidentRow} style={{ "--row-delay": `${index * 0.16}s` } as React.CSSProperties} key={title}>
                <div className={styles.incidentIdentity}>
                  <span className={styles.statusIcon}><Image src={nodeAsset("status-check.svg")} alt="" width={15} height={15} /></span>
                  <div><strong>{title}</strong><small>{meta}</small></div>
                </div>
                <span className={styles.statusPill}>{status}</span>
              </div>
            ))}
          </div>
        </div>
      </article>

      <article className={`${styles.visitUiCard} ${styles.exportCard}`}>
        <div className={styles.visitPanelCopy}><h3>Exports for everyone</h3><p>One click reports in the format your board, banner or college expects.</p></div>
        <div className={styles.exportStage}>
          <Image className={styles.exportOrbit} src={nodeAsset("export-orbit.svg")} alt="" width={638} height={638} />
          <div className={styles.exportReport}>
            <p>Comprehensive Patient Information Report</p>
            <div className={styles.reportItems}>
              {reportItems.map(([icon, label, tone], index) => (
                <div className={styles.reportItem} style={{ "--item-delay": `${index * 0.13}s` } as React.CSSProperties} key={label}>
                  <span className={styles[tone]}><Image src={nodeAsset(icon)} alt="" width={16} height={16} /></span><strong>{label}</strong>
                </div>
              ))}
            </div>
            <button type="button" aria-label="Preview report export" className={exported ? styles.manualSuccess : ""} onClick={() => setExported(true)}><span className={styles.exportDefault}><Image src={nodeAsset("export.svg")} alt="" width={24} height={24} />Export Report</span><span className={styles.exportDone}>✓ Report exported</span></button>
          </div>
        </div>
      </article>
    </div>
  );
}
