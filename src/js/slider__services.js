import Swiper from 'swiper';

var servicesSlider = new Swiper('.services__slider', {});

let badges = document.querySelectorAll('.badge__service');
let slides = document.querySelectorAll('.services__slider-slide');

let removeClass = (e) => {
  e.preventDefault();
  badges.forEach(item => {
    item.classList.remove('is-active');
  });
  e.currentTarget.classList.add('is-active');
}

badges.forEach((item, i) => {
  item.addEventListener('click', (e) => {
    removeClass(e);
    servicesSlider.slideTo(i)
  })

})
