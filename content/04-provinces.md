# Provinces

The quote sets these as one layout with province-specific terminology. Every province page uses the Ontario page structure: HERO-PROVINCE, reality cards, program cards, outcomes wave, CTA-MAIN.

Program names, regulator names and condition counts must be signed off by ZeeNovo's clinical lead before publishing `[CONFIRM 14]`. Availability per province is `[CONFIRM 6]`. Each page has a status line in the hero that can say either "Available now" or "Launching in [province]. Join the list."

---

## `/provinces` Provinces overview

Status: **route exists but renders the Ontario page**. Needs its own overview using the Ontario hero and program card blocks.

**Meta title:** ZeeNovo by Province | Canadian pharmacy software
**Meta description:** Assessment logic, terminology and documentation set up for each province's pharmacy programs.

**HERO-PROVINCE** (map replaced by the Canada map from the home page)
- Eyebrow: Canada
- H1: Set up for your / province's programs.
- Description: Pharmacist scope is different in every province. ZeeNovo's assessments, terminology and documentation follow the rules where you practise.
- Buttons: Register Pharmacy · Book a Demo
- Signal card: Province logic · Minor ailments · Scope → assessment → documentation · Province-specific

**Program cards** (7, one per province, links to each page)
- Eyebrow: Explore by province
- H2: Choose your province.
- Side: Each page lists the programs ZeeNovo supports there today.
- Cards: Ontario · Alberta · British Columbia · Saskatchewan · Nova Scotia · New Brunswick · Manitoba (each with status line `[CONFIRM 6]`)

**CTA-MAIN** (site default)

---

## `/provinces/ontario` Ontario

Status: **built**. Approved copy kept unless listed.

| Section | Field | Change |
|---|---|---|
| Hero | Description | Kept. |
| Hero signal badge | | OCP aligned (kept, `[CONFIRM 14]`) |
| Program cards | | Kept: Minor ailments, end to end · MedsCheck ready reviews · UIIP and public immunization · OCP inspection readiness |
| Outcomes | H2 | What Ontario pharmacies / run on ZeeNovo (brand casing fixed) |
| CTA | All | Site default: Get started / See ZeeNovo with your own services. / Book a Demo |

---

## Province template

Fields to fill per province. Ontario is the reference.

- Eyebrow: [Province] · Canada
- H1: ZeeNovo for / [Province] pharmacies.
- Description: Assessment flows, documentation and terminology for [programs], structured to [regulator] expectations.
- Signal card: [Province] workflow · [lead program] · Assessment → documentation → follow-up · [regulator short name] ready
- Reality cards (3): workload, documentation, readiness, with the program names used in that province
- Program cards (4): the four programs that matter most there
- Outcomes H2: What [Province] pharmacies / run on ZeeNovo

---

## `/provinces/alberta` Alberta

**Meta title:** Alberta Pharmacies | ZeeNovo
**Meta description:** Assessment, prescribing and care plan documentation for Alberta pharmacists, structured to Alberta College of Pharmacy expectations.

- Eyebrow: Alberta · Canada
- H1: ZeeNovo for / Alberta pharmacies.
- Description: Assessment and prescribing workflows, care plan documentation and publicly funded immunization, structured to Alberta College of Pharmacy standards.
- Signal card: Alberta workflow · Assess and prescribe · Assessment → documentation → follow-up · ACP ready
- Reality H2: The week-to-week reality.
  1. Broad scope, more to record: Prescribing authority means every decision needs a clear rationale on file.
  2. Care plans take time: Medication management assessments and care plans compete with dispensing.
  3. Readiness is ongoing: ACP standards need to be visible in daily work, not rebuilt for an assessment.
- Program cards:
  1. Assess and prescribe: Guided assessments with prescribing rationale recorded.
  2. Care plans: Medication management assessments and follow-up dates on one record.
  3. Publicly funded immunization: Influenza and COVID-19 bookings and records.
  4. ACP readiness: Self-assessment and exports for practice visits.
- Outcomes H2: What Alberta pharmacies / run on ZeeNovo

---

## `/provinces/british-columbia` British Columbia

**Meta title:** British Columbia Pharmacies | ZeeNovo
**Meta description:** Minor ailments and contraception assessments, medication reviews and immunization for BC pharmacists, structured to CPBC expectations.

- Eyebrow: British Columbia · Canada
- H1: ZeeNovo for / BC pharmacies.
- Description: Assessment flows for BC's Minor Ailments and Contraception Service, medication reviews and publicly funded immunization, structured to CPBC expectations.
- Signal card: BC workflow · Minor ailments and contraception · Assessment → documentation → follow-up · CPBC ready
- Reality H2: The week-to-week reality.
  1. A wider service list: Minor ailments and contraception arrive alongside dispensing and immunization.
  2. Every assessment is recorded: Rationale, outcome and physician notification are part of the service.
  3. Readiness is part of the work: CPBC expectations need to be met in the workflow, not after it.
- Program cards:
  1. Minor ailments and contraception: Guided assessments for the conditions BC pharmacists can treat.
  2. Medication reviews: Structured reviews with care plans and follow-up.
  3. Publicly funded immunization: Seasonal vaccine bookings and records.
  4. CPBC readiness: Self-assessment and audit-ready records.
