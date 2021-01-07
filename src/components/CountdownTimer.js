import React, { useEffect, useState } from "react";

function CountdownTimer({ endDate, stakingDuration }) {
  const calculateTimeRemaining = () => {
    const diff = +new Date(endDate) - +new Date();

    let timeData = { timeRemaining: {} };

    if (diff > 0) {
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hrs = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const min = Math.floor((diff / 1000 / 60) % 60);
      const sec = Math.floor((diff / 1000) % 60);
      const percent = Math.floor((`${hrs}.${min}` / stakingDuration) * 100);
      timeData = {
        timeRemaining: { days, hrs, min, sec },
        percent,
      };
    }

    return timeData;
  };

  const [timeData, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    setTimeout(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);
  });

  const elements = [];

  const { timeRemaining } = timeData;

  Object.keys(timeRemaining).forEach((interval) => {
    if (!timeRemaining[interval]) {
      return;
    }

    elements.push(
      <div key={interval} className="flex flex-col items-center mx-2">
        <div className="font-mono text-2xl leading-none">
          {timeRemaining[interval]}
        </div>
        <div className="text-xs">{interval}</div>
      </div>
    );
  });
  return (
    <div className="bg-green-500 rounded">
      <div className="flex justify-around w-full px-4 py-2 text-white capitalize">
        {elements.length ? elements : <span>Time's up!</span>}
      </div>
      <div
        className="h-1 bg-green-300"
        style={{ width: `${timeData.percent}%` }}
      ></div>
    </div>
  );
}

export default CountdownTimer;
