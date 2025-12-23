//obtener los datos desde la API

const API_URL = 'https://akabab.github.io/superhero-api/api/all.json';

let heroes = [];

async function fetchHeroes() {
  const response = await fetch(API_URL);
  heroes = await response.json();
  renderHeroes();
}

// Se ejecuta al cargar la página
fetchHeroes();



