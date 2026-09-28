import Image from "next/image";
import { asset } from "@/lib/assets";
import Navbar from "@/components/Navbar";

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
      <div className="hero-grain" />
      <Image className="hero-wave" src={asset.heroWave} alt="" width={900} height={600} />
      <div className="hero-content">
        <div className="social-proof">
          <span className="avatars">
            <Image src={asset.heroAvatar1} alt="" width={37} height={37} />
            <Image src={asset.heroAvatar2} alt="" width={37} height={37} />
            <Image src={asset.heroStar} alt="" width={37} height={37} />
          </span>
          <span>50+ Pharmacies &amp; counting</span>
        </div>
        <h1>Helping Pharmacies<br />Deliver Better Care,<br /><strong>Every Day.</strong></h1>
        <p>World-class clinical tools, smart pharmacy business solutions, and the support you need to build your dream pharmacy practice</p>
        <Button>Sign Up</Button>
      </div>
      <div className="hero-menu" aria-label="Platform capabilities">
        <b>Pharmacies</b>
        <span className="active">▦ &nbsp; SOP Templates</span>
        <span>◇ &nbsp; Medications</span>
        <span>♧ &nbsp; Drugs</span>
        <span>♙ &nbsp; Doctors</span>
        <span>▤ &nbsp; Analytics</span>
      </div>
      <div className="hero-chart">
        <div className="chart-top"><small>Total Revenue</small><span>Monthly⌄</span></div>
        <b>$285,700</b>
        <svg viewBox="0 0 290 132" aria-hidden="true" preserveAspectRatio="none">
          <defs><linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1"><stop stopColor="#aab6f7" stopOpacity=".48" /><stop offset="1" stopColor="#aab6f7" stopOpacity=".06" /></linearGradient></defs>
          <path d="M0 60 C38 52 77 31 106 36 S154 45 178 30 S244 8 290 4 L290 132 L0 132Z" fill="url(#chartFill)" />
          <path d="M0 60 C38 52 77 31 106 36 S154 45 178 30 S244 8 290 4" fill="none" stroke="#4c5ff4" strokeWidth="2" />
        </svg>
      </div>
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
          {logos.map((src, index) => <div className="partner-logo" key={src}><Image src={src} alt={["aChoice", "Rexall", "OnPharm United", "Costco Pharmacy", "Whole Health", "Remedy’sRx", "Pharmacy"][index]} fill sizes="170px" /></div>)}
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
        <article className="product-card clinical">
          <div className="card-copy"><h3>Zeenovo <b>Clinical</b></h3><p>Clinical Modules + Appointment<br />Management</p><Button light href="#solutions">Explore</Button></div>
          <Image className="clinical-lines" src={asset.clinicalLines} alt="" width={660} height={380} />
          <div className="clinical-doctor"><Cover src={asset.clinicalDoctor} alt="Smiling pharmacist" /></div>
        </article>
        <article className="product-card assure">
          <div className="card-copy"><h3>Zeenovo <b>Assure</b></h3><p>Experience the future of pharmacy operations today.<br />Innovative Solutions for Modern Pharmacies.</p><Button light href="#reporting">Explore</Button></div>
          <div className="assure-dashboard">
            <div className="dashboard-head"><Image src={asset.assureBrand} alt="ZeeNovo Assure" width={92} height={27} /><span>Home &gt; SOP Templates</span></div>
            <div className="dashboard-body">
              <aside><b>Pharmacies</b><span className="active">SOP Templates</span><span>Medicines</span><span>Drugs</span><span>Doctors</span><span>Analytics</span></aside>
              <div><h4>SOP Templates</h4><div className="dash-search">⌕ &nbsp; Search SOP Templates...</div><div className="dash-filters"><span>View Filters</span><span>Category - Dispensing</span><span>Province - Ontario</span></div><div className="dash-table"><b>SOP title</b><b>Category</b><b>Province</b><b>Latest version</b>{["Medication Dispensing","Controlled Substance Handling","Patient Counselling"].map((x,i)=><span key={x}>{x}<em>Dispensing</em><em>All Pharmacies</em><em>v{i+1}</em></span>)}</div></div>
            </div>
          </div>
        </article>
        <article className="product-card magistral">
          <div className="card-copy"><h3>Zeenovo <b>Magistral</b></h3><p>Clinical Modules + Appointment Management</p><Button light href="#solutions">Explore</Button></div>
          <div className="magistral-doctor"><Cover src={asset.magistralDoctor} alt="Pharmacy professional" /></div>
        </article>
        <article className="product-card intelligence">
          <div className="card-copy"><h3>Zeenovo <b>Intelligence</b></h3><p>Clinical Modules + Appointment<br />Management</p><Button light href="#solutions">Explore</Button></div>
          <div className="phone"><Cover src={asset.intelligencePhone} alt="ZeeNovo Intelligence mobile interface" /></div>
        </article>
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
  return <section className="values" id="why-zeenovo"><Tag>You can trust us</Tag><h2>Your pharmacy is in good hands.</h2><div className="values-track"><Image src={asset.valuesWave} alt="" width={2345} height={180} /><div className="values-list">{values.map(([label, icon])=><div key={label}><p>{label}</p><Image src={icon} alt="" width={50} height={50} /></div>)}</div></div></section>;
}

