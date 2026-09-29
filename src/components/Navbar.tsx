"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { asset } from "@/lib/assets";
import { navigationMenus, type NavigationMenu } from "@/lib/navigation";
import styles from "./Navbar.module.css";

const featured: Record<string, { label: string; image: string; alt: string; contain?: boolean }> = {
  Products: { label: "ZeeNovo Clinical", image: asset.clinicalDoctor, alt: "Pharmacist" },
  Solutions: { label: "Independent Pharmacies", image: asset.heroNurse, alt: "Pharmacist at a laptop", contain: true },
  Provinces: { label: "Ontario", image: asset.mapIcon, alt: "Map of Canada", contain: true },
  Pricing: { label: "ROI Calculator", image: asset.intelligencePhone, alt: "ZeeNovo mobile interface", contain: true },
  Resources: { label: "Guides", image: asset.service1, alt: "Pharmacy care" },
  Company: { label: "About ZeeNovo", image: asset.teamPhoto, alt: "Healthcare team" },
};

function FigmaArrow({ primary = false, direction = "up" }: { primary?: boolean; direction?: "up" | "right" | "left" }) {
  return (
    <span className={styles.arrowFrame} aria-hidden="true">
      <Image
        className={`${styles.arrowIcon} ${direction === "right" ? styles.arrowRight : direction === "left" ? styles.arrowLeft : ""}`}
        src={primary ? asset.navbarArrowPrimary : asset.navbarArrowOutline}
        alt=""
        width={21.2549}
        height={21.2549}
      />
    </span>
  );
}

