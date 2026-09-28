import Image from "next/image";
import { asset } from "@/lib/assets";
import styles from "./Navbar.module.css";

const navigation = [
  { label: "Products", href: "#products" },
  { label: "Pricing", href: "#why-zeenovo" },
  { label: "Resources", href: "#solutions" },
  { label: "Contact us", href: "#contact" },
] as const;

function ButtonArrow({ primary = false }: { primary?: boolean }) {
  return (
    <span className={styles.arrowFrame} aria-hidden="true">
      <Image
        className={styles.arrowIcon}
        src={primary ? asset.navbarArrowPrimary : asset.navbarArrowOutline}
        alt=""
        width={21.2549}
        height={21.2549}
      />
    </span>
  );
}

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.leftGroup}>
        <a className={styles.logo} href="#top" aria-label="ZeeNovo home">
          <Image src={asset.navbarLogo} alt="ZeeNovo" width={143} height={45} priority />
        </a>
        <nav className={styles.links} aria-label="Main navigation">
          {navigation.map(({ label, href }) => <a href={href} key={label}>{label}</a>)}
        </nav>
      </div>

      <div className={styles.actions}>
        <a className={styles.patientLogin} href="#contact">Patient Login</a>
        <a className={styles.pharmacyLogin} href="#contact">
          <ButtonArrow />
          <span>Pharmacy Login</span>
          <Image className={styles.loginStroke} src={asset.navbarLoginStroke} alt="" width={169} height={49} />
        </a>
        <a className={styles.register} href="#contact">
          <ButtonArrow primary />
          <span>Register Pharmacy</span>
        </a>
      </div>

      <details className={styles.mobileMenu}>
        <summary aria-label="Open navigation menu">Menu</summary>
        <nav aria-label="Mobile navigation">
          {navigation.map(({ label, href }) => <a href={href} key={label}>{label}</a>)}
          <a href="#contact">Patient Login</a>
          <a href="#contact">Pharmacy Login</a>
          <a href="#contact">Register Pharmacy</a>
        </nav>
      </details>
    </header>
  );
}
