import Image from "next/image";
import { asset } from "@/lib/assets";
import FinalCta from "@/components/FinalCta";
import HomeProductCards from "@/components/HomeProductCards";
import ResultsCounters from "@/components/ResultsCounters";
import HeroPattern from "@/components/HeroPattern";
import ScrollFade from "@/components/ScrollFade";
import RevealSequence from "@/components/RevealSequence";
import FeatureTabs, { type TabGroup } from "@/components/blocks/FeatureTabs";
import { tileIcons } from "@/components/blocks/media";
import type { CSSProperties } from "react";
import { HeroMenuPreview, HeroRevenuePreview } from "@/components/HeroVisuals";
import { TreatmentPreview, AppointmentPreview, PatientFlagsPreview, ReportingTimerPreview, AnalyticsPreview, NationalReportingPreview } from "@/components/ProductUiPreviews";

function Arrow({ light = false }: { light?: boolean }) {
  return <span data-cta-icon aria-hidden="true" className={light ? "arrow arrow-light" : "arrow"}>↗</span>;
}

function Button({
  children,
  href = "#contact",
  light = false,
  className = "",
}: {
  children: React.ReactNode;
  href?: string;
  light?: boolean;
  className?: string;
}) {
  return (
    <a data-cta className={`${light ? "button button-light" : "button"} ${className}`} href={href}>
      <Arrow light={light} />
      <span>{children}</span>
    </a>
  );
}

