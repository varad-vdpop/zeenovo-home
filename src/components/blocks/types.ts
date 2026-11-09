import type { ArtKey, IconKey, PersonKey } from "./media";

// Page content schema. Every block maps to an approved section from the built pages,
// except those marked "draft", which render with a "needs design approval" label.

export type Link = { label: string; href: string };

/** Use "/" inside headings to force a line break on desktop, matching the approved line lengths. */
export type Heading = string;

export type HeroBlock = {
  type: "hero";
  eyebrow?: string;
  title: Heading;
  description: string;
  primary: Link;
  secondary?: Link;
  /** Portrait from the approved photo set. Omit for a compact hero with no visual. */
  person?: PersonKey;
  /** Small floating card over the visual. */
  card?: { title: string; text: string };
  /** Pill under the visual. */
  badge?: string;
};

export type SolutionHeroBlock = {
  type: "solutionHero";
  eyebrow: string;
  title: Heading;
  description: string;
  primary: Link;
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
  items: { title: string; text: string; icon: IconKey; href?: string }[];
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
  art: ArtKey;
  artAlt: string;
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
};

export type ProductsGridBlock = { type: "productsGrid"; title?: string };

export type CtaBlock = { type: "cta"; eyebrow: string; title: Heading; action: Link };

export type CtaSplitBlock = {
  type: "ctaSplit";
  eyebrow: string;
  title: Heading;
  text: string;
  primary: Link;
  secondary: Link;
  note: { title: string; text: string };
};

// Draft blocks: no approved design exists yet.
export type FaqBlock = { type: "faq"; eyebrow: string; title: Heading; items: { q: string; a: string }[] };

export type PricingBlock = {
  type: "pricing";
  plans: { name: string; price: string; annual: string; badge?: string; features: string[]; action: Link; featured?: boolean }[];
  included: string;
  addons: string[];
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
  updated: string;
  intro: string;
  summary?: string[];
  sections: { title: string; body?: string }[];
  note?: string;
};

export type TableBlock = { type: "table"; eyebrow: string; title: Heading; columns: string[]; rows: string[][]; note?: string };

export type RoiBlock = { type: "roi" };

export type Block =
  | HeroBlock | SolutionHeroBlock | CardsBlock | RealityBlock | FeaturesBlock | TwoCardBlock | WaveBlock | StepsBlock
  | ProductsGridBlock | CtaBlock | CtaSplitBlock | FaqBlock | PricingBlock | FactsBlock | FormBlock | ListBlock | LegalBlock | TableBlock | RoiBlock;

export type PageContent = {
  meta: { title: string; description: string };
  /** Shown as a thin banner on review builds when the copy is placeholder. */
  dummy?: boolean;
  blocks: Block[];
};
