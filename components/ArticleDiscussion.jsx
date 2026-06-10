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
    <aside className="mt-10 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
            Field Notes
          </p>
          <h2 className="mt-3 font-display text-2xl leading-tight text-neutral-950">
            Add a practical perspective.
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-600">
            Share a practical lesson, counterpoint, or credible source from your own
            work in this problem space.
          </p>
        </div>
        <a
          href={discussionSearchUrl}
          target="_blank"
          rel="noreferrer"
          className="text-sm font-semibold text-accent hover:underline"
        >
          Comment on GitHub
        </a>
      </div>

      <div className="mt-5 flex flex-wrap gap-2 text-xs font-semibold text-neutral-600">
        <span className="rounded-full border border-neutral-200 bg-white px-3 py-1.5">
          Implementation lesson
        </span>
        <span className="rounded-full border border-neutral-200 bg-white px-3 py-1.5">
          Counterpoint
        </span>
        <span className="rounded-full border border-neutral-200 bg-white px-3 py-1.5">
          Useful source
        </span>
      </div>

      {isConfigured ? (
        <div ref={containerRef} className="mt-6" />
      ) : (
        <div className="mt-6 rounded-xl border border-neutral-200 bg-white p-4 text-sm leading-6 text-neutral-600">
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
