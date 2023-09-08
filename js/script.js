'use strict';

/* Hamburger Nav */

let btn = document.querySelector('.hamburger');
let btnState = true;

btn.onclick = () => {
  if (btnState == true) {
    document.querySelector('.hamburger span').classList.add('toggle');

    document.getElementById('nav').classList.add('sidebarshow');
    btnState = false;
  } else if (btnState == false) {
    document.querySelector('.toggle span').classList.remove('toggle');

    document.getElementById('nav').classList.remove('sidebarshow');
    btnState = true;
  }
}
