"use client";

import { useEffect, useRef } from "react";

const giscusRepo = process.env.NEXT_PUBLIC_GISCUS_REPO || "scorpionsPD/personal-website";
const giscusRepoId = process.env.NEXT_PUBLIC_GISCUS_REPO_ID || "R_kgDORP0ADA";
const giscusCategory = process.env.NEXT_PUBLIC_GISCUS_CATEGORY || "General";
const giscusCategoryId = process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || "DIC_kwDORP0ADM4C-4yu";
const discussionsUrl = `https://github.com/${giscusRepo}/discussions`;

export default function ArticleDiscussion({ title }) {
  const containerRef = useRef(null);
  const isConfigured = Boolean(giscusRepoId && giscusCategoryId);
  const discussionSearchUrl = `${discussionsUrl}?discussions_q=${encodeURIComponent(title)}`;

  useEffect(() => {
    const container = containerRef.current;
    if (!isConfigured || !container) {
      return;
    }

    container.innerHTML = "";

    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.async = true;
    script.crossOrigin = "anonymous";
    script.setAttribute("data-repo", giscusRepo);
    script.setAttribute("data-repo-id", giscusRepoId);
    script.setAttribute("data-category", giscusCategory);
    script.setAttribute("data-category-id", giscusCategoryId);
    script.setAttribute("data-mapping", "pathname");
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "bottom");
    script.setAttribute("data-theme", "transparent_dark");
    script.setAttribute("data-lang", "en");
    script.setAttribute("data-loading", "lazy");

    container.appendChild(script);

    return () => {
      container.innerHTML = "";
    };
  }, [isConfigured]);

  return (
    <aside className="mt-16 rounded-[22px] border border-line bg-surface p-6 md:p-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="eyebrow">Discussion</p>
          <h2 className="mt-3 font-display text-[26px] leading-tight text-strong">
            Add a practical perspective.
          </h2>
          <p className="mt-2 max-w-xl text-[15px] leading-6 text-body">
            A lesson, a counterpoint or a good source from your own work. Comments use GitHub
            Discussions.
          </p>
        </div>
        <a
          href={discussionSearchUrl}
          target="_blank"
          rel="noreferrer"
          className="shrink-0 text-[15px] font-medium text-brand hover:text-brand-strong"
        >
          Open on GitHub ↗
        </a>
      </div>

      {isConfigured ? (
        <div ref={containerRef} className="mt-6" />
      ) : (
        <div className="mt-6 rounded-xl border border-line bg-canvas p-4 text-[14px] leading-6 text-body">
          Enable GitHub Discussions, install the Giscus app, then set
          <code className="mx-1 rounded bg-sunken px-1.5 py-0.5 text-xs">NEXT_PUBLIC_GISCUS_REPO_ID</code>
          and
          <code className="mx-1 rounded bg-sunken px-1.5 py-0.5 text-xs">NEXT_PUBLIC_GISCUS_CATEGORY_ID</code>
          to show the live comment box here.
        </div>
      )}
    </aside>
  );
}
