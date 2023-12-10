import React, { useState } from "react";
import "./App.css";
import GameBox from "./components/GameBox";
import { checkTikTacToeWinner } from "./utils/checkTicTacToeWinner";
import GameModal from "./components/GameModal";

const initialGame = [
  ["o", "", ""],
  ["", "x", "o"],
  ["", "x", "x"],
];

function App() {
  const [game, setGame] = useState(initialGame);

  console.log(game)
  const [currentUser, setCurrentUser] = useState("x");

  function handleClick(row, column) {
    // Task 1: Update the Game box
    setGame((game) => {
      const newGame = JSON.parse(JSON.stringify(game)); // Copy existing game to newGame
      newGame[row][column] = currentUser; // Update the target game box
      return newGame;
    });

    // Task 2: Switch user
    setCurrentUser((user) => (user === "x" ? "o" : "x"));
  }

  function reset() {
    setCurrentUser("x");
    setGame(initialGame);
  }

  const winner = checkTikTacToeWinner(game);

  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>

      <div
        style={{ fontSize: "20px", padding: "20px 0px 50px 0px" }}
      >{`Now is ${currentUser}'s turn:`}</div>

      <GameModal winner={winner} reset={reset} />

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
