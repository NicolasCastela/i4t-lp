document.addEventListener('DOMContentLoaded', function () {
  const carousels = document.querySelectorAll('.carousel');
  const firstCarousel = carousels[0]; // o primeiro da página

  if (!firstCarousel) return;

  const track = firstCarousel.querySelector('.carousel-track');
  const items = firstCarousel.querySelectorAll('.carousel-item');
  const prevBtn = firstCarousel.querySelector('.carousel-btn.prev');
  const nextBtn = firstCarousel.querySelector('.carousel-btn.next');
  const dots = firstCarousel.querySelectorAll('.carousel-dot');
  let current = 0;

  function showItem(index) {
    track.style.transform = `translateX(-${index * 100}%)`;
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
});



// SEGUNDO CARROSSEL 



document.addEventListener('DOMContentLoaded', function () {
  const carousels = document.querySelectorAll('.carousel');
  const secondCarousel = carousels[1]; // o segundo da página

  if (!secondCarousel) return; // evita erro se não existir

  const track = secondCarousel.querySelector('.carousel-track');
  const items = secondCarousel.querySelectorAll('.carousel-item');
  const prevBtn = secondCarousel.querySelector('.carousel-btn.prev');
  const nextBtn = secondCarousel.querySelector('.carousel-btn.next');
  const dots = secondCarousel.querySelectorAll('.carousel-dot');
  let current = 0;

  function showItem(index) {
    track.style.transform = `translateX(-${index * 100}%)`;
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
});
