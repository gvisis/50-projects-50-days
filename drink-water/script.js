const smallCups = document.querySelectorAll(".cup-small");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");

updateBigCup();
smallCups.forEach((cup, index) => {
  cup.addEventListener("click", () => {
    highlightCups(index);
  });
});

function highlightCups(index) {
  smallCups.forEach((cup, index2) => {
    // If the one we are clicking is full and next one is not, we want to decrease the index by one;
    // nextElementSibling - next item to the one clicked.
    if (
      smallCups[index].classList.contains("full") &&
      !smallCups[index].nextElementSibling?.classList.contains("full")
    ) {
      index--;
    }

    // When we click on the cup which is not one, we want the cups before the one we clicked, to get the class full as well.
    if (index2 <= index) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
    updateBigCup();
  });
}

function updateBigCup() {
  const fullCups = document.querySelectorAll(".cup-small.full").length;
  const totalCups = smallCups.length;

  if (fullCups === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(fullCups / totalCups) * 330}px`;
    percentage.innerText = `${(fullCups / totalCups) * 100}%`;
  }

  if (fullCups === totalCups) {
    remained.style.visibility = "hidden";
    remained.style.height = 0;
  } else {
    remained.style.visibility = "visible";
    liters.innerText = `${2 - (250 * fullCups) / 1000} L`;
  }
}
