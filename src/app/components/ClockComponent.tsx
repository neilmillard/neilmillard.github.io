'use client';
import {useEffect, useState} from "react";
import {formatClockDisplay} from "@/lib/utils";

export default function ClockComponent() {
  const [displayTime, setDisplayTime] = useState<string>("00:00:00");
  const [displayDate, setDisplayDate] = useState<string>("Sunday 1 Jan");

  function updateClockDisplay() {
    const clockDisplay = formatClockDisplay();
    setDisplayTime(clockDisplay.time);
    setDisplayDate(clockDisplay.date);
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
