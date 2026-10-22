import Image from "next/image";
import Link from "next/link";
import { Container, PageIntro, SectionHeading } from "../../../components/ui";
import { getAllPosts } from "../../../lib/blog";
import { createMetadata } from "../../../lib/seo";

export const metadata = createMetadata({
  title: "Writing | Pradeep Dahiya",
  description:
    "Stories from building Vamiq, OnQ and AXOS, and essays on private AI, app distribution and software that organisations can control.",
  path: "/blog",
  image: "/og/writing.jpg",
  imageAlt: "Writing by Pradeep Dahiya"
});

function formatDate(value) {
  if (!value) return "";
  return new Date(value).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export default function BlogPage() {
  const posts = getAllPosts();
  const stories = posts.filter((post) => post.data.type === "story");
  const essays = posts.filter((post) => post.data.type !== "story");
  const [lead, ...rest] = stories;

  return (
    <>
      <PageIntro
        eyebrow="Writing"
        title="Stories from the build, and essays on control."
        lead="Short, true stories from shipping ScotiTech's products, and longer pieces on private AI, app distribution and software organisations can own."
      />

      {lead && (
        <section className="pb-20 md:pb-28">
          <Container>
            <Link
              href={`/blog/${lead.slug}`}
              className="group grid overflow-hidden rounded-[26px] border border-line bg-surface transition hover:shadow-card md:grid-cols-[1.15fr_0.85fr]"
            >
              {lead.data.image && (
                <div className="border-b border-line bg-canvas md:border-b-0 md:border-r">
                  <Image
                    src={lead.data.image}
                    width={1600}
                    height={900}
                    alt={lead.data.imageAlt || ""}
                    priority
                    className="h-full w-full object-cover"
                  />
                </div>
              )}
              <div className="flex flex-col p-8 md:p-10">
                <p className="text-[13px] text-muted">
                  Story · {lead.data.kicker} · {lead.data.readingTime} min read
                </p>
                <h2 className="mt-3 font-display text-[30px] leading-[1.15] text-strong group-hover:text-brand-strong md:text-[36px]">
                  {lead.data.title}
                </h2>
                <p className="mt-4 text-[17px] leading-7">{lead.data.description}</p>
                <span className="mt-auto pt-8 text-[15px] font-medium text-brand">Read the story →</span>
              </div>
            </Link>

            <div className="mt-5 grid gap-5 md:grid-cols-3">
              {rest.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col rounded-[22px] border border-line bg-surface p-7 transition hover:-translate-y-0.5 hover:shadow-card"
                >
                  <p className="text-[13px] text-muted">
                    Story · {post.data.kicker} · {post.data.readingTime} min read
                  </p>
                  <h2 className="mt-3 font-display text-[24px] leading-[1.2] text-strong group-hover:text-brand-strong">
                    {post.data.title}
                  </h2>
                  <p className="mt-3 text-[15px] leading-7">{post.data.description}</p>
                  <span className="mt-auto pt-6 text-[15px] font-medium text-brand">Read →</span>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      {essays.length > 0 && (
        <section className="border-t border-line bg-surface py-20 md:py-28">
          <Container>
            <SectionHeading eyebrow="Essays" title="On private AI, distribution and systems." />
            <ul className="mt-10 divide-y divide-line border-y border-line">
              {essays.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group grid gap-2 py-7 md:grid-cols-[180px_1fr_auto] md:items-baseline md:gap-8"
                  >
                    <span className="text-[14px] text-muted">{formatDate(post.data.date)}</span>
                    <span>
                      <span className="block font-display text-[23px] leading-snug text-strong group-hover:text-brand-strong">
                        {post.data.title}
                      </span>
                      <span className="mt-2 block max-w-3xl text-[15px] leading-7">
                        {post.data.description || post.data.excerpt}
                      </span>
                    </span>
                    <span aria-hidden="true" className="hidden text-brand md:block">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}
    </>
  );
}
