// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let size = 20;

// default color
let color = 'black';
let x;
let y;

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
  ctx.moveTo(x1,y1);

  //line will follow
  ctx.lineTo(x2, y2);
  
  ctx.strokeStyle = color;
  ctx.lineWidth = size;
  ctx.stroke();
}

drawCircle(100, 200);

// line will move to 300 side, 300 from top, and will start drawing from 300 to 500 on y axis.
drawLine(300,300, 300, 500)