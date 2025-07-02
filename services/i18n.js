const savedLang = localStorage.getItem('language') || 'pt';

// Pega o caminho da URL (sem host)
const path = window.location.pathname;

// Divide e remove strings vazias
const parts = path.split('/').filter(Boolean);

// Determina o nome da página
let pageName;
let folderName;

if (parts.length === 0) {
  // Ex: '/'
  folderName = 'home';
  pageName = 'index';
} else if (parts.length === 1) {
  // Ex: '/contact.html' ou '/about.html'
  const last = parts[0];
  if (last.endsWith('.html')) {
    folderName = 'pages';
    pageName = last.replace('.html', '');
  } else {
    // Ex: '/aboutUs/' → pasta com index.html
    folderName = last;
    pageName = 'index';
  }
} else {
  // Ex: '/pages/aboutUs/' ou '/pages/aboutUs/contact.html'
  const last = parts[parts.length - 1];
  if (last.endsWith('.html')) {
    pageName = last.replace('.html', '');
    folderName = parts[parts.length - 2];
  } else {
    // Ex: '/pages/aboutUs/' → termina com '/', serve index.html
    folderName = last;
    pageName = 'index';
  }
}

console.log('folderName:', folderName);
console.log('pageName:', pageName);

if (savedLang !== 'pt') {
  i18next
    .use(i18nextHttpBackend)
    .init({
      lng: savedLang,
      debug: false,
      backend: {
        loadPath: `lang/${folderName}/{{lng}}-${pageName}.json`
      }
    }, function (err, t) {
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.innerHTML = i18next.t(key);
      });
    });
}

function changeLang(lang) {
  localStorage.setItem('language', lang);
  location.reload();
}
