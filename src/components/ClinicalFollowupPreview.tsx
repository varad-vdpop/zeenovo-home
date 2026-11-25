import styles from "./ClinicalFollowupPreview.module.css";

// The follow-ups tab of a ZeeNovo Clinical appointment, redrawn for the Clinical page's "Follow-up by exception"
// section: an automatic follow-up flagged for pharmacist review, and the next one waiting on its second of three
// attempts. Dates and answers are sample data.

const icon = {
  calendar: "M4 6h16v14H4zM4 10h16M8 3v4m8-4v4",
  alert: "M12 4 2.5 20h19L12 4Zm0 6v4m0 3h.01",
  pill: "m10.5 20.5-7-7a4.95 4.95 0 0 1 7-7l7 7a4.95 4.95 0 0 1-7 7ZM7 10l7 7",
  mail: "M3 6h18v12H3zm0 0 9 7 9-7",
  user: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 8a7 7 0 0 1 14 0",
} as const;

function Glyph({ name }: { name: keyof typeof icon }) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d={icon[name]} /></svg>;
}

const answers = [
  ["How are your symptoms now?", "Improved"],
  ["Did you take the treatment the pharmacist recommended?", "Partially"],
] as const;

export default function ClinicalFollowupPreview() {
  return <div className={styles.frame}>
    <div className={styles.panel} role="img" aria-label="Follow-ups for a minor ailment visit: follow-up 1 is complete and flagged for pharmacist review because treatment was not adhered to; follow-up 2 is awaiting the patient's response on attempt 2 of 3">
      <div className={styles.header}>
        <div>
          <p className={styles.title}>Follow-ups</p>
          <p className={styles.sub}>Fever · Minor ailment · Sent automatically by email</p>
        </div>
        <span className={styles.outline}><Glyph name="calendar" />Schedule follow-up</span>
      </div>

      <p className={styles.group}>Automated follow-ups</p>

      <div className={styles.item}>
        <div className={styles.itemHead}>
          <span className={styles.number}>1</span><b>Follow-up 1</b><span className={`${styles.status} ${styles.ok}`}>Completed</span>
          <span className={styles.date}>9 Jun 2026</span>
        </div>
        <div className={styles.itemBody}>
          <div className={styles.alert}>
            <p><Glyph name="alert" />This follow-up needs pharmacist review</p>
            <span><Glyph name="pill" />Treatment not adhered</span>
          </div>
          {answers.map(([question, answer]) => <div className={styles.answer} key={question}>
            <p className={styles.question}>{question}</p>
            <p>{answer}</p>
          </div>)}
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.itemHead}>
          <span className={styles.number}>2</span><b>Follow-up 2</b><span className={`${styles.status} ${styles.info}`}>Awaiting response</span>
          <span className={styles.date}>Attempt 2 of 3</span>
        </div>
        <div className={`${styles.itemBody} ${styles.pending}`}>
          <p><Glyph name="mail" />Resent 12 Jun · next attempt 14 Jun</p>
          <span className={styles.outline}><Glyph name="user" />Lodge on patient&apos;s behalf</span>
        </div>
      </div>
    </div>
  </div>;
}
