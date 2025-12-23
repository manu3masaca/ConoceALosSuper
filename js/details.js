// Muestra detalles del héroe
function showHeroDetails(hero) {
  const details = document.getElementById('heroDetails');

  details.hidden = false;

  details.innerHTML = `
    <article class="hero-detail">
      <h2>${hero.name}</h2>
      <img src="${hero.images.md}" alt="${hero.name}">

      ${hero.biography.fullName ? `<p><strong>Nombre real:</strong> ${hero.biography.fullName}</p>` : ''}
      ${hero.biography.publisher ? `<p><strong>Editorial:</strong> ${hero.biography.publisher}</p>` : ''}

      <h3>Estadísticas</h3>
      <p> Inteligencia: ${hero.powerstats.intelligence}</p>
      <p> Fuerza: ${hero.powerstats.strength}</p>
      <p> Velocidad: ${hero.powerstats.speed}</p>
      <p> Combate: ${hero.powerstats.combat}</p>
    </article>
  `;

  // Cierra al hacer click fuera de la card
  details.addEventListener('click', closeDetails);

  //Evita que el click dentro de la card cierre el modal
  const card = details.querySelector('.hero-detail');
  card.addEventListener('click', (event) => {
    event.stopPropagation();
  });
}

// Cierra el modal
function closeDetails() {
  const details = document.getElementById('heroDetails');
  details.hidden = true;
  details.innerHTML = '';
}

