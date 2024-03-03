// Function

// function sayHello() {
//   console.log(`Mayur Kanade`);
// }

// sayHello();
// sayHello();
// sayHello();
// sayHello();
// sayHello();

/* Multiply two numbers in JS */

// function mulTwoNums(num1, num2) {
//   return num1 * num2;
// }

// function add(num1, num2) {
//   return num1 + num2;
// }

// let ans = mulTwoNums(4, 5);
// console.log(ans);
// let addResult = add(5, 5);
// console.log(addResult + 1);

// add function for n number of parameters

function addParaNumbers() {
  let ans = 0;
  for (let i = 0; i < arguments.length; i++) {
    ans += arguments[i]; //argument keyword taking the multiple arguments dynamically at runtime.
  }
  return ans;
}

let result = addParaNumbers(12, 222, 557, 987, 789);
console.log(result);
