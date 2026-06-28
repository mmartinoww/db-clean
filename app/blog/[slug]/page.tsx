import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogCard } from "../../components/blog-card";
import { JsonLdScripts } from "../../components/json-ld-scripts";
import { IconArrow, IconPhone } from "../../icons";
import {
  blogCategories,
  blogPosts,
  formatBlogDate,
  getBlogCategoryPath,
  getBlogPath,
  getBlogPostBySlug
} from "../../lib/blog";
import { buildBlogPostSchemas } from "../../lib/json-ld";
import { getRelatedServices, getServicePath } from "../../lib/services";
import { business, mapEmbedSrc, SITE_URL, withTrailingSlash } from "../../lib/site";
import { RevealOnScroll } from "../../reveal-on-scroll";
import { SiteFooter } from "../../site-footer";
import { SiteHeader } from "../../site-header";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  const pageUrl = `${SITE_URL}${getBlogPath(post.slug)}`;

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: pageUrl,
      languages: { "bg-BG": pageUrl }
    },
    openGraph: {
      type: "article",
      locale: "bg_BG",
      url: pageUrl,
      siteName: "DB-Clean",
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      modifiedTime: post.dateModified ?? post.date,
      authors: [business.name],
      images: [
        {
          url: `${SITE_URL}${post.coverImage}`,
          width: 1200,
          height: 630,
          alt: post.coverImageAlt
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [`${SITE_URL}${post.coverImage}`]
    },
    robots: { index: true, follow: true }
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const category = blogCategories.find((c) => c.slug === post.category);
  const relatedServices = getRelatedServices(post.relatedServiceSlugs);
  const schemas = buildBlogPostSchemas(post);

  return (
    <>
      <div className="service-intro">
        <SiteHeader
          brandName={business.name}
          phoneHref={business.phoneHref}
          phoneLabel={business.phone}
        />

        <section className="service-hero service-hero--compact" aria-labelledby="blog-post-heading">
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
                  {category && (
                    <li>
                      <Link href={getBlogCategoryPath(category.slug)}>{category.title}</Link>
                    </li>
                  )}
                  <li aria-current="page">{post.title}</li>
                </ol>
              </nav>

              {category && (
                <Link href={getBlogCategoryPath(category.slug)} className="blog-card__category">
                  {category.title}
                </Link>
              )}

              <h1 id="blog-post-heading">{post.title}</h1>

              <p className="service-hero__lead blog-post__byline">
                <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
                {" · "}
                {post.author}
              </p>
            </div>
          </div>
        </section>
      </div>

      <main id="main-content">
        <section className="band band--light band--after-hero" aria-label={post.title}>
          <div className="band__inner">
            <div className="blog-post-layout">
              <article className="blog-post" itemScope itemType="https://schema.org/BlogPosting">
                <meta itemProp="headline" content={post.title} />
                <meta itemProp="datePublished" content={post.date} />
                <meta itemProp="author" content={post.author} />

                {post.coverImage && (
                  <div className="blog-post__cover">
                    <img
                      src={post.coverImage}
                      alt={post.coverImageAlt}
                      loading="eager"
                      itemProp="image"
                    />
                  </div>
                )}

                <div className="blog-post__content">
                  <p className="blog-post__intro">{post.intro}</p>

                  {post.sections.map((section, i) => (
                    <section key={i} className="blog-post__section">
                      {section.heading && <h2>{section.heading}</h2>}
                      {section.paragraphs?.map((p, pi) => (
                        <p key={pi}>{p}</p>
                      ))}
                      {section.listItems && section.listItems.length > 0 && (
                        <ul>
                          {section.listItems.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </section>
                  ))}

                  {post.conclusionTitle && post.conclusionParagraphs && (
                    <section className="blog-post__conclusion">
                      <h2>{post.conclusionTitle}</h2>
                      {post.conclusionParagraphs.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                      <div className="cta-row blog-post__cta">
                        <a className="button button--primary" href={business.phoneHref}>
                          <IconPhone />
                          Обадете се
                        </a>
                      </div>
                    </section>
                  )}
                </div>
              </article>

              {relatedServices.length > 0 && (
                <aside className="blog-post__sidebar" aria-label="Свързани услуги">
                  <div className="blog-sidebar-card">
                    <p className="eyebrow">Свързани услуги</p>
                    <ul className="blog-sidebar-links">
                      {relatedServices.map((service) => (
                        <li key={service.slug}>
                          <Link href={getServicePath(service.slug)} className="blog-sidebar-link">
                            {service.title}
                            <IconArrow size={14} />
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <a className="button button--primary blog-sidebar-cta" href={business.phoneHref}>
                      <IconPhone />
                      Обадете се сега
                    </a>
                  </div>
                </aside>
              )}
            </div>
          </div>
        </section>

        <section className="band band--light-alt" aria-labelledby="more-posts-heading">
          <div className="band__inner">
            <div className="section-heading service-related__heading">
              <h2 id="more-posts-heading" className="eyebrow">
                Още статии
              </h2>
              <p className="section-title">Полезна информация от DB-Clean</p>
            </div>
            <div className="blog-grid blog-grid--compact">
              {blogPosts
                .filter((p) => p.slug !== post.slug)
                .slice(0, 3)
                .map((relPost) => (
                  <BlogCard
                    key={relPost.slug}
                    slug={relPost.slug}
                    title={relPost.title}
                    excerpt={relPost.excerpt}
                    date={relPost.date}
                    author={relPost.author}
                    coverImage={relPost.coverImage}
                    coverImageAlt={relPost.coverImageAlt}
                    category={blogCategories.find((c) => c.slug === relPost.category)}
                  />
                ))}
            </div>
            <div className="blog-more-link">
              <Link className="button button--ghost" href={withTrailingSlash("/blog")}>
                Всички статии
                <IconArrow size={16} />
              </Link>
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
