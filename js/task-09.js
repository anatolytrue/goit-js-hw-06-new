function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.body;
let colorName = document.querySelector('.color');
const buttonColor = document.querySelector('.change-color');

buttonColor.addEventListener('click', onClickChangeColor);
console.log(buttonColor)

function onClickChangeColor() {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  colorName.textContent = `${newColor}`;
}



