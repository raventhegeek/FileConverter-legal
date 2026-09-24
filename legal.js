(() => {
  const buttons = [...document.querySelectorAll('[data-language-button]')];
  function setLanguage(language) {
    document.body.dataset.language = language;
    document.documentElement.lang = language;
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.languageButton === language)));
    try { localStorage.setItem('fileconverter-legal-language', language); } catch (_) { /* Storage may be disabled. */ }
  }
  buttons.forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.languageButton)));
  let saved;
  try { saved = localStorage.getItem('fileconverter-legal-language'); } catch (_) { /* Storage may be disabled. */ }
  setLanguage(saved === 'en' || saved === 'tr' ? saved : ((navigator.language || '').toLowerCase().startsWith('tr') ? 'tr' : 'en'));
})();
