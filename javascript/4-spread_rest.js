// Пример 1 Array SPREAD
// Используя методы объекта Math найти минимальное/максимальное число в массиве чисел

// const arrayOfNumbers = [24, 11, 5, 127];

// const maxNumber = Math.max(...arrayOfNumbers);
// const minNumber = Math.min(...arrayOfNumbers);

// console.log(maxNumber);
// console.log(minNumber);

///////////////////////////////////////////////////////////////////////////

// Пример 2 Object SPREAD
// 1) Сделать копию объекта userSettings
// 2) объеденить объекты defaultSettings и userSettings
// в объект finalSettings

// const defaultSettings = {
//   ff: 'TMR',
//   fsz: 16,
//   color: '#000',
//   bgc: '#fff',
// };

// const userSettings = {
//   ff: 'Arial',
//   fsz: 14,
// };

// const currentSettings = { ...defaultSettings, ...userSettings };

// // console.log(
// //   'defaultSettings === currentSettings',
// //   defaultSettings === currentSettings,
// // );

// // console.log('userSettings', userSettings);
// console.log('defaultSettings', defaultSettings);
// console.log('currentSettings', currentSettings);

// console.log(
//   'userSettingsCopy === userSettings',
//   userSettingsCopy === userSettings,
// );

// console.log('finalSettings', finalSettings);

//////////////////////////////////////////////

// Пример 3 Object SPREAD / delete
// Напишите функцию getObjectWithoutProperty, которая принимает объект и название свойства и возвращает копию объекта без этого свойства

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// const getObjectWithoutProperty = function (obj, keyName) {};

// // const userWithoutAge = getObjectWithoutProperty(user, 'age');

// // console.table('userWithoutAge', userWithoutAge);
// // console.table('user', user);

// console.table(getObjectWithoutProperty(user, 'age'));
// console.table(getObjectWithoutProperty(user, 'name'));
// console.table(getObjectWithoutProperty(user, 'jgljklkglk'));
// console.table('user', user);

//////////////////////////////////////////////////////////////////////////////

// Пример 4
// Что будет в консоли

// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };

// const c = {
//   ...a,
//   ...b,
//   d: 2000,
// };

// const c = {
//   ...b,
//   ...a,
//   x: 5,
//   z: 1,
// };

// console.log(c);

///////////////////////////////////////////////////////////

// Пример 5
// Array SPREAD
// add the elements of an existing array (certsToAdd) into a new array (certifications) at index 1
// Вставить сплайсом / Вставить распылением

// let certsToAdd = ['Algorithms', 'Front End'];

// let certifications = [
//   'Web Design',
//   ...certsToAdd,
//   'Data Visualization',
//   'APIs',
//   'Information Security',
// ];

// certifications.splice(1, ...certsToAdd);

// console.log(certifications);

////////////////////////////////////////////////////////////////////

// Пример 6
// Array SPREAD
// pass elements of an array as arguments to a function

// function addThreeNumbers(x, y, z) {
//   console.log(x + y + z);
// }

// let salary = [100, 200, 500, 50, 333];

// // variant #1 (manualy by array and indexes)
// addThreeNumbers(salary[0], salary[1], salary[2]);

// // variant #2 (spread)
// addThreeNumbers(...salary);

////////////////////////////////////////////////////////////////////

// Пример 7
// Array SPREAD

// 1) copy arrays (slice vs spread)

// let arr = [1, 2, 3];

// let arrCopy = arr.slice();
// let arrCopy = [...arr];

// // console.log('arr', arr);
// // console.log('arrCopy', arrCopy);
// // console.log(arr === arrCopy);

// // 2) concatenate arrays (concat vs spread)

// let arr1 = [0, 1, 2];
// let arr2 = [3, 4, 5];

// // let unitedArr = arr1.concat(arr2);
// let unitedArr = [...arr1, ...arr2];

// console.log('unitedArr', unitedArr);
// console.log(arr1);

/////////////////////////////////////////////////////////////////

// REST: condense multiple elements into an array
// Написать функцию, которая получает разное количество аргументов (первый аргумент - множитель, остальные - числа).
// Нужно вернуть новый массив, состоящий из остальных чисел, умноженных на множитель.

// function multiply(multiplier, ...args) {
//   const args2 = [];

//   for (const arg of args) {
//     args2.push(arg * multiplier);
//   }

//   return args2;
// }

// const result = multiply(3, 1, 2, 3, 8, 9);
// console.log(result);

/////////////////////////////////////////////////////////////////////