function TreatmentMockup() {
  return <div className="treatment-ui"><div className="mock-tabs"><span>⊕ &nbsp; Add medicines</span><span>◎ &nbsp; Self care measures</span></div><div className="mock-panel"><b>Select a few</b><p>⌕ &nbsp; Find an item</p><span className="selected">☑ &nbsp; Drink warm fluids to stay hydrated and soothe your throat.</span><span>□ &nbsp; Inhale steam to relieve nasal congestion.</span><span>□ &nbsp; Gargle with salt water to ease a sore throat.</span></div></div>;
}

function Features() {
  return <section className="section features" id="solutions"><Tag>Zeenovo Clinical</Tag><h2>Innovative Solutions<br />for Modern Pharmacies.</h2><div className="feature-grid">
    <article className="feature-card feature-treatment"><div className="feature-copy"><h3>Guided Treatment Paths</h3><p>Experience the future of pharmacy operations today.<br />Innovative Solutions for Modern Pharmacies.</p></div><TreatmentMockup /></article>
    <article className="feature-card feature-provinces"><div className="feature-copy"><h3>Province Wise Service Modules</h3><p>Experience the future of pharmacy operations today.<br />Innovative Solutions for Modern Pharmacies.</p></div><ul>{["Ontario","Quebec","British Columbia","Alberta","Nova Scotia","Saskatchewan"].map(x=><li key={x}><Arrow />{x}</li>)}</ul><Image className="canada-map" src={asset.mapIcon} alt="" width={423} height={411} /></article>
    <article className="feature-card feature-appointments"><div className="feature-copy"><h3>Minor Ailments easy appointment flow</h3><p>Experience the future of pharmacy operations today.<br />Innovative Solutions for Modern Pharmacies.</p></div><a className="small-button" href="#contact"><Arrow /> Explore</a><div className="appointment-ui"><aside><small>STEPS</small><b>◉ &nbsp; Profile</b><span>◫ &nbsp; Patient screening</span><span>▧ &nbsp; Prescription</span><span>♙ &nbsp; Family Physician</span><span>♡ &nbsp; Self care measures</span></aside><div><h4>Profile details</h4><small>PERSONAL INFORMATION</small><section><span>First Name *</span><span>Last Name *</span><span>Gender *</span><span>Email *</span></section></div></div></article>
    <article className="feature-card feature-flags"><div className="feature-copy"><h3>Red Flags</h3><p>Experience the future of pharmacy operations today.<br />Innovative Solutions for Modern Pharmacies.</p></div><div className="flags-ui"><small>PATIENT FLAGS</small>{["Differential diagnosis","Breastfeeding","Red flag","Pregnant"].map((x,i)=><span key={x}><i>{["♙","♡","⚑","♧"][i]}</i>{x}</span>)}</div></article>
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
  return <section className="philosophy"><Tag dark>Our Philosophy</Tag><h2>We believe every pharmacy<br />should have the tools to deliver<br />better care, <strong>every day.</strong></h2><div className="philosophy-bottom"><p>World-class clinical tools, smart pharmacy<br />business solutions, and the support you need to<br />build your dream pharmacy practice</p><Button light href="#contact">Know about us</Button></div><div className="philosophy-wave"><Image src={asset.featureLines} alt="" width={2345} height={180} /></div></section>;
}

function CareBanner() {
  return <section className="care-banner"><div className="care-background"><Cover src={asset.carePhoto} alt="Pharmacist preparing care" /></div><Image className="care-overlay" src={asset.careOverlay} alt="" width={875} height={708} /><div className="care-label eye">◎ &nbsp; Conjunctivitis</div><div className="care-label bee">♧ &nbsp; Bee Sting</div><div className="care-copy"><h2>Making minor ailment care<br />quicker, simpler and more<br />accessible.</h2><p>World-class clinical tools, smart pharmacy business solutions, and the support you need to build your dream pharmacy practice</p><Button>Sign Up</Button></div></section>;
}

