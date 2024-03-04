/* The most beautiful thing about javascript array is they are Hetrogeneous and not Homogeneous */

let students = ["Mayur", "Ashok", "Piyush", "Amol", "Vivek"];
console.log(students);

// Push method in array pushes the new element at the end
students.push("Rihana");
console.log("Rihana Pushed: ", students);
// Pop method in array removes the last element from the array.
students.pop();
console.log("Rihana Popped out: ", students);
// Unshit method in array adds the new element at the start of the array.
students.unshift("Rihana");
console.log("Rihana Added at First Position: ", students);
// shift method removes the start element from the start of the array.
students.shift();
console.log("Rihana removed from First Position: ", students);
// to find the element position in the array or to search element in the array we use indedOf() method.
console.log(
  "The position of Amol in the given Array is at: ",
  students.indexOf("Amol")
);
// reverse the order of an array elements
students.reverse();
console.log("The array elements are reversed in the order: ", students);

// Arrays can have any datatype like numbers strings object etc

// let collectionList = [
//   "Vishal",
//   "HR",
//   1,
//   22.5,
//   {
//     address: "Pune",
//     phone: "82554123456",
//   },
// ];

// console.log(collectionList);

// you can create a array as a Const variable for security

// const employeeDetails = [1, "Rohan", "Pune", "Infosys"];

// //but when you want to change constant array directly then it's not possible

// employeeDetails = [2, "Ashok", "Delhi", "Delloite"]; //  Uncaught TypeError: Assignment to constant variable.
// console.log(employeeDetails); // above error will be shown

// // However, you can change the elements of the constant array.
// // for e.g

// employeeDetails.push(2, "Ashok", "Delhi", "Delloite");
// console.log(employeeDetails);
// // or modification too
// employeeDetails[6] = "Pune";
// console.log(employeeDetails);
