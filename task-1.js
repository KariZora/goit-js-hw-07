// Посчитает и выведет в консоль количество категорий
// #categories, то есть элементов li.item. 
// Получится 'В списке 3 категории.'.

const liItem = document.querySelectorAll('.item');
console.log(`В списке ${liItem.length} категории`)

// Для каждого элемента li.item в списке ul#categories, 
// найдет и выведет в консоль 
// текст заголовка элемента (тега h2) 
// и количество элементов в категории 
// (всех вложенных в него элементов li).
// Категория: Животные
// Количество элементов: 4
 
// console.log(liItem)

function fn(arr) {
    arr.forEach(item => console.log(
        `${item.children[0].textContent}: ${item.children[1].children.length}`));

}
fn(liItem)