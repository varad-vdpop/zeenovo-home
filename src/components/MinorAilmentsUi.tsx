"use client";

import Image from "next/image";
import { useRef, type CSSProperties, type ReactNode } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import styles from "./MinorAilmentsUi.module.css";

const asset = (name: string) => `/assets/minor-ailments/${name}`;

// These are explanatory product previews, not live patient forms or care records.
function Preview({ children, className = "", label }: { children: ReactNode; className?: string; label: string }) {
  return <div className={`${styles.preview} ${className}`} role="img" aria-label={label}>
    <div className={styles.surface} aria-hidden="true">{children}</div>
  </div>;
}

function AnimatedPreview({ children, className, label }: { children: ReactNode | ((visible: boolean) => ReactNode); className: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref, { once: true, amount: 0.2 });
  return <div ref={ref} className={`${styles.preview} ${className}`} data-play={visible} role="img" aria-label={label}>
    <div className={styles.surface} aria-hidden="true">{typeof children === "function" ? children(visible) : children}</div>
  </div>;
}

function Icon({ name, className = "" }: { name: string; className?: string }) {
  return <Image className={className} src={asset(`ui-${name}.svg`)} alt="" width={24} height={24} />;
}

export function MinorHeroAssessment({ className }: { className: string }) {
  return <Preview className={`${className} ${styles.liveAssessment}`} label="Live assessment: allergic rhinitis, three symptoms captured, red flag cleared">
    <div className={styles.liveTop}><span>Live assessment</span><span className={styles.clearedBadge}>Red flag cleared</span></div>
    <div className={styles.liveTitle}>Allergic rhinitis</div>
    <div className={styles.symptoms}>
      <span className={styles.symptomIcon}><Icon name="symptoms" /></span>
      <div><div className={styles.symptomTitle}>Symptoms</div><div className={styles.symptomCount}>3 answers captured</div></div>
    </div>
  </Preview>;
}

export function MinorHeroRecord({ className }: { className: string }) {
  return <Preview className={`${className} ${styles.recordReady}`} label="Record ready: assessment, outcome and physician note">
    <div className={styles.recordHeading}><Icon name="document" /><span>Record ready</span></div>
    <div className={styles.recordDescription}>Assessment, outcome and<br />physician note.</div>
  </Preview>;
}

const assessmentSteps = [
  ["Profile", "Patient details", "profile"],
  ["Screening", "Symptoms", "screening"],
  ["Safety check", "Red flags", "safety"],
  ["Treatment", "Options", "treatment"],
  ["Follow-up", "Care plan", "followup"],
] as const;
const questions = ["Difficulty breathing", "Swelling of the face or tongue", "Severe eye pain or vision changes"];

export function MinorGuidedAssessment({ className }: { className: string }) {
  return <Preview className={`${className} ${styles.guided}`} label="Minor ailments safety check for allergic rhinitis: three responses of No, no urgent red flags identified">
    <div className={styles.guidedLayout}>
      <div className={styles.assessmentSidebar}>
        <div className={styles.assessmentEyebrow}>Minor ailments</div>
        <div className={styles.assessmentSteps}>{assessmentSteps.map(([title, subtitle, icon], index) => <div className={`${styles.assessmentStep} ${index === 2 ? styles.currentStep : ""}`} key={title}>
          <span className={styles.stepIcon}><Icon name={icon} /></span><div><div className={styles.stepTitle}>{title}</div><div className={styles.stepSubtitle}>{subtitle}</div></div>
        </div>)}</div>
      </div>
      <div className={styles.assessmentContent}>
        <div className={styles.assessmentHeader}><span>Safety check</span><span className={styles.conditionTag}>Allergic rhinitis</span></div>
        <div className={styles.questionHeading}>Are any urgent symptoms present?</div>
        <div className={styles.questions}>{questions.map(question => <div className={styles.question} key={question}>
          <div><div className={styles.questionTitle}>{question}</div><div className={styles.responseLabel}>Patient response</div></div>
          <span className={styles.answer}>No</span>
        </div>)}</div>
        <div className={styles.safeguard}><Icon name="shield" /><div><div className={styles.safeguardTitle}>No urgent red flags identified</div><p>Continue to treatment options. The pharmacist can still refer at any point.</p></div></div>
        <div className={styles.assessmentActions}><span className={styles.continue}>Continue</span></div>
      </div>
    </div>
  </Preview>;
}

