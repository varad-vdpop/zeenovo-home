import Image from "next/image";
import type { ReactNode } from "react";
import styles from "./AppScreen.module.css";

// The ZeeNovo web app's chrome for product illustrations ("tab UI"): a top bar with the logo, breadcrumb and the
// signed-in user, a sidebar with the app's navigation, and the screen's own content in the main area. Every size is in
// --u, which the screen sets on the class it passes in (one unit of its drawing grid). Narrow frames drop the sidebar
// for a menu button, as the app does on phones.

const icon = {
  mic: "M12 3a3 3 0 0 1 3 3v6a3 3 0 0 1-6 0V6a3 3 0 0 1 3-3Zm-6 9a6 6 0 0 0 12 0M12 18v3",
  book: "M8 2v4m8-4v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm7 9v5m-2.5-2.5h5",
  list: "M9 4h6v3H9zM9 5.5H6v15h12v-15h-3M9 12h6m-6 4h4",
  rx: "M7 3h7l4 4v14H7zM14 3v4h4M10 12h5m-5 4h5",
  pill: "M10.5 20.5a5 5 0 0 1-7-7l6-6a5 5 0 0 1 7 7l-6 6ZM8.5 8.5l7 7",
  dashboard: "M4 4h7v7H4zM13 4h7v4h-7zM13 10h7v10h-7zM4 13h7v7H4z",
  calendar: "M8 2v4m8-4v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z",
  patients: "M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5 8a5 5 0 0 1 10 0m2-8a3 3 0 1 0 0-6m1 14a5 5 0 0 0-3-4.6",
  review: "M9 4h6v3H9zM7 5.5H5.5V20h13V5.5H17M8.5 12l2 2 4-4",
  followup: "M20 11a8 8 0 0 0-14.7-4M4 4v4h4m-4 5a8 8 0 0 0 14.7 4M20 20v-4h-4",
  fax: "M7 8V3h10v5M7 17H5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2M7 14h10v7H7z",
  settings: "M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm7.4 3a7.4 7.4 0 0 0-.1-1.2l2-1.6-2-3.4-2.4.9a7.6 7.6 0 0 0-2-1.2L14.5 3h-5l-.4 2.5a7.6 7.6 0 0 0-2 1.2l-2.4-.9-2 3.4 2 1.6a7.4 7.4 0 0 0 0 2.4l-2 1.6 2 3.4 2.4-.9a7.6 7.6 0 0 0 2 1.2l.4 2.5h5l.4-2.5a7.6 7.6 0 0 0 2-1.2l2.4.9 2-3.4-2-1.6c.1-.4.1-.8.1-1.2Z",
  incidents: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 5v5m0 3h.01",
  meetings: "M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5 8a5 5 0 0 1 10 0m2-8a3 3 0 1 0 0-6m1 14a5 5 0 0 0-3-4.6",
  team: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 8a7 7 0 0 1 14 0",
  sops: "M7 3h7l4 4v14H7zM14 3v4h4M10 12h5m-5 4h5",
  analytics: "M5 20V10m7 10V4m7 16v-7",
  billing: "M3 6h18v12H3zM3 10h18",
  edit: "M4 20h4L19 9l-4-4L4 16v4Zm9-13 4 4",
  help: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-2.5 7a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .8-1 1.5M12 17h.01",
  right: "m9 6 6 6-6 6",
  menu: "M4 6h16M4 12h16M4 18h16",
} as const;

export type AppIcon = keyof typeof icon;
export type AppNavItem = readonly [label: string, icon: AppIcon];

function Glyph({ name }: { name: AppIcon }) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d={icon[name]} /></svg>;
}

// The apps the illustrations show: the patient portal, ZeeNovo Clinical for pharmacy staff, and ZeeNovo Assure.
export const portalNav: readonly AppNavItem[] = [["AI Voice Booking", "mic"], ["Book appointment", "book"], ["Appointments", "list"], ["Book Prescription", "rx"], ["Prescriptions", "pill"]];
export const portalNavBottom: readonly AppNavItem[] = [["Profile", "edit"], ["Help & Support", "help"]];
// Clinical's sidebar, item for item; add nothing to it. A screen selects the section its breadcrumb starts with: a
// review inside a patient's record selects Patients, the recall queue selects MedsCheck.
export const clinicalNav: readonly AppNavItem[] = [["Dashboard", "dashboard"], ["Appointments", "calendar"], ["Patients", "patients"], ["MedsCheck", "review"], ["Follow-ups", "followup"], ["Fax log", "fax"]];
export const clinicalNavBottom: readonly AppNavItem[] = [["Settings", "settings"], ["Help & Support", "help"]];
// Assure's sidebar, item for item and in its order; add nothing to it.
export const assureNav: readonly AppNavItem[] = [["Dashboard", "dashboard"], ["Incidents", "incidents"], ["CQI Meetings", "meetings"], ["Pharmacy Assessments", "review"], ["Team assessments", "team"], ["SOPs", "sops"], ["Analytics", "analytics"], ["Billing", "billing"], ["Settings", "settings"]];

export const zeenovoLogo = { src: "/assets/zeenovo-navbar-logo.svg", width: 143, height: 45 };
export const assureLogo = { src: "/assets/ui-previews/assure-logo.png", width: 236, height: 72 };

type Props = {
  label: string;
  className: string;
  nav: readonly AppNavItem[];
  navBottom?: readonly AppNavItem[];
  logo?: { src: string; width: number; height: number };
  active: string;
  crumbs: readonly string[];
  initials: string;
  children: ReactNode;
};

export default function AppScreen({ label, className, nav, navBottom = [], logo = zeenovoLogo, active, crumbs, initials, children }: Props) {
  const item = ([text, glyph]: AppNavItem) => <span key={text} className={text === active ? styles.navOn : ""}><Glyph name={glyph} />{text}</span>;
  return <div className={styles.frame}>
    <div className={`${styles.screen} ${className}`} role="img" aria-label={label}>
      <div className={styles.topbar}>
        <span className={styles.menu}><Glyph name="menu" /></span>
        <Image className={styles.logo} src={logo.src} alt="" width={logo.width} height={logo.height} />
        <span className={styles.crumbs}>{crumbs.map((crumb, index) => index < crumbs.length - 1
          ? <span key={crumb}>{crumb}<Glyph name="right" /></span>
          : <b key={crumb}>{crumb}</b>)}</span>
        <span className={styles.avatar}>{initials}</span>
      </div>
      <div className={styles.sidebar}>
        <span className={styles.navTop}>{nav.map(item)}</span>
        {navBottom.length > 0 && <span className={styles.navBottom}>{navBottom.map(item)}</span>}
      </div>
      <div className={styles.main}>{children}</div>
    </div>
  </div>;
}
