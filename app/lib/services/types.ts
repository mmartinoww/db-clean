export type ServiceIcon =
  | "attic"
  | "tree"
  | "yard"
  | "truck"
  | "sofa"
  | "jeep"
  | "mower";

export type ServiceFaq = {
  question: string;
  answer: string;
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
  equipment: {
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
  heroImage: string;
  heroImageAlt: string;
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
  equipmentIds: string[];
  faqs: ServiceFaq[];
  keywordPills: string[];
  relatedSlugs: string[];
  sections: ServicePageSections;
};
