import { useState, useEffect } from 'react';

const useGoalTimer = (initialTime = 0) => {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning && time > 0) {
      intervalId = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      setIsRunning(false);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isRunning, time]);

  const startTimer = (duration) => {
    setTime(duration);
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setTime(initialTime);
    setIsRunning(false);
  };

  return {
    time,
    isRunning,
    startTimer,
    pauseTimer,
    resetTimer
  };
};

export default useGoalTimer; 