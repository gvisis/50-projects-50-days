const buttons = document.querySelectorAll(".ripple");

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    // click position on x axis (from the page)
    const x = e.clientX;

    // click position on y axis (from the page)
    const y = e.clientY;

    // element position from the top
    const buttonTop = e.target.offsetTop;
    // element position from the left
    const buttonLeft = e.target.offsetLeft;

    // the click position inside the button
    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    const circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.top = yInside + "px";
    circle.style.left = xInside + "px";

    // does not work with arrow function
    // adds a circle element to a selected button
    this.appendChild(circle);

    // removes the added circle after 0.5s
    setTimeout(() => circle.remove(), 500);
  });
});
