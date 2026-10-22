import Image from "next/image";
import Link from "next/link";
import { onqLinks } from "../lib/site";

export function Container({ children, className = "", width = "page" }) {
  const max = width === "prose" ? "max-w-[760px]" : width === "mid" ? "max-w-[980px]" : "max-w-page";
  return <div className={`mx-auto w-full ${max} px-5 md:px-8 ${className}`}>{children}</div>;
}

export function PageIntro({ eyebrow, title, lead, children }) {
  return (
    <Container className="pb-12 pt-16 md:pb-16 md:pt-24">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h1 className="mt-4 max-w-4xl font-display text-[40px] leading-[1.08] text-strong md:text-[64px]">
        {title}
      </h1>
      {lead && (
        <p className="mt-6 max-w-2xl text-[18px] leading-8 text-body md:text-[20px]">{lead}</p>
      )}
      {children}
    </Container>
  );
}

export function SectionHeading({ eyebrow, title, lead, className = "" }) {
  return (
    <div className={`max-w-3xl ${className}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-3 font-display text-[32px] leading-[1.12] text-strong md:text-[44px]">
        {title}
      </h2>
      {lead && <p className="mt-4 text-[17px] leading-7 text-body md:text-[18px]">{lead}</p>}
    </div>
  );
}

const buttonStyles = {
  primary: "bg-brand text-ink hover:bg-brand-strong",
  secondary: "border border-line-strong bg-surface text-strong hover:border-strong",
  ink: "bg-strong text-canvas hover:bg-white",
  light: "bg-white text-ink hover:bg-on-ink"
};

export function ButtonLink({ href, children, variant = "primary", className = "", ...rest }) {
  const external = /^https?:|^mailto:/.test(href);
  const classes = `inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full px-5 text-[15px] font-medium transition ${buttonStyles[variant]} ${className}`;
  if (external) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}

export function TextLink({ href, children, className = "", tone = "brand" }) {
  const external = /^https?:/.test(href);
  const classes = `group inline-flex items-center gap-1.5 text-[15px] font-medium ${
    tone === "light" ? "text-white" : "text-brand"
  } ${className}`;
  const arrow = (
    <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
      {external ? "↗" : "→"}
    </span>
  );
  if (external) {
    return (
      <a href={href} className={classes}>
        {children}
        {arrow}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
      {arrow}
    </Link>
  );
}

export function StoreButtons({ className = "" }) {
  const base =
    "inline-flex min-h-[52px] flex-col justify-center rounded-xl bg-ink px-5 text-left text-on-ink ring-1 ring-white/20 transition hover:bg-black hover:ring-white/40";
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <a href={onqLinks.appStore} className={base} aria-label="Download OnQ on the App Store">
        <span className="text-[10px] uppercase tracking-[0.12em] text-on-ink-muted">Download on the</span>
        <span className="text-[17px] font-semibold leading-tight">App Store</span>
      </a>
      <a href={onqLinks.googlePlay} className={base} aria-label="Get OnQ on Google Play">
        <span className="text-[10px] uppercase tracking-[0.12em] text-on-ink-muted">Get it on</span>
        <span className="text-[17px] font-semibold leading-tight">Google Play</span>
      </a>
    </div>
  );
}

export function ProductFrame({ label, children, className = "" }) {
  return (
    <div className={`product-frame ${className}`}>
      <div className="product-frame__bar" aria-hidden="true">
        <i />
        <i />
        <i />
        <span>{label}</span>
      </div>
      {children}
    </div>
  );
}

export function PhoneFrame({ src, width, height, alt, className = "", priority = false }) {
  return (
    <div className={`overflow-hidden rounded-[30px] border-[6px] border-ink bg-ink shadow-lift ring-1 ring-white/15 ${className}`}>
      <Image src={src} width={width} height={height} alt={alt} priority={priority} className="h-auto w-full rounded-[24px]" />
    </div>
  );
}

export function Pill({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-line bg-surface px-3 py-1 text-[12px] font-medium text-body ${className}`}
    >
      {children}
    </span>
  );
}

export function JsonLd({ data }) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
