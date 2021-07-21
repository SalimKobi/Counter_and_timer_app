const startTiming = 6;
let time = startTiming * 60 * 60;

const count = document.getElementById("countdownTimer");
setInterval(updateTimer, 1000);
function updateTimer() {
  const Hour = Math.floor(time / 60 / 60);
  let minutes = Math.floor(time / 60);
  if (minutes > 60) {
    n = Math.floor(minutes / 60);
    p = Math.floor(minutes % 60);
    minutes = p;
  } else if (minutes == 0) {
    Hour--;
    minutes = time % 60;
  }
  let seconds = time % 60;

  seconds = seconds < 10 ? "0" + seconds : seconds;
  count.innerHTML = `${Hour}:${minutes}:${seconds}`;
  time--;
}
