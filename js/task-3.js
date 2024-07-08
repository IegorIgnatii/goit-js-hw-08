const inputElem = document.querySelector('#name-input');
const outputElem = document.querySelector('#name-output');
inputElem.addEventListener('input', inputText);

function inputText() {
  const cleanValue = inputElem.value.trim();

  outputElem.textContent = cleanValue;
  if (cleanValue === '') {
    outputElem.textContent = 'Anonymous';
  }
}
