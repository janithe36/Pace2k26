import React, { useState, useEffect } from "react";

const COUNTDOWN_TARGET = new Date("2026-02-26T23:59:59");

const getTimeLeft = () => {
  const totalTimeLeft = COUNTDOWN_TARGET - new Date();
  const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((totalTimeLeft / 1000) % 60);
  return { days, hours, minutes, seconds };
};

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="font-[Genos] bg-black flex flex-col  hero5-container justify-center items-center">
      <h2 className="text-white text-4xl font-bold mb-6">Pace 2K26</h2>
      <h2 className="text-white text-5xl font-bold mb-6">26 February 2026</h2>
      <div className="flex justify-center items-center gap-6 bg-black border-2 border-blue-200 bg-opacity-30 backdrop-blur-md rounded-lg p-8 shadow-lg">
        <div className="flex flex-col items-center text-white">
          <div className="text-6xl font-bold">{timeLeft.days} :</div>
          <div className="text-lg font-medium">Days</div>
        </div>

        <div className="flex flex-col items-center text-white">
          <div className="text-6xl font-bold">{timeLeft.hours} :</div>
          <div className="text-lg font-medium">Hours</div>
        </div>

        <div className="flex flex-col items-center text-white">
          <div className="text-6xl font-bold">{timeLeft.minutes} :</div>
          <div className="text-lg font-medium">Minutes</div>
        </div>

        <div className="flex flex-col items-center text-yellow-500">
          <div className="text-6xl font-bold">{timeLeft.seconds}</div>
          <div className="text-lg font-medium">Seconds</div>
        </div>
      </div>
      <style jsx>{`
        /* Phone View (Below 500px) */
        @media (max-width: 500px) {
          .hero5-container {
            width: 150%;
            height: 200%;
          }
        }
      `}</style>
    </div>
  );
};

export default Countdown;
