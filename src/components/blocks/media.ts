// Registry of approved, already-exported assets that page data can reference by key.
// Keeping keys here means page content never hard-codes asset paths.

export type MediaItem = { src: string; width: number; height: number };

export const people = {
  clinicalPharmacist: { src: "/assets/clinical/hero-pharmacist.png", width: 1086, height: 1448 },
  vaccinationPharmacist: { src: "/assets/clinical/vaccination-pharmacist.png", width: 1086, height: 1448 },
  minorPharmacist: { src: "/assets/minor-ailments/hero-woman.png", width: 1122, height: 1402 },
  independentPharmacist: { src: "/assets/independent-pharmacies-hero.png", width: 1086, height: 1448 },
  followupPharmacist: { src: "/assets/minor-ailments/followup-pharmacist.png", width: 1122, height: 1402 },
} as const satisfies Record<string, MediaItem>;

export const art = {
  followupPanel: { src: "/assets/clinical/followup-panel.svg", width: 622, height: 421 },
  doseReminders: { src: "/assets/clinical/patient-reminders.svg", width: 579, height: 404 },
  sopTable: { src: "/assets/clinical/documentation-sop.svg", width: 549, height: 328 },
  incidentDashboard: { src: "/assets/incident-reporting-dashboard.svg", width: 723, height: 529 },
  complianceList: { src: "/assets/incident-reporting-compliance-list.svg", width: 637, height: 483 },
  exports: { src: "/assets/incident-reporting-exports.svg", width: 642, height: 400 },
  crossProduct: { src: "/assets/incident-reporting-cross-product.svg", width: 642, height: 400 },
  assessmentPanel: { src: "/assets/minor-ailments/assessment-panel.svg", width: 600, height: 600 },
  physicianCard: { src: "/assets/minor-ailments/physician-card.svg", width: 636, height: 584 },
  followupCard: { src: "/assets/minor-ailments/followup-card.svg", width: 636, height: 584 },
  canadaMap: { src: "/assets/103abc16-f0b0-4599-8fe4-c030b6ce4b32.svg", width: 423, height: 411 },
  metrics: { src: "/assets/provinces-cta-metrics.svg", width: 231, height: 278 },
  appointmentProfile: { src: "/assets/figma-appointment-profile-ui.svg", width: 743, height: 320 },
  guidedTreatment: { src: "/assets/figma-guided-treatment-ui.svg", width: 337, height: 329 },
  patientFlags: { src: "/assets/figma-patient-flags-ui.svg", width: 326, height: 323 },
  analyticsChart: { src: "/assets/figma-analytics-chart.svg", width: 643, height: 345 },
  voicePhone: { src: "/assets/figma-intelligence-phone.svg", width: 363, height: 301 },
  sopDashboard: { src: "/assets/figma-assure-sop-dashboard.svg", width: 564, height: 254 },
} as const satisfies Record<string, MediaItem>;

export const icons = {
  // Large card icons. White or near-white icons (icon-intake, service-minor, service-review)
  // are left out: they disappear inside the white icon circle.
  safety: "/assets/minor-ailments/icon-safety.svg",
  treatment: "/assets/minor-ailments/icon-treatment.svg",
  record: "/assets/minor-ailments/icon-record.svg",
  province: "/assets/minor-ailments/icon-province.svg",
  redFlag: "/assets/minor-ailments/icon-red-flag.svg",
  pharmacist: "/assets/minor-ailments/icon-pharmacist.svg",
  vaccination: "/assets/clinical/service-vaccination.svg",
  injection: "/assets/clinical/service-injection.svg",
  prescription: "/assets/clinical/service-prescription.svg",
  testing: "/assets/clinical/service-testing.svg",
  // Feature row icons (39px)
  assessment: "/assets/clinical/workflow-assessment.svg",
  safeguards: "/assets/clinical/workflow-safeguards.svg",
  steps: "/assets/clinical/workflow-steps.svg",
  progress: "/assets/clinical/followup-progress.svg",
  outcomes: "/assets/clinical/followup-outcomes.svg",
  plan: "/assets/clinical/followup-plan.svg",
  // Wave and step icons (50px)
  automation: "/assets/independent-pharmacies-automation.svg",
  storefront: "/assets/independent-pharmacies-storefront.svg",
  revenue: "/assets/independent-pharmacies-revenue.svg",
  noIt: "/assets/independent-pharmacies-no-it.svg",
  dayServices: "/assets/independent-pharmacies-day-services.svg",
  dayBookings: "/assets/independent-pharmacies-day-bookings.svg",
  dayVisits: "/assets/independent-pharmacies-day-visits.svg",
  dayFollowups: "/assets/independent-pharmacies-day-followups.svg",
  dayRevenue: "/assets/independent-pharmacies-day-revenue.svg",
  shield: "/assets/bf4a5a73-a9ba-4890-8b1b-e704a5c32403.svg",
  calendarStar: "/assets/3fd3422b-a79c-46a1-a31a-cd066f0a56c4.svg",
  chartStar: "/assets/8e703048-98d9-479d-a02f-139904b0e67c.svg",
  grid: "/assets/6b68ecb1-d04a-44a4-a842-483f32fec4e5.svg",
  globe: "/assets/4024eef4-33dc-46af-a789-94e4535776dd.svg",
  collect: "/assets/incident-reporting-process-collect.svg",
  detect: "/assets/incident-reporting-process-detect.svg",
  compare: "/assets/incident-reporting-process-compare.svg",
  report: "/assets/incident-reporting-process-report.svg",
  act: "/assets/incident-reporting-process-act.svg",
  // Chip icons (17px)
  chipRelationship: "/assets/clinical/patient-relationship.svg",
  chipFollowup: "/assets/clinical/patient-followup.svg",
  chipDose: "/assets/clinical/patient-dose.svg",
  chipAutofill: "/assets/clinical/patient-autofill.svg",
  chipDocument: "/assets/clinical/document-auto.svg",
  chipEfax: "/assets/clinical/document-efax.svg",
  chipStorage: "/assets/clinical/document-storage.svg",
  chipAudit: "/assets/clinical/document-audit.svg",
} as const;

export type PersonKey = keyof typeof people;
export type ArtKey = keyof typeof art;
export type IconKey = keyof typeof icons;
