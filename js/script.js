/******************************************
 *  Author : Hardeep Kumar
 *  Created On : Tue Jun 08 2021
 *  File : script.js
 *******************************************/

let scrollPosition = window.scrollY;
let navbar = document.getElementById('NavigationBar');

window.addEventListener('scroll', function () {
  scrollPosition = window.scrollY;
  if (window.scrollY >= 30) {
    navbar.classList.add('bg-white', 'shadow');
    navbar.classList.remove('shadow-0');
  } else {
    navbar.classList.remove('bg-white');
    navbar.classList.add('shadow-0');
  }
});

let navButton = document.getElementById('NavButton');

navButton.onclick = function () {
  document.getElementById('NavbarContainer').classList.toggle('bg-white');
};
