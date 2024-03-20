document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelector('.slides');
  const slideWidth = slides.offsetWidth;
  let counter = 1;

  setInterval(() => {
    slides.style.transition = 'transform 0.5s ease-in-out';
    slides.style.transform = `translateX(-${slideWidth * counter}px)`;
    counter++;

    if (counter === slides.children.length) {
      setTimeout(() => {
        slides.style.transition = 'none';
        slides.style.transform = 'translateX(0)';
        counter = 1;
      }, 0); 
    }
  }, 3500); 
});