export default function Navbar() {
  const navbarRef = useRef<HTMLElement>(null);
  const mobileToggleRef = useRef<HTMLButtonElement>(null);
  const mobileOverlayRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const backRef = useRef<HTMLButtonElement>(null);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState<NavigationMenu | null>(null);
  const selectedMenu = navigationMenus.find((menu) => menu.label === activeMenu);

  useEffect(() => {
    function closeOnOutsideClick(event: PointerEvent) {
      if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) setActiveMenu(null);
    }
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveMenu(null);
        if (mobileOverlayRef.current) {
          setMobileOpen(false);
          setMobileMenu(null);
          mobileToggleRef.current?.focus();
        }
      }
    }
    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    function trapMobileFocus(event: KeyboardEvent) {
      if (event.key !== "Tab") return;
      const buttons = mobileOverlayRef.current?.querySelectorAll<HTMLButtonElement>("button");
      if (!buttons?.length) return;
      const first = buttons[0];
      const last = buttons[buttons.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
    document.addEventListener("keydown", trapMobileFocus);
    return () => document.removeEventListener("keydown", trapMobileFocus);
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    if (mobileMenu) backRef.current?.focus();
    else closeRef.current?.focus();
    return () => { document.body.style.overflow = previousOverflow; };
  }, [mobileOpen, mobileMenu]);

  function closeMobile() {
    setMobileOpen(false);
    setMobileMenu(null);
    mobileToggleRef.current?.focus();
  }

  return (
    <header
      ref={navbarRef}
      className={`${styles.navbar} ${selectedMenu ? styles.navbarOpen : ""}`}
      onMouseLeave={() => setActiveMenu(null)}
    >
      <div className={styles.leftGroup}>
        <span className={styles.logo} aria-label="ZeeNovo">
          <Image src={asset.navbarLogo} alt="ZeeNovo" width={143} height={45} priority />
        </span>
        <nav className={styles.links} aria-label="Main navigation">
          {navigationMenus.map((menu) => (
            <button
              key={menu.label}
              type="button"
              className={activeMenu === menu.label ? styles.activeLink : ""}
              aria-expanded={activeMenu === menu.label}
              aria-controls={activeMenu === menu.label ? "desktop-mega-menu" : undefined}
              onMouseEnter={() => setActiveMenu(menu.label)}
              onFocus={() => setActiveMenu(menu.label)}
              onClick={() => setActiveMenu(menu.label)}
            >
              {menu.label}
            </button>
          ))}
        </nav>
      </div>

      <div className={styles.actions} onMouseEnter={() => setActiveMenu(null)}>
        <span className={styles.patientLogin}>Patient Login</span>
        <span className={styles.pharmacyLogin}>
          <FigmaArrow />
          <span>Pharmacy Login</span>
          <Image className={styles.loginStroke} src={asset.navbarLoginStroke} alt="" width={169} height={49} />
        </span>
        <span className={styles.register}>
          <FigmaArrow primary />
          <span>Register Pharmacy</span>
        </span>
      </div>

      <button
        ref={mobileToggleRef}
        className={styles.mobileToggle}
        type="button"
        aria-label="Open navigation menu"
        aria-expanded={mobileOpen}
        onClick={() => { setMobileOpen(true); setMobileMenu(null); setActiveMenu(null); }}
      >
        Menu
      </button>

      {selectedMenu && (
        <div className={styles.megaPanel} id="desktop-mega-menu">
          <div className={styles.menuContent}>
            <div className={styles.menuIntro}>
              <span>Explore {selectedMenu.label}</span>
              <span>View all {selectedMenu.label}</span>
            </div>
            <div className={`${styles.menuColumns} ${selectedMenu.sections.length === 1 ? styles.singleSection : ""}`}>
              {selectedMenu.sections.map((section) => (
                <div className={styles.menuSection} key={section.label}>
                  <h2>{section.label}</h2>
                  <div className={styles.sectionLinks}>
                    {section.links.map((link) => <span key={link.href}>{link.label}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.featureCard}>
            <span className={styles.featureEyebrow}>Explore {selectedMenu.label}</span>
            <strong>{featured[selectedMenu.label].label}</strong>
            <span className={styles.featureAction}><FigmaArrow primary /></span>
            <span className={`${styles.featureImage} ${featured[selectedMenu.label].contain ? styles.containImage : ""}`}>
              <Image src={featured[selectedMenu.label].image} alt={featured[selectedMenu.label].alt} fill sizes="280px" />
            </span>
          </div>
        </div>
      )}

      {mobileOpen && (
        <div ref={mobileOverlayRef} className={styles.mobileOverlay} role="dialog" aria-modal="true" aria-label="Navigation menu">
          <div className={styles.mobileHeader}>
            <Image src={asset.navbarLogo} alt="ZeeNovo" width={143} height={45} />
            <button ref={closeRef} type="button" onClick={closeMobile}>Close</button>
          </div>
          <div className={styles.mobileContent}>
            {mobileMenu ? (
              <div className={styles.mobilePage} key={mobileMenu.label}>
                <button ref={backRef} className={styles.backButton} type="button" onClick={() => setMobileMenu(null)}>
                  <FigmaArrow direction="left" /> Back
                </button>
                <h2>{mobileMenu.label}</h2>
                <span className={styles.mobileOverview}>View all {mobileMenu.label}<FigmaArrow direction="right" /></span>
                {mobileMenu.sections.map((section) => (
                  <div className={styles.mobileSection} key={section.label}>
                    <h3>{section.label}</h3>
                    {section.links.map((link) => <span key={link.href}>{link.label}</span>)}
                  </div>
                ))}
              </div>
            ) : (
              <div className={styles.mobilePage}>
                <p className={styles.mobileEyebrow}>Explore</p>
                <span className={styles.mobileHome}>Home</span>
                {navigationMenus.map((menu) => (
                  <button className={styles.mobileCategory} type="button" key={menu.label} onClick={() => setMobileMenu(menu)}>
                    {menu.label}<FigmaArrow direction="right" />
                  </button>
                ))}
                <span className={styles.mobileDemo}>Book a Demo<FigmaArrow primary /></span>
                <div className={styles.mobileActions}>
                  <span>Patient Login</span>
                  <span>Pharmacy Login</span>
                  <span>Register Pharmacy</span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
