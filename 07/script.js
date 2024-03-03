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

function addNumbers_v2(...numbers) {
  let ansv2 = 0;
  for (let k = 0; k < numbers.length; k++) {
    ansv2 += numbers[k];
  }
  return ansv2;
}

let result = addParaNumbers(100, 200, 300, 400, 500);
let result2 = addNumbers_v2(200, 200, 500);

console.log(
  `The addition of all the arguments passed in the function is:  ${result}`
);

console.log(
  `Calling function using spread operator in JS and addition is: ${result2}`
);
