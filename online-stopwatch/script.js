// Variables of this website
let minutes = 0; // Initial values for minutes
let seconds = 0; // Initial values for seconds

let countdownInterval; // Controller for running functions every second
let clockExists = false; // boolean

function decreaseMinutes() {
  if (clockExists) return;
  minutes = minutes - 1;
  updateDisplay();
}

function increaseMinutes() {
  if (clockExists) return;
  minutes =  minutes+1;
  updateDisplay();
}

function decreaseSeconds() {
  if (clockExists) return;
  seconds = seconds - 1 ;
  updateDisplay();
}

function increaseSeconds() {
  if (clockExists) return;
  seconds = seconds+1 ;
  updateDisplay();
}

function updateDisplay() {
  // convert the extra seconds into minutes
  total = Math.max(0, seconds + 60 * minutes);
  const realMinutes = Math.floor(total / 60);
  const realSeconds = total % 60;
  minutes = realMinutes;
  seconds = realSeconds;

  document.getElementById("minutes").textContent = padNumber(realMinutes);
  document.getElementById("seconds").textContent = padNumber(realSeconds);
}

// Turns a number into string of the format: "XX"
function padNumber(number) {
  return number.toString().padStart(2, "0");
}

function startCountdown() {
  // change the style of the button

  // 1. find the time input block
  const timeInputDiv = document.getElementById("time-input")
  // 2. Change the class name to change the style
  timeInputDiv.className = "time-input-running"


  let totalSeconds = minutes * 60 + seconds;                         

  // This function will run every second
  if (clockExists) return;

  // Create the clock
  clockExists = true;
  countdownInterval = setInterval(() => {
    if (totalSeconds == 0) {
      clearInterval(countdownInterval); // Don't run this anymore
      alert("Countdown completed!");
    } else {
      seconds = seconds - 1;
      
      updateDisplay();
    }
  }, 1000);
}

function reset() {
  // 1. find the time input block
  const timeInputDiv = document.getElementById("time-input")
  // 2. Change the class name to change the style
  timeInputDiv.className = "time-input-running"

  clockExists = false;
  minutes = 0;
  seconds = 0;
  // Stop the clock 
  clearInterval(countdownInterval);
  updateDisplay();
}

function pause() {
  // 1. find the time input block
  const timeInputDiv = document.getElementById("time-input")
  // 2. Change the class name to change the style
  timeInputDiv.className = "time-input-running"
  
  // to be finished by Alec\ 
  clockExists = false;
  clearInterval(countdownInterval);
  updateDisplay();
}
