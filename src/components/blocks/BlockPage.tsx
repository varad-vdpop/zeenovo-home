import Image from "next/image";
import Link from "next/link";
import { Fragment, type CSSProperties, type ReactNode } from "react";
import FinalCta from "@/components/FinalCta";
import HomeProductCards from "@/components/HomeProductCards";
import ScrollFade from "@/components/ScrollFade";
import c from "@/app/products/clinical/page.module.css";
import m from "@/app/products/clinical/minor-ailments/page.module.css";
import i from "@/app/solutions/independent-pharmacies/page.module.css";
import b from "./blocks.module.css";
import { art, icons, people } from "./media";
import FormView from "./FormView";
import RoiCalculator from "./RoiCalculator";
import type * as T from "./types";

/** Splits "Line one / line two" into lines, as in the approved headings. */
export function lines(text: string): ReactNode {
  const parts = text.split(" / ");
  // The space after <br /> keeps words apart on mobile, where the approved styles hide line breaks.
  return parts.map((part, index) => <Fragment key={index}>{part}{index < parts.length - 1 && <><br />{" "}</>}</Fragment>);
}

function Arrow({ tone = "purple" }: { tone?: "purple" | "white" }) {
  const src = tone === "white" ? "/assets/zeenovo-nav-arrow-primary.svg" : "/assets/zeenovo-nav-arrow-outline.svg";
  return <Image data-cta-icon src={src} alt="" aria-hidden="true" className={c.arrow} width={24} height={24} />;
}

function DraftLabel() {
  return <p className={b.draftLabel}>Draft layout · needs design approval</p>;
}

function Hero({ block }: { block: T.HeroBlock }) {
  const person = block.person ? people[block.person] : undefined;
  return <section className={`${c.hero} ${person ? "" : b.compactHero}`}>
    <Image className={c.heroWave} src="/assets/clinical/hero-wave.svg" alt="" width={480} height={819} priority />
    {person && <Image className={c.heroEllipse} src="/assets/clinical/hero-ellipse.svg" alt="" width={619} height={619} priority />}
    <div className={`${c.heroCopy} ${person ? "" : b.compactCopy}`}>
      {block.eyebrow && <p className={`${c.eyebrow} ${b.heroEyebrow} ${c.heroEnter}`}>{block.eyebrow}</p>}
      <h1 className={c.heroEnter}>{lines(block.title)}</h1>
      <p className={`${c.heroEnter} ${c.heroDescription}`}>{block.description}</p>
      <div className={`${c.heroActions} ${c.heroEnter}`}>
        <Link data-cta className={c.primaryButton} href={block.primary.href}><Arrow tone="white" />{block.primary.label}</Link>
        {block.secondary && <Link data-cta className={c.outlineButton} href={block.secondary.href}><Arrow />{block.secondary.label}</Link>}
      </div>
    </div>
    {person && <div className={c.heroVisual}>
      <Image className={c.heroPharmacist} src={person.src} alt="Pharmacist" width={person.width} height={person.height} sizes="(max-width: 760px) 245px, 424px" priority />
      {block.card && <div className={b.heroCard}><strong>{block.card.title}</strong><span>{block.card.text}</span></div>}
      {block.badge && <span className={b.heroBadge}>{block.badge}</span>}
    </div>}
  </section>;
}

