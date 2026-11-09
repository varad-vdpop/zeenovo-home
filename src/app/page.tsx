import Image from "next/image";
import { asset } from "@/lib/assets";
import FinalCta from "@/components/FinalCta";
import ResultsCounters from "@/components/ResultsCounters";
import HeroPattern from "@/components/HeroPattern";
import ScrollFade from "@/components/ScrollFade";
import RevealSequence from "@/components/RevealSequence";
import type { CSSProperties } from "react";
import { HeroMenuPreview, HeroRevenuePreview } from "@/components/HeroVisuals";
import { AssureDashboardPreview, TreatmentPreview, AppointmentPreview, PatientFlagsPreview, ReportingTimerPreview, AnalyticsPreview } from "@/components/ProductUiPreviews";

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
        <span>50+ Pharmacies &amp; counting</span>
      </div>
      <div className="hero-content">
        <h1 className="hero-enter hero-enter-heading">Clinical Services,<br />Safety and Booking.<br /><strong>One Platform.</strong></h1>
        <p className="hero-enter hero-enter-description">Guided clinical workflows, incident reporting, a booking website and patient self-service for Canadian pharmacies.</p>
        <Button className="hero-enter hero-enter-cta" href="https://auth.zeenovo.com/signup">Sign Up</Button>
      </div>
      <HeroMenuPreview />
      <HeroRevenuePreview />
      <div className="hero-nurse"><Cover src={asset.heroNurse} alt="Pharmacist working at a laptop" priority /></div>
    </section>
  );
}

const logos = [asset.logo1, asset.logo2, asset.logo3, asset.logo4, asset.logo5, asset.logo6, asset.logo7];
const logoNames = ["PharmaChoice", "Rexall", "OnPharm United", "Costco Pharmacy", "Whole Health", "Remedy’sRx", "IDA"];

