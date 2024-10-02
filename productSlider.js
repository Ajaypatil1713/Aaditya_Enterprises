const slideInterval = 3000; // Time between slides in milliseconds

  // Function to slide the products
  function startSlider() {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const sliderContainer = document.querySelector('.slider-container');
    
    let slideIndex = 0;
    const totalSlides = sliderWrapper.children.length;
    const slideWidth = sliderWrapper.children[0].offsetWidth + 16; // Adjust if margin is different

    function slide() {
      slideIndex++;
      if (slideIndex >= totalSlides) {
        slideIndex = 0;
        sliderWrapper.style.transition = 'none'; // Disable transition for a moment
        sliderWrapper.style.transform = `translateX(0px)`; // Reset to start position
        setTimeout(() => {
          sliderWrapper.style.transition = 'transform 0.5s ease'; // Re-enable transition
        }, 50); // Short delay to allow reset
      } else {
        sliderWrapper.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
      }
    }

    // Start sliding automatically
    setInterval(slide, slideInterval);

    // Add touch support
    let startX = 0;
    let currentX = 0;
    let isDragging = false;

    sliderContainer.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      isDragging = true;
      sliderWrapper.style.transition = 'none'; // Disable transition during drag
    });

    sliderContainer.addEventListener('touchmove', (e) => {
      if (isDragging) {
        currentX = e.touches[0].clientX;
        const deltaX = startX - currentX;
        sliderWrapper.style.transform = `translateX(-${slideIndex * slideWidth + deltaX}px)`;
      }
    });

    sliderContainer.addEventListener('touchend', () => {
      isDragging = false;
      sliderWrapper.style.transition = 'transform 0.5s ease'; // Re-enable transition
      // Adjust slide index based on drag distance
      const deltaX = startX - currentX;
      if (deltaX > 50) {
        slideIndex++;
      } else if (deltaX < -50) {
        slideIndex--;
      }
      if (slideIndex < 0) slideIndex = 0;
      if (slideIndex >= totalSlides) slideIndex = totalSlides - 1;
      sliderWrapper.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
    });
  }

  // Start the slider when the page loads
  document.addEventListener('DOMContentLoaded', startSlider);