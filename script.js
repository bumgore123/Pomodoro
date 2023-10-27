const TM = document.getElementById("timer");
const CC = document.getElementById("cycleCount");
const SB = document.getElementById("stopBtn");
const RB = document.getElementById("resetBtn");
const STB = document.getElementById("startBtn");

const DEFAULT_SECONDS = 15 * 60;

let secondsLeft = DEFAULT_SECONDS;
let cycleCount = 0;
let timerRunning = false;
let countdown;

function formatTime() {
    const minutes = Math.floor(secondsLeft / 60);
    const seconds = secondsLeft % 60;

    let minutesText = "";
    let secondsText = "";

    if (minutes >= 10) {
        minutesText = `${minutes}`
    } else {
        minutesText = `0${minutes}`
    }
    if (seconds >= 10) {
        secondsText = `${seconds}`
    } else {
        secondsText = `0${seconds}`
    }

    TM.innerText = `${minutesText}:${secondsText}`
}

formatTime()

function startCountdown() {
    if (!timerRunning) {
        timerRunning = true;
        countdown = setInterval(update, 1000);
    }
}

function update() {
    if (secondsLeft === 0) {
        secondsLeft = DEFAULT_SECONDS;
        cycleCount = cycleCount + 1;
        CC.innerText = `Cycles: ${cycleCount}`;
    } else {
        secondsLeft = secondsLeft - 1;
    }
    updateClock();
}

function updateClock() {
    formatTime();
}

function stopCountdown() {
    timerRunning = false;
    clearInterval(countdown);
}

function resetCountdown() {
    clearInterval(countdown);
    secondsLeft = DEFAULT_SECONDS;
    updateClock()
}