import Image from "next/image";
import Link from "next/link";
import { Container, PageIntro, ProductFrame, SectionHeading, TextLink } from "../../../components/ui";
import { onqScreens, openSource, products, vamiqMedia } from "../../../lib/site";
import { createMetadata } from "../../../lib/seo";

export const metadata = createMetadata({
  title: "Work | Pradeep Dahiya",
  description:
    "What Pradeep Dahiya builds at ScotiTech: Vamiq for Apple devices and private apps, OnQ for live queues and AXOS, a private AI workspace.",
  path: "/work"
});

const visuals = {
  vamiq: {
    label: "vamiq.app",
    src: vamiqMedia.poster.src,
    width: vamiqMedia.poster.width,
    height: vamiqMedia.poster.height,
    alt: vamiqMedia.poster.alt
  },
  onq: onqScreens[0],
  axos: {
    label: "AXOS Workspace",
    src: "/images/axos/axos-workspace-1200.webp",
    width: 1200,
    height: 772,
    alt: "The AXOS workspace: mail, drive, calendar, chat, video, tasks and contacts in one place"
  }
};

const principles = [
  {
    title: "Software should survive operations, not demos.",
    body: "A demo measures what is possible. Months of real use measure whether it is right."
  },
  {
    title: "Constraints are the design.",
    body: "Compliance rules, ownership and deployment boundaries are not obstacles. They decide the architecture."
  },
  {
    title: "Good systems remove decisions.",
    body: "If people have to keep managing the software, the software is not finished."
  }
];

export default function WorkPage() {
  return (
    <>
      <PageIntro
        eyebrow="Work"
        title="Products I build, and why."
        lead="Each product grew out of a real problem I kept seeing: companies losing control of their devices and apps, organisations sending their work to someone else's AI, and people losing their evenings to a queue."
      />

      <section className="pb-8">
        <Container className="space-y-6">
          {products.map((product, index) => {
            const visual = visuals[product.id];
            const portrait = visual.height > visual.width;
            return (
              <article
                key={product.id}
                className="grid overflow-hidden rounded-[26px] border border-line bg-surface md:grid-cols-2"
              >
                <div className={`flex flex-col p-8 md:p-12 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="flex items-center gap-3">
                    <Image
                      src={product.logo}
                      alt=""
                      width={44}
                      height={44}
                      className="h-11 w-11 rounded-[11px] bg-canvas p-0.5"
                    />
                    <div>
                      <h2 className="text-[21px] font-semibold text-strong">{product.name}</h2>
                      <p className="text-[14px] text-muted">{product.kind}</p>
                    </div>
                  </div>
                  <p className="mt-8 font-display text-[28px] leading-[1.15] text-strong md:text-[34px]">
                    {product.line}
                  </p>
                  <p className="mt-4 text-[17px] leading-7">{product.summary}</p>
                  <div className="mt-auto flex flex-wrap gap-x-6 gap-y-3 pt-8">
                    <TextLink href={product.href}>About {product.name}</TextLink>
                    <TextLink href={product.url}>{product.urlLabel}</TextLink>
                  </div>
                </div>
                <div
                  className={`flex items-end justify-center bg-canvas ${
                    portrait ? "px-10 pt-10" : "pl-8 pt-10 md:pl-12 md:pt-12"
                  } ${index % 2 === 1 ? "md:order-1" : ""}`}
                >
                  {portrait ? (
                    <div className="w-full max-w-[260px] overflow-hidden rounded-t-[30px] border-[6px] border-b-0 border-ink bg-ink shadow-card ring-1 ring-white/15">
                      <Image
                        src={visual.src}
                        width={visual.width}
                        height={visual.height}
                        alt={visual.alt}
                        className="h-[340px] w-full rounded-t-[24px] object-cover object-top"
                      />
                    </div>
                  ) : (
                    <ProductFrame label={visual.label} className="w-full rounded-b-none rounded-r-none border-b-0 border-r-0">
                      <Image src={visual.src} width={visual.width} height={visual.height} alt={visual.alt} className="h-auto w-full" />
                    </ProductFrame>
                  )}
                </div>
              </article>
            );
          })}
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container className="grid gap-14 md:grid-cols-2 md:gap-16">
          <div>
            <SectionHeading eyebrow="How I build" title="Three rules I keep coming back to." />
            <ul className="mt-8 divide-y divide-line border-y border-line">
              {principles.map((item) => (
                <li key={item.title} className="py-5">
                  <p className="font-display text-[22px] leading-snug text-strong">{item.title}</p>
                  <p className="mt-2 text-[16px] leading-7">{item.body}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Open source" title="Code anyone can read." />
            <div className="mt-8 space-y-4">
              {openSource.map((item) => (
                <a
                  key={item.title}
                  href={item.link}
                  className="group block rounded-[22px] border border-line bg-surface p-6 transition hover:shadow-soft"
                >
                  <p className="text-[18px] font-semibold text-strong group-hover:text-brand-strong">
                    {item.title} <span aria-hidden="true" className="text-brand">↗</span>
                  </p>
                  <p className="mt-2 text-[16px] leading-7">{item.detail}</p>
                  <p className="mt-3 text-[13px] text-muted">{item.link.replace("https://", "")}</p>
                </a>
              ))}
            </div>
            <p className="mt-8 text-[16px] leading-7">
              Want the story behind the work? Read the{" "}
              <Link href="/blog" className="font-medium text-brand underline underline-offset-4">
                stories from the build
              </Link>
              .
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
