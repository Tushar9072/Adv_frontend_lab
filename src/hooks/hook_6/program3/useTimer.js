import { useState, useEffect, useDebugValue } from "react";

export default function useTimer() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useDebugValue(running ? "Timer: Running" : "Timer: Stopped");

  useEffect(() => {
    if (!running) return;

    const id = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);

    return () => clearInterval(id);
  }, [running]);

  const start = () => setRunning(true);
  const stop = () => setRunning(false);
  const reset = () => setSeconds(0);

  return { seconds, running, start, stop, reset };
}
