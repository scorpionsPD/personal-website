import { notFound } from "next/navigation";
import ArticleDiscussion from "../../../../components/ArticleDiscussion";
import { getAllPosts, getPostBySlug, renderPostContent } from "../../../../lib/blog";
import { absoluteUrl, createMetadata, siteUrl } from "../../../../lib/seo";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slugValue = Array.isArray(resolvedParams?.slug) ? resolvedParams.slug[0] : resolvedParams?.slug;
  if (!slugValue) {
    return {
      title: "Post not found"
    };
  }

  const post = getPostBySlug(slugValue);
  if (!post || post.data.published === false) {
    return {
      title: "Post not found"
    };
  }

  const description = post.data.description || post.data.excerpt || "";

  return createMetadata({
    title: `${post.data.title} | Pradeep Dahiya`,
    description,
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.data.date || undefined
  });
}

export default async function BlogPostPage({ params }) {
  const resolvedParams = await params;
  const slugValue = Array.isArray(resolvedParams?.slug) ? resolvedParams.slug[0] : resolvedParams?.slug;
  if (!slugValue) {
    notFound();
  }

  const post = getPostBySlug(slugValue);
  if (!post || post.data.published === false) {
    notFound();
  }

  const content = renderPostContent(post.content);
  const description = post.data.description || post.data.excerpt || "";
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.data.title,
    description,
    datePublished: post.data.date || undefined,
    dateModified: post.data.date || undefined,
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
    author: {
      "@id": `${siteUrl}/#person`
    },
    publisher: {
      "@id": `${siteUrl}/#person`
    }
  };

  return (
    <article className="mx-auto flex w-full max-w-3xl flex-col gap-6 pb-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <header className="flex flex-col gap-4">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
          {post.data.date || "Draft"}
        </p>
        <h1 className="font-display text-4xl text-neutral-950 md:text-5xl">
          {post.data.title}
        </h1>
        {post.data.description || post.data.excerpt ? (
          <p className="text-base leading-7 text-neutral-600 md:text-lg">
            {post.data.description || post.data.excerpt}
          </p>
        ) : null}
      </header>
      <ArticleDiscussion
        title={post.data.title}
      />
      <section className="blog-content" dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  );
}
