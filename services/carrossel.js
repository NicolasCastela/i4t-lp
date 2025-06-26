document.addEventListener('DOMContentLoaded', function () {
  const track = document.querySelector('.carousel-track');
  const items = document.querySelectorAll('.carousel-item');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  const dots = document.querySelectorAll('.carousel-dot');
  let current = 0;

  function showItem(index) {
    // Move o track
    track.style.transform = `translateX(-${index * 100}%)`;
    // Atualiza classes de ativo
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