document.addEventListener('DOMContentLoaded', (event) => {
  const languageSelect = document.getElementById('language-select');
  languageSelect.addEventListener('change', (event) => {
      const selectedLanguage = event.target.value;
      if (selectedLanguage === 'en') {
          window.location.href = 'https://pcs0206.github.io/parkchaesung/en/';
      } else if (selectedLanguage === 'ko') {
          window.location.href = 'https://pcs0206.github.io/parkchaesung/kr/';
      }
  });
