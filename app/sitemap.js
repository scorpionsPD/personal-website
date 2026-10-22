import { getAllPosts } from "../lib/blog";
import { absoluteUrl } from "../lib/seo";

export const dynamic = "force-static";

// Date of the last content change to the static pages.
const pagesUpdated = new Date("2026-10-22");

const staticRoutes = [
  { path: "/", priority: 1 },
  { path: "/work", priority: 0.9 },
  { path: "/products/vamiq", priority: 0.85 },
  { path: "/products/onq", priority: 0.8 },
  { path: "/products/axos", priority: 0.8 },
  { path: "/about", priority: 0.85 },
  { path: "/blog", priority: 0.8 },
  { path: "/impact", priority: 0.7 },
  { path: "/contact", priority: 0.6 },
  { path: "/privacy-policy", priority: 0.2 },
  { path: "/cookie-policy", priority: 0.2 }
];

export default function sitemap() {
  const posts = getAllPosts().map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: post.data.date ? new Date(post.data.date) : pagesUpdated,
    changeFrequency: "monthly",
    priority: post.data.type === "story" ? 0.7 : 0.6
  }));

  return [
    ...staticRoutes.map((route) => ({
      url: absoluteUrl(route.path),
      lastModified: pagesUpdated,
      changeFrequency: route.path === "/blog" ? "weekly" : "monthly",
      priority: route.priority
    })),
    ...posts
  ];
}
