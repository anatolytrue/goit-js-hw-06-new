const counterMarkup = document.querySelector('#value');
const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');
let counterValue = 0;

decrementButton.addEventListener('click', () => {
    counterValue -= 1;
    counterMarkup.innerHTML = counterValue;
});
incrementButton.addEventListener('click', (e) => {
    counterValue += 1;
    counterMarkup.innerHTML = counterValue;
})
console.log(counterValue)