
let yourName = "Hari";
let yourAge = 22;
let isStudent = true;
const graduationYear = 2023;


console.log(`Hello, ${yourName}!`);
console.log(`You are ${yourAge} years old.`);

if (isStudent) {
    console.log(`You are currently a student and will graduate in ${graduationYear}.`);
} else {
    console.log("You are not a student.");
}

// Updating and re-displaying variables
yourName = "John Doe";  // Updating name
yourAge = 25;           // Updating age
isStudent = false;      // Updating student status

console.log("\nUpdated Information:");
console.log(`Hello, ${yourName}!`);
console.log(`You are ${yourAge} years old.`);
if (isStudent) {
    console.log(`You are currently a student and will graduate in ${graduationYear}.`);
} else {
    console.log("You are not a student.");
}
