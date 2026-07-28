import "@testing-library/jest-dom";
import {describe, test} from "@jest/globals";
import {render, screen} from "@testing-library/react";
import BlogNewest from "@/app/blog/newest/page";
import BlogOldest from "@/app/blog/oldest/page";

jest.mock("next/link", () => {
  return {
    __esModule: true,
    default: ({href, children, ...rest}: {href: string; children: React.ReactNode}) => (
      <a href={href} {...rest}>{children}</a>
    ),
  };
});

describe("blog listing pages", () => {
  test("newest listing links to each post with a trailing slash", () => {
    render(<BlogNewest />);

    const postLinks = screen.getAllByRole("link").filter((link) => {
      const href = link.getAttribute("href") ?? "";
      return href.startsWith("/blog/") && href !== "/blog/newest/" && href !== "/blog/oldest/";
    });

    expect(postLinks.length).toBeGreaterThan(0);
    postLinks.forEach((link) => {
      expect(link.getAttribute("href")).toMatch(/\/$/);
    });
  });

  test("oldest listing links to each post with a trailing slash", () => {
    render(<BlogOldest />);

    const postLinks = screen.getAllByRole("link").filter((link) => {
      const href = link.getAttribute("href") ?? "";
      return href.startsWith("/blog/") && href !== "/blog/newest/" && href !== "/blog/oldest/";
    });

    expect(postLinks.length).toBeGreaterThan(0);
    postLinks.forEach((link) => {
      expect(link.getAttribute("href")).toMatch(/\/$/);
    });
  });
});