function SolutionHero({ block }: { block: T.SolutionHeroBlock }) {
  const person = people[block.person];
  return <section className={i.hero}>
    <div className={i.heroBackdrop}><Image className={i.heroArt} src="/assets/independent-pharmacies-hero-art.svg" alt="" width={1362} height={819} priority /></div>
    <div className={i.heroCopy}>
      <p className={i.eyebrow}>{block.eyebrow}</p>
      <h1>{lines(block.title)}</h1>
      <p className={i.heroDescription}>{block.description}</p>
      <Link data-cta className={i.primaryButton} href={block.primary.href}><span data-cta-icon aria-hidden="true">↗</span>{block.primary.label}</Link>
    </div>
    <Image className={i.heroPharmacist} src={person.src} alt="Pharmacist" width={person.width} height={person.height} priority sizes="(max-width: 760px) 78vw, 390px" />
    <article className={i.liveAssessment}>
      <span>{block.liveCard.label}</span>
      <small>{block.liveCard.chip}</small>
      <strong>{block.liveCard.title}</strong>
      <div>
        <span><Image src="/assets/independent-pharmacies-symptoms.svg" alt="" width={24} height={24} /></span>
        <b>{block.liveCard.itemTitle}</b>
        <small>{block.liveCard.itemText}</small>
      </div>
    </article>
    <article className={i.recordReady}>
      <Image src="/assets/independent-pharmacies-document.svg" alt="" width={26} height={26} />
      <strong>{block.noteCard.title}</strong>
      <span>{block.noteCard.text}</span>
    </article>
  </section>;
}

const tones = [m.intake, m.safety, m.treatment, m.record];

function Cards({ block }: { block: T.CardsBlock }) {
  const columns = block.items.length === 4 ? 4 : block.items.length === 2 ? 2 : 3;
  return <section className={`${m.capabilities} ${b.cardsSection}`}>
    <div className={m.sectionInner}>
      <ScrollFade as="div" className={m.sectionHeading}>
        <div><p className={m.eyebrow}>{block.eyebrow}</p><h2>{lines(block.title)}</h2></div>
        {block.side && <p>{block.side}</p>}
      </ScrollFade>
      <div className={`${m.capabilityGrid} ${b.cardGrid}`} style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}>
        {block.items.map((item, index) => {
          const content = <>
            <span className={m.capabilityNumber}>{String(index + 1).padStart(2, "0")}</span>
            <span className={b.cardIcon}><Image src={icons[item.icon]} alt="" width={40} height={40} /></span>
            <div><h3>{item.title}</h3><p>{item.text}</p></div>
          </>;
          const className = `${m.capabilityCard} ${tones[index % tones.length]} ${b.cardAuto}`;
          return item.href
            ? <ScrollFade as="a" href={item.href} className={className} delay={(index % columns) * 60} responsiveDelay key={item.title}>{content}</ScrollFade>
            : <ScrollFade as="article" className={className} delay={(index % columns) * 60} responsiveDelay key={item.title}>{content}</ScrollFade>;
        })}
      </div>
    </div>
  </section>;
}

function Reality({ block }: { block: T.RealityBlock }) {
  return <section className={i.reality}>
    <div className={i.sectionRail}>
      <div className={i.realityHeading}>
        <div><p>{block.eyebrow}</p><h2>{lines(block.title)}</h2></div>
        <p>{block.side}</p>
      </div>
      <div className={i.realityCards}>
        {block.items.map((item, index) => <article key={item.title}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <Image src="/assets/independent-pharmacies-quote.svg" alt="" width={79} height={64} />
          <div><h3>{item.title}</h3><p>{item.text}</p></div>
        </article>)}
      </div>
    </div>
  </section>;
}

function FeatureRows({ rows }: { rows: T.FeaturesBlock["rows"] }) {
  return <>{rows.map((row) => <div className={c.featureRow} key={row.title}>
    <span className={c.featureIcon}><Image src={icons[row.icon]} alt="" width={39} height={39} /></span>
    <span><strong>{row.title}</strong><small>{row.text}</small></span>
  </div>)}</>;
}