function Tag({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return <span className={dark ? "tag tag-dark" : "tag"}><span aria-hidden="true">★</span>{children}</span>;
}

function Cover({
  src,
  alt,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return <Image src={src} alt={alt} fill priority={priority} unoptimized={src === asset.heroNurse} sizes="(max-width: 760px) 100vw, 50vw" className={className} />;
}

function Hero() {
  return (
    <section className="hero" id="top">
      <Image className="hero-background" src={asset.heroBackground} alt="" width={1406} height={819} priority />
      <HeroPattern />
      <div className="social-proof hero-enter hero-enter-count">
        <span className="avatars">
          <Image src={asset.heroAvatar1} alt="" width={37} height={37} />
          <Image src={asset.heroAvatar2} alt="" width={37} height={37} />
          <Image src={asset.heroStar} alt="" width={37} height={37} />
        </span>
        <span>50+ Pharmacies on ZeeNovo</span>
      </div>
      <div className="hero-content">
        <h1 className="hero-enter hero-enter-heading">Clinical Services,<br />Safety and Booking.<br /><strong>One Platform.</strong></h1>
        <p className="hero-enter hero-enter-description">Online booking, guided clinical visits, automated follow-up and a complete safety program for Canadian pharmacies. Unlimited users. Website included.</p>
        <Button className="hero-enter hero-enter-cta" href="https://auth.zeenovo.com/signup">Start Free Trial</Button>
      </div>
      <HeroMenuPreview />
      <HeroRevenuePreview />
      <div className="hero-nurse"><Cover src={asset.heroNurse} alt="Pharmacist working at a laptop" priority /></div>
    </section>
  );
}

const logos = [asset.logo1, asset.logo3, asset.logo5, asset.logo6, asset.logo7];
const logoNames = ["PharmaChoice", "OnPharm United", "Whole Health", "Remedy’sRx", "IDA"];
// Four copies of the set so the track always covers the strip while it moves by two of them.
const tickerCopies = [false, true, true, true];

function Trust() {
  return (
    <>
      <section className="trusted" aria-label="Trusted pharmacies">
        <p>TRUSTED BY 50+ PHARMACIES</p>
        <div className="logo-strip">
          <div className="logo-ticker-track">
            {tickerCopies.map((duplicate, copy) => (
              <div className="logo-ticker-group" aria-hidden={duplicate || undefined} key={copy}>
                {logos.map((src, index) => (
                  <div className="partner-logo" key={src}>
                    <Image src={src} alt={duplicate ? "" : logoNames[index]} fill sizes="(max-width: 760px) 220px, 260px" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
      <ResultsCounters />
    </>
  );
}

const values = [
  ["The pharmacist makes every decision", asset.valueIcon1],
  ["Patient records stored in Canada", asset.valueIcon2],
  ["Province-specific billing PINs and services", asset.valueIcon3],
  ["One record, booking to follow-up", asset.valueIcon4],
  ["Pharmacy website included", asset.valueIcon5],
] as const;

function Values() {
  return <section className="values" id="why-zeenovo"><Tag>Why ZeeNovo</Tag><h2>Built Around Pharmacy Practice.</h2><div className="values-track"><Image src={asset.valuesCompleteWave} alt="" width={1440} height={181} /><div className="values-list">{values.map(([label, icon], index)=><ScrollFade as="div" key={label} distance={12} duration={450} delay={index * 60} responsiveDelay><p>{label}</p><Image src={icon} alt="" width={50} height={50} /></ScrollFade>)}</div></div></section>;
}

const roles: TabGroup[] = [
  { title: "Technician", text: "Intake done before the pharmacist starts.", items: [
    { title: "Walk-in queue", text: "Bring walk-ins into the same queue as online bookings.", src: tileIcons.waitlist },
    { title: "Screening captured", text: "Complete the screening questions and mark the visit ready for the pharmacist.", src: tileIcons.screening },
    { title: "Near misses logged", text: "Log a near miss at the final check, while it’s fresh.", src: tileIcons.flag },
  ] },
  { title: "Pharmacist", text: "Clinical judgement, without the admin.", items: [
    { title: "Answers on screen", text: "Screening answers, health flags and allergies are ready when the visit opens.", src: tileIcons.profile },
    { title: "Saved directions", text: "Pick the medicine and directions from your saved presets. You decide.", src: tileIcons.treatment },
    { title: "Fax and billing PIN", text: "Fax the physician from the visit and see the billing PIN for the service.", src: tileIcons.docEfax },
  ] },
  { title: "Owner", text: "Monthly performance in one view.", items: [
    { title: "Estimated revenue", text: "By service and by pharmacist, from completed visits.", src: tileIcons.trend },
    { title: "Team productivity", text: "Staff productivity, follow-up status and top services.", src: tileIcons.group },
    { title: "Safety actions", text: "Open incidents, overdue SOP sign-offs and CQI follow-ups.", src: tileIcons.shield },
  ] },
  { title: "Patient", text: "Book any time, by web or voice.", items: [
    { title: "Online or voice booking", text: "Book for the whole family from the pharmacy website or by speaking.", src: tileIcons.calendar },
    { title: "Questions before the visit", text: "Answer the screening questions online before arriving.", src: tileIcons.intake },
    { title: "Follow-up and reminders", text: "Follow-up questions and next-dose reminders arrive by email.", src: tileIcons.followup },
  ] },
];

function DayWithZeenovo() {
  return <section className="section day-with" id="every-role"><Tag>Built For Every Role</Tag><ScrollFade as="h2">Every Person On Your Team,{" "}<br />One Platform.</ScrollFade><FeatureTabs groups={roles} /></section>;
}

function Features() {
  return <section className="section features" id="solutions"><Tag>ZeeNovo Clinical</Tag><ScrollFade as="h2">Guided Clinical Care,<br />From Intake to Follow-up.</ScrollFade><div className="feature-grid">
    <ScrollFade as="article" className="feature-card feature-treatment"><Image className="feature-circle treatment-circle" src={asset.featureCircle} alt="" width={874} height={760} /><div className="feature-copy"><h3>Guided Screening</h3><p>Questions branch on every answer.<br />You confirm every treatment step.</p></div><TreatmentPreview /></ScrollFade>
    <ScrollFade as="article" className="feature-card feature-provinces"><div className="feature-copy"><h3>Province-Aware Services</h3><p>Billing PINs, conditions and forms<br />follow your province.</p></div><ul>{["Ontario","Alberta","British Columbia","Saskatchewan","Nova Scotia","New Brunswick"].map(x=><li key={x}><Arrow />{x}</li>)}</ul><Image className="canada-map" src={asset.mapIcon} alt="" width={423} height={411} /></ScrollFade>
    <ScrollFade as="article" className="feature-card feature-appointments"><div className="feature-copy"><h3>Intake Before the Visit</h3><p>Patients answer screening questions when they book.<br />Walk-ins join the same queue.</p></div><a data-cta className="small-button" href="/products/clinical/minor-ailments"><Arrow /> Explore</a><AppointmentPreview animated /></ScrollFade>
    <ScrollFade as="article" className="feature-card feature-flags"><Image className="feature-circle flags-circle" src={asset.featureCircle} alt="" width={874} height={760} /><div className="feature-copy"><h3>Red Flags at the Decision Point</h3><p>Referral criteria appear where the decision is made.<br />Stop flags end the visit and record why.</p></div><PatientFlagsPreview /></ScrollFade>
  </div></section>;
}

const services = [
  ["Minor Ailments",asset.service1,"/products/clinical/minor-ailments"],
  ["Vaccinations and Injections",asset.service2,"/products/clinical/vaccinations"],
  ["Prescription Requests",asset.service3,"/products/clinical/prescriptions-and-injections"],
  ["Medication Reviews · Early access",asset.service4,"/products/clinical/medication-review"],
] as const;

function Services() {
  return <section className="section services" id="services"><Tag>ZeeNovo Clinical</Tag><ScrollFade as="h2">Services You Can Deliver</ScrollFade><div className="service-grid">{services.map(([title,src,href])=><ScrollFade as="a" href={href} key={title}><div className="service-photo"><Cover src={src} alt={title} /></div><b>{title} <span>↗</span></b></ScrollFade>)}</div></section>;
}

function Philosophy() {
  return <section className="philosophy-band"><div className="philosophy"><Tag dark>Our Philosophy</Tag><RevealSequence as="h2"><span data-reveal="rise">The pharmacist decides.</span>{" "}<span data-reveal="rise" style={{ "--sequence-delay": "80ms" } as CSSProperties}>ZeeNovo guides</span>{" "}<span data-reveal="rise" style={{ "--sequence-delay": "160ms" } as CSSProperties}><strong>and records.</strong></span></RevealSequence><ScrollFade as="div" className="philosophy-bottom" distance={12} duration={450} delay={240}><p>Built by a practising Ontario pharmacist<br />and pharmacy owner. ZeeNovo never<br />makes a clinical decision.</p><Button light href="/company/about">About ZeeNovo</Button></ScrollFade><Image className="philosophy-wave" src={asset.philosophyLines} alt="" width={181} height={643} /></div></section>;
}

function CareBanner() {
  return <ScrollFade as="section" className="care-banner"><Image className="care-background" src={asset.carePhoto} alt="Pharmacist preparing care" width={1204} height={602} /><Image className="care-overlay" src={asset.careOverlay} alt="" width={875} height={708} /><div className="care-label eye"><span className="care-label-icon"><Image src={asset.careEyeIcon} alt="" width={27} height={20} /></span>Conjunctivitis</div><div className="care-label bee"><span className="care-label-icon"><Image src={asset.careBeeIcon} alt="" width={23} height={23} /></span>Insect Bites</div><div className="care-copy"><h2>Minor Ailment Visits,<br />Structured and<br />Fully Documented.</h2><p>Guided screening, red flags, saved directions, a generated prescription and physician fax in one visit. The pharmacist decides.</p><Button href="/products/clinical/minor-ailments">See Minor Ailments</Button></div></ScrollFade>;
}

function ReportCards() {
  return <section className="section reporting" id="reporting"><Tag>ZeeNovo Assure</Tag><ScrollFade as="h2">A Safety Program<br />Your Team Will Use.</ScrollFade><div className="report-grid">
    <ScrollFade as="article" className="report-card fast"><h3>Guided Incident<br />Reporting</h3><p>Structured fields for what happened, the process<br />stage, discovery and contributing factors.</p><ReportingTimerPreview /></ScrollFade>
    <ScrollFade as="article" className="report-card analytics"><h3>CQI With a Paper Trail</h3><p>Link incidents, record the learning and give<br />every action an owner and a due date.</p><AnalyticsPreview animated /></ScrollFade>
    <ScrollFade as="article" className="report-card team"><h3>SOPs and Staff Competency</h3><p>Assign the current SOP version, track sign-off<br />and assess staff by role.</p><Button href="/products/assure/incident-reporting">Explore</Button><Image className="team-wave" src={asset.reportingWave} alt="" width={787} height={181} /><div className="team-photo"><Cover src={asset.teamPhoto} alt="Healthcare team" /></div></ScrollFade>
    <ScrollFade as="article" className="report-card nidr"><h3>Submitted to ISMP Canada</h3><p>Incident data goes to ISMP Canada&apos;s National<br />Incident Data Repository.</p><div className="nidr-logo"><NationalReportingPreview /></div></ScrollFade>
  </div></section>;
}

// Quotes supplied by ZeeNovo (staging build). Named contact, role and approval pending: see content/README.md, open item 4.
const testimonials = [
  { quote: "Since moving to ZeeNovo, our clinical and vaccination revenue has reached record levels.", name: "MapleMeds Pharmacies", role: "Ontario" },
  { quote: "Our clinical revenue improved within weeks of going live.", name: "Oshawa Lakeview Pharmacy", role: "Ontario" },
] as const;

function Testimonials() {
  return <section className="testimonials"><div className="section"><Tag>Customers</Tag><ScrollFade as="h2">What Pharmacy Teams<br />Say About ZeeNovo</ScrollFade><div className="testimonial-grid">{[asset.testimonial1,asset.testimonial2].map((src,i)=><ScrollFade as="article" key={src} className={i===1?"testimonial purple":"testimonial"}><div><span>★★★★★</span><p>{testimonials[i].quote}</p><b>{testimonials[i].name}</b><small>{testimonials[i].role}</small></div><div className="testimonial-photo"><Cover src={src} alt={i===0?"Smiling customer":"Smiling customer wearing glasses"} /></div></ScrollFade>)}</div></div></section>;
}

export default function Home() {
  return <main><Hero /><Trust /><HomeProductCards /><Values /><DayWithZeenovo /><Features /><Services /><Philosophy /><CareBanner /><ReportCards /><Testimonials /><FinalCta animated /></main>;
}
