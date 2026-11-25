import styles from "./ClinicalFlowPreview.module.css";

// The Minor Ailments appointment flow from ZeeNovo Clinical, redrawn for the Clinical page's Documentation card:
// the visit's steps on the left and its Communication step, faxing each document, on the right. Names and numbers are
// sample data (555 numbers).

const steps = ["Profile", "Patient screening", "Prescription", "Family physician", "Self-care measures", "Complete", "Communication", "Auto follow-up"];
const active = 6;

const icon = {
  check: "m6 12.5 4 4 8-9",
  doc: "M7 3h7l4 4v14H7zM14 3v4h4M10 12h5m-5 4h5",
  rx: "M7 3h7l4 4v14H7zM14 3v4h4M10 11v6m0-6h2.5a1.5 1.5 0 0 1 0 3H10m2 0 3 3",
  physician: "M12 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-6 9a6 6 0 0 1 12 0",
  send: "m21 3-9.5 9.5M21 3l-6.5 18-3-8.5L3 9.5z",
  download: "M12 4v11m-5-5 5 5 5-5M5 20h14",
} as const;

function Glyph({ name }: { name: keyof typeof icon }) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d={icon[name]} /></svg>;
}

// The Communication step: each document the visit produced, its fax recipient and its send status.
const faxes = [
  { title: "Appointment details", icon: "doc", recipient: "Your pharmacy", number: "519-555-0142", sent: false },
  { title: "Prescription", icon: "rx", recipient: "Your pharmacy", number: "519-555-0142", sent: false },
  { title: "Doctor notification", icon: "physician", recipient: "Dr. Lee", number: "519-555-0187", sent: true },
] as const;

export default function ClinicalFlowPreview() {
  return <div className={styles.frame}>
    <div className={styles.panel} role="img" aria-label="Minor ailment appointment at the communication step: appointment details and prescription ready to fax, and the doctor notification faxed to the family physician">
      <ol className={styles.steps}>
        {steps.map((step, index) => {
          const state = index < active ? styles.done : index === active ? styles.current : "";
          return <li className={state} key={step}>
            <span className={styles.dot}>{index < active ? <Glyph name="check" /> : index + 1}</span>
            <span>{step}</span>
          </li>;
        })}
      </ol>

      <div className={styles.detail}>
        <div className={styles.fax}>
          <p className={styles.faxHead}>Send fax</p>
          <ul className={styles.docs}>
            {faxes.map((fax) => <li key={fax.title}>
              <span className={styles.docIcon}><Glyph name={fax.icon} /></span>
              <b className={styles.docName}>{fax.title}</b>
              <span className={styles.recipient}><small>{fax.recipient}</small>{fax.number}</span>
              {fax.sent
                ? <span className={`${styles.send} ${styles.sent}`}><Glyph name="check" />Sent</span>
                : <span className={styles.send}><Glyph name="send" />Send fax</span>}
            </li>)}
          </ul>
        </div>
        <div className={styles.footer}>
          <span>Fax status saved to the visit</span>
          <span className={styles.button}><Glyph name="download" />Download all</span>
        </div>
      </div>
    </div>
  </div>;
}
