export const metadata = {
  title: "Cookie Policy | Pradeep Dahiya",
  description:
    "Cookie and local-storage policy covering necessary, analytics, and marketing consent categories for this website."
};

const categories = [
  {
    title: "Necessary",
    body:
      "Necessary storage is always enabled. It is used to save your cookie consent preference and to keep the consent system functioning correctly across visits."
  },
  {
    title: "Analytics",
    body:
      "Analytics is optional and remains disabled unless you explicitly opt in. If analytics tools are introduced, they will only load after consent has been granted."
  },
  {
    title: "Marketing",
    body:
      "Marketing is optional and remains disabled unless you explicitly opt in. This category is reserved for future campaign, remarketing, or embedded third-party tracking tools."
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
          This site uses a consent system for cookies and similar browser storage technologies.
          Optional categories remain disabled unless you explicitly allow them.
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
          Preference Storage
        </p>
        <p className="mt-3 text-sm leading-7 text-neutral-600">
          Consent preferences are stored locally in your browser using a versioned key so the site
          can remember your choice. You can change that choice at any time using the Cookie
          Settings control in the footer.
        </p>
      </section>
    </div>
  );
}
