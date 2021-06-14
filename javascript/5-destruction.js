// Пример 8 - Деструктуризация объекта
// Присвоить значение переменным name и status равные значениям соответсвующих полей объекта
// (явно и с помощью деструктуризации)

// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// const { stars, name } = hotel;

// // let name = hotel.name;
// // let stars = hotel.stars;

// console.log(name); // 'Resort Hotel',
// console.log(stars); // 5

/////////////////////////////////////////////////////

// Пример 9 - Деструктуризация объекта
// Объявим переменные и присвоим им значения из объекта:
// - hotelName (переименовать name),
// - stars (по умолчанию 4),
// - smallBuilding
// - mainCapacity (переименовать mainBuilding и по умолчанию 80),
// - hasPool (по умолчанию false)

// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: {
//     smallBuilding: 50,
//     mainBuilding: 100,
//   },
// };

// const {
//   name: hotelName,
//   stars = 4,
//   capacity: { smallBuilding, mainBuilding: mainCapacity = 80 },
//   hasPool = false,
// } = hotel;

// console.log(hotelName); // 'Resort Hotel'
// console.log(stars); // 5
// console.log(smallBuilding); // 50
// console.log(mainCapacity); // 100
// console.log(hasPool); // false

/////////////////////////////////////////////////////////////////////

// Пример 10 - Деструктуризация объекта
// напишите функцию
// которая принимает информацию о пользователе
// и выводит ее в консоль в виде строки:
// `name: ${name}, age: ${age}, hobby: ${hobby}, premium: ${premium}`

// // 1. Принимает список свойств (сначала деструктурировать в переменные, потом передать при вызове)

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// const showUserInfo = (premium, name, age, hobby) => {
//   const message = `name: ${name}, age: ${age}, hobby: ${hobby}, premium: ${premium}`;

//   console.log(message);
// };

// const { name, age, hobby, premium } = user;

// showUserInfo(premium, name, age, hobby);

// 2. Принимает объект, а внутри деструктурирует

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// const showUserInfo = anyUser => {
// const { name, age, hobby, premium } = anyUser;
//   const message = `name: ${name}, age: ${age}, hobby: ${hobby}, premium: ${premium}`;

//   console.log(message);
// };

// showUserInfo(user);

// 3. Принимает объект, деструктурирует в параметрах

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// const showUserInfo = (num, { name, age, hobby, tel = 'no tel' }) => {
//   const message = `name: ${name}, age: ${age}, hobby: ${hobby}, tel: ${tel}, count: ${num} `;

//   console.log(message);
// };

// showUserInfo(105, user);

///////////////////////////////////////////////////////////////////////////

// ⚠️Помятка для JS
// Передавай аргументы как один объект и сделай коллег счастливым.
// Все согласятся что довольно сложно разобратся в таком коде:

// const createUser = (username, date, isAdmin, isMod) => {
//   //create user
// };

// createUser('Ivan', '16-02-2021', false, true);

// // // // А на примере ниже можно отчетливо в уме рассортировать аргументы по значениям.
// const createUser = ({ username, date, isAdmin, isMod }) => {
//   //create user

// };

// createUser({
//   username: 'Ivan',
//   date: '16-02-2021',
//   idAdmin: false,
//   isMod: true,
// });

// ---------------------------------------------------------------------------------------
// // Используйте это в вашем коде и порадуйте ваших коллег.
// // ---------------------------------------------------------------------------------------

/////////////////////////////////////////////////////////////////////

// Пример 11 - Деструктуризация массива
// Запиши в переменные a, b, c значения первых трех элементов массива, а в переменную d - два оставшихся, как массив

// const strNum = ['one', 'two', 'three', 'four', 'five'];

// const [a, , c, ...d] = strNum;

// console.log(a); // 'one'
// console.log(c); // 'three'
// console.log(d); // ['four', 'five']

/////////////////////////////////////////////////////////

// Пример 12 - Деструктуризация массива в функции при получении аргумента

// let numb = [5, 10, 20];

// function showArrVal([a, b, c]) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// showArrVal(numb);

//////////////////////////////////////////////////////////////////////////////

// Пример 13 - Деструктуризация массива
// используя Object entries, for of
// и деструктуризацию массива напишите скрипт, который
// выводит содержимое объекта user в формате ключ:значение

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// const props = Object.entries(user);
// // console.log(props);

// for (const [key, value] of props) {
//   // const [key, value] = prop;

//   console.log(`${key}: ${value}`);
// }

///////////////////////////////////////////////////////////////////////

// Пример REST операция в объектах

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// const { premium, age, ...chartData } = user;
// const { age, ...userCopy } = user;

// console.log(chartData);
// console.log(age);

// const userCopy = { ...user };

// console.log(userCopy);
// console.log(userCopy === user);

//////////////////////////////////////////////////////////////////////////
