// Создай переменную counterValue
 //в которой будет хранится 
 //текущее значение счетчика.
// Создай функции increment и decrement 
//для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки,
// вызовы функций и обновление интерфейса

let counterValue = 0;
function decrement() {
    counterValue -= 1;

    render();
}

function increment() {
    counterValue += 1;

    render();
}

function render() {
    ref.htmlValue.textContent = counterValue;
}

const ref = {
    buttonDecrement: document.querySelector('button[data-action="decrement"]'),
    buttonIncrement: document.querySelector('button[data-action="increment"]'),
    htmlValue: document.querySelector('#value')
}

// console.log(ref.buttonDecrement);
// console.log(ref.buttonIncrement);
// console.log(ref.htmlValue);

ref.buttonDecrement.addEventListener('click', decrement);

ref.buttonIncrement.addEventListener('click', increment);