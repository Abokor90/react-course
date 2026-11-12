import { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      console.log("Tick");
      setSeconds((s) => s + 1);
    }, 1000);

    // CLEAN UP: this returned function runs when the component goes away.
    // It stops the timer, so it doesn't keep running in the background.
    return () => {
      clearInterval(id);
    };
  }, []);

  return <p>Seconds: {seconds}</p>
}

export default Timer;