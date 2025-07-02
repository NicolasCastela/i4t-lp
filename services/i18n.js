
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
      lng: savedLang || 'pt',             // Define o idioma padrão explicitamente
      fallbackLng: false,
      debug: false,
      backend: {
        loadPath: `../../lang/${folderName}/{{lng}}-${pageName}.json`
      }
    }, function (err, t) {
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.innerHTML = i18next.t(key);
      });
      updateFlagIcon();
    });
} else {
  updateFlagIcon();
}

function changeLang(lang) {
  localStorage.setItem('language', lang);
  location.reload();
}

function updateFlagIcon() {
  const flagIcon = document.getElementById("flag-icon-ry");
  const flagMap = {
    es: "../../assets/spain.png",
    en: "../../assets/united-states.png"
  };
  if (flagIcon && flagMap[savedLang]) {
    flagIcon.src = flagMap[savedLang];
  }
}
