import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import FinalCta from "@/components/FinalCta";
import HomeProductCards from "@/components/HomeProductCards";
import ScrollFade from "@/components/ScrollFade";
import { ClinicalHeroFlags, ClinicalHeroTimer } from "@/components/ClinicalHeroVisuals";
import c from "@/app/products/clinical/page.module.css";
import m from "@/app/products/clinical/minor-ailments/page.module.css";
import i from "@/app/solutions/independent-pharmacies/page.module.css";
import b from "./blocks.module.css";
import s from "./sections.module.css";
import { art, icons, people, tileIcons, type TileIconKey } from "./media";
import featureData from "@/content/features.json";
import ArticleGrid from "./ArticleGrid";
import RoleShowcase from "@/components/RoleShowcase";
import SitesPreview from "@/components/SitesPreview";
import SceneBento from "@/components/SceneBento";
import VoicePhoneArt from "@/components/VoicePhoneArt";
import ClinicalFollowupPreview from "@/components/ClinicalFollowupPreview";
import LineArt from "@/components/LineArt";
import { changeWave } from "@/components/lineArt/changeWave";
import { valuesWave } from "@/components/lineArt/valuesWave";
import FaqList from "./FaqList";
import FormView from "./FormView";
import { lines } from "./lines";
import RoiCalculator from "./RoiCalculator";
import type * as T from "./types";
import Icon from "@/components/Icon";

export { lines };

/** Section label: the same star pill as the home page, used by every block heading. */
function Tag({ children }: { children: string }) {
  return <span className={`tag ${b.sectionTag}`}><span aria-hidden="true">★</span>{children}</span>;
}

function Arrow({ tone = "purple" }: { tone?: "purple" | "white" }) {
  const src = tone === "white" ? "/assets/zeenovo-nav-arrow-primary.svg" : "/assets/zeenovo-nav-arrow-outline.svg";
  return <Image data-cta-icon src={src} alt="" aria-hidden="true" className={c.arrow} width={24} height={24} />;
}

/** Page header for utility pages: the hero panel and its texture, without the portrait. */
function PageHeader({ block }: { block: T.HeroBlock }) {
  return <section className={s.header}>
    <Image className={s.headerWave} src="/assets/clinical/hero-wave.svg" alt="" width={480} height={819} priority />
    <Image className={s.headerEllipse} src="/assets/clinical/hero-ellipse.svg" alt="" width={619} height={619} priority />
    <div className={s.headerCopy}>
      {block.eyebrow && <span className={`tag ${b.sectionTag} ${b.heroEyebrow} ${c.heroEnter}`}><span aria-hidden="true">★</span>{block.eyebrow}</span>}
      <h1 className={c.heroEnter}>{lines(block.title)}</h1>
      <p className={`${c.heroEnter} ${c.heroDescription}`}>{block.description}</p>
      {block.primary && <div className={`${c.heroActions} ${c.heroEnter}`}>
        <Link data-cta className={c.primaryButton} href={block.primary.href}><Arrow tone="white" />{block.primary.label}</Link>
        {block.secondary && <Link data-cta className={c.outlineButton} href={block.secondary.href}><Arrow />{block.secondary.label}</Link>}
      </div>}
    </div>
  </section>;
}

