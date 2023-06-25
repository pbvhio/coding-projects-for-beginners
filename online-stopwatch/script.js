let minutes = 0; // Initial values for minutes
let seconds = 0; // Initial values for seconds
let countdownInterval; // Controller for running functions every second

function decreaseMinutes() {
  if (minutes > 0) {
    // ========== Finish below ==========
    // minutes = xxx ;
    // ========== Finish above ==========
    updateDisplay();
  }
}

function increaseMinutes() {
  // ========== Finish below ==========
  // minutes = xxx ;
  // ========== Finish above ==========
  updateDisplay();
}

function decreaseSeconds() {
  if (seconds > 0) {
    // ========== Finish below ==========
    // seconds = xxx ;
    // ========== Finish above ==========
  }
}

function increaseSeconds() {
  // ========== Finish below ==========
  // seconds = xxx ;
  // ========== Finish above ==========
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("minutes").textContent = padNumber(minutes);
  document.getElementById("seconds").textContent = padNumber(seconds);
}

// Turns a number into string of the format: "XX"
function padNumber(number) {
  return number.toString().padStart(2, "0");
}

function startCountdown() {
  // ========== Finish below ==========
  // let totalSeconds = xxx ;
  //
  // ========== Finish above ==========

  // This function will run every second
  countdownInterval = setInterval(() => {
    // ========== Finish below ==========
    //
    //
    // ========== Finish above ==========

    if (totalSeconds < 0) {
      clearInterval(countdownInterval);
      alert("Countdown completed!");
    } else {
      // ========== Finish below ==========
      //
      //
      // ========== Finish above ==========
    }
  }, 1000);
}

function reset() {
  minutes = 0;
  seconds = 0;
  clearInterval(countdownInterval);
  updateDisplay();
}
