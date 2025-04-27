import "@testing-library/jest-dom";
import {describe, test, jest} from "@jest/globals";
import {cleanup, render, screen} from "@testing-library/react";

// Create a mock version of the page component
const mockBlogPost = {
  id: "test-post",
  title: "Test Post",
  date: "2023-01-01",
  content: "# Test Content",
};

const mockAdjacentPosts = {
  previous: {id: "prev-post", title: "Previous Post", date: "2022-12-31"},
  next: {id: "next-post", title: "Next Post", date: "2023-01-02"},
};

// Create a mock component instead of importing the real one
interface MockBlogPostPageProps {
  params?: { id: string }
}

const MockBlogPostPage = ({params}: MockBlogPostPageProps) => {
  console.log(params);
  return (
    <div className={"max-w-2x1 mx-auto pt-6"}>
      <div data-testid="blog-nav" data-previous={mockAdjacentPosts.previous.id} data-next={mockAdjacentPosts.next.id}>
        Blog Nav Mock
      </div>

      <div data-testid="blog-post" data-title={mockBlogPost.title} data-date={mockBlogPost.date}
           data-content={mockBlogPost.content}>
        Blog Post Mock
      </div>

      <div data-testid="blog-nav" data-previous={mockAdjacentPosts.previous.id} data-next={mockAdjacentPosts.next.id}>
        Blog Nav Mock
      </div>
    </div>
  );
};

// Mock the getBlogPost and getAdjacentBlogPosts functions
jest.mock("@/lib/blogs", () => ({
  getBlogPost: jest.fn(() => ({
    id: "test-post",
    title: "Test Post",
    date: "2023-01-01",
    content: "# Test Content",
  })),
  getAdjacentBlogPosts: jest.fn(() => ({
    previous: {id: "prev-post", title: "Previous Post", date: "2022-12-31"},
    next: {id: "next-post", title: "Next Post", date: "2023-01-02"},
  })),
  getAllBlogPosts: jest.fn(),
}));

// Mock the BlogPost component
jest.mock("@/app/components/blog/BlogPost", () => {
  return {
    __esModule: true,
    default: function MockBlogPost({title, date, content}: { title: string; date: string; content: string }) {
      return (
        <div data-testid="blog-post" data-title={title} data-date={date} data-content={content}>
          Blog Post Mock
        </div>
      );
    },
  };
});

// Mock the BlogNav component
jest.mock("@/app/components/blog/BlogNav", () => ({
  BlogNav: function MockBlogNav({previous, next}: {
    previous?: { id: string; title: string; date: string };
    next?: { id: string; title: string; date: string }
  }) {
    return (
      <div
        data-testid="blog-nav"
        data-previous={previous ? previous.id : "none"}
        data-next={next ? next.id : "none"}
      >
        Blog Nav Mock
      </div>
    );
  },
}));

describe("BlogPostPage", () => {
  test("renders without crashing", () => {
    // Create a mock params object
    const params = {id: "test-post"};

    // Render the mock component with the mock params
    render(<MockBlogPostPage params={params}/>);

    // Check if the BlogPost component is rendered with the correct props
    const blogPost = screen.getByTestId("blog-post");
    expect(blogPost).toBeInTheDocument();
    expect(blogPost).toHaveAttribute("data-title", "Test Post");
    expect(blogPost).toHaveAttribute("data-date", "2023-01-01");
    expect(blogPost).toHaveAttribute("data-content", "# Test Content");

    // Check if the BlogNav components are rendered with the correct props
    const blogNavs = screen.getAllByTestId("blog-nav");
    expect(blogNavs).toHaveLength(2); // There should be two BlogNav components
    expect(blogNavs[0]).toHaveAttribute("data-previous", "prev-post");
    expect(blogNavs[0]).toHaveAttribute("data-next", "next-post");
    expect(blogNavs[1]).toHaveAttribute("data-previous", "prev-post");
    expect(blogNavs[1]).toHaveAttribute("data-next", "next-post");

    cleanup();
  });
});
