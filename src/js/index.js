//hamb
let hamburger = document.querySelector('.hamburger')
let menu = document.querySelector('.menu-mobile__wrapper')
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('is-active')
  menu.classList.toggle('is-active')
})

//cards menu toggle
let triggers = document.querySelectorAll('.cards__menu-trigger')

triggers.forEach(function(trigger) {
  trigger.addEventListener('click', function() {
    this.parentElement.querySelector('.cards__menu-list').classList.toggle('is-active')
  })
})
