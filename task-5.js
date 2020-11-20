const ref = {
    inputRef: document.querySelector('#name-input'),
    spanRef: document.querySelector('#name-output')
};
ref.inputRef.addEventListener('input', handleTextInput);
function handleTextInput(event) {
    ref.inputRef.value
        ? ref.spanRef.textContent = event.target.value
        : ref.spanRef.textContent = 'незнакомец';
};