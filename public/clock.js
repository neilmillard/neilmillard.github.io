// Calling showTime function at every second
setInterval(showTime, 1000);

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
// Defining showTime function
function showTime() {
  // Getting current time and date
  let time = new Date();
  let weekday = weekdays[time.getDay()];
  let date = time.getDate();
  let month = months[time.getMonth()];
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();

  // Setting time for 12 Hrs format
  if (hour >= 12) {
      if (hour > 12) hour -= 12;
  } else if (hour === 0) {
      hour = 12;
  }

  // leading 0 padding
  hour =
      hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  // Displaying the time
    document.getElementById(
        "clock"
    ).innerHTML = hour +
      ":" +
      min +
      ":" +
      sec;
    document.getElementById(
      "date"
    ).innerHTML = weekday +
      " " +
      date +
      " " +
      month;
}

showTime();
