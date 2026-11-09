import Image from "next/image";
import Link from "next/link";
import { asset } from "@/lib/assets";
import styles from "./Footer.module.css";

const footerGroups = [
  { heading: "Our Products", items: ["ZeeNovo Clinical", "ZeeNovo Assure", "ZeeNovo Magistral", "ZeeNovo Sites", "ZeeNovo Intelligence"] },
  { heading: "Company", items: ["About", "Pricing", "Blog", "Contact Us"] },
  { heading: "Logins", items: ["Register Pharmacy", "Patient Login", "Assure Login", "Clinical Login"] },
  { heading: "Legal", items: ["Privacy Policy", "Terms & Conditions", "Security & Compliance", "Accessibility"] },
] as const;

const footerHrefs: Record<string, string> = {
  "ZeeNovo Clinical": "/products/clinical",
  "ZeeNovo Assure": "/products/assure",
  "ZeeNovo Magistral": "/products/magistral",
  "ZeeNovo Sites": "/products/sites",
  "ZeeNovo Intelligence": "/products/voice-based-appointment-booking",
  About: "/company/about",
  Pricing: "/pricing",
  Blog: "/blog",
  "Contact Us": "/company/contact",
  "Register Pharmacy": "https://auth.zeenovo.com/signup",
  "Patient Login": "https://patient.zeenovo.com/login",
  "Assure Login": "https://assure.zeenovo.com/login",
  "Clinical Login": "https://pharmacy.zeenovo.com/login",
  "Privacy Policy": "/trust/privacy-policy",
  "Terms & Conditions": "/trust/terms-and-conditions",
  "Security & Compliance": "/trust/security-and-compliance",
  Accessibility: "/trust/accessibility",
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand} aria-label="ZeeNovo">
            <span className={styles.markFrame} aria-hidden="true">
              <Image src={asset.footerMark} alt="" width={42.5759} height={39.1346} />
            </span>
            <span>ZeeNovo</span>
          </div>

          <div className={styles.groups}>
            {footerGroups.map((group, index) => (
              <div className={styles.group} key={group.heading}>
                <h2>{group.heading}</h2>
                <div className={styles.items}>
                  {group.items.map((item) => <Link href={footerHrefs[item] ?? "#"} key={item}><span>{item}</span></Link>)}
                </div>
                {index < footerGroups.length - 1 && (
                  <Image className={styles.columnDivider} src={asset.footerColumnDivider} alt="" width={169} height={1.24242} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* The divider, wordmark and copyright follow the link columns, so longer columns never run into them. */}
      <div className={styles.bottom}>
        <div className={styles.dividerFrame} aria-hidden="true">
          <Image src={asset.footerDivider} alt="" width={1195} height={1.24242} />
        </div>
        <span className={styles.wordmark} aria-hidden="true">ZeeNovo</span>
        <p className={styles.copyright}>Copyright © 2026 ZeeNovo Health Inc.</p>
      </div>
    </footer>
  );
}
