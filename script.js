const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const navs = document.querySelectorAll('nav li');

function toggleNav() {
  // Toggle: Menu Bars Open/Closed
  menuBars.classList.toggle('change');
  // Check if Menu Bars Open
  if (menuBars.classList.contains('change')) {
    overlay.classList.remove('overlay-slide-left');
    // Animate In - Overlay
    overlay.classList.add('overlay-slide-right');
  } else {
    overlay.classList.remove('overlay-slide-right');
    // Animate Out - Overlay
    overlay.classList.add('overlay-slide-left');
  }
}


// Event Listeners
menuBars.addEventListener('click', toggleNav);
// for (let index = 0; index < navList.length; index++) {
//   navList[index].addEventListener('click', toggleNav);
// }
navs.forEach((nav) => {
  nav.addEventListener('click', toggleNav);
});