import Image from "next/image";
import styles from "./page.module.css";

const nodeAsset = (name: string) => `/assets/incident-reporting/nodes/${name}`;

function TrendChart() {
  return (
    <div className={styles.trendChart}>
      <div className={styles.chartToolbar}>
        <strong>No. of incidents</strong>
        <div className={styles.chartTabs}><span>Monthly</span><span>Time of Day</span><span>Day of Week</span></div>
      </div>
      <div className={styles.lineChart}>
        <div className={styles.yAxis}><span>4</span><span>3</span><span>2</span><span>1</span><span>0</span></div>
        <div className={styles.linePlot}>
          <div className={styles.gridLines} aria-hidden="true" />
          <div className={styles.lineAreaNode}><Image src={nodeAsset("line-area.svg")} alt="" width={814} height={143} /></div>
          <div className={styles.lineStrokeNode}><Image src={nodeAsset("line-stroke.svg")} alt="" width={814} height={143} /></div>
          <Image className={`${styles.chartDot} ${styles.chartDotOne}`} src={nodeAsset("dot-start.svg")} alt="" width={8} height={8} />
          <Image className={`${styles.chartDot} ${styles.chartDotTwo}`} src={nodeAsset("dot-end.svg")} alt="" width={8} height={8} />
          <Image className={`${styles.chartDot} ${styles.chartDotThree}`} src={nodeAsset("dot-end.svg")} alt="" width={8} height={8} />
          <div className={styles.xAxis}><span>Jul ’26</span><span>Aug ’26</span><span>Sep ’26</span></div>
        </div>
      </div>
    </div>
  );
}

function DiscoveryChart() {
  const rows = [
    ["Patient", "bar-patient.svg"],
    ["Pharmacist", "bar-pharmacist.svg"],
    ["Nurse", "bar-nurse.svg"],
  ];

  return (
    <div className={styles.discoveryChart}>
      <strong>Incident Discovery</strong>
      <div className={styles.discoveryPlot}>
        <div className={styles.discoveryGrid} aria-hidden="true" />
        {rows.map(([label, assetName], index) => (
          <div className={styles.discoveryRow} key={label}>
            <span>{label}</span>
            <div className={styles.barTrack}>
              <div className={styles.barNode} style={{ "--bar-delay": `${index * -1.15}s` } as React.CSSProperties}>
                <Image src={nodeAsset(assetName)} alt="" width={474} height={28} />
              </div>
            </div>
          </div>
        ))}
        <div className={styles.discoveryAxis}><span>0</span><span>0.25</span><span>0.5</span><span>0.75</span><span>1</span></div>
      </div>
    </div>
  );
}

function Donut({ kind, value, label }: { kind: "followup" | "safety"; value: string; label: string }) {
  return (
    <div className={styles.donutMetric}>
      <p>{label}</p>
      <div className={`${styles.donut} ${kind === "safety" ? styles.safetyDonut : ""}`}>
        {kind === "followup" ? (
          <>
            <Image className={styles.donutTrack} src={nodeAsset("donut-track.svg")} alt="" width={100} height={101} />
            <Image className={styles.donutProgress} src={nodeAsset("donut-progress.svg")} alt="" width={49} height={51} />
          </>
        ) : <Image className={styles.safetyRing} src={nodeAsset("safety-ring.svg")} alt="" width={120} height={120} />}
        <strong>{value}</strong>
      </div>
    </div>
  );
}

export default function IncidentAnalyticsPanels() {
  return (
    <div className={styles.analyticsGrid}>
      <article className={`${styles.analyticsPanel} ${styles.trendPanel}`}>
        <div className={styles.panelCopy}><h3>Trend dashboards</h3><p>Error patterns, timing and<br />medications, visible in real time.</p></div>
        <TrendChart />
      </article>

      <article className={`${styles.analyticsPanel} ${styles.insightPanel}`}>
        <Image className={styles.insightLines} src={nodeAsset("insight-lines.svg")} alt="" width={940} height={758} />
        <div className={styles.panelCopy}><h3>Insight surfacing</h3><p>Spikes, drops and emerging patterns are flagged for you.</p></div>
        <div className={styles.discoveryShell}><DiscoveryChart /></div>
      </article>

      <article className={`${styles.analyticsPanel} ${styles.trackPanel}`}>
        <Image className={styles.trackLines} src={nodeAsset("track-lines.svg")} alt="" width={1052} height={758} />
        <div className={styles.panelCopy}><h3>Track What Matters</h3><p>See productivity, follow-ups, and pharmacy<br />performance at a glance.</p></div>
        <div className={styles.metricShell}>
          <Donut kind="followup" value="75%" label="Follow-up Success Rate" />
          <Donut kind="safety" value="46/100" label="Pharmacy Safety Score" />
        </div>
      </article>

      <article className={`${styles.analyticsPanel} ${styles.reportPanel}`}>
        <Image className={styles.cardOrbit} src={nodeAsset("card-orbit.svg")} alt="" width={1165} height={1025} />
        <div className={styles.panelCopy}><h3>Scheduled reports</h3><p>Reports for your team, board or inspector, on a<br />schedule or on demand.</p></div>
        <div className={styles.reportForm}>
          <div className={styles.reportFormTitle}>Incident Details</div>
          <div className={styles.reportFormBody}>
            <p>Please describe what happened and how the incident was first discovered.</p>
            <div className={styles.reportTextArea}><span className={styles.typedReportText}>Wrong strength detected during final check...</span><small>0/16000</small></div>
          </div>
        </div>
      </article>
    </div>
  );
}
