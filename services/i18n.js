 
 const savedLang = localStorage.getItem('language') || 'pt';
    const folderName = window.location.pathname.split('/').slice(-2, -1)[0];
    console.log('foldername:', folderName)
    const pageName = window.location.pathname
    .split('/')
    .pop()
    .replace('.html', '') || 'index';
    console.log('foldername:', pageName)
     if (savedLang !== 'pt') {
    i18next
      .use(i18nextHttpBackend)
      .init({
        lng: savedLang,
        debug: false,
        backend: {
          loadPath: `../../lang/${folderName}/{{lng}}-${pageName}.json`
        }
      }, function (err, t) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
          const key = el.getAttribute('data-i18n');
          el.innerHTML = i18next.t(key);
        });
      });
  }

  // Exemplo de script para o header