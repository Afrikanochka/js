// 1 - Фокус (focus, blur, input, addEventListener)
// Есть инпут. При потере фокуса, проверяем его, и если он пустой,
// красим границу в красный цвет (клас .error)
// Доп - ф-ция для валидации, убираем цвет при фокусе или инпуте

// const inputRef = document.querySelector('.text');

// inputRef.addEventListener('blur', event => {
//   const input = event.target;
//   console.log(input);
//   if (input.value === '') {
//     inputRef.classList.add('error');
//   }
// });

// inputRef.addEventListener('focus', event => {
//   inputRef.classList.remove('error');
// });

//////////////////////////////////////////////////////////

// 2 - Инпут
// Сделайте так, чтобы при вводе в инпут введенный текст попадал в абзац под инпутом

// const ref = {
//   input: document.querySelector('[name="message"]'),
//   output: document.querySelector('.text'),
// };

// ref.input.addEventListener('input', onInput);

// function onInput(event) {
//   ref.output.textContent = ref.input.value;
// }

//////////////////////////////////////////////////////////

// Пример 3 - Попап (click, keydown, removeEvenListener)
// Дан простой скрытый попап с классом js-popup.
// При нажатии на кнопку, показать попап, класс popup_open.
// При нажатии на ESC скрыть.
// Слушатель ESC не должен постоянно висеть на window, а слушатель клика должен бездействовать при открытой модалке
// (короткая запись слушателя - oninput, нельзя снять слушателя)

// const refs = {
//   btn: document.querySelector('.js-open-popup-btn'),
//   popup: document.querySelector('.js-popup'),
// };

// refs.btn.addEventListener('click', onBtnClick);

// function onBtnClick() {
//   if (refs.popup.classList.contains('popup_open')) {
//     console.log('Already open!');
//     return;
//   }
//   refs.popup.classList.add('popup_open');
//   window.addEventListener('keydown', onEscPress);
//   refs.btn.disabled = true;
// }

// function onEscPress(event) {
//   if (event.code !== 'Escape') {
//     console.log("It's not an Escape button");
//     return;
//   }
//   refs.popup.classList.remove('popup_open');
//   window.removeEventListener('keydown', onEscPress);
//   refs.btn.disabled = false;
// }

/////////////////////////////////////////////////////////////

// 4 - Туду лист (change, submit, preventDefault, form.elements)
// Есть форма с одним инпутом, куда вводится текст.
// 1) И есть чекбокс. Пока чекбокс не нажат, кнопка на форме неактивна.
// 2) По нажатию Enter в инпуте или по нажатию на кнопку Add (type="submit"), в список ниже, добавляется todo-заметка.
// 3) Очистить инпут
// 4) Убрать перезагрузку, обращаться через форму (elements) и имя инпута
// 5) При клике на todo-заметку в списке, она становится выполненной, т.е. текст зачеркивается (класс complete)
// 6) чекбокс при добавлении заметки снова должен стать не выбранным

// const refs = {
//   checkbox: document.querySelector('input[name="confirm"]'),
//   addBtn: document.querySelector('button[type="submit"]'),
//   input: document.querySelector('input[name="todo"]'),
//   form: document.querySelector('form'),
//   list: document.querySelector('ol.todo-list'),
// };

// refs.form.addEventListener('submit', event => onFormSubmit(event, refs.list));
// refs.checkbox.addEventListener('change', onConfirm);

// function onFormSubmit(event, list) {
//   event.preventDefault();
//   const form = event.currentTarget;
//   const input = form.elements.myTodo;

//   const liRef = document.createElement('li');
//   liRef.textContent = input.value;
//   list.append(liRef);

//   liRef.addEventListener('click', evt =>
//     evt.target.classList.toggle('complete'),
//   );

//   // list.insertAdjacentHTML('beforeend', `<li class="new-li">${input.value}</li>`);

//   // refs.input.value = '';
//   form.reset();
// }

// function onConfirm(event) {
//   const checkbox = event.currentTarget;

//   // refs.addBtn.disabled = !checkbox.checked;

//   refs.addBtn.disabled = checkbox.checked ? false : true;

//   // if (checkbox.checked) {
//   //   refs.addBtn.disabled = false;
//   // } else {
//   //   refs.addBtn.disabled = true;
//   // }
// }
