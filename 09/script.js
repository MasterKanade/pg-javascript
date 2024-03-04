/* Function that takes a function as an argument */
// High order function and callback.

let add = (num1, num2) => num1 + num2; // this is my high order function and passing it into anoterh fun as an argument.

let addThreeNumbers = (first, second, third, sum) => {
  let result = sum(first, second);
  return result + third;
};

console.log(addThreeNumbers(1, 2, 3, add));
