const swiper = new Swiper('.swiper1', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  grabCursor: true,
  speed: 2000,
});
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
});
