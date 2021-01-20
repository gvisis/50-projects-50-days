// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
// line will move to 300 side, 300 from top, and will start drawing from 300 to 500 on y axis.
// drawLine(300, 300, 300, 500)


const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeDOM = document.getElementById('size');
const clearDOM = document.getElementById('clear');
const colorDOM = document.getElementById('color');

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


let size = 10;

// default color
let isPressed = false;
let color = 'black';
let x;
let y;

canvas.addEventListener('mousedown', (e) => {
  isPressed = true;
  //gets the position of where mouse x
  x = e.offsetX;
  y = e.offsetY;
  drawCircle(x, y);
})

canvas.addEventListener('mouseup', (e) => {
  isPressed = false;

  //gets the position of where mouse x
  x = undefined;
  y = undefined;
});


canvas.addEventListener('mousemove', (e) => {
  if (isPressed) {
    const x2 = e.offsetX
    const y2 = e.offsetY

    // when only drawCircle is called it will draw lines, BUT if it moves fast it will leave spaces
    drawCircle(x2, y2);

    drawLine(x, y, x2, y2)
    x = x2;
    y = y2;
  }
})

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2, true); // Outer circle

  //fill the circle
  ctx.fillStyle = color;
  ctx.fill();
}
// function to draw line
// x1,y1 = move to position
// x2,y2 = from where to draw line.   
function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();

  // moves to position
  ctx.moveTo(x1, y1);

  //line will follow
  ctx.lineTo(x2, y2);

  ctx.strokeStyle = color;
  // has to be *2 so the radius of the circle will be the same of the line
  ctx.lineWidth = size * 2;
  ctx.stroke();
}

colorDOM.addEventListener('change', (e) => color = e.target.value);

updateSizeOnScreen = () => { sizeDOM.textContent = size }


increaseBtn.addEventListener('click', () => {
  if (size < 50) {
    size++;
    updateSizeOnScreen();
  } else {
    alert(`Pen cannot be more than ${size}!`);
  }
});

decreaseBtn.addEventListener('click', () => {
  if (size <= 1) {
    alert(`Pen cannot be less than ${size}!`);
  } else {
    size--;
    updateSizeOnScreen();
  }
});

clearDOM.addEventListener('click', () => ctx.clearRect(0, 0, canvas.width, canvas.height));
