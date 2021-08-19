const counter = document.querySelector(".counter");
const bg = document.querySelector(".bg");

let percentage = 0;

let int = setInterval(blurring, 30);

function blurring() {
  percentage++;

  if (percentage >= 100) {
    clearInterval(int);
  }

  counter.innerText = `${percentage}%`;
  counter.style.opacity = scale(percentage, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(percentage, 0, 100, 30, 0)}px)`;
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
