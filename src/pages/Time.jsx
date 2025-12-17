import React, { useEffect, useRef, useState } from "react";

export default function Time() {
  const START_DAYS = 7;
  const INITIAL_TIME = START_DAYS * 24 * 59 * 59 * 1000;

  const [time, setTime] = useState(INITIAL_TIME);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTime((prev) => {
        if (prev <= 10) {
          clearInterval(timerRef.current);
          return 0;
        }
        return prev - 10;
      });
    }, 10);

    return () => clearInterval(timerRef.current);
  }, []);

  const days = Math.floor(time / (24 * 60 * 60 * 1000));
  const hours = Math.floor((time % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
  const minutes = Math.floor((time % (60 * 60 * 1000)) / (60 * 1000));
  const seconds = Math.floor((time % (60 * 1000)) / 1000);

  return (
    <div className="bg-white-200 text-black text-center py-2 text-sm font-semibold shadow-md">
       🔥 Limited Time Sale Ends In: {" "}
      {days}d : {hours}h : {minutes}m : {seconds}s 
    </div>
  );
}

