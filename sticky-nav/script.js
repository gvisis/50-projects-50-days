const nav = document.querySelector('.nav')

addEventListener('scroll', fixNav)

function fixNav() {
  // check the scroll points
  if (scrollY > nav.offsetHeight + 150) {
    nav.classList.add('active');
  } else {
    nav.classList.remove('active')
  }
}