const boxes = document.querySelectorAll(".box");

addEventListener("scroll", checkBoxes);

// 0.8 - If our box top is inside the 80% of window height the show class will be added.
function checkBoxes() {
  boxes.forEach((box) => {
    const triggerBottom = innerHeight * 0.8;
    const boxTop = box.getBoundingClientRect().top;
    console.log(boxTop);
    console.log(triggerBottom);
    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
