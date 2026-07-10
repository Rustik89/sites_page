const swiper = new Swiper('.swiper', {
  navigation: {
    nextEl: '.slider-button-next',
    prevEl: '.slider-button-prev'
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction'
  }
});

const menuBtn = document.querySelector('.menu__btn');
const menuList = document.querySelector('.menu__list');

menuBtn.addEventListener('click', () => {
  menuList.classList.toggle('menu__open');
});
