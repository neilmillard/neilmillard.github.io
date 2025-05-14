'use client';
import {useEffect, useState} from "react";
import {getTimeString, getTwoDigitDisplay} from "@/lib/utils";

export default function TimerComponent() {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [centiSeconds, setCentiSeconds] = useState<number>(0);
  const [displayTime, setDisplayTime] = useState<string>("00:00:00");

  function updateDisplayTime(centiSeconds: number) {
    const minutes = Math.floor(centiSeconds / 6000);
    const secs = Math.floor((centiSeconds % 6000) / 100);
    const centi = centiSeconds % 100;

    const displayMin = getTwoDigitDisplay(minutes);
    const displaySec = getTwoDigitDisplay(secs);
    const displayCenti = getTwoDigitDisplay(centi);
    const clockDisplay = getTimeString(displayMin, displaySec, displayCenti);
    setDisplayTime(clockDisplay);
  }

  useEffect(() => {
    updateDisplayTime(centiSeconds);
  }, [centiSeconds]);

  useEffect(() => {
    const intervalTimer = setInterval(() => {
      if (isActive) setCentiSeconds(centiSeconds => centiSeconds + 1);
    }, 10);

    return () => clearInterval(intervalTimer);
  }, [isActive]);

  const handleStart = () => {
    setIsActive(true);
  }

  const handlePause = () => {
    setIsActive(false);
  }

  const handleReset = () => {
    setIsActive(false);
    setCentiSeconds(0);
  }

  return (
    <div className="h-full text-center flex flex-col items-center mt-10">
      <div
        className="py-10 px-20 my-10 w-2xl text-9xl text-slate-800 rounded-lg border-2 border-slate-400">{displayTime}</div>
      <div className="flex space-x-4">
        {!isActive ? (
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-8 rounded-lg text-xl"
            onClick={handleStart}
          >
            Start
          </button>
        ) : (
          <button
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-8 rounded-lg text-xl"
            onClick={handlePause}
          >
            Pause
          </button>
        )}
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-8 rounded-lg text-xl"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
