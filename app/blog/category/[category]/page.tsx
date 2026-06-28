import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogListing } from "../../../components/blog-listing";
import { JsonLdScripts } from "../../../components/json-ld-scripts";
import {
  blogCategories,
  getBlogCategoryPath,
  getBlogPostsByCategory,
  getCategoryBySlug
} from "../../../lib/blog";
import { buildBlogCategorySchemas } from "../../../lib/json-ld";
import { business, mapEmbedSrc, SITE_URL, withTrailingSlash } from "../../../lib/site";
import { RevealOnScroll } from "../../../reveal-on-scroll";
import { SiteFooter } from "../../../site-footer";
import { SiteHeader } from "../../../site-header";

type PageProps = { params: Promise<{ category: string }> };

export async function generateStaticParams() {
  return blogCategories.map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  if (!category) return {};

  const pageUrl = `${SITE_URL}${getBlogCategoryPath(category.slug)}`;

  return {
    title: `${category.title} — Блог DB-Clean`,
    description: category.metaDescription,
    alternates: {
      canonical: pageUrl,
      languages: { "bg-BG": pageUrl }
    },
    openGraph: {
      type: "website",
      locale: "bg_BG",
      url: pageUrl,
      siteName: "DB-Clean",
      title: `${category.title} | Блог DB-Clean`,
      description: category.metaDescription
    },
    robots: { index: true, follow: true }
  };
}

export default async function BlogCategoryPage({ params }: PageProps) {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  if (!category) notFound();

  const posts = getBlogPostsByCategory(categorySlug);
  const schemas = buildBlogCategorySchemas(category);

  return (
    <>
      <div className="service-intro">
        <SiteHeader
          brandName={business.name}
          phoneHref={business.phoneHref}
          phoneLabel={business.phone}
        />

        <section className="service-hero service-hero--compact" aria-labelledby="blog-cat-heading">
          <div className="service-hero__glow" aria-hidden="true" />
          <div className="band__inner service-hero__inner service-hero__inner--blog">
            <div className="service-hero__content">
              <nav className="service-breadcrumb" aria-label="Навигационна пътека">
                <ol>
                  <li>
                    <Link href={withTrailingSlash("/")}>Начало</Link>
                  </li>
                  <li>
                    <Link href={withTrailingSlash("/blog")}>Блог</Link>
                  </li>
                  <li aria-current="page">{category.title}</li>
                </ol>
              </nav>
              <p className="eyebrow service-hero__eyebrow">{category.title}</p>
              <h1 id="blog-cat-heading">{category.title}</h1>
              <p className="service-hero__lead">{category.description}</p>
            </div>
          </div>
        </section>
      </div>

      <main id="main-content">
        <section className="band band--light band--after-hero" aria-labelledby="cat-posts-heading">
          <div className="band__inner">
            <div className="section-heading">
              <h2 id="cat-posts-heading" className="eyebrow">
                {category.title}
              </h2>
              <p className="section-title">Статии в тази категория</p>
            </div>

            <BlogListing
              posts={posts}
              categories={blogCategories}
              activeCategory={categorySlug}
              emptyMessage="В тази категория все още няма публикувани статии."
            />
          </div>
        </section>
      </main>

      <SiteFooter business={business} mapEmbedSrc={mapEmbedSrc} />
      <JsonLdScripts schemas={schemas} />
      <RevealOnScroll />
    </>
  );
}
