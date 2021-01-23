const counter = document.querySelectorAll(".counter");

counter.forEach((counter) => {
  counter.innerText = "0";

  const udpateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText;

    // Increment by how much. And speed of counting will depend on it.
    // Ex. target - 5000, 5000 / 200 and the result will increment by that much.

    const increment = target / 200;

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(udpateCounter, 1);
    } else {
      counter.innerText = target;
    }
  };
  udpateCounter();
});
