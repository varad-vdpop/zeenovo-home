import type { ArtKey, IconKey, PersonKey, TileIconKey } from "./media";

// Page content schema. Every block renders with an approved section from the built pages.
// No block introduces its own visual language: see BlockPage.tsx for the mapping.

export type Link = { label: string; href: string };

/** Use "/" inside headings to force a line break on desktop, matching the approved line lengths. */
export type Heading = string;

export type HeroBlock = {
  type: "hero";
  eyebrow?: string;
  title: Heading;
  description: string;
  primary?: Link;
  secondary?: Link;
  /** Portrait from the approved photo set. Without one, the block renders as a short page header. */
  person?: PersonKey;
  /** Approved floating UI from the Clinical hero: patient flags, reporting timer, connected-workflow badge. */
  extras?: ("flags" | "timer" | "badge")[];
};

export type SolutionHeroBlock = {
  type: "solutionHero";
  eyebrow: string;
  title: Heading;
  description: string;
  primary: Link;
  /** Outline button beside the primary one. */
  secondary?: Link;
  person: PersonKey;
  /** Large white card, top right. */
  liveCard: { label: string; chip: string; title: string; itemTitle: string; itemText: string };
  /** Small dark card, bottom left. */
  noteCard: { title: string; text: string };
};

export type CardsBlock = {
  type: "cards";
  eyebrow: string;
  title: Heading;
  side?: string;
  /** Three, four or five cards render in one balanced grid (five as 3 + 2). */
  items: { title: string; text: string; icon: IconKey; href?: string }[];
  /** Button under the cards. */
  action?: Link;
};

export type RealityBlock = {
  type: "reality";
  eyebrow: string;
  title: Heading;
  side: string;
  /** Exactly three, as designed. */
  items: [RealityItem, RealityItem, RealityItem];
};
type RealityItem = { title: string; text: string };

export type FeaturesBlock = {
  type: "features";
  /** "workflow" = copy left, purple art panel right. "followup" = teal visual left, copy right. */
  variant: "workflow" | "followup";
  eyebrow: string;
  title: Heading;
  description: string;
  /** Exactly three rows, as designed. */
  rows: { title: string; text: string; icon: IconKey }[];
  /** Text link under the rows. */
  link?: Link;
  art: ArtKey;
  artAlt: string;
  /** Live product UI in the art panel instead of `art`. "sites" = the pharmacy website from the home Sites card.
      "followup" = the follow-ups screen from the Clinical page (ClinicalFollowupPreview). */
  ui?: "sites" | "followup";
  /** "workflow" only: the purple art panel on the left and the copy on the right. */
  reverse?: boolean;
};

export type TwoCardBlock = {
  type: "twoCard";
  eyebrow: string;
  title: Heading;
  left: { title: string; text: string; chips: string[] };
  right: { title: string; text: string; chips: string[] };
};

export type WaveBlock = {
  type: "wave";
  tag: string;
  title: Heading;
  description?: string;
  /** Four or five labels. */
  items: { label: string; icon: IconKey }[];
};

export type StepsBlock = {
  type: "steps";
  eyebrow: string;
  title: Heading;
  side: string;
  /** Four or five cards. */
  items: { title: string; text: string; icon: IconKey }[];
  /** Button under the cards. */
  action?: Link;
};

export type ProductsGridBlock = { type: "productsGrid"; title?: string };

export type CtaBlock = { type: "cta"; eyebrow: string; title: Heading; /** One line under the heading. */ text?: string; action: Link };

/** Full-width pastel panel (the approved pricing "Included with every plan" panel): a short statement, optional
    checklist pills and one button. Used for notes that sit between sections: a status, a download, a limit. */
export type CalloutBlock = {
  type: "callout";
  eyebrow: string;
  title: Heading;
  text: string;
  chips?: string[];
  action?: Link;
  tone?: "aqua" | "lavender" | "mint" | "peach";
};

// Blocks below render with sections designed for them in the same visual language (sections.module.css):
// FAQ accordion, pricing cards, article cards, legal text and tables. Facts reuse the home results counters.
export type FaqBlock = { type: "faq"; eyebrow: string; title: Heading; items: { q: string; a: string }[] };

export type PricingBlock = {
  type: "pricing";
  plans: { name: string; text: string; price: string; annual: string; badge?: string; features: string[]; action: Link; featured?: boolean }[];
  included: string;
  addons: { title: string; text: string; action: Link }[];
  facts: string[];
};

export type FactsBlock = { type: "facts"; items: { value: string; label: string }[] };

export type FormBlock = {
  type: "form";
  eyebrow: string;
  title: Heading;
  description: string;
  fields: FormField[];
  consent?: string;
  submit: string;
  success: string;
  aside?: { title: string; lines: string[] };
};
export type FormField =
  | { kind: "text" | "email" | "tel"; label: string; optional?: boolean; half?: boolean }
  | { kind: "select"; label: string; options: string[]; half?: boolean }
  | { kind: "checks"; label: string; options: string[] }
  | { kind: "textarea"; label: string; optional?: boolean };

export type ListBlock = {
  type: "list";
  eyebrow: string;
  title: Heading;
  filters?: string[];
  items: { tag: string; title: string; text: string; meta?: string; href?: string }[];
  empty?: string;
};

export type LegalBlock = {
  type: "legal";
  updated?: string;
  intro: string;
  summary?: string[];
  sections: { title: string; body?: string }[];
  note?: string;
};

export type TableBlock = { type: "table"; eyebrow: string; title: Heading; columns: string[]; rows: string[][]; note?: string };
/** Heading and description on the left, one card per item on the right. Icons come from tileIcons. */
export type CompareBlock = { type: "compare"; eyebrow: string; title: Heading; description?: string; items: { title: string; text: string; icon: TileIconKey }[] };

export type RoiBlock = { type: "roi" };

/** Features from src/content/features.json, by id.
    One group renders as a bento grid (3 to 7 features; `art` is the lead card's visual).
    Several groups render as a tabbed explorer, one tab per group (`text` is the tab's one-line summary). */
export type FeatureIndexBlock = {
  type: "featureIndex";
  eyebrow: string;
  title: Heading;
  side?: string;
  art?: ArtKey;
  artAlt?: string;
  groups: { title: string; text?: string; ids: string[] }[];
  /** Several groups: show them as two lists of equal size, the second mirrored (panel on the left). */
  split?: boolean;
  /** Description to show instead of the catalogue text, by feature id, when the page speaks to a different
      audience (for example the Patients page says "your"). */
  wording?: Record<string, string>;
};

export type Block =
  | HeroBlock | SolutionHeroBlock | CardsBlock | RealityBlock | FeaturesBlock | TwoCardBlock | WaveBlock | StepsBlock
  | ProductsGridBlock | CtaBlock | CalloutBlock | FaqBlock | PricingBlock | FactsBlock | FormBlock | ListBlock | LegalBlock | TableBlock | CompareBlock | RoiBlock | FeatureIndexBlock;

export type PageContent = {
  meta: { title: string; description: string };
  /** Shown as a thin banner on review builds when the copy is placeholder. */
  dummy?: boolean;
  /** Content edge in px, when the page reuses an approved section with its own edge. Defaults to 64. */
  gutter?: number;
  blocks: Block[];
};
