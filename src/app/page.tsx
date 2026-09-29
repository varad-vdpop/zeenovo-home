import Image from "next/image";
import { asset } from "@/lib/assets";
import FinalCta from "@/components/FinalCta";

function Arrow({ light = false }: { light?: boolean }) {
  return <span aria-hidden="true" className={light ? "arrow arrow-light" : "arrow"}>↗</span>;
}

function Button({
  children,
  href = "#contact",
  light = false,
}: {
  children: React.ReactNode;
  href?: string;
  light?: boolean;
}) {
  return (
    <a className={light ? "button button-light" : "button"} href={href}>
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
      <div className="social-proof">
        <span className="avatars">
          <Image src={asset.heroAvatar1} alt="" width={37} height={37} />
          <Image src={asset.heroAvatar2} alt="" width={37} height={37} />
          <Image src={asset.heroStar} alt="" width={37} height={37} />
        </span>
        <span>50+ Pharmacies &amp; counting</span>
      </div>
      <div className="hero-content">
        <h1>Helping Pharmacies<br />Deliver Better Care,<br /><strong>Every Day.</strong></h1>
        <p>World-class clinical tools, smart pharmacy business solutions, and the support you need to build your dream pharmacy practice</p>
        <Button>Sign Up</Button>
      </div>
      <Image className="hero-menu" src={asset.heroSopMenu} alt="Pharmacy platform menu" width={194} height={242} />
      <Image className="hero-chart" src={asset.heroRevenueChart} alt="Total revenue: $285,700" width={329} height={237} />
      <div className="hero-nurse"><Cover src={asset.heroNurse} alt="Pharmacist working at a laptop" priority /></div>
    </section>
  );
}

const logos = [asset.logo1, asset.logo2, asset.logo3, asset.logo4, asset.logo5, asset.logo6, asset.logo7];

function Trust() {
  return (
    <>
      <section className="trusted" aria-label="Trusted pharmacies">
        <p>TRUSTED BY 50+ PHARMACIES</p>
        <div className="logo-strip">
          {logos.map((src, index) => <div className="partner-logo" key={src}><Image src={src} alt={["PharmaChoice", "Rexall", "OnPharm United", "Costco Pharmacy", "Whole Health", "Remedy’sRx", "IDA"][index]} fill sizes="(max-width: 760px) 45vw, 260px" /></div>)}
        </div>
      </section>
      <section className="stats" aria-label="ZeeNovo results">
        <div><b>3×</b><span>more clinical services billed</span></div>
        <div><b>15 min</b><span>saved per incident report</span></div>
        <div><b>20+</b><span>minor ailments supported</span></div>
        <div><b>&lt;1 day</b><span>average setup time</span></div>
      </section>
    </>
  );
}

function ProductCards() {
  return (
    <section className="section products" id="products">
      <h2>Our Products</h2>
      <div className="product-grid">
        <div className="product-row product-row-top">
          <article className="product-card clinical">
            <Image className="clinical-lines" src={asset.clinicalCardLines} alt="" width={476} height={307} />
            <div className="card-copy"><h3>Zeenovo <b>Clinical</b></h3><p>Clinical Modules + Appointment<br />Management</p><Button light href="#solutions">Explore</Button></div>
            <div className="clinical-doctor"><Cover src={asset.clinicalDoctor} alt="Smiling pharmacist" /></div>
          </article>
          <article className="product-card assure">
            <Image className="assure-lines" src={asset.assureCardLines} alt="" width={763} height={430} />
            <div className="card-copy"><h3>Zeenovo <b>Assure</b></h3><p>Experience the future of pharmacy operations today.<br />Innovative Solutions for Modern Pharmacies.</p><Button light href="#reporting">Explore</Button></div>
            <Image className="assure-dashboard-frame" src={asset.assureGlassFrame} alt="" width={582} height={272} />
            <Image className="assure-dashboard" src={asset.assureSopDashboard} alt="ZeeNovo Assure SOP dashboard" width={564} height={254} />
          </article>
        </div>
        <div className="product-row product-row-bottom">
          <article className="product-card magistral">
            <Image className="magistral-lines magistral-lines-a" src={asset.magistralCardLinesA} alt="" width={628} height={262} />
            <Image className="magistral-lines magistral-lines-b" src={asset.magistralCardLinesB} alt="" width={491} height={326} />
            <div className="card-copy"><h3>Zeenovo <b>Magistral</b></h3><p>Clinical Modules + Appointment Management</p><Button light href="#solutions">Explore</Button></div>
            <div className="magistral-doctor"><Cover src={asset.magistralDoctor} alt="Pharmacy professional" /></div>
          </article>
          <article className="product-card intelligence">
            <Image className="intelligence-lines" src={asset.intelligenceCardLines} alt="" width={465} height={326} />
            <div className="card-copy"><h3>Zeenovo <b>Intelligence</b></h3><p>Clinical Modules + Appointment<br />Management</p><Button light href="#solutions">Explore</Button></div>
            <Image className="phone" src={asset.intelligencePhoneIllustration} alt="ZeeNovo Intelligence mobile interface" width={363} height={301} />
          </article>
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
    <article className="feature-card feature-treatment"><Image className="feature-circle treatment-circle" src={asset.featureCircle} alt="" width={874} height={760} /><div className="feature-copy"><h3>Guided Treatment Paths</h3><p>Experience the future of pharmacy operations today.<br />Innovative Solutions for Modern Pharmacies.</p></div><Image className="treatment-ui" src={asset.guidedTreatmentUi} alt="" width={337} height={329} /></article>
    <article className="feature-card feature-provinces"><div className="feature-copy"><h3>Province Wise Service Modules</h3><p>Experience the future of pharmacy operations today.<br />Innovative Solutions for Modern Pharmacies.</p></div><ul>{["Ontario","Quebec","British Columbia","Alberta","Nova Scotia","Saskatchewan"].map(x=><li key={x}><Arrow />{x}</li>)}</ul><Image className="canada-map" src={asset.mapIcon} alt="" width={423} height={411} /></article>
    <article className="feature-card feature-appointments"><div className="feature-copy"><h3>Minor Ailments easy appointment flow</h3><p>Experience the future of pharmacy operations today.<br />Innovative Solutions for Modern Pharmacies.</p></div><a className="small-button" href="#contact"><Arrow /> Explore</a><Image className="appointment-ui" src={asset.appointmentProfileUi} alt="" width={743} height={320} /></article>
    <article className="feature-card feature-flags"><Image className="feature-circle flags-circle" src={asset.featureCircle} alt="" width={874} height={760} /><div className="feature-copy"><h3>Red Flags</h3><p>Experience the future of pharmacy operations today.<br />Innovative Solutions for Modern Pharmacies.</p></div><Image className="flags-ui" src={asset.patientFlagsUi} alt="" width={326} height={323} /></article>
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
    <article className="report-card fast"><h3>Fast &amp; Guided Reporting<br />Workflow</h3><p>Experience the future of pharmacy operations today.<br />Innovative Solutions for Modern Pharmacies.</p><Image className="timer" src={asset.reportingTimer} alt="4:53 reporting time" width={212} height={212} /></article>
    <article className="report-card analytics"><h3>Advanced Analytics &amp; Insights</h3><p>Experience the future of pharmacy operations today.<br />Innovative Solutions for Modern Pharmacies.</p><Image className="bars" src={asset.analyticsChart} alt="" width={643} height={345} /></article>
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