function Hero({ block }: { block: T.HeroBlock }) {
  if (!block.person) return <PageHeader block={block} />;
  const person = people[block.person];
  const extras = block.extras ?? [];
  return <section className={c.hero}>
    <Image className={c.heroWave} src="/assets/clinical/hero-wave.svg" alt="" width={480} height={819} priority />
    <Image className={c.heroEllipse} src="/assets/clinical/hero-ellipse.svg" alt="" width={619} height={619} priority />
    <div className={c.heroCopy}>
      {block.eyebrow && <span className={`tag ${b.sectionTag} ${b.heroEyebrow} ${c.heroEnter}`}><span aria-hidden="true">★</span>{block.eyebrow}</span>}
      <h1 className={c.heroEnter}>{lines(block.title)}</h1>
      <p className={`${c.heroEnter} ${c.heroDescription}`}>{block.description}</p>
      <div className={`${c.heroActions} ${c.heroEnter}`}>
        {block.primary && <Link data-cta className={c.primaryButton} href={block.primary.href}><Arrow tone="white" />{block.primary.label}</Link>}
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
      <span className="tag hero-pill"><span aria-hidden="true">★</span>{block.eyebrow}</span>
      <h1>{lines(block.title)}</h1>
      <p className={i.heroDescription}>{block.description}</p>
      <div className={b.solutionActions}>
        <Link data-cta className={i.primaryButton} href={block.primary.href}><span data-cta-icon aria-hidden="true"><Icon /></span>{block.primary.label}</Link>
        {block.secondary && <Link data-cta className={`${i.primaryButton} ${b.solutionSecondary}`} href={block.secondary.href}><span data-cta-icon aria-hidden="true"><Icon /></span>{block.secondary.label}</Link>}
      </div>
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
function BlockAction({ action }: { action?: T.Link }) {
  if (!action) return null;
  return <div className={b.blockAction}><Link data-cta className={c.primaryButton} href={action.href}><Arrow tone="white" />{action.label}</Link></div>;
}

function CardsView({ eyebrow, title, side, items, action }: { eyebrow: string; title: string; side?: string; items: CardItem[]; action?: T.Link }) {
  // Five cards sit on a six-column grid as 3 + 2, so the second row fills the width instead of leaving a gap.
  const five = items.length === 5;
  const columns = five ? 6 : items.length === 4 ? 4 : items.length === 2 ? 2 : 3;
  return <section className={`${m.capabilities} ${b.cardsSection}`}>
    <div className={`${m.sectionInner} ${b.rail}`}>
      <ScrollFade as="div" className={`${m.sectionHeading} ${b.blockHead}`}>
        <div><Tag>{eyebrow}</Tag><h2>{lines(title)}</h2></div>
        {side && <p>{side}</p>}
      </ScrollFade>
      <div className={`${m.capabilityGrid} ${b.cardGrid}`} style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}>
        {items.map((item, index) => {
          const content = <>
            <span className={m.capabilityNumber}>{String(index + 1).padStart(2, "0")}</span>
            <span className={b.cardIcon}><Image src={item.src} alt="" width={40} height={40} /></span>
            <div><h3>{item.title}</h3><p>{item.text}</p></div>
          </>;
          const className = `${m.capabilityCard} ${tones[index % tones.length]} ${b.cardAuto} ${five ? (index < 3 ? b.span2 : b.span3) : ""}`;
          return item.href
            ? <ScrollFade as="a" href={item.href} className={className} delay={(index % columns) * 60} responsiveDelay key={item.title}>{content}</ScrollFade>
            : <ScrollFade as="article" className={className} delay={(index % columns) * 60} responsiveDelay key={item.title}>{content}</ScrollFade>;
        })}
      </div>
      <BlockAction action={action} />
    </div>
  </section>;
}

