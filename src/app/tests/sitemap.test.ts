import {describe, expect, test} from "@jest/globals";
import sitemap from "@/app/sitemap";
import {getAllBlogPosts} from "@/lib/blogs";
import {SITE_URL} from "@/lib/site";

describe("sitemap", () => {
  test("every entry is an absolute, trailing-slash URL on the canonical origin", () => {
    const entries = sitemap();

    expect(entries.length).toBeGreaterThan(0);
    entries.forEach((entry) => {
      expect(entry.url.startsWith(SITE_URL)).toBe(true);
      expect(entry.url).toMatch(/\/$/);
    });
  });

  test("includes the static pages flagged in Search Console", () => {
    const urls = sitemap().map((entry) => entry.url);

    expect(urls).toContain(`${SITE_URL}/terms/`);
    expect(urls).toContain(`${SITE_URL}/contact/`);
    expect(urls).toContain(`${SITE_URL}/`);
  });

  test("includes every blog post", () => {
    const urls = sitemap().map((entry) => entry.url);
    const posts = getAllBlogPosts();

    posts.forEach((post) => {
      expect(urls).toContain(`${SITE_URL}/blog/${post.id}/`);
    });
  });
});
