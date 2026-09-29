import Image from "next/image";
import { asset } from "@/lib/assets";
import styles from "./Footer.module.css";

const footerGroups = [
  { heading: "Our Products", items: ["ZeeNovo Assure", "ZeeNovo Clinical", "ZeeNovo Intelligence"] },
  { heading: "Company", items: ["Blog", "Pricing", "Contact Us"] },
  { heading: "Logins", items: ["Register Pharmacy", "Patient Login", "Assure Login", "Clinical Login"] },
  { heading: "Legal", items: ["Privacy Policy", "Terms & Conditions"] },
] as const;

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
                  {group.items.map((item) => <span key={item}>{item}</span>)}
                </div>
                {index < footerGroups.length - 1 && (
                  <Image className={styles.columnDivider} src={asset.footerColumnDivider} alt="" width={169} height={1.24242} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.dividerFrame} aria-hidden="true">
        <Image src={asset.footerDivider} alt="" width={1195} height={1.24242} />
      </div>
      <span className={styles.wordmark} aria-hidden="true">ZeeNovo</span>
      <p className={styles.copyright}>Copyright © 2025 ZeeNovo Corporation</p>
    </footer>
  );
}
