import styles from "./NetworkPrivacyPreview.module.css";

// A network overview for the Multi-location Groups page's "Aggregate and de-identified. Always." section: counts and
// rates by location only, a small location shown as insufficient data, and access and exports logged. ZeeNovo
// Enterprise is launching soon, so this is a single panel rather than a full app screen. Locations and figures are
// sample data.

const icon = {
  lock: "M6 11h12v10H6zM8 11V8a4 4 0 0 1 8 0v3",
  shield: "M12 3 5 6v5c0 4.5 3 8.3 7 10 4-1.7 7-5.5 7-10V6l-7-3Z",
  log: "M7 3h7l4 4v14H7zM14 3v4h4M10 12h5m-5 4h5",
} as const;

function Glyph({ name }: { name: keyof typeof icon }) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d={icon[name]} /></svg>;
}

const locations = [
  { name: "Downtown", visits: "142", rate: "91%", bar: 91 },
  { name: "Westside", visits: "98", rate: "88%", bar: 88 },
  { name: "Northfield", visits: "76", rate: "93%", bar: 93 },
  { name: "Lakeview", visits: null, rate: null, bar: 0 },
];

export default function NetworkPrivacyPreview() {
  return <div className={styles.frame}>
    <div className={styles.panel} role="img" aria-label="A network overview of minor ailment visits by location, with counts and follow-up rates only; one small location shows insufficient data, and access and exports are logged">
      <div className={styles.head}>
        <div><b>Network overview</b><small>Minor ailments · Last 30 days</small></div>
        <span className={styles.badge}><Glyph name="shield" />De-identified</span>
      </div>

      <div className={styles.table}>
        <div className={styles.tableHead}><i>Location</i><i>Visits</i><i>Follow-up rate</i></div>
        {locations.map((location) => <div key={location.name} className={styles.row}>
          <b>{location.name}</b>
          {location.visits
            ? <><span>{location.visits}</span><span className={styles.rate}><i><em style={{ width: `${location.bar}%` }} /></i>{location.rate}</span></>
            : <span className={styles.insufficient}><Glyph name="lock" />Insufficient data · below the privacy threshold</span>}
        </div>)}
      </div>

      <div className={styles.foot}>
        <span><Glyph name="lock" />Counts and rates only. No names, health card numbers or notes.</span>
        <span><Glyph name="log" />Access and exports logged</span>
      </div>
    </div>
  </div>;
}
