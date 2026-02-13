import { notFound } from "next/navigation";
import { marked } from "marked";
import { getPostBySlug, getPostSlugs } from "../../../../lib/blog";

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
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
  if (!post) {
    return {
      title: "Post not found"
    };
  }

  const description = post.data.description || post.data.excerpt || "";

  return {
    title: `${post.data.title} | Pradeep Dahiya`,
    description,
    openGraph: {
      title: post.data.title,
      description,
      type: "article",
      publishedTime: post.data.date || undefined
    },
    twitter: {
      card: "summary_large_image",
      title: post.data.title,
      description
    }
  };
}

export default async function BlogPostPage({ params }) {
  const resolvedParams = await params;
  const slugValue = Array.isArray(resolvedParams?.slug) ? resolvedParams.slug[0] : resolvedParams?.slug;
  if (!slugValue) {
    notFound();
  }

  const post = getPostBySlug(slugValue);
  if (!post) {
    notFound();
  }

  const content = marked.parse(post.content);

  return (
    <article className="mx-auto flex w-full max-w-3xl flex-col gap-6 pb-10">
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
      <section className="blog-content" dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  );
}
