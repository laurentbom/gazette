// Barre de recherche
var barreNav = document.querySelector(".header__main_nav__liens");
var barreRecherche = document.querySelector(".searchbar");
var iconeLoupe = document.querySelector(".header__main_nav__search");

iconeLoupe.addEventListener('click',function(){
  barreNav.classList.toggle("hide");
  barreRecherche.classList.toggle("visible");
});

// Icone to the top
var iconeTop = document.querySelector(".toTheTop");
var scrollAffichage = window.innerHeight / 10;
var lastScroll = 0;
window.addEventListener("scroll", function(){
  var scrolled = window.scrollY;
  if(scrolled >= scrollAffichage) {
    iconeTop.classList.add('show');
  } else {
    iconeTop.classList.remove('show');
  }
  lastScroll = scrolled;
});
// Nav responsive
var menuResponsive = document.querySelector('.menu_responsive');
var liensResponsive = document.querySelector('.header__main_nav__liens');

menuResponsive.addEventListener('click', function(){
  liensResponsive.classList.toggle("responsive");
});
// Swipers.js
const swiper = new Swiper('.swiper1', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  grabCursor: true,
  speed: 1000,
  breakpoints: {
    760: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
// obliger de concaténé deux classes pour avoir plusieurs swiper .swiper .two
const swiper2 = new Swiper('.swiper.two', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
  },
  speed: 1000,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

