//aplicando búsqueda, filtros, orden y paginado

function renderHeroes() {
  const list = document.getElementById('heroesList');
  const info = document.getElementById('resultsInfo');

  // Búsqueda por nombre
  const searchValue = searchInput.value.toLowerCase();

  // Filtros
  const publisherFilter = document.getElementById('publisherFilter').value;
  const genderFilter = document.getElementById('genderFilter').value;
  const powerFilter = document.getElementById('powerFilter').value;

  // Filtrado general
  let filtered = heroes.filter(hero => {
    const matchesName = hero.name.toLowerCase().includes(searchValue);

    const matchesPublisher =
      publisherFilter === 'all' ||
      hero.biography.publisher === publisherFilter;

    const matchesGender =
      genderFilter === 'all' ||
      hero.appearance.gender === genderFilter;

    return matchesName && matchesPublisher && matchesGender;
  });

  // Ordenar por poder
  if (powerFilter !== 'none') {
    filtered.sort((a, b) => {
      return b.powerstats[powerFilter] - a.powerstats[powerFilter];
    });
  }

  // por orden alfabético
  if (powerFilter === 'none') {
    filtered.sort((a, b) => {
      return sortSelect.value === 'asc'
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    });
  }

  // Info resultados
  info.textContent = `Resultados: ${filtered.length}`;

  // Paginado
  const paginatedHeroes = paginate(filtered);

  list.innerHTML = '';

  paginatedHeroes.forEach(hero => {
    const article = document.createElement('article');

    article.innerHTML = `
      <img src="${hero.images.sm}" alt="${hero.name}">
      <h2>${hero.name}</h2>
    `;

    article.addEventListener('click', () => {
      showHeroDetails(hero);
    });

    list.appendChild(article);
  });

  // Renderiza paginado
  renderPagination(filtered.length);
}