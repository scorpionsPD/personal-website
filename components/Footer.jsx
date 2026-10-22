import Link from "next/link";
import { person, products } from "../lib/site";

const explore = [
  { href: "/work", label: "Work" },
  { href: "/blog", label: "Writing" },
  { href: "/about", label: "About" },
  { href: "/impact", label: "Recognition" },
  { href: "/contact", label: "Contact" }
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-canvas">
      <div className="mx-auto grid max-w-page gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:px-8">
        <div className="max-w-xs">
          <p className="font-display text-xl text-strong">{person.name}</p>
          <p className="mt-3 text-[15px] leading-6 text-muted">
            Founder of ScotiTech. Building Vamiq, OnQ and AXOS.
          </p>
        </div>

        <div>
          <p className="text-[13px] font-semibold text-strong">Explore</p>
          <ul className="mt-4 space-y-2.5 text-[15px]">
            {explore.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-muted transition hover:text-strong">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[13px] font-semibold text-strong">Products</p>
          <ul className="mt-4 space-y-2.5 text-[15px]">
            {products.map((item) => (
              <li key={item.id}>
                <a href={item.url} className="text-muted transition hover:text-strong">
                  {item.name} <span aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
            <li>
              <a href={person.company.url} className="text-muted transition hover:text-strong">
                ScotiTech <span aria-hidden="true">↗</span>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-[13px] font-semibold text-strong">Elsewhere</p>
          <ul className="mt-4 space-y-2.5 text-[15px]">
            <li>
              <a href={person.linkedin} rel="me" className="text-muted transition hover:text-strong">
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
            </li>
            <li>
              <a href={person.github} rel="me" className="text-muted transition hover:text-strong">
                GitHub <span aria-hidden="true">↗</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${person.email}`} className="text-muted transition hover:text-strong">
                Email
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-page flex-col gap-3 px-5 py-6 text-[13px] text-muted md:flex-row md:items-center md:justify-between md:px-8">
          <p>© 2026 {person.name}</p>
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="transition hover:text-strong">
              Privacy
            </Link>
            <Link href="/cookie-policy" className="transition hover:text-strong">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
