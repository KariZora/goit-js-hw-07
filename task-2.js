const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

const ul = document.querySelector('#ingredients');

const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
const li4 = document.createElement('li');
const li5 = document.createElement('li');
const li6 = document.createElement('li');

const list = [li1, li2, li3, li4, li5, li6]

    for(let i=0; i<6; i+=1) {
        list[i].textContent = ingredients[i];
    }

ul.append(...list)

