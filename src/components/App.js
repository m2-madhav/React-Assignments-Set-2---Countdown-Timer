import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  // write your code here
  const [timer, setTimer] = useState("");

  const handleEnter = (event) => {
    if (event.keyCode === 13) {
      clearInterval(timerID);
      if (isNaN(event.target.value)) {
        setTimer(0);
        return;
      }
      setTimer(parseInt(event.target.value));
    }
    return;
  };
  const tick = () => {
    clearInterval(timerID);
    if (timer <= 0) return;
    setTimer(timer - 1);
  };
  let timerID = setInterval(tick, 1000);

  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for
          <input id="timeCount" onKeyDown={handleEnter} /> sec.
        </h1>
      </div>
      <div id="current-time">{timer}</div>
    </div>
  );
};

export default App;
