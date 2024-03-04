/* The forEach function in JS acts as a callback function over the array */

let students = ["Mayur", "Rishabh", "Ajay", "Mahendra", "Yuvraj"];
// it's like in-built callback function
//students.forEach((val) => console.log(val + " Cricket Icon"));

// or you can perform any operations on it.

students.forEach((val) => console.log(val.toUpperCase()));
