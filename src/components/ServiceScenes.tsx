import styles from "./ServiceScenes.module.css";

// Native UI for the two newer cards in the home "Guided Clinical Care" grid (POCT, Pharmacy Forms).
// Like the other cards in that grid, the panel is flat, centred with equal side insets and runs off the bottom edge.
// Facts match the catalogue: POCT records blood glucose, blood pressure, haemoglobin and COVID-19 results with a
// physician report to fax; the forms library holds 27 national and provincial forms, pre-filled where possible.

export function PoctScene() {
  return (
    <div className={styles.scene} role="img" aria-label="A blood glucose result recorded on the visit, with a physician report ready to fax">
      <div className={styles.card}>
        <p className={styles.label}>Point-of-care test</p>
        <p className={styles.title}>Blood glucose</p>
        <dl className={styles.rows}>
          <div><dt>Result</dt><dd>5.4 mmol/L</dd></div>
          <div><dt>Sample</dt><dd>Fingerstick, fasting</dd></div>
          <div><dt>Read at</dt><dd>10:42</dd></div>
          <div><dt>Physician report</dt><dd className={styles.ready}>Ready to fax</dd></div>
        </dl>
      </div>
    </div>
  );
}

const forms = [
  { name: "Minor ailment record", status: "Signed", tone: styles.ok },
  { name: "Physician notification", status: "Faxed", tone: styles.info },
  { name: "Vaccine consent", status: "Draft", tone: styles.draft },
];

export function FormsScene() {
  return (
    <div className={`${styles.scene} ${styles.wide}`} role="img" aria-label="Pharmacy forms filled from the patient record, signed and faxed">
      <div className={styles.card}>
        <p className={styles.label}>Pharmacy forms</p>
        <p className={styles.title}>Pre-filled from the patient record</p>
        <ul className={styles.list}>
          {forms.map(form => (
            <li key={form.name}>
              <span className={styles.doc} aria-hidden="true" />
              <span className={styles.formName}>{form.name}</span>
              <span className={`${styles.chip} ${form.tone}`}>{form.status}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
