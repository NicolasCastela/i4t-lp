fetch('../../components/header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header-placeholder').innerHTML = data;

    // Garante que o DOM seja atualizado antes de selecionar elementos
    setTimeout(() => {
      const hamburger = document.querySelector('.hamburger');
      const mobileMenu = document.getElementById('mobile-menu');

      function adjustPaths() {
        const currentPath = window.location.pathname;
        const isRoot = currentPath === '/' || currentPath.endsWith('index.html');

        const linksToAdjust = document.querySelectorAll('a[href^="../"], a[href^="../../"]');
        linksToAdjust.forEach(link => {
          let href = link.getAttribute('href');

          if (isRoot) {
            if (href.includes('index.html')) {
              href = href.replace(/^(\.\.\/)+/, '/pages/');
            } else {
              href = href.replace(/^(\.\.\/)+/, '/pages/');
              // tirar barra do final
            }
          } else {
            if (href.startsWith('../../')) {
              href = href.replace('../../', '');
            }
          }

          link.setAttribute('href', href);
        });
      }

      adjustPaths();

      // Menu hambúrguer funcional
      if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', function () {
          mobileMenu.classList.toggle('active');
          hamburger.classList.toggle('active');
        });

        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
          link.addEventListener('click', function () {
            mobileMenu.classList.remove('active');
            hamburger.classList.remove('active');
          });
        });

        document.addEventListener('click', function (event) {
          if (!hamburger.contains(event.target) && !mobileMenu.contains(event.target)) {
            mobileMenu.classList.remove('active');
            hamburger.classList.remove('active');
          }
        });
      }
    }, 0); // Garante que DOM esteja atualizado
  });

  // Exemplo de script para o header
