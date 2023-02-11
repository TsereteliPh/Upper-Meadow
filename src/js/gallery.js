const cottageGalleries = document.querySelectorAll('.js-light-gallery');

cottageGalleries.forEach(gallery => {
    lightGallery(gallery, {
        plugins: [lgThumbnail, lgVideo],
        videojs: true,
        speed: 500
    });
});

