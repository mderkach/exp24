import Swiper from 'swiper'

var swiper = new Swiper('.additional-order__outer', {
  loop: false,
  slidesPerView: 2,
  pagination: {
    el: '.additional-order--pagination',
    clickable: true,
    bulletClass: 'additional-order--pagination--bullet',
    bulletActiveClass: 'additional-order--pagination--bullet--active',
  },
})
