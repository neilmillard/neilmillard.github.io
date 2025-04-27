import "@testing-library/jest-dom";
import { describe, test } from "@jest/globals";
import { cleanup, render, screen } from "@testing-library/react";
import HomePage from "@/app/page";

describe("HomePage", () => {
  test("renders without crashing", () => {
    render(<HomePage />);

    // Check if the main heading is rendered
    expect(screen.getByText("I am Neil. How can I help you today?")).toBeInTheDocument();

    // Check if the services section is rendered
    expect(screen.getByText("Services")).toBeInTheDocument();

    // Check if some of the services are rendered
    expect(screen.getByText("Build knowledge")).toBeInTheDocument();
    expect(screen.getByText("Train your team")).toBeInTheDocument();

    cleanup();
  });

  test("displays Neil's background information", () => {
    render(<HomePage />);

    // Check if the background information is rendered
    expect(screen.getByText(/With over 20 years IT experience/)).toBeInTheDocument();
    expect(screen.getByText(/Neil Millard is a successful entrepreneur/)).toBeInTheDocument();

    cleanup();
  });
});
