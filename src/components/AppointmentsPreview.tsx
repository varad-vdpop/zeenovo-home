import AppScreen, { portalNav, portalNavBottom } from "./AppScreen";
import styles from "./AppointmentsPreview.module.css";

// The Patient Portal's Appointments screen, redrawn for the Appointments page's "Control what patients can book"
// section: the portal's top bar and sidebar, then upcoming bookings and waitlist entries as cards, with the tabs and
// filters above them. Services, dates and times are sample data.

const icon = {
  calendar: "M8 2v4m8-4v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z",
  service: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 5v8m-4-4h8",
  pin: "M19 10c0 4.9-5.3 9.9-6.4 10.9a.9.9 0 0 1-1.2 0C10.3 19.9 5 14.9 5 10a7 7 0 0 1 14 0Z",
  clock: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 4v5l3 2",
  chevron: "m6 9 6 6 6-6",
  filter: "M4 5h16l-6 8v6l-4-2v-4L4 5Z",
  close: "m7 7 10 10M17 7 7 17",
} as const;

function Glyph({ name }: { name: keyof typeof icon }) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d={icon[name]} /></svg>;
}

const cards = [
  { title: "Waitlist entry", badge: "Waitlist", tone: "wait", rows: [["calendar", "Joined Dec 2"], ["service", "Flu shot"], ["pin", "Northfield Pharmacy · Vaccination"], ["clock", "Waiting for invitation"]], note: "Not booked yet. We will invite you." },
  { title: "Minor ailment", badge: "Confirmed", tone: "ok", rows: [["calendar", "Thu, Dec 10 · 2:30 pm"], ["service", "Pink eye"], ["pin", "Northfield Pharmacy · In person"], ["clock", "15 minutes"]], note: "Reschedule or cancel" },
  { title: "COVID-19 vaccine", badge: "Booked", tone: "info", rows: [["calendar", "Sat, Dec 12 · 10:30 am"], ["service", "Dose 2 of 2"], ["pin", "Northfield Pharmacy · Vaccination"], ["clock", "10 minutes"]], note: "Reschedule or cancel" },
  { title: "Waitlist entry", badge: "Waitlist", tone: "wait", rows: [["calendar", "Joined Dec 4"], ["service", "Medication review"], ["pin", "Northfield Pharmacy · In person"], ["clock", "Waiting for invitation"]], note: "Not booked yet. We will invite you." },
  { title: "Strep throat test", badge: "Confirmed", tone: "ok", rows: [["calendar", "Mon, Dec 14 · 9:15 am"], ["service", "Rapid strep test"], ["pin", "Northfield Pharmacy · In person"], ["clock", "20 minutes"]], note: "Reschedule or cancel" },
  { title: "Travel health", badge: "Booked", tone: "info", rows: [["calendar", "Wed, Dec 16 · 4:00 pm"], ["service", "Travel vaccine consult"], ["pin", "Northfield Pharmacy · In person"], ["clock", "30 minutes"]], note: "Reschedule or cancel" },
] as const;

export default function AppointmentsPreview() {
  return <AppScreen className={styles.panel} nav={portalNav} navBottom={portalNavBottom} active="Appointments" crumbs={["Home", "Appointments"]} initials="PS"
    label="The ZeeNovo Patient Portal appointments screen: two waitlist entries waiting for an invitation and four booked visits (a minor ailment, a COVID-19 vaccine, a strep throat test and a travel health consult), filtered to this month">
      <div className={styles.head}>
        <div><b>Appointments</b><small>Review upcoming and past pharmacy bookings.</small></div>
      </div>
      <div className={styles.toolbar}>
        <span className={styles.tabs}><i className={styles.tabOn}>Upcoming appointments</i><i>Past appointments</i></span>
        <span className={styles.select}><Glyph name="filter" />All services<Glyph name="chevron" /></span>
        <span className={styles.chips}><i>This month<Glyph name="close" /></i><i>Northfield Pharmacy<Glyph name="close" /></i></span>
      </div>
      <div className={styles.cards}>
        {cards.map((card, index) => <div key={index} className={`${styles.card} ${styles[card.tone]}`}>
          <div className={styles.cardHead}><b>{card.title}</b><span>{card.badge}</span></div>
          <ul>{card.rows.map(([glyph, text]) => <li key={text}><Glyph name={glyph} />{text}</li>)}</ul>
          <p>{card.note}</p>
        </div>)}
      </div>
  </AppScreen>;
}
