// Пример 6 - Замыкания
// Напишите функцию makeCounter(), которая возвращает другую функцию, которая считает и возвращает количество своих вызовов.

// console.log('---------COUNTER 1-----------');

// const makeCounter = () => {
//   let count = 0;
//   const counter = () => {
//     count += 1;
//     return count;
//   };
//   return counter;
// };

// const counter1 = makeCounter(); // fn #1

// const callCount1 = counter1();
// const callCount2 = counter1();

// console.log(`Вызов counter1 № ${callCount1}`); // 1
// console.log(`Вызов counter1 № ${callCount2}`); // 2
// console.log(`Вызов counter1 № ${counter1()}`); // 3
// console.log(`Вызов counter1 № ${counter1()}`); // 4

// console.log('---------COUNTER 2-----------');

// const counter2 = makeCounter(); // fn #2

// const call2Count1 = counter2();

// console.log(`Вызов counter2 № ${call2Count1}`); // 1
// console.log(`Вызов counter2 № ${counter2()}`); // 2

// console.log('---------COUNTER 1-----------');

// console.log(`Вызов counter1 № ${counter1()}`); // 5
// console.log(`Вызов counter1 № ${counter1()}`); // 6

// console.log('---------COUNTER 2-----------');

// console.log(`Вызов counter2 № ${counter2()}`); // 3

// console.log('---------COUNTER 3-----------');

// const counter3 = makeCounter(); // fn #3

// console.log(`Вызов counter3 № ${counter3()}`);

////////////////////////////////////////////////////////////////////

// Пример 7 - напишите функцию
// makeCounter() - которая возвращает обект счетчик
// у которого есть методы
// increment() - увеличить на переданное значение (по умолчанию 1)
// decrement() - уменьшить на переданное значение (по умолчанию 1)
// reset() - сбросить счетчик в 0
// show() - вывести текущее значение в консоль

// const makeCounter = counter => {
//   // let counter = 0;

//   const object = {
//     increment(value = 1) {
//       counter += value;
//     },
//     decrement() {
//       counter -= 1;
//     },
//     reset() {
//       counter = 0;
//     },
//     show() {
//       console.log(counter);
//     },
//   };

//   return object;
// };

// const counter1 = makeCounter(0); // counter = 0
// const counter2 = makeCounter(100); // counter = 0

// console.log('---------COUNTER 1-----------');
// console.log(counter1);
// console.log('---------COUNTER 2-----------');
// console.log(counter2);
// console.log('counter1 === counter2', counter1 === counter2);

// console.log('---------COUNTER 1-----------');
// counter1.show();
// console.log('---------COUNTER 2-----------');
// counter2.show();

// counter1.increment(5);
// counter1.increment();

// console.log('---------COUNTER 1-----------');
// counter1.show();
// console.log('---------COUNTER 2-----------');
// counter2.show();

// counter1.decrement();

// console.log('---------COUNTER 1-----------');
// counter1.show();
// console.log('---------COUNTER 2-----------');
// counter2.show();

// counter1.reset();
// counter2.decrement();

// console.log('---------COUNTER 1-----------');
// counter1.show();
// console.log('---------COUNTER 2-----------');
// counter2.show();

// console.dir(counter1);

////////////////////////////////////////////////////////