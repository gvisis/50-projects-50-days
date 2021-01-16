// DOM variables

const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');

const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');

const toggleBtn = document.querySelector('.toggle');

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"];

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct","Nov","Dec"];

// Check with localStorage which theme to apply
function setTheme(){
    if(localStorage.getItem('clockTheme') === 'dark'){
        changeThemeTo('dark')
    }
}
   
// Change theme with it's name in params
function changeThemeTo(theme = 'default'){
    const html = document.querySelector('html')
    if(theme === 'default'){
        localStorage.setItem('clockTheme', 'default')
        html.classList.remove('dark')
        toggleBtn.innerHTML = 'Light mode'
    } else{
        localStorage.setItem('clockTheme', 'dark')
        html.classList.add('dark')
        toggleBtn.innerHTML = 'Dark mode'
    }
}

toggleBtn.addEventListener('click', e => {
  e.preventDefault()
  
  if(localStorage.getItem('clockTheme') === 'dark'){
    changeThemeTo('default')
  }else{
    changeThemeTo('dark')
  }
})


function setTime() {
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const hours = time.getHours();
    const hoursForClock = hours >= 13 ? hours % 12 : hours;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // take each needle and transform
    hourEl.style.transition = `${hours === 0 ? "none" : "all 0.5s ease-in"}`
    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`;
    // hourEl.style.transform = `translate(-50%, -100%) rotate(${(hoursForClock * 30)}deg)`

    minuteEl.style.transition = `${minutes === 0 ? "none" : "all 0.5s ease-in"}`
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`;
    
    secondEl.style.transition = `${seconds === 0 ? "none" : "all 0.5s ease-in"}`
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`;
    
    // we need to check if it's less than 10, then we will give 0 for minutes/seconds
    timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`

    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
};

setTheme();
setTime();

setInterval(setTime, 1000);