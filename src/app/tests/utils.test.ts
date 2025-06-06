import { formatClockDisplay } from '@/lib/utils';

type DateConstructor = typeof Date;

describe('formatClockDisplay', () => {
  test('returns an object with time and date properties', () => {
    // Mock Date to return a fixed date for testing
    const mockDate = new Date(2023, 0, 15, 10, 30, 45); // Jan 15, 2023, 10:30:45
    const originalDate = global.Date;
    global.Date = jest.fn(() => mockDate) as unknown as DateConstructor;

    const result = formatClockDisplay();

    // Restore original Date
    global.Date = originalDate;

    // Check that the result has the expected structure
    expect(result).toHaveProperty('time');
    expect(result).toHaveProperty('date');

    // Check that the time is formatted correctly (10:30:45 in 12-hour format)
    expect(result.time).toBe('10:30:45');

    // Check that the date is formatted correctly (Sunday 15 January)
    expect(result.date).toBe('Sunday 15 January');
  });

  test('handles hour for PM times', () => {
    // Mock Date to return a fixed PM time
    const mockDate = new Date(2023, 0, 15, 15, 5, 10); // Jan 15, 2023, 15:05:10 (3:05:10 PM)
    const originalDate = global.Date;
    global.Date = jest.fn(() => mockDate) as unknown as DateConstructor;

    const result = formatClockDisplay();

    // Restore original Date
    global.Date = originalDate;

    expect(result.time).toBe('15:05:10');
  });

});
