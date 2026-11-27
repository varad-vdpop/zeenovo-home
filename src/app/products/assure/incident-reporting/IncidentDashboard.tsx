import AssureAnalyticsPreview from "@/components/AssureAnalyticsPreview";
import styles from "./page.module.css";

// The hero's product screen: the Assure analytics dashboard in the page's glass frame, running off the hero card's
// right edge.
export default function IncidentDashboard() {
  return <div className={styles.dashboardFrame}><AssureAnalyticsPreview /></div>;
}
