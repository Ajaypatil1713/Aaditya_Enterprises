document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const sliderWrapper = document.querySelector('.slider-wrapper');

    let index = 0;

    function updateSlider() {
        const width = sliderWrapper.children[0].offsetWidth;
        sliderWrapper.style.transform = `translateX(${-index * width}px)`;
    }

    prevButton.addEventListener('click', () => {
        index = Math.max(index - 1, 0);
        updateSlider();
    });

    nextButton.addEventListener('click', () => {
        index = Math.min(index + 1, sliderWrapper.children.length - 1);
        updateSlider();
    });

    updateSlider();
});
