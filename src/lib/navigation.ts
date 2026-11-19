export type AvailabilityBadge = "Early access" | "Launching soon" | "Coming soon";

export type NavigationLink = {
  label: string;
  href: string;
  /** Shown as a small pill after the label. */
  badge?: AvailabilityBadge;
};

export type NavigationSection = {
  label: string;
  links: readonly NavigationLink[];
};

export type NavigationMenu = {
  label: string;
  href: string;
  sections: readonly NavigationSection[];
};

export const navigationMenus: readonly NavigationMenu[] = [
  {
    label: "Products",
    href: "/products",
    sections: [
      {
        label: "Products",
        links: [
          { label: "Clinical", href: "/products/clinical" },
          { label: "Assure", href: "/products/assure" },
          { label: "Magistral", href: "/products/magistral", badge: "Early access" },
          { label: "Sites", href: "/products/sites" },
          { label: "Patient Portal", href: "/products/patient-portal" },
          { label: "Voice Booking", href: "/products/voice-based-appointment-booking" },
          { label: "ZeeNovo Central", href: "/products/zeenovo-central", badge: "Launching soon" },
          { label: "ZeeNovo Enterprise", href: "/solutions/multi-location-groups", badge: "Launching soon" },
        ],
      },
      {
        label: "Clinical Modules",
        links: [
          { label: "Minor Ailments", href: "/products/clinical/minor-ailments" },
          { label: "Vaccinations and Injections", href: "/products/clinical/vaccinations" },
          { label: "Follow-up and Reminders", href: "/products/clinical/follow-up-and-reminders" },
          { label: "Prescription Requests", href: "/products/clinical/prescriptions-and-injections" },
          { label: "Medication Review", href: "/products/clinical/medication-review", badge: "Early access" },
          { label: "Point-of-Care Testing", href: "/products/clinical/point-of-care-testing", badge: "Early access" },
          { label: "Appointments", href: "/products/clinical/appointments" },
          { label: "Documentation and Fax", href: "/products/clinical/documentation-and-efax" },
          { label: "Forms Library", href: "/products/clinical/forms", badge: "Coming soon" },
        ],
      },
      {
        label: "Assure Modules",
        links: [
          { label: "Incident Reporting", href: "/products/assure/incident-reporting" },
          { label: "Self-Assessment", href: "/products/assure/self-assessment" },
          { label: "Analytics", href: "/products/assure/analytics" },
          { label: "SOPs and Staff Training", href: "/products/assure/sops-and-training" },
        ],
      },
      {
        label: "Solutions",
        links: [
          { label: "Independent Pharmacies", href: "/solutions/independent-pharmacies" },
          { label: "Pharmacy Owners", href: "/solutions/pharmacy-owners" },
          { label: "Pharmacists", href: "/solutions/pharmacists" },
          { label: "Patients", href: "/solutions/patients" },
          { label: "Inspection Readiness", href: "/solutions/inspection-readiness" },
        ],
      },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    sections: [
      {
        label: "Solutions for",
        links: [
          { label: "Independent Pharmacies", href: "/solutions/independent-pharmacies" },
          { label: "Pharmacy Owners", href: "/solutions/pharmacy-owners" },
          { label: "Pharmacists", href: "/solutions/pharmacists" },
          { label: "Patients", href: "/solutions/patients" },
          { label: "Inspection Readiness", href: "/solutions/inspection-readiness" },
          { label: "Multi-Location Groups", href: "/solutions/multi-location-groups", badge: "Launching soon" },
        ],
      },
    ],
  },
  {
    label: "Platform",
    href: "/platform",
    sections: [
      {
        label: "Platform",
        links: [
          { label: "Why ZeeNovo", href: "/platform/why-zeenovo" },
          { label: "Clinical Content We Maintain", href: "/platform/clinical-content" },
          { label: "Integrations", href: "/platform/integrations" },
          { label: "Switching to ZeeNovo", href: "/platform/switching-to-zeenovo" },
        ],
      },
    ],
  },
  {
    label: "Provinces",
    href: "/provinces",
    sections: [
      {
        label: "Explore by province",
        links: [
          { label: "Ontario", href: "/provinces/ontario" },
          { label: "Alberta", href: "/provinces/alberta" },
          { label: "British Columbia", href: "/provinces/british-columbia" },
          { label: "Saskatchewan", href: "/provinces/saskatchewan" },
          { label: "Nova Scotia", href: "/provinces/nova-scotia" },
          { label: "New Brunswick", href: "/provinces/new-brunswick" },
          { label: "Manitoba", href: "/provinces/manitoba" },
        ],
      },
    ],
  },
  {
    label: "Pricing",
    href: "/pricing",
    sections: [],
  },
  {
    label: "Resources",
    href: "/resources",
    sections: [
      {
        label: "Resources",
        links: [
          { label: "Blog", href: "/blog" },
          { label: "Case Studies", href: "/resources/case-studies" },
          { label: "Guides", href: "/resources/guides" },
          { label: "Changelog", href: "/resources/changelog" },
          { label: "Roadmap", href: "/resources/roadmap" },
        ],
      },
    ],
  },
  {
    label: "Company",
    href: "/company",
    sections: [
      {
        label: "Company",
        links: [
          { label: "About", href: "/company/about" },
          { label: "Contact", href: "/company/contact" },
          { label: "Book a Demo", href: "/book-a-demo" },
        ],
      },
      {
        label: "Trust & Legal",
        links: [
          { label: "Security and Privacy", href: "/trust/security-and-compliance" },
          { label: "Privacy Policy", href: "/trust/privacy-policy" },
          { label: "Terms and Conditions", href: "/trust/terms-and-conditions" },
          { label: "Accessibility", href: "/trust/accessibility" },
          { label: "Data Processing Agreement", href: "/trust/data-processing-agreement" },
          { label: "Sub-processors", href: "/trust/sub-processors" },
        ],
      },
    ],
  },
];
