const themebtn = document.getElementById('btn-theme');
const body = document.querySelector('body');
const themebtnImage = document.querySelector('.image-btn');

function setThemeMode() {
  var preferredMode = localStorage.getItem('preferredmode');
  var preferredPagemode = localStorage.getItem('preferredpagemode');
}
themebtn.addEventListener('click', () => {
  const darkThemeOn = body.classList.contains('dark-theme');
  body.classList.toggle('dark-theme');

  if (darkThemeOn) {
    themebtnImage.setAttribute('src', './src/images/icons/sun.png');
  } else {
    themebtnImage.setAttribute('src', './src/images/icons/moon.png');
  }
});
