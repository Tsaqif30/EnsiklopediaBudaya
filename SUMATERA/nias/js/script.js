// hamburger
const hamburger = document.querySelector('#hamburger');
const kotak = document.querySelector('#kotak');
const x = document.querySelector('#x');
//navMenu
const navMenu = document.querySelector('#nav-menu');

//navbarfixed
window.onscroll = function () {
  const header = document.querySelector('nav');

  const fixednav = header.offsetTop;

  if (window.pageYOffset > fixednav) {
    header.classList.add('navbar-fixed');
  } else {
    header.classList.remove('navbar-fixed');
  }
};

hamburger.addEventListener('click', function () {
  kotak.classList.toggle('hidden');
  x.classList.toggle('hidden');
  navMenu.classList.toggle('hidden');
});
