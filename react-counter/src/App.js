import React, { useState } from "react";
import "./App.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <span>{count}</span>
      <div>
        <button>Down</button>
        <button>Up</button>
      </div>
    </div>
  );
};

export default Counter;
