import { useState, useEffect } from "react";

export default function ProgressBar({ timer, onTimeout ,mode}) {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    console.log("SETTING TIMEOUT");
    const timeout = setTimeout(onTimeout, timer);

    return () => {
      clearTimeout(timeout);
    };
  }, [onTimeout, timer]);

  useEffect(() => {
    console.log("SETTING INTERVAL");
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress id="question-time" value={remainingTime} max={timer} className={mode} />;
}
