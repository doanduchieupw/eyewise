const slider = document.getElementById("slider");
const listSLide = document.querySelector(".slider__list");
const itemSlide = document.querySelectorAll(".slider__item");
const indicator = document.querySelectorAll(".slider__indicator--btn");
let itemActiveIndex = 0;

function setHeightContainer() {
  slider.style.height = itemSlide[0].offsetHeight + "px";
}

function activeSlider() {
  listSLide.style.left = -itemSlide[itemActiveIndex].offsetLeft + "px";
}

indicator.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    itemActiveIndex = index;
    activeSlider();
  });
});

setTimeout(() => setHeightContainer(), 0);
setInterval(() => itemActiveIndex++, 1000);
