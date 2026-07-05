---
name: blog-seo-internal-links
description: Creates and edits Bulgarian DB-Clean blog posts with SEO-focused keyword usage, valid category IDs, service-aware related links, descriptive Latin slugs, and non-repeated cover images. Use when writing blog posts, converting provided article text, rewriting post content, optimizing posts for Google, or adding service-relevant internal links.
---

# Blog SEO Internal Links (DB-Clean BG)

## Source of truth

This project does **not** currently use MDX/frontmatter blog files. Blog posts are TypeScript `BlogPost` objects in:

- `app/lib/blog/posts/*.ts`
- registered in `app/lib/blog/index.ts`

Routes are generated from `slug` at `/blog/<slug>/`.

Do **not** create `.mdx` files or YAML frontmatter for this project unless the blog loader is migrated first. For DB-Clean, "publish-ready post" means a valid TypeScript `BlogPost` object matching `app/lib/blog/types.ts`.

## When to apply

Apply this skill when the user:

- asks to create a new blog post;
- provides existing post text for conversion;
- asks for SEO optimization;
- asks to add service links or improve internal linking;
- asks to rewrite or expand Bulgarian blog content.

## Required workflow

1. Read `app/lib/blog/types.ts`, `app/lib/blog/index.ts`, and recent files in `app/lib/blog/posts/`.
2. Read `app/lib/services/index.ts` and relevant service data files if service context is needed.
3. Use only valid category IDs and service slugs from the current codebase.
4. Set new post `date` to today's real date in `YYYY-MM-DD` format. If unsure, run a date command.
5. Create a new file at `app/lib/blog/posts/<slug>.ts`.
6. Export a named `BlogPost` constant and register it in `app/lib/blog/index.ts`.
7. Run typecheck/build if making code changes.

## Valid categories

Use only these category IDs:

- `suveti` — practical cleaning, clearing, yard, moving, transport, and maintenance advice.
- `rabota-s-klienti` — real client work, case studies, before/after stories, process and trust content.

Do not invent categories.

## Fixed service mapping

Use these exact service slugs and URLs when relevant:

- `Почистване на тавани и мазета` -> slug `pochistvane-tavani-mazeta-sofia-pernik` -> `/uslugi/pochistvane-tavani-mazeta-sofia-pernik/`
- `Рязане на опасни дървета` -> slug `rqzane-opasni-durveta-sofia-pernik` -> `/uslugi/rqzane-opasni-durveta-sofia-pernik/`
- `Замърсени и обрасли дворове` / `разчистване на двор` -> slug `razchistvane-dvorove-sofia-pernik` -> `/uslugi/razchistvane-dvorove-sofia-pernik/`
- `Извозване на отпадъци с голям бус` -> slug `izvozvane-otpadaci-sofia-pernik` -> `/uslugi/izvozvane-otpadaci-sofia-pernik/`
- `Превоз на мебели при местене` -> slug `prevoz-mebeli-sofia-pernik` -> `/uslugi/prevoz-mebeli-sofia-pernik/`
- `Достъп до труднодостъпни имоти` -> slug `dostup-trudnodostupni-imoti-sofia-pernik` -> `/uslugi/dostup-trudnodostupni-imoti-sofia-pernik/`
- `Косене и поддръжка на дворове` -> slug `kosene-poddrujka-dvorove-sofia-pernik` -> `/uslugi/kosene-poddrujka-dvorove-sofia-pernik/`

## Internal linking rules

The current blog renderer renders paragraph strings as plain text, so Markdown links inside `paragraphs` will not become clickable links.

For this codebase:

1. Add all relevant services to `relatedServiceSlugs`; the blog post page renders them as internal service links in the sidebar.
2. Mention relevant services naturally in the text, but do not insert Markdown link syntax into string fields expecting it to render.
3. If the user explicitly asks for inline contextual links in the body, first update the blog content model/rendering to support rich links, then add links in-context.
4. Do not invent service URLs or slugs.
5. Prefer 2-3 related services per post; include more only when clearly relevant.

## Cover image rules

Use existing images from `public/services/` or other existing public assets. Avoid repeating the same cover image across the most recent posts when a relevant alternative exists.

Known useful cover images:

- Yard clearing / overgrown yards: `/services/kosene-dvor-hero.webp` or `/services/kosene-dvor.webp`
- Tree cutting / branches: `/services/rqzane-durvo.webp` or `/services/izvozvane-kloni.webp`
- Attic/basement cleaning: `/services/pochistvane-tavan.webp` or `/services/pochistvane-maze.webp`
- Waste removal / big van: `/services/izvozvane-bus-hero.webp` or `/services/izvozvane-bus.webp`
- Furniture transport: `/services/prevoz-mebeli-hero.webp` or `/services/prevoz-mebeli.webp`
- 4x4 access: `/services/djip-4x4-hero.webp` or `/services/djip-4x4.webp`
- Yard mowing/maintenance: `/services/kosene-dvorove-hero.webp` or `/services/kosene-dvorove.webp`

## SEO rules

1. Use Bulgarian language and local SEO targeting.
2. Prefer `София` and `Перник`, not English city names.
3. Include the primary keyword in:
   - `title`;
   - `intro` first sentence or first paragraph;
   - at least one `sections[].heading`;
   - `description`.
4. Include secondary keywords naturally. Do not keyword-stuff.
5. Match search intent: useful informational content with a clear path to DB-Clean services.
6. Use clear structure: intro, useful sections, concise conclusion, CTA.
7. Keep paragraphs concise and readable.
8. Do not present comparisons or structured data as markdown tables. Rewrite table-like source material as flowing prose or bullet lists.

## Slug and filename rules

Posts are served at `/blog/<slug>/`.

1. Slug must be lowercase Latin with hyphens.
2. Transliterate Bulgarian clearly: `ч -> ch`, `ш -> sh`, `щ -> sht`, `ю -> yu`, `я -> ya`, `ж -> zh`, `ц -> ts`, `ъ -> u` or omit when clearer.
3. Preserve search intent in the slug: `kak-da`, `koga-da`, `koe-e-po-izgodno`, `sofia`, `pernik`, `dvora`, etc.
4. Keep the slug descriptive, not vague.
5. Filename must match slug exactly: `slug: "foo-bar"` -> `app/lib/blog/posts/foo-bar.ts`.
6. Export name should be camelCase and descriptive, e.g. `pochistvaneMazeSledRemont`.

## Required BlogPost fields

Every new post must provide:

```ts
import type { BlogPost } from "../types";

export const examplePostName: BlogPost = {
  slug: "detailed-latin-slug",
  title: "Bulgarian SEO title",
  description: "Concise SEO meta description.",
  date: "YYYY-MM-DD",
  coverImage: "/services/relevant-existing-image.webp",
  coverImageAlt: "Descriptive Bulgarian alt text — DB-Clean",
  category: "suveti",
  keywords: ["primary keyword", "secondary keyword"],
  author: "DB-Clean",
  excerpt: "Short listing excerpt.",
  intro: "Opening paragraph with the primary keyword.",
  sections: [
    {
      heading: "H2-style section heading with keyword where natural",
      paragraphs: ["Paragraph text."],
      listItems: ["Optional bullet item."]
    }
  ],
  conclusionTitle: "CTA-oriented conclusion heading",
  conclusionParagraphs: ["Conclusion text."],
  relatedServiceSlugs: ["valid-service-slug"]
};
```

## Registration pattern

After creating the post file:

1. Import it in `app/lib/blog/index.ts`.
2. Add it to `blogPosts`.
3. Put newest posts first only if the existing file is manually ordered that way. Do not change the `date` to manipulate sorting.

## Default execution pattern

When the user provides article text:

1. Identify topic, search intent, primary keyword, and secondary keywords.
2. Choose a valid category.
3. Choose relevant service slugs for `relatedServiceSlugs`.
4. Choose an existing cover image; avoid repeating recent covers where possible.
5. Create a descriptive Latin slug and matching filename.
6. Rewrite into a complete `BlogPost` object with strong title, description, excerpt, intro, sections, and conclusion.
7. Preserve factual claims; do not invent prices, guarantees, legal requirements, or locations not in the site.
8. Mention DB-Clean naturally and locally: София, Перник, околността, труднодостъпни имоти, голям бус, джип 4x4 where relevant.

## Final output checklist

Before finalizing:

- [ ] Post file is in `app/lib/blog/posts/<slug>.ts`
- [ ] `slug` is lowercase Latin, hyphenated, descriptive, and matches filename
- [ ] Exported constant is imported and added to `blogPosts`
- [ ] `category` is one of `suveti` or `rabota-s-klienti`
- [ ] `date` is today's real date for new posts
- [ ] `coverImage` points to an existing public image
- [ ] Recent posts do not unnecessarily repeat the same cover image
- [ ] Primary keyword appears in title, description, intro, and at least one section heading
- [ ] Secondary keywords appear naturally
- [ ] `relatedServiceSlugs` contains only valid service slugs
- [ ] No fabricated categories, service URLs, locations, prices, or guarantees
- [ ] Text reads naturally in Bulgarian and avoids keyword stuffing
- [ ] Table-like source content is converted to paragraphs or bullet lists
- [ ] TypeScript check/build passes when code is changed