function Cards({ block }: { block: T.CardsBlock }) {
  return <CardsView eyebrow={block.eyebrow} title={block.title} side={block.side} action={block.action} items={block.items.map((item) => ({ ...item, src: icons[item.icon] }))} />;
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

function FeatureRows({ rows, purple = false }: { rows: T.FeaturesBlock["rows"]; purple?: boolean }) {
  return <>{rows.map((row) => <div className={c.featureRow} key={row.title}>
    <span className={`${c.featureIcon} ${purple ? b.featureIconPurple : ""}`}><Image src={icons[row.icon]} alt="" width={39} height={39} /></span>
    <span><strong>{row.title}</strong><small>{row.text}</small></span>
  </div>)}</>;
}

function Features({ block }: { block: T.FeaturesBlock }) {
  const visual = art[block.art];
  if (block.variant === "followup") {
    return <section className={`${c.followup} ${b.leadFollowup}`}>
      <div className={c.followupInner}>
        {block.ui === "followup"
          ? <div className={c.followupVisual}><div className={c.followupPreview}><ClinicalFollowupPreview /></div></div>
          : block.art === "voicePhone"
          ? <div className={`${c.followupVisual} ${b.voiceVisual}`}><VoicePhoneArt label={block.artAlt} tone="dark" /></div>
          : <div className={c.followupVisual}><Image src={visual.src} alt={block.artAlt} width={visual.width} height={visual.height} /></div>}
        <ScrollFade as="div" className={c.followupCopy} delay={60} responsiveDelay>
          <p className={c.eyebrow}>{block.eyebrow}</p>
          <h2>{lines(block.title)}</h2>
          <p className={c.followupDescription}>{block.description}</p>
          <div className={c.followupFeatures}><FeatureRows rows={block.rows} purple={block.art === "voicePhone"} /></div>
          {block.link && <Link className={`${s.textLink} ${b.featureLink}`} href={block.link.href}>{block.link.label} <span aria-hidden="true"><Icon /></span></Link>}
        </ScrollFade>
      </div>
    </section>;
  }
  return <section className={`${c.workflow} ${block.reverse ? b.workflowReverse : ""}`}>
    <div className={`${c.workflowPatterns} ${b.wfPatterns}`} aria-hidden="true">
      <Image className={c.workflowLines} src="/assets/clinical/workflow-lines.svg" alt="" width={939.707} height={757.707} />
      <Image className={c.workflowBottomLines} src="/assets/clinical/workflow-lines.svg" alt="" width={939.707} height={757.707} />
    </div>
    <div className={c.workflowInner}>
      <ScrollFade as="div" className={`${c.workflowCopy} ${b.alignCopy} ${b.wfCopy}`}>
        <p className={c.eyebrow}>{block.eyebrow}</p>
        <h2>{lines(block.title)}</h2>
        <p className={c.workflowDescription}>{block.description}</p>
        <div className={c.workflowFeatures}><FeatureRows rows={block.rows} /></div>
        {block.link && <Link className={`${s.textLink} ${b.featureLink}`} href={block.link.href}>{block.link.label} <span aria-hidden="true"><Icon /></span></Link>}
      </ScrollFade>
      <div className={`${c.workflowArt} ${b.wfArt}`}>
        <div className={`${c.workflowForm} ${b.wfForm} ${block.ui ? b.workflowUi : ""}`}>
          {block.ui === "sites" ? <SitesPreview plain /> : <Image src={visual.src} alt={block.artAlt} width={visual.width} height={visual.height} style={{ width: "100%", height: "auto" }} />}
        </div>
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
  return <section className={`${i.changes} ${b.waveSection}`}>
    <div className={`${i.changesHeading} ${b.waveHead}`}>
      <Tag>{block.tag}</Tag>
      <h2>{lines(block.title)}</h2>
      {block.description && <p>{block.description}</p>}
    </div>
    {block.items.length === 5
      // Five items use the home "Built Around Pharmacy Practice" strip: one icon in each of its five loops, labels
      // alternating above and below.
      ? <div className={b.fiveTrack}>
        <LineArt art={valuesWave} className={b.fiveArt} />
        <div className={b.fiveList}>{block.items.map((item) => <div key={item.label}>
          <Image src={icons[item.icon]} alt="" width={50} height={50} />
          <h3>{item.label}</h3>
        </div>)}</div>
      </div>
      : <div className={`${i.changeTrack} ${b.waveTrack}`} style={{ gridTemplateColumns: `repeat(${block.items.length}, 1fr)` }}>
      <LineArt art={changeWave} className={`${i.changeArt} ${b.waveArt}`} />
      {block.items.map((item) => <article key={item.label}>
        <Image className={i.changeIcon} src={icons[item.icon]} alt="" width={50} height={50} />
        <h3>{item.label}</h3>
      </article>)}
    </div>}
  </section>;
}

/** Approved step cards (Independent Pharmacies "A better week"). */
function StepsView({ eyebrow, title, side, items, action }: { eyebrow: string; title: string; side?: string; items: CardItem[]; action?: T.Link }) {
  return <section className={`${i.betterWeek} ${b.stepsSection}`}>
    <div className={`${i.sectionRail} ${b.rail}`}>
      <div className={`${i.weekHeading} ${b.blockHead}`}>
        <div><Tag>{eyebrow}</Tag><h2>{lines(title)}</h2></div>
        {side && <p>{side}</p>}
      </div>
      <div className={`${i.weekCards} ${b.stepGrid}`} style={{ gridTemplateColumns: `repeat(${items.length}, 1fr)` }}>
        {items.map((item, index) => <article key={item.title}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <div className={i.weekIcon}><Image src={item.src} alt="" width={50} height={50} /></div>
          <div><h3>{item.title}</h3><p>{item.text}</p></div>
        </article>)}
      </div>
      <BlockAction action={action} />
    </div>
  </section>;
}

function Steps({ block }: { block: T.StepsBlock }) {
  return <StepsView eyebrow={block.eyebrow} title={block.title} side={block.side} action={block.action} items={block.items.map((item) => ({ ...item, src: icons[item.icon] }))} />;
}

type Feature = { title: string; text: string; icon: TileIconKey };
const featureCatalogue = featureData.features as Record<string, Feature>;

function SectionHead({ eyebrow, title, side }: { eyebrow: string; title: string; side?: string }) {
  return <ScrollFade as="div" className={`${s.head} ${b.blockHead}`}>
    <div><Tag>{eyebrow}</Tag><h2>{lines(title)}</h2></div>
    {side && <p>{side}</p>}
  </ScrollFade>;
}

/** Bento grid: every card shows the screen it describes (SceneBento, screens in sceneScreens.tsx). Takes 4 to 7
    features; the first is the purple lead card. */
function FeatureBento({ block, features }: { block: T.FeatureIndexBlock; features: Feature[] }) {
  return <section className={s.section}>
    <div className={b.rail}>
      <SectionHead eyebrow={block.eyebrow} title={block.title} side={block.side} />
      <SceneBento label={block.groups[0].title} features={features.map((feature, index) => ({ id: block.groups[0].ids[index], title: feature.title, text: feature.text }))} />
    </div>
  </section>;
}

/** Features from features.json. One group renders as a bento grid; several groups render as the auto-advancing list
    from the home page ("Built for every role"): group headings on the left, the open group's features on the right. */
function FeatureIndex({ block }: { block: T.FeatureIndexBlock }) {
  const groups = block.groups.map((group) => ({
    title: group.title,
    text: group.text,
    items: group.ids.map((id) => {
      const feature = featureCatalogue[id];
      if (!feature) throw new Error(`Unknown feature id "${id}" in features.json`);
      return block.wording?.[id] ? { ...feature, text: block.wording[id] } : feature;
    }),
  }));
  if (groups.length === 1) return <FeatureBento block={block} features={groups[0].items} />;
  const showcaseGroups = groups.map((group) => ({ ...group, items: group.items.map((feature) => ({ title: feature.title, text: feature.text, src: tileIcons[feature.icon] })) }));
  const half = Math.ceil(showcaseGroups.length / 2);
  return <section className={s.section}>
    <div className={b.rail}>
      <SectionHead eyebrow={block.eyebrow} title={block.title} side={block.side} />
      {block.split ? <>
        <RoleShowcase groups={showcaseGroups.slice(0, half)} feature />
        <RoleShowcase groups={showcaseGroups.slice(half)} reverse feature />
      </> : <RoleShowcase groups={showcaseGroups} feature />}
    </div>
  </section>;
}

const calloutTones = { aqua: s.toneAqua, lavender: s.toneLavender, mint: s.toneMint, peach: s.tonePeach } as const;

/** The approved "Included with every plan" panel, as a standalone note between sections. */
function Callout({ block }: { block: T.CalloutBlock }) {
  return <section className={`${s.section} ${s.calloutSection}`}>
    <div className={b.rail}>
      <ScrollFade as="div" className={`${s.included} ${s.callout} ${calloutTones[block.tone ?? "aqua"]}`}>
        <Image className={s.includedWave} src="/assets/clinical/booking-wave.svg" alt="" width={684} height={246} />
        <p className={s.eyebrow}>{block.eyebrow}</p>
        <h2>{lines(block.title)}</h2>
        <p>{block.text}</p>
        {block.chips && <div className={s.pills}>{block.chips.map((chip) => <span className={s.pill} key={chip}><i aria-hidden="true" />{chip}</span>)}</div>}
        {block.action && <Link className={s.textLink} href={block.action.href}>{block.action.label} <span aria-hidden="true"><Icon /></span></Link>}
      </ScrollFade>
    </div>
  </section>;
}

/** FAQ accordion beside its heading. The first question starts open. */
function Faq({ block }: { block: T.FaqBlock }) {
  return <section className={`${s.section} ${s.surface}`}>
    <div className={`${b.rail} ${s.faq}`}>
      <ScrollFade as="div" className={s.faqIntro}>
        <Tag>{block.eyebrow}</Tag>
        <h2>{lines(block.title)}</h2>
        <p>Have a question that is not here? Ask our team.</p>
        <Link data-cta className={`${c.outlineButton} ${b.faqButton}`} href="/company/contact"><Arrow />Contact us</Link>
      </ScrollFade>
      <FaqList items={block.items} />
    </div>
  </section>;
}

/** Plan cards with the recommended plan highlighted, then what every plan includes and the add-ons. */
function Pricing({ block }: { block: T.PricingBlock }) {
  return <section className={s.section}>
    <div className={b.rail}>
      <div className={s.plans}>{block.plans.map((plan, index) => <ScrollFade as="article" className={`${s.plan} ${plan.featured ? s.planFeatured : ""}`} delay={index * 60} responsiveDelay key={plan.name}>
        {plan.featured && <Image className={s.planLines} src="/assets/clinical/workflow-lines.svg" alt="" width={940} height={758} />}
        {plan.badge && <span className={s.planBadge}>{plan.badge}</span>}
        <h3>{plan.name}</h3>
        <p className={s.planText}>{plan.text}</p>
        <p className={s.planPrice}>{plan.price}<small>per month</small></p>
        <p className={s.planAnnual}>{plan.annual}</p>
        <Link data-cta className={s.planAction} href={plan.action.href}>
          <Image data-cta-icon src={plan.featured ? "/assets/zeenovo-nav-arrow-outline.svg" : "/assets/zeenovo-nav-arrow-primary.svg"} alt="" aria-hidden="true" width={24} height={24} />{plan.action.label}
        </Link>
        <ul className={s.planList}>{plan.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
      </ScrollFade>)}</div>
      <ScrollFade as="div" className={s.included}>
        <Image className={s.includedWave} src="/assets/clinical/booking-wave.svg" alt="" width={684} height={246} />
        <h3>Included with every plan</h3>
        <p>{block.included}</p>
        <div className={s.pills}>{block.facts.map((fact) => <span className={s.pill} key={fact}><i aria-hidden="true" />{fact}</span>)}</div>
      </ScrollFade>
      <div className={s.addons}>{block.addons.map((addon, index) => <ScrollFade as="article" className={`${s.addon} ${index % 2 ? s.tonePeach : s.toneLavender}`} delay={index * 60} responsiveDelay key={addon.title}>
        <h3>{addon.title}</h3>
        <p>{addon.text}</p>
        <Link className={s.textLink} href={addon.action.href}>{addon.action.label} <span aria-hidden="true"><Icon /></span></Link>
      </ScrollFade>)}</div>
    </div>
  </section>;
}

/** The approved home results counters. */
function Facts({ block }: { block: T.FactsBlock }) {
  return <section className="stats" aria-label="ZeeNovo in numbers">{block.items.map((item) => <div key={item.label}><b>{item.value}</b><span>{item.label}</span></div>)}</section>;
}

/** Blog, case study, guide and changelog lists. */
function List({ block }: { block: T.ListBlock }) {
  return <section className={s.section}>
    <div className={b.rail}>
      <SectionHead eyebrow={block.eyebrow} title={block.title} />
      <ArticleGrid filters={block.filters} items={block.items} empty={block.empty} />
    </div>
  </section>;
}

/** Long-form legal text with a contents list that stays in view. */
function Legal({ block }: { block: T.LegalBlock }) {
  return <section className={s.section}>
    <div className={`${b.rail} ${s.legal}`}>
      <nav className={s.toc} aria-label="On this page">
        <p className={s.eyebrow}>On this page</p>
        <ol>{block.sections.map((section, index) => <li key={section.title}><a href={`#section-${index + 1}`}>{section.title}</a></li>)}</ol>
      </nav>
      <div className={s.prose}>
        {block.updated && <p className={s.updated}>Last updated: {block.updated}</p>}
        <p className={s.intro}>{block.intro}</p>
        {block.summary && <div className={s.summary}><strong>In plain language</strong><ul>{block.summary.map((line) => <li key={line}>{line}</li>)}</ul></div>}
        {block.sections.map((section, index) => <section id={`section-${index + 1}`} key={section.title}>
          <h2>{index + 1}. {section.title}</h2>
          <p className={section.body ? undefined : s.pending}>{section.body ?? "This section will be supplied by ZeeNovo\u2019s legal counsel."}</p>
        </section>)}
        {block.note && <p className={s.note}>{block.note}</p>}
      </div>
    </div>
  </section>;
}

/** Heading and description on the left; on the right, one panel holding a card per item (icon, title, text). */
function Compare({ block }: { block: T.CompareBlock }) {
  return <section className={s.section}>
    <div className={`${b.rail} ${b.compare}`}>
      <ScrollFade as="div" className={b.compareIntro}>
        <Tag>{block.eyebrow}</Tag>
        <h2>{lines(block.title)}</h2>
        {block.description && <p>{block.description}</p>}
      </ScrollFade>
      <ScrollFade as="div" className={b.comparePanel}>
        {block.items.map((item) => <article className={b.compareItem} key={item.title}>
          <span className={b.compareIcon}><Image src={tileIcons[item.icon]} alt="" width={22} height={22} /></span>
          <div><h3>{item.title}</h3><p>{item.text}</p></div>
        </article>)}
      </ScrollFade>
    </div>
  </section>;
}

function Table({ block }: { block: T.TableBlock }) {
  return <section className={s.section}>
    <div className={b.rail}>
      <SectionHead eyebrow={block.eyebrow} title={block.title} />
      <div className={s.tableWrap}>
        <table className={s.table}>
          <thead><tr>{block.columns.map((column) => <th key={column} scope="col">{column}</th>)}</tr></thead>
          <tbody>{block.rows.map((row) => <tr key={row.join("|")}>{row.map((cell, index) => <td key={index}>{cell}</td>)}</tr>)}</tbody>
        </table>
      </div>
      {block.note && <p className={s.tableNote}>{block.note}</p>}
    </div>
  </section>;
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
    case "cta": return <div className={c.ctaWrap} key={index}><FinalCta animated id={`cta-${index}`} variant="clinical" eyebrow={block.eyebrow} heading={lines(block.title)} text={block.text} actionLabel={block.action.label} actionHref={block.action.href} /></div>;
    case "callout": return <Callout block={block} key={index} />;
    case "faq": return <Faq block={block} key={index} />;
    case "pricing": return <Pricing block={block} key={index} />;
    case "facts": return <Facts block={block} key={index} />;
    case "form": return <FormSection block={block} key={index} />;
    case "list": return <List block={block} key={index} />;
    case "legal": return <Legal block={block} key={index} />;
    case "table": return <Table block={block} key={index} />;
    case "compare": return <Compare block={block} key={index} />;
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
