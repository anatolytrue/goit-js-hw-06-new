const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

const markup = ingredients
  .map((ingredient) => `<li>${ingredient}</li>`)
  .join('')

list.insertAdjacentHTML('beforeend', markup);