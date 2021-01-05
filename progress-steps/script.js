const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

// Represents which one is active circle
let currentActive = 1; 

next.addEventListener('click', () => {
    currentActive++;

    // If it gets to the end it shouldn't go past the last circle.
    // Because circle is 
    if (currentActive > circles.length) {
        currentActive = circles.length; 
    }
    update();
})
prev.addEventListener('click', () => {
    currentActive--;
    if (currentActive < 1) {
        currentActive = 1;
    }
    update();
})

function update() {
    circles.forEach((circle, index) => {

        // if the index is less than currentActive we add a class active for the new circle 
        if (index < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    })

    // we get all active classes under a DOM
    const actives = document.querySelectorAll(".active");

    // to get the width percentage for the bar we take all active classes and divide them by the total count of existing circles.
    // To get the smaller percentage, we subtract all lengths by 1
    // And to get the percentage, we multiply it by 100
    progress.style.width = (actives.length -1) / (circles.length -1) * 100 + '%';

    // Enabling and disabling buttons 
    if (currentActive === 1){
        prev.disabled = true;
    } else if(currentActive === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}
