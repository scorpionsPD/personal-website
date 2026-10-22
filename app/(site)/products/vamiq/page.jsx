import Image from "next/image";
import Link from "next/link";
import VamiqShowcase from "../../../../components/VamiqShowcase";
import { ButtonLink, Container, JsonLd, SectionHeading, TextLink } from "../../../../components/ui";
import { getAllPosts } from "../../../../lib/blog";
import { products, vamiqMedia } from "../../../../lib/site";
import { breadcrumbJsonLd, createMetadata, productJsonLd } from "../../../../lib/seo";

const vamiq = products.find((item) => item.id === "vamiq");

export const metadata = createMetadata({
  title: "Vamiq: Apple device management and private app store | Pradeep Dahiya",
  description:
    "Vamiq, from ScotiTech, sets up and secures a team's iPhones, iPads and Macs, and delivers the company's own apps through its own branded app store.",
  path: "/products/vamiq",
  image: "/og/vamiq.jpg",
  imageAlt: "Vamiq: your Apple devices and your own apps, managed in one place"
});

const parts = [
  {
    eyebrow: "For your people",
    title: "Private app distribution",
    body: "Your own branded app store for your company's private and internal apps."
  },
  {
    eyebrow: "For your devices",
    title: "Device management",
    body: "Enrol company devices, install their apps, and manage their settings and security."
  },
  {
    eyebrow: "For your releases",
    title: "Release controls",
    body: "Check each new build before it reaches a device, and keep a record of what was released."
  }
];

const steps = [
  { title: "Connect Apple Business", body: "Link the company's Apple Business account to bring in its apps and licences. They stay the company's." },
  {
    title: "Enrol devices",
    body: "Send an enrolment link, or use zero-touch enrolment: devices bought through Apple Business set themselves up out of the box."
  },
  {
    title: "Publish apps",
    body: "People find them in the branded app store, and Vamiq installs them on managed devices, with the status of each install."
  }
];

const features = [
  {
    group: "Apps",
    items: [
      "A branded app store, on the company's own web address if it wants",
      "Apple Business Custom Apps and App Store apps on enrolled iPhones and iPads",
      "Directory sync with Apple Business",
      "An audit trail of admin changes"
    ]
  },
  {
    group: "Devices",
    items: [
      "Zero-touch setup for devices bought through Apple Business",
      "iPhone, iPad and Mac enrolment by link",
      "Lock or erase a lost iPhone or iPad",
      "A security baseline and compliance rules for Macs"
    ]
  },
  {
    group: "Releases",
    items: [
      "Risk Forecast before each release",
      "Build checks before a version reaches a device",
      "Evidence Packs: a record of what was released",
      "A release upload API for CI/CD pipelines"
    ]
  }
];

