import Image from "next/image";
import Link from "next/link";
import VamiqShowcase from "../../components/VamiqShowcase";
import { ButtonLink, Container, JsonLd, ProductFrame, SectionHeading, StoreButtons, TextLink } from "../../components/ui";
import { getAllPosts } from "../../lib/blog";
import { awards, person, portraits, products, talks, vamiqMedia } from "../../lib/site";
import { createMetadata, siteUrl } from "../../lib/seo";

export const metadata = createMetadata({
  title: "Pradeep Dahiya | Founder of ScotiTech, building Vamiq, OnQ and AXOS",
  description:
    "Pradeep Dahiya is the founder of ScotiTech. He builds Vamiq for Apple device management and private apps, OnQ for live queues, and AXOS, a private AI workspace."
});

const [vamiq, onq, axos] = products;
const forttuna = awards.find((item) => item.id === "forttuna");

const vamiqParts = [
  { title: "Private app distribution", body: "A branded app store for a company's own private and internal apps." },
  { title: "Device management", body: "Enrol iPhones, iPads and Macs, install their apps and manage their security." },
  { title: "Release controls", body: "Check each new build before it reaches a device, and keep a record of what shipped." }
];

const onqSteps = ["Download OnQ", "Find the shop", "Join with name and phone"];

const filmJsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: vamiqMedia.film.title,
  description: vamiqMedia.film.description,
  thumbnailUrl: `${siteUrl}${vamiqMedia.film.poster}`,
  contentUrl: vamiqMedia.film.src,
  uploadDate: vamiqMedia.film.uploadDate,
  duration: vamiqMedia.film.duration
};