export function MinorPhysicianHandoff({ className }: { className: string }) {
  return <AnimatedPreview className={`${className} ${styles.physician}`} label="Dr. Maya Thompson, Family Medicine in Toronto, Ontario. Matched physician details, registration 48291, fax 416 555-0182, physician note ready for eFax">
    <div className={styles.physicianDetails}>
      <div className={styles.physicianHeader}><div><div className={styles.physicianName}>Dr. Maya Thompson</div><div className={styles.physicianSpecialty}>Family Medicine · Toronto, ON</div></div><span className={styles.matched}>Matched</span></div>
      <div className={styles.physicianFields}>
        <div className={styles.physicianField}><span className={styles.fieldText} style={{ "--step-delay": "400ms" } as CSSProperties}>Registration number&nbsp; 48291</span></div>
        <div className={styles.physicianField}><span className={styles.fieldText} style={{ "--step-delay": "650ms" } as CSSProperties}>Fax&nbsp; (416) 555-0182</span></div>
        <div className={`${styles.physicianField} ${styles.notification}`}><span className={styles.fieldText} style={{ "--step-delay": "900ms" } as CSSProperties}>Notification&nbsp; Send on completion</span></div>
      </div>
    </div>
    <div className={styles.faxStatus}><Icon name="fax" /><span>Physician note ready for eFax</span><span className={styles.faxReady}>Ready</span></div>
  </AnimatedPreview>;
}

const followupSteps = [
  ["Today", "Visit completed", "Record and care plan sent"],
  ["In 3 days", "Patient check-in", "Automated follow-up question"],
  ["If flagged", "Pharmacist review", "Only appears when action is needed"],
] as const;

const followupStartMs = 600;
const followupIntervalMs = 1000;
const followupMorphMs = 300;
const morphEase = [0.77, 0, 0.175, 1] as const;
// Original clock and tick geometry, expressed in a shared coordinate system.
// Both hand paths use M/L/L, allowing Motion to interpolate the actual shape.
const clockHands = "M12 8.529L12 12L14.6038 13.736";
const tickHands = "M6.992 11.682L10.4638 15.154L17.4073 7.343";
const clockFace = "M67.6997 303.607C66.1547 303.607 64.6444 304.065 63.3598 304.923C62.0752 305.782 61.074 307.002 60.4828 308.429C59.8916 309.856 59.7369 311.427 60.0383 312.942C60.3397 314.458 61.0836 315.85 62.1761 316.942C63.2686 318.034 64.6604 318.778 66.1757 319.08C67.691 319.381 69.2616 319.227 70.689 318.635C72.1164 318.044 73.3364 317.043 74.1947 315.758C75.053 314.474 75.5112 312.963 75.5112 311.418";

function FollowupStatusIcon({ visible, delayMs }: { visible: boolean; delayMs: number }) {
  const reduceMotion = useReducedMotion();
  const transition = reduceMotion ? { duration: 0 } : { duration: followupMorphMs / 1000, delay: delayMs / 1000, ease: morphEase };
  return <svg className={styles.statusIcon} viewBox="0 0 24 24" fill="none" strokeWidth="1.5623" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <motion.path d={clockFace} transform="translate(-55.6997 -299.418)" stroke="#2b0b91"
      initial={{ pathLength: 1, opacity: 1 }} animate={{ pathLength: visible ? 0 : 1, opacity: visible ? 0 : 1 }} transition={transition} />
    <motion.path initial={{ d: clockHands, stroke: "#2b0b91" }}
      animate={{ d: visible ? tickHands : clockHands, stroke: visible ? "#fff" : "#2b0b91" }} transition={transition} />
  </svg>;
}

export function MinorFollowup({ className }: { className: string }) {
  return <AnimatedPreview className={`${className} ${styles.followup}`} label="Illustrated follow-up workflow: visit completed today, patient check-in in three days, pharmacist review if flagged">
    {visible => <div className={styles.followupPanel}>
      <div className={styles.timeline}>{followupSteps.map(([when, title, description], index) => <div className={styles.timelineRow} key={title} style={{ "--step-delay": `${followupStartMs + index * followupIntervalMs}ms`, "--connector-delay": `${followupStartMs + followupMorphMs + index * followupIntervalMs}ms`, "--connector-duration": `${followupIntervalMs}ms` } as CSSProperties}>
        <span className={styles.timelineMarker}><FollowupStatusIcon visible={visible} delayMs={followupStartMs + index * followupIntervalMs} /></span>
        {index < 2 && <span className={styles.timelineConnector}><span /></span>}
        <span className={styles.timelineWhen}>{when}</span>
        <div className={styles.timelineCopy}><div className={styles.timelineTitle}>{title}</div><p>{description}</p></div>
      </div>)}</div>
      <Image className={styles.followupPharmacist} src={asset("followup-pharmacist.png")} alt="" width={1122} height={1402} sizes="(max-width: 760px) 45vw, (max-width: 1199px) 23vw, 280px" />
    </div>}
  </AnimatedPreview>;
}
