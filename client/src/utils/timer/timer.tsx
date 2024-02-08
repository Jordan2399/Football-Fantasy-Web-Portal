"use client";

import React, { useState, useEffect } from "react";

interface ElapsedTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const ElapsedTimeCounter: React.FC<{ targetDate: string }> = ({
  targetDate,
}) => {
  const [elapsedTime, setElapsedTime] = useState<ElapsedTime>(
    calculateElapsedTime(targetDate)
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setElapsedTime(calculateElapsedTime(targetDate));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  return (
    <div>
      {targetDate && elapsedTime && (
        <p>
          {elapsedTime.days > 0 && `${elapsedTime.days} d `}
          {elapsedTime.hours > 0 && `${elapsedTime.hours} hr `}
          {elapsedTime.minutes && `${elapsedTime.minutes} min `}
          {elapsedTime.seconds && `${elapsedTime.seconds} sec`}
        </p>
      )}
    </div>
  );
};

const calculateElapsedTime = (targetDate: string): ElapsedTime => {
  const targetTime = new Date(targetDate).getTime();
  const currentTime = new Date().getTime();
  const elapsedTime = currentTime - targetTime;

  const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
  const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
  const hours = Math.floor(
    (elapsedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));

  return { days, hours, minutes, seconds };
};
