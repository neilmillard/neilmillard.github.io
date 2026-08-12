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
});
