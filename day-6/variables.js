
// Task 1.1: Using let (for changeable values)
let studentName = "John";
studentName = "Mike";     // Can be changed
console.log("using let");
console.log(studentName); // Should print "Mike"

// Task 1.2: Using const (for fixed values)
const birthYear = 2000;
birthYear = 2001;     // This will cause error - try it!
console.log("using const");
console.log(birthYear);

// Task 1.3: Using var (old way - try to avoid)
var oldWay = "Hello";
oldWay = "Hi";
console.log('using var ');
console.log(oldWay);