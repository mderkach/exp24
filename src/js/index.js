import Inputmask from 'inputmask'
let phones = document.querySelectorAll('input[name="phone"]')
let inputmask = new Inputmask('+7(999)999-99-99')
phones.forEach((input) => inputmask.mask(input))
//hamb
let hamburger = document.querySelector('.hamburger')
let menu = document.querySelector('.menu-mobile__wrapper')
hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('is-active')
	menu.classList.toggle('is-active')

	if (menu.classList.contains('is-active')) {
		document.querySelector('.navbar').classList.add('is-opened')
	} else {
		document.querySelector('.navbar').classList.remove('is-opened')
	}
})

//cards menu toggle
let triggers = document.querySelectorAll('.cards__menu-trigger')

triggers.forEach((trigger) => {
	trigger.addEventListener('click', function () {
		this.parentElement
			.querySelector('.cards__menu-list')
			.classList.toggle('is-active')
	})
})

//form
let inputs = document.querySelectorAll('.form__steps-input-radio')

const removeClass = () => {
	for (let i = 0; i < inputs.length; i++) {
		inputs[i].parentElement.classList.remove('is-checked')
	}
}

inputs.forEach((input) => {
	let label = input.parentElement
	input.addEventListener('input', () => {
		removeClass()
		label.classList.add('is-checked')
	})
})

let accordionItems = document.querySelectorAll('.faq__item')

accordionItems.forEach((item) => {
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

let searchInput = document.querySelector('.faq__search-input')
if (searchInput) {
	let getValue = (elem) => {
		let value = elem.value
		return value
	}

	let targets = document.querySelectorAll('.faq__item-body')

	let searchBtn = document.querySelector('.faq__search-btn')
	searchBtn.addEventListener('click', (event) => {
		event.preventDefault()
		let toSearch = getValue(searchInput)

		targets.forEach((target) => {
			let text = target.textContent

			if (target.textContent.includes(toSearch)) {
				target.parentElement.parentElement.style.display = 'block'
			} else {
				target.parentElement.parentElement.style.display = 'none'
			}
		})
	})
}

let files = document.querySelectorAll('input[type=file]')
if (files) {
	files.forEach((input) => {
		input.addEventListener('change', () => {
			let file = input.value
			if (file.length > 0) {
				input.parentElement.classList.add('valid')
			} else {
				input.parentElement.classList.remove('valid')
				input.parentElement.classList.add('not-valid')
			}
		})
	})
}

var ua = navigator.userAgent.toLowerCase()
if (ua.indexOf('safari') != -1) {
	if (ua.indexOf('chrome') > -1) {
		document.body.classList.add('--is-chrome')
	} else {
		document.body.classList.add('--is-safari')
	}
}
