import Swiper from 'swiper'

let wrapper = document.querySelector('.form__steps')
if (wrapper) {
  let sliderForm = new Swiper(wrapper, {
    init: false,
    loop: false,
    noSwiping: true,
    noSwipingClass: 'form__steps-step',
    on: {
      init: function() {
        if (sliderForm.realIndex == 0) {
          prevBtn.disabled = true
        } else {
          prevBtn.disabled = false
        }
      },
      transitionEnd: function() {
        if (sliderForm.realIndex == 3) {
          nextBtn.disabled = true
        } else {
          nextBtn.disabled = false
          prevBtn.disabled = false
        }

        let target
        switch (sliderForm.realIndex) {
          case 0:
            target = progress[0]
            target.parentElement.classList.remove('is-active')
            target.parentElement.classList.add('is-active')
            break
          case 1:
          case 2:
            target = progress[1]
            target.parentElement.classList.remove('is-active')
            target.parentElement.classList.add('is-active')
            break
          case 3:
            target = progress[2]
            target.parentElement.classList.remove('is-active')
            target.parentElement.classList.add('is-active')
            break
        }

        progress.forEach(item => {})
      },
    },
  })
  let nextBtn = document.querySelector('.form__steps-nav--next')
  let prevBtn = document.querySelector('.form__steps-nav--prev')

  let slideNext = event => {
    event.preventDefault()
    let parent = document.querySelector('.swiper-slide-active')
    let inputs = parent.querySelectorAll('.form__steps-input-radio')
    inputs.forEach(input => {
      if (input.checked) {
        let index //default is 0
        let target = input.dataset.target

        switch (target) {
          case 'build-price':
            index = 1
            break
          case 'project-price':
            index = 2
            break
          case 'form-confirm':
            index = 3
            break
        }

        sliderForm.slideTo(index)
      }
    })
  }

  let slidePrev = event => {
    event.preventDefault()
    sliderForm.slideTo(sliderForm.previousIndex)
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', slideNext)
  }
  if (prevBtn) {
    prevBtn.addEventListener('click', slidePrev)
  }

  let progress = document.querySelectorAll('.step--progress-marker')

  if (sliderForm) {
    sliderForm.init()
  }
}
