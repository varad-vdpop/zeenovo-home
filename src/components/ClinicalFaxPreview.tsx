import AppScreen, { clinicalNav, clinicalNavBottom } from "./AppScreen";
import styles from "./ClinicalFaxPreview.module.css";

// ZeeNovo Clinical's appointment at its Communication step, for the Documentation and eFax page's "Your choice on every
// visit" section: the visit's steps down the left, and each document the visit produced with its recipient and a
// choice to fax or download it. Numbers are sample data (555 numbers).

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

const steps = ["Profile", "Patient screening", "Prescription", "Family physician", "Self-care measures", "Complete", "Communication", "Auto follow-up"];
const current = 6;

const documents = [
  { title: "Doctor notification", glyph: "physician", recipient: "Dr. Lee · Family physician", number: "519-555-0187", sent: true },
  { title: "Prescription", glyph: "rx", recipient: "Your pharmacy", number: "519-555-0142", sent: false },
  { title: "Appointment details", glyph: "doc", recipient: "Your pharmacy", number: "519-555-0142", sent: false },
] as const;

export default function ClinicalFaxPreview() {
  return <AppScreen className={styles.panel} nav={clinicalNav} navBottom={clinicalNavBottom} active="Appointments" crumbs={["Appointments", "Minor ailment"]} initials="AK"
    label="A minor ailment appointment in ZeeNovo Clinical at its communication step: the doctor notification faxed to the family physician, and the prescription and appointment details ready to fax or download">
    <div className={styles.head}>
      <div><b>Minor ailment appointment</b><small>Pink eye · Thu, Dec 10 · 2:30 pm</small></div>
      <span className={styles.complete}><Glyph name="check" />Visit complete</span>
    </div>

    <div className={styles.body}>
      <ol className={styles.steps}>
        {steps.map((step, index) => <li key={step} className={index < current ? styles.done : index === current ? styles.current : ""}>
          <span className={styles.dot}>{index < current ? <Glyph name="check" /> : index + 1}</span>{step}
        </li>)}
      </ol>

      <section className={styles.card}>
        <div className={styles.cardHead}><b>Send fax</b><small>Choose where each document goes</small></div>
        <ul className={styles.docs}>
          {documents.map((document) => <li key={document.title}>
            <span className={styles.docIcon}><Glyph name={document.glyph} /></span>
            <span className={styles.docText}><b>{document.title}</b><small>{document.recipient} · {document.number}</small></span>
            <span className={styles.actions}>
              {document.sent
                ? <i className={styles.sent}><Glyph name="check" />Faxed · 2:41 pm</i>
                : <i className={styles.fax}><Glyph name="send" />Send fax</i>}
              <i className={styles.download}><Glyph name="download" />Download</i>
            </span>
          </li>)}
        </ul>
        <div className={styles.footer}><span>Fax status saved to the visit</span><i className={styles.download}><Glyph name="download" />Download all</i></div>
      </section>
    </div>
  </AppScreen>;
}
