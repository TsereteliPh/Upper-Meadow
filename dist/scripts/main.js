const header = document.querySelector('.header');
const burgerBtn = header.querySelector('.header__burger');
const headerMenu = header.querySelector('.header__menu');

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('header__burger--open');
    headerMenu.classList.toggle('header__menu--active');
})