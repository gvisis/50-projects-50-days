const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

// Starts at 0;
let load = 0;

// We want to run a function in an interval every 30ms
let int = setInterval(blurring, 30);

function blurring() {
    load++;
    if (load > 99){
        clearInterval(int);
    }
    loadText.innerText = `${load}%`;
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 70, 0)}px)`;

}
/* 
Maps a range of numbers to another range of numbers
Takes one range of numbers: *in_min* and *in_max*
And assigns to other range of numbers: *out_min* and *out_max*
https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
 */
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }