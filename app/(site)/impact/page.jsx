import Image from "next/image";
import { Container, PageIntro, SectionHeading, TextLink } from "../../../components/ui";
import { awards, interview, roles, talks, testimonials } from "../../../lib/site";
import { createMetadata } from "../../../lib/seo";

export const metadata = createMetadata({
  title: "Recognition, talks and writing | Pradeep Dahiya",
  description:
    "Awards, talks, published articles, volunteer roles and recommendations for Pradeep Dahiya, founder of ScotiTech.",
  path: "/impact"
});

const forttuna = awards.find((item) => item.id === "forttuna");

export default function RecognitionPage() {
  return (
    <>
      <PageIntro
        eyebrow="Recognition"
        title="Awards, talks and the people I've worked with."
        lead="Each item links to its source or shows the moment itself, so you can check it."
      />

      <section className="pb-20 md:pb-28">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {awards.map((item) => (
              <article key={item.title} className="flex flex-col overflow-hidden rounded-[22px] border border-line bg-surface">
                <div className="aspect-[4/3] overflow-hidden bg-sunken">
                  <Image
                    src={item.image.src}
                    width={item.image.width}
                    height={item.image.height}
                    alt={item.image.alt}
                    className="h-full w-full object-cover object-[50%_30%]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-[13px] text-muted">
                    {item.year} · {item.by}
                  </p>
                  <h2 className="mt-2 text-[20px] font-semibold leading-snug text-strong">{item.title}</h2>
                  <p className="mt-2 text-[15px] leading-6">{item.detail}</p>
                  {item.link && (
                    <div className="mt-auto pt-5">
                      <TextLink href={item.link}>{item.linkLabel}</TextLink>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 grid items-center gap-8 rounded-[22px] border border-line bg-surface p-6 md:grid-cols-[300px_1fr] md:gap-12 md:p-8">
            <div className="mx-auto w-full max-w-[300px] overflow-hidden rounded-[14px] bg-black">
              <video
                className="block h-auto w-full"
                src="/videos/forttuna-award.mp4"
                poster="/videos/preview.png"
                controls
                playsInline
                preload="none"
              />
            </div>
            <div>
              <p className="eyebrow">Forttuna Global Excellence Awards 2025</p>
              <p className="mt-3 font-display text-[26px] leading-snug text-strong">
                Accepting the Next-Gen Innovator of the Year award.
              </p>
              <div className="mt-5">
                <TextLink href={forttuna.link}>Winner profile</TextLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-surface py-20 md:py-28">
        <Container>
          <SectionHeading eyebrow="Talks and writing" title="Sharing what works in practice." />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {talks.map((item) => (
              <article key={item.title} className="flex flex-col overflow-hidden rounded-[22px] border border-line bg-canvas">
                {item.image && (
                  <div className="aspect-[16/9] overflow-hidden">
                    <Image
                      src={item.image.src}
                      width={item.image.width}
                      height={item.image.height}
                      alt={item.image.alt}
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-[13px] text-muted">
                    {item.year} · {item.kind} · {item.venue}
                  </p>
                  <h3 className="mt-2 font-display text-[23px] leading-snug text-strong">{item.title}</h3>
                  {item.link && (
                    <div className="mt-auto pt-5">
                      <TextLink href={item.link}>{item.linkLabel || "Read the article"}</TextLink>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-5 flex flex-col gap-6 rounded-[22px] border border-line bg-canvas p-6 md:flex-row md:items-center md:justify-between md:p-8">
            <div>
              <p className="text-[13px] text-muted">2026 · Interview · {interview.channel}</p>
              <h3 className="mt-2 font-display text-[23px] leading-snug text-strong">{interview.title}</h3>
              <ul className="mt-3 space-y-1 text-[15px]">
                {interview.clips.map((clip) => (
                  <li key={clip.url}>
                    <a href={clip.url} className="text-body underline-offset-4 hover:text-brand hover:underline">
                      Clip: {clip.title} ↗
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <TextLink href={interview.url}>Watch on YouTube</TextLink>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <SectionHeading eyebrow="Roles" title="Boards, advice and mentoring." />
          <ul className="divide-y divide-line border-y border-line">
            {roles.map((role) => (
              <li key={role.title} className="grid gap-2 py-6 sm:grid-cols-[72px_1fr]">
                <span className="text-[14px] text-muted">{role.year}</span>
                <div>
                  <p className="text-[18px] font-semibold text-strong">{role.title}</p>
                  <p className="mt-1 text-[16px] leading-7">{role.detail}</p>
                  {role.link && (
                    <TextLink href={role.link} className="mt-2">
                      {role.linkLabel}
                    </TextLink>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-t border-line bg-surface py-20 md:py-28">
        <Container>
          <SectionHeading eyebrow="Recommendations" title="What colleagues say." />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {testimonials.map((item) => (
              <figure key={item.author} className="flex flex-col rounded-[22px] border border-line bg-canvas p-7">
                <blockquote className="mb-6 text-[15px] leading-7 text-body">&ldquo;{item.quote}&rdquo;</blockquote>
                <figcaption className="mt-auto border-t border-line pt-5">
                  <p className="text-[15px] font-semibold text-strong">{item.author}</p>
                  <p className="mt-0.5 text-[13px] text-muted">{item.context}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
