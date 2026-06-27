const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__list');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
});

const swiper = new Swiper('.projects__slider', {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 20,

  breakpoints: {
    640: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  },

  navigation: {
    nextEl: '.projects__arrow-next',
    prevEl: '.projects__arrow-prev'
  }
});
