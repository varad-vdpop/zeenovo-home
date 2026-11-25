import Image from "next/image";
import Link from "next/link";
import { asset } from "@/lib/assets";
import { navigationMenus, type NavigationLink } from "@/lib/navigation";
import styles from "./Footer.module.css";
import Icon from "@/components/Icon";

type Group = { heading: string; links: readonly NavigationLink[] };

// Every link in the main navigation, grouped the same way. A menu with one section takes the menu's name
// ("Solutions", not "Solutions for"); menus without a dropdown (Pricing) join the Company group.
const topLevelLinks = navigationMenus.filter(menu => menu.sections.length === 0).map(menu => ({ label: menu.label, href: menu.href }));
const navGroups: Group[] = navigationMenus.flatMap(menu => menu.sections.map(section => {
  const heading = menu.sections.length === 1 ? menu.label : section.label;
  return { heading, links: heading === "Company" ? [...section.links, ...topLevelLinks] : section.links };
}));

const logins: Group = {
  heading: "Logins",
  links: [
    { label: "Start Free Trial", href: "https://auth.zeenovo.com/signup" },
    { label: "Patient Login", href: "https://patient.zeenovo.com/login" },
    { label: "Pharmacy Login", href: "https://pharmacy.zeenovo.com/login" },
    { label: "Assure Login", href: "https://assure.zeenovo.com/login" },
  ],
};

// One grid cell per group, in navigation order: each row of headings lines up across the footer.
const groups: Group[] = [...navGroups, logins];

function FooterLink({ link }: { link: NavigationLink }) {
  return link.href.startsWith("http")
    ? <a href={link.href}>{link.label}</a>
    : <Link href={link.href}>{link.label}</Link>;
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div>
            <Link className={styles.brand} href="/" aria-label="ZeeNovo home">
              <span className={styles.markFrame} aria-hidden="true">
                <Image src={asset.footerMark} alt="" width={42.5759} height={39.1346} />
              </span>
              <span aria-hidden="true">ZeeNovo</span>
            </Link>
            <p className={styles.tagline}>Clinical services, safety and booking software for Canadian pharmacies.</p>
          </div>
          <div className={styles.contact}>
            <a data-cta className={styles.demo} href="/book-a-demo">
              Book a Demo<Icon name="arrowRight" size={18} />
            </a>
            <a className={styles.email} href="mailto:contact@zeenovo.com">contact@zeenovo.com</a>
          </div>
        </div>

        <nav className={styles.groups} aria-label="Footer">
          {groups.map(group => (
            <div className={styles.group} key={group.heading}>
              <h2>{group.heading}</h2>
              <ul className={styles.items}>
                {group.links.map(link => <li key={link.href + link.label}><FooterLink link={link} /></li>)}
              </ul>
            </div>
          ))}
        </nav>

        <div className={styles.bar}>
          <p>© 2026 ZeeNovo Health Inc. All rights reserved.</p>
        </div>
      </div>

      {/* Oversized white wordmark, as wide as the content (so it stops growing at the content's max width),
          cropped by the bottom edge of the footer. */}
      <div className={styles.wordmarkFrame} aria-hidden="true"><span className={styles.wordmark}>ZeeNovo</span></div>
    </footer>
  );
}
