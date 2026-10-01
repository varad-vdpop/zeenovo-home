import Image from "next/image";
import styles from "./page.module.css";

const nodeAsset = (name: string) => `/assets/incident-reporting/nodes/${name}`;

const navItems = ["Dashboard", "Incidents", "CQI Meetings", "Pharmacy Assessments", "Team assessments", "SOPs", "Analytics", "Billing", "Settings"];
const stats = [["Incidents Reported", "3"], ["This Month", "0"], ["Avg Resolution", "0 days"], ["Open Incidents", "1"], ["Date Range", "Last 6 month"]];

export default function IncidentDashboard() {
  return (
    <div className={styles.dashboardFrame} aria-label="ZeeNovo Assure analytics dashboard">
      <div className={styles.dashboardWindow}>
        <div className={styles.dashboardHeader}><strong>⌁ ZeeNovo<sup>®</sup></strong><span>Home　›　Analytics</span></div>
        <aside className={styles.dashboardNav}>{navItems.map(item => <span className={item === "Analytics" ? styles.activeNav : ""} key={item}>{item}</span>)}</aside>
        <div className={styles.dashboardMain}>
          <strong className={styles.overviewLabel}>Overview</strong>
          <div className={styles.dashboardStats}>{stats.map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}</div>
          <div className={styles.dashboardLineCard}>
            <div className={styles.dashboardChartTitle}><strong>No. of incidents</strong><span>Monthly　 Time of Day　 Day</span></div>
            <div className={styles.dashboardPlot}>
              <div className={styles.dashboardGrid} />
              <Image className={styles.dashboardAreaNode} src={nodeAsset("dashboard-area.svg")} alt="" width={549} height={97} />
              <Image className={styles.dashboardLineNode} src={nodeAsset("dashboard-line.svg")} alt="" width={556} height={2} />
              <Image className={`${styles.dashboardPoint} ${styles.dashboardPointStart}`} src={nodeAsset("dashboard-dot-start.svg")} alt="" width={6} height={6} />
              <Image className={`${styles.dashboardPoint} ${styles.dashboardPointEnd}`} src={nodeAsset("dashboard-dot-end.svg")} alt="" width={6} height={6} />
              <span className={styles.dashboardXAxis}>Jul ’26　　　　　　　　　　　　　　　　　　　　　　　　　　　 Sep ’26</span>
            </div>
          </div>
          <div className={styles.dashboardBottom}>
            <article><strong>Status</strong><div className={styles.statusChart}><Image src={nodeAsset("dashboard-status-b.svg")} alt="" width={79} height={74} /><Image src={nodeAsset("dashboard-status-a.svg")} alt="" width={58} height={40} /></div><small><i />Completed　　　　　　 2　67%</small></article>
            <article><strong>Degree of Harm</strong><div className={styles.harmDonut}><span>2</span></div><small><i />Near Miss Close Call　 ·　Mild Harm</small></article>
            <article><strong>Learnings</strong><div className={styles.learningChart}><Image src={nodeAsset("dashboard-learnings.svg")} alt="" width={62} height={62} /><span>67%</span></div><small>2 of 3 incidents<br />have documented learnings</small></article>
          </div>
        </div>
      </div>
    </div>
  );
}
