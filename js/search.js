// Inputs de búsqueda y filtros
const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');
const publisherFilter = document.getElementById('publisherFilter');
const genderFilter = document.getElementById('genderFilter');
const powerFilter = document.getElementById('powerFilter');

// Búsqueda por nombre
searchInput.addEventListener('input', () => {
  currentPage = 1;
  renderHeroes();
});

// Orden alfabético
sortSelect.addEventListener('change', () => {
  currentPage = 1;
  renderHeroes();
});

// Filtros
publisherFilter.addEventListener('change', () => {
  currentPage = 1;
  renderHeroes();
});

genderFilter.addEventListener('change', () => {
  currentPage = 1;
  renderHeroes();
});

powerFilter.addEventListener('change', () => {
  currentPage = 1;
  renderHeroes();
});