const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

let intervalId = 0;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const bodyRef = document.body;
const btnStart = document.querySelector('[data-action="start"]');
const btnStop = document.querySelector('[data-action="stop"]');
// console.log(btnStart);
// console.log(btnStop);
btnStart.addEventListener('click', toStart);
btnStop.addEventListener('click', toStop);

function toStart() {
  btnStart.disabled = true;
  intervalId = setInterval(setColor, 1000);
}
function toStop() {
  btnStart.disabled = false;
  clearInterval(intervalId);
}
function setColor() {
  bodyRef.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length - 1)];
}
