import Swiper from 'swiper'

let wrapper = document.querySelector('.form__steps-specialists')
if (wrapper) {
  let sliderForm = new Swiper(wrapper, {
    init: false,
    loop: false,
    noSwiping: true,
    noSwipingClass: 'form__steps-specialists',
    on: {
      init: function() {
        if (sliderForm.realIndex == 0) {
          prevBtn.disabled = true
        } else {
          prevBtn.disabled = false
        }
      },
      transitionEnd: function() {
        console.log(sliderForm.realIndex)
        if (sliderForm.realIndex == 4) {
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
            document.querySelector('.form__steps-nav').style.display = 'flex'
            break
          case 1:
            target = progress[1]
            target.parentElement.classList.remove('is-active')
            target.parentElement.classList.add('is-active')
            document.querySelector('.form__steps-nav').style.display = 'flex'
            break
          case 2:
            target = progress[2]
            target.parentElement.classList.remove('is-active')
            target.parentElement.classList.add('is-active')
            document.querySelector('.form__steps-nav').style.display = 'flex'
            break
          case 3:
            target = progress[3]
            target.parentElement.classList.remove('is-active')
            target.parentElement.classList.add('is-active')
            document.querySelector('.form__steps-nav').style.display = 'flex'
            break
          case 4:
            target = progress[4]
            target.parentElement.classList.remove('is-active')
            target.parentElement.classList.add('is-active')
            document.querySelector('.form__steps-nav').style.display = 'none'
            break
        }
      },
    },
  })
  let nextBtn = document.querySelector('.form__steps-nav--next')
  let prevBtn = document.querySelector('.form__steps-nav--prev')

  let slideNext = event => {
    event.preventDefault()
    sliderForm.slideTo(sliderForm.activeIndex + 1)
  }

  let slidePrev = event => {
    event.preventDefault()
    sliderForm.slideTo(sliderForm.activeIndex - 1)
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
