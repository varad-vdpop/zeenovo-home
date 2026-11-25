import styles from "./MinorScreeningPreview.module.css";

// The Patient screening step of a ZeeNovo Clinical minor ailment visit, redrawn from the product for the Minor
// Ailments page's "Guided assessment" section: the visit summary bar, the visit's eight steps, and the red-flag
// questions answered Yes or No. Patient, condition and answers are sample data.

const steps = ["Profile", "Patient screening", "Prescription", "Family physician", "Self-care measures", "Complete", "Communication", "Auto follow-up"];
const active = 1;

const questions = [
  "Difficulty breathing or wheezing?",
  "Swelling of the face, lips or tongue?",
  "Severe eye pain or changes in vision?",
  "Symptoms for longer than two weeks?",
];

const icon = {
  check: "M20 6 9 17l-5-5",
  shield: "M12 3 5 6v5c0 4.5 3 8.3 7 10 4-1.7 7-5.5 7-10V6l-7-3Zm-3 9 2 2 4-4",
  left: "m15 18-6-6 6-6",
  right: "m9 18 6-6-6-6",
} as const;

function Glyph({ name }: { name: keyof typeof icon }) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d={icon[name]} /></svg>;
}

export default function MinorScreeningPreview({ className = "" }: { className?: string }) {
  return <div className={`${styles.frame} ${className}`}>
    <div className={styles.panel} role="img" aria-label="Minor ailment visit for allergic rhinitis at the patient screening step: four red-flag questions answered no, and no red flags identified">
      <div className={styles.summary}>
        <div><small>Patient</small><b>Priya Shah (34 yrs)</b></div>
        <div><small>Service</small><b>Allergic rhinitis · Minor ailment</b></div>
        <div><small>Status</small><b className={styles.inProgress}>In progress</b></div>
      </div>

      <div className={styles.body}>
        <ol className={styles.steps}>
          {steps.map((step, index) => <li key={step} className={index < active ? styles.done : index === active ? styles.current : ""}>
            <span className={styles.dot}>{index < active ? <Glyph name="check" /> : index + 1}</span>{step}
          </li>)}
        </ol>

        <div className={styles.content}>
          <div className={styles.head}><b>Patient screening</b><span>Red flags</span></div>
          <ul className={styles.questions}>
            {questions.map((question) => <li key={question}>
              <span>{question}</span>
              <span className={styles.toggle}><i>Yes</i><i className={styles.on}>No</i></span>
            </li>)}
          </ul>
          <div className={styles.result}>
            <span className={styles.resultIcon}><Glyph name="shield" /></span>
            <div><b>No red flags identified</b><small>Continue to prescription. You can refer at any point.</small></div>
          </div>
          <div className={styles.actions}>
            <span className={styles.back}><Glyph name="left" />Back</span>
            <span className={styles.next}>Next<Glyph name="right" /></span>
          </div>
        </div>
      </div>
    </div>
  </div>;
}
