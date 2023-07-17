const inputText = document.querySelector('#validation-input');
const validLength = parseInt(inputText.getAttribute('data-length'))

console.dir(inputText)
console.log(validLength)

inputText.addEventListener('blur', checkText)

function checkText(event) {
    if (event.currentTarget.value.trim().length === validLength) {
        event.currentTarget.classList.add('valid');
        event.currentTarget.classList.remove('invalid')
    } else {
        event.currentTarget.classList.add('invalid');
        event.currentTarget.classList.remove('valid')
    }
}