/* eslint-disable semi */
const hamburger = document.getElementById('hamburguerlogo');
const button = document.getElementById('closingbutton');
const elementscontainer = document.getElementById('elements-container');

hamburger.addEventListener('click', () => {
  document.querySelector('#hamburguerlogo').classList.toggle('nodisplay');
  document.getElementById('elements-container').classList.remove('nodisplay');
});
button.addEventListener('click', () => {
  elementscontainer.classList.toggle('nodisplay');
  document.querySelector('#hamburguerlogo').classList.toggle('nodisplay');
});
