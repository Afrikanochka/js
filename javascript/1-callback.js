// Пример 1 - Коллбек функции
// Напишите три функции:

// letMeSeeYourName() - принимает в параметрах имя пользователя и колбек и вызывает коллбек ф-цию callback, передавая ей имя в верхнем регистре.
// greet(name) - коллбек принимает имя и логирует в консоль строку "You are welcome, <name>!"
// sayBye(name) - коллбек принимает имя и логирует в консоль строку "Hope to see you soon, <name>!"

// const letMeSeeYourName = (name, callback) => {
//   callback(name.toUpperCase());
// };

// const greet = name => console.log(`You are welcome, ${name}!`);
// const sayBye = name => console.log(`Hope to see you soon, ${name}!`);

// letMeSeeYourName('John', greet);

// letMeSeeYourName('Kate', sayBye);

///////////////////////////////////////////////////////

// Пример 2 - Коллбек функции
// Напишите две функции:

// makeProduct(name, price, callback) - принимает имя и цену товара, а также колбек.
// Функция создаёт обьект товара, добавляя ему уникальный идентификатор в свойство id, и вызывает колбек передавая ему созданный обьект.
// showProduct(product) - коллбек принимающий обьект продукта и логирующий его в консоль - `Product "${name}" (id ${id}) costs $${price}`

// let id = 0;

// const makeProduct = (name, price, callback) => {
//   id += 1;
//   const product = { name, price, id };
//   callback(product);
// };

// const showProduct = ({ name, id, price }) => {
//   console.log(`Product "${name}" (id ${id}) costs $${price}`);
// };

// makeProduct('Fridge', 700, showProduct);
// makeProduct('Stove', 600, showProduct);
// makeProduct('Kettle', 80, showProduct);
// makeProduct('Toaster', 50, showProduct);

//////////////////////////////////////////////////////////////

// Пример 3 - Коллбек функции
// Напишите три функции:
// eachArray(arr, callback) - принимает массив и колбэк и вызывает колбэк для каждого элемента массива
// reverseString(str) - принимает строку и печатает ее в консоль задом наперед
// upperCaseString(str) - принимает строку и печатает ее в консоль в верхнем регистре

// const strings = ['Happy', 'New', 'Year!'];

// const eachArray = (arr, callback) => {
//   for (const item of arr) {
//     callback(item);
//   }
// };

// const reverseString = str => {
//   const reversedStr = str.split('').reverse().join('');
//   console.log(reversedStr);
// };

// // const upperCaseString = str => {
// //   console.log(str.toUpperCase());
// // };

// eachArray(strings, reverseString);
// console.log('------------------------');
// eachArray(strings, str => console.log(str.toUpperCase()));

/////////////////////////////////////////////////////////

// Пример 4 - напишите функции
// calculate(num1, num2, action) - которая принимает 2 числа и action - функцию - действие над числами, и выводит результат в консоль: `Function "${action.name}" returned ${result} for numbers ${num1} and ${num2}`
// add(a, b) - складывает числа
// substract(a, b) - вычитает из числа a число b
// Для операций деления и умножения при вызове calculate передавать анонимные колбеки третим аргументом (использовать стрелочные функции).

// const calculate = (num1, num2, action) => {
//   const result = action(num1, num2);
//   console.log(
//     `Function "${action.name}" returned ${result} for numbers ${num1} and ${num2}`,
//   );
// };

// const add = function (a, b) {
//   return a + b;
// };

// function substract(a, b) {
//   return a - b;
// }

// calculate(3, 7, add); // 10
// calculate(13, 7, substract); // 6

// calculate(6, 7, function mult(c, d) {
//   return c * d;
// }); // 42
// calculate(49, 7, (x, z) => x / z); // 7

//////////////////////////////////////////////////////////

// Пример 5 - Коллбек функции - Аналог map
// Напишите функцию map(array, callback), которая первым параметром принимает массив, а вторым - функцию, которая применится к каждому элементу массива. Функция map должна вернуть новый массив, элементами которого будут результаты вызова коллбека.

// function map(array, callback) {
//   const resultArr = [];
//   for (const item of array) {
//     const newItem = callback(item);
//     resultArr.push(newItem);
//   }
//   return resultArr;
// }

// const mult = element => element * 2;

// const numbers = [64, 49, 36, 25, 16];

// const multArray = map(numbers, mult);

// console.log(multArray); // [128, 98, 72, 50, 32];

// console.log(map(numbers, element => element - 10)); // [54, 39, 26, 15, 6];

// // console.log(map(numbers, element => Math.sqrt(element))); // [8, 7, 6, 5, 4];

// console.log(map(['Happy', 'New', 'Year'], str => `${str}!`)); // ['Happy!', 'New!', 'Year!']

// const floats = [1.5, 2.1, 16.4, 9.7, 11.3];

// console.log(map(floats, element => Math.ceil(element))); // [2, 3, 17, 10, 12]

// // console.log(map(floats, element => Math.floor(element))); // [1, 2, 16, 9, 11]
