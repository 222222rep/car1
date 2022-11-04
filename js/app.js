const header_dop_window = document.querySelector('.header_dop_window');
const dop_window = document.querySelector('.dop_window');

header_dop_window.addEventListener('click', () => {
  dop_window.classList.toggle('active');
  document.querySelector('.arr').classList.toggle('rotate');
});
