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
    centeredSlides: true
})