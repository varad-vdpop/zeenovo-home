import AppScreen, { clinicalNav, clinicalNavBottom } from "./AppScreen";
import styles from "./MedsCheckImportPreview.module.css";

// ZeeNovo Clinical's MedsCheck review at its medication history step, for the Integrations page's "Data in" section:
// the Kroll medication history PDF imported, each medicine matched to Health Canada's Drug Product Database, and the
// database search beside it. Names and medicines are sample data.

const icon = {
  check: "m6 12.5 4 4 8-9",
  file: "M7 3h7l4 4v14H7zM14 3v4h4",
  search: "M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm9 16-4-4",
  sync: "M20 11a8 8 0 0 0-14.7-4M4 4v4h4m-4 5a8 8 0 0 0 14.7 4M20 20v-4h-4",
} as const;

function Glyph({ name }: { name: keyof typeof icon }) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d={icon[name]} /></svg>;
}

const steps = ["Medication history", "Review", "Ontario forms", "Provider notification", "Recall"];

const medicines = [
  ["Atorvastatin 20 mg", "Tablet · once daily"],
  ["Metformin 500 mg", "Tablet · twice daily"],
  ["Ramipril 5 mg", "Capsule · once daily"],
  ["Ibuprofen 200 mg", "Tablet · as needed (OTC)"],
] as const;

const results = [["Ramipril 5 mg", "Capsule · oral"], ["Ramipril 10 mg", "Capsule · oral"], ["Ramipril 2.5 mg", "Capsule · oral"]] as const;

export default function MedsCheckImportPreview() {
  return <AppScreen className={styles.panel} nav={clinicalNav} navBottom={clinicalNavBottom} active="Patients" crumbs={["Patients", "Margaret Chen", "MedsCheck Annual"]} initials="AK"
    label="A MedsCheck review in ZeeNovo Clinical at the medication history step: a Kroll medication history PDF imported with four medicines, each matched to Health Canada's Drug Product Database, and the database search beside it">
    <div className={styles.head}>
      <div><b>MedsCheck Annual</b><small>Margaret Chen · DOB 1951-03-14</small></div>
    </div>

    <ol className={styles.steps}>
      {steps.map((step, index) => <li key={step} className={index === 0 ? styles.current : ""}><span className={styles.dot}>{index + 1}</span>{step}</li>)}
    </ol>

    <div className={styles.body}>
      <section className={styles.card}>
        <div className={styles.file}>
          <span className={styles.fileIcon}><Glyph name="file" /></span>
          <span><b>kroll-medication-history.pdf</b><small>Imported · 4 medicines found</small></span>
          <i className={styles.ok}><Glyph name="check" />Imported</i>
        </div>
        <ul className={styles.meds}>
          {medicines.map(([name, detail]) => <li key={name}>
            <span><b>{name}</b><small>{detail}</small></span>
            <i className={styles.match}><Glyph name="check" />Matched in DPD</i>
          </li>)}
        </ul>
      </section>

      <section className={styles.card}>
        <p className={styles.cardTitle}>Health Canada Drug Product Database</p>
        <span className={styles.search}><Glyph name="search" />ramipril</span>
        <ul className={styles.results}>{results.map(([name, detail]) => <li key={name}><b>{name}</b><small>{detail}</small></li>)}</ul>
        <p className={styles.sync}><Glyph name="sync" />About 58,000 products · synced daily</p>
      </section>
    </div>
  </AppScreen>;
}
