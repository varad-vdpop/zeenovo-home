import Image from "next/image";
import { asset } from "@/lib/assets";
import FinalCta from "@/components/FinalCta";
import ResultsCounters from "@/components/ResultsCounters";
import HeroPattern from "@/components/HeroPattern";
import ScrollFade from "@/components/ScrollFade";
import { HeroMenuPreview, HeroRevenuePreview } from "@/components/HeroVisuals";
import { AssureDashboardPreview, TreatmentPreview, AppointmentPreview, PatientFlagsPreview, ReportingTimerPreview, AnalyticsPreview } from "@/components/ProductUiPreviews";

function Arrow({ light = false }: { light?: boolean }) {
  return <span aria-hidden="true" className={light ? "arrow arrow-light" : "arrow"}>↗</span>;
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
    <a className={`${light ? "button button-light" : "button"} ${className}`} href={href}>
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
        <h1 className="hero-enter hero-enter-heading">Helping Pharmacies<br />Deliver Better Care,<br /><strong>Every Day.</strong></h1>
        <p className="hero-enter hero-enter-description">World-class clinical tools, smart pharmacy business solutions, and the support you need to build your dream pharmacy practice</p>
        <Button className="hero-enter hero-enter-cta">Sign Up</Button>
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
            <div className="card-copy"><h3>Zeenovo <b>Clinical</b></h3><p>Clinical Modules + Appointment<br />Management</p><Button light href="#solutions">Explore</Button></div>
            <div className="clinical-doctor"><Cover src={asset.clinicalDoctor} alt="Smiling pharmacist" /></div>
          </ScrollFade>
          <ScrollFade as="article" className="product-card assure">
            <Image className="assure-lines" src={asset.assureCardLines} alt="" width={763} height={430} />
            <div className="card-copy"><h3>Zeenovo <b>Assure</b></h3><p>Experience the future of pharmacy operations today.<br />Innovative Solutions for Modern Pharmacies.</p><Button light href="#reporting">Explore</Button></div>
            <Image className="assure-dashboard-frame" src={asset.assureGlassFrame} alt="" width={582} height={272} />
            <AssureDashboardPreview />
          </ScrollFade>
        </div>
        <div className="product-row product-row-bottom">
          <ScrollFade as="article" className="product-card magistral">
            <Image className="magistral-lines magistral-lines-a" src={asset.magistralCardLinesA} alt="" width={628} height={262} />
            <Image className="magistral-lines magistral-lines-b" src={asset.magistralCardLinesB} alt="" width={491} height={326} />
            <div className="card-copy"><h3>Zeenovo <b>Magistral</b></h3><p>Clinical Modules + Appointment Management</p><Button light href="#solutions">Explore</Button></div>
            <div className="magistral-doctor"><Cover src={asset.magistralDoctor} alt="Pharmacy professional" /></div>
          </ScrollFade>
          <ScrollFade as="article" className="product-card intelligence">
            <Image className="intelligence-lines" src={asset.intelligenceCardLines} alt="" width={465} height={326} />
            <div className="card-copy"><h3>Zeenovo <b>Intelligence</b></h3><p>Clinical Modules + Appointment<br />Management</p><Button light href="#solutions">Explore</Button></div>
            <Image className="phone" src={asset.intelligencePhoneIllustration} alt="ZeeNovo Intelligence mobile interface" width={363} height={301} />
          </ScrollFade>
        </div>
      </div>
    </section>
  );
}

const values = [
  ["Robust security and compliance", asset.valueIcon1],
  ["Designed by expert pharmacists", asset.valueIcon2],
  ["Consistent practice and results", asset.valueIcon3],
  ["Seamless patient appointment flow", asset.valueIcon4],
  ["Personalized website", asset.valueIcon5],
] as const;

function Values() {
  return <section className="values" id="why-zeenovo"><Tag>You can trust us</Tag><h2>Your pharmacy is in good hands.</h2><div className="values-track"><Image src={asset.valuesCompleteWave} alt="" width={1440} height={181} /><div className="values-list">{values.map(([label, icon])=><div key={label}><p>{label}</p><Image src={icon} alt="" width={50} height={50} /></div>)}</div></div></section>;
}

function Features() {
  return <section className="section features" id="solutions"><Tag>Zeenovo Clinical</Tag><h2>Innovative Solutions<br />for Modern Pharmacies.</h2><div className="feature-grid">
    <article className="feature-card feature-treatment"><Image className="feature-circle treatment-circle" src={asset.featureCircle} alt="" width={874} height={760} /><div className="feature-copy"><h3>Guided Treatment Paths</h3><p>Experience the future of pharmacy operations today.<br />Innovative Solutions for Modern Pharmacies.</p></div><TreatmentPreview /></article>
    <article className="feature-card feature-provinces"><div className="feature-copy"><h3>Province Wise Service Modules</h3><p>Experience the future of pharmacy operations today.<br />Innovative Solutions for Modern Pharmacies.</p></div><ul>{["Ontario","Quebec","British Columbia","Alberta","Nova Scotia","Saskatchewan"].map(x=><li key={x}><Arrow />{x}</li>)}</ul><Image className="canada-map" src={asset.mapIcon} alt="" width={423} height={411} /></article>
    <article className="feature-card feature-appointments"><div className="feature-copy"><h3>Minor Ailments easy appointment flow</h3><p>Experience the future of pharmacy operations today.<br />Innovative Solutions for Modern Pharmacies.</p></div><a className="small-button" href="#contact"><Arrow /> Explore</a><AppointmentPreview /></article>
    <article className="feature-card feature-flags"><Image className="feature-circle flags-circle" src={asset.featureCircle} alt="" width={874} height={760} /><div className="feature-copy"><h3>Red Flags</h3><p>Experience the future of pharmacy operations today.<br />Innovative Solutions for Modern Pharmacies.</p></div><PatientFlagsPreview /></article>
  </div></section>;
}

