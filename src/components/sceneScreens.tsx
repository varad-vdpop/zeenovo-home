import Image from "next/image";
import type { ReactNode } from "react";
import { Avatar, Badge, Bars, Button, Checkbox, Combobox, DatePicker, Field, Glyph, Head, Input, Radios, Rows, Segment, Select, Stat, Switch, styles } from "./SceneUi";

// The screens drawn in SceneBento cards, keyed by feature id (src/content/features.json), with a description of each
// for screen readers. People, dates, medicines, devices and numbers are sample data.

const followup = [
  { q: "How are your symptoms now?", options: ["Resolved", "Improved", "No change"], a: "Improved" },
  { q: "Did you use the treatment as advised?", options: ["Every day", "Some days", "Not yet"], a: "Every day" },
];

const portalScenes: Record<string, ReactNode> = {
  patientLogins: <div className={styles.panel}>
    <Field label="Email"><Input lead="mail" value="priya.shah@email.com" /></Field>
    <Field label="Password"><Input lead="lock" value="••••••••••••" /></Field>
    <Field label="One-time code">
      <span className={styles.otp}>
        <span className={styles.otpGroup}><i>4</i><i>8</i><i>2</i></span>
        <span className={styles.otpDot} />
        <span className={styles.otpGroup}><i>9</i><i>1</i><i className={styles.otpActive}><b /></i></span>
      </span>
    </Field>
    <Button>Verify and sign in</Button>
  </div>,

  manageAppointments: <div className={styles.panel}>
    <p className={styles.panelHead}>Reschedule · Flu vaccine<small>Was Fri, Dec 4</small></p>
    <DatePicker month="December 2026" startWeekday={2} length={31} firstOpen={4} booked={4} picked={9} closed={[25]}
      dayLabel="Wed, Dec 9" times={["9:30 am", "10:15 am", "11:45 am", "2:30 pm", "4:00 pm"]} time="10:15 am" />
  </div>,

  portalRx: <div className={styles.panel}>
    <Head title="New prescription" note="Northfield Pharmacy" />
    <Field label="Prescription image"><span className={styles.upload}><Glyph name="upload" />prescription.jpg<small>820 KB</small></span></Field>
    <Field label="Mode of receiving"><span className={styles.choice}><span>Delivery</span><span className={styles.choiceOn}>Pick up</span></span></Field>
    <Field label="Pick-up date"><Input lead="calendar" value="Wed, Dec 9, 2026" /></Field>
  </div>,

  portalReminders: <div className={styles.panel}>
    <p className={styles.panelHead}>Follow-up · Cold sores<small>2 of 3 answered</small></p>
    {followup.map((question) => <div key={question.q} className={styles.radioGroup}>
      <span className={styles.label}>{question.q}</span>
      <span className={styles.radioRow}>{question.options.map((option) => <span key={option} className={`${styles.radio} ${option === question.a ? styles.radioOn : ""}`}><i />{option}</span>)}</span>
    </div>)}
  </div>,

  portalDoseReplies: <div className={styles.panel}>
    <p className={styles.panelHead}>Shingrix · Dose 2 of 2<small>Due from Mon, Feb 15</small></p>
    <DatePicker month="February 2027" startWeekday={1} length={28} firstOpen={15} picked={15}
      dayLabel="Mon, Feb 15" times={["9:30 am", "11:00 am", "1:45 pm", "3:30 pm"]} time="11:00 am" />
    <Button>Book dose 2 · Mon, Feb 15, 11:00 am</Button>
  </div>,

  patientProfile: <div className={`${styles.panel} ${styles.physician}`}>
    <div className={styles.photo}>
      <span className={styles.photoCircle} aria-hidden="true" />
      <Image src="/assets/independent-pharmacies-hero.png" alt="" width={1086} height={1448} sizes="240px" />
    </div>
    <div className={styles.stack}>
      <Field label="Family physician"><Input value="Dr. Daniel Reyes" /></Field>
      <Field label="Clinic"><Input value="Elm Street Family Health" /></Field>
      <Field label="Fax"><Input value="(519) 555-0193" /></Field>
    </div>
  </div>,
};

