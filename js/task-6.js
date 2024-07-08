function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('input');

const btnDestroyEl = document.querySelector('[data-destroy]');
const btnCreateEl = document.querySelector('[data-create]');

const divBoxEl = document.querySelector('#boxes');

btnCreateEl.addEventListener('click', createBoxes);

btnDestroyEl.addEventListener('click', destroyBox);

function createBox(i) {
  const len = 30 + 10 * i;
  return `<div style="width:${len}px; height:${len}px; background-color: ${getRandomHexColor()}"  class="box"></div>`;
}

function createBoxes() {
  const condition = Number(inputEl.value);
  inputEl.value = '';
  if (condition < 1 || condition >= 100) {
    return;
  } else {
    const divBoxEl = document.querySelector('#boxes');

    const boxes = [];

    let p = 30;
    for (let i = 0; i < condition; i++) {
      boxes.push(createBox(i));
    }
    console.log(boxes.join(''));
    divBoxEl.innerHTML = boxes.join('');
  }
}

function destroyBox() {
  divBoxEl.innerHTML = '';
  inputEl.value = '';
}
