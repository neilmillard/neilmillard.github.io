import "@testing-library/jest-dom";
import { describe, test } from "@jest/globals";
import {cleanup, fireEvent, render, screen} from "@testing-library/react";
import ClockPage from "@/app/clock/page";

// Mock the ClockComponent to avoid testing its internals
jest.mock("@/app/components/ClockComponent", () => {
  return function MockClockComponent() {
    return <div data-testid="clock-component">Clock Component Mock</div>;
  };
});

jest.mock("@/app/components/TimerComponent", () => {
  return function MockTimerComponent() {
    return <div data-testid="timer-component">Timer Component Mock</div>;
  };
});

describe("ClockPage", () => {
  test("renders without crashing", () => {
    render(<ClockPage />);

    // Check if the ClockComponent is rendered
    expect(screen.getByTestId("clock-component")).toBeInTheDocument();

    cleanup();
  });

  test('displays buttons for clock and timer', () => {
    render(<ClockPage />);

    expect(screen.getByText('Clock')).toBeInTheDocument();
    expect(screen.getByText('Timer')).toBeInTheDocument();
  });

  test('timer is displayed when timer button is clicked', () => {
    render(<ClockPage />);

    expect(screen.getByText('Timer')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Timer'));

    expect(screen.getByTestId("timer-component")).toBeInTheDocument();
  })
});