const minorScenes: Record<string, ReactNode> = {
  medicineSig: <div className={styles.panel}>
    <p className={styles.panelHead}>Allergic rhinitis<small>Your saved directions</small></p>
    <Field label="Medicine and directions"><Select open value="Cetirizine 10 mg · 1 tablet once daily" options={["Cetirizine 10 mg · 1 tablet once daily", "Loratadine 10 mg · 1 tablet once daily", "Fluticasone nasal spray · 2 sprays each nostril daily"]} /></Field>
    <span className={styles.buttonRow}><Button outline>Change</Button><Button>Confirm directions</Button></span>
  </div>,

  customDrug: <div className={styles.panel}>
    <Field label="Medicine"><Combobox value="Bilastine 20 mg tablet" query="anti" options={["Bilastine 20 mg tablet", "Desloratadine 5 mg tablet", "Fexofenadine 180 mg tablet"]} /></Field>
    <Field label="Directions"><Input value="1 tablet once daily, 1 hour before food" /></Field>
  </div>,

  selfCare: <div className={styles.panel}>
    <p className={styles.panelHead}>Common cold and fever<small>3 selected</small></p>
    <Checkbox checked label="Rest and drink plenty of fluids" />
    <Checkbox checked label="Gargle warm salt water for a sore throat" />
    <Checkbox checked label="Use a humidifier or steam to ease congestion" />
    <Checkbox label="Check your temperature morning and evening" />
  </div>,

  healthFlags: <div className={styles.panel}>
    <p className={styles.panelHead}>Health flags<small>2 on the record</small></p>
    <Switch flag="pregnant" label="Pregnant" />
    <Switch flag="breastfeeding" on label="Breastfeeding" />
    <Switch flag="allergic" on label="Allergic to medicine" detail="Penicillin" />
    <Switch flag="immunocompromised" label="Immunocompromised" />
  </div>,

  autoFollowup: <div className={styles.panel}>
    <Field label="First follow-up"><Select value="3 days after the visit" /></Field>
    <Field label="Attempts if the patient doesn't answer">
      <span className={styles.segment}><i>1</i><i>2</i><i className={styles.segmentOn}>3</i></span>
    </Field>
    <Switch on label="Flag answers that need a pharmacist" />
  </div>,
};

const portalLabels: Record<string, string> = {
  medicineSig: "Choosing saved directions for allergic rhinitis",
  customDrug: "Searching for a medicine and choosing it from the list, then entering directions",
  selfCare: "Choosing self-care measures for a common cold and fever",
  healthFlags: "Health flags on the patient's record: breastfeeding and a penicillin allergy",
  autoFollowup: "Automatic follow-up three days after the visit, with up to three attempts",
  patientLogins: "Secure sign-in with email, password and a one-time code",
  manageAppointments: "Rescheduling a flu vaccine to Wednesday, December 9 at 10:15 am on a calendar",
  portalRx: "Requesting a new prescription: image uploaded, pick-up chosen and a date set",
  portalReminders: "Answering two follow-up questions by choosing one answer each",
  portalDoseReplies: "Booking the second vaccine dose for Monday, February 15 at 11:00 am on a calendar",
  patientProfile: "Family physician details on the patient's profile",
};