function Features({ block }: { block: T.FeaturesBlock }) {
  const visual = art[block.art];
  if (block.variant === "followup") {
    return <section className={c.followup}>
      <div className={c.followupInner}>
        <div className={c.followupVisual}><Image src={visual.src} alt={block.artAlt} width={visual.width} height={visual.height} /></div>
        <ScrollFade as="div" className={c.followupCopy} delay={60} responsiveDelay>
          <p className={c.eyebrow}>{block.eyebrow}</p>
          <h2>{lines(block.title)}</h2>
          <p className={c.followupDescription}>{block.description}</p>
          <div className={c.followupFeatures}><FeatureRows rows={block.rows} /></div>
        </ScrollFade>
      </div>
    </section>;
  }
  return <section className={c.workflow}>
    <div className={c.workflowPatterns} aria-hidden="true">
      <Image className={c.workflowLines} src="/assets/clinical/workflow-lines.svg" alt="" width={939.707} height={757.707} />
      <Image className={c.workflowBottomLines} src="/assets/clinical/workflow-lines.svg" alt="" width={939.707} height={757.707} />
    </div>
    <div className={c.workflowInner}>
      <ScrollFade as="div" className={c.workflowCopy}>
        <p className={c.eyebrow}>{block.eyebrow}</p>
        <h2>{lines(block.title)}</h2>
        <p className={c.workflowDescription}>{block.description}</p>
        <div className={c.workflowFeatures}><FeatureRows rows={block.rows} /></div>
      </ScrollFade>
      <div className={c.workflowArt}>
        <div className={c.workflowForm}><Image src={visual.src} alt={block.artAlt} width={visual.width} height={visual.height} style={{ width: "100%", height: "auto" }} /></div>
      </div>
    </div>
  </section>;
}

const patientChipIcons = ["chipRelationship", "chipFollowup", "chipDose", "chipAutofill"] as const;
const documentChipIcons = ["chipDocument", "chipEfax", "chipStorage", "chipAudit"] as const;

function TwoCard({ block }: { block: T.TwoCardBlock }) {
  return <section className={`${c.afterAssessment} ${b.twoCardSection}`}>
    <div className={c.sectionInner}>
      <ScrollFade as="div"><p className={c.eyebrow}>{block.eyebrow}</p><h2>{lines(block.title)}</h2></ScrollFade>
      <div className={c.assessmentCards}>
        <ScrollFade as="article" className={`${c.patientCard} ${b.twoCardItem}`}>
          <h3>{block.left.title}</h3><p>{block.left.text}</p>
          <ul>{block.left.chips.map((chip, index) => <li key={chip}><i><Image src={icons[patientChipIcons[index % 4]]} alt="" width={17} height={17} /></i>{chip}</li>)}</ul>
        </ScrollFade>
        <ScrollFade as="article" className={`${c.documentationCard} ${b.twoCardItem}`} delay={60} responsiveDelay>
          <h3>{block.right.title}</h3><p>{block.right.text}</p>
          <div className={c.documentFeatures}>{block.right.chips.map((chip, index) => <div key={chip}><i><Image src={icons[documentChipIcons[index % 4]]} alt="" width={17} height={17} /></i><strong>{chip}</strong></div>)}</div>
        </ScrollFade>
      </div>
    </div>
  </section>;
}

function Wave({ block }: { block: T.WaveBlock }) {
  return <section className={i.changes}>
    <div className={i.changesHeading}>
      <span><Image src="/assets/independent-pharmacies-star.svg" alt="" width={20} height={20} />{block.tag}</span>
      <h2>{lines(block.title)}</h2>
      {block.description && <p>{block.description}</p>}
    </div>
    <div className={`${i.changeTrack} ${b.waveTrack}`} style={{ gridTemplateColumns: `repeat(${block.items.length}, 1fr)` }}>
      <Image className={i.changeArt} src="/assets/independent-pharmacies-change-art.svg" alt="" width={1440} height={240} />
      <Image className={`${i.changeArt} ${i.changeArtTrace}`} src="/assets/independent-pharmacies-change-art.svg" alt="" aria-hidden="true" width={1440} height={240} />
      {block.items.map((item) => <article key={item.label}>
        <Image className={i.changeIcon} src={icons[item.icon]} alt="" width={50} height={50} />
        <h3>{item.label}</h3>
      </article>)}
    </div>
  </section>;
}

