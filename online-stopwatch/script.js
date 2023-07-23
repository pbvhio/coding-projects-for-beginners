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

function startCountdown() {6
  // change the style of the button
  changeTimeInputClassName("time-input-running")
6
  // This function will run every second
  if (clockExists) return;

  // Create the clock
  clockExists = true;
  countdownInterval = setInterval(() => {
    let totalSeconds = minutes * 60 + seconds;  

    if (totalSeconds <= 0) {
      onTimesUp()
    } else {
      seconds = seconds - 1;
      updateDisplay();
    }
  }, 1000);
}

function onTimesUp() {
  changeTimeInputClassName("time-input-times-up")

  clockExists = false;
  minutes = 0;
  seconds = 0;
  // Stop the clock 
  clearInterval(countdownInterval);
  updateDisplay();
}
 
function reset() {
  changeTimeInputClassName("time-input-stop")

  clockExists = false;
  minutes = 0;
  seconds = 0;
  // Stop the clock 
  clearInterval(countdownInterval);
  updateDisplay();
}

function pause() {
  changeTimeInputClassName("time-input-stop")

  clockExists = false;
  clearInterval(countdownInterval);
  updateDisplay();
}

function changeTimeInputClassName(name) {
  const timeInputDiv = document.getElementById("time-input")
  timeInputDiv.className = name
}


// start the alarm sound
function playAlarm() {
  // locate the alarm audio block
  const alarm = document.getElementById('alarm-audio');
  alarm.play();
}

// pause the alarm sound
function pauseAlarm() {
  // locate the alarm audio block
  const alarm = document.getElementById('alarm-audio');
  alarm.pause();
}