// Vaccinations ("Public immunization at clinic speed")
const vaccinationScenes: Record<string, ReactNode> = {
  quickVaccineFlow: <div className={styles.panel}>
    <Head title="Quick Complete · Flu vaccine" note="Publicly funded" />
    <Rows rows={[
      { title: "Screening", detail: "No contraindications", lead: <span className={`${styles.tile} ${styles.tileOk}`}><Glyph name="check" /></span>, status: "Done", tone: "ok" },
      { title: "Consent", detail: "Signed by the patient", lead: <span className={`${styles.tile} ${styles.tileOk}`}><Glyph name="check" /></span>, status: "Done", tone: "ok" },
    ]} />
    <span className={styles.pair}>
      <Field label="Route"><Input muted value="Intramuscular" /></Field>
      <Field label="Site"><Select value="Left deltoid" /></Field>
    </span>
    <Button>Complete and document</Button>
  </div>,

  vaccineAutofill: <div className={styles.panel}>
    <Head title="Saved preferences" note="2026–27 season" />
    <Field label="Vaccine"><Select value="Fluzone High-Dose Quadrivalent" /></Field>
    <span className={styles.pair}>
      <Field label="Lot"><Input value="UJ482AA" /></Field>
      <Field label="Expiry"><Input value="Jun 30, 2027" /></Field>
    </span>
    <Switch on label="Fill in on every visit" />
  </div>,

  vaccineEditVisit: <div className={styles.panel}>
    <Head title="This visit only" note="Priya Shah" />
    <Field label="Site"><Select open value="Right deltoid" options={["Left deltoid", "Right deltoid", "Left thigh"]} /></Field>
    <span className={styles.muted2}>Your saved preference stays Left deltoid.</span>
  </div>,

  injections: <div className={styles.panel}>
    <Head title="Vitamin B12 injection" note="Series of 3" />
    <Rows rows={[
      { title: "Dose 1", detail: "Given Nov 3", status: "Given", tone: "ok" },
      { title: "Dose 2", detail: "Booked Dec 1, 10:00 am", status: "Booked", tone: "info" },
      { title: "Dose 3", detail: "Rebooking link sends Dec 22", status: "Scheduled", tone: "neutral" },
    ]} />
  </div>,

  groupBooking: <div className={styles.panel}>
    <Head title="Group booking · Flu vaccine" note="Sat, Dec 12 · 10:30 am" />
    <Rows rows={[
      { title: "Maria Lopez", detail: "Own record", lead: <Avatar initials="ML" /> },
      { title: "Daniel Lopez", detail: "Own record", lead: <Avatar initials="DL" /> },
      { title: "Sofia Lopez, 9", detail: "Own record", lead: <Avatar initials="SL" /> },
    ]} />
    <span className={styles.buttonRow}><Button outline><Glyph name="plus" />Add person</Button></span>
  </div>,

  walkIn: <div className={styles.panel}>
    <Head title="Walk-in · Ahmed Khan" note="2:10 pm" />
    <Field label="When"><Segment options={["See now", "Book for later"]} value="See now" /></Field>
    <Field label="Service"><Select value="Flu vaccine" /></Field>
    <span className={styles.muted2}>Added to today's calendar, beside online bookings.</span>
  </div>,
};

// Dose reminders ("More completed dose series")
const reminderScenes: Record<string, ReactNode> = {
  doseReminders: <div className={styles.panel}>
    <span className={styles.mailHead}>
      <span className={styles.mailFrom}><span className={styles.brandMark}>N</span><span><b>Northfield Pharmacy</b><small>To priya.shah@email.com</small></span></span>
      <small>Feb 1, 9:00 am</small>
    </span>
    <span className={styles.mailBody}>
      <b>Your second Shingrix dose is due</b>
      <p>Hi Priya, your second dose of Shingrix is due from Monday, February 15. Book a time that suits you, or let us know if you've had it somewhere else.</p>
      <span className={styles.mailFacts}><span><small>Vaccine</small>Shingrix · Dose 2 of 2</span><span><small>Due from</small>Mon, Feb 15</span></span>
      <span className={styles.buttonRow} style={{ justifyContent: "flex-start" }}><Button>Book dose 2</Button><Button outline>I've had this dose</Button></span>
    </span>
  </div>,

  reminderBookingLink: <div className={`${styles.panel} ${styles.narrow}`}>
    <span className={styles.service}><span className={styles.tile}><Glyph name="calendar" /></span><span><b>Shingrix · Dose 2</b><small>15 min · Northfield Pharmacy, 48 Elm Street</small></span></span>
    <DatePicker month="February 2027" startWeekday={1} length={28} firstOpen={15} picked={15}
      dayLabel="Mon, Feb 15" times={["9:30 am", "11:00 am", "1:45 pm", "3:30 pm"]} time="11:00 am" />
    <span className={styles.buttonRow}><Button>Confirm booking</Button></span>
  </div>,

  doseElsewhere: <div className={styles.panel}>
    <span className={styles.bigHead}><b>Shingrix · Dose 2 of 2</b><small>Due from Monday, February 15</small></span>
    <Radios label="1. Have you already had this dose?" options={["Not yet", "Yes, elsewhere"]} value="Yes, elsewhere" />
    <Field label="2. Where and when did you get it?">
      <span className={styles.pair}><Input value="Elm Street Clinic" /><Input lead="calendar" value="Feb 10, 2027" /></span>
    </Field>
    <span className={styles.submitRow}><span><Glyph name="check" />No more reminders for this dose</span><Button>Send</Button></span>
  </div>,

  reminderHistory: <div className={styles.panel}>
    <Head title="Reminder history · Priya Shah" note="Shingrix series" />
    <span className={styles.stats}><Stat label="Sent" value="3" /><Stat label="Booked from email" value="1" /></span>
    <Rows rows={[
      { title: "Dose 2 due", detail: "Sent Feb 1 · opened Feb 1", lead: <span className={styles.tile}><Glyph name="mail" /></span>, status: "Booked", tone: "ok" },
      { title: "Dose 2, second notice", detail: "Not sent: dose booked", lead: <span className={styles.tile}><Glyph name="mail" /></span>, status: "Skipped", tone: "neutral" },
      { title: "Dose 1 confirmation", detail: "Sent Dec 15", lead: <span className={styles.tile}><Glyph name="mail" /></span>, status: "Delivered", tone: "info" },
    ]} />
  </div>,
};

// Point-of-care testing ("Testing that stays with the visit")
const testingScenes: Record<string, ReactNode> = {
  poct: <div className={styles.panel}>
    <Head title="Blood glucose" note="Priya Shah" />
    <span className={styles.pair}>
      <Field label="Result"><Input value="6.8 mmol/L" /></Field>
      <Field label="Fasting"><Segment options={["Yes", "No"]} value="Yes" /></Field>
    </span>
    <Field label="Device"><Select value="Accu-Chek Guide · SN 4471" /></Field>
    <span className={styles.buttonRow}><Button outline><Glyph name="printer" />Fax physician report</Button><Button>Save result</Button></span>
  </div>,

  poctDevices: <div className={styles.panel}>
    <Head title="Devices" note="3 registered" />
    <Rows rows={[
      { title: "Accu-Chek Guide", detail: "Blood glucose", status: "Active", tone: "ok" },
      { title: "Omron HEM-7156", detail: "Blood pressure", status: "Active", tone: "ok" },
      { title: "HemoCue Hb 201+", detail: "Haemoglobin", status: "Check due", tone: "warn" },
    ]} />
  </div>,

  poctWorkflows: <div className={styles.panel}>
    <Field label="Workflow"><Segment options={["Standard", "Diabetes-enhanced"]} value="Diabetes-enhanced" /></Field>
    <Checkbox checked label="Most recent HbA1c on file" />
    <Checkbox checked label="Foot check recorded" />
    <Checkbox label="Last eye exam date" />
  </div>,

  poctPhysicianReport: <div className={styles.panel}>
    <Head title="Physician report" note="Blood glucose" />
    <Field label="To"><Input value="Dr. Daniel Reyes · (519) 555-0193" /></Field>
    <span className={styles.buttonRow}><Badge tone="ok">Faxed 2:14 pm</Badge><Button outline><Glyph name="printer" />Send again</Button></span>
  </div>,

  poctPatientReport: <div className={styles.panel}>
    <span className={styles.mailHead}>
      <span className={styles.mailFrom}><span className={styles.brandMark}>N</span><span><b>Your test result</b><small>Northfield Pharmacy · To priya.shah@email.com</small></span></span>
    </span>
    <span className={styles.result}>
      <span className={styles.resultTop}><small>Blood glucose · fasting</small><Badge tone="ok">In target</Badge></span>
      <b>6.8 <em>mmol/L</em></b>
      <span className={styles.range}><i style={{ left: "70%" }} /></span>
      <span className={styles.rangeScale}><span>4.0</span><span>Target 4.0 to 7.0 mmol/L</span><span>7.0</span></span>
    </span>
    <span className={styles.mailFacts}><span><small>Tested</small>Feb 10 · 9:40 am</span><span><small>Device</small>Accu-Chek Guide</span></span>
    <span className={styles.submitRow}><span><Glyph name="check" />Sent 9:52 am</span><Button outline><Glyph name="send" />Resend</Button></span>
  </div>,
};

