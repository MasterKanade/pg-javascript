const age = 15;

if (age >= 18) {
  console.log("Yes, you can vote.");
} else if (age >= 80) {
  console.log(`You can Vote from the Home`);
} else {
  console.log(`you can't vote`);
}

// ternary operator

const isbankAccount = "234567891011121";
let validCheck =
  isbankAccount.length === 15 ? "Valid Bank Account" : "Invalid Bank Account";
console.log(validCheck);

// switch case in javascript

const option = 4;
switch (option) {
  case 1:
    console.log("Namaste!");
    break;
  case 2:
    console.log("Hello");
    break;
  case 3:
    console.log("Bonjour!");
    break;
  default:
    console.log("Invalid Option Chosen!");
}
