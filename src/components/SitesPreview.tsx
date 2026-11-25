import localFont from "next/font/local";
import styles from "./SitesPreview.module.css";

// A pharmacy website built on ZeeNovo Sites, for the home "Sites & Patient Portal" card and the Sites page storefront
// section. Navigation, sections and wording follow the live ZeeNovo pharmacy site (maplemedspharmacy.zeenovo.com);
// only the pharmacy's name, logo, address and numbers are made up (555 numbers).

// Pharmacy sites are set in Inter, like the live site.
const inter = localFont({ src: "../../public/fonts/inter-variable.woff2", weight: "100 900", display: "swap", preload: false });

// One line-icon set (24px grid, round joins) for every icon on the page.
const icons = {
  arrow: <path d="M7 17 17 7M8 7h9v9" />,
  pin: <><path d="M19 10c0 4.9-5.3 9.9-6.4 10.9a.9.9 0 0 1-1.2 0C10.3 19.9 5 14.9 5 10a7 7 0 0 1 14 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
  phone: <path d="M21 16.4v2.8a1.9 1.9 0 0 1-2 1.9 18.6 18.6 0 0 1-8.1-2.9 18.3 18.3 0 0 1-5.6-5.6A18.6 18.6 0 0 1 2.4 4.4 1.9 1.9 0 0 1 4.3 2.4h2.8a1.9 1.9 0 0 1 1.9 1.6c.1.9.4 1.8.7 2.6a1.9 1.9 0 0 1-.4 2L8 9.8a15 15 0 0 0 5.6 5.6l1.2-1.2a1.9 1.9 0 0 1 2-.4c.8.3 1.7.6 2.6.7a1.9 1.9 0 0 1 1.6 1.9Z" />,
  fax: <><path d="M7 9V4.5A1.5 1.5 0 0 1 8.5 3H15l2 2v4" /><rect x="3.5" y="9" width="17" height="11" rx="2" /><path d="M7.5 13h2m-2 3h2m4-3h3v3h-3z" /></>,
  syringe: <path d="m18 2 4 4m-5 1 3-3m-1 5L8.7 19.3a2.4 2.4 0 0 1-3.4 0l-.6-.6a2.4 2.4 0 0 1 0-3.4L15 5m-6 6 4 4m-8 4-3 3m12-18 6 6" />,
} as const;

function Glyph({ name }: { name: keyof typeof icons }) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">{icons[name]}</svg>;
}

function Mark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className={styles.mark}>
      <rect width="24" height="24" rx="7" fill="#0f9d8a" />
      <path d="M12 6.5v11M6.5 12h11" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

/** `plain` drops the cropped glass frame, for a parent that draws its own frame around the whole page. */
export default function SitesPreview({ plain = false }: { plain?: boolean }) {
  return (
    <div className={`${styles.frame} ${plain ? styles.plain : ""}`} role="img" aria-label="A pharmacy website built on ZeeNovo Sites, with online booking for prescriptions, minor ailments and vaccinations">
      <div className={`${styles.window} ${inter.className}`}>
        <div className={styles.utility}><span>Log into pharmacy</span><span>Login for patient</span></div>

        <div className={styles.nav}>
          <span className={styles.logo}><Mark /><b>North</b><em>field</em></span>
          <span className={styles.links}><span>Services</span><span>About</span><span>ZeeNovo AI</span><span>Contact</span></span>
          <span className={styles.navButton}>Book an appointment<Glyph name="arrow" /></span>
        </div>

        <div className={styles.hero}>
          <span className={styles.arc} aria-hidden="true" />
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Your trusted pharmacy</p>
            <p className={styles.title}>Northfield<br />Pharmacy</p>
            <div className={styles.store}>
              <span className={styles.storeIcon}><Glyph name="pin" /></span>
              <div><small>Store address</small><b>48 Elm Street, Guelph, ON</b><span>Ontario, N1H 2X5</span></div>
            </div>
            <span className={styles.book}>Book an appointment<Glyph name="arrow" /></span>
          </div>
          <div className={styles.contact}>
            <div><span className={styles.contactIcon}><Glyph name="phone" /></span><p><b>Phone</b>(519) 555-0186</p></div>
            <div><span className={styles.contactIcon}><Glyph name="fax" /></span><p><b>Fax</b>(519) 555-0187</p></div>
          </div>
        </div>

        <div className={styles.services}>
          <div className={`${styles.service} ${styles.serviceBlue}`}>
            <b>Prescriptions</b>
            <span className={styles.serviceLink}>Book an appointment<Glyph name="arrow" /></span>
            <span className={styles.chips}><i>Transfer</i><i>New</i><i>Refill</i></span>
          </div>
          <div className={styles.service}>
            <b>Minor Ailments</b>
            <span className={styles.serviceLink}>Book an appointment<Glyph name="arrow" /></span>
            <span className={styles.chips}><i>Hemorrhoids</i><i>Cold Sores</i></span>
          </div>
          <div className={`${styles.service} ${styles.serviceTint}`}>
            <span className={styles.serviceArt}><Glyph name="syringe" /></span>
            <b>Vaccinations</b>
            <span className={styles.serviceLink}>Book an appointment<Glyph name="arrow" /></span>
            <span className={styles.vaccine}><span>Seniors Flu Shot<small>65 years and above</small></span><i>Book</i></span>
          </div>
        </div>
      </div>
    </div>
  );
}
