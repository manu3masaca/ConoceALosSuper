// Activa y desactiva el modo oscuro

const darkButton = document.getElementById('darkModeToggle');

darkButton.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

