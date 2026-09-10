import "@testing-library/jest-dom";
import {describe, test} from "@jest/globals";
import {render, screen} from "@testing-library/react";
import {NavBar} from "@/app/components/NavBar";

jest.mock("next/link", () => {
  return {
    __esModule: true,
    default: ({href, children, ...rest}: {href: string; children: React.ReactNode}) => (
      <a href={href} {...rest}>{children}</a>
    ),
  };
});

jest.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

jest.mock("@mantine/hooks", () => ({
  useViewportSize: () => ({width: 1024, height: 768}),
}));

describe("NavBar", () => {
  test("Blog nav link goes straight to the canonical listing, not the /blog/ redirect", () => {
    render(<NavBar />);

    expect(screen.getByText("Blog").closest("a")).toHaveAttribute("href", "/blog/newest/");
  });
});