function Steps({ block }: { block: T.StepsBlock }) {
  return <section className={i.betterWeek}>
    <div className={i.sectionRail}>
      <div className={i.weekHeading}>
        <div><p>{block.eyebrow}</p><h2>{lines(block.title)}</h2></div>
        <p>{block.side}</p>
      </div>
      <div className={`${i.weekCards} ${b.stepGrid}`} style={{ gridTemplateColumns: `repeat(${block.items.length}, 1fr)` }}>
        {block.items.map((item, index) => <article key={item.title}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <div className={i.weekIcon}><Image src={icons[item.icon]} alt="" width={50} height={50} /></div>
          <div><h3>{item.title}</h3><p>{item.text}</p></div>
        </article>)}
      </div>
    </div>
  </section>;
}

function CtaSplit({ block }: { block: T.CtaSplitBlock }) {
  return <section className={i.cta}>
    <Image className={i.ctaCircle} src="/assets/independent-pharmacies-cta-circle.svg" alt="" width={1491} height={1634} />
    <div className={i.ctaCopy}>
      <p>{block.eyebrow}</p>
      <h2>{lines(block.title)}</h2>
      <span>{block.text}</span>
      <div><Link data-cta href={block.primary.href}>{block.primary.label} <span data-cta-icon aria-hidden="true">↗</span></Link><Link data-cta href={block.secondary.href}>{block.secondary.label} <span data-cta-icon aria-hidden="true">↗</span></Link></div>
    </div>
    <div className={i.ctaPhoto}><Image src="/assets/independent-pharmacies-cta.png" alt="Pharmacist preparing a syringe" fill sizes="440px" /></div>
    <article className={i.timeReturned}><strong>{block.note.title}</strong><span>{block.note.text}</span></article>
  </section>;
}

function DraftHeading({ eyebrow, title, lede }: { eyebrow?: string; title?: string; lede?: string }) {
  return <div className={b.draftHeading}>
    {eyebrow && <p className={b.eyebrow}>{eyebrow}</p>}
    {title && <h2>{lines(title)}</h2>}
    {lede && <p className={b.lede}>{lede}</p>}
  </div>;
}

