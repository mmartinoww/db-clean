export type BlogCategory = {
  slug: string;
  title: string;
  description: string;
  metaDescription: string;
};

export type BlogSection = {
  heading?: string;
  paragraphs?: string[];
  listItems?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  dateModified?: string;
  coverImage: string;
  coverImageAlt: string;
  category: string;
  keywords: string[];
  author: string;
  excerpt: string;
  intro: string;
  sections: BlogSection[];
  conclusionTitle?: string;
  conclusionParagraphs?: string[];
  relatedServiceSlugs: string[];
};
