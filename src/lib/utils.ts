// Clock utility functions
export type ClockDisplay = {
  time: string,
  date: string
}

export function getTimeString(displayHour: string | number, displayMin: string | number, displaySec: string | number) {
  return displayHour + ":" + displayMin + ":" + displaySec;
}

function getDateString(weekdays: string[], time: Date, months: string[]) {
  return weekdays[time.getDay()] + " " + time.getDate() + " " + months[time.getMonth()];
}

export function getTwoDigitDisplay(data: number) {
  return data < 10 ? "0" + data : data;
}

/**
 * Formats the current time in 12-hour format and returns the formatted time and date strings
 * @returns {Object} Object containing formatted time and date strings
 */
export function formatClockDisplay(): ClockDisplay {
  const time = new Date();
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const hours = getTwoDigitDisplay(time.getHours())
  const minutes = getTwoDigitDisplay(time.getMinutes());
  const seconds = getTwoDigitDisplay(time.getSeconds());

  const timeString = getTimeString(hours, minutes, seconds);
  const dateString = getDateString(weekdays, time, months);

  return {
    time: timeString,
    date: dateString
  };
}

export function formatTimerDisplay(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  const displayHour = getTwoDigitDisplay(hours);
  const displayMin = getTwoDigitDisplay(minutes);
  const displaySec = getTwoDigitDisplay(secs);

  return getTimeString(displayHour, displayMin, displaySec);
}
