"use client";
import ClockComponent from "@/app/components/ClockComponent";
import {useState} from "react";
import TimerComponent from "@/app/components/TimerComponent";

export default function Clock() {
  const [isTimerMode, setIsTimerMode] = useState<boolean>(false);
  const handleClockMode = () => {
    setIsTimerMode(false);
  }
  const handleTimerMode = () => {
    setIsTimerMode(true);
  }
  const clockButtonReadyClass = isTimerMode ? "bg-green-500 hover:bg-green-600" : "bg-gray-500 hover:bg-gray-600";
  const timerButtonReadyClass = isTimerMode ? "bg-gray-500 hover:bg-gray-600" : "bg-green-500 hover:bg-green-600";

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="flex space-x-4 pt-4">
        <button
          className={timerButtonReadyClass + " text-white font-bold py-2 px-8 rounded-lg text-xl"}
          onClick={handleClockMode}
        >
          Clock
        </button>
        <button
          className={clockButtonReadyClass + " text-white font-bold py-2 px-8 rounded-lg text-xl"}
          onClick={handleTimerMode}
        >
          Timer
        </button>
      </div>
      {!isTimerMode ? (
        <ClockComponent/>
      ) : (
        <TimerComponent/>
      )}
    </div>
  )
}
