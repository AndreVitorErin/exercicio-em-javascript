let tabCountries = null;
let tabFavorites = null;

let allCountries = [];
let favoriteCountries = [];

let countCountries = 0;
let countFavorites = 0;

totalPopulationList = 0;
totalPopulationFavorites = 0;

numberFormat = null;

window.addEventListener('load', () => {
  tabCountries = document.querySelector('#tabCountries');
  tabFavorites = document.querySelector('#tabFavorites');
  countCountries = document.querySelector('#countCountries');
  countFavorites = document.querySelector('#countFavorites');

  // prettier-ignore
  totalPopulationList = 
  document.querySelector('#totalPopulationList');
  // prettier-ignore
  totalPopulationFavorites = 
  document.querySelector('#totalPopulationFavorites');

  numberFormat = Intl.NumberFormat('pt-BR');

  fetchCountries();
});

async function fetchCountries() {
  const res = await fetch('https://restcountries.eu/rest/v2/all');
  const json = await res.json();
  allCountries = json.map((country) => {
    const { numericCode, translations, population, flag } = country;

    return {
      id: numericCode,
      name: translations.pt,
      population,
      flag,
    };
  });
  render();
}

function render() {
  renderCountryList();
  renderFavorites();
  renderSummary();

  handleCountryButtons();
}

function renderCountryList() {
  let countriesHTML = '<div>';

  allCountries.forEach((country) => {
    const { name, flag, id, population } = country;
    // prettier-ignore
    const countryHTML = 
    `<div class='country'>
      <div>
        <a id="${id}" class="waves-effect waves-light btn">+</a>
      </div>
        <img src="${flag}" alt="${name}"/>
      <div>
        <ul>
          <li>${name}</li>
          <li>${population}</li>
        </ul>
      </div>      
    </div>`;

    countriesHTML += countryHTML;
  });
  tabCountries.innerHTML = countriesHTML;
}
function renderFavorites() {}
console.log('rendering...');
function renderSummary() {}
function handleCountryButtons() {}
