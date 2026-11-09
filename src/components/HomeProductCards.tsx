import Image from "next/image";
import { asset } from "@/lib/assets";
import ScrollFade from "@/components/ScrollFade";
import { AssureDashboardPreview } from "@/components/ProductUiPreviews";

// "Our Products" grid from the home page, shared with /products.

function Button({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <a data-cta className="button button-light" href={href}>
      <span data-cta-icon aria-hidden="true" className="arrow arrow-light">↗</span>
      <span>{children}</span>
    </a>
  );
}

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
            <div className="card-copy"><h3>ZeeNovo <b>Clinical</b></h3><p>Clinical services, appointments<br />and follow-up</p><Button href="/products/clinical">Explore</Button></div>
            <div className="clinical-doctor"><Cover src={asset.clinicalDoctor} alt="Smiling pharmacist" /></div>
          </ScrollFade>
          <ScrollFade as="article" className="product-card assure" delay={60} responsiveDelay>
            <Image className="assure-lines" src={asset.assureCardLines} alt="" width={763} height={430} />
            <div className="card-copy"><h3>ZeeNovo <b>Assure</b></h3><p>Incident reporting, self-assessment and<br />quality analytics for your pharmacy.</p><Button href="/products/assure">Explore</Button></div>
            <Image className="assure-dashboard-frame" src={asset.assureGlassFrame} alt="" width={582} height={272} />
            <AssureDashboardPreview />
          </ScrollFade>
        </div>
        <div className="product-row product-row-bottom">
          <ScrollFade as="article" className="product-card magistral">
            <Image className="magistral-lines magistral-lines-a" src={asset.magistralCardLinesA} alt="" width={628} height={262} />
            <Image className="magistral-lines magistral-lines-b" src={asset.magistralCardLinesB} alt="" width={491} height={326} />
            {/* Magistral copy is placeholder until ZeeNovo confirms the product scope: see content/README.md, open item 5. */}
            <div className="card-copy"><h3>ZeeNovo <b>Magistral</b></h3><p>Compounding formulas and batch records</p><Button href="/products/magistral">Explore</Button></div>
            <div className="magistral-doctor"><Cover src={asset.magistralDoctor} alt="Pharmacist" /></div>
          </ScrollFade>
          <ScrollFade as="article" className="product-card intelligence" delay={60} responsiveDelay>
            <Image className="intelligence-lines" src={asset.intelligenceCardLines} alt="" width={465} height={326} />
            <div className="card-copy"><h3>ZeeNovo <b>Intelligence</b></h3><p>Voice-based appointment<br />booking for your patients</p><Button href="/products/voice-based-appointment-booking">Explore</Button></div>
            <Image className="phone" src={asset.intelligencePhoneIllustration} alt="ZeeNovo Intelligence mobile interface" width={363} height={301} />
          </ScrollFade>
        </div>
      </div>
    </section>
  );
}

