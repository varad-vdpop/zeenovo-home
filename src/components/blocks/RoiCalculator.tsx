"use client";

import { useState } from "react";
import b from "./blocks.module.css";

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

  const number = (label: string, help: string, value: number, set: (value: number) => void) => <label>
    {label}<small>{help}</small>
    <input type="number" min={0} value={value} onChange={(event) => set(Math.max(0, Number(event.target.value) || 0))} />
  </label>;

  return <div>
    <div className={b.draftHeading}>
      <p className={b.eyebrow}>ROI calculator</p>
      <h2>What is ZeeNovo<br />worth to your pharmacy?</h2>
      <p className={b.lede}>Enter a few numbers from a typical month. The estimate updates as you type.</p>
    </div>
    <div className={b.roi}>
      <div className={b.roiInputs}>
        {number("Minor ailments assessments per month", "Count all conditions.", assessments, setAssessments)}
        {number("Average fee per assessment (C$)", "Use your province's funded rate.", fee, setFee)}
        {number("Vaccinations per month", "Include flu, COVID-19 and others.", vaccinations, setVaccinations)}
        {number("Incident reports per month", "Include near misses.", incidents, setIncidents)}
        {number("Staff cost per hour (C$)", "Whoever does the admin today.", hourly, setHourly)}
        <label>Your plan<small>Clinical, Assure or Combo.</small>
          <select value={plan} onChange={(event) => setPlan(event.target.value as Plan)}>{Object.keys(PLAN_PRICES).map((key) => <option key={key}>{key}</option>)}</select>
        </label>
        <p className={b.roiAssumptions}>Assumptions: {ASSUMPTIONS.documentationMinutesSavedPerService} minutes of documentation saved per clinical service, {ASSUMPTIONS.minutesSavedPerIncident} minutes saved per incident report, and {ASSUMPTIONS.minutesPerAssessment} minutes per additional assessment.</p>
      </div>
      <div className={b.roiResults} aria-live="polite">
        <dl>
          <div><dt>Staff hours saved per month</dt><dd>{hoursSaved.toFixed(1)}</dd></div>
          <div><dt>Value of time saved</dt><dd>{money.format(timeValue)}</dd></div>
          <div><dt>Additional assessments the time could cover</dt><dd>{extraAssessments}</dd></div>
          <div><dt>Additional clinical revenue</dt><dd>{money.format(extraRevenue)}</dd></div>
          <div><dt>ZeeNovo cost per month</dt><dd>{money.format(cost)}</dd></div>
          <div className={b.roiTotal}><dt>Estimated monthly return</dt><dd>{money.format(net)}</dd></div>
        </dl>
        <p className={b.roiDisclaimer}>This is an estimate based on the numbers you entered and the assumptions shown. It is not a guarantee of revenue. Funded rates and eligibility vary by province.</p>
      </div>
    </div>
  </div>;
}
