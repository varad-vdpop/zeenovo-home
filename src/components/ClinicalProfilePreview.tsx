import Image from "next/image";
import localFont from "next/font/local";
import styles from "./ClinicalProfilePreview.module.css";

const inter = localFont({
  src: "../../public/fonts/inter-variable.woff2",
  weight: "100 900",
  display: "swap",
  preload: false,
});

const steps = [
  ["Profile", "profile"],
  ["Patient screening", "screening"],
  ["Prescription", "prescription"],
  ["Family Physician", "physician"],
  ["Self care measures", "care"],
  ["Follow Up", "followup"],
];

function Field({ label = "", dropdown = false }: { label?: string; dropdown?: boolean }) {
  return <div className={`${styles.field} ${dropdown ? styles.dropdown : ""}`}>
    {label}
    {dropdown && <Image src="/assets/clinical/workflow-ui-chevron.svg" alt="" width={10.08} height={10.08} />}
  </div>;
}

// A native, decorative product preview; its fields are not a patient intake form.
export default function ClinicalProfilePreview() {
  return <div className={`${styles.panel} ${inter.className}`} role="img" aria-label="Clinical patient profile workflow with personal information, address and health card fields">
    <div className={styles.layout}>
      <div className={styles.sidebar}>
        <div className={styles.stepsLabel}>Steps</div>
        <div className={styles.steps}>{steps.map(([label, icon], index) =>
          <div className={`${styles.step} ${index === 0 ? styles.active : ""}`} key={label}>
            <span className={styles.stepIcon}><Image src={`/assets/clinical/workflow-ui-${icon}.svg`} alt="" width={11.52} height={11.52} /></span>
            <span>{label}</span>
          </div>
        )}</div>
      </div>
      <div className={styles.content}>
        <div className={styles.heading}>Profile details</div>
        <div className={styles.personal}>
          <div className={styles.label}>Personal information</div>
          <div className={styles.fields}>
            <Field label="First Name *" /><Field label="Last Name *" />
            <Field label="Gender *" dropdown /><Field />
            <Field label="Email *" dropdown /><Field label="Phone Number *" />
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.label}>Address</div>
          <div className={styles.fields}>
            <Field label="Street *" /><Field label="Postal *" />
            <Field label="City *" /><Field label="Province *" dropdown />
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.healthHeading}>
            <span className={styles.label}>Health card information</span>
            <span className={styles.checkboxLabel}><span className={styles.checkbox} />Patient doesn&apos;t have a health card</span>
          </div>
          <div className={styles.fields}>
            <Field label="Health Card Number *" /><Field label="Province *" dropdown />
          </div>
        </div>
        <div className={styles.actions}><span className={styles.back}>Back</span><span className={styles.continue}>Continue</span></div>
      </div>
    </div>
  </div>;
}
