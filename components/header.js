fetch('../../components/header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header-placeholder').innerHTML = data;

    setTimeout(() => {
      const hamburgerBtn = document.getElementById('hamburger-btn');
      const mobileMenu = document.getElementById('mobile-menu');

      if (hamburgerBtn && mobileMenu) {
        hamburgerBtn.addEventListener('click', () => {
          mobileMenu.classList.toggle('active');
        });
      }
    }, 0);
  });
