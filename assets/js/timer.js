// Select Every Count Container
const countContainer = document.querySelectorAll(".count-digit");

// Select option buttons
const startAction = document.getElementById("start-timer");

// Select HTML5 Audio element
const timeoutAudio = document.getElementById("alarm_audio");

// Default inital value of timer
const defaultValue = 4.5 * 60;

// variable to the time
var countDownTime = defaultValue;

// variable to store time interval
var timerID;

// Variable to track whether timer is running or not
var isStopped = true;

// Function calculate time string
const findTimeString = () => {
  var minutes = String(Math.trunc(countDownTime / 60));
  var seconds = String(countDownTime % 60);
  if (minutes.length === 1) {
    minutes = "0" + minutes;
  }
  if (seconds.length === 1) {
    seconds = "0" + seconds;
  }
  return minutes + seconds;
};

// Function to start Countdown
const startTimer = () => {
  if (isStopped) {
    isStopped = false;
    timerID = setInterval(runCountDown, 1000);
  }
};

// Function to stop Countdown
const stopTimer = () => {
  isStopped = true;
  if (timerID) {
    clearInterval(timerID);
  }
};

// Initialize alarm sound
timeoutAudio.src = "http://soundbible.com/grab.php?id=1542&type=mp3";
timeoutAudio.load();

// Attach onclick event to buttons
startAction.onclick = startTimer;

// Function to display coundown on screen
const renderTime = () => {
  const time = findTimeString();
  countContainer.forEach((count, index) => {
    count.innerHTML = time.charAt(index);
  });
};

// function to execute timer
const runCountDown = () => {
  // decement time
  countDownTime -= 1;
  //Display updated time
  renderTime();

  // timeout on zero
  if (countDownTime === 0) {
    stopTimer();
    // Play alarm on timeout
    timeoutAudio.play();
    countDownTime = defaultValue;
  }
};