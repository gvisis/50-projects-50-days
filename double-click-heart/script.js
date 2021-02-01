const loveMe = document.querySelector('.loveMe');
const times = document.querySelector('#times');

let clickTime = 0;
let timesClicked = 0;

loveMe.addEventListener('click', (e) => {
  if (clickTime === 0) {
    clickTime = new Date().getTime();
  } else {
    if ((new Date().getTime() - clickTime) < 500) {
      createHeart(e);
      clickTime = 0;
    } else {
      clickTime = new Date().getTime();
    }
  }
})

const createHeart = (e) => {
  const heart = document.createElement('i')
  heart.classList.add('fas');
  heart.classList.add('fa-heart');

  // Coordinates of the click from window side
  const x = e.clientX;
  const y = e.clientY;

  // Makes the click calculate from the image side
  const leftOffset = e.target.offsetLeft
  const topOffset = e.target.offsetTop

  const xInside = x - leftOffset;
  const yInside = y - topOffset;

  heart.style.top = `${yInside}px`
  heart.style.left = `${xInside}px`

  // adds to loveMe element heart element.
  loveMe.appendChild(heart);

  times.innerHTML = ++timesClicked;

  setTimeout(() => heart.remove(), 800)
}