// Appointments ("Start with the patients you already have")
const appointmentScenes: Record<string, ReactNode> = {
  csvImport: <div className={styles.panel}>
    <span className={styles.upload}><Glyph name="file" />patients-export.csv<small>2,418 rows</small></span>
    <Rows rows={[
      { title: "First name → First name", status: "Matched", tone: "ok" },
      { title: "DOB → Date of birth", status: "Matched", tone: "ok" },
      { title: "HCN → Health card number", status: "Matched", tone: "ok" },
    ]} />
    <Button>Import 2,418 patients</Button>
  </div>,

  familyDoctor: <div className={styles.panel}>
    <Field label="Family physician"><Combobox value="Dr. Daniel Reyes" query="Reyes" options={["Dr. Daniel Reyes", "Dr. Ana Reyes-Moore"]} /></Field>
    <Checkbox checked label="Save for future visits and faxes" />
  </div>,

  preVisitQuestionnaire: <div className={styles.panel}>
    <Head title="Before your visit" note="2 of 5" />
    <Radios label="Are you allergic to any medicines?" options={["Yes", "No"]} value="Yes" />
    <Field label="Which ones?"><Input value="Penicillin" /></Field>
    <Radios label="Are you pregnant or breastfeeding?" options={["Yes", "No"]} value="No" />
  </div>,

  readyForPharmacist: <div className={styles.panel}>
    <Head title="Intake · Ahmed Khan" note="Flu vaccine" />
    <Checkbox checked label="Profile and health card" />
    <Checkbox checked label="Screening answers" />
    <Checkbox checked label="Consent signed" />
    <span className={styles.buttonRow}><Badge tone="ok">Ready for the pharmacist</Badge></span>
  </div>,

  voiceBooking: <div className={styles.panel}>
    <span className={styles.quote}>“Book a flu shot for Saturday morning.”</span>
    <Rows rows={[
      { title: "Flu vaccine", detail: "Service matched", lead: <span className={styles.tile}><Glyph name="mic" /></span> },
      { title: "Sat, Dec 12 · 10:30 am", detail: "First open time", status: "Booked", tone: "ok" },
    ]} />
  </div>,
};

