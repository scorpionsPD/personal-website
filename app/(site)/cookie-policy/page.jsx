import { createMetadata } from "../../../lib/seo";

export const metadata = createMetadata({
  title: "Cookie Policy | Pradeep Dahiya",
  description:
    "Cookie policy explaining that this website does not currently use non-essential cookies or client-side tracking technologies.",
  path: "/cookie-policy"
});

const categories = [
  {
    title: "Current position",
    body:
      "This website is not currently designed to place analytics, advertising, or preference cookies through its own site code."
  },
  {
    title: "Non-essential cookies",
    body:
      "Because no non-essential cookies are currently being used by the site itself, there is no active cookie consent banner or preference tool on the live site at this time."
  },
  {
    title: "Future changes",
    body:
      "If analytics, advertising tags, embedded third-party media, or other optional storage and access technologies are introduced later, the site will be updated to request consent before those non-essential technologies are used."
  }
];

export default function CookiePolicyPage() {
  return (
    <div className="flex flex-col gap-12">
      <section className="flex flex-col gap-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
          Cookie Policy
        </p>
        <h1 className="font-display text-4xl text-neutral-950 md:text-5xl">
          Cookie and consent policy.
        </h1>
        <p className="max-w-3xl text-base leading-7 text-neutral-600 md:text-lg">
          This page explains the website&apos;s current cookie position and what would happen if
          non-essential cookies or similar tracking technologies are added in future.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {categories.map((category) => (
          <div key={category.title} className="rounded-2xl border border-neutral-200 bg-white p-6">
            <h2 className="font-display text-2xl text-neutral-950">{category.title}</h2>
            <p className="mt-3 text-sm leading-7 text-neutral-600">{category.body}</p>
          </div>
        ))}
      </section>

      <section className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
          Strictly necessary technologies
        </p>
        <p className="mt-3 text-sm leading-7 text-neutral-600">
          If strictly necessary technologies are ever used for security, load balancing, or a
          user-requested feature, they would be assessed separately from analytics or advertising
          tools. Under UK guidance, strictly necessary technologies are treated differently from
          non-essential tracking technologies.
        </p>
      </section>
    </div>
  );
}
