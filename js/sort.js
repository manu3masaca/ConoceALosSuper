const sortSelect = document.getElementById('sortSelect');

sortSelect.addEventListener('change', () => {
  currentPage = 1;
  renderHeroes();
});