// Assure analytics ("What the dashboard shows you")
const analyticsScenes: Record<string, ReactNode> = {
  trendDashboards: <div className={styles.panel}>
    <Head title="Incidents and near misses" note="Last 6 months" />
    <Segment options={["Harm", "Medication", "Stage"]} value="Harm" />
    <Bars rows={[["No harm", 34], ["Mild", 12], ["Moderate", 4], ["Severe", 1]]} />
  </div>,

  contributingFactors: <div className={styles.panel}>
    <Head title="Contributing factors" note="This quarter" />
    <Bars rows={[["Workload", 9], ["Look-alikes", 7], ["Interruptions", 6], ["Labelling", 4]]} />
  </div>,

  discovery: <div className={styles.panel}>
    <Head title="Who caught it" note="This quarter" />
    <Rows rows={[
      { title: "Pharmacist", detail: "At the final check", value: "18" },
      { title: "Technician", detail: "During data entry", value: "9" },
      { title: "Patient", detail: "At pickup", value: "3" },
    ]} />
  </div>,

  patientDemographics: <div className={styles.panel}>
    <Head title="Patients involved" note="By age" />
    <Bars rows={[["Under 18", 4], ["18 to 44", 11], ["45 to 64", 15], ["65 and over", 20]]} />
  </div>,

  complianceDashboard: <div className={styles.panel}>
    <Head title="Compliance" note="Today" />
    <Rows rows={[
      { title: "Open incidents", value: "3" },
      { title: "SOP sign-offs", detail: "12 of 14 complete", status: "2 overdue", tone: "danger" },
      { title: "CQI follow-ups", detail: "5 of 5 complete", status: "Complete", tone: "ok" },
    ]} />
  </div>,
};

// Incident reporting case management ("From the report to the fix")
const incidentScenes: Record<string, ReactNode> = {
  rca: <div className={styles.panel}>
    <Head title="5 Whys · INC-0214" note="Wrong strength dispensed" />
    <Rows rows={[
      { title: "Why was the wrong strength picked?", detail: "Both strengths sit side by side" },
      { title: "Why are they side by side?", detail: "Shelved alphabetically, no separation" },
    ]} />
    <Field label="Where the gap occurred"><Select value="Storage and selection" /></Field>
  </div>,

  caseManagement: <div className={styles.panel}>
    <Rows rows={[
      { title: "INC-0214 · Wrong strength", detail: "Assigned to Priya Shah", status: "In review", tone: "info" },
      { title: "INC-0209 · Missed allergy", detail: "Assigned to Daniel Wong", status: "Open", tone: "warn" },
      { title: "INC-0198 · Label error", detail: "Closed Nov 20", status: "Closed", tone: "ok" },
    ]} />
  </div>,

  actionPlans: <div className={styles.panel}>
    <Head title="Action plan · INC-0214" note="2 of 3 done" />
    <Checkbox checked label="Separate the two strengths on the shelf" />
    <Checkbox checked label="Add a shelf alert label" />
    <Checkbox label="Review at the December CQI meeting" />
  </div>,

  deidentify: <div className={styles.panel}>
    <Switch on label="Protect patient and staff details" />
    <Rows rows={[
      { title: "Patient", detail: "Hidden in shared reports", lead: <span className={styles.tile}><Glyph name="eyeOff" /></span> },
      { title: "Staff involved", detail: "Hidden in shared reports", lead: <span className={styles.tile}><Glyph name="eyeOff" /></span> },
    ]} />
  </div>,
};

