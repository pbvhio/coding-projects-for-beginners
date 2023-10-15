import React, { useState } from "react";
import "./App.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <span>{count}</span>


      <div>
        <button onClick={countDown}>Down</button>
        <button onClick={countUp}>Up</button>
      </div>


      <button onClick={reset} style={{ width: "0.1px" }}>
        reset
      </button>
    </div>
  );
  function countDown() {
    setCount(count - 1);
  }
  function countUp() {
    setCount(count + 1);
  }
  function reset() {
    setCount(0);
  }
};

export default Counter;
