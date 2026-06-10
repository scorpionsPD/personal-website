"use client";

import { useEffect, useRef } from "react";

const giscusRepo = process.env.NEXT_PUBLIC_GISCUS_REPO || "scorpionsPD/personal-website";
const giscusRepoId = process.env.NEXT_PUBLIC_GISCUS_REPO_ID || "R_kgDORP0ADA";
const giscusCategory = process.env.NEXT_PUBLIC_GISCUS_CATEGORY || "General";
const giscusCategoryId = process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || "DIC_kwDORP0ADM4C-4yu";
const discussionsUrl = `https://github.com/${giscusRepo}/discussions`;

export function ArticleDiscussionSummary({ title }) {
  const discussionSearchUrl = `${discussionsUrl}?discussions_q=${encodeURIComponent(title)}`;

  return (
    <a
      href={discussionSearchUrl}
      target="_blank"
      rel="noreferrer"
      className="text-xs font-semibold text-accent hover:underline"
    >
      Join discussion
    </a>
  );
}

export default function ArticleDiscussion({ title }) {
  const containerRef = useRef(null);
  const isConfigured = Boolean(giscusRepoId && giscusCategoryId);
  const discussionSearchUrl = `${discussionsUrl}?discussions_q=${encodeURIComponent(title)}`;

  useEffect(() => {
    if (!isConfigured || !containerRef.current) {
      return;
    }

    containerRef.current.innerHTML = "";

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
    script.setAttribute("data-theme", "preferred_color_scheme");
    script.setAttribute("data-lang", "en");
    script.setAttribute("data-loading", "lazy");

    containerRef.current.appendChild(script);

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, [isConfigured]);

  return (
    <aside className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
            Reader discussion
          </p>
          <p className="mt-2 text-sm leading-6 text-neutral-600">
            Comments and reactions are powered by GitHub Discussions.
          </p>
        </div>
        <a
          href={discussionSearchUrl}
          target="_blank"
          rel="noreferrer"
          className="text-sm font-semibold text-accent hover:underline"
        >
          Open on GitHub
        </a>
      </div>

      {isConfigured ? (
        <div ref={containerRef} className="mt-5" />
      ) : (
        <div className="mt-5 rounded-xl border border-neutral-200 bg-white p-4 text-sm leading-6 text-neutral-600">
          Enable GitHub Discussions, install the Giscus app, then set
          <code className="mx-1 rounded bg-neutral-100 px-1.5 py-0.5 text-xs">
            NEXT_PUBLIC_GISCUS_REPO_ID
          </code>
          and
          <code className="mx-1 rounded bg-neutral-100 px-1.5 py-0.5 text-xs">
            NEXT_PUBLIC_GISCUS_CATEGORY_ID
          </code>
          to show the live comment box here.
        </div>
      )}
    </aside>
  );
}
