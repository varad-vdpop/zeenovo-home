import AppScreen, { assureLogo, assureNav } from "./AppScreen";
import styles from "./StaffCompetencyPreview.module.css";

// Assure's team assessments, for the SOPs and Training page's "Assess staff on the work they do" section: the role
// tabs, each person's progress, score and risk level, and one person's module scores with the SOP suggested as a
// refresher. Names and scores are sample data.

const icon = {
  plus: "M12 5v14M5 12h14",
  sop: "M7 3h7l4 4v14H7zM14 3v4h4M10 12h5m-5 4h5",
  send: "m21 3-9.5 9.5M21 3l-6.5 18-3-8.5L3 9.5z",
} as const;

function Glyph({ name }: { name: keyof typeof icon }) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d={icon[name]} /></svg>;
}

const roles = ["Pharmacists and managers", "Pharmacy technicians", "Pharmacy assistants"];

const staff = [
  { name: "Priya Shah", initials: "PS", role: "Pharmacist", done: 14, score: 92, risk: "Low", tone: "low" },
  { name: "Daniel Wong", initials: "DW", role: "Pharmacy manager", done: 14, score: 74, risk: "Moderate", tone: "moderate" },
  { name: "Sara Ahmed", initials: "SA", role: "Pharmacist", done: 9, score: 61, risk: "High", tone: "high" },
] as const;

const modules = [
  ["Clinical decisions", 88], ["Medication safety", 58], ["Documentation", 81], ["Patient communication", 90], ["Incident management", 72],
] as const;

export default function StaffCompetencyPreview() {
  return <AppScreen className={styles.panel} nav={assureNav} logo={assureLogo} active="Team assessments" crumbs={["Home", "Team assessments"]} initials="VP"
    label="Assure team assessments for pharmacists and managers: progress, score and risk level for each person, with one manager's module scores and an SOP suggested as a refresher for medication safety">
    <div className={styles.head}>
      <div><b>Team assessments</b><small>43 modules · 258 questions · scored by module</small></div>
      <span className={styles.primary}><Glyph name="plus" />Assign assessment</span>
    </div>

    <span className={styles.tabs}>{roles.map((role, index) => <i key={role} className={index === 0 ? styles.tabOn : ""}>{role}</i>)}</span>

    <section className={styles.card}>
      <div className={styles.tableHead}><i>Staff member</i><i>Score</i><i>Risk level</i><i>Modules</i></div>
      {staff.map((person) => <div key={person.name} className={`${styles.row} ${person.name === "Daniel Wong" ? styles.selected : ""}`}>
        <span className={styles.person}><i>{person.initials}</i><span><b>{person.name}</b><small>{person.role}</small></span></span>
        <b className={styles.score}>{person.score}%</b>
        <em className={`${styles.risk} ${styles[person.tone]}`}>{person.risk}</em>
        <span className={styles.progress}><small>{person.done} of 14</small><i><em style={{ width: `${(person.done / 14) * 100}%` }} /></i></span>
      </div>)}
    </section>

    <section className={styles.card}>
      <p className={styles.cardTitle}>Daniel Wong · module scores</p>
      <ul className={styles.modules}>{modules.map(([label, value]) => <li key={label} className={value < 65 ? styles.low : ""}>
        <span>{label}<b>{value}%</b></span><i><em style={{ width: `${value}%` }} /></i>
      </li>)}</ul>
      <div className={styles.suggest}>
        <span className={styles.sop}><span><Glyph name="sop" /></span><span><small>Suggested refresher · below the 65% pass mark</small><b>Medication Dispensing SOP v2</b></span></span>
        <span className={styles.assign}><Glyph name="send" />Assign to Daniel</span>
      </div>
    </section>
  </AppScreen>;
}
