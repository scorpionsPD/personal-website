import { ButtonLink, Container, PageIntro } from "../../../components/ui";
import { person, products } from "../../../lib/site";
import { createMetadata } from "../../../lib/seo";

const reasons = [
  {
    title: "Speaking and events",
    body: "Talks and panels on private AI, Apple device management, app distribution and building a product company."
  },
  {
    title: "Advice and reviews",
    body: "Architecture reviews and product strategy for teams building internal systems or bringing work in-house."
  },
  {
    title: "Partnerships",
    body: "Working together on products for teams with real operational or compliance constraints."
  },
  {
    title: "Mentoring",
    body: "Support for technical founders and engineering leads: reviews, workshops and one-to-one guidance."
  }
];

export const metadata = createMetadata({
  title: "Contact | Pradeep Dahiya",
  description:
    "Get in touch with Pradeep Dahiya, founder of ScotiTech, about speaking, advice, partnerships or mentoring.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Let's talk."
        lead="Open to speaking, advice, partnerships and mentoring. Email is the quickest way to reach me."
      >
        <div className="mt-9 flex flex-wrap gap-3">
          <ButtonLink href={`mailto:${person.email}`}>{person.email}</ButtonLink>
          <ButtonLink href={person.linkedin} variant="secondary">
            LinkedIn ↗
          </ButtonLink>
        </div>
        <p className="mt-5 text-[15px] text-muted">I usually reply within two to three working days.</p>
      </PageIntro>

      <section className="border-t border-line bg-surface py-20 md:py-24">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((item) => (
              <div key={item.title} className="rounded-[22px] border border-line bg-canvas p-6">
                <h2 className="text-[18px] font-semibold text-strong">{item.title}</h2>
                <p className="mt-2 text-[15px] leading-6">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 grid gap-10 md:grid-cols-2">
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-muted">Helpful to include</p>
              <ul className="mt-4 space-y-2.5 text-[16px]">
                <li>Your organisation and role</li>
                <li>What you would like to work on together</li>
                <li>A little context on the challenge or opportunity</li>
                <li>Your timeline and any constraints</li>
              </ul>
            </div>
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-muted">About a product?</p>
              <p className="mt-4 text-[16px] leading-7">
                For a demo, pricing or support, the product teams are the fastest route:
              </p>
              <ul className="mt-3 space-y-2 text-[16px]">
                {products.map((product) => (
                  <li key={product.id}>
                    <a href={product.url} className="font-medium text-brand hover:text-brand-strong">
                      {product.name}: {product.urlLabel} ↗
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
