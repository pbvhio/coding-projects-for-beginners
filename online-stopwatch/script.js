let minutes = 0;
let seconds = 0;
let countdownInterval;

function decreaseMinutes() {
  if (minutes > 0) {
    minutes--;
    updateDisplay();
  }
}

function increaseMinutes() {
  minutes++;
  updateDisplay();
}

function decreaseSeconds() {
  if (seconds > 0) {
    seconds--;
    updateDisplay();
  }
}

function increaseSeconds() {
  seconds++;
  updateDisplay();
}

function updateDisplay() {
  console.log(`To Update minutes: ${padNumber(minutes)}`);
  console.log(`To Update seconds: ${padNumber(seconds)}`);

  document.getElementById("minutes").textContent = padNumber(minutes);
  document.getElementById("seconds").textContent = padNumber(seconds);
}

// Turns a number into string of the format: "XX"
function padNumber(number) {
  return number.toString().padStart(2, "0");
}

function startCountdown() {
  let totalSeconds = minutes * 60 + seconds;

  countdownInterval = setInterval(() => {
    // This function will run every second
    // ========== Finish below ==========
    totalSeconds--;

    if (totalSeconds < 0) {
      clearInterval(countdownInterval);
      alert("Countdown completed!");
    } else {
      minutes = Math.floor(totalSeconds / 60);
      seconds = totalSeconds % 60;
      updateDisplay();
    }
    // ========== Finish above ==========
  }, 1000);
}

function reset() {
  minutes = 0;
  seconds = 0;
  clearInterval(countdownInterval);
  updateDisplay();
}
