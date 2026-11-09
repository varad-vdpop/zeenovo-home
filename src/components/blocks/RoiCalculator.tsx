"use client";

import Image from "next/image";
import { useState } from "react";
import c from "@/app/products/clinical/page.module.css";
import b from "./blocks.module.css";

// Laid out on the approved Clinical workflow section: inputs on the left in the "Profile details" panel style,
// results on the right in the purple panel's glass frame.
// Assumptions are ZeeNovo's to confirm (content/README.md, open item 3). Visitors cannot edit them.
const ASSUMPTIONS = {
  documentationMinutesSavedPerService: 8,
  minutesSavedPerIncident: 15,
  minutesPerAssessment: 20,
};
const PLAN_PRICES = { Clinical: 29.99, Assure: 19.99, Combo: 44.99 } as const;
type Plan = keyof typeof PLAN_PRICES;

const money = new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD", maximumFractionDigits: 0 });

export default function RoiCalculator() {
  const [assessments, setAssessments] = useState(40);
  const [fee, setFee] = useState(19);
  const [vaccinations, setVaccinations] = useState(120);
  const [incidents, setIncidents] = useState(6);
  const [hourly, setHourly] = useState(55);
  const [plan, setPlan] = useState<Plan>("Combo");

  const clinicalServices = plan === "Assure" ? 0 : assessments + vaccinations;
  const incidentReports = plan === "Clinical" ? 0 : incidents;
  const minutesSaved = clinicalServices * ASSUMPTIONS.documentationMinutesSavedPerService + incidentReports * ASSUMPTIONS.minutesSavedPerIncident;
  const hoursSaved = minutesSaved / 60;
  const timeValue = hoursSaved * hourly;
  const extraAssessments = plan === "Assure" ? 0 : Math.floor(minutesSaved / ASSUMPTIONS.minutesPerAssessment);
  const extraRevenue = extraAssessments * fee;
  const cost = PLAN_PRICES[plan];
  const net = timeValue + extraRevenue - cost;

  const number = (label: string, value: number, set: (value: number) => void) => <label>
    <span className={b.label}>{label}</span>
    <input className={b.field} type="number" min={0} value={value} onChange={(event) => set(Math.max(0, Number(event.target.value) || 0))} />
  </label>;

  return <section className={`${c.workflow} ${b.panelSection}`}>
    <div className={c.workflowPatterns} aria-hidden="true">
      <Image className={c.workflowLines} src="/assets/clinical/workflow-lines.svg" alt="" width={939.707} height={757.707} />
      <Image className={c.workflowBottomLines} src="/assets/clinical/workflow-lines.svg" alt="" width={939.707} height={757.707} />
    </div>
    <div className={`${c.workflowInner} ${b.panelInner}`}>
      <div className={`${c.workflowCopy} ${b.panelCopy}`}>
        <p className={c.eyebrow}>ROI calculator</p>
        <h2>What is ZeeNovo<br /> worth to your pharmacy?</h2>
        <p className={c.workflowDescription}>Enter a few numbers from a typical month. The estimate updates as you type.</p>
        <div className={`${b.panel} ${b.panelSpaced}`}>
          <div className={b.panelHeading}>Your pharmacy</div>
          <div className={b.fields}>
            {number("Minor ailments per month", assessments, setAssessments)}
            {number("Fee per assessment (C$)", fee, setFee)}
            {number("Vaccinations per month", vaccinations, setVaccinations)}
            {number("Incident reports per month", incidents, setIncidents)}
            {number("Staff cost per hour (C$)", hourly, setHourly)}
            <label><span className={b.label}>Plan</span>
              <select className={b.field} value={plan} onChange={(event) => setPlan(event.target.value as Plan)}>{Object.keys(PLAN_PRICES).map((key) => <option key={key}>{key}</option>)}</select>
            </label>
          </div>
          <p className={b.consent}>Assumes {ASSUMPTIONS.documentationMinutesSavedPerService} minutes of documentation saved per clinical service, {ASSUMPTIONS.minutesSavedPerIncident} minutes saved per incident report and {ASSUMPTIONS.minutesPerAssessment} minutes per additional assessment.</p>
        </div>
      </div>
      <div className={`${c.workflowArt} ${b.panelArt}`}>
        <div className={`${c.workflowForm} ${b.panelFrame}`}>
          <div className={b.panel} aria-live="polite">
            <div className={b.panelHeading}>Your monthly estimate</div>
            <dl className={b.results}>
              <div><dt>Staff hours saved</dt><dd>{hoursSaved.toFixed(1)}</dd></div>
              <div><dt>Value of time saved</dt><dd>{money.format(timeValue)}</dd></div>
              <div><dt>Additional assessments possible</dt><dd>{extraAssessments}</dd></div>
              <div><dt>Additional clinical revenue</dt><dd>{money.format(extraRevenue)}</dd></div>
              <div><dt>ZeeNovo cost</dt><dd>{money.format(cost)}</dd></div>
              <div className={b.resultTotal}><dt>Estimated monthly return</dt><dd>{money.format(net)}</dd></div>
            </dl>
            <p className={b.consent}>This is an estimate based on the numbers you entered and the assumptions shown. It is not a guarantee of revenue. Funded rates and eligibility vary by province.</p>
          </div>
        </div>
      </div>
    </div>
  </section>;
}
