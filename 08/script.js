// Arrow Functions

// // 1. Syntax
// function sayHello() {
//   console.log("Normal Function Hello");
// }
// sayHello();

// // ES6 Arrow function

// let sayBye = () => {
//   // Arrow function
//   console.log("Bella Ciao!!");
// };

// sayBye();

// // const add = (a, b) => {
// //   // arguments in Arrow functions.
// //   return a + b;
// // };

// // OR single statement

// const add_v2 = (a, b) => a + b;

// console.log(add_v2(4, 5)); // one liner function

// // 2. 'arguments' keyword
// /* The arguments keyword is not available in the Arrow function.
//  The arguments keyword is only available in normal function.
//  However, the spread argument is possible in the Arrow functions.
//  */
// // eg:

// let addNumbers = (...numbers) => {
//   let ans = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     ans += numbers[i];
//   }
//   console.log(ans);
// };

// let result = addNumbers(55, 55, 100);
// console.log(result);

// 3. Hoisting
// Hoisting is possible only for the normal functions but not for the Arrow functions.

// hoisting example for the normal function.

sayHey(); // it will execute in the normal function

function sayHey() {
  // this would be created first in the memory.
  console.log("Hello There");
}

// 4. this keyword
