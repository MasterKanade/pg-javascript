/* Function that takes a function as an argument */
// High order function and callback.

// let add = (num1, num2) => num1 + num2; // this is my high order function and passing it into anoterh fun as an argument.

// let addThreeNumbers = (first, second, third, sum) => {
//   let result = sum(first, second);
//   return result + third;
// };

// console.log(addThreeNumbers(1, 2, 3, add));

// High Order function and callback example

// this function is called high-order function because it is accepting function as a parameter.
function add(a, b, callback) {
  let result = a + b;
  callback(result);
}

add(2, 4, (val) =>
  console.log("Passed the value from function add callback function:", val)
);
