import React, { useState, useEffect } from "react";
import "./CountDown.css";
import timeBtn from "../../assets/time-btn.png";
import sound from "../../assets/sound.wav"

const CountDown = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [countDown, setCountDown] = useState(false);
  const [total, setTotal] = useState(0);
  const [timer, setTimer] = useState(null);
  const [audio] = useState(new Audio(sound));
  const [timerDisplay, setTimerDisplay] = useState("00:00:00");

  function startTimer() {
    let totalSeconds = hours * 3600 + minutes * 60 + seconds;
    setTotal(totalSeconds);

    setCountDown((prev) => !prev);

    let timer = setInterval(function () {
      let hoursLeft = Math.floor(totalSeconds / 3600);
      let minutesLeft = Math.floor((totalSeconds % 3600) / 60);
      let secondsLeft = totalSeconds % 60;

      hoursLeft = hoursLeft < 10 ? "0" + hoursLeft : hoursLeft;
      minutesLeft = minutesLeft < 10 ? "0" + minutesLeft : minutesLeft;
      secondsLeft = secondsLeft < 10 ? "0" + secondsLeft : secondsLeft;

      setHours(hoursLeft);
      setMinutes(minutesLeft);
      setSeconds(secondsLeft);
      setTimerDisplay(`${hoursLeft}:${minutesLeft}:${secondsLeft}`);

      if (totalSeconds === 0) {
        clearInterval(timer);
        setCountDown((prev) => !prev);

        // Audio
        audio.play();
        
        
      } else {
        totalSeconds--;
      }
    }, 1000);
    setTimer(timer);
  }

  function stopTimer() {
    clearInterval(timer);
    setCountDown((prev) => !prev);
  }



  const handleIncrease = (value) => {
    if (!countDown) {
      switch (value) {
        case "hours":
          hours < 23 && setHours((hours) => hours + 1);
          break;
        case "minutes":
          minutes < 59 && setMinutes((minutes) => minutes + 1);
          break;
        case "seconds":
          seconds < 59 && setSeconds((seconds) => seconds + 1);
          break;
        default:
          break;
      }
    }
  };

  const handleDecrease = (value) => {
    if (!countDown) {
      switch (value) {
        case "hours":
          hours > 0 && setHours((hours) => hours - 1);
          break;
        case "minutes":
          minutes > 0 && setMinutes((minutes) => minutes - 1);
        case "seconds":
          seconds > 0 && setSeconds((seconds) => seconds - 1);
          break;
        default:
          break;
      }
    }
  };

  return (
    <div className="countdown">
      <div className="countdown-left">
        <div className="timer-div">
          {/* <div className="timer-div-inner"> */}
          <svg className="countdown-timer__svg" viewBox="0 0 120 120">
            <circle
              className="countdown-timer__circle"
              r="50"
              cx="60"
              cy="60"
              strokeWidth="8"
              fill="none"
              stroke="#ff6b6b"
              strokeDasharray={283}
              strokeDashoffset={
                283 - (283 * (hours * 3600 + minutes * 60 + seconds)) / total
              }
            />
          </svg>

          <p className="timer">{timerDisplay}</p>

          {/* </div> */}
        </div>
      </div>
      <div className="countdown-right">
        <div className="time-container">
          <div className="hours times">
            <p className="time-title">Hours</p>

            <img
              src={timeBtn}
              alt="increase"
              className="increase"
              onClick={() => handleIncrease("hours")}
            />

            <input
              type="number"
              className="time-input"
              min="0"
              max="23"
              value={hours}
              onChange={(e) => setHours(e.target.value)}
            />
            <img
              src={timeBtn}
              alt="decrease"
              className="decrease"
              onClick={() => handleDecrease("hours")}
            />
          </div>

          <div className="minutes times">
            <p className="time-title">Minutes</p>
            <img
              src={timeBtn}
              alt="increase"
              className="increase"
              lassName="increase"
              onClick={() => handleIncrease("minutes")}
            />
            <input
              type="number"
              className="time-input"
              min="0"
              max="59"
              value={minutes}
              onChange={(e) => setHours(e.target.value)}
            />
            <img
              src={timeBtn}
              alt="decrease"
              className="decrease"
              onClick={() => handleDecrease("minutes")}
            />
          </div>

          <div className="seconds times">
            <p className="time-title">Seconds</p>
            <img
              src={timeBtn}
              alt="increase"
              className="increase"
              onClick={() => handleIncrease("seconds")}
            />
            <input
              type="number"
              className="time-input"
              min="0"
              max="59"
              value={seconds}
              onChange={(e) => setHours(e.target.value)}
            />
            <img
              src={timeBtn}
              alt="decrease"
              className="decrease"
              onClick={() => handleDecrease("seconds")}
            />
          </div>
        </div>
        <button
          className="start-btn"
          onClick={() => (countDown ? stopTimer() : startTimer())}
        >
          {countDown ? "Stop" : "Start"}
        </button>
      </div>
    </div>
  );
};

export default CountDown;
