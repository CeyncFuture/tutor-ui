import React, { useState, useEffect } from 'react';

const Timer = ({callback}) => {
  const getInitialTime = () => {
    const savedTime = sessionStorage.getItem('timer');
    return savedTime && savedTime !== 0 ? parseInt(savedTime, 10) : 300;
  };
  const [time, setTime] = useState(getInitialTime);

  useEffect(() => {
    if (time > 0) {
      sessionStorage.setItem('timer', time-1);
      const timerId = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);

      return () => clearInterval(timerId);
    } else {
      callback();
    }
  }, [time]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div>{formatTime(time)}</div>
  );
}

export default Timer;
