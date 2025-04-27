import { formatClockDisplay } from '@/lib/utils';

describe('formatClockDisplay', () => {
  test('returns an object with time and date properties', () => {
    // Mock Date to return a fixed date for testing
    const mockDate = new Date(2023, 0, 15, 10, 30, 45); // Jan 15, 2023, 10:30:45
    const originalDate = global.Date;
    global.Date = jest.fn(() => mockDate) as any;

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

  test('handles hour conversion for PM times', () => {
    // Mock Date to return a fixed PM time
    const mockDate = new Date(2023, 0, 15, 15, 5, 10); // Jan 15, 2023, 15:05:10 (3:05:10 PM)
    const originalDate = global.Date;
    global.Date = jest.fn(() => mockDate) as any;

    const result = formatClockDisplay();

    // Restore original Date
    global.Date = originalDate;

    // Check that 15 hours is converted to 3 (PM) with leading zero for minutes and seconds
    expect(result.time).toBe('03:05:10');
  });

  test('handles midnight (0 hour) correctly', () => {
    // Mock Date to return midnight
    const mockDate = new Date(2023, 0, 15, 0, 5, 10); // Jan 15, 2023, 00:05:10
    const originalDate = global.Date;
    global.Date = jest.fn(() => mockDate) as any;

    const result = formatClockDisplay();

    // Restore original Date
    global.Date = originalDate;

    // Check that 0 hours is converted to 12 (midnight)
    expect(result.time).toBe('12:05:10');
  });
});
