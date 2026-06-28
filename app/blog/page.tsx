import type { Metadata } from "next";
import Link from "next/link";
import { BlogListing } from "../components/blog-listing";
import { JsonLdScripts } from "../components/json-ld-scripts";
import { IconArrow } from "../icons";
import { blogCategories, blogPosts } from "../lib/blog";
import { buildBlogIndexSchemas } from "../lib/json-ld";
import { business, mapEmbedSrc, SITE_URL, withTrailingSlash } from "../lib/site";
import { RevealOnScroll } from "../reveal-on-scroll";
import { SiteFooter } from "../site-footer";
import { SiteHeader } from "../site-header";

const pageUrl = `${SITE_URL}${withTrailingSlash("/blog")}`;

export const metadata: Metadata = {
  title: "Блог — Съвети за почистване и разчистване на имоти",
  description:
    "Практически съвети за разчистване на дворове, почистване на тавани и мазета, рязане на опасни дървета и извозване на отпадъци в Sofia и Перник — от екипа на DB-Clean.",
  alternates: {
    canonical: pageUrl,
    languages: { "bg-BG": pageUrl }
  },
  openGraph: {
    type: "website",
    locale: "bg_BG",
    url: pageUrl,
    siteName: "DB-Clean",
    title: "Блог | DB-Clean — Съвети за почистване и разчистване",
    description:
      "Практически съвети за почистване на имоти, разчистване на дворове, рязане на дървета и извозване на отпадъци в Sofia и Перnik."
  },
  robots: { index: true, follow: true }
};

export default function BlogIndexPage() {
  const schemas = buildBlogIndexSchemas();
  return (
    <>
      <div className="service-intro">
        <SiteHeader
          brandName={business.name}
          phoneHref={business.phoneHref}
          phoneLabel={business.phone}
        />

        <section className="service-hero service-hero--compact" aria-labelledby="blog-index-heading">
          <div className="service-hero__glow" aria-hidden="true" />
          <div className="band__inner service-hero__inner service-hero__inner--blog">
            <div className="service-hero__content">
              <nav className="service-breadcrumb" aria-label="Навигационна пътека">
                <ol>
                  <li>
                    <Link href={withTrailingSlash("/")}>Начало</Link>
                  </li>
                  <li aria-current="page">Блог</li>
                </ol>
              </nav>
              <p className="eyebrow service-hero__eyebrow">Полезна информация</p>
              <h1 id="blog-index-heading">Съвети за почистване и разчистване</h1>
              <p className="service-hero__lead">
                Практически статии от екипа на DB-Clean за Sofia, Перnik и околността — дворове,
                тавани, мазета, дървета и извозване.
              </p>
            </div>
          </div>
        </section>
      </div>

      <main id="main-content">
        <section className="band band--light band--after-hero" aria-labelledby="blog-posts-heading">
          <div className="band__inner">
            <div className="section-heading">
              <h2 id="blog-posts-heading" className="eyebrow">
                Статии
              </h2>
              <p className="section-title">Практични съвети от DB-Clean</p>
              <p>
                Разчистване на дворове, почистване на тавани и мазета, рязане на опасни дървета и
                извозване на отпадъци — съвети за Sofia и Перnik.
              </p>
            </div>

            <BlogListing posts={blogPosts} categories={blogCategories} showFeatured />
          </div>
        </section>

        <section className="band band--light-alt" aria-labelledby="blog-cta-heading">
          <div className="band__inner">
            <div className="cta-panel">
              <h2 id="blog-cta-heading" className="eyebrow">
                Нужна ви е помощ?
              </h2>
              <p className="section-title">Свържете се с DB-Clean</p>
              <p>
                Описвате имота, задачата и достъпа — получавате оглед и ясна цена за почистване,
                разчистване или извозване в Sofia и Перnik.
              </p>
              <div className="cta-row">
                <a className="button button--primary" href={business.phoneHref}>
                  Обадете се
                </a>
                <Link className="button button--ghost" href={withTrailingSlash("/#services")}>
                  Вижте услугите
                  <IconArrow size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter business={business} mapEmbedSrc={mapEmbedSrc} />
      <JsonLdScripts schemas={schemas} />
      <RevealOnScroll />
    </>
  );
}
