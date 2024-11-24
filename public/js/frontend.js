// Initialize i18next
i18next.init({
  lng: 'en', // default language
  resources: {
      en: {
          translation: {
              "create_music": "Create Music Instantly with AI",
              "hero_description": "Your AI-powered music creation platform."
          }
      },
      zh: {
          translation: {
              "create_music": "即時使用AI創作音樂",
              "hero_description": "您的AI音樂創作平台。"
          }
      }
  }
}, (err, t) => {
  // Update the content after initialization
  updateContent();
});

function updateContent() {
  document.getElementById('create-music-text').innerText = i18next.t('create_music');
  document.getElementById('hero-description').innerText = i18next.t('hero_description');
}

// Language switcher
document.getElementById('language-select').addEventListener('change', (e) => {
  i18next.changeLanguage(e.target.value, () => {
      updateContent();
  });
});

// Event listeners for buttons
document.getElementById('get-started').addEventListener('click', () => {
  window.location.href = 'music-creation.html';
});

document.getElementById('login-btn').addEventListener('click', () => {
  window.location.href = 'login.html';
});

document.getElementById('signup-btn').addEventListener('click', () => {
  window.location.href = 'signup.html';
});