export default function HomePage() {
  const posts = getAllPosts();
  const stories = posts.filter((post) => post.data.type === "story").slice(0, 4);

  return (
    <>
      <JsonLd data={filmJsonLd} />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-40 h-[620px] w-[620px] rounded-full bg-[radial-gradient(closest-side,rgba(45,180,165,0.16),rgba(45,180,165,0))]"
        />
        <Container className="relative grid items-center gap-12 pb-20 pt-14 md:grid-cols-[1.25fr_0.75fr] md:gap-16 md:pb-28 md:pt-24">
          <div>
            <p className="eyebrow">{person.role}</p>
            <h1 className="mt-5 font-display text-[56px] leading-[0.98] tracking-[-0.02em] text-strong md:text-[96px]">
              Pradeep Dahiya
            </h1>
            <p className="mt-7 max-w-[34ch] text-[21px] leading-[1.45] text-body md:text-[26px]">
              {person.positioning}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="#work">See what I build</ButtonLink>
              <ButtonLink href="/blog" variant="secondary">
                Read the stories
              </ButtonLink>
            </div>
            <ul className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-[14px] text-muted" aria-label="Products">
              {products.map((product) => (
                <li key={product.id}>
                  <a href={`#${product.id}`} className="inline-flex items-center gap-2 transition hover:text-strong">
                    <Image src={product.logo} alt="" width={22} height={22} className="h-[22px] w-[22px] rounded-[6px]" />
                    <span className="font-medium text-strong">{product.name}</span>
                    <span className="hidden lg:inline">· {product.kind}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <figure className="mx-auto w-full max-w-[380px] md:max-w-none">
            <div className="overflow-hidden rounded-[22px] border border-line bg-sunken shadow-card">
              <Image
                src={portraits.headshot.src}
                width={portraits.headshot.width}
                height={portraits.headshot.height}
                alt={portraits.headshot.alt}
                priority
                className="h-auto w-full"
              />
            </div>
            <figcaption className="mt-4 flex items-center justify-between text-[13px] text-muted">
              <span>Founder, ScotiTech Solutions</span>
              <a href={person.linkedin} className="font-medium text-brand hover:text-brand-strong">
                LinkedIn ↗
              </a>
            </figcaption>
          </figure>
        </Container>
      </section>

      {/* What I build */}
      <section id="work" className="scroll-mt-20 border-t border-line bg-surface py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="What I build"
            title="Three products, one idea."
            lead="People should control the systems they depend on. Each of these is a ScotiTech product, built to hand that control back."
          />

          {/* Vamiq */}
          <article id="vamiq" className="mt-14 grid scroll-mt-24 items-center gap-10 md:mt-20 md:grid-cols-[0.85fr_1.15fr] md:gap-14">
            <div>
              <div className="flex items-center gap-3">
                <Image src={vamiq.logo} alt="" width={40} height={40} className="h-10 w-10 rounded-[10px]" />
                <div>
                  <h3 className="text-[20px] font-semibold text-strong">{vamiq.name}</h3>
                  <p className="text-[14px] text-muted">{vamiq.kind}</p>
                </div>
              </div>
              <p className="mt-7 font-display text-[30px] leading-[1.15] text-strong md:text-[38px]">{vamiq.line}</p>
              <p className="mt-5 text-[17px] leading-7">{vamiq.summary}</p>
              <ul className="mt-7 divide-y divide-line border-y border-line">
                {vamiqParts.map((part) => (
                  <li key={part.title} className="py-3.5">
                    <p className="text-[15px] font-semibold text-strong">{part.title}</p>
                    <p className="mt-0.5 text-[15px] leading-6 text-muted">{part.body}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                <ButtonLink href={vamiq.href} variant="ink">
                  About Vamiq
                </ButtonLink>
                <TextLink href={vamiqMedia.film.page}>Watch the film (75 s)</TextLink>
                <TextLink href={vamiq.url}>vamiq.app</TextLink>
              </div>
            </div>
            <VamiqShowcase />
          </article>

          <div className="mt-20 grid gap-6 md:mt-28 md:grid-cols-2">
            {/* OnQ */}
            <article id="onq" className="flex scroll-mt-24 flex-col rounded-[22px] border border-line bg-canvas p-7 md:p-9">
              <div className="flex items-center gap-3">
                <Image src={onq.logo} alt="OnQ app icon" width={48} height={48} className="h-12 w-12 rounded-[12px]" />
                <div>
                  <h3 className="text-[20px] font-semibold text-strong">{onq.name}</h3>
                  <p className="text-[14px] text-muted">{onq.kind}</p>
                </div>
              </div>
              <p className="mt-7 font-display text-[30px] leading-[1.15] text-strong md:text-[34px]">{onq.line}</p>
              <p className="mt-4 text-[17px] leading-7">{onq.summary}</p>
              <ol className="mt-7 grid gap-3 sm:grid-cols-3">
                {onqSteps.map((step, index) => (
                  <li key={step} className="rounded-2xl border border-line bg-surface px-4 py-3.5">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-onq text-[12px] font-semibold text-ink">
                      {index + 1}
                    </span>
                    <span className="mt-2 block text-[14px] font-medium leading-5 text-strong">{step}</span>
                  </li>
                ))}
              </ol>
              <div className="mt-8 hidden items-center gap-5 rounded-2xl border border-line bg-surface p-4 md:flex">
                <Image src="/images/onq/onq-qr-app-store.png" width={92} height={92} alt="QR code: download OnQ on the App Store" className="rounded-lg bg-white" />
                <Image src="/images/onq/onq-qr-google-play.png" width={92} height={92} alt="QR code: get OnQ on Google Play" className="rounded-lg bg-white" />
                <p className="text-[14px] leading-6 text-muted">
                  Scan with your phone: <span className="text-strong">iPhone</span> on the left,{" "}
                  <span className="text-strong">Android</span> on the right.
                </p>
              </div>
              <div className="mt-auto pt-8">
                <StoreButtons />
                <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2">
                  <TextLink href={onq.href}>About OnQ</TextLink>
                  <span className="text-[13px] text-muted">No account needed to join a queue.</span>
                </div>
              </div>
            </article>

            {/* AXOS */}
            <article id="axos" className="flex scroll-mt-24 flex-col overflow-hidden rounded-[22px] border border-line bg-canvas">
              <div className="p-7 pb-0 md:p-9 md:pb-0">
                <div className="flex items-center gap-3">
                  <Image src={axos.logo} alt="" width={48} height={48} className="h-12 w-12 rounded-[12px] bg-surface p-1.5" />
                  <div>
                    <h3 className="text-[20px] font-semibold text-strong">{axos.name}</h3>
                    <p className="text-[14px] text-muted">{axos.kind}</p>
                  </div>
                </div>
                <p className="mt-7 font-display text-[30px] leading-[1.15] text-strong md:text-[34px]">{axos.line}</p>
                <p className="mt-4 text-[17px] leading-7">{axos.summary}</p>
                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                  <TextLink href={axos.href}>About AXOS</TextLink>
                  <TextLink href={axos.url}>{axos.urlLabel}</TextLink>
                </div>
              </div>
              <div className="mt-auto pl-7 pt-10 md:pl-9">
                <ProductFrame label="AXOS Command Centre" className="rounded-b-none rounded-r-none border-b-0 border-r-0">
                  <Image
                    src="/images/axos/axos-command-centre-1200.webp"
                    width={1200}
                    height={637}
                    alt="The AXOS Command Centre: priority mail, meetings, work items and a morning brief"
                    className="h-auto w-full"
                  />
                </ProductFrame>
              </div>
            </article>
          </div>
        </Container>
      </section>

      {/* Stories */}
      {stories.length > 0 && (
        <section className="py-20 md:py-28">
          <Container>
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <SectionHeading
                eyebrow="Stories"
                title="Notes from the build."
                lead="Short, true stories from shipping ScotiTech's products: the decisions, the tools and what I learned."
              />
              <TextLink href="/blog">All writing</TextLink>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {stories.map((post, index) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className={`group flex flex-col overflow-hidden rounded-[22px] border border-line bg-surface transition hover:-translate-y-0.5 hover:shadow-card ${
                    index === 0 ? "md:col-span-3 md:grid md:grid-cols-[1.15fr_0.85fr]" : ""
                  }`}
                >
                  {post.data.image && index === 0 && (
                    <div className="border-b border-line bg-canvas md:border-b-0 md:border-r">
                      <Image
                        src={post.data.image}
                        width={1600}
                        height={900}
                        alt={post.data.imageAlt || ""}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  )}
                  <div className={`flex flex-1 flex-col ${index === 0 ? "p-8 md:p-10" : "p-7"}`}>
                    <p className="text-[13px] text-muted">
                      {post.data.kicker || "Story"} · {post.data.readingTime} min read
                    </p>
                    <h3 className="mt-3 font-display text-[26px] leading-[1.2] text-strong group-hover:text-brand-strong">
                      {post.data.title}
                    </h3>
                    <p className="mt-3 text-[16px] leading-7 text-body">{post.data.description}</p>
                    <span className="mt-auto pt-6 text-[15px] font-medium text-brand">Read the story →</span>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* About */}
      <section className="border-t border-line bg-surface py-20 md:py-28">
        <Container className="grid items-center gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <div className="mx-auto w-full max-w-[420px] overflow-hidden rounded-[22px] border border-line shadow-soft md:max-w-none">
            <Image
              src={portraits.desk.src}
              width={portraits.desk.width}
              height={portraits.desk.height}
              alt={portraits.desk.alt}
              className="h-auto w-full"
            />
          </div>
          <div>
            <SectionHeading eyebrow="About" title="From iOS lead to founder." />
            <div className="mt-6 space-y-5 text-[18px] leading-8">
              <p>
                I have spent more than thirteen years building production software, much of it for
                iPhone and iPad. Before ScotiTech I led iOS development in enterprise software, and I
                kept meeting the same problem: the hard part was rarely the app. It was getting it
                safely onto the right devices, and keeping control once it was there.
              </p>
              <p>
                I founded ScotiTech in 2024 to build software around that problem. I set the product
                direction, design the architecture and work directly with the people who use what
                we make.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              <TextLink href="/about">My story</TextLink>
              <TextLink href={person.company.url}>scotitech.com</TextLink>
            </div>
          </div>
        </Container>
      </section>

      {/* Recognition */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div className="overflow-hidden rounded-[22px] border border-line">
              <Image
                src={forttuna.image.src}
                width={forttuna.image.width}
                height={forttuna.image.height}
                alt={forttuna.image.alt}
                className="h-full max-h-[620px] w-full object-cover object-[50%_30%]"
              />
            </div>
            <div className="flex flex-col justify-center">
              <SectionHeading eyebrow="Recognition" title="Awards, talks and writing." />
              <ul className="mt-8 divide-y divide-line border-y border-line">
                {awards.map((item) => (
                  <li key={item.title} className="grid grid-cols-[56px_1fr] gap-4 py-4">
                    <span className="text-[14px] text-muted">{item.year}</span>
                    <span>
                      <span className="block text-[16px] font-semibold text-strong">{item.title}</span>
                      <span className="block text-[15px] text-muted">{item.by}</span>
                    </span>
                  </li>
                ))}
                {talks.slice(0, 2).map((item) => (
                  <li key={item.title} className="grid grid-cols-[56px_1fr] gap-4 py-4">
                    <span className="text-[14px] text-muted">{item.year}</span>
                    <span>
                      <a href={item.link} className="block text-[16px] font-semibold text-strong hover:text-brand">
                        {item.title} <span aria-hidden="true">↗</span>
                      </a>
                      <span className="block text-[15px] text-muted">
                        {item.kind}, {item.venue}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <TextLink href="/impact">All recognition, talks and roles</TextLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact */}
      <section className="border-t border-line bg-band py-20 text-on-ink md:py-24">
        <Container className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#5eead4]">Contact</p>
            <h2 className="mt-3 font-display text-[34px] leading-[1.12] text-white md:text-[48px]">
              Working on something where control matters?
            </h2>
            <p className="mt-4 text-[18px] leading-8 text-on-ink-muted">
              I am glad to hear from founders, IT teams, partners and event organisers.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href={`mailto:${person.email}`} variant="light">
              Email me
            </ButtonLink>
            <ButtonLink href={person.linkedin} variant="secondary">
              LinkedIn ↗
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
