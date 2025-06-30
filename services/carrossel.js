document.addEventListener('DOMContentLoaded', function () {
  const carousels = document.querySelectorAll('.carousel');
  const firstCarousel = carousels[0]; // o primeiro da página

  if (!firstCarousel) return;

  const track = firstCarousel.querySelector('.carousel-track');
  const isMobile = window.innerWidth <= 768;
  let prevBtn, nextBtn, dots;

if (isMobile && firstCarousel.querySelector('.carousel-controls-mobile')) {
  const controls = firstCarousel.querySelector('.carousel-controls-mobile');
  prevBtn = controls.querySelector('.carousel-btn.prev');
  nextBtn = controls.querySelector('.carousel-btn.next');
  dots = controls.querySelectorAll('.carousel-dot');
} else {
  // Pegue só botões que NÃO estão dentro do bloco mobile
  prevBtn = firstCarousel.querySelector(':scope > .carousel-btn.prev');
  nextBtn = firstCarousel.querySelector(':scope > .carousel-btn.next');
  dots = firstCarousel.querySelectorAll(':scope > .carousel-indicators .carousel-dot');
}
  const items = firstCarousel.querySelectorAll('.carousel-item');
  let current = 0;

  function showItem(index) {
    if (window.innerWidth > 768) {
      track.style.transform = `translateX(-${index * 100}%)`;
    } else {
      track.style.transform = 'none';
    }
    items.forEach((item, i) => {
      item.classList.toggle('active', i === index);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }

  prevBtn.addEventListener('click', () => {
    current = (current - 1 + items.length) % items.length;
    showItem(current);
  });

  nextBtn.addEventListener('click', () => {
    current = (current + 1) % items.length;
    showItem(current);
  });

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      current = i;
      showItem(current);
    });
  });

  showItem(current);
   if (window.innerWidth > 2000) {
      intervalId = setInterval(() => {
        current = (current + 1) % items.length;
        showItem(current);
      }, 4500);
      // Pausa ao passar mouse (opcional)
      carousel.addEventListener('mouseenter', () => clearInterval(intervalId));
      carousel.addEventListener('mouseleave', () => {
        intervalId = setInterval(() => {
          current = (current + 1) % items.length;
          showItem(current);
        }, 3000);
      });
    }
});


document.addEventListener('DOMContentLoaded', function () {
  const carousels = document.querySelectorAll('.carousel');
  const firstCarousel = carousels[1]; // o segundo da página

  if (!firstCarousel) return;

  const track = firstCarousel.querySelector('.carousel-track');
  const isMobile = window.innerWidth <= 768;
  let prevBtn, nextBtn, dots;

if (isMobile && firstCarousel.querySelector('.carousel-controls-mobile')) {
  const controls = firstCarousel.querySelector('.carousel-controls-mobile');
  prevBtn = controls.querySelector('.carousel-btn.prev');
  nextBtn = controls.querySelector('.carousel-btn.next');
  dots = controls.querySelectorAll('.carousel-dot');
} else {
  // Pegue só botões que NÃO estão dentro do bloco mobile
  prevBtn = firstCarousel.querySelector(':scope > .carousel-btn.prev');
  nextBtn = firstCarousel.querySelector(':scope > .carousel-btn.next');
  dots = firstCarousel.querySelectorAll(':scope > .carousel-indicators .carousel-dot');
}
  const items = firstCarousel.querySelectorAll('.carousel-item');
  let current = 0;

  function showItem(index) {
    if (window.innerWidth > 768) {
      track.style.transform = `translateX(-${index * 100}%)`;
    } else {
      track.style.transform = 'none';
    }
    items.forEach((item, i) => {
      item.classList.toggle('active', i === index);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }

  prevBtn.addEventListener('click', () => {
    current = (current - 1 + items.length) % items.length;
    showItem(current);
  });

  nextBtn.addEventListener('click', () => {
    current = (current + 1) % items.length;
    showItem(current);
  });

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      current = i;
      showItem(current);
    });
  });

  showItem(current);
   if (window.innerWidth > 768) {
      intervalId = setInterval(() => {
        current = (current + 1) % items.length;
        showItem(current);
      }, 4500);
      // Pausa ao passar mouse (opcional)
      carousel.addEventListener('mouseenter', () => clearInterval(intervalId));
      carousel.addEventListener('mouseleave', () => {
        intervalId = setInterval(() => {
          current = (current + 1) % items.length;
          showItem(current);
        }, 3000);
      });
    }
});