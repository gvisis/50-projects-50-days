const body = document.body;
const slides = document.querySelectorAll(".slide");

const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

let activeSlide = 0;

rightBtn.addEventListener("click", () => {
  activeSlide++;

  // if its the end of the slides sets the activeslide to 0;
  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }

  // when clicked it will call these to functiosn to set the images;
  setBgToBody();
  setActiveSlide();
});
leftBtn.addEventListener("click", () => {
  activeSlide--;

  // if its the end of the slides sets the activeslide to 0;
  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }

  // when clicked it will call these to functiosn to set the images;
  setBgToBody();
  setActiveSlide();
});
setBgToBody();

function setBgToBody() {
  // we set the body background image same as slides image;
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
    slides[activeSlide].classList.add("active");
  });
}
