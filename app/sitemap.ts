import type { MetadataRoute } from "next";
import { blogCategories, blogPosts, getBlogCategoryPath, getBlogPath } from "./lib/blog";
import { getServicePath, services } from "./lib/services";
import { SITE_URL, withTrailingSlash } from "./lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    // ── Home ────────────────────────────────────────────────────────────────
    {
      url: `${SITE_URL}${withTrailingSlash("/")}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1.0
    },

    // ── Service pages ───────────────────────────────────────────────────────
    ...services.map((service) => ({
      url: `${SITE_URL}${getServicePath(service.slug)}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85
    })),

    // ── Coverage page ───────────────────────────────────────────────────────
    {
      url: `${SITE_URL}${withTrailingSlash("/pokritie")}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7
    },

    // ── Blog index ──────────────────────────────────────────────────────────
    {
      url: `${SITE_URL}${withTrailingSlash("/blog")}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.75
    },

    // ── Blog category pages ─────────────────────────────────────────────────
    ...blogCategories.map((cat) => ({
      url: `${SITE_URL}${getBlogCategoryPath(cat.slug)}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.65
    })),

    // ── Blog posts ──────────────────────────────────────────────────────────
    ...blogPosts.map((post) => ({
      url: `${SITE_URL}${getBlogPath(post.slug)}`,
      lastModified: new Date(post.dateModified ?? post.date),
      changeFrequency: "monthly" as const,
      priority: 0.7
    })),

    // ── Legal pages ─────────────────────────────────────────────────────────
    {
      url: `${SITE_URL}${withTrailingSlash("/terms")}`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3
    },
    {
      url: `${SITE_URL}${withTrailingSlash("/privacy")}`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3
    }
  ];
}
