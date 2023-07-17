function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputBoxes = document.querySelector('#controls>input')
const createButton = document.querySelector('button[data-create]')
const destroyButton = document.querySelector('button[data-destroy]')
const boxes = document.querySelector('#boxes')

createButton.addEventListener('click', () => createBoxes(inputBoxes.value));
destroyButton.addEventListener('click', desroyBoxes)

function createBoxes(amount) {
  let size = 30;
  const container = [];

  for (let i = 0; i < amount; i += 1){
    size += 10;
    const div = document.createElement('div');
    div.style.width = size + 'px'
    div.style.height = size + 'px'
    div.style.backgroundColor = getRandomHexColor();
    container.push(div)
  }
  boxes.append(...container)
  // return boxes
};

function desroyBoxes(){
  boxes.innerHTML = '';
  inputBoxes.value = '';
}
