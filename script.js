const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const navsNodeList = document.querySelectorAll('nav li');
const navsArray = Array.prototype.slice.call(navsNodeList);

function toggleNav() {
  // Toggle: Menu Bars Open/Closed
  menuBars.classList.toggle('change');
  // Check if Menu Bars Open
  if (menuBars.classList.contains('change')) {
    overlay.classList.remove('overlay-slide-left');
    // Animate In - Overlay
    overlay.classList.add('overlay-slide-right');
    // Animate In - Overlay
    navsArray.forEach((nav) => {
      nav.classList.remove(`slide-out-${navsArray.indexOf(nav) + 1}`);
      nav.classList.add(`slide-in-${navsArray.indexOf(nav) + 1}`);
    });
  } else {
    overlay.classList.remove('overlay-slide-right');
    // Animate Out - Overlay
    overlay.classList.add('overlay-slide-left');
    // Animate Out - Overlay
    navsArray.forEach((nav) => {
      nav.classList.remove(`slide-in-${navsArray.indexOf(nav) + 1}`);
      nav.classList.add(`slide-out-${navsArray.indexOf(nav) + 1}`);
    });
  }
}

// Event Listeners
menuBars.addEventListener('click', toggleNav);
// for (let index = 0; index < navList.length; index++) {
//   navList[index].addEventListener('click', toggleNav);
// }
navsNodeList.forEach((nav) => {
  nav.addEventListener('click', toggleNav);
});