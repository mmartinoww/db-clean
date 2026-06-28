import { withTrailingSlash } from "../site";
import type { BlogCategory, BlogPost } from "./types";
import { izvozvaneStariMebeliSofia } from "./posts/izvozvane-stari-mebeli-sofia";
import { pochistvaneTavanMazeSofia } from "./posts/pochistvane-tavan-maze-sofia";
import { razchistvaneObrasulDvorSaveti } from "./posts/razchistvane-obrasul-dvor-saveti";
import { ryazaneOpasniDurvetaKoga } from "./posts/ryazane-opasni-durveta-koga";

export type { BlogCategory, BlogPost };

export const blogCategories: BlogCategory[] = [
  {
    slug: "suveti",
    title: "Съвети",
    description: "Практически съвети за почистване, разчистване и поддръжка на имоти.",
    metaDescription:
      "Практически съвети от DB-Clean за почистване на дворове, тавани, мазета, рязане на дървета и извозване на отпадъци в Sofia и Перник."
  },
  {
    slug: "rabota-s-klienti",
    title: "Работа с клиенти",
    description: "Истории и опит от реална работа с клиенти на DB-Clean.",
    metaDescription:
      "Реални истории и случаи от работата на DB-Clean с клиенти в Sofia и Перник — почистване на имоти, разчистване и извозване."
  }
];

export const blogPosts: BlogPost[] = [
  izvozvaneStariMebeliSofia,
  pochistvaneTavanMazeSofia,
  ryazaneOpasniDurvetaKoga,
  razchistvaneObrasulDvorSaveti
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getBlogPostsByCategory(categorySlug: string): BlogPost[] {
  return blogPosts.filter((p) => p.category === categorySlug);
}

export function getCategoryBySlug(slug: string): BlogCategory | undefined {
  return blogCategories.find((c) => c.slug === slug);
}

export function getBlogPath(slug: string): string {
  return withTrailingSlash(`/blog/${slug}`);
}

export function getBlogCategoryPath(slug: string): string {
  return withTrailingSlash(`/blog/category/${slug}`);
}

export function formatBlogDate(dateStr: string): string {
  const [year, month, day] = dateStr.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString("bg-BG", { day: "numeric", month: "long", year: "numeric" });
}
