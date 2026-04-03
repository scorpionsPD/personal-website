"use client";

export default function ExternalLinkButton({ href, className, children }) {
  return (
    <button
      type="button"
      onClick={() => window.open(href, "_blank", "noopener,noreferrer")}
      className={className}
    >
      {children}
    </button>
  );
}
