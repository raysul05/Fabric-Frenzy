// JavaScript for Slider Functionality

let currentSlideIndex = {
    'featured-slider': 0,
    'trending-slider': 0,
    'new-arrivals-slider': 0
};

function showSlide(sliderId, index) {
    const slider = document.getElementById(sliderId);
    const slides = slider.querySelector('.slides');
    const totalSlides = slides.children.length;
    if (index >= totalSlides) {
        currentSlideIndex[sliderId] = 0;
    } else if (index < 0) {
        currentSlideIndex[sliderId] = totalSlides - 1;
    } else {
        currentSlideIndex[sliderId] = index;
    }
    slides.style.transform = `translateX(-${currentSlideIndex[sliderId] * 100}%)`;
}

function nextSlide(sliderId) {
    showSlide(sliderId, currentSlideIndex[sliderId] + 1);
}

function prevSlide(sliderId) {
    showSlide(sliderId, currentSlideIndex[sliderId] - 1);
}

// Auto-slide feature (optional)
function autoSlide(sliderId, interval = 5000) {
    setInterval(() => {
        nextSlide(sliderId);
    }, interval);
}

document.addEventListener('DOMContentLoaded', () => {
    autoSlide('featured-slider');
    autoSlide('trending-slider');
    autoSlide('new-arrivals-slider');
});
