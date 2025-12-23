// Mantiene la página actual, 20 elementos por página

let currentPage = 1;
const itemsPerPage = 20;

// Devuelve los elementos correspondientes a la página actual
function paginate(data) {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return data.slice(startIndex, endIndex);
}

// Renderiza los botones del paginado
function renderPagination(totalItems) {
  const pagination = document.getElementById('pagination');
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  pagination.innerHTML = '';

  // Botón Primera página
  const firstButton = document.createElement('button');
  firstButton.textContent = '⏮';
  firstButton.disabled = currentPage === 1;
  firstButton.addEventListener('click', () => {
    currentPage = 1;
    renderHeroes();
  });

  // Botón Página anterior
  const prevButton = document.createElement('button');
  prevButton.textContent = '◀';
  prevButton.disabled = currentPage === 1;
  prevButton.addEventListener('click', () => {
    currentPage--;
    renderHeroes();
  });

  // Info de página actual
  const pageInfo = document.createElement('span');
  pageInfo.textContent = `Página ${currentPage} de ${totalPages}`;

  // Botón Página siguiente
  const nextButton = document.createElement('button');
  nextButton.textContent = '▶';
  nextButton.disabled = currentPage === totalPages;
  nextButton.addEventListener('click', () => {
    currentPage++;
    renderHeroes();
  });

  // Botón Última página
  const lastButton = document.createElement('button');
  lastButton.textContent = '⏭';
  lastButton.disabled = currentPage === totalPages;
  lastButton.addEventListener('click', () => {
    currentPage = totalPages;
    renderHeroes();
  });

  pagination.append(
    firstButton,
    prevButton,
    pageInfo,
    nextButton,
    lastButton
  );
}



