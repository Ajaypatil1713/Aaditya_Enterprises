document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const sliderContainer = document.querySelector('.slider-container');
    const partners = document.querySelectorAll('.partner');
    
    let index = 0;
    let partnerWidth = partners[0].offsetWidth + parseInt(getComputedStyle(partners[0]).marginRight) * 2; 

    function calculateMaxIndex() {
        const visiblePartners = Math.floor(sliderContainer.offsetWidth / partnerWidth);
        return Math.max(0, partners.length - visiblePartners);
    }

    let maxIndex = calculateMaxIndex();

    function updateSlider() {
        sliderWrapper.style.transition = 'transform 0.5s ease-in-out';
        sliderWrapper.style.transform = `translateX(${-index * partnerWidth}px)`;
    }

    // Move to the previous slide
    prevButton.addEventListener('click', () => {
        if (index > 0) {
            index--;
            updateSlider();
        }
    });

    // Move to the next slide
    nextButton.addEventListener('click', () => {
        if (index < maxIndex) {
            index++;
            updateSlider();
        }
    });

    // Update max index and adjust slider on window resize
    window.addEventListener('resize', () => {
        partnerWidth = partners[0].offsetWidth + parseInt(getComputedStyle(partners[0]).marginRight) * 2;
        maxIndex = calculateMaxIndex();
        index = Math.min(index, maxIndex);
        updateSlider();
    });
});
