let tabUser = null;
let tabEstatistica = null;

let allUsers = [];
let filteredUsers = [];

let totalMasculino = 0;
let totalFeminino = 0;
let somaIdades = 0;
let mediaIdades = 0;

window.addEventListener('load', () => {
  tabUser = document.querySelector('#tabUser');
  tabEstatistica = document.querySelector('#tabEstatistica');
  totalMasculino = document.querySelector('#totalMasculino');
  totalFeminino = document.querySelector('#totalFeminino');
  somaIdades = document.querySelector('#somaIdades');
  mediaIdades = document.querySelector('#mediaIdades');

  fetchUser();
});

async function fetchUser() {
  const res = await fetch(
    'https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo'
  );
  const { results } = await res.json();
  allUsers = results.map((user) => {
    const { name, picture, dob, gender } = user;
    return {
      name: name,
      age: dob.age,
      gender: gender,
      picture: picture.thumbnail,
    };
  });

  render();
}

function render() {
  renderUserList();
  renderEstatisticas();

  handleButtons();
}

function renderUserList() {
  let usersHTML = '<div>';

  allUsers.forEach((user) => {
    const { name, picture, dob, gender } = user;
    // prettier-ignore
    const userHTML = 
    `<div class='country'>
      <div>
        <a id="${id}" class="waves-effect waves-light btn">+</a>
      </div>
        <img src="${flag}" alt="${name}"/>
      <div>
        <ul>
          <li>${name}</li>
          <li>${formattedPopulation}</li>
        </ul>
      </div>      
    </div>`;

    usersHTML += countryHTML;
  });

  countriesHTML += '</div>';
  tabCountries.innerHTML = countriesHTML;
}

/*function renderFavorites() {
  let favoritesHTML = '<div>';

  favoriteCountries.forEach((country) => {
    const { name, flag, id, formattedPopulation } = country;

    // prettier-ignore
    const favoriteCountryHTML = 
      `<div class='country'>
        <div>
          <a id="${id}" class="waves-effect waves-light btn red darken-4">-</a>
        </div>
          <img src="${flag}" alt="${name}"/>
        <div>
          <ul>
            <li>${name}</li>
            <li>${formattedPopulation}</li>
          </ul>
        </div>      
      </div>`;

    favoritesHTML += favoriteCountryHTML;
  });

  favoritesHTML += '</div>';
  tabFavorites.innerHTML = favoritesHTML;
}

function renderSummary() {
  countCountries.textContent = allCountries.length;
  countFavorites.textContent = favoriteCountries.length;

  const totalPopulation = allCountries.reduce((accumulator, current) => {
    return accumulator + current.population;
  }, 0);

  const totalFavorites = favoriteCountries.reduce((accumulator, current) => {
    return accumulator + current.population;
  }, 0);

  totalPopulationList.textContent = formatNumber(totalPopulation);
  totalPopulationFavorites.textContent = formatNumber(totalFavorites);
}
function handleCountryButtons() {
  const countryButtons = Array.from(tabCountries.querySelectorAll('.btn'));
  const favoriteButtons = Array.from(tabFavorites.querySelectorAll('.btn'));

  countryButtons.forEach((button) => {
    button.addEventListener('click', () => addToFavorites(button.id));
  });

  favoriteButtons.forEach((button) => {
    button.addEventListener('click', () => removeFromFavorites(button.id));
  });
}

function addToFavorites(id) {
  const countryToAdd = allCountries.find((country) => country.id === id);

  favoriteCountries = [...favoriteCountries, countryToAdd];

  favoriteCountries.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  allCountries = allCountries.filter((country) => country.id !== id);

  render();
}

function removeFromFavorites(id) {
  const countryToRemove = favoriteCountries.find(
    (country) => country.id === id
  );

  allCountries = [...allCountries, countryToRemove];

  allCountries.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  favoriteCountries = favoriteCountries.filter((country) => country.id !== id);

  render();
}

function formatNumber(number) {
  return numberFormat.format(number);
}*/
