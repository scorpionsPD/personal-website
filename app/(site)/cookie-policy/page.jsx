import { createMetadata } from "../../../lib/seo";

export const metadata = createMetadata({
  title: "Cookie Policy | Pradeep Dahiya",
  description:
    "This website sets no cookies. Visitor counts are cookieless, store nothing on your device and show totals only.",
  path: "/cookie-policy"
});

const categories = [
  {
    title: "No cookies",
    body:
      "This website's own code sets no cookies: none for statistics, adverts or preferences."
  },
  {
    title: "Cookieless visitor counts",
    body:
      "Visits are counted with Vercel Web Analytics, which uses no cookies and stores nothing on your device. It shows totals only: pages viewed, where visits came from, countries and device types. It cannot identify you or follow you to other sites."
  },
  {
    title: "No banner, and opting out",
    body:
      "As nothing is stored on your device, there is nothing to accept or reject, so there is no cookie banner. If your browser sends a Global Privacy Control or Do Not Track signal, your visit is not counted at all."
  },
  {
    title: "Future changes",
    body:
      "If cookies, advertising tags, embedded third-party media or other optional storage are ever added, this page will be updated and your consent will be asked for before they are used."
  }
];

export default function CookiePolicyPage() {
  return (
    <div className="mx-auto flex w-full max-w-[980px] flex-col gap-12 px-5 pb-24 pt-16 md:px-8 md:pt-24">
      <section className="flex flex-col gap-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
          Cookie Policy
        </p>
        <h1 className="font-display text-4xl text-strong md:text-5xl">
          Cookie and consent policy.
        </h1>
        <p className="max-w-3xl text-base leading-7 text-body md:text-lg">
          This page explains why this website has no cookie banner: it sets no cookies, and its
          visitor counts work without them.
        </p>
        <p className="text-sm text-muted">Last updated 31 October 2026.</p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {categories.map((category) => (
          <div key={category.title} className="rounded-2xl border border-line bg-surface p-6">
            <h2 className="font-display text-2xl text-strong">{category.title}</h2>
            <p className="mt-3 text-sm leading-7 text-body">{category.body}</p>
          </div>
        ))}
      </section>

      <section className="rounded-2xl border border-line bg-surface p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">
          Strictly necessary technologies
        </p>
        <p className="mt-3 text-sm leading-7 text-body">
          If strictly necessary technologies are ever used for security, load balancing, or a
          user-requested feature, they would be assessed separately from analytics or advertising
          tools. Under UK guidance, strictly necessary technologies are treated differently from
          non-essential tracking technologies.
        </p>
      </section>
    </div>
  );
}