function Trust() {
  return (
    <>
      <section className="trusted" aria-label="Trusted pharmacies">
        <p>TRUSTED BY 50+ PHARMACIES</p>
        <div className="logo-strip">
          <div className="logo-ticker-track">
            {[false, true].map((duplicate) => (
              <div className="logo-ticker-group" aria-hidden={duplicate || undefined} key={duplicate ? "duplicate" : "original"}>
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

function ProductCards() {
  return (
    <section className="section products" id="products">
      <ScrollFade as="h2">Our Products</ScrollFade>
      <div className="product-grid">
        <div className="product-row product-row-top">
          <ScrollFade as="article" className="product-card clinical">
            <Image className="clinical-lines" src={asset.clinicalCardLines} alt="" width={476} height={307} />
            <div className="card-copy"><h3>ZeeNovo <b>Clinical</b></h3><p>Clinical services, appointments<br />and follow-up</p><Button light href="/products/clinical">Explore</Button></div>
            <div className="clinical-doctor"><Cover src={asset.clinicalDoctor} alt="Smiling pharmacist" /></div>
          </ScrollFade>
          <ScrollFade as="article" className="product-card assure" delay={60} responsiveDelay>
            <Image className="assure-lines" src={asset.assureCardLines} alt="" width={763} height={430} />
            <div className="card-copy"><h3>ZeeNovo <b>Assure</b></h3><p>Incident reporting, self-assessment and<br />quality analytics for your pharmacy.</p><Button light href="/products/assure">Explore</Button></div>
            <Image className="assure-dashboard-frame" src={asset.assureGlassFrame} alt="" width={582} height={272} />
            <AssureDashboardPreview />
          </ScrollFade>
        </div>
        <div className="product-row product-row-bottom">
          <ScrollFade as="article" className="product-card magistral">
            <Image className="magistral-lines magistral-lines-a" src={asset.magistralCardLinesA} alt="" width={628} height={262} />
            <Image className="magistral-lines magistral-lines-b" src={asset.magistralCardLinesB} alt="" width={491} height={326} />
            <div className="card-copy"><h3>ZeeNovo <b>Sites</b></h3><p>Your pharmacy website, with live booking built in</p><Button light href="/products/sites">Explore</Button></div>
            <div className="magistral-doctor"><Cover src={asset.magistralDoctor} alt="Pharmacist" /></div>
          </ScrollFade>
          <ScrollFade as="article" className="product-card intelligence" delay={60} responsiveDelay>
            <Image className="intelligence-lines" src={asset.intelligenceCardLines} alt="" width={465} height={326} />
            <div className="card-copy"><h3>ZeeNovo <b>Intelligence</b></h3><p>Voice-based appointment<br />booking for your patients</p><Button light href="/products/voice-based-appointment-booking">Explore</Button></div>
            <Image className="phone" src={asset.intelligencePhoneIllustration} alt="ZeeNovo Intelligence mobile interface" width={363} height={301} />
          </ScrollFade>
        </div>
      </div>
    </section>
  );
}

const values = [
  ["Canadian data residency", asset.valueIcon1],
  ["Designed with practising pharmacists", asset.valueIcon2],
  ["Province-specific clinical logic", asset.valueIcon3],
  ["Booking to follow-up in one record", asset.valueIcon4],
  ["Pharmacy website included", asset.valueIcon5],
] as const;

function Values() {
  return <section className="values" id="why-zeenovo"><Tag>You can trust us</Tag><h2>Your pharmacy is in good hands.</h2><div className="values-track"><Image src={asset.valuesCompleteWave} alt="" width={1440} height={181} /><div className="values-list">{values.map(([label, icon], index)=><ScrollFade as="div" key={label} distance={12} duration={450} delay={index * 60} responsiveDelay><p>{label}</p><Image src={icon} alt="" width={50} height={50} /></ScrollFade>)}</div></div></section>;
}

function Features() {
  return <section className="section features" id="solutions"><Tag>ZeeNovo Clinical</Tag><ScrollFade as="h2">Guided Clinical Care,<br />From Intake to Follow-up.</ScrollFade><div className="feature-grid">
    <ScrollFade as="article" className="feature-card feature-treatment"><Image className="feature-circle treatment-circle" src={asset.featureCircle} alt="" width={874} height={760} /><div className="feature-copy"><h3>Guided Treatment Paths</h3><p>Treatment and self-care options by condition.<br />The pharmacist confirms every recommendation.</p></div><TreatmentPreview /></ScrollFade>
    <ScrollFade as="article" className="feature-card feature-provinces"><div className="feature-copy"><h3>Province-Specific Service Modules</h3><p>Assessments follow the scope and terminology<br />of each province&apos;s program.</p></div><ul>{["Ontario","Alberta","British Columbia","Saskatchewan","Nova Scotia","New Brunswick"].map(x=><li key={x}><Arrow />{x}</li>)}</ul><Image className="canada-map" src={asset.mapIcon} alt="" width={423} height={411} /></ScrollFade>
    <ScrollFade as="article" className="feature-card feature-appointments"><div className="feature-copy"><h3>Minor Ailments Booking Flow</h3><p>Patients book online or walk in. Intake is<br />captured before the consultation starts.</p></div><a data-cta className="small-button" href="/products/clinical/minor-ailments"><Arrow /> Explore</a><AppointmentPreview animated /></ScrollFade>
    <ScrollFade as="article" className="feature-card feature-flags"><Image className="feature-circle flags-circle" src={asset.featureCircle} alt="" width={874} height={760} /><div className="feature-copy"><h3>Red Flags</h3><p>Health flags and referral criteria appear<br />at the point the decision is made.</p></div><PatientFlagsPreview /></ScrollFade>
  </div></section>;
}

const services = [
  ["Minor Ailments",asset.service1,"/products/clinical/minor-ailments"],
  ["Vaccinations",asset.service2,"/products/clinical/vaccinations"],
  ["Prescriptions",asset.service3,"/products/clinical/prescriptions-and-injections"],
  ["Medication Review",asset.service4,"/products/clinical/medication-review"],
] as const;

function Services() {
  return <section className="section services" id="services"><Tag>ZeeNovo Clinical</Tag><ScrollFade as="h2">Services You Can Deliver</ScrollFade><div className="service-grid">{services.map(([title,src,href])=><ScrollFade as="a" href={href} key={title}><div className="service-photo"><Cover src={src} alt={title} /></div><b>{title} <span>↗</span></b></ScrollFade>)}</div></section>;
}

function Philosophy() {
  return <section className="philosophy-band"><div className="philosophy"><Tag dark>Our Philosophy</Tag><RevealSequence as="h2"><span data-reveal="rise">We believe every pharmacy</span>{" "}<span data-reveal="rise" style={{ "--sequence-delay": "80ms" } as CSSProperties}>should have the tools to deliver</span>{" "}<span data-reveal="rise" style={{ "--sequence-delay": "160ms" } as CSSProperties}>better care, <strong>every day.</strong></span></RevealSequence><ScrollFade as="div" className="philosophy-bottom" distance={12} duration={450} delay={240}><p>ZeeNovo builds the clinical, compliance and<br />patient tools a pharmacy needs to deliver<br />more care with the same team.</p><Button light href="/company/about">About ZeeNovo</Button></ScrollFade><Image className="philosophy-wave" src={asset.philosophyLines} alt="" width={181} height={643} /></div></section>;
}

function CareBanner() {
  return <ScrollFade as="section" className="care-banner"><Image className="care-background" src={asset.carePhoto} alt="Pharmacist preparing care" width={1204} height={602} /><Image className="care-overlay" src={asset.careOverlay} alt="" width={875} height={708} /><div className="care-label eye"><span className="care-label-icon"><Image src={asset.careEyeIcon} alt="" width={27} height={20} /></span>Conjunctivitis</div><div className="care-label bee"><span className="care-label-icon"><Image src={asset.careBeeIcon} alt="" width={23} height={23} /></span>Bee Sting</div><div className="care-copy"><h2>Making minor ailment care<br />quicker, simpler and more<br />accessible.</h2><p>Guided questions, red flag checks, treatment options and the physician notification, completed in one consultation.</p><Button href="/products/clinical/minor-ailments">See Minor Ailments</Button></div></ScrollFade>;
}

function ReportCards() {
  return <section className="section reporting" id="reporting"><Tag>ZeeNovo Assure</Tag><ScrollFade as="h2">Why Pharmacies Choose<br />ZeeNovo for Incident Reporting</ScrollFade><div className="report-grid">
    <ScrollFade as="article" className="report-card fast"><h3>Fast &amp; Guided Reporting<br />Workflow</h3><p>Guided steps take a report from over<br />20 minutes to under 5.</p><ReportingTimerPreview /></ScrollFade>
    <ScrollFade as="article" className="report-card analytics"><h3>Advanced Analytics &amp; Insights</h3><p>See error types, time-of-day patterns and the<br />medications involved as trends change.</p><AnalyticsPreview animated /></ScrollFade>
    <ScrollFade as="article" className="report-card team"><h3>Multi-Pharmacy &amp; Team Support</h3><p>Track incidents by store, staff member, date<br />and severity in one dashboard.</p><Button href="/products/assure/incident-reporting">Explore</Button><Image className="team-wave" src={asset.reportingWave} alt="" width={787} height={181} /><div className="team-photo"><Cover src={asset.teamPhoto} alt="Healthcare team" /></div></ScrollFade>
    <ScrollFade as="article" className="report-card nidr"><h3>NIDR-Aligned Reporting</h3><p>Built on National Incident Data Repository<br />fields and categories, ready for submission.</p><div className="nidr-logo"><Image src={asset.reportingLogo} alt="ISMP Canada" width={320} height={190} /></div></ScrollFade>
  </div></section>;
}

// Quotes supplied by ZeeNovo (staging build). Named contact, role and approval pending: see content/README.md, open item 4.
const testimonials = [
  { quote: "Since moving to ZeeNovo, our clinical and vaccination revenue has reached record levels, and the workflows run themselves.", name: "MapleMeds Pharmacies", role: "Ontario" },
  { quote: "ZeeNovo made our day-to-day clinical operations much simpler, and our clinical revenue improved within weeks of going live.", name: "Oshawa Lakeview Pharmacy", role: "Ontario" },
] as const;

function Testimonials() {
  return <section className="testimonials"><div className="section"><Tag>Customers</Tag><ScrollFade as="h2">What Pharmacy Teams<br />Say About ZeeNovo</ScrollFade><div className="testimonial-grid">{[asset.testimonial1,asset.testimonial2].map((src,i)=><ScrollFade as="article" key={src} className={i===1?"testimonial purple":"testimonial"}><div><span>★★★★★</span><p>{testimonials[i].quote}</p><b>{testimonials[i].name}</b><small>{testimonials[i].role}</small></div><div className="testimonial-photo"><Cover src={src} alt={i===0?"Smiling customer":"Smiling customer wearing glasses"} /></div></ScrollFade>)}</div></div></section>;
}

export default function Home() {
  return <main><Hero /><Trust /><ProductCards /><Values /><Features /><Services /><Philosophy /><CareBanner /><ReportCards /><Testimonials /><FinalCta animated /></main>;
}
