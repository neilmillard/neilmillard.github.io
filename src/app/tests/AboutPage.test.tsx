import "@testing-library/jest-dom";
import { describe, test } from "@jest/globals";
import { cleanup, render, screen } from "@testing-library/react";
import AboutPage from "@/app/about/page";

// Mock the AboutComponent to avoid testing its internals again
jest.mock("@/app/components/AboutComponent", () => {
  return function MockAboutComponent() {
    return <div data-testid="about-component">About Component Mock</div>;
  };
});

describe("AboutPage", () => {
  test("renders without crashing", () => {
    render(<AboutPage />);

    // Check if the AboutComponent is rendered
    expect(screen.getByTestId("about-component")).toBeInTheDocument();

    cleanup();
  });
});
