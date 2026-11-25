import styles from "./AssureProgramScenes.module.css";

// Native UI for the three quality-program cards in the home "A Safety Program Your Team Will Use" section:
// assigning an SOP, role-based staff assessments and the pharmacy self-assessment. Redrawn from the ZeeNovo Assure
// screens; people, dates and scores are sample data. Facts follow src/content/features.json.

function Glyph({ d }: { d: string }) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d={d} /></svg>;
}
const calendar = "M4 6h16v14H4zM4 10h16M8 3v4m8-4v4";
const close = "m7 7 10 10M17 7 7 17";
const arrow = "M5 12h14M13 6l6 6-6 6";
const doc = "M7 3h7l4 4v14H7zM14 3v4h4M10 12h5m-5 4h5";

export function AssignSopScene() {
  return (
    <div className={styles.scene} role="img" aria-label="Assigning the current SOP version to pharmacists and technicians with a completion deadline">
      <div className={styles.panel}>
        <div className={styles.head}>
          <span className={styles.headIcon}><Glyph d={doc} /></span>
          <div><b>Assign SOP</b><small>Medication Dispensing · v2.1</small></div>
        </div>
        <p className={styles.fieldLabel}>Assign to</p>
        <div className={styles.field}>
          <span className={styles.chip}>Pharmacists <Glyph d={close} /></span>
          <span className={styles.chip}>Technicians <Glyph d={close} /></span>
        </div>
        <p className={styles.fieldLabel}>Completion deadline</p>
        <div className={styles.field}>
          <span className={styles.fieldValue}>Dec 15, 2026</span>
          <Glyph d={calendar} />
        </div>
        <div className={styles.buttons}>
          <span className={styles.secondary}>Cancel</span>
          <span className={styles.primary}><Glyph d={arrow} />Assign SOP</span>
        </div>
      </div>
    </div>
  );
}

const team = [
  { initials: "PS", name: "Priya Shah", role: "Pharmacist", done: 12, total: 12, status: "Complete", tone: styles.ok },
  { initials: "DW", name: "Daniel Wong", role: "Technician", done: 6, total: 9, status: "In progress", tone: styles.info },
  { initials: "AO", name: "Amara Okafor", role: "Assistant", done: 0, total: 10, status: "Not started", tone: styles.idle },
];

export function TeamAssessmentScene() {
  return (
    <div className={styles.scene} role="img" aria-label="Team practice assessments: progress and status for each team member by role">
      <div className={styles.panel}>
        <div className={styles.headRow}>
          <b className={styles.title}>Team practice assessments</b>
          <span className={styles.cycle}>2026 cycle</span>
        </div>
        <ul className={styles.people}>
          {team.map(person => (
            <li key={person.name}>
              <span className={styles.avatar}>{person.initials}</span>
              <div className={styles.person}>
                <div className={styles.personTop}><b>{person.name}</b><span className={`${styles.status} ${person.tone}`}>{person.status}</span></div>
                <small>{person.role} · {person.done} of {person.total} modules</small>
                <span className={styles.bar}><i style={{ width: `${(person.done / person.total) * 100}%` }} /></span>
              </div>
            </li>
          ))}
        </ul>
        <p className={styles.footnote}>Lowest domain: <b>Documentation, 64%</b></p>
      </div>
    </div>
  );
}

const domains = [
  ["Dispensing", 91],
  ["Storage and handling", 84],
  ["Documentation", 68],
  ["Patient counselling", 88],
  ["Incident follow-up", 79],
] as const;

export function SafetyScoreScene() {
  // Half-circle gauge: the arc length is π·r, filled to the score.
  const score = 82;
  const radius = 42;
  const length = Math.PI * radius;
  return (
    <div className={styles.scene} role="img" aria-label="Pharmacy Safety Score of 82 out of 100, with scores by safety domain">
      <div className={styles.panel}>
        <b className={styles.title}>Pharmacy Safety Score</b>
        <div className={styles.scoreRow}>
          <div className={styles.gauge}>
            <svg viewBox="0 0 100 56" aria-hidden="true" focusable="false">
              <path d="M8 50a42 42 0 0 1 84 0" className={styles.gaugeTrack} />
              <path d="M8 50a42 42 0 0 1 84 0" className={styles.gaugeFill} strokeDasharray={`${(score / 100) * length} ${length}`} />
            </svg>
            <span className={styles.score}>{score}</span>
          </div>
          <div className={styles.scoreCopy}>
            <span className={`${styles.status} ${styles.ok}`}>On track</span>
            <small>Assessment 3 of 2026 · 63 questions</small>
          </div>
        </div>
        <ul className={styles.domains}>
          {domains.map(([name, value]) => (
            <li key={name}>
              <span>{name}</span>
              <span className={styles.bar}><i style={{ width: `${value}%` }} className={value < 70 ? styles.barLow : undefined} /></span>
              <b>{value}%</b>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
