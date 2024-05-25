const slider = document.querySelector(".slider-container");
const sliderWrapper = document.querySelector(".slider-wrapper");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const dots = document.querySelectorAll(".dot");

let currentSlideIndex = 0;
let width = slider.clientWidth;

// Set slide width dynamically
sliderWrapper.style.width = slides.length * width + "px";
slides.forEach((slide) => (slide.style.width = width + "px"));

// Function to move to a specific slide
function moveToSlide(slideIndex) {
  slides[currentSlideIndex].classList.remove("active");
  sliderWrapper.style.transform = `translateX(-${slideIndex * width}px)`;
  slides[slideIndex].classList.add("active");
  currentSlideIndex = slideIndex;

  // Update indicator dots
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[currentSlideIndex].classList.add("active");
}

// Automatic image preview
let intervalId = setInterval(() => {
  const nextSlideIndex = currentSlideIndex + 1;
  if (nextSlideIndex < slides.length) {
    moveToSlide(nextSlideIndex);
  } else {
    moveToSlide(0); // Go back to the first slide
  }
}, 2000); // Change image every 3 seconds

// Move to next slide on button click
nextBtn.addEventListener("click", () => {
  clearInterval(intervalId); // Stop automatic preview on manual interaction
  const nextSlideIndex = currentSlideIndex + 1;
  if (nextSlideIndex < slides.length) {
    moveToSlide(nextSlideIndex);
  } else {
    moveToSlide(0);
  }
  // Restart automatic preview after manual slide change (optional)
  // intervalId = setInterval(/* ... */, 3000);
});

// Move to previous slide on button click (similar logic)
prevBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  // ... (rest of the logic)
  // Restart automatic preview after manual slide change (optional)
});

// Move to slide on dot click (similar logic)
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    clearInterval(intervalId);
    moveToSlide(index);
    // Restart automatic preview after manual slide change (optional)
  });
});

// Handle window resize (similar logic)
window.addEventListener("resize", () => {
  // ... (rest of the logic)
});

// Initial slide activation
slides[currentSlideIndex].classList.add("active");