- Outcomes H2: What BC pharmacies / run on ZeeNovo

---

## `/provinces/saskatchewan` Saskatchewan

**Meta title:** Saskatchewan Pharmacies | ZeeNovo
**Meta description:** Minor ailments prescribing, medication assessments and immunization for Saskatchewan pharmacists, structured to SCPP expectations.

- Eyebrow: Saskatchewan · Canada
- H1: ZeeNovo for / Saskatchewan pharmacies.
- Description: Minor ailments prescribing, medication assessments and publicly funded immunization, structured to Saskatchewan College of Pharmacy Professionals standards.
- Signal card: Saskatchewan workflow · Minor ailments · Assessment → documentation → follow-up · SCPP ready
- Reality H2: The week-to-week reality.
  1. Rural and urban demand: Patients rely on the pharmacy where a clinic is far away.
  2. Every service carries documentation: The record is part of the service, not an extra.
  3. Readiness is part of the work: SCPP standards need to be visible in daily practice.
- Program cards:
  1. Minor ailments, end to end: Guided assessments and prescribing records.
  2. Medication assessments: Reviews with care plans and follow-up.
  3. Publicly funded immunization: Influenza and COVID-19 bookings and records.
  4. SCPP readiness: Self-assessment and exports.
- Outcomes H2: What Saskatchewan pharmacies / run on ZeeNovo

---

## `/provinces/nova-scotia` Nova Scotia

**Meta title:** Nova Scotia Pharmacies | ZeeNovo
**Meta description:** Pharmacist assessments, prescribing and immunization for Nova Scotia pharmacies, structured to NSCP expectations.

- Eyebrow: Nova Scotia · Canada
- H1: ZeeNovo for / Nova Scotia pharmacies.
- Description: Assessment and prescribing workflows for Nova Scotia's publicly funded pharmacy services and immunization, structured to Nova Scotia College of Pharmacists standards.
- Signal card: Nova Scotia workflow · Pharmacist assessments · Assessment → documentation → follow-up · NSCP ready
- Reality H2: The week-to-week reality.
  1. Primary care at the counter: Patients come to the pharmacy first for more conditions each year.
  2. Every service carries documentation: Assessments, outcomes and physician communication need a clear record.
  3. Readiness is part of the work: NSCP standards are easier to meet when the workflow records them.
- Program cards:
  1. Pharmacist assessments: Guided assessments for publicly funded conditions.
  2. Prescribing records: Rationale and outcome on every visit.
  3. Publicly funded immunization: Seasonal vaccine bookings and records.
  4. NSCP readiness: Self-assessment and audit-ready records.
- Outcomes H2: What Nova Scotia pharmacies / run on ZeeNovo

---

## `/provinces/new-brunswick` New Brunswick

**Meta title:** New Brunswick Pharmacies | ZeeNovo
**Meta description:** Minor ailments assessments, prescribing and immunization for New Brunswick pharmacists, structured to NBCP expectations.

- Eyebrow: New Brunswick · Canada
- H1: ZeeNovo for / New Brunswick pharmacies.
- Description: Minor ailments assessments, prescribing records and publicly funded immunization, structured to New Brunswick College of Pharmacists standards.
- Signal card: New Brunswick workflow · Minor ailments · Assessment → documentation → follow-up · NBCP ready
- Reality H2: The week-to-week reality.
  1. More patients, same team: Expanded scope brings more visits to the same staff.
  2. Every service carries documentation: The assessment is complete only when it is recorded.
  3. Readiness is part of the work: NBCP standards need to show in daily practice.
- Program cards:
  1. Minor ailments, end to end: Guided assessments and prescribing records.
  2. Medication reviews: Reviews with care plans and follow-up.
  3. Publicly funded immunization: Seasonal vaccine bookings and records.
  4. NBCP readiness: Self-assessment and exports.
- Outcomes H2: What New Brunswick pharmacies / run on ZeeNovo

---

## `/provinces/manitoba` Manitoba

**Meta title:** Manitoba Pharmacies | ZeeNovo
**Meta description:** Minor ailments assessments, prescribing and immunization for Manitoba pharmacists, structured to CPhM expectations.

- Eyebrow: Manitoba · Canada
- H1: ZeeNovo for / Manitoba pharmacies.
- Description: Minor ailments assessments, prescribing records and publicly funded immunization, structured to College of Pharmacists of Manitoba standards.
- Signal card: Manitoba workflow · Minor ailments · Assessment → documentation → follow-up · CPhM ready
- Reality H2: The week-to-week reality.
  1. Care rarely arrives one lane at a time: Assessments, immunization and dispensing share the same day.
  2. Every service carries documentation: Rationale, outcome and follow-up need to be on file.
  3. Readiness is part of the work: CPhM standards are easier to meet when the workflow records them.
- Program cards:
  1. Minor ailments, end to end: Guided assessments and prescribing records.
  2. Medication reviews: Reviews with care plans and follow-up.
  3. Publicly funded immunization: Seasonal vaccine bookings and records.
  4. CPhM readiness: Self-assessment and exports.
- Outcomes H2: What Manitoba pharmacies / run on ZeeNovo
