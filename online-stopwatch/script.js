// Variables of this website
let minutes = 0; // Initial values for minutes
let seconds = 0; // Initial values for seconds

let countdownInterval; // Controller for running functions every second

function decreaseMinutes() {
    // ========== Finish below ==========
    minutes = minutes-1 ;
    // ========== Finish above ==========
    updateDisplay();
}

function increaseMinutes() {
  // ========== Finish below ==========
  minutes =  minutes+1;
  // ========== Finish above ==========
  updateDisplay();
}

function decreaseSeconds() {
    // ========== Finish below ==========
    seconds = seconds-1 ;
    // ========== Finish above ==========
    updateDisplay();
}

function increaseSeconds() {
  // ========== Finish below =========
  seconds = seconds+1 ;
  // ========== Finish above ==========
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
  // Stop the clock
  clearInterval(countdownInterval);
  updateDisplay();
}

function pause() {
  // to be finished by Alec
}
