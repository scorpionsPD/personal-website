"use client";

import { Analytics } from "@vercel/analytics/next";

/**
 * Cookieless, aggregate visitor counts via Vercel Web Analytics. Nothing is
 * stored on the visitor's device and no identity or profile is kept.
 *
 * Some sites link here without sending a referrer (the Halloween Ghost Hunt
 * sends none, by design). Their links carry a source tag instead, such as
 * `?ref=ghost-hunt` or `?utm_source=ghost-hunt`, and the tag is mapped back to
 * the site it stands for so the visit appears under Referrers on any plan.
 */
const sourceTags = new Map([["ghost-hunt", "https://wee-boo-ghost-hunt.vercel.app/"]]);

const sourceParams = ["ref", "utm_source"];
const keptParams = new Set([...sourceParams, "utm_medium", "utm_campaign"]);
const tagPattern = /^[a-z0-9-]{1,40}$/i;

function taggedReferrer() {
  const params = new URLSearchParams(window.location.search);
  for (const name of sourceParams) {
    const referrer = sourceTags.get(params.get(name)?.toLowerCase());
    if (referrer) return referrer;
  }
  return null;
}

// The analytics script reads document.referrer for the first page view, so a
// tagged visit has to be mapped before it loads. A real referrer always wins.
if (typeof document !== "undefined" && !document.referrer) {
  const referrer = taggedReferrer();
  if (referrer) {
    Object.defineProperty(document, "referrer", { configurable: true, get: () => referrer });
  }
}

function hasOptedOut() {
  return navigator.globalPrivacyControl === true || navigator.doNotTrack === "1" || window.doNotTrack === "1";
}

function beforeSend(event) {
  if (hasOptedOut()) return null;

  // Only short source tags leave the browser; any other query text or hash is
  // dropped so nothing personal can ride along in a URL.
  const url = new URL(event.url);
  for (const [name, value] of [...url.searchParams]) {
    if (!keptParams.has(name) || !tagPattern.test(value)) url.searchParams.delete(name);
  }
  url.hash = "";
  return { ...event, url: url.toString() };
}

export default function SiteAnalytics() {
  return <Analytics beforeSend={beforeSend} />;
}