function Faq({ block }: { block: T.FaqBlock }) {
  return <section className={b.draftSection}>
    <DraftLabel />
    <DraftHeading eyebrow={block.eyebrow} title={block.title} />
    <div className={b.faqList}>{block.items.map((item) => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</div>
  </section>;
}

function Pricing({ block }: { block: T.PricingBlock }) {
  return <section className={b.draftSection}>
    <DraftLabel />
    <div className={b.planGrid}>
      {block.plans.map((plan) => <article className={`${b.plan} ${plan.featured ? b.planFeatured : ""}`} key={plan.name}>
        {plan.badge && <span className={b.planBadge}>{plan.badge}</span>}
        <h3>{plan.name}</h3>
        <p className={b.planPrice}>{plan.price}<small>/mo</small></p>
        <p className={b.planAnnual}>{plan.annual}</p>
        <ul>{plan.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
        <Link className={b.planAction} href={plan.action.href}>{plan.action.label}</Link>
      </article>)}
    </div>
    <div className={b.pricingNotes}>
      <div><strong>Included with every plan</strong>{block.included}</div>
      <div><strong>Add-ons and enterprise</strong>{block.addons.map((addon) => <span key={addon} style={{ display: "block" }}>{addon}</span>)}</div>
    </div>
    <p className={b.factsStrip}>{block.facts.map((fact) => <span key={fact}>✓ {fact}</span>)}</p>
  </section>;
}

function Facts({ block }: { block: T.FactsBlock }) {
  return <section className={b.facts}>{block.items.map((item) => <div key={item.label}><b>{item.value}</b><span>{item.label}</span></div>)}</section>;
}

function List({ block }: { block: T.ListBlock }) {
  return <section className={b.draftSection}>
    <DraftLabel />
    <DraftHeading eyebrow={block.eyebrow} title={block.title} />
    {block.filters && <div className={b.filters}>{block.filters.map((filter) => <span key={filter}>{filter}</span>)}</div>}
    {block.items.length > 0
      ? <div className={b.listGrid}>{block.items.map((item) => {
        const content = <><small>{item.tag}</small><h3>{item.title}</h3><p>{item.text}</p>{item.meta && <em>{item.meta}</em>}</>;
        return item.href ? <Link className={b.listItem} href={item.href} key={item.title}>{content}</Link> : <article className={b.listItem} key={item.title}>{content}</article>;
      })}</div>
      : <p className={b.empty}>{block.empty}</p>}
  </section>;
}

function Legal({ block }: { block: T.LegalBlock }) {
  return <section className={b.legal}>
    <DraftLabel />
    <p className={b.updated}>Last updated: {block.updated}</p>
    <p className={b.intro}>{block.intro}</p>
    {block.summary && <div className={b.summary}><strong>In plain language</strong><ul>{block.summary.map((line) => <li key={line}>{line}</li>)}</ul></div>}
    {block.sections.map((section, index) => <section key={section.title}>
      <h2>{index + 1}. {section.title}</h2>
      <p className={section.body ? "" : b.placeholder}>{section.body ?? "Legal text to be supplied by ZeeNovo's counsel."}</p>
    </section>)}
    {block.note && <p className={b.note}>{block.note}</p>}
  </section>;
}

function Table({ block }: { block: T.TableBlock }) {
  return <section className={b.draftSection}>
    <DraftLabel />
    <DraftHeading eyebrow={block.eyebrow} title={block.title} />
    <table className={b.table}>
      <thead><tr>{block.columns.map((column) => <th key={column}>{column}</th>)}</tr></thead>
      <tbody>{block.rows.map((row) => <tr key={row.join("|")}>{row.map((cell, index) => <td key={index}>{cell}</td>)}</tr>)}</tbody>
    </table>
    {block.note && <p className={b.tableNote}>{block.note}</p>}
  </section>;
}

function renderBlock(block: T.Block, index: number) {
  switch (block.type) {
    case "hero": return <Hero block={block} key={index} />;
    case "solutionHero": return <SolutionHero block={block} key={index} />;
    case "cards": return <Cards block={block} key={index} />;
    case "reality": return <Reality block={block} key={index} />;
    case "features": return <Features block={block} key={index} />;
    case "twoCard": return <TwoCard block={block} key={index} />;
    case "wave": return <Wave block={block} key={index} />;
    case "steps": return <Steps block={block} key={index} />;
    case "productsGrid": return <HomeProductCards title={block.title} key={index} />;
    case "cta": return <div className={c.ctaWrap} key={index}><FinalCta animated id={`cta-${index}`} variant="clinical" eyebrow={block.eyebrow} heading={lines(block.title)} actionLabel={block.action.label} actionHref={block.action.href} /></div>;
    case "ctaSplit": return <CtaSplit block={block} key={index} />;
    case "faq": return <Faq block={block} key={index} />;
    case "pricing": return <Pricing block={block} key={index} />;
    case "facts": return <Facts block={block} key={index} />;
    case "form": return <section className={b.draftSection} key={index}><DraftLabel /><DraftHeading eyebrow={block.eyebrow} title={block.title} lede={block.description} /><FormView block={block} /></section>;
    case "list": return <List block={block} key={index} />;
    case "legal": return <Legal block={block} key={index} />;
    case "table": return <Table block={block} key={index} />;
    case "roi": return <section className={b.draftSection} key={index}><DraftLabel /><RoiCalculator /></section>;
  }
}

/** Renders blocks without the page wrapper, for templates that own their own layout. */
export function BlockList({ blocks }: { blocks: T.Block[] }) {
  return <>{blocks.map(renderBlock)}</>;
}

export default function BlockPage({ page }: { page: T.PageContent }) {
  return <main className={`${c.page} ${m.page} ${i.page}`} style={{ "--section-max": "1312px" } as CSSProperties}>
    {page.dummy && <p className={b.dummyBanner}>Placeholder content. This product&apos;s copy is dummy text until ZeeNovo confirms the scope.</p>}
    {page.blocks.map(renderBlock)}
  </main>;
}