function ReportCards() {
  return <section className="section reporting" id="reporting"><Tag>Zeenovo Assure</Tag><h2>Why Pharmacies Choose<br />ZeeNovo for Incident Reporting</h2><div className="report-grid">
    <article className="report-card fast"><h3>Fast &amp; Guided Reporting<br />Workflow</h3><p>Experience the future of pharmacy operations today.<br />Innovative Solutions for Modern Pharmacies.</p><div className="timer">4:53</div></article>
    <article className="report-card analytics"><h3>Advanced Analytics &amp; Insights</h3><p>Experience the future of pharmacy operations today.<br />Innovative Solutions for Modern Pharmacies.</p><div className="bars">{[24,48,23,30,39,64,88,64,49,78].map((h,i)=><span key={i} style={{height:`${h}%`}} />)}</div></article>
    <article className="report-card team"><h3>Multi-Pharmacy &amp; Team Support</h3><p>Experience the future of pharmacy operations today.<br />Innovative Solutions for Modern Pharmacies.</p><Button href="#contact">Explore</Button><Image className="team-wave" src={asset.reportingWave} alt="" width={710} height={220} /><div className="team-photo"><Cover src={asset.teamPhoto} alt="Healthcare team" /></div></article>
    <article className="report-card nidr"><h3>NIDR-Aligned Reporting</h3><p>Experience the future of pharmacy operations today.<br />Innovative Solutions for Modern Pharmacies.</p><div className="nidr-logo"><Image src={asset.reportingLogo} alt="ISMP Canada" width={320} height={190} /></div></article>
  </div></section>;
}

function Testimonials() {
  return <section className="testimonials"><div className="section"><Tag>Zeenovo Assure</Tag><h2>Why Pharmacies Choose<br />ZeeNovo for Incident Reporting</h2><div className="testimonial-grid">{[asset.testimonial1,asset.testimonial2].map((src,i)=><article key={src} className={i===1?"testimonial purple":"testimonial"}><div><span>★★★★★</span><p>Lorem ipsum dolor sit amet consectetur. Consequat auctor consectetur nunc vitae dolor blandit. Elit enim massa etiam neque laoreet lorem sed.</p><b>Anthony Babringer</b><small>Senior Research Manager</small></div><div className="testimonial-photo"><Cover src={src} alt={i===0?"Smiling customer":"Smiling customer wearing glasses"} /></div></article>)}</div></div></section>;
}

function FinalCta() {
  return <section className="final-cta" id="contact"><Tag>You can trust us</Tag><h2>Handling a pharmacy has<br />never been easier</h2><Button>Sign Up now</Button><div className="reminder-card"><b>Dose Reminders</b><small>Upcoming medication schedules</small><span><i>◷</i><strong>Sarah Johnson</strong><small>Amoxicillin 500mg<br />Dosage: 1 tablet<br />Next due: Today at 2:00 PM</small></span><span><i>◉</i><strong>Emily Rodriguez</strong><small>Metformin 500mg<br />Dosage: 2 tablets<br />Next due: Tomorrow at 9:00 AM</small></span></div><div className="cta-doctor"><Cover src={asset.ctaDoctor} alt="Pharmacist using a tablet" /></div><div className="revenue-card"><small>Total Revenue</small><b>$285,640</b><span>↗ +12% &nbsp; vs last month</span></div><div className="patient-card"><small>Active Patients</small><b>1,243</b><span>↗ +8% &nbsp; this month</span></div></section>;
}

function Footer() {
  return <footer className="footer"><div className="footer-top"><div className="brand footer-brand"><span className="brand-symbol" aria-hidden="true"><i /><i /><i /><i /></span><span>ZeeNovo</span></div><div><b>Our Products</b><a href="#products">Zeenovo Clinical</a><a href="#products">Zeenovo Assure</a><a href="#products">Zeenovo Magistral</a><a href="#products">Zeenovo Intelligence</a></div><div><b>Company</b><a href="#why-zeenovo">Why ZeeNovo</a><a href="#solutions">Solutions</a><a href="#contact">Contact us</a></div><div><b>Explore</b><a href="#services">Services</a><a href="#reporting">Incident Reporting</a><a href="#contact">Register Pharmacy</a></div><div><b>Legal</b><a href="#contact">Privacy Policy</a><a href="#contact">Terms &amp; Conditions</a></div></div><div className="footer-wordmark">ZeeNovo</div><p>Copyright © 2026 ZeeNovo Corporation.</p></footer>;
}

export default function Home() {
  return <main><Navbar /><Hero /><Trust /><ProductCards /><Values /><Features /><Services /><Philosophy /><CareBanner /><ReportCards /><Testimonials /><FinalCta /><Footer /></main>;
}
