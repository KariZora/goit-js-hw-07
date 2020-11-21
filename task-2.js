const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

const ul = document.querySelector('#ingredients');

function createList(item) {
    const li = document.createElement('li');
    li.textContent = item;
    return li;
}

const list = ingredients.map(createList);

ul.append(...list);

