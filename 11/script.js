/* The forEach function in JS acts as a callback function over the array */

// let students = ["Mayur", "Rishabh", "Ajay", "Mahendra", "Yuvraj"];
// // it's like in-built callback function
// //students.forEach((val) => console.log(val + " Cricket Icon"));

// // or you can perform any operations on it.
// students.forEach((val) => console.log(val.toUpperCase()));

// forEach method doesn't return any value and
// if you want to store the value of forEach into another array you have to create a new array explicitly.
const numbers = [1, 2, 5, 6, 9];
let newArr = [];
numbers.forEach((num) => newArr.push(num * 2)); // because forEach() does not return
console.log(newArr);
