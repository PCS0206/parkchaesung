document.addEventListener('DOMContentLoaded', (event) => {
  const languageSelect = document.getElementById('language-select');
  languageSelect.addEventListener('change', (event) => {
      const selectedLanguage = event.target.value;
      if (selectedLanguage === 'ko') {
          window.location.href = 'https://pcs0206.github.io/parkchaesung/kr/';
      } else if (selectedLanguage === 'en') {
          window.location.href = 'https://pcs0206.github.io/parkchaesung/en/';
      }
  });

  const buttons = document.querySelectorAll('.buttons button');
  buttons.forEach(button => {
      button.addEventListener('click', () => {
      });
  });
});
