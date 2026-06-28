import Link from "next/link";
import type { BlogCategory, BlogPost } from "../lib/blog";
import { getBlogCategoryPath } from "../lib/blog";
import { withTrailingSlash } from "../lib/site";
import { BlogCard } from "./blog-card";

type BlogListingProps = {
  posts: BlogPost[];
  categories: BlogCategory[];
  activeCategory?: string;
  showFeatured?: boolean;
  emptyMessage?: string;
};

export function BlogListing({
  posts,
  categories,
  activeCategory,
  showFeatured = false,
  emptyMessage = "Все още няма публикувани статии."
}: BlogListingProps) {
  const featuredPost = showFeatured && !activeCategory ? posts[0] : undefined;
  const gridPosts = featuredPost ? posts.slice(1) : posts;

  return (
    <>
      <div className="blog-toolbar">
        <div className="blog-categories" aria-label="Категории">
          <Link
            href={withTrailingSlash("/blog")}
            className={`keyword-pill keyword-pill--link${!activeCategory ? " keyword-pill--active" : ""}`}
          >
            Всички
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={getBlogCategoryPath(cat.slug)}
              className={`keyword-pill keyword-pill--link${activeCategory === cat.slug ? " keyword-pill--active" : ""}`}
            >
              {cat.title}
            </Link>
          ))}
        </div>
      </div>

      {posts.length === 0 ? (
        <p className="blog-empty">{emptyMessage}</p>
      ) : (
        <>
          {featuredPost && (
            <div className="blog-featured">
              <BlogCard
                slug={featuredPost.slug}
                title={featuredPost.title}
                excerpt={featuredPost.excerpt}
                date={featuredPost.date}
                author={featuredPost.author}
                coverImage={featuredPost.coverImage}
                coverImageAlt={featuredPost.coverImageAlt}
                category={categories.find((c) => c.slug === featuredPost.category)}
                featured
              />
            </div>
          )}

          {gridPosts.length > 0 && (
            <div className="blog-grid">
              {gridPosts.map((post) => (
                <BlogCard
                  key={post.slug}
                  slug={post.slug}
                  title={post.title}
                  excerpt={post.excerpt}
                  date={post.date}
                  author={post.author}
                  coverImage={post.coverImage}
                  coverImageAlt={post.coverImageAlt}
                  category={categories.find((c) => c.slug === post.category)}
                />
              ))}
            </div>
          )}
        </>
      )}
    </>
  );
}
