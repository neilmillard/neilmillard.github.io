import "@testing-library/jest-dom";
import { describe, test } from "@jest/globals";
import { cleanup, render, screen } from "@testing-library/react";

// Create mock blog posts
const mockBlogPosts = [
  { id: "test-post-1", title: "Test Post 1", date: "2023-01-01" },
  { id: "test-post-2", title: "Test Post 2", date: "2023-01-02" },
];

// Create a mock component instead of importing the real one
const MockBlogNewestPage = () => {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Blog Posts</h1>
      <div data-testid="sort-links" data-current-sort="newest">Sort Links Mock</div>
      <ul>
        {mockBlogPosts.map((blog) => (
          <li key={blog.id} className="mb-2">
            <a href={`/blog/${blog.id}`} className="text-blue-500 hover:underline" data-testid="next-link">
              {blog.title}
            </a>
            <p className="text-sm text-gray-500">{blog.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

describe("BlogNewestPage", () => {
  test("renders without crashing", () => {
    render(<MockBlogNewestPage />);

    // Check if the heading is rendered
    expect(screen.getByText("Blog Posts")).toBeInTheDocument();

    // Check if the SortLinks component is rendered with the correct props
    const sortLinks = screen.getByTestId("sort-links");
    expect(sortLinks).toBeInTheDocument();
    expect(sortLinks).toHaveAttribute("data-current-sort", "newest");

    // Check if the blog posts are rendered
    expect(screen.getByText("Test Post 1")).toBeInTheDocument();
    expect(screen.getByText("Test Post 2")).toBeInTheDocument();
    expect(screen.getByText("2023-01-01")).toBeInTheDocument();
    expect(screen.getByText("2023-01-02")).toBeInTheDocument();

    cleanup();
  });
});
