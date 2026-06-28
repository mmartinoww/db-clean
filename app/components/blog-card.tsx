import Link from "next/link";
import { IconArrow } from "../icons";
import { formatBlogDate, getBlogCategoryPath, getBlogPath } from "../lib/blog";

type BlogCardProps = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  coverImage: string;
  coverImageAlt: string;
  category?: { slug: string; title: string };
  featured?: boolean;
};

export function BlogCard({
  slug,
  title,
  excerpt,
  date,
  author,
  coverImage,
  coverImageAlt,
  category,
  featured = false
}: BlogCardProps) {
  return (
    <article className={`blog-card${featured ? " blog-card--featured" : ""}`}>
      <Link href={getBlogPath(slug)} className="blog-card__image-link" tabIndex={-1} aria-hidden="true">
        <div className="blog-card__image">
          <img src={coverImage} alt={coverImageAlt} loading={featured ? "eager" : "lazy"} />
        </div>
      </Link>
      <div className="blog-card__body">
        {category && (
          <Link href={getBlogCategoryPath(category.slug)} className="blog-card__category">
            {category.title}
          </Link>
        )}
        <h3 className="blog-card__title">
          <Link href={getBlogPath(slug)}>{title}</Link>
        </h3>
        <p className="blog-card__excerpt">{excerpt}</p>
        <p className="blog-card__meta">
          <time dateTime={date}>{formatBlogDate(date)}</time>
          {" · "}
          {author}
        </p>
        <Link href={getBlogPath(slug)} className="blog-card__link">
          Прочетете статията
          <IconArrow size={15} />
        </Link>
      </div>
    </article>
  );
}
