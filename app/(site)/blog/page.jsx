import Link from "next/link";
import { getAllPosts } from "../../../lib/blog";
import { createMetadata } from "../../../lib/seo";

export const metadata = createMetadata({
  title: "Blog | Pradeep Dahiya",
  description:
    "Technical essays on platform architecture, operational software, and privacy-first systems.",
  path: "/blog"
});

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="flex flex-col gap-16">
      <section className="flex flex-col gap-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
          Blog
        </p>
        <h1 className="font-display text-4xl text-neutral-950 md:text-5xl">
          Technical notes on building dependable platforms.
        </h1>
        <p className="text-base leading-7 text-neutral-600 md:text-lg">
          Long-form writing on architecture, operational constraints, and systems that
          hold up in production.
        </p>
      </section>

      <section className="flex flex-col gap-10">
        {posts.length === 0 ? (
          <p className="text-sm text-neutral-500">
            No posts yet. Add markdown files in `content/blog`.
          </p>
        ) : (
          posts.map((post) => (
            <article key={post.slug} className="border-b border-neutral-200 pb-8">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
                {post.data.date || "Draft"}
              </p>
              <h2 className="mt-3 font-display text-2xl text-neutral-950">
                <Link href={`/blog/${post.slug}`} className="hover:text-neutral-700">
                  {post.data.title}
                </Link>
              </h2>
              {post.data.description || post.data.excerpt ? (
                <p className="mt-3 text-sm leading-7 text-neutral-600">
                  {post.data.description || post.data.excerpt}
                </p>
              ) : null}
              <Link
                href={`/blog/${post.slug}`}
                className="mt-4 inline-flex text-sm font-semibold text-accent"
              >
                Read article →
              </Link>
            </article>
          ))
        )}
      </section>
    </div>
  );
}
