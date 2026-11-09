import Image from "next/image";
import Link from "next/link";
import { Fragment, type CSSProperties, type ReactNode } from "react";
import FinalCta from "@/components/FinalCta";
import HomeProductCards from "@/components/HomeProductCards";
import ScrollFade from "@/components/ScrollFade";
import { ClinicalHeroFlags, ClinicalHeroTimer } from "@/components/ClinicalHeroVisuals";
import c from "@/app/products/clinical/page.module.css";
import m from "@/app/products/clinical/minor-ailments/page.module.css";
import i from "@/app/solutions/independent-pharmacies/page.module.css";
import b from "./blocks.module.css";
import { art, icons, people, tileIcons, type MediaItem, type TileIconKey } from "./media";
import featureData from "@/content/features.json";
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

const portraitKeys = Object.keys(people) as (keyof typeof people)[];

function Hero({ block }: { block: T.HeroBlock }) {
  const person = people[block.person ?? portraitKeys[block.title.length % portraitKeys.length]];
  const extras = block.extras ?? [];
  return <section className={c.hero}>
    <Image className={c.heroWave} src="/assets/clinical/hero-wave.svg" alt="" width={480} height={819} priority />
    <Image className={c.heroEllipse} src="/assets/clinical/hero-ellipse.svg" alt="" width={619} height={619} priority />
    <div className={c.heroCopy}>
      {block.eyebrow && <p className={`${c.eyebrow} ${b.heroEyebrow} ${c.heroEnter}`}>{block.eyebrow}</p>}
      <h1 className={c.heroEnter}>{lines(block.title)}</h1>
      <p className={`${c.heroEnter} ${c.heroDescription}`}>{block.description}</p>
      <div className={`${c.heroActions} ${c.heroEnter}`}>
        <Link data-cta className={c.primaryButton} href={block.primary.href}><Arrow tone="white" />{block.primary.label}</Link>
        {block.secondary && <Link data-cta className={c.outlineButton} href={block.secondary.href}><Arrow />{block.secondary.label}</Link>}
      </div>
    </div>
    <div className={c.heroVisual}>
      {extras.includes("flags") && <ClinicalHeroFlags />}
      <Image className={c.heroPharmacist} src={person.src} alt="Pharmacist" width={person.width} height={person.height} sizes="(max-width: 760px) 245px, 424px" priority />
      {extras.includes("timer") && <ClinicalHeroTimer />}
      {extras.includes("badge") && <Image className={c.heroConnectedBadge} src="/assets/clinical/hero-connected-badge.svg" alt="One connected clinical workflow" width={240} height={36} priority />}
    </div>
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

type CardItem = { title: string; text: string; src: string; href?: string };

/** Approved capability cards (Minor Ailments "Four jobs handled"). */
function CardsView({ eyebrow, title, side, items }: { eyebrow: string; title: string; side?: string; items: CardItem[] }) {
  const columns = items.length === 4 ? 4 : items.length === 2 ? 2 : 3;
  return <section className={`${m.capabilities} ${b.cardsSection}`}>
    <div className={`${m.sectionInner} ${b.rail}`}>
      <ScrollFade as="div" className={m.sectionHeading}>
        <div><p className={m.eyebrow}>{eyebrow}</p><h2>{lines(title)}</h2></div>
        {side && <p>{side}</p>}
      </ScrollFade>
      <div className={`${m.capabilityGrid} ${b.cardGrid}`} style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}>
        {items.map((item, index) => {
          const content = <>
            <span className={m.capabilityNumber}>{String(index + 1).padStart(2, "0")}</span>
            <span className={b.cardIcon}><Image src={item.src} alt="" width={40} height={40} /></span>
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

function Cards({ block }: { block: T.CardsBlock }) {
  return <CardsView eyebrow={block.eyebrow} title={block.title} side={block.side} items={block.items.map((item) => ({ ...item, src: icons[item.icon] }))} />;
}

function Reality({ block }: { block: T.RealityBlock }) {
  return <section className={i.reality}>
    <div className={`${i.sectionRail} ${b.rail}`}>
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
    return <section className={`${c.followup} ${b.leadFollowup}`}>
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
      <ScrollFade as="div" className={`${c.workflowCopy} ${b.alignCopy}`}>
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
    <div className={`${c.sectionInner} ${b.rail}`}>
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

/** Approved step cards (Independent Pharmacies "A better week"). */
function StepsView({ eyebrow, title, side, items }: { eyebrow: string; title: string; side?: string; items: CardItem[] }) {
  return <section className={`${i.betterWeek} ${b.stepsSection}`}>
    <div className={`${i.sectionRail} ${b.rail}`}>
      <div className={i.weekHeading}>
        <div><p>{eyebrow}</p><h2>{lines(title)}</h2></div>
        {side && <p>{side}</p>}
      </div>
      <div className={`${i.weekCards} ${b.stepGrid}`} style={{ gridTemplateColumns: `repeat(${items.length}, 1fr)` }}>
        {items.map((item, index) => <article key={item.title}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <div className={i.weekIcon}><Image src={item.src} alt="" width={50} height={50} /></div>
          <div><h3>{item.title}</h3><p>{item.text}</p></div>
        </article>)}
      </div>
    </div>
  </section>;
}

function Steps({ block }: { block: T.StepsBlock }) {
  return <StepsView eyebrow={block.eyebrow} title={block.title} side={block.side} items={block.items.map((item) => ({ ...item, src: icons[item.icon] }))} />;
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

type ListItem = { title: string; text?: string; icon: TileIconKey };
type ListGroup = { title: string; text?: string; items: ListItem[] };

/** The approved Vaccinations / Prescriptions card pair from the Clinical page: two soft cards side by side,
    each holding a white list of rows (icon circle, name). Rows carry a one-line description under the name. */
function ListCards({ eyebrow, title, side, groups }: { eyebrow?: string; title?: string; side?: string; groups: ListGroup[] }) {
  const lastAlone = groups.length % 2 === 1;
  return <section className={`${c.moreServices} ${b.listSection}`}>
    <div className={`${c.sectionInner} ${b.rail}`}>
      {title && <ScrollFade as="div" className={c.splitHeading}>
        <div><p className={c.eyebrow}>{eyebrow}</p><h2>{lines(title)}</h2></div>
        {side && <p>{side}</p>}
      </ScrollFade>}
      <div className={`${c.moreCards} ${b.cardPair}`}>
        {groups.map((group, index) => <ScrollFade as="article" key={group.title} delay={(index % 2) * 60} responsiveDelay
          className={`${c.prescriptionCard} ${b.listCard} ${index % 2 ? b.tonePeach : b.toneLavender} ${lastAlone && index === groups.length - 1 ? b.cardFull : ""}`}>
          <h3>{group.title}</h3>
          {group.text && <p>{group.text}</p>}
          <div className={`${c.prescriptionList} ${b.listBox}`}>{group.items.map((item) => <div className={`${c.prescriptionRow} ${b.listRow}`} key={item.title}>
            <span className={c.prescriptionIcon}><Image src={tileIcons[item.icon]} alt="" width={18} height={18} /></span>
            <span className={b.rowText}><strong>{item.title}</strong>{item.text && <small>{item.text}</small>}</span>
          </div>)}</div>
        </ScrollFade>)}
      </div>
    </div>
  </section>;
}

type Feature = { title: string; text: string; icon: TileIconKey };
const featureCatalogue = featureData.features as Record<string, Feature>;

/** Rows beside a visual: the approved Clinical Follow-up section, or its mirror, the Workflow section. */
function RowsView({ variant, eyebrow, title, side, items, visual, alt }: { variant: "followup" | "workflow"; eyebrow: string; title: string; side?: string; items: Feature[]; visual: MediaItem; alt: string }) {
  const copy = <>
    <p className={c.eyebrow}>{eyebrow}</p>
    <h2>{lines(title)}</h2>
    {side && <p className={c.followupDescription}>{side}</p>}
    <div className={c.followupFeatures}>{items.map((feature) => <div className={c.featureRow} key={feature.title}>
      <span className={c.featureIcon}><Image src={tileIcons[feature.icon]} alt="" width={39} height={39} /></span>
      <span><strong>{feature.title}</strong><small>{feature.text}</small></span>
    </div>)}</div>
  </>;
  if (variant === "followup") {
    return <section className={`${c.followup} ${b.leadFollowup}`}>
      <div className={c.followupInner}>
        <div className={c.followupVisual}><Image src={visual.src} alt={alt} width={visual.width} height={visual.height} /></div>
        <ScrollFade as="div" className={`${c.followupCopy} ${b.leadCopy}`} delay={60} responsiveDelay>{copy}</ScrollFade>
      </div>
    </section>;
  }
  return <section className={`${c.workflow} ${b.panelSection}`}>
    <div className={c.workflowPatterns} aria-hidden="true">
      <Image className={c.workflowLines} src="/assets/clinical/workflow-lines.svg" alt="" width={939.707} height={757.707} />
      <Image className={c.workflowBottomLines} src="/assets/clinical/workflow-lines.svg" alt="" width={939.707} height={757.707} />
    </div>
    <div className={`${c.workflowInner} ${b.panelInner}`}>
      <ScrollFade as="div" className={`${c.workflowCopy} ${b.panelCopy}`}>{copy}</ScrollFade>
      <div className={`${c.workflowArt} ${b.panelArt} ${b.panelArtCentre}`}>
        <div className={`${c.workflowForm} ${b.panelFrame}`}><Image src={visual.src} alt={alt} width={visual.width} height={visual.height} style={{ width: "100%", height: "auto" }} /></div>
      </div>
    </div>
  </section>;
}

/** Feature groups, each shown in the approved division named by `layout`. The first group carries the block heading. */
function FeatureIndex({ block }: { block: T.FeatureIndexBlock }) {
  return <>{block.groups.map((group, index) => {
    const features = group.ids.map((id) => {
      const feature = featureCatalogue[id];
      if (!feature) throw new Error(`Unknown feature id "${id}" in features.json`);
      return feature;
    });
    const first = index === 0;
    const eyebrow = first ? `${block.eyebrow} · ${group.title}` : group.title;
    const title = first ? block.title : group.text ?? group.title;
    const side = first ? block.side : undefined;
    const items = features.map((feature) => ({ title: feature.title, text: feature.text, src: tileIcons[feature.icon] }));
    switch (group.layout) {
      case "workflow":
      case "followup": {
        if (!group.art) throw new Error(`Feature group "${group.title}" needs art for the ${group.layout} layout`);
        return <RowsView key={group.title} variant={group.layout} eyebrow={eyebrow} title={title} side={side} items={features} visual={art[group.art]} alt={group.artAlt ?? ""} />;
      }
      case "cards": return <CardsView key={group.title} eyebrow={eyebrow} title={title} side={side} items={items} />;
      case "steps": return <StepsView key={group.title} eyebrow={eyebrow} title={title} side={side} items={items} />;
      case "list": return <ListCards key={group.title} eyebrow={eyebrow} title={title} side={side} groups={[{ title: group.title, items: features }]} />;
    }
  })}</>;
}

function Faq({ block }: { block: T.FaqBlock }) {
  return <ListCards eyebrow={block.eyebrow} title={block.title} groups={[{ title: "Questions", items: block.items.map((item) => ({ title: item.q, text: item.a, icon: "followup" })) }]} />;
}

function Pricing({ block }: { block: T.PricingBlock }) {
  const plans: ListGroup[] = block.plans.map((plan) => ({
    title: `${plan.name} · ${plan.price}/mo`,
    items: [{ title: plan.annual, icon: "calendar" as const }, ...plan.features.map((feature) => ({ title: feature, icon: "shield" as const }))],
  }));
  const everyPlan: ListGroup = { title: "Every plan", items: [{ title: block.included, icon: "profile" }, ...block.addons.map((addon) => ({ title: addon, icon: "intake" as const }))] };
  const facts: T.WaveBlock = { type: "wave", tag: "On every plan", title: "No surprises.", items: block.facts.map((fact, index) => ({ label: fact, icon: waveIcons[index % waveIcons.length] })) };
  return <>
    <ListCards eyebrow="Plans" title="Choose a plan." side="Prices in Canadian dollars. Start with one product and add the rest at any time." groups={[...plans, everyPlan]} />
    <Wave block={facts} />
  </>;
}
const waveIcons = ["shield", "calendarStar", "chartStar", "grid", "globe"] as const;

/** The approved home results counters. */
function Facts({ block }: { block: T.FactsBlock }) {
  return <section className="stats" aria-label="ZeeNovo in numbers">{block.items.map((item) => <div key={item.label}><b>{item.value}</b><span>{item.label}</span></div>)}</section>;
}

const listIcons = ["record", "redFlag", "pharmacist", "safety", "treatment", "province"] as const;

/** Blog, case study, guide and changelog lists use the approved capability cards. */
function List({ block }: { block: T.ListBlock }) {
  const cards: T.CardsBlock = {
    type: "cards",
    eyebrow: block.eyebrow,
    title: block.title,
    side: block.items.length === 0 ? block.empty : undefined,
    items: block.items.map((item, index) => ({ title: item.title, text: [item.tag, item.text, item.meta].filter(Boolean).join(" · "), icon: listIcons[index % listIcons.length], href: item.href })),
  };
  return <Cards block={cards} />;
}

function Legal({ block }: { block: T.LegalBlock }) {
  const groups: ListGroup[] = [];
  if (block.summary) groups.push({ title: "In plain language", items: block.summary.map((line) => ({ title: line, icon: "shield" })) });
  groups.push({ title: "Contents", items: block.sections.map((section, index) => ({ title: `${index + 1}. ${section.title}`, text: section.body ?? "Legal text to be supplied by ZeeNovo's counsel.", icon: "docAuto" })) });
  return <ListCards eyebrow={`Last updated: ${block.updated}`} title="What this covers." side={[block.intro, block.note].filter(Boolean).join(" ")} groups={groups} />;
}

function Table({ block }: { block: T.TableBlock }) {
  const items = block.rows.map((row) => ({ title: row[0], text: row.slice(1).map((cell, index) => `${block.columns[index + 1]}: ${cell}`).join(" · "), icon: "docStorage" as const }));
  return <ListCards eyebrow={block.eyebrow} title={block.title} side={block.note} groups={[{ title: block.columns[0], items }]} />;
}

/** Forms sit in the approved Clinical workflow section: copy on the left, the purple panel with the glass frame on the right. */
function FormSection({ block }: { block: T.FormBlock }) {
  return <section className={`${c.workflow} ${b.panelSection}`}>
    <div className={c.workflowPatterns} aria-hidden="true">
      <Image className={c.workflowLines} src="/assets/clinical/workflow-lines.svg" alt="" width={939.707} height={757.707} />
      <Image className={c.workflowBottomLines} src="/assets/clinical/workflow-lines.svg" alt="" width={939.707} height={757.707} />
    </div>
    <div className={`${c.workflowInner} ${b.panelInner}`}>
      <ScrollFade as="div" className={`${c.workflowCopy} ${b.panelCopy}`}>
        <p className={c.eyebrow}>{block.eyebrow}</p>
        <h2>{lines(block.title)}</h2>
        <p className={c.workflowDescription}>{block.description}</p>
        {block.aside && <div className={c.workflowFeatures}>{block.aside.lines.map((line, index) => <div className={c.featureRow} key={line}>
          <span className={c.featureIcon}><Image src={icons[(["progress", "outcomes", "plan", "steps"] as const)[index % 4]]} alt="" width={39} height={39} /></span>
          <span><strong>{index === 0 ? block.aside!.title : ""}</strong><small>{line}</small></span>
        </div>)}</div>}
      </ScrollFade>
      <div className={`${c.workflowArt} ${b.panelArt}`}>
        <div className={`${c.workflowForm} ${b.panelFrame}`}><FormView block={block} /></div>
      </div>
    </div>
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
    case "form": return <FormSection block={block} key={index} />;
    case "list": return <List block={block} key={index} />;
    case "legal": return <Legal block={block} key={index} />;
    case "table": return <Table block={block} key={index} />;
    case "featureIndex": return <FeatureIndex block={block} key={index} />;
    case "roi": return <RoiCalculator key={index} />;
  }
}

/** Renders blocks without the page wrapper, for templates that own their own layout. */
export function BlockList({ blocks }: { blocks: T.Block[] }) {
  return <>{blocks.map(renderBlock)}</>;
}

export default function BlockPage({ page }: { page: T.PageContent }) {
  return <main className={`${c.page} ${m.page} ${i.page}`} style={{ "--section-max": "1312px", ...(page.gutter ? { "--block-gutter": `${page.gutter}px` } : {}) } as CSSProperties}>
    {page.blocks.map(renderBlock)}
  </main>;
}
