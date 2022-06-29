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

// document.addEventListener('click', function (e) {
//   if (e.target.id !== 'hamburger' && e.target.id !== 'navMenu') {
//     hamburger.classList.remove('hamburger-active');
//     navMenu.classList.remove('hidden');
//   }
// });

// swipper
// var swiper = new Swiper('.mySwiper', {
//   spaceBetween: 30,
//   effect: 'fade',
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
// });

// var swiper1 = new Swiper('.mySwiper1', {
//   effect: 'cards',
//   grabCursor: true,
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },
// });
