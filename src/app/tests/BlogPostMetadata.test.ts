import { describe, test, expect, jest, beforeAll } from "@jest/globals";
import type { generateMetadata as GenerateMetadata } from "@/app/blog/[id]/page";

describe("blog post generateMetadata", () => {
  let generateMetadata: typeof GenerateMetadata;

  beforeAll(async () => {
    jest.doMock("@/lib/blogs", () => ({
      getBlogPost: jest.fn(() =>
        Promise.resolve({
          id: "test-post",
          title: "Do You Really Need Kubernetes?",
          date: "2026-06-28",
          content: "# Do you really need Kubernetes?\n\nMost teams reach for Kubernetes before they've outgrown a simpler setup, and pay for it in complexity for years.",
          image: null,
        })
      ),
      getAdjacentBlogPosts: jest.fn(() => ({ previous: null, next: null })),
      getAllBlogPosts: jest.fn(() => []),
    }));

    ({ generateMetadata } = await import("@/app/blog/[id]/page"));
  });

  test("builds a unique title and description from the post content", async () => {
    const metadata = await generateMetadata({ params: Promise.resolve({ id: "test-post" }) });

    expect(metadata.title).toBe("Do You Really Need Kubernetes? | Neil Millard");
    expect(metadata.description).toContain("Most teams reach for Kubernetes");
    expect(metadata.description).not.toContain("#");
    expect((metadata.description as string).length).toBeLessThanOrEqual(160);
  });

  test("falls back to the site default og:image when the post has no image", async () => {
    const metadata = await generateMetadata({ params: Promise.resolve({ id: "test-post" }) });

    expect(metadata.openGraph?.images).toEqual([
      expect.objectContaining({ url: "/img/2024-03-14-DevOps_Excellence_Awards_NeilMillard_Large.jpg" }),
    ]);
  });
});

describe("blog post generateMetadata with a frontmatter image", () => {
  let generateMetadata: typeof GenerateMetadata;

  beforeAll(async () => {
    jest.resetModules();
    jest.doMock("@/lib/blogs", () => ({
      getBlogPost: jest.fn(() =>
        Promise.resolve({
          id: "test-post-with-image",
          title: "Kubernetes vs ECS",
          date: "2026-06-28",
          content: "Some content with no inline images.",
          image: "/img/kubernetes-vs-ecs.png",
        })
      ),
      getAdjacentBlogPosts: jest.fn(() => ({ previous: null, next: null })),
      getAllBlogPosts: jest.fn(() => []),
    }));

    ({ generateMetadata } = await import("@/app/blog/[id]/page"));
  });

  test("uses the post's frontmatter image for og:image", async () => {
    const metadata = await generateMetadata({ params: Promise.resolve({ id: "test-post-with-image" }) });

    expect(metadata.openGraph?.images).toEqual([
      expect.objectContaining({ url: "/img/kubernetes-vs-ecs.png" }),
    ]);
  });
});

describe("blog post generateMetadata with an inline content image", () => {
  let generateMetadata: typeof GenerateMetadata;

  beforeAll(async () => {
    jest.resetModules();
    jest.doMock("@/lib/blogs", () => ({
      getBlogPost: jest.fn(() =>
        Promise.resolve({
          id: "test-post-with-inline-image",
          title: "A Post With An Inline Image",
          date: "2026-06-28",
          content: "Intro text.\n\n![a diagram](/img/diagram.png)\n\nMore text.",
          image: null,
        })
      ),
      getAdjacentBlogPosts: jest.fn(() => ({ previous: null, next: null })),
      getAllBlogPosts: jest.fn(() => []),
    }));

    ({ generateMetadata } = await import("@/app/blog/[id]/page"));
  });

  test("falls back to the first image found in the post content", async () => {
    const metadata = await generateMetadata({ params: Promise.resolve({ id: "test-post-with-inline-image" }) });

    expect(metadata.openGraph?.images).toEqual([
      expect.objectContaining({ url: "/img/diagram.png" }),
    ]);
  });
});
