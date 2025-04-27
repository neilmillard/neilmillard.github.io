import "@testing-library/jest-dom";
import { describe, test } from "@jest/globals";
import { cleanup, render, screen } from "@testing-library/react";
import ClockPage from "@/app/clock/page";

// Mock the ClockComponent to avoid testing its internals
jest.mock("@/app/components/ClockComponent", () => {
  return function MockClockComponent() {
    return <div data-testid="clock-component">Clock Component Mock</div>;
  };
});

describe("ClockPage", () => {
  test("renders without crashing", () => {
    render(<ClockPage />);

    // Check if the ClockComponent is rendered
    expect(screen.getByTestId("clock-component")).toBeInTheDocument();

    cleanup();
  });
});