const services = [
  ["Minor Ailments",asset.service1],
  ["Vaccination",asset.service2],
  ["Prescriptions",asset.service3],
  ["Medication review",asset.service4],
] as const;

function Services() {
  return <section className="section services" id="services"><Tag>Zeenovo Clinical</Tag><h2>Services we offer</h2><div className="service-grid">{services.map(([title,src])=><a href="#contact" key={title}><div className="service-photo"><Cover src={src} alt={title} /></div><b>{title} <span>↗</span></b></a>)}</div></section>;
}

function Philosophy() {
  return <section className="philosophy-band"><div className="philosophy"><Tag dark>Our Philosophy</Tag><h2><span>We believe every pharmacy</span>{" "}<span>should have the tools to deliver</span>{" "}<span>better care, <strong>every day.</strong></span></h2><div className="philosophy-bottom"><p>World-class clinical tools, smart pharmacy<br />business solutions, and the support you need to<br />build your dream pharmacy practice</p><Button light href="#contact">Know about us</Button></div><Image className="philosophy-wave" src={asset.philosophyLines} alt="" width={181} height={643} /></div></section>;
}

function CareBanner() {
  return <section className="care-banner"><Image className="care-background" src={asset.carePhoto} alt="Pharmacist preparing care" width={1204} height={602} /><Image className="care-overlay" src={asset.careOverlay} alt="" width={875} height={708} /><div className="care-label eye"><span className="care-label-icon"><Image src={asset.careEyeIcon} alt="" width={27} height={20} /></span>Conjunctivitis</div><div className="care-label bee"><span className="care-label-icon"><Image src={asset.careBeeIcon} alt="" width={23} height={23} /></span>Bee Sting</div><div className="care-copy"><h2>Making minor ailment care<br />quicker, simpler and more<br />accessible.</h2><p>World-class clinical tools, smart pharmacy business solutions, and the support you need to build your dream pharmacy practice</p><Button>Sign Up</Button></div></section>;
}

function ReportCards() {
  return <section className="section reporting" id="reporting"><Tag>Zeenovo Assure</Tag><h2>Why Pharmacies Choose<br />ZeeNovo for Incident Reporting</h2><div className="report-grid">
    <article className="report-card fast"><h3>Fast &amp; Guided Reporting<br />Workflow</h3><p>Experience the future of pharmacy operations today.<br />Innovative Solutions for Modern Pharmacies.</p><ReportingTimerPreview /></article>
    <article className="report-card analytics"><h3>Advanced Analytics &amp; Insights</h3><p>Experience the future of pharmacy operations today.<br />Innovative Solutions for Modern Pharmacies.</p><AnalyticsPreview /></article>
    <article className="report-card team"><h3>Multi-Pharmacy &amp; Team Support</h3><p>Experience the future of pharmacy operations today.<br />Innovative Solutions for Modern Pharmacies.</p><Button href="#contact">Explore</Button><Image className="team-wave" src={asset.reportingWave} alt="" width={787} height={181} /><div className="team-photo"><Cover src={asset.teamPhoto} alt="Healthcare team" /></div></article>
    <article className="report-card nidr"><h3>NIDR-Aligned Reporting</h3><p>Experience the future of pharmacy operations today.<br />Innovative Solutions for Modern Pharmacies.</p><div className="nidr-logo"><Image src={asset.reportingLogo} alt="ISMP Canada" width={320} height={190} /></div></article>
  </div></section>;
}

function Testimonials() {
  return <section className="testimonials"><div className="section"><Tag>Zeenovo Assure</Tag><h2>Why Pharmacies Choose<br />ZeeNovo for Incident Reporting</h2><div className="testimonial-grid">{[asset.testimonial1,asset.testimonial2].map((src,i)=><article key={src} className={i===1?"testimonial purple":"testimonial"}><div><span>★★★★★</span><p>Lorem ipsum dolor sit amet consectetur. Consequat auctor consectetur nunc vitae dolor blandit. Elit enim massa etiam neque laoreet lorem sed.</p><b>Anthony Babringer</b><small>Senior Research Manager</small></div><div className="testimonial-photo"><Cover src={src} alt={i===0?"Smiling customer":"Smiling customer wearing glasses"} /></div></article>)}</div></div></section>;
}

export default function Home() {
  return <main><Hero /><Trust /><ProductCards /><Values /><Features /><Services /><Philosophy /><CareBanner /><ReportCards /><Testimonials /><FinalCta /></main>;
}
