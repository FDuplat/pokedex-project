const themeButton = document.getElementById('button-theme');
const body = document.querySelector('body');
const imageThemeButton = document.querySelector('.image-button');

themeButton.addEventListener('click', () => {
  const darkThemeOn = body.classList.contains('dark-theme');
  body.classList.toggle('dark-theme');

  if (darkThemeOn) {
    imageThemeButton.setAttribute('src', './src/images/icons/sun.png');
  } else {
    imageThemeButton.setAttribute('src', './src/images/icons/moon.png');
  }
});