// Multi-location groups privacy ("The same privacy rules on every screen")
const privacyScenes: Record<string, ReactNode> = {
  minimumCohort: <div className={styles.panel}>
    <Head title="Flu vaccines by location" note="This month" />
    <span className={styles.cells}>
      <span>Location</span><span>Visits</span><span>Completed</span>
      <span>Elm Street</span><span>212</span><span>96%</span>
      <span>King Street</span><span>148</span><span>94%</span>
      <span>Riverside</span><span className={styles.hidden}>Insufficient data</span><span className={styles.hidden}>—</span>
    </span>
  </div>,

  suppression: <div className={styles.panel}>
    <span className={styles.cells}>
      <span>Age band</span><span>Visits</span><span>Share</span>
      <span>18 to 44</span><span className={styles.hidden}>Protected</span><span className={styles.hidden}>—</span>
      <span>45 to 64</span><span className={styles.hidden}>Protected</span><span className={styles.hidden}>—</span>
      <span>All ages</span><span>360</span><span>100%</span>
    </span>
  </div>,

  privacyFilters: <div className={styles.panel}>
    <span className={styles.pair}>
      <Field label="Location"><Select value="Riverside" /></Field>
      <Field label="Age band"><Select value="65 and over" /></Field>
    </span>
    <span className={styles.alert}><Glyph name="lock" /><span><b>Insufficient data</b>This filter would show a group below the privacy threshold.</span></span>
  </div>,

  privacyBroaderCuts: <div className={styles.panel}>
    <Field label="Period"><Segment options={["Day", "Week", "Month"]} value="Month" /></Field>
    <Field label="Age"><Segment options={["Under 45", "45 to 64", "65+"]} value="65+" /></Field>
    <span className={styles.muted2}>Daily figures are too small for this group, so monthly totals are shown.</span>
  </div>,

  noPatientData: <div className={styles.panel}>
    <Head title="Never shown" />
    <Rows rows={[
      { title: "Names and contact details", status: "Not shown", tone: "neutral" },
      { title: "Health card numbers", status: "Not shown", tone: "neutral" },
      { title: "Medications and answers", status: "Not shown", tone: "neutral" },
    ]} />
  </div>,

  privacySameRules: <div className={styles.panel}>
    <Rows rows={[
      { title: "Cards and charts", status: "Same rules", tone: "ok" },
      { title: "Tables and rankings", status: "Same rules", tone: "ok" },
      { title: "Comparisons and downloads", status: "Same rules", tone: "ok" },
    ]} />
  </div>,

  privacyContext: <div className={styles.panel}>
    <Stat label="Follow-ups completed" value="72%" note="Response rate 81%" tone="info" />
    <span className={styles.stats}>
      <Stat label="Completed" value="144" />
      <Stat label="Sent" value="200" />
    </span>
  </div>,
};

// Pharmacy owners ("The numbers and controls owners ask for")
const ownerScenes: Record<string, ReactNode> = {
  performanceView: <div className={styles.panel}>
    <Stat label="Estimated revenue · November" value="$18,420" note="+12% on October" />
    <Bars unit="$" rows={[["Minor ailments", 9180], ["Vaccinations", 6240], ["Med reviews", 3000]]} />
  </div>,

  billingPins: <div className={styles.panel}>
    <Field label="Service"><Input muted value="Minor ailment · Uncomplicated UTI" /></Field>
    <span className={styles.pair}>
      <Field label="Province"><Input muted value="Ontario" /></Field>
      <Field label="Visit mode"><Input muted value="In person" /></Field>
    </span>
    <Stat label="Billing PIN" value="9858 2104" />
  </div>,

  followupTracking: <div className={styles.panel}>
    <Head title="Follow-ups" note="This month" />
    <Bars rows={[["Completed", 64], ["Awaiting answer", 12], ["Flagged for review", 3]]} />
  </div>,

  correctiveActions: <div className={styles.panel}>
    <Rows rows={[
      { title: "Open incidents", value: "3" },
      { title: "SOP sign-offs", detail: "Dispensing v2.1", status: "2 overdue", tone: "danger" },
      { title: "CQI follow-ups", detail: "November meeting", status: "Complete", tone: "ok" },
    ]} />
  </div>,

  unlimitedUsers: <div className={styles.panel}>
    <Rows rows={[
      { title: "Priya Shah", detail: "Pharmacist", lead: <Avatar initials="PS" /> },
      { title: "Daniel Wong", detail: "Technician", lead: <Avatar initials="DW" /> },
      { title: "Amara Okafor", detail: "Assistant", lead: <Avatar initials="AO" /> },
    ]} />
    <span className={styles.buttonRow}><Button outline><Glyph name="plus" />Invite user</Button></span>
  </div>,

  quickSetup: <div className={styles.panel}>
    <Head title="Setup" note="Day 1 · 2 of 3" />
    <Checkbox checked label="Import your patients" />
    <Checkbox checked label="Choose your services" />
    <Checkbox label="Open your calendar for booking" />
  </div>,
};


