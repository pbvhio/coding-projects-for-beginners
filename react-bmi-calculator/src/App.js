import React, { useState } from "react";
import "./App.css";

function App() {
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState(); // values for h
  const [bmi, setBmi] = useState();
  const [message, setMessage] = useState("");

  console.log("height: ", height);
  console.log("weight: ", weight);

  return (
    <div className="App">
      <header className="pe">
        <text className="text">BMI Calculator</text>
      </header>
      <div className="peter">
        <text className="text">Your height:</text>
        <input type="number" value={height} onChange={handleHeightChange} />
        <text className="text"> cm</text>
      </div>

      <div className="peter">
        <text className="text">Your weight:</text>
        <input type="number" value={weight} onChange={handleWeightChange} />
        <text className="text"> kg</text>
      </div>

      <button className="cal-button" onClick={calculateBMI}>
        Calculate
      </button>

      <div className="peter">
        <text className="text">{`Your BMI is ${bmi ?? ""}`}</text>
      </div>

      <div>
        <text className="text">{message}</text>
      </div>
    </div>
  );

  function calculateBMI() {
    // TODO: find the BMI formula.
    // alert("You clicked the button!")

    var x = weight / ((height / 100) * (height / 100));

    setBmi(x);

    if (x < 18.5) {
      setMessage("your are underweight");
    }
    if (24 > x && x >= 18.5) {
      setMessage("your are normal");
    }
    if (x >= 24) {
      setMessage("your are overweight");
    }
  }

  function handleHeightChange(event) {
    setHeight(event.target.value);
  }

  function handleWeightChange(event) {
    setWeight(event.target.value);
  }
}

export default App;
