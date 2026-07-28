import type {MetadataRoute} from "next";
import {getAllBlogPosts} from "@/lib/blogs";
import {SITE_URL} from "@/lib/site";

export const dynamic = "force-static";

const STATIC_PATHS = [
  "/",
  "/about/",
  "/blog/newest/",
  "/blog/oldest/",
  "/book/",
  "/clock/",
  "/contact/",
  "/deploys/",
  "/devops/",
  "/glossary/",
  "/privacy/",
  "/terms/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = STATIC_PATHS.map((path) => ({
    url: `${SITE_URL}${path}`,
  }));

  const blogEntries: MetadataRoute.Sitemap = getAllBlogPosts().map((blog) => ({
    url: `${SITE_URL}/blog/${blog.id}/`,
    lastModified: blog.date ?? undefined,
  }));

  return [...staticEntries, ...blogEntries];
}
