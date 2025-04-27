// Clock utility functions

/**
 * Formats the current time in 12-hour format and returns the formatted time and date strings
 * @returns {Object} Object containing formatted time and date strings
 */
export function formatClockDisplay() {
  const time = new Date();
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  // Setting time for 12 Hrs format
  let hour = time.getHours();
  if (hour > 12) hour -= 12;
  if (hour === 0) hour = 12;
  const min = time.getMinutes();
  const sec = time.getSeconds();

  const displayHour = hour < 10 ? "0" + hour : hour;
  const displayMin = min < 10 ? "0" + min : min;
  const displaySec = sec < 10 ? "0" + sec : sec;

  const timeString = displayHour + ":" + displayMin + ":" + displaySec;
  const dateString = weekdays[time.getDay()] + " " + time.getDate() + " " + months[time.getMonth()];

  return {
    time: timeString,
    date: dateString
  };
}
