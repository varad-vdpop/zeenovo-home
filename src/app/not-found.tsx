import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { icons } from "@/components/blocks/media";
import b from "@/components/blocks/blocks.module.css";
import s from "@/components/blocks/sections.module.css";
import c from "@/app/products/clinical/page.module.css";
import m from "@/app/products/clinical/minor-ailments/page.module.css";

// The 404 page reuses the approved page header and capability cards. It is plain server markup on purpose:
// Next.js sends the root not-found file with every route, so it should not pull client components onto them.

export const metadata: Metadata = {
  title: "Page not found | ZeeNovo",
  description: "The page you asked for has moved or no longer exists. Find ZeeNovo products, solutions, pricing and support from here.",
};

const destinations = [
  { title: "Products", text: "Clinical, Assure, Magistral, Sites and the Patient Portal.", icon: icons.assessment, href: "/products" },
  { title: "Solutions", text: "For independent pharmacies, owners, pharmacists and groups.", icon: icons.pharmacist, href: "/solutions" },
  { title: "Pricing", text: "Plans with unlimited users and your website included.", icon: icons.revenue, href: "/pricing" },
  { title: "Book a demo", text: "Thirty minutes, built around the services you offer.", icon: icons.calendarStar, href: "/book-a-demo" },
];
const tones = [m.intake, m.safety, m.treatment, m.record];

function Arrow({ white = false }: { white?: boolean }) {
  return <Image data-cta-icon src={white ? "/assets/zeenovo-nav-arrow-primary.svg" : "/assets/zeenovo-nav-arrow-outline.svg"} alt="" aria-hidden="true" className={c.arrow} width={24} height={24} />;
}

export default function NotFound() {
  return (
    <main className={`${c.page} ${m.page}`} style={{ "--section-max": "1312px" } as CSSProperties}>
      <section className={s.header} aria-labelledby="not-found-title">
        <Image className={s.headerWave} src="/assets/clinical/hero-wave.svg" alt="" width={480} height={819} priority />
        <Image className={s.headerEllipse} src="/assets/clinical/hero-ellipse.svg" alt="" width={619} height={619} priority />
        <div className={s.headerCopy}>
          <p className={s.eyebrow}>Error 404</p>
          <h1 id="not-found-title">This page has moved{" "}<br />or no longer exists.</h1>
          <p className={c.heroDescription}>Some addresses changed when the site was updated. Pick a section below, or start again from the home page.</p>
          <div className={c.heroActions}>
            <Link data-cta className={c.primaryButton} href="/"><Arrow white />Go to Home</Link>
            <Link data-cta className={c.outlineButton} href="/company/contact"><Arrow />Contact Us</Link>
          </div>
        </div>
      </section>
      <section className={`${m.capabilities} ${b.cardsSection}`} aria-labelledby="not-found-links">
        <div className={`${m.sectionInner} ${b.rail}`}>
          <div className={m.sectionHeading}>
            <div><p className={m.eyebrow}>Where to next</p><h2 id="not-found-links">Popular pages.</h2></div>
            <p>Everything else is in the menu above.</p>
          </div>
          <div className={`${m.capabilityGrid} ${b.cardGrid}`} style={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}>
            {destinations.map((item, index) => (
              <Link href={item.href} className={`${m.capabilityCard} ${tones[index]} ${b.cardAuto}`} key={item.href}>
                <span className={m.capabilityNumber}>{String(index + 1).padStart(2, "0")}</span>
                <span className={b.cardIcon}><Image src={item.icon} alt="" width={40} height={40} /></span>
                <div><h3>{item.title}</h3><p>{item.text}</p></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
