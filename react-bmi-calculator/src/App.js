import React, { useState } from "react";
import "./App.css";

function App() {
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState(); // values for h
  const [bmi, setBmi] = useState();

  console.log("height: ", height);
  console.log("weight: ", weight);

  return (
    <div className="App">
      <header className="pe">BMI Calculator</header>
      <div>
        Your height:
        <input type="number" value={height} onChange={handleHeightChange} />
      </div>
      <div>
        Your Weight:
        <input type="number" value={weight} onChange={handleWeightChange} />
      </div>

      <button className="cal-button" onClick={calculateBMI}>Calculate</button>
      <div>
       {`Your BMI is ${bmi ?? ""}`}
      </div>
    </div>
  );

  function calculateBMI() {
    // TODO: find the BMI formula.
    // alert("You clicked the button!")

    setBmi(20)
  }

  function handleHeightChange(event) {
    setHeight(event.target.value);
  }

  function handleWeightChange(event) {
    setWeight(event.target.value);
  }
}

export default App;
