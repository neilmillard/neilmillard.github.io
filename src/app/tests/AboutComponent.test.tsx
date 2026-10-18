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

    // Check the Name / Same / Fame / Game bio is present
    expect(screen.getByText(/I’m Neil Millard, a DevOps and platform engineer/i)).toBeInTheDocument();
    expect(screen.getByText(/building cloud infrastructure that runs itself/i)).toBeInTheDocument();
    expect(screen.getByText(/Barclays, HMRC and AXA/i)).toBeInTheDocument();
    expect(screen.getByText(/bringing that enterprise-grade experience to startups and SMEs/i)).toBeInTheDocument();

    // The old self-claimed status lines are gone
    expect(screen.queryByText(/successful entrepreneur/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/recognised expert/i)).not.toBeInTheDocument();

    cleanup();
  });
});
