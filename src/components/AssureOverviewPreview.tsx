import Image from "next/image";
import styles from "./AssureOverviewPreview.module.css";

// The ZeeNovo Assure dashboard, scaled down for the home "ZeeNovo Assure" product card.
// Drawn natively from the product screen: sidebar, top bar, welcome header, "Needs your attention",
// practice assessments and platform updates. Names and counts are sample data.

const icon = {
  dashboard: "M4 4h7v7H4zM13 4h7v4h-7zM13 10h7v10h-7zM4 13h7v7H4z",
  incidents: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 5v5m0 3h.01",
  meetings: "M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5 8a5 5 0 0 1 10 0m2-8a3 3 0 1 0 0-6m1 14a5 5 0 0 0-3-4.6",
  assessments: "M9 4h6v3H9zM7 5.5H5.5V20h13V5.5H17M8.5 12l2 2 4-4",
  team: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 8a7 7 0 0 1 14 0",
  sops: "M7 3h7l4 4v14H7zM14 3v4h4M10 12h5m-5 4h5",
  analytics: "M5 20V10m7 10V4m7 16v-7",
  billing: "M3 6h18v12H3zM3 10h18",
  settings: "M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm7.4 3a7.4 7.4 0 0 0-.1-1.2l2-1.6-2-3.4-2.4.9a7.6 7.6 0 0 0-2-1.2L14.5 3h-5l-.4 2.5a7.6 7.6 0 0 0-2 1.2l-2.4-.9-2 3.4 2 1.6a7.4 7.4 0 0 0 0 2.4l-2 1.6 2 3.4 2.4-.9a7.6 7.6 0 0 0 2 1.2l.4 2.5h5l.4-2.5a7.6 7.6 0 0 0 2-1.2l2.4.9 2-3.4-2-1.6c.1-.4.1-.8.1-1.2Z",
  plus: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 5v8m-4-4h8",
  arrow: "M7 17 17 7M8.5 7H17v8.5",
  chevron: "m9.5 6 6 6-6 6",
  refresh: "M20 11a8 8 0 0 0-14.7-4M4 4v4h4m-4 5a8 8 0 0 0 14.7 4M20 20v-4h-4",
  warning: "M12 4 2.5 20h19L12 4Zm0 6v4m0 3h.01",
} as const;

function Glyph({ name }: { name: keyof typeof icon }) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d={icon[name]} /></svg>;
}

const nav = [
  ["Dashboard", "dashboard"],
  ["Incidents", "incidents"],
  ["CQI Meetings", "meetings"],
  ["Pharmacy Assessments", "assessments"],
  ["Team assessments", "team"],
  ["SOPs", "sops"],
  ["Analytics", "analytics"],
  ["Billing", "billing"],
  ["Settings", "settings"],
] as const;

export default function AssureOverviewPreview() {
  return (
    <div className="assure-dashboard">
      <div className={styles.panel} role="img" aria-label="ZeeNovo Assure dashboard: items that need attention, practice assessments and platform updates">
        <div className={styles.topbar}>
          <Image className={styles.logo} src="/assets/ui-previews/assure-logo.png" alt="" width={119} height={36} />
          <span className={styles.avatar}>VP</span>
        </div>

        <div className={styles.sidebar}>
          {nav.map(([label, name], index) => (
            <span key={label} className={index === 0 ? styles.navActive : undefined}><Glyph name={name} />{label}</span>
          ))}
        </div>

        <div className={styles.main}>
          <div className={styles.header}>
            <div>
              <p className={styles.eyebrow}><i />Your compliance workspace</p>
              <p className={styles.welcome}>Welcome back, Pharmacy!</p>
              <p className={styles.sub}>Here are the items that need your attention today.</p>
            </div>
            <div className={styles.actions}>
              <span><Glyph name="plus" />Report an incident</span>
              <span><Glyph name="assessments" />Pharmacy Assessments</span>
            </div>
          </div>

          <div className={styles.grid}>
            <div className={styles.attention}>
              <div className={styles.cardHead}>
                <p><Glyph name="sops" />Needs your attention</p>
                <span className={styles.count}>2 open</span>
              </div>
              <p className={styles.cardSub}>Open SOP training, incident reports and CQI follow-ups across your pharmacy.</p>
              <div className={styles.items}>
                <div className={styles.item}>
                  <span className={styles.itemIcon}><Glyph name="meetings" /></span>
                  <div><b>Monthly CQI meeting</b><small>CQI follow-up scheduled, not yet complete</small></div>
                  <span className={styles.overdue}><Glyph name="warning" />Overdue by 3 days</span>
                  <Glyph name="chevron" />
                </div>
                <div className={styles.item}>
                  <span className={styles.itemIcon}><Glyph name="incidents" /></span>
                  <div><b>Incident INC-0214</b><small>Draft incident report waiting to be completed</small></div>
                  <span className={styles.neutral}>No deadline</span>
                  <Glyph name="chevron" />
                </div>
              </div>
              <span className={styles.link}>View all SOPs <Glyph name="arrow" /></span>
            </div>

            <div className={styles.side}>
              <div className={styles.oversight}>
                <p className={styles.oversightLabel}><Glyph name="team" />Team oversight</p>
                <p className={styles.oversightTitle}>Practice assessments</p>
                <p className={styles.oversightSub}>See who is complete, overdue, or needs follow-up training.</p>
                <div className={styles.oversightFoot}>
                  <span><b>6</b> complete <b>1</b> overdue</span>
                  <span className={styles.oversightButton}>Open overview <Glyph name="arrow" /></span>
                </div>
              </div>
              <div className={styles.updates}>
                <p className={styles.updatesTitle}><Glyph name="refresh" />Platform updates</p>
                <p className={styles.cardSub}>New SOPs and updates from the ZeeNovo library.</p>
                <div className={styles.update}><span className={styles.itemIcon}><Glyph name="sops" /></span><div><b>Technical SOPs</b><small>New SOP</small></div><Glyph name="chevron" /></div>
                <div className={styles.update}><span className={styles.itemIcon}><Glyph name="sops" /></span><div><b>Governance SOP manager</b><small>New SOP</small></div><Glyph name="chevron" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
