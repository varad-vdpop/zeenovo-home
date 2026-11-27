import AppScreen, { assureLogo, assureNav } from "./AppScreen";
import styles from "./SopUpdatePreview.module.css";

// Assure's SOP update review, for the Clinical Content page's "We update the source. You approve what changes."
// section: the changes in ZeeNovo's new template version, each one adopted or not by the pharmacy, with the pharmacy's
// own edits kept, and the version history beside it. Wording, names and dates are sample data.

const icon = {
  check: "m6 12.5 4 4 8-9",
  history: "M12 3a9 9 0 1 0 9 9M12 7v5l3 2M21 3v6h-6",
} as const;

function Glyph({ name }: { name: keyof typeof icon }) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d={icon[name]} /></svg>;
}

const changes = [
  { section: "4. Final check", kind: "Added", text: <>Pharmacist checks the drug, strength and quantity, <ins>and scans the barcode before bagging.</ins></>, adopt: true },
  { section: "5. Look-alike stock", kind: "Added", text: <>Store look-alike strengths apart <ins>and add a shelf alert label to both.</ins></>, adopt: true },
  { section: "7. Records", kind: "Changed", text: <>Keep the signed dispensing log for <del>2 years</del> <ins>3 years</ins>.</>, adopt: false },
];

const history = [
  { version: "v3", note: "ZeeNovo update · Dec 1", status: "In review", tone: "review" },
  { version: "v2", note: "Your version · Aug 14", status: "Accepted", tone: "accepted" },
  { version: "v1", note: "ZeeNovo template · Mar 3", status: "Replaced", tone: "old" },
] as const;

export default function SopUpdatePreview() {
  return <AppScreen className={styles.panel} nav={assureNav} logo={assureLogo} active="SOPs" crumbs={["Home", "SOPs", "Medication Dispensing"]} initials="VP"
    label="An SOP update under review in Assure: ZeeNovo's version 3 of the Medication Dispensing SOP, with two of its three changes selected to adopt, the pharmacy's own edit kept, and the pharmacy still on its accepted version 2">
    <div className={styles.head}>
      <div><b>Medication Dispensing</b><small>You&apos;re on v2 · ZeeNovo v3 is ready to review</small></div>
      <span className={styles.badge}>Update available</span>
    </div>

    <div className={styles.body}>
      <section className={styles.card}>
        <div className={styles.cardHead}><b>Changes in v3</b><small>2 of 3 selected</small></div>
        <ul className={styles.changes}>
          {changes.map((change) => <li key={change.section}>
            <span className={`${styles.box} ${change.adopt ? styles.boxOn : ""}`}>{change.adopt && <Glyph name="check" />}</span>
            <span className={styles.change}>
              <span className={styles.changeHead}><b>{change.section}</b><i className={change.kind === "Added" ? styles.added : styles.changed}>{change.kind}</i></span>
              <span className={styles.changeText}>{change.text}</span>
            </span>
          </li>)}
        </ul>
        <p className={styles.kept}><Glyph name="check" /><span>Your edit to <b>2. Opening hours</b> is kept</span></p>
        <div className={styles.actions}><span className={styles.primary}>Adopt 2 changes</span><span className={styles.outline}>Stay on v2</span></div>
      </section>

      <section className={styles.card}>
        <div className={styles.cardHead}><b><Glyph name="history" />Version history</b></div>
        <ul className={styles.history}>
          {history.map((item) => <li key={item.version}>
            <i className={styles.version}>{item.version}</i>
            <span><b>{item.note}</b><em className={styles[item.tone]}>{item.status}</em></span>
          </li>)}
        </ul>
      </section>
    </div>
  </AppScreen>;
}
