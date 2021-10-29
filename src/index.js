// import './sass/main.scss';
import menuCards from '../src/templates/card.hbs';

const refs = {
  input: document.querySelector('.js-input'),
  list: document.querySelector('.list'),
};

// refs.input;
// console.log('🚀 ~ file: index.js ~ line 8 ~ refs.input', refs.input);

refs.input.addEventListener('input', changeInput);

function changeInput(e) {
  e.preventDefault();
  const form = e.currentTarget.value;

  fetchCountries(form)
    .then(shov)
    .catch(err => {
      console.log(err);
    });
}
// pokeapi.co / api / v2 / pokemon / 1;
function fetchCountries(input) {
  return fetch(`https:pokeapi.co/api/v2/pokemon/${input}`).then(response => {
    return response.json();
  });
}

// fetchCountries('a').then(p => console.log(p));

function shov(countries) {
  const murcap = menuCards(countries);
  // console.log(menuCards(countries));
  refs.list.innerHTML = murcap;
}
// console.log('🚀 ~ file: index.js ~ line 37 ~ shov ~ refs.item', refs.item);
