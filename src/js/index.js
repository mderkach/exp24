//hamb
let hamburger = document.querySelector('.hamburger')
let menu = document.querySelector('.menu-mobile__wrapper')
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('is-active')
  menu.classList.toggle('is-active')
})

//cards menu toggle
let triggers = document.querySelectorAll('.cards__menu-trigger')

triggers.forEach(trigger => {
  trigger.addEventListener('click', function() {
    this.parentElement.querySelector('.cards__menu-list').classList.toggle('is-active')
  })
})

//form
let inputs = document.querySelectorAll('.form__steps-input-radio')

const removeClass = () => {
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].parentElement.classList.remove('is-checked')
  }
}

inputs.forEach(input => {
  let label = input.parentElement
  input.addEventListener('input', () => {
    removeClass()
    label.classList.add('is-checked')
  })
})

let accordionItems = document.querySelectorAll('.faq__item')

accordionItems.forEach(item => {
  let trigger = item.querySelector('.faq__item-header-trigger')
  let target = item.querySelector('.faq__item-collapse')
  let toggleClass = () => {
    if (item.classList.contains('is-collapsed')) {
      item.classList.remove('is-collapsed')
    } else {
      item.classList.add('is-collapsed')
    }
  }

  trigger.addEventListener('click', toggleClass)
})
