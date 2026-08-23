export type ServiceIcon =
  | "attic"
  | "tree"
  | "yard"
  | "truck"
  | "sofa"
  | "jeep"
  | "mower"
  | "home"
  | "hammer";

export type ServiceHighlightVariant = "default" | "hypoallergenic";

export type ServiceFeatureSection = {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  image?: string;
  imageAlt?: string;
  reverse?: boolean;
  link?: {
    href: string;
    label: string;
  };
};

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServicePricingRow = {
  item: string;
  price: string;
  note?: string;
};

export type ServicePricingTable = {
  eyebrow: string;
  title: string;
  intro?: string;
  rows: ServicePricingRow[];
  disclaimer?: string;
};

export type ServicePageSections = {
  about: {
    eyebrow: string;
    asideTitle: string;
    asideText: string;
  };
  includes: {
    eyebrow: string;
    title: string;
  };
  equipment?: {
    eyebrow: string;
    title: string;
    intro: string;
  };
  process: {
    eyebrow: string;
    title: string;
    intro: string;
  };
  area: {
    eyebrow: string;
    title: string;
    text: string;
  };
  faq: {
    eyebrow: string;
    title: string;
  };
  related: {
    eyebrow: string;
    title: string;
  };
  cta: {
    eyebrow: string;
    title: string;
    text: string;
  };
};

export type ServiceDefinition = {
  slug: string;
  icon: ServiceIcon;
  title: string;
  text: string;
  highlight?: string;
  highlightVariant?: ServiceHighlightVariant;
  heroImage: string;
  heroImageAlt: string;
  includesImage?: string;
  includesImageAlt?: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  h1: string;
  heroLead: string;
  heroPoints: string[];
  introTitle: string;
  introParagraphs: string[];
  includes: string[];
  benefits: string[];
  process: string[];
  pricingTable?: ServicePricingTable;
  equipmentIds: string[];
  equipmentImage?: string;
  equipmentImageAlt?: string;
  featureSections?: ServiceFeatureSection[];
  featureDividerImage?: string;
  featureDividerImageAlt?: string;
  faqs: ServiceFaq[];
  keywordPills: string[];
  relatedSlugs: string[];
  sections: ServicePageSections;
};
