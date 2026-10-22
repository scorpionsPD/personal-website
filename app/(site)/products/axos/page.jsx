import Image from "next/image";
import Link from "next/link";
import { ButtonLink, Container, JsonLd, ProductFrame, SectionHeading, TextLink } from "../../../../components/ui";
import { products } from "../../../../lib/site";
import { breadcrumbJsonLd, createMetadata, productJsonLd } from "../../../../lib/seo";

const axos = products.find((item) => item.id === "axos");

export const metadata = createMetadata({
  title: "AXOS: a private AI workspace | Pradeep Dahiya",
  description:
    "AXOS brings mail, files, calendar, chat, video and tasks into one self-hosted workspace with private AI built in, inside an organisation's own environment.",
  path: "/products/axos",
  image: "/og/axos.jpg",
  imageAlt: "AXOS: your entire workspace, private by design"
});

const modules = [
  { title: "Mail and calendar", body: "Email and scheduling inside one private workspace the organisation owns." },
  { title: "Drive and knowledge", body: "Files, shared storage and knowledge search, controlled end to end." },
  { title: "Chat and video", body: "Team messaging and calls without routing through a third-party tool." },
  { title: "Tasks, notes and forms", body: "Plan and coordinate work alongside everything else in the suite." },
  { title: "A built-in AI agent", body: "An assistant grounded in live workspace data, running inside the organisation's environment." },
  { title: "One login", body: "Shared identity and permissions across every module, with single sign-on." }
];

const sectors = ["Legal", "Finance and insurance", "Healthcare", "Manufacturing", "Data-sensitive teams"];

export default function AxosPage() {
  return (
    <>
      <JsonLd
        data={[
          productJsonLd(axos),
          breadcrumbJsonLd([
            { name: "Work", path: "/work" },
            { name: "AXOS", path: "/products/axos" }
          ])
        ]}
      />

      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[40%] h-[640px] w-[1100px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(47,93,134,0.13),rgba(47,93,134,0))]"
        />
        <Container className="relative pb-16 pt-14 text-center md:pb-24 md:pt-20">
          <Link href="/work" className="text-[14px] text-muted hover:text-strong">
            ← Work
          </Link>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Image src={axos.logo} alt="" width={44} height={44} className="h-11 w-11 rounded-[11px] bg-surface p-1" />
            <span className="text-[20px] font-semibold text-strong">AXOS</span>
          </div>
          <h1 className="mx-auto mt-6 max-w-4xl font-display text-[42px] leading-[1.06] tracking-[-0.01em] text-strong md:text-[68px]">
            Your entire workspace.
            <br />
            <span className="text-axos">Private by design.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[18px] leading-8 md:text-[20px]">{axos.summary}</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <ButtonLink href={axos.url}>Visit axos.scotitech.com ↗</ButtonLink>
            <ButtonLink href="https://scotitech.com/products/axos" variant="secondary">
              AXOS at ScotiTech ↗
            </ButtonLink>
          </div>
          <div className="mx-auto mt-14 max-w-[1040px] text-left">
            <ProductFrame label="AXOS Command Centre">
              <Image
                src="/images/axos/axos-command-centre-1200.webp"
                width={1200}
                height={637}
                alt="The AXOS Command Centre: priority mail, focus meetings, work items and a morning brief from governed AI"
                className="h-auto w-full"
                priority
              />
            </ProductFrame>
            <p className="mt-3 text-[12px] text-muted">Command Centre: the day at a glance.</p>
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-surface py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Inside AXOS"
            title="One private workspace instead of a sprawl of tools."
            lead="AXOS runs on infrastructure the organisation controls, so mail, files, conversations and the AI that works across them stay inside its walls."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {modules.map((item) => (
              <div key={item.title} className="rounded-[22px] border border-line bg-canvas p-7">
                <h3 className="text-[19px] font-semibold text-strong">{item.title}</h3>
                <p className="mt-2 text-[16px] leading-7">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-14">
            <ProductFrame label="AXOS Workspace">
              <Image
                src="/images/axos/axos-workspace-1200.webp"
                width={1200}
                height={772}
                alt="The AXOS workspace: mail, drive, calendar, chat, video, tasks and contacts in one place"
                className="h-auto w-full"
              />
            </ProductFrame>
            <p className="mt-3 text-[12px] text-muted">Workspace: recent activity and today&apos;s schedule in one place.</p>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <SectionHeading eyebrow="Who it is for" title="Teams whose data cannot leave the building." />
            <ul className="mt-8 flex flex-wrap gap-2">
              {sectors.map((sector) => (
                <li key={sector} className="rounded-full border border-line bg-surface px-4 py-2 text-[15px] text-strong">
                  {sector}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="My role" title="I lead AXOS's product and architecture at ScotiTech." />
            <p className="mt-6 text-[17px] leading-7">
              AXOS comes from a simple position: organisations should be able to use AI without sending
              their work to someone else&apos;s cloud. I write about that idea in my essays on private AI.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              <TextLink href="/blog/private-ai-workspace-regulated-organisations">Private AI workspaces</TextLink>
              <TextLink href="/blog/privacy-first-ai">Building privacy-first AI</TextLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
