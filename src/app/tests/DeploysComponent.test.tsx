import "@testing-library/jest-dom";
import {describe, test} from "@jest/globals";
import {render, screen} from "@testing-library/react";
import DeploysComponent from "@/app/components/DeploysComponent";

describe("DeploysComponent", () => {
  test("contact CTA links use a trailing slash to avoid redirect chains", () => {
    render(<DeploysComponent />);

    const contactLinks = screen.getAllByRole("link", {name: /contact|consultation/i})
      .filter((link) => link.getAttribute("href")?.startsWith("/contact"));

    expect(contactLinks.length).toBeGreaterThan(0);
    contactLinks.forEach((link) => {
      expect(link).toHaveAttribute("href", "/contact/");
    });
  });
});
