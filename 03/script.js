// Datatypes

// 1. Numbers: you can have any type of number and it could be assign to any number format.
// there would be no such thing float and double type in numbers all the types acts as a number
// Js is loosely type programming language.
let num = 14;
let num2 = 50.50;
console.log(num + num2)

// 2. Strings: any Alphanumeric combination is allowed in the string and you can concatenate stings.

let firstName='Mayur'    // you can add single or double quoted values and there is no problem in JS
const lastName='Kanade' // 
console.log(firstName+' '+lastName) // concatenation is possible

// string '1' + '1' would be considered as string 11
// string '1' + 1 (as a num) would be considered as a string 11
// but string '1' * 1 (as a num) would be considered as a Number 1
// however weired combination of alpha and num will be a NaN (not a number)
// string 'a' + 1 = NaN 

// 3. Booleans are true and false values ; no other values are allowed as true and false.
// Booleans are basically 0 and 1 in internal memory.
// 1 ==> true and 0 ==> false
let isLoggedIn=true;
console.log(isLoggedIn)

// proof of true -> 1 and false -> 0
console.log('The output of true + 10  ===> 1 + 10 ===> 11 ')
console.log(isLoggedIn + 10) // output would be 11
isLoggedIn= false;
console.log('The output of false + 10  ===> 0 + 10 ===> 10 ')
console.log(isLoggedIn+10) // output would be 10


// 4. Null : Null value always considered as NULL means any type of value; you can re-assign it with any type later
// Memory space is acquired like space is given for re-assign the value.
let lastLoginDate= null;
lastLoginDate='12-03-2023'

// 5. undefined: suppose you want to delete a variable that is not in use.
// you can assign that variable to undefined and it will automatically not in use.
// that is that variable or thing is not defined anywhere in the code. Completely vanished.

let employeeName= undefined;

// 6. Objects: Objects have the properties and that have been seprated by commas. It is also collection of objects.
// Objects are always key-value pair and end last object by comma separated always is good practice.
// key: value pair and does not required any datatype inside the block.
let person = {
     firstName: 'Mayur',
     lastName: 'Kanade',
     age: 32,
     lastLoggedIn: false,
     lastLoginDate: null,
}

console.log(person);

// typeof operator in JS:

