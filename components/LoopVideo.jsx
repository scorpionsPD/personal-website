"use client";

import { useEffect, useRef } from "react";

// A muted product loop that plays inline, and stays on its poster for
// visitors who ask for reduced motion.
export default function LoopVideo({ src, poster, width, height, label, className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      if (query.matches) {
        video.pause();
      } else {
        video.play().catch(() => {});
      }
    };
    apply();
    query.addEventListener("change", apply);
    return () => query.removeEventListener("change", apply);
  }, []);

  return (
    <video
      ref={ref}
      className={`block h-auto w-full ${className}`}
      src={src}
      poster={poster}
      width={width}
      height={height}
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={label}
    />
  );
}
