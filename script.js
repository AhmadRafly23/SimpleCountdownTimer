const daysTime = document.getElementById("c-days");
const hoursTime = document.getElementById("c-hours");
const minutesTime = document.getElementById("c-minutes");
const secondsTime = document.getElementById("c-seconds");
const newYear = "1 Jan 2023";

function countDown() {
  const newYearDate = new Date(newYear);
  const currentDate = new Date();

  const seconds = (newYearDate - currentDate) / 1000;
  const day = Math.floor(seconds / 3600 / 24);
  const hour = Math.floor(seconds / 3600) % 24;
  const minute = Math.floor(seconds / 60) % 60;
  const second = Math.floor(seconds) % 60;

  daysTime.innerHTML = formatTime(day);
  hoursTime.innerHTML = formatTime(hour);
  minutesTime.innerHTML = formatTime(minute);
  secondsTime.innerHTML = formatTime(second);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

countDown();
setInterval(countDown, 1000);
