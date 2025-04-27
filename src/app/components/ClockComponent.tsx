'use client';
import {useEffect, useState} from "react";

export default function ClockComponent() {
  const [displayTime, setDisplayTime] = useState<string>("00:00:00");
  const [displayDate, setDisplayDate] = useState<string>("Sunday 1 Jan");

  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

  function updateClockDisplay() {
    const time = new Date()
    // Setting time for 12 Hrs format
    let hour = time.getHours()
    if (hour > 12) hour -= 12;
    if (hour === 0) hour = 12;
    const min = time.getMinutes();
    const sec = time.getSeconds();

    const displayHour = hour < 10 ? "0" + hour : hour;
    const displayMin = min < 10 ? "0" + min : min;
    const displaySec = sec < 10 ? "0" + sec : sec;

    setDisplayTime(displayHour + ":" + displayMin + ":" + displaySec);

    setDisplayDate(weekdays[time.getDay()] + " " + time.getDate() + " " + months[time.getMonth()]);
  }

  useEffect(() => {
    updateClockDisplay();
    const interval = setInterval(() => updateClockDisplay(), 1000);
    return () => {
      clearInterval(interval);
    }
  }, []);


  return (
    <div className="h-full text-center flex flex-col items-center mt-10">
      <div className="py-10 px-20 my-10 w-2xl text-9xl text-slate-800 rounded-lg border-2 border-slate-400">{displayTime}</div>
      <div className="text-6xl text-slate-600">{displayDate}</div>
    </div>
  );
}
