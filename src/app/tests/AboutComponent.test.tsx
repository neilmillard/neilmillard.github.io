import "@testing-library/jest-dom";
import {describe, test} from "@jest/globals";
import {cleanup, render, screen} from "@testing-library/react";
import AboutComponent from "@/app/components/AboutComponent";

describe("AboutComponent", () => {
  test("renders without crashing", () => {
    render(<AboutComponent />);

    // Check if the heading is rendered
    expect(screen.getByText("About Neil")).toBeInTheDocument();

    cleanup();
  });

  test("displays the image with correct attributes", () => {
    render(<AboutComponent />);

    // Check if the image is rendered with correct alt text
    const image = screen.getByAltText("Neil Millard speaking");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", expect.stringContaining("/img/neil_millard_speaking"));

    cleanup();
  });

  test("contains biographical text", () => {
    render(<AboutComponent />);

    // Check if the biographical text is present
    expect(screen.getByText(/Neil's mission is to make life and work, FUN/i)).toBeInTheDocument();
    expect(screen.getByText(/Business too, is a team sport/i)).toBeInTheDocument();
    expect(screen.getByText(/Neil Millard is a successful entrepreneur, speaker and trainer/i)).toBeInTheDocument();

    cleanup();
  });
});
