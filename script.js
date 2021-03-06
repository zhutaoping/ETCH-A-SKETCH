"use strick";

const container = document.querySelector(".container");
const clickBtn = document.querySelector(".cl-btn");
clickBtn.addEventListener("click", inputNum);

function inputNum() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  const num = prompt("How many grids do you want?", "<100");

  container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
  makeGrids(num);
}

function makeGrids(n) {
  for (i = 0; i < n * n; i++) {
    let divs = document.createElement("div");
    divs.classList.add(`grid`);
    container.appendChild(divs);
    divs.style.opacity = 0;
  }
  const grids = container.querySelectorAll(".grid");
  grids.forEach((grid) => {
    grid.addEventListener("mouseenter", paint);
  });
}

function paint() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  let opa = Number(window.getComputedStyle(this).getPropertyValue("opacity"));
  if (opa < 1) {
    opa += 0.1;
    this.style.opacity = opa;
    this.style.background = `#${randomColor}`;
  }
}