export default function VamiqPage() {
  const stories = getAllPosts().filter((post) => post.data.type === "story");

  return (
    <>
      <JsonLd
        data={[
          productJsonLd(vamiq, { operatingSystem: "iOS, iPadOS, macOS", alternateName: "AppDeploy" }),
          breadcrumbJsonLd([
            { name: "Work", path: "/work" },
            { name: "Vamiq", path: "/products/vamiq" }
          ])
        ]}
      />

      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[38%] h-[640px] w-[1100px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(45,180,165,0.15),rgba(45,180,165,0))]"
        />
        <Container className="relative pb-16 pt-14 text-center md:pb-24 md:pt-20">
          <Link href="/work" className="text-[14px] text-muted hover:text-strong">
            ← Work
          </Link>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Image src={vamiq.logo} alt="" width={44} height={44} className="h-11 w-11 rounded-[11px]" />
            <span className="text-[20px] font-semibold text-strong">Vamiq</span>
          </div>
          <h1 className="mx-auto mt-6 max-w-4xl font-display text-[40px] leading-[1.06] tracking-[-0.01em] text-strong md:text-[68px]">
            {vamiq.line}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[18px] leading-8 md:text-[20px]">{vamiq.summary}</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <ButtonLink href={vamiq.url}>Visit vamiq.app ↗</ButtonLink>
            <ButtonLink href="#film" variant="secondary">
              Watch the film (75 s)
            </ButtonLink>
          </div>
          <div className="mx-auto mt-14 max-w-[1040px] text-left">
            <VamiqShowcase />
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-surface py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="What Vamiq does"
            title="Use one part or all three, in the same workspace."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {parts.map((part) => (
              <div key={part.title} className="rounded-[22px] border border-line bg-canvas p-7">
                <p className="eyebrow">{part.eyebrow}</p>
                <h3 className="mt-3 text-[21px] font-semibold text-strong">{part.title}</h3>
                <p className="mt-3 text-[16px] leading-7">{part.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.group}>
                <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-muted">{feature.group}</p>
                <ul className="mt-4 space-y-3">
                  {feature.items.map((item) => (
                    <li key={item} className="flex gap-3 text-[15px] leading-6">
                      <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading eyebrow="How it works" title="Live in three steps." />
          <ol className="mt-12 grid gap-5 md:grid-cols-3">
            {steps.map((step, index) => (
              <li key={step.title} className="rounded-[22px] border border-line bg-surface p-7">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-brand text-[14px] font-semibold text-brand">
                  {index + 1}
                </span>
                <h3 className="mt-5 text-[19px] font-semibold text-strong">{step.title}</h3>
                <p className="mt-2 text-[16px] leading-7">{step.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section id="film" className="scroll-mt-20 border-y border-line bg-band py-20 text-on-ink md:py-28">
        <Container width="mid">
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#5eead4]">The film</p>
          <h2 className="mt-3 font-display text-[32px] leading-[1.12] text-white md:text-[44px]">
            {vamiqMedia.film.title}
          </h2>
          <p className="mt-4 max-w-2xl text-[17px] leading-7 text-on-ink-muted">{vamiqMedia.film.description}</p>
          <div className="mt-10 overflow-hidden rounded-[18px] border border-white/10 bg-black shadow-lift">
            <video
              className="block h-auto w-full"
              src={vamiqMedia.film.src}
              poster={vamiqMedia.film.poster}
              width={1920}
              height={1080}
              controls
              playsInline
              preload="none"
            >
              <a href={vamiqMedia.film.page}>Watch the film on vamiq.app</a>
            </video>
          </div>
          <p className="mt-4 text-[14px] text-on-ink-muted">
            Music only, no narration. Rendered frame by frame:{" "}
            <Link href="/blog/vamiq-film-frame-by-frame" className="text-white underline underline-offset-4">
              how we made it
            </Link>
            .
          </p>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <div>
            <SectionHeading eyebrow="My role" title="I founded ScotiTech and lead Vamiq's product and architecture." />
            <p className="mt-6 text-[17px] leading-7">
              Vamiq started as AppDeploy, a way to get a company&apos;s private apps onto its people&apos;s devices.
              It grew into device management for iPhone, iPad and Mac in the same workspace, and in
              October 2026 it took the name Vamiq.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              <TextLink href={vamiq.url}>vamiq.app</TextLink>
              <TextLink href="https://vamiq.app/pricing">Pricing</TextLink>
              <TextLink href="https://vamiq.app/docs">Help centre</TextLink>
            </div>
          </div>
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-muted">Stories from building Vamiq</p>
            <ul className="mt-4 divide-y divide-line border-y border-line">
              {stories.map((post) => (
                <li key={post.slug}>
                  <Link href={`/blog/${post.slug}`} className="group flex items-center justify-between gap-6 py-5">
                    <span>
                      <span className="block font-display text-[21px] leading-snug text-strong group-hover:text-brand-strong">
                        {post.data.title}
                      </span>
                      <span className="mt-1 block text-[14px] text-muted">
                        {post.data.kicker} · {post.data.readingTime} min read
                      </span>
                    </span>
                    <span aria-hidden="true" className="text-brand">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}
