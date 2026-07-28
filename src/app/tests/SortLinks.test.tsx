import "@testing-library/jest-dom";
import {describe, test} from "@jest/globals";
import {render, screen} from "@testing-library/react";
import SortLinks from "@/app/components/blog/SortLinks";

jest.mock("next/link", () => {
  return {
    __esModule: true,
    default: ({href, children, ...rest}: {href: string; children: React.ReactNode}) => (
      <a href={href} {...rest}>{children}</a>
    ),
  };
});

describe("SortLinks", () => {
  test("newest and oldest links use a trailing slash", () => {
    render(<SortLinks currentSort="newest" />);

    expect(screen.getByText("Newest First")).toHaveAttribute("href", "/blog/newest/");
    expect(screen.getByText("Oldest First")).toHaveAttribute("href", "/blog/oldest/");
  });
});
