import Image from "next/image";
import { asset } from "@/lib/assets";
import ScrollFade from "@/components/ScrollFade";
import AssureOverviewPreview from "@/components/AssureOverviewPreview";
import Icon from "@/components/Icon";
import SitesPreview from "@/components/SitesPreview";

// "Our Products" grid from the home page, shared with /products.

function Button({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <a data-cta className="button button-light" href={href}>
      <span data-cta-icon aria-hidden="true" className="arrow arrow-light"><Icon /></span>
      <span>{children}</span>
    </a>
  );
}

// Compact cards in the third row: no photos, line art reused from the larger cards above.
const compactProducts = [
  { key: "sites", name: "Sites & Patient Portal", text: "Your pharmacy website with live booking, plus a patient login to manage visits.", href: "/products/sites", lines: asset.clinicalCardLines, width: 476, height: 307 },
  { key: "enterprise", name: "Enterprise", status: "Launching soon", text: "Branded booking, network dashboards and one inbox for every member pharmacy.", href: "/solutions/multi-location-groups", lines: asset.intelligenceCardLines, width: 465, height: 326 },
  { key: "central", name: "Central", status: "Launching soon", text: "Patients find every ZeeNovo pharmacy by location and service, then book.", href: "/products/zeenovo-central", lines: asset.magistralCardLinesB, width: 491, height: 326 },
] as const;

const [sites, ...stacked] = compactProducts;

function Cover({ src, alt }: { src: string; alt: string }) {
  return <Image src={src} alt={alt} fill sizes="(max-width: 760px) 100vw, 50vw" />;
}

export default function HomeProductCards({ title = "Our Products" }: { title?: string }) {
  return (
    <section className="section products" id="products">
      <ScrollFade as="h2">{title}</ScrollFade>
      <div className="product-grid">
        <div className="product-row product-row-top">
          <ScrollFade as="article" className="product-card clinical">
            <Image className="clinical-lines" src={asset.clinicalCardLines} alt="" width={476} height={307} />
            <div className="card-copy"><h3>ZeeNovo <b>Clinical</b></h3><p>Minor ailments, vaccines and injections,<br />documented and billed on one record.</p><Button href="/products/clinical">Explore</Button></div>
            <div className="clinical-doctor"><Cover src={asset.clinicalDoctor} alt="Smiling pharmacist" /></div>
          </ScrollFade>
          <ScrollFade as="article" className="product-card assure" delay={60} responsiveDelay>
            <Image className="assure-lines" src={asset.assureCardLines} alt="" width={763} height={430} />
            <div className="card-copy"><h3>ZeeNovo <b>Assure</b></h3><p>Incident reporting, CQI, SOP sign-off and<br />staff competency in one place.</p><Button href="/products/assure">Explore</Button></div>
            <Image className="assure-dashboard-frame" src={asset.assureGlassFrame} alt="" width={582} height={272} />
            <AssureOverviewPreview />
          </ScrollFade>
        </div>
        <div className="product-row product-row-bottom">
          <ScrollFade as="article" className="product-card magistral">
            <Image className="magistral-lines magistral-lines-a" src={asset.magistralCardLinesA} alt="" width={628} height={262} />
            <Image className="magistral-lines magistral-lines-b" src={asset.magistralCardLinesB} alt="" width={491} height={326} />
            <div className="card-copy"><h3>ZeeNovo <b>Magistral</b></h3><p>Non-sterile compounding with formula maths,<br />signed batch records and lot traceability.</p><div className="compact-actions"><Button href="/products/magistral">Explore</Button><span className="tag compact-status">Early access</span></div></div>
            <div className="magistral-doctor"><Cover src={asset.magistralDoctor} alt="Pharmacist" /></div>
          </ScrollFade>
          <ScrollFade as="article" className="product-card intelligence" delay={60} responsiveDelay>
            <Image className="intelligence-lines" src={asset.intelligenceCardLines} alt="" width={465} height={326} />
            <div className="card-copy"><h3>Voice <b>Booking</b></h3><p>Patients book by speaking. Bookings<br />go straight into your calendar.</p><Button href="/products/voice-based-appointment-booking">Explore</Button></div>
            <Image className="phone" src={asset.intelligencePhoneIllustration} alt="Voice booking mobile interface" width={363} height={301} />
          </ScrollFade>
        </div>
        {/* Bento: Sites & Patient Portal, larger with its website illustration; Enterprise and Central stacked beside it. */}
        <div className="product-row product-row-compact">
          <ScrollFade as="article" className="product-card product-card-compact compact-sites">
            <Image className="compact-lines" src={sites.lines} alt="" width={sites.width} height={sites.height} />
            <div className="card-copy">
              <h3>ZeeNovo <b>{sites.name}</b></h3>
              <p>{sites.text}</p>
              <div className="compact-actions"><Button href={sites.href}>Explore</Button></div>
            </div>
            <div className="sites-preview"><SitesPreview /></div>
          </ScrollFade>
          <div className="compact-stack">
            {stacked.map((product, index) => (
              <ScrollFade as="article" key={product.key} className={`product-card product-card-compact compact-${product.key}`} delay={(index + 1) * 60} responsiveDelay>
                <Image className="compact-lines" src={product.lines} alt="" width={product.width} height={product.height} />
                {"status" in product && <span className="tag compact-status">{product.status}</span>}
                <div className="card-copy">
                  <h3>ZeeNovo <b>{product.name}</b></h3>
                  <p>{product.text}</p>
                  <div className="compact-actions"><Button href={product.href}>Explore</Button></div>
                </div>
              </ScrollFade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

