import React from "react";
import { useTimer } from "react-timer-hook";

function MyTimer({ expiryTimestamp }) {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning, // This flag can be used to hide the timer when it expires
  } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  const formatTime = (value) => (value < 10 ? `0${value}` : value);

  if (!isRunning) {
    return null; // Hide the timer when it expires if needed
  }

  return (
    <>
      <div className="counter-timer">
        <div className="hurry-up d-flex align-items-center">
          <h6>Hurry Up! Offer ends in </h6>
          <img
            src="https://media4.giphy.com/media/ujpaHBFQxnZIALTObQ/giphy.gif"
            alt=""
          />
          <img
            src="https://media4.giphy.com/media/ujpaHBFQxnZIALTObQ/giphy.gif"
            alt=""
          />
        </div>

        <div className="d-flex align-items-center">
          <div className="counter">
            <h1>{days}</h1>
            <p className="label">Days</p>
          </div>
          :
          <div className="counter">
            <h1>{formatTime(hours)}</h1>
            <p className="label">Hours</p>
          </div>
          :
          <div className="counter">
            <h1>{formatTime(minutes)}</h1>
            <p className="label">Minutes</p>
          </div>
          :
          <div className="counter">
            <h1>{formatTime(seconds)}</h1>
            <p className="label">Seconds</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default function CountDown() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 455000); // 10 minutes timer

  return (
    <div className="mb-4">
      <MyTimer expiryTimestamp={time} />
    </div>
  );
}
