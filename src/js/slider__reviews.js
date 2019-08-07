import Swiper from 'swiper'

var reviews = new Swiper('.slider-reviews', {
  loop: true,
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 20,
  navigation: {
    nextEl: '.slider-reviews--slide--next',
    prevEl: '.slider-reviews--slide--prev',
  },
  pagination: {
    el: '.slider-reviews--pagination',
    clickable: true,
    bulletClass: 'slider-reviews--pagination--bullet',
    bulletActiveClass: 'slider-reviews--pagination--bullet--active',
  },
  breakpoints: {
    991: {
      slidesPerView: 1,
    },
  },
})
