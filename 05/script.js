// AMD operator  -- All conditions must be true (&&)

// const age = 22;
// const gender = "male";

// if (age >= 18 && gender == "male") {
//   console.log("You are adult male");
// }

// OR operator  -- At least one condition must be true (||)

// const age = 17;
// const gender = "male";

// if (age >= 18 || gender == "male") {
//   console.log("You are adult male");
// }

// NOT operator: True -> False and False -> True

const num = 5;
if (!(num % 2 == 0)) {
  console.log("Odd");
} else {
  console.log("Even");
}
