document.addEventListener('DOMContentLoaded', function () {
    const sliderWrapper = document.querySelector('.testimonial-wrapper');
    const prevButton = document.querySelector('.preview');
    const nextButton = document.querySelector('.nextpage');
    let currentIndex = 0;
    const items = document.querySelectorAll('.testimonial-item');
    const totalItems = items.length;

    // Clone the first set of items for infinite scrolling
    sliderWrapper.append(...Array.from(items).map(item => item.cloneNode(true)));

    function showItem(index) {
        const offset = -index * 100;
        sliderWrapper.style.transform = `translateX(${offset}%)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalItems;
        showItem(currentIndex);

        // Check if we are at the end of the original items
        if (currentIndex === 0) {
            setTimeout(() => {
                sliderWrapper.style.transition = 'none';
                sliderWrapper.style.transform = `translateX(0%)`;
                currentIndex = totalItems;
                setTimeout(() => {
                    sliderWrapper.style.transition = 'transform 0.5s ease-in-out';
                }, 20);
            }, 500); // Delay to make sure transition reset is noticeable
        }
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        showItem(currentIndex);

        // Check if we are at the beginning of the original items
        if (currentIndex === totalItems - 1) {
            setTimeout(() => {
                sliderWrapper.style.transition = 'none';
                sliderWrapper.style.transform = `translateX(-${totalItems * 100}%)`;
                currentIndex = totalItems - 1;
                setTimeout(() => {
                    sliderWrapper.style.transition = 'transform 0.5s ease-in-out';
                }, 20);
            }, 500); // Delay to make sure transition reset is noticeable
        }
    }

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    // Automatic slide every 2 seconds
    setInterval(nextSlide, 3000);
});


