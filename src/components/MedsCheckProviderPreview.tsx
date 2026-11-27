import AppScreen, { clinicalNav, clinicalNavBottom } from "./AppScreen";
import styles from "./MedsCheckProviderPreview.module.css";

// ZeeNovo Clinical's MedsCheck review at its provider notification step, redrawn for the Medication Review page's
// "Keep the prescriber in the loop" section: the family physician on file and the fax log on the left, and the
// notification generated from the review, ready to fax, on the right. Names, numbers and medicines are sample data
// (555 numbers).

const icon = {
  check: "m6 12.5 4 4 8-9",
  send: "m21 3-9.5 9.5M21 3l-6.5 18-3-8.5L3 9.5z",
  download: "M12 4v11m-5-5 5 5 5-5M5 20h14",
  phone: "M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2",
  id: "M4 5h16v14H4zM8 10h3m-3 4h8m0-4h.01",
  clock: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 4v5l3 2",
} as const;

function Glyph({ name }: { name: keyof typeof icon }) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d={icon[name]} /></svg>;
}

const steps = ["Medication history", "Review", "Ontario forms", "Provider notification", "Recall"];
const current = 3;

const recommendations = [
  ["Ibuprofen 200 mg (OTC)", "Taken with ramipril. Suggest acetaminophen instead."],
  ["Atorvastatin 20 mg", "Confirm continued need at next visit."],
  ["Metformin 500 mg", "Doses missed at lunch. Moved to breakfast and supper."],
] as const;

export default function MedsCheckProviderPreview() {
  return <AppScreen className={styles.panel} nav={clinicalNav} navBottom={clinicalNavBottom} active="Patients" crumbs={["Patients", "Margaret Chen", "MedsCheck Annual"]} initials="AK"
    label="A MedsCheck Annual review in ZeeNovo Clinical at the provider notification step: the family physician on file, the notification generated from the review with three recommendations, and the fax log showing it delivered">
    <div className={styles.head}>
      <b>MedsCheck Annual</b><span className={styles.status}><Glyph name="check" />Forms complete</span>
      <small>Margaret Chen · DOB 1951-03-14 · Reviewed Dec 10</small>
    </div>

    <ol className={styles.steps}>
      {steps.map((step, index) => <li key={step} className={index < current ? styles.done : index === current ? styles.current : ""}>
        <span className={styles.dot}>{index < current ? <Glyph name="check" /> : index + 1}</span>{step}
      </li>)}
    </ol>

    <div className={styles.body}>
      <section className={styles.card}>
          <div className={styles.cardHead}><p className={styles.label}>Family physician</p><span className={styles.onFile}>On file</span></div>
          <div className={styles.doctor}>
            <span className={styles.initials}>MT</span>
            <span><b>Dr. Maya Thompson</b><small>Family Medicine · Toronto</small></span>
          </div>
          <div className={styles.fields}>
            <span><small>CPSO number</small><Glyph name="id" />48291</span>
            <span><small>Fax</small><Glyph name="phone" />(416) 555-0182</span>
          </div>
          <p className={styles.hint}>Looked up once, reused for every fax.</p>
      </section>

      <section className={`${styles.card} ${styles.note}`}>
        <div className={styles.noteHead}>
          <p className={styles.label}>Provider notification</p>
          <b>Pharmacist&apos;s notification to prescriber</b>
          <span className={styles.generated}><Glyph name="clock" />Generated from the review</span>
        </div>
        <dl className={styles.meta}>
          <div><dt>To</dt><dd>Dr. Maya Thompson</dd></div>
          <div><dt>From</dt><dd>Northfield Pharmacy</dd></div>
          <div><dt>Patient</dt><dd>Margaret Chen</dd></div>
          <div><dt>Review</dt><dd>Annual · Dec 10</dd></div>
        </dl>
        <p className={styles.label}>Recommendations</p>
        <ol className={styles.recs}>
          {recommendations.map(([drug, text]) => <li key={drug}><b>{drug}</b><span>{text}</span></li>)}
        </ol>
        <div className={styles.actions}>
          <span className={styles.primary}><Glyph name="send" />Fax to Dr. Thompson</span>
          <span className={styles.outline}><Glyph name="download" />PDF</span>
        </div>
      </section>

      <section className={`${styles.card} ${styles.logCard}`}>
        <p className={styles.label}>Fax log</p>
        <ul className={styles.log}>
          <li><b>Provider notification</b><small>To Dr. Thompson · 2:41 pm</small><i className={styles.delivered}>Delivered</i></li>
          <li><b>Personal medication record</b><small>To Dr. Thompson · 2:41 pm</small><i className={styles.delivered}>Delivered</i></li>
          <li><b>Take-home summary</b><small>Printed for the patient</small><i className={styles.printed}>Printed</i></li>
        </ul>
      </section>
    </div>
  </AppScreen>;
}
