const toggleButton = document.getElementById("toggle");
const navDOM = document.getElementById("nav");

toggleButton.addEventListener("click", () => navDOM.classList.toggle("active"));
