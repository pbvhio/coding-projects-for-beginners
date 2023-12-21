// example game:

// [
//   ["x", "x", ""],
//   ["", "x", ""],
//   ["", "o", ""],
// ];

export function checkTikTacToeWinner(game) {
  if (game[0][0] === "x" && game[0][1] === "x" && game[0][2] === "x") {
    return "x";
  }

  if (game[1][0] === "x" && game[1][1] === "x" && game[1][2] === "x") {
    return "x";
  }

  if (game[2][0] === "x" && game[2][1] === "x" && game[2][2] === "x") {
    return "x";
  }

  if (game[0][0] === "x" && game[1][0] === "x" && game[2][0] === "x") {
    return "x";
  }

  if (game[0][1] === "x" && game[1][1] === "x" && game[2][1] === "x") {
    return "x";
  }

  if (game[0][2] === "x" && game[1][2] === "x" && game[2][2] === "x") {
    return "x";
  }

  if (game[0][2] === "x" && game[1][1] === "x" && game[2][0] === "x") {
    return "x";
  }

  if (game[0][0] === "x" && game[1][1] === "x" && game[2][2] === "x") {
    return "x";
  }

  if (game[0][0] === "o" && game[0][1] === "o" && game[0][2] === "o") {
    return "o";
  }

  if (game[1][0] === "o" && game[1][1] === "o" && game[1][2] === "o") {
    return "o";
  }

  if (game[2][0] === "o" && game[2][1] === "o" && game[2][2] === "o") {
    return "o";
  }

  if (game[0][0] === "o" && game[1][0] === "o" && game[2][0] === "o") {
    return "o";
  }

  if (game[0][1] === "o" && game[1][1] === "o" && game[2][1] === "o") {
    return "o";
  }

  // if the third column is all "o": return "o"
  if (game[0][2] === "o" && game[1][2] === "o" && game[2][2] === "o") {
    return "o";
  }

  if (game[0][2] === "o" && game[1][1] === "o" && game[2][0] === "o") {
    return "o";
  }

  if (game[0][0] === "o" && game[1][1] === "o" && game[2][2] === "o") {
    return "o";
  }

  // if (game was is finish but did not return "x"||"o" then return "draw")
  if (
    (game[0][0]) && 
    (game[0][1]) && 
    (game[0][2]) &&
    (game[1][0]) && 
    (game[1][1]) && 
    (game[1][2]) &&
    (game[2][0]) && 
    (game[2][1]) && 
    (game[2][2])
  ) {
    return "draw";
  }
  
  return "";
}
