document.addEventListener('DOMContentLoaded', (event) => {
  const languageSelect = document.getElementById('language-select');
  languageSelect.addEventListener('change', (event) => {
      const selectedLanguage = event.target.value;
      if (selectedLanguage === 'en') {
          window.location.href = 'https://example.com/en';
      } else if (selectedLanguage === 'ko') {
          window.location.href = 'https://example.com/ko';
      }
  });

  const buttons = document.querySelectorAll('.buttons button');
  buttons.forEach(button => {
      button.addEventListener('click', () => {
          alert(button.textContent + ' clicked');
      });
  });
});
