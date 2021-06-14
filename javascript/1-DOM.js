// 1 - Классы

// Дан элемент #elem.
// Получить ссылку на него.

// const span = document.querySelector('#elem');
// const span = document.querySelector('.red');
// const span = document.querySelector('span');

// Добавьте ему класс blue.

// span.classList.add('blue');

// Удалите у него класс red.

// span.classList.remove('red');

// Проверьте наличие у него класса blue.

// console.log(span.classList.contains('blue'));

// Добавьте ему класс blue, если его нет, и удалите - если есть.

// span.classList.toggle('blue');

// /////////////////////////////////////////////////////////////////

// Пример 2 - style

// Дан элемент #elem.
// const span = document.querySelector('#elem');

// Задайте ему фон цвета tomato

// span.style.backgroundColor = 'tomato';

// добавьте ему черную границу шириной 5рх

// span.style.border = '5px solid black';

// /////////////////////////////////////////////////////////////

// Пример 3 - Свойство tagName и текстовый контент

// Дан элемент #elem.
// Выведите название его тега.

// const titleRef = document.querySelector('#elem');
// console.log(titleRef.tagName);

// Даны элементы с классом text.
// Получите ссылку на все эти элементы.
// Добавьте каждому элементу в конец
// название его тега в нижнем регистре.

// const textElems = document.querySelectorAll('.text');
// // console.log(textElems);

// textElems.forEach(elem => {
//   console.dir(elem);
//   elem.textContent += elem.nodeName;
// });

// /////////////////////////////////////////////////////////////

// 4 - Создание и вставка элементов через appendChild,
// insertBefore и append. Children.

// Дан ol. Вставьте в конец списка новую li с текстом 'Soft Skills'.
// const olRef = document.querySelector('ol');

// const li = document.createElement('li');
// li.textContent = 'Soft Skills';

// // const li2 = document.createElement('li');
// // li2.textContent = 'Soft Skills';

// olRef.appendChild(li);
// // olRef.append(li2);

// // Получить список вложенных в ol элементов, и вывести их количество в консоль

// // const liElems = olRef.querySelectorAll('li');
// const liElems = olRef.children;

// console.log(liElems.length);

// // Вставить li с текстом 'Vue' не в конец, а в середину списка.
// // Определить средний индекс и использовать insertBefore

// const newLi = document.createElement('li');
// newLi.textContent = 'Vue';

// const middleIndex = Math.floor(liElems.length / 2);

// olRef.insertBefore(newLi, liElems[middleIndex]);

// // Дан ul, вставьте созданные ранее лишки в конец ul за одну операцию вставки

// const list = document.querySelector('ul');

// list.append(...liElems);

// ////////////////////////////////////////////////////////////////

// 5 - Создание элементов
// Дан массив строк.
// Создайте ul через createElement, затем вставьте каждый элемент этого массива в отдельную li внутри этого ul, затем вставьте этот ul в конец body.

// const cities = ['Paris', 'Kyiv', 'NewYork'];

// const list = document.createElement('ul');

// const citiesElems = cities.map(city => {
//   const liElem = document.createElement('li');
//   liElem.textContent = city;
//   return liElem;
// });

// list.append(...citiesElems);

// document.body.append(list);

// /////////////////////////////////////////////////////////////////

// 6 - Потомки

// Дан элемент список ul #elem.

// const list = document.querySelector('#elem');

// Найдите первого потомка/ребенка этого элемента и сделайте его текст красного цвета.

// list.firstElementChild.style.color = 'red';

// Найдите последнего потомка этого элемента и сделайте его текст синего цвета.

// list.lastElementChild.style.color = 'blue';

// Найдите всех потомков этого элемента и добавьте им в конец текст '!'

// ///////////////////////////////////////////////////////////

// 7 - Соседи
// Дан элемент li #middle. Сделайте его текст красным.

// const elemRef = document.querySelector('#middle');

// Найдите его соседа сверху и добавьте ему в конец текст '!'.

// elemRef.previousElementSibling.textContent += '!';

// Найдите его соседа снизу и добавьте ему в конец текст '?'.

// Найдите его соседа снизу его соседа снизу
// (следующий элемент за соседним) и добавьте ему в конец текст '#'.

// elemRef.nextElementSibling.nextElementSibling.textContent += '#';

// ////////////////////////////////////////////////////////////////

// 8 - Родители
// Дан элемент #middle.
// Найдите его родителя и покрасьте его фон в цвет tomato.

// const elemRef = document.querySelector('#middle');

// elemRef.parentElement.style.backgroundColor = 'tomato';

// // Найдите родителя его родителя и покрасьте его фон в синий цвет.

// elemRef.parentElement.parentElement.style.backgroundColor = 'blue';

// console.log(elemRef.closest('li'));

//////////////////////////////////////////////////////////////////////

// 9 Attributes

// Получить ссылки на все кнопки

// Для каждой кнопки проверить:
// Если она отключена - включить
// Если есть дата-атрибут value - записать его значение в текст кнопки
// Если есть дата-атрибут size - применить его значение к ширине кнопки

// const buttonsRefs = document.querySelectorAll('button');

// buttonsRefs.forEach(btn => {
//   if (btn.disabled) {
//     btn.disabled = false;
//   }

//   if (btn.dataset.value) {
//     btn.textContent = btn.dataset.value;
//   }

//   if (btn.dataset.size) {
//     btn.style.width = btn.dataset.size + 'px';
//   }
// });

////////////////////////////////////////////////////////////////////

// 10 Users
// Есть массив юзеров, вывести на страницу карточку каждого юзера с именем, возрастом и цветом глаз заданной структуры.
// Использовать шаблонные строки и insertAdjacentHTML / innerHTML (потом append)

// import users from './users.js';
// const listRef = document.querySelector('#users');

// <li>
//   <h2>Moore Hensley</h2>
//   <p>Age: 37</p>
//   <span>Eye color: </span>
//   <span style="background-color: blue"></span>
// </li>

///////////////////////

// const lisMarkup = users.map(
//   ({ name, age, eyeColor }) => `
//   <li>
//     <h2>${name}</h2>
//     <p>Age: ${age}</p>
//     <span>Eye color: </span>
//     <span style="background-color: ${eyeColor}"></span>
//   </li>`,
// );

// listRef.innerHTML = lisMarkup.join('');
// listRef.insertAdjacentHTML('beforeend', lisMarkup.join(''));
// listRef.innerHTML = '';

//////////////////////////

// const lisMarkup = users.reduce(
//   (acc, user) =>
//     acc +
//     `
//   <li>
//     <h2>${user.name}</h2>
//     <p>Age: ${user.age}</p>
//     <span>Eye color: </span>
//     <span style="background-color: ${user.eyeColor}"></span>
//   </li>`,
//   '',
// );

// listRef.innerHTML = lisMarkup;

///////////////////////////////

// const lisElems = users.map(({ name, age, eyeColor }) => {
//   const li = document.createElement('li');

//   const title = document.createElement('h2');
//   title.textContent = name;

//   const text = document.createElement('p');
//   text.textContent = `Age: ${age}`;

//   const eyeText = document.createElement('span');
//   eyeText.textContent = 'Eye color: ';

//   const eyeTextColor = document.createElement('span');
//   eyeTextColor.style.backgroundColor = eyeColor;

//   li.append(title, text, eyeText, eyeTextColor);
//   return li;
// });

// listRef.append(...lisElems);
