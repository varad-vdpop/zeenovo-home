import AppScreen, { assureLogo, assureNav } from "./AppScreen";
import styles from "./AssureAnalyticsPreview.module.css";

// The ZeeNovo Assure analytics dashboard for any Assure illustration: Assure's top bar and sidebar around the product's
// Analytics overview, with its own figures and cards (overview figures, incidents by month, status, degree of harm and
// learnings), drawn natively.

const stats = [
  ["Incidents Reported", "3"],
  ["This Month", "0"],
  ["Avg Resolution", "0 days"],
  ["Open Incidents", "1"],
  ["Date Range", "Last 6 month"],
] as const;

export default function AssureAnalyticsPreview() {
  return <AppScreen className={styles.panel} nav={assureNav} logo={assureLogo} active="Analytics" crumbs={["Home", "Analytics"]} initials="VP"
    label="The ZeeNovo Assure analytics overview: 3 incidents reported, none this month, an average resolution of 0 days, 1 open incident over the last 6 months, with incidents by month, status, degree of harm and learnings">
    <b className={styles.title}>Overview</b>

    <div className={styles.stats}>
      {stats.map(([label, value]) => <span key={label} className={styles.stat}><small>{label}</small><b>{value}</b></span>)}
    </div>

    <section className={styles.card}>
      <div className={styles.chartHead}>
        <p className={styles.cardTitle}>No. of incidents</p>
        <span className={styles.segment}><i className={styles.segmentOn}>Monthly</i><i>Time of Day</i><i>Day</i></span>
      </div>
      <div className={styles.plot}>
        <svg viewBox="0 0 500 120" preserveAspectRatio="none" aria-hidden="true" focusable="false">
          <defs><linearGradient id="assureArea" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#3f51d8" stopOpacity=".2" /><stop offset="1" stopColor="#3f51d8" stopOpacity="0" /></linearGradient></defs>
          {[0, 30, 60, 90, 120].map((y) => <line key={y} x1="0" x2="500" y1={y} y2={y} stroke="#ececf1" strokeWidth="1" vectorEffect="non-scaling-stroke" />)}
          <path d="M0 8 L500 104 L500 120 L0 120 Z" fill="url(#assureArea)" stroke="none" />
          <path d="M0 8 L500 104" fill="none" stroke="#3f51d8" strokeWidth="2" vectorEffect="non-scaling-stroke" />
        </svg>
        <span className={`${styles.dot} ${styles.dotStart}`} />
        <span className={`${styles.dot} ${styles.dotEnd}`} />
      </div>
      <span className={styles.xAxis}><i>Jul ’26</i><i>Sep ’26</i></span>
    </section>

    <div className={styles.row3}>
      <section className={styles.card}>
        <p className={styles.cardTitle}>Status</p>
        <span className={`${styles.donut} ${styles.statusDonut}`}><span /></span>
        <p className={styles.legend}><i className={styles.teal} />Completed<b>2</b><b>67%</b></p>
      </section>
      <section className={styles.card}>
        <p className={styles.cardTitle}>Degree of Harm</p>
        <span className={`${styles.donut} ${styles.harmDonut}`}><span><b>2</b></span></span>
        <p className={styles.legend}><i className={styles.blue} />Near Miss Close Call<i className={styles.lavender} />Mild Harm</p>
      </section>
      <section className={styles.card}>
        <p className={styles.cardTitle}>Learnings</p>
        <span className={`${styles.donut} ${styles.learningRing}`}><span><b>67%</b></span></span>
        <p className={styles.note}>2 of 3 incidents have documented learnings</p>
      </section>
    </div>
  </AppScreen>;
}
