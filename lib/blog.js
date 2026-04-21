import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_PATH = path.join(process.cwd(), "content", "blog");

function getExcerpt(content, maxLength = 180) {
  if (!content) {
    return "";
  }

  const text = content
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]*`/g, " ")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/^>\s+/gm, "")
    .replace(/\[(.*?)\]\([^)]*\)/g, "$1")
    .replace(/[*_~`]/g, "")
    .replace(/\s+/g, " ")
    .trim();

  if (text.length <= maxLength) {
    return text;
  }

  return `${text.slice(0, maxLength).trim()}…`;
}

function resolvePostPath(slug) {
  const slugValue = Array.isArray(slug) ? slug[0] : slug;
  if (!slugValue) {
    return null;
  }

  const cleanSlug = decodeURIComponent(slugValue).replace(/\.mdx?$/, "");
  const mdxPath = path.join(BLOG_PATH, `${cleanSlug}.mdx`);
  const mdPath = path.join(BLOG_PATH, `${cleanSlug}.md`);

  if (fs.existsSync(mdxPath)) {
    return { fullPath: mdxPath, slug: cleanSlug };
  }
  if (fs.existsSync(mdPath)) {
    return { fullPath: mdPath, slug: cleanSlug };
  }

  return null;
}

export function getPostSlugs() {
  if (!fs.existsSync(BLOG_PATH)) {
    return [];
  }

  return fs
    .readdirSync(BLOG_PATH)
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx?$/, ""));
}

export function getPostBySlug(slug) {
  const resolved = resolvePostPath(slug);
  if (!resolved) {
    return null;
  }

  const fileContents = fs.readFileSync(resolved.fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug: resolved.slug,
    content,
    data: {
      title: data.title ?? resolved.slug,
      description: data.description ?? "",
      date: data.date ?? "",
      published: data.published ?? true,
      excerpt: data.description ? "" : getExcerpt(content)
    }
  };
}

export function getAllPosts() {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post) => post && post.data.published !== false);

  return posts.sort((a, b) => {
    const aDate = a?.data?.date ? new Date(a.data.date).getTime() : 0;
    const bDate = b?.data?.date ? new Date(b.data.date).getTime() : 0;
    return bDate - aDate;
  });
}
