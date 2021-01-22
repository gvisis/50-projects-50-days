const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const nameDOM = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

// after 2.5s it will insert the content below;
setTimeout(getData, 2000);

function getData() {
  
  header.innerHTML = `<img src ="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80" alt="laptop image" />`
  title.innerHTML = `Lorem ipsum dolor sit amet.`
  excerpt.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, aliquam.`
  profile_img.innerHTML = `<img src="https://randomuser.me/api/portraits/men/41.jpg" alt="profile picture">`;
  nameDOM.innerHTML = `John Doe`;
  date.innerHTML = `Jan 22, 2021`
  
  // removes the animated classes
  animated_bgs.forEach(bg => bg.classList.remove('animated-bg'));
  animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'));
}


