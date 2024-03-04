/* The most beautiful thing about javascript array is they are Hetrogeneous and not Homogeneous */

let students = ["Mayur", "Ashok", "Piyush", "Amol", "Vivek"];
console.log(students);

// Arrays can have any datatype like numbers strings object etc

let collectionList = [
  "Vishal",
  "HR",
  1,
  22.5,
  {
    address: "Pune",
    phone: "82554123456",
  },
];

console.log(collectionList);

// you can create a array as a Const variable for security

const employeeDetails = [1, "Rohan", "Pune", "Infosys"];

//but when you want to change constant array directly then it's not possible

employeeDetails = [2, "Ashok", "Delhi", "Delloite"]; //  Uncaught TypeError: Assignment to constant variable.
console.log(employeeDetails); // above error will be shown

// However, you can change the elements of the constant array.
// for e.g

employeeDetails.push(2, "Ashok", "Delhi", "Delloite");
console.log(employeeDetails);
// or modification too
employeeDetails[6] = "Pune";
console.log(employeeDetails);
