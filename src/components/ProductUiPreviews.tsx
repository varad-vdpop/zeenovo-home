import Image from "next/image";
import { useId, type CSSProperties } from "react";
import styles from "./ProductUiPreviews.module.css";
import RevealSequence from "./RevealSequence";

function Icon({ name, className = "" }: { name: string; className?: string }) {
  return <Image className={`${styles.icon} ${className}`} src={`/assets/ui-previews/${name}.svg`} alt="" width={24} height={24} />;
}

export { AssureDashboardPreview, TreatmentPreview } from "./InteractiveProductUiPreviews";

const profileSteps = [["Profile", "profile"], ["Patient screening", "screening"], ["Prescription", "prescription"], ["Family Physician", "physician"], ["Self care measures", "care"], ["Follow Up", "followup"]];

export function AppointmentPreview({ animated = false }: { animated?: boolean }) {
  const content = <>
      <div className={styles.profileSidebar} data-reveal="fade">
        <div className={styles.stepsLabel}>Steps</div>
        {profileSteps.map(([label, icon], index) => <div className={`${styles.profileStep} ${index === 0 ? styles.profileActive : ""}`} key={label}>
          <div className={styles.stepIcon}><Icon name={icon} /></div><div>{label}</div>
        </div>)}
      </div>
      <div className={styles.profileContent}>
        <div className={styles.profileHeading} data-reveal="fade" style={{ "--sequence-delay": "50ms" } as CSSProperties}>Profile details</div>
        <div className={styles.personalLabel} data-reveal="fade" style={{ "--sequence-delay": "100ms" } as CSSProperties}>Personal Information</div>
        <div className={styles.profileFields}>
          {["First Name *", "Last Name *", "Gender *", "", "Email *", "Phone Number *"].map((label, index) => <div className={`${styles.profileField} ${index === 2 || index === 4 ? styles.dropdownField : ""}`} data-reveal="fade" style={{ "--sequence-delay": `${150 + Math.floor(index / 2) * 50}ms` } as CSSProperties} key={index}>{label}{(index === 2 || index === 4) && <Icon name="select" />}</div>)}
        </div>
      </div>
  </>;
  const label = "Minor ailment appointment workflow showing profile details and personal information fields";
  return <div className="appointment-ui">{animated
    ? <RevealSequence as="div" duration={300} className={styles.appointmentPanel} role="img" aria-label={label}>{content}</RevealSequence>
    : <div className={styles.appointmentPanel} role="img" aria-label={label}>{content}</div>}
  </div>;
}

const patientFlags = [["Differential diagnosis", "diagnosis"], ["Breastfeeding", "heart"], ["Red flag", "flag"], ["Pregnant", "pregnant"]];

export function PatientFlagsPreview() {
  return <div className="flags-ui">
    <div className={styles.flagsPanel} role="group" aria-label="Patient flags: differential diagnosis, breastfeeding, red flag, and pregnant">
      <div className={styles.flagsHeading}>Patient Flags</div>
      <div className={styles.flagRows}>{patientFlags.map(([label, icon]) => <div className={styles.flagRow} key={label} tabIndex={0}>
        <div className={styles.flagIcon}><Icon name={icon} /></div><div>{label}</div>
      </div>)}</div>
    </div>
  </div>;
}

export function ReportingTimerPreview() {
  const gradientId = useId();
  return <div className="timer">
    <div className={styles.timerPanel} role="img" aria-label="Reporting time: 4 minutes 53 seconds">
      <svg className={styles.timerRing} viewBox="0 0 212 212" fill="none" aria-hidden="true">
        <defs><linearGradient id={gradientId} x1="111.341" y1="11.5039" x2="174.9" y2="106" gradientUnits="userSpaceOnUse"><stop stopColor="#e5ecff" stopOpacity="0" /><stop offset="1" stopColor="#e5ecff" /></linearGradient></defs>
        <circle cx="106" cy="106" r="97.52" stroke="#7f74e1" strokeWidth="16.96" />
        <path d="M106 8.48A97.52 97.52 0 1 1 45.372 182.39" stroke={`url(#${gradientId})`} strokeWidth="16.96" strokeLinecap="round" />
      </svg>
      <div className={styles.timerValue}>4:53</div>
    </div>
  </div>;
}

const analyticsHeights = [96.124, 192.589, 90.245, 120.195, 150.427, 251.801, 344.722, 251.801, 197.047, 306.439];

export function AnalyticsPreview({ animated = false }: { animated?: boolean }) {
  const bars = analyticsHeights.map((height, index) => <div key={index} className={styles.analyticsBar} data-reveal="bar" style={{ "--bar-height": `${height / 344.722 * 100}%`, "--sequence-delay": `${index * 30}ms` } as CSSProperties} />);
  return <div className="bars">{animated
    ? <RevealSequence as="div" duration={600} className={styles.analyticsPanel} role="img" aria-label="Incident reporting analytics bar chart">{bars}</RevealSequence>
    : <div className={styles.analyticsPanel} role="img" aria-label="Incident reporting analytics bar chart">{bars}</div>}
  </div>;
}

function StatusIcon({ completed = false }: { completed?: boolean }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {completed ? <><path d="M22 11v1a10 10 0 1 1-5.9-9.1" /><path d="m22 4-10 10-3-3" /></> : <><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></>}
  </svg>;
}

export function DoseRemindersPreview() {
  return <div className={styles.remindersPanel} role="img" aria-label="Dose reminders: Sarah Johnson, Amoxicillin 500mg, 1 tablet due today at 2 PM. Emily Rodriguez, Metformin 500mg, 2 tablets due tomorrow at 9 AM.">
    <div className={styles.reminderHeader}><div><div className={styles.reminderHeading}>Dose Reminders</div><div className={styles.reminderSubtitle}>Upcoming medication schedules</div></div><div className={styles.viewAll}>View All</div></div>
    <div className={styles.reminderRows}>
      {[
        { name: "Sarah Johnson", medicine: "Amoxicillin 500mg", dosage: "1 tablet", due: "Today at 2:00 PM" },
        { name: "Emily Rodriguez", medicine: "Metformin 500mg", dosage: "2 tablets", due: "Tomorrow at 9:00 AM" },
      ].map((item, index) => <div className={styles.reminderRow} key={item.name}>
        <div className={styles.reminderPatient}><div className={styles.reminderStatus}><StatusIcon completed={index === 1} /></div><div><div className={styles.patientName}>{item.name}</div><div>{item.medicine}</div></div></div>
        <div className={styles.reminderDosage}><b>Dosage:</b> {item.dosage}</div><div><b>Next due:</b> {item.due}</div>
      </div>)}
    </div>
  </div>;
}

export function PharmacyMetricsPreview() {
  return <div className={styles.metricsPanel} role="img" aria-label="Total revenue $285,640, up 12 percent versus last month. Active patients 1,243, up 8 percent this month.">
    {[
      { label: "Total Revenue", value: "$285,640", growth: "+12%", period: "vs last month", icon: "dollar" },
      { label: "Active Patients", value: "1,243", growth: "+8%", period: "this month", icon: "patients" },
    ].map(item => <div className={styles.metricCard} key={item.label}>
      <div className={styles.metricLabel}>{item.label}<Icon name={item.icon} /></div>
      <div className={styles.metricValue}>{item.value}</div>
      <div className={styles.metricTrend}><div><Icon name="trend" />{item.growth}</div><div>{item.period}</div></div>
    </div>)}
  </div>;
}
