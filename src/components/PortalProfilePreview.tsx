import AppScreen, { portalNav, portalNavBottom } from "./AppScreen";
import styles from "./PortalProfilePreview.module.css";

// The Patient Portal's Profile screen, for the Patients page's "Your health information stays protected" section: the
// patient's own details, the family doctor saved once, and where the record is kept and who opened it. Names and
// times are sample data.

const icon = {
  lock: "M6 11h12v10H6zM8 11V8a4 4 0 0 1 8 0v3",
  doctor: "M12 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-6 9a6 6 0 0 1 12 0",
  check: "m6 12.5 4 4 8-9",
  eye: "M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Zm10-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z",
} as const;

function Glyph({ name }: { name: keyof typeof icon }) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d={icon[name]} /></svg>;
}

export default function PortalProfilePreview() {
  return <AppScreen className={styles.panel} nav={portalNav} navBottom={portalNavBottom} active="Profile" crumbs={["Home", "Profile"]} initials="PS"
    label="A patient's profile in the ZeeNovo Patient Portal: their own details, their family doctor saved once for every visit, and a note that the record is stored in Canada with every access logged">
    <div className={styles.head}>
      <div><b>Profile</b><small>Only you and Northfield Pharmacy see your details.</small></div>
    </div>

    <div className={styles.grid}>
      <section className={styles.card}>
        <p className={styles.cardTitle}>Personal information</p>
        <div className={styles.fields}>
          <span><small>Name</small>Priya Shah</span>
          <span><small>Date of birth</small>1992-04-18</span>
          <span><small>Phone</small>(416) 555-0148</span>
          <span><small>Email</small>priya.s@example.com</span>
        </div>
      </section>

      <section className={styles.card}>
        <p className={styles.cardTitle}>Family doctor</p>
        <div className={styles.doctor}>
          <span className={styles.doctorIcon}><Glyph name="doctor" /></span>
          <span><b>Dr. Maya Thompson</b><small>Family Medicine · Toronto</small></span>
        </div>
        <p className={styles.saved}><Glyph name="check" />Saved once. Used at every visit.</p>
      </section>
    </div>

    <div className={styles.privacy}>
      <span className={styles.privacyIcon}><Glyph name="lock" /></span>
      <span><b>Stored in Canada</b><small>Northfield Pharmacy is responsible for your record.</small></span>
      <span className={styles.access}><Glyph name="eye" />Last opened by Northfield Pharmacy · Dec 10, 2:31 pm</span>
    </div>
  </AppScreen>;
}
