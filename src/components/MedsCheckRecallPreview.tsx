import AppScreen, { clinicalNav, clinicalNavBottom } from "./AppScreen";
import styles from "./MedsCheckRecallPreview.module.css";

// ZeeNovo Clinical's MedsCheck recall queue, redrawn for the Medication Review page's "Bring patients back when
// they're due" section: due, invited and booked counts, and the patients coming due with where each one stands.
// Names and dates are sample data.

const icon = {
  send: "m21 3-9.5 9.5M21 3l-6.5 18-3-8.5L3 9.5z",
  due: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 4v5l3 2",
  mail: "M3 5h18v14H3zM3 6l9 7 9-7",
  booked: "M8 2v4m8-4v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm4 11 2 2 4-4",
} as const;

function Glyph({ name }: { name: keyof typeof icon }) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d={icon[name]} /></svg>;
}

const stats = [
  { label: "Due", value: "4", glyph: "due", tone: "due" },
  { label: "Invited", value: "6", glyph: "mail", tone: "invited" },
  { label: "Booked", value: "9", glyph: "booked", tone: "booked" },
] as const;

const patients = [
  { name: "Margaret Chen", review: "MedsCheck Annual", due: "Dec 18", status: "Due", note: "Not invited yet", tone: "due" },
  { name: "Robert Singh", review: "Diabetes Annual", due: "Dec 20", status: "Invited", note: "Email sent Dec 8", tone: "invited" },
  { name: "Linda Okafor", review: "MedsCheck Follow-up", due: "Dec 22", status: "Booked", note: "Dec 21 · 10:00 am", tone: "booked" },
  { name: "James Wilson", review: "MedsCheck Annual", due: "Jan 4", status: "Due", note: "Not invited yet", tone: "due" },
  { name: "Aisha Rahman", review: "Diabetes Education", due: "Jan 9", status: "Invited", note: "Email sent Dec 9", tone: "invited" },
] as const;

export default function MedsCheckRecallPreview() {
  return <AppScreen className={styles.panel} nav={clinicalNav} navBottom={clinicalNavBottom} active="MedsCheck" crumbs={["MedsCheck", "Recall queue"]} initials="AK"
    label="The MedsCheck recall queue in ZeeNovo Clinical: 4 patients due, 6 invited by email and 9 booked, with the next five patients coming due and their status">
    <div className={styles.head}>
      <div><b>Recall queue</b><small>MedsCheck reviews coming due.</small></div>
      <span className={styles.primary}><Glyph name="send" />Invite all due (4)</span>
    </div>

    <div className={styles.stats}>
      {stats.map((stat) => <span key={stat.label} className={`${styles.stat} ${styles[stat.tone]}`}>
        <i><Glyph name={stat.glyph} /></i><span><b>{stat.value}</b><small>{stat.label}</small></span>
      </span>)}
    </div>

    <div className={styles.table}>
      <div className={styles.tableHead}><span>Patient</span><span>Next review</span><span>Status</span></div>
      {patients.map((patient) => <div key={patient.name} className={styles.row}>
        <span><b>{patient.name}</b><small>{patient.review}</small></span>
        <span className={styles.due}>{patient.due}</span>
        <span className={styles.state}><i className={styles[patient.tone]}>{patient.status}</i><small>{patient.note}</small></span>
      </div>)}
    </div>
  </AppScreen>;
}
