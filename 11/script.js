/* The forEach function in JS acts as a callback function over the array */

// let students = ["Mayur", "Rishabh", "Ajay", "Mahendra", "Yuvraj"];
// // it's like in-built callback function
// //students.forEach((val) => console.log(val + " Cricket Icon"));

// // or you can perform any operations on it.
// students.forEach((val) => console.log(val.toUpperCase()));

// forEach method doesn't return any value and
// if you want to store the value of forEach into another array you have to create a new array explicitly.
/* const numbers = [1, 2, 5, 6, 9];
let newArr = [];
numbers.forEach((num) => newArr.push(num * 2)); // because forEach() does not return
console.log(newArr); */

// .map method returns a value and it does not required any new array to store the value.
// .map method creates a new array automatically when returns some values

// const numbers = [1, 2, 5, 6, 9];
// let newStorage = numbers.map((val) => val * 2); // here it returns the new array.
// console.log(newStorage);

let numStore = [2, 4, 6, 8]; //  this is myArray

function square(num) {
  // Square Function
  return num * num;
}

let forEachSquare = numStore.forEach((val) => square(val));
console.log(forEachSquare); // forEach does not return any value. output : undefined.

let mapSquare = numStore.map((val) => square(val));
console.log(mapSquare); // map returns the value into newArray. output: [4,16,36,64]

let findNumber = numStore.find((val) => val === 4);
console.log(findNumber); // true if present the number and if not present then it's undefined.

let findIndexOfNumber = numStore.findIndex((val) => val === 4);
console.log(findIndexOfNumber); // true if present the number and if not present then it's -1

let isPresent = numStore.includes(4);
console.log(isPresent); // if number is present it will return true and if not present then it will be false.

let filterEven = numStore.filter((val) => val % 2 === 0);
console.log(filterEven);
