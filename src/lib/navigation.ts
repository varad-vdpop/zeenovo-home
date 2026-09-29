export type NavigationLink = {
  label: string;
  href: string;
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
        label: "Clinical",
        links: [
          { label: "Clinical overview", href: "/products/clinical" },
          { label: "Minor Ailments", href: "/products/clinical/minor-ailments" },
          { label: "Vaccinations", href: "/products/clinical/vaccinations" },
          { label: "Medication Review", href: "/products/clinical/medication-review" },
          { label: "Point of Care Testing", href: "/products/clinical/point-of-care-testing" },
          { label: "Prescriptions and Injections", href: "/products/clinical/prescriptions-and-injections" },
          { label: "Appointments", href: "/products/clinical/appointments" },
          { label: "Documentation and eFax", href: "/products/clinical/documentation-and-efax" },
        ],
      },
      {
        label: "Assure",
        links: [
          { label: "Assure overview", href: "/products/assure" },
          { label: "Incident Reporting", href: "/products/assure/incident-reporting" },
          { label: "Self Assessment", href: "/products/assure/self-assessment" },
          { label: "Analytics", href: "/products/assure/analytics" },
        ],
      },
      {
        label: "More products",
        links: [
          { label: "Sites", href: "/products/sites" },
          { label: "Patient Portal", href: "/products/patient-portal" },
          { label: "Voice Based Appointment Booking", href: "/products/voice-based-appointment-booking" },
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
          { label: "Multi Location Groups", href: "/solutions/multi-location-groups" },
          { label: "Pharmacy Owners", href: "/solutions/pharmacy-owners" },
          { label: "Pharmacists", href: "/solutions/pharmacists" },
          { label: "Patients", href: "/solutions/patients" },
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
    sections: [
      {
        label: "Pricing",
        links: [{ label: "ROI Calculator", href: "/pricing/roi-calculator" }],
      },
    ],
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
          { label: "Security and Compliance", href: "/trust/security-and-compliance" },
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
