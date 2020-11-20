const span = document.querySelector('#text');
const input = document.querySelector('#font-size-control')

const checkSize = function () {
    span.style.fontSize = `${input.valueAsNumber}px`;
  };
  input.addEventListener('input', () => checkSize());