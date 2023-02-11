window.addEventListener('DOMContentLoaded', () => {
    const cottageSlider = document.querySelector('.cottage__wrapper');
    const cottageCaptions = cottageSlider.querySelectorAll('.about__caption');
    const bullets = cottageSlider.querySelectorAll('.swiper-pagination-bullet');

    for (let i=0; i < cottageCaptions.length; i++) {
        let caption = cottageCaptions[i].textContent;

        bullets[i].dataset.bulletCaption = caption;
    }
})