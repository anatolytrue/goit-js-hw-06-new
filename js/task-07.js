const fontSizeController = document.querySelector('#font-size-control');
const textResult = document.querySelector('#text');

console.dir(fontSizeController.value);
console.dir(textResult)

fontSizeController.addEventListener('input', changeFontSize)

function changeFontSize() {
    textResult.style.fontSize = `${fontSizeController.value}px`
}