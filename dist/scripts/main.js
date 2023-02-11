const cottageGalleries = document.querySelectorAll('.js-light-gallery');

cottageGalleries.forEach(gallery => {
    lightGallery(gallery, {
        plugins: [lgThumbnail, lgVideo],
        videojs: true,
        speed: 500
    });
});


const header = document.querySelector('.header');
const burgerBtn = header.querySelector('.header__burger');
const headerMenu = header.querySelector('.header__menu');

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('header__burger--open');
    headerMenu.classList.toggle('header__menu--active');
})
window.addEventListener('DOMContentLoaded', () => {
    const cottageSlider = document.querySelector('.cottage__wrapper');
    const cottageCaptions = cottageSlider.querySelectorAll('.about__caption');
    const bullets = cottageSlider.querySelectorAll('.swiper-pagination-bullet');

    for (let i=0; i < cottageCaptions.length; i++) {
        let caption = cottageCaptions[i].textContent;

        bullets[i].dataset.bulletCaption = caption;
    }
})
const servicesSwiper = new Swiper('.cottage__wrapper', {
    effect: 'creative',
    creativeEffect: {
        prev: {
            opacity: 0,
            translate: [0, 0, 0]

        },
        next: {
            opacity: 0,
            translate: [0, 0, 0]
        }
    },
    loop: false,
    speed: 1000,
    pagination: {
        el: '.cottage__nav',
        type: 'bullets',
        clickable: true
    },
    slidesPerView: 'auto',
    centeredSlides: true,
    allowTouchMove: true
})