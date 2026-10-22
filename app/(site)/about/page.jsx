import Image from "next/image";
import { ButtonLink, Container, SectionHeading, TextLink } from "../../../components/ui";
import { person, portraits, roles } from "../../../lib/site";
import { createMetadata } from "../../../lib/seo";

export const metadata = createMetadata({
  title: "About | Pradeep Dahiya",
  description:
    "Pradeep Dahiya founded ScotiTech after more than thirteen years building production software, much of it for Apple platforms. He builds Vamiq, OnQ and AXOS.",
  path: "/about"
});

const beliefs = [
  {
    title: "A company should decide what reaches its people's devices.",
    body: "That is Vamiq: a company's own app store and device management, under its own control."
  },
  {
    title: "An organisation's knowledge should stay inside its walls.",
    body: "That is AXOS: a private workspace where the AI runs on the organisation's own infrastructure."
  },
  {
    title: "Your time should be yours, even in a queue.",
    body: "That is OnQ: see the wait, join from anywhere, and turn up when it is your turn."
  }
];

export default function AboutPage() {
  return (
    <>
      <section>
        <Container className="grid items-center gap-12 pb-16 pt-14 md:grid-cols-[1.1fr_0.9fr] md:gap-16 md:pb-24 md:pt-24">
          <div>
            <p className="eyebrow">About</p>
            <h1 className="mt-4 font-display text-[44px] leading-[1.05] tracking-[-0.01em] text-strong md:text-[68px]">
              I build software people can rely on, and control.
            </h1>
            <p className="mt-6 max-w-xl text-[18px] leading-8 md:text-[20px]">
              I&apos;m Pradeep Dahiya, founder of ScotiTech. I set the direction for our products, design
              their architecture, and work directly with the people who use them.
            </p>
          </div>
          <div className="mx-auto w-full max-w-[420px] overflow-hidden rounded-[22px] border border-line shadow-card md:max-w-none">
            <Image
              src={portraits.desk.src}
              width={portraits.desk.width}
              height={portraits.desk.height}
              alt={portraits.desk.alt}
              priority
              className="h-auto w-full"
            />
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-surface py-20 md:py-28">
        <Container width="prose">
          <p className="eyebrow">My story</p>
          <div className="mt-6 space-y-6 text-[19px] leading-[1.75] text-body">
            <p>
              I have spent more than thirteen years building production software, much of it for
              iPhone and iPad. I have led iOS teams, shipped enterprise apps in Swift and Objective-C,
              and spent a long time on the unglamorous questions that decide whether software
              survives: how it reaches people, who controls it, and what happens when something
              around it changes.
            </p>
            <p>
              The same problem kept coming back. Building the app was rarely the hard part. Getting it
              safely onto the right devices, and staying in control once it was there, was.
            </p>
            <p>
              I founded ScotiTech in 2024 to build software around that problem. It began with private
              app distribution, the product now called{" "}
              <a href="/products/vamiq" className="font-medium text-brand underline underline-offset-4">
                Vamiq
              </a>
              , and grew into device management for iPhone, iPad and Mac. Along the way we built{" "}
              <a href="/products/axos" className="font-medium text-brand underline underline-offset-4">
                AXOS
              </a>
              , a private AI workspace, and{" "}
              <a href="/products/onq" className="font-medium text-brand underline underline-offset-4">
                OnQ
              </a>
              , which takes the waiting out of walk-in queues.
            </p>
            <p>
              I like to work in the open where I can. I write about what we ship, including the
              decisions behind it, and I keep the claims on this site to things you can check.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading eyebrow="What I believe" title="Control belongs with the people who depend on the system." />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {beliefs.map((item) => (
              <div key={item.title} className="rounded-[22px] border border-line bg-surface p-7">
                <p className="font-display text-[22px] leading-snug text-strong">{item.title}</p>
                <p className="mt-3 text-[16px] leading-7">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-surface py-20 md:py-28">
        <Container className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <SectionHeading
            eyebrow="Beyond ScotiTech"
            title="Boards, advice and mentoring."
            lead="Volunteer roles where I bring the same care for governance and good systems."
          />
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

      <section className="py-20 md:py-24">
        <Container className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="font-display text-[30px] leading-tight text-strong md:text-[38px]">Career history and recommendations</h2>
            <p className="mt-3 text-[17px] leading-7">My full career history is on LinkedIn, and awards, talks and recommendations are on the recognition page.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href={person.linkedin} variant="ink">
              LinkedIn ↗
            </ButtonLink>
            <ButtonLink href="/impact" variant="secondary">
              Recognition
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
