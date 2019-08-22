import Swiper from 'swiper'

var swiper = new Swiper('.slider-landing__partners', {
  loop: true,
  slidesPerView: 6,
  spaceBetween: 20,
  pagination: {
    el: '.slider-landing__partners--pagination',
    clickable: true,
    bulletClass: 'slider-landing__partners--pagination--bullet',
    bulletActiveClass: 'slider-landing__partners--pagination--bullet--active',
  },
  breakpoints: {
    992: {
      slidesPerView: 3,
    },
    576: {
      slidesPerView: 1,
    },
  },
})
