let btn_slide_left = document.querySelector('.slide_left');
let btn_slide_right = document.querySelector('.slide_right');

let slides = document.querySelectorAll('.content_item_slide');
let container = document.querySelector('.block_two_content_slide');

let count_slides = slides.length;
let width_slides = slides[0].offsetWidth + 10; // Ширина ОДНОГО слайда
let step = 0;
let slidesVisible = calculateVisibleSlides(); // Функция для определения видимых слайдов

// Функция для определения количества видимых слайдов
function calculateVisibleSlides() {
  const containerWidth = container.offsetWidth;
  return Math.floor(containerWidth / width_slides);
}

// Пересчет видимых слайдов при изменении размера окна
window.addEventListener('resize', () => {
  slidesVisible = calculateVisibleSlides();
  updateSlider(); // Функция для обновления положения слайдов
});

function updateSlider() {
    slides.forEach(element => {
        element.style.transform = `translateX(${step}px)`;
    });
}

btn_slide_left.addEventListener('click', () => {
    if (step < 0) {
        step += width_slides;
        updateSlider();
    } else {
        console.log("Достигнут начало слайдера");
    }
});

btn_slide_right.addEventListener('click', () => {
  let hiddenSlidesRight = count_slides - slidesVisible + (step / width_slides);

  if (hiddenSlidesRight > 1 ) {
    step -= width_slides;
    updateSlider();
  } else {
    console.log("Достигнут конец слайдера");
  }
});