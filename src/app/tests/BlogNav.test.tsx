import "@testing-library/jest-dom";
import {describe, test} from "@jest/globals";
import {render, screen} from "@testing-library/react";
import {BlogNav} from "@/app/components/blog/BlogNav";

// next/link normalizes trailing slashes at build time via config that isn't
// wired up under jest, so mock it to a plain <a> and assert on the href we
// actually pass in — that's the part this codebase controls.
jest.mock("next/link", () => {
  return {
    __esModule: true,
    default: ({href, children, ...rest}: {href: string; children: React.ReactNode}) => (
      <a href={href} {...rest}>{children}</a>
    ),
  };
});

describe("BlogNav", () => {
  test("previous, next and blog index links use a trailing slash", () => {
    render(
      <BlogNav
        previous={{id: "prev-post", title: "Previous Post", date: "2022-12-31"}}
        next={{id: "next-post", title: "Next Post", date: "2023-01-02"}}
      />
    );

    expect(screen.getByText(/Previous Post/)).toHaveAttribute("href", "/blog/prev-post/");
    expect(screen.getByText(/Next Post/)).toHaveAttribute("href", "/blog/next-post/");
    // Go straight to the canonical listing, not through the /blog/ redirect page
    expect(screen.getByText("Blog")).toHaveAttribute("href", "/blog/newest/");
  });
});
