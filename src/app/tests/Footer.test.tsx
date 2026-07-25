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
});
