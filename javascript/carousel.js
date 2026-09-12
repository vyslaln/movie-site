// Carousel Buttons
const carousels = document.querySelectorAll('.carousel-wrapper');

carousels.forEach(function (wrapper) {
    const list = wrapper.querySelector('.movie-list');
    const prevBtn = wrapper.querySelector('.prev');
    const nextBtn = wrapper.querySelector('.next');
    const scrollAmount = 400;

    prevBtn.addEventListener('click', function () {
        list.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', function () {
        list.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
});