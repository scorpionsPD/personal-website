import { getAllPosts } from "../lib/blog";
import { absoluteUrl } from "../lib/seo";

export const dynamic = "force-static";

const staticRoutes = [
  { path: "/", priority: 1 },
  { path: "/about", priority: 0.9 },
  { path: "/work", priority: 0.85 },
  { path: "/impact", priority: 0.8 },
  { path: "/products/appdeploy", priority: 0.75 },
  { path: "/products/scotitech-workspace", priority: 0.75 },
  { path: "/products/elderconnect-plus", priority: 0.75 },
  { path: "/innovations", priority: 0.7 },
  { path: "/speaking", priority: 0.7 },
  { path: "/blog", priority: 0.75 },
  { path: "/contact", priority: 0.65 },
  { path: "/privacy-policy", priority: 0.3 },
  { path: "/cookie-policy", priority: 0.3 }
];

export default function sitemap() {
  const now = new Date();
  const posts = getAllPosts().map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: post.data.date ? new Date(post.data.date) : now,
    changeFrequency: "monthly",
    priority: 0.7
  }));

  return [
    ...staticRoutes.map((route) => ({
      url: absoluteUrl(route.path),
      lastModified: now,
      changeFrequency: route.path === "/blog" ? "weekly" : "monthly",
      priority: route.priority
    })),
    ...posts
  ];
}
