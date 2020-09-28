const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const navsNodeList = document.querySelectorAll('nav li');
const navsArray = Array.prototype.slice.call(navsNodeList);

// Control Navigation Animation
function navAnimation(direction1, direction2) {
  navsArray.forEach((nav, i) => {
    nav.classList.replace(`slide-${direction1}-${i + 1}`,`slide-${direction2}-${i + 1}`);
  })
}

function toggleNav() {
  // Toggle: Menu Bars Open/Closed
  menuBars.classList.toggle('change');
  // Check if Menu Bars Open
  if (menuBars.classList.contains('change')) {
    // Animate In - Overlay
    overlay.classList.replace('overlay-slide-left','overlay-slide-right');
    // Animate In - Overlay
    navAnimation('out', 'in');
  } else {
    // Animate Out - Overlay
    overlay.classList.replace('overlay-slide-right','overlay-slide-left');
    // Animate Out - Overlay
    navAnimation('in', 'out');
  }
}

// Event Listeners
menuBars.addEventListener('click', toggleNav);
navsNodeList.forEach((nav) => {
  nav.addEventListener('click', toggleNav);
});