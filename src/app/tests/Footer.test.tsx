import "@testing-library/jest-dom";
import {describe, test} from "@jest/globals";
import {cleanup, render, screen} from "@testing-library/react";
import {Footer} from "@/app/components/Footer";

describe("Footer", () => {
  test("displays the copyright notice with the current end year", () => {
    render(<Footer />);

    expect(screen.getByText("© 2017-2026 Neil Millard")).toBeInTheDocument();

    cleanup();
  });

  test("internal links use a trailing slash to avoid redirect chains", () => {
    render(<Footer />);

    expect(screen.getByText("Privacy Policy")).toHaveAttribute("href", "/privacy/");
    expect(screen.getByText("Terms of Service")).toHaveAttribute("href", "/terms/");
    expect(screen.getByText("Contact Us")).toHaveAttribute("href", "/contact/");

    cleanup();
  });
});
