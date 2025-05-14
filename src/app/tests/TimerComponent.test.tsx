import {describe} from "@jest/globals";
import {fireEvent, render, screen} from "@testing-library/react";
import '@testing-library/jest-dom';
import TimerComponent from "@/app/components/TimerComponent";
import {act} from "react";

describe('TimerComponent', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('renders the timer with defaults', () => {
    render(<TimerComponent />);

    const timerDisplay = screen.getByText('00:00:00');
    expect(timerDisplay).toBeInTheDocument();

    expect(screen.getByText('Start')).toBeInTheDocument();
    expect(screen.getByText('Reset')).toBeInTheDocument();
  });

  test('clicking start changes to pause button', () => {
    render(<TimerComponent />);

    // Initial state should have a Start button
    const startButton = screen.getByText('Start');
    expect(startButton).toBeInTheDocument();

    // After clicking Start, it should change to Pause
    fireEvent.click(startButton);
    expect(screen.queryByText('Start')).not.toBeInTheDocument();
    expect(screen.getByText('Pause')).toBeInTheDocument();
  });

  test('timer increments when started', () => {
    render(<TimerComponent />);

    fireEvent.click(screen.getByText('Start'));

    act(() => {
      jest.advanceTimersByTime(500);
    });

    expect(screen.getByText('00:00:50')).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(500);
    });

    expect(screen.getByText('00:01:00')).toBeInTheDocument();
  });

  test('timer stops when paused', () => {
    render(<TimerComponent />);

    fireEvent.click(screen.getByText('Start'));

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(screen.getByText('00:01:00')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Pause'));

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(screen.getByText('00:01:00')).toBeInTheDocument();
  })

  test('reset button resets the timer to 00:00:00', () => {
    render(<TimerComponent />);

    // Start the timer
    fireEvent.click(screen.getByText('Start'));

    // Fast forward time
    act(() => {
      jest.advanceTimersByTime(2000);
    });

    // Timer should now show 00:02:00 (2 seconds)
    expect(screen.getByText('00:02:00')).toBeInTheDocument();

    // Reset the timer
    fireEvent.click(screen.getByText('Reset'));

    // Timer should reset to 00:00:00
    expect(screen.getByText('00:00:00')).toBeInTheDocument();

    // And the Start button should be visible again
    expect(screen.getByText('Start')).toBeInTheDocument();
  });

  test('timer displays minutes correctly', () => {
    render(<TimerComponent />);

    // Start the timer
    fireEvent.click(screen.getByText('Start'));

    // Fast forward time to reach 1 minute (60000ms)
    act(() => {
      jest.advanceTimersByTime(60000);
    });

    // Timer should now show 01:00:00 (1 minute)
    expect(screen.getByText('01:00:00')).toBeInTheDocument();
  });
})
