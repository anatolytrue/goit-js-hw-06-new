const input = document.querySelector('#name-input')
const output = document.querySelector('#name-output')

input.addEventListener('input', onInputName);

function onInputName() {
    if (input.value === '') {
        output.innerHTML = 'Anonymous'
    } else {
        output.innerHTML = input.value
    }
    
}