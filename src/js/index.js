//hamb
let hamburger = document.querySelector('.hamburger')
let menu = document.querySelector('.menu-mobile__wrapper')
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('is-active')
  menu.classList.toggle('is-active')
})
