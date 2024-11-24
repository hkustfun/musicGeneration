// Event Listeners for Navigation Buttons
document.getElementById('login-btn').addEventListener('click', () => {
  window.location.href = 'login.html';
});

document.getElementById('signup-btn').addEventListener('click', () => {
  window.location.href = 'signup.html';
});

// Event Listener for Language Switcher
document.getElementById('language-select').addEventListener('change', (e) => {
  const selectedLanguage = e.target.value;
  // Logic to change language (assuming you have i18n setup)
  i18next.changeLanguage(selectedLanguage, () => {
    updateContent();
  });
});

// Function to Update Content Based on Language
function updateContent() {
  document.getElementById('create-music-text').innerText = i18next.t('create_music');
  // Update other elements...
}

// Event Listener for "Get Started" Button
document.getElementById('get-started').addEventListener('click', () => {
  window.location.href = 'music-creation.html';
});