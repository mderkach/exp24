import Swiper from 'swiper'

var swiper = new Swiper('.slider-main__actions', {
  loop: true,
  navigation: {
    nextEl: '.slider-main__actions--slide--next',
    prevEl: '.slider-main__actions--slide--prev',
  },
  pagination: {
    el: '.slider-main__actions--pagination',
    clickable: true,
    bulletClass: 'slider-main__actions--pagination--bullet',
    bulletActiveClass: 'slider-main__actions--pagination--bullet--active',
  },
})
