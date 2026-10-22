import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArticleDiscussion from "../../../../components/ArticleDiscussion";
import { Container, JsonLd } from "../../../../components/ui";
import { getAllPosts, getPostBySlug, renderPostContent } from "../../../../lib/blog";
import { portraits } from "../../../../lib/site";
import { absoluteUrl, breadcrumbJsonLd, createMetadata, siteUrl } from "../../../../lib/seo";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

function formatDate(value) {
  if (!value) return "";
  return new Date(value).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
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
    image: "/og/writing.jpg",
    imageAlt: post.data.title,
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
  const isStory = post.data.type === "story";
  const more = getAllPosts()
    .filter((item) => item.slug !== post.slug && item.data.type === post.data.type)
    .slice(0, 3);
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": isStory ? "BlogPosting" : "Article",
    headline: post.data.title,
    description,
    inLanguage: "en-GB",
    image: post.data.image ? absoluteUrl(post.data.image) : absoluteUrl("/og/writing.jpg"),
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
    <>
      <JsonLd
        data={[
          articleJsonLd,
          breadcrumbJsonLd([
            { name: "Writing", path: "/blog" },
            { name: post.data.title, path: `/blog/${post.slug}` }
          ])
        ]}
      />
      <article>
        <Container width="prose" className="pb-10 pt-14 md:pt-20">
          <Link href="/blog" className="text-[14px] text-muted hover:text-strong">
            ← Writing
          </Link>
          <p className="mt-8 text-[13px] font-semibold uppercase tracking-[0.12em] text-brand">
            {isStory ? `Story · ${post.data.kicker}` : "Essay"}
          </p>
          <h1 className="mt-4 font-display text-[38px] leading-[1.1] tracking-[-0.01em] text-strong md:text-[54px]">
            {post.data.title}
          </h1>
          {description && <p className="mt-5 text-[19px] leading-8 text-body md:text-[21px]">{description}</p>}
          <div className="mt-8 flex items-center gap-3 border-y border-line py-4">
            <Image
              src={portraits.headshot.src}
              width={44}
              height={60}
              alt=""
              className="h-11 w-11 rounded-full object-cover object-[50%_25%]"
            />
            <div className="text-[14px] leading-5">
              <p className="font-semibold text-strong">Pradeep Dahiya</p>
              <p className="text-muted">
                {formatDate(post.data.date)} · {post.data.readingTime} min read
              </p>
            </div>
          </div>
        </Container>

        {post.data.image && (
          <Container width="mid" className="pb-4">
            <div className="overflow-hidden rounded-[18px] border border-line bg-surface shadow-soft">
              <Image src={post.data.image} width={1600} height={900} alt={post.data.imageAlt || ""} priority className="h-auto w-full" />
            </div>
          </Container>
        )}

        <Container width="prose" className="pb-16 pt-8">
          <div className="blog-content" dangerouslySetInnerHTML={{ __html: content }} />
          <ArticleDiscussion title={post.data.title} />
        </Container>
      </article>

      {more.length > 0 && (
        <section className="border-t border-line bg-surface py-16 md:py-20">
          <Container>
            <p className="eyebrow">{isStory ? "More stories" : "More essays"}</p>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {more.map((item) => (
                <Link
                  key={item.slug}
                  href={`/blog/${item.slug}`}
                  className="group flex flex-col rounded-[22px] border border-line bg-canvas p-6 transition hover:shadow-soft"
                >
                  <h2 className="font-display text-[22px] leading-snug text-strong group-hover:text-brand-strong">
                    {item.data.title}
                  </h2>
                  <p className="mt-2 text-[15px] leading-6">{item.data.description || item.data.excerpt}</p>
                  <span className="mt-auto pt-5 text-[14px] font-medium text-brand">Read →</span>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
