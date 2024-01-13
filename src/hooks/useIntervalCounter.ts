import React, { useState, useEffect } from "react";

const useIntervalCounter = (initVal: number, interval: number, max: number) => {
  const [count, setCount] = useState(initVal || 0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => (prevCount + 1) % max);
    }, interval);

    return () => {
      clearInterval(intervalId);
    };
  }, [count]);

  return count;
};

export default useIntervalCounter;