const moreLabels: Record<string, string> = {
  quickVaccineFlow: "Quick Complete for a publicly funded flu vaccine: screening and consent done, route and site filled in",
  vaccineAutofill: "Saved vaccine preferences for the season: vaccine, lot and expiry fill in on every visit",
  vaccineEditVisit: "Changing the injection site for one visit without changing the saved preference",
  injections: "A three-dose vitamin B12 injection series: one given, one booked, one rebooking link scheduled",
  groupBooking: "One group booking for three family members, each with their own record",
  walkIn: "A walk-in seen now and added to today's calendar",
  doseReminders: "A reminder email for a second Shingrix dose with a booking button",
  reminderBookingLink: "Choosing a time for the next dose from the reminder",
  doseElsewhere: "A patient reporting the dose was given at another clinic",
  reminderHistory: "Reminders sent to a patient, each with its status",
  poct: "Recording a blood glucose result with the testing device",
  poctDevices: "Three registered testing devices, one due for a check",
  poctWorkflows: "The diabetes-enhanced testing workflow with its extra checks",
  poctPhysicianReport: "A physician report faxed from the test result",
  poctPatientReport: "The result email the patient receives: fasting blood glucose of 6.8 mmol/L, within the 4.0 to 7.0 target range",
  csvImport: "Importing 2,418 patients from a CSV export with matched columns",
  familyDoctor: "Finding the family physician by name and saving them for future visits",
  preVisitQuestionnaire: "A patient answering intake questions before the visit",
  readyForPharmacist: "Intake complete and the visit marked ready for the pharmacist",
  voiceBooking: "A spoken request matched to a flu vaccine and booked for Saturday morning",
  trendDashboards: "Incidents and near misses by degree of harm over six months",
  contributingFactors: "The contributing factors that come up most often",
  discovery: "Who caught each incident, and at which stage",
  patientDemographics: "Patients involved in incidents, by age",
  complianceDashboard: "Open incidents, SOP sign-offs and CQI follow-ups, complete or overdue",
  rca: "A 5 Whys analysis finding where in the process the gap occurred",
  caseManagement: "Incident cases with owners and statuses",
  actionPlans: "An action plan with three steps, two done",
  deidentify: "Patient and staff details hidden in shared reports",
  minimumCohort: "Results by location, with a small location shown as insufficient data",
  suppression: "Figures protected so they can't be worked out from the total",
  privacyFilters: "A filter combination blocked because the group would be too small",
  privacyBroaderCuts: "Monthly periods and broad age bands used instead of narrower cuts",
  noPatientData: "Patient details that are never shown on the dashboard",
  privacySameRules: "The same privacy rules on cards, charts, tables and downloads",
  privacyContext: "A completion rate shown with its numerator, denominator and response rate",
  performanceView: "Estimated revenue for the month by service",
  billingPins: "The billing PIN shown for a minor ailment visit in Ontario",
  followupTracking: "Follow-up status across patients this month",
  correctiveActions: "Open incidents, overdue SOP sign-offs and CQI follow-ups",
  unlimitedUsers: "Team members with their roles and an invite button",
  quickSetup: "A three-step setup checklist, two steps done on day one",
};

export const scenes: Record<string, ReactNode> = { ...portalScenes, ...minorScenes, ...vaccinationScenes, ...reminderScenes, ...testingScenes, ...appointmentScenes, ...analyticsScenes, ...incidentScenes, ...privacyScenes, ...ownerScenes };
export const sceneLabels: Record<string, string> = { ...portalLabels, ...moreLabels };
