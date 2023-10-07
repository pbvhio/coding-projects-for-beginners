import React, { useState } from "react";
import "./App.css";
import GameBox from "./components/GameBox";

const initialGame = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

function App() {
  const [game, setGame] = useState(initialGame);
  const [currentUser, setCurrentUser] = useState("x");

  const handleClick = (row, column) => {
    alert(`Clicked row ${row} and column ${column}`);

    // Task 1: Switch user

    // Task 2: Update the game

    // Task 3: Check for the winner
  };

  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>

      <div
        style={{ fontSize: "20px", padding: "20px 0px 50px 0px" }}
      >{`Now is ${currentUser}'s turn:`}</div>

      <div style={{ display: "flex" }}>
        <GameBox value={game[0][0]} onClick={() => handleClick(0, 0)} />
        <GameBox value={game[0][1]} onClick={() => handleClick(0, 1)} />
        <GameBox value={game[0][2]} onClick={() => handleClick(0, 2)} />
      </div>
      <div style={{ display: "flex" }}>
        <GameBox value={game[1][0]} onClick={() => handleClick(1, 0)} />
        <GameBox value={game[1][1]} onClick={() => handleClick(1, 1)} />
        <GameBox value={game[1][2]} onClick={() => handleClick(1, 2)} />
      </div>
      <div style={{ display: "flex" }}>
        <GameBox value={game[2][0]} onClick={() => handleClick(2, 0)} />
        <GameBox value={game[2][1]} onClick={() => handleClick(2, 1)} />
        <GameBox value={game[2][2]} onClick={() => handleClick(2, 2)} />
      </div>
    </div>
  );
}

export default App;
