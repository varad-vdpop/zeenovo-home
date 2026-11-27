import AppScreen, { assureLogo, assureNav } from "./AppScreen";
import styles from "./AssureFiltersPreview.module.css";

// Assure Analytics with its report categories and filters, for the Analytics page's "Filter to the cause, not the
// noise" section: the report categories as tabs, the five filters with two applied, the totals and the chart they
// produce. The tabs and filters run on past the frame's edge, as a wide screen would. Counts are sample data.

const icon = {
  types: "M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM16.5 13a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z",
  nearMiss: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-4 9 3 3 5-6",
  time: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 4v5l3 2",
  medication: "M8 3h8v3H8zM7 6h10v15H7zM12 11v6m-3-3h6",
  stores: "M4 7h10l-3-3m3 3-3 3M20 17H10l3-3m-3 3 3 3",
  goal: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 4a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z",
  scores: "M9 4h6v3H9zM7 5.5H5.5V20h13V5.5H17M9 12h6m-6 4h4",
  turnaround: "M4 20V10m5 10V6m5 14v-8m5 8V4",
  benchmark: "M12 3a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm-3 11-2 7 5-3 5 3-2-7",
  chevron: "m6 9 6 6 6-6",
  close: "m7 7 10 10M17 7 7 17",
} as const;

function Glyph({ name }: { name: keyof typeof icon }) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d={icon[name]} /></svg>;
}

const categories = [
  ["Incidents by type", "types"], ["Near miss ratio", "nearMiss"], ["Time of day", "time"], ["Medication involved", "medication"],
  ["Store comparison", "stores"], ["Goal progress", "goal"], ["Assessment scores", "scores"], ["Report turnaround", "turnaround"],
  ["Benchmark position", "benchmark"],
] as const;

const filters = [
  { label: "Degree of harm", value: "Near miss", on: true },
  { label: "Process stage", value: "Dispensing", on: true },
  { label: "Medication", value: "All" },
  { label: "Contributing factor", value: "All" },
  { label: "Discovery", value: "All" },
];

const types = [["Wrong strength", 6], ["Wrong drug", 4], ["Wrong dose", 3], ["Wrong quantity", 2], ["Wrong patient", 1]] as const;

const totals = [["Matching incidents", "16", "Near misses at dispensing"], ["Most common", "Wrong strength", "6 of 16"], ["Caught before pickup", "94%", "15 of 16"]] as const;

export default function AssureFiltersPreview() {
  return <AppScreen className={styles.panel} nav={assureNav} logo={assureLogo} active="Analytics" crumbs={["Home", "Analytics", "Incidents by type"]} initials="VP"
    label="Assure Analytics filtered to near misses at the dispensing stage: 16 matching incidents, most often wrong strength, shown by type">
    <div className={styles.head}>
      <div><b>Incidents by type</b><small>16 incidents match these filters · Last 6 months</small></div>
    </div>
    <ul className={styles.categories}>
      {categories.map(([label, glyph], index) => <li key={label} className={index === 0 ? styles.on : ""}><span><Glyph name={glyph} /></span>{label}</li>)}
    </ul>
    <div className={styles.report}>
        <div className={styles.filters}>
          {filters.map((filter) => <span key={filter.label} className={filter.on ? styles.applied : ""}>
            <small>{filter.label}</small>{filter.value}<Glyph name={filter.on ? "close" : "chevron"} />
          </span>)}
        </div>
        <div className={styles.totals}>{totals.map(([label, value, note]) => <span key={label}><small>{label}</small><b>{value}</b><i>{note}</i></span>)}</div>
        <section className={styles.card}>
          <p className={styles.cardTitle}>Near misses at dispensing, by type</p>
          <ul className={styles.bars}>{types.map(([label, value]) => <li key={label}>
            <span>{label}</span><b>{value}</b><i><em style={{ width: `${(value / 6) * 100}%` }} /></i>
          </li>)}</ul>
        </section>
    </div>
  </AppScreen>;
}
