import React, { useRef, useState } from "react";

export default function StopwatchRef() {
  const [time, setTime] = useState(0);
  const timerRef = useRef(null); 

  const startTimer = () => {
    if (timerRef.current) return;

    timerRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
    setTime(0);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-xl rounded-xl">
      <h2 className="text-2xl font-bold text-center mb-4">Stopwatch (useRef)</h2>

      <p className="text-center text-3xl font-semibold mb-6">{time}s</p>

      <div className="flex justify-center gap-3">
        <button
          onClick={startTimer}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Start
        </button>

        <button
          onClick={stopTimer}
          className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700"
        >
          Stop
        </button>

        <button
          onClick={resetTimer}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
