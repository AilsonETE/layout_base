document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelector('.slides');
    const images = document.querySelectorAll('.slides img');
    const slideWidth = images[0].clientWidth;
    let counter = 1;

    setInterval(() => {
      slides.style.transition = 'transform 0.5s ease-in-out';
      slides.style.transform = `translateX(-${slideWidth * counter}px)`;
      counter++;

      if (counter === images.length) {
        setTimeout(() => {
          slides.style.transition = 'none';
          slides.style.transform = 'translateX(0)';
          counter = 1;
        }, 500);
      }
    }, 3000); 

  //  console.log('O script foi carregado e está sendo executado.');
});
