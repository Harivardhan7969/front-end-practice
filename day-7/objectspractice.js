// creating moive object
const movie1 = {
    name: "bahubali",
    price: 100,
    language: "telugu"
}
console.log(movie1);
console.log(movie1["price"]);


const movie2 = {}

movie2["name"] = "pushpa",
    movie2["price"] = 150,
    movie2["language"] = "tamil"

console.log(movie2);


const movie3 = {};
movie3.name = "Batman";
movie3.price = 180;
movie3.language = "Hindi";
movie3.year = 2000

console.log(movie3);

// creating student object
const student = {
    name: "John Doe",
    age: 20,
    grade: "A"
}
student.name = "John Doe update"
console.log(student);
console.log(student["age"]);


// create student empty object 
const student2 = {}
// adding values into empty object
student2.name = "Jane Doe"
student2.age = 22,
    student2.grade = "B"
console.log(student2);

const student3 = {};

student3["name"] = "Jack Doe"
student3["age"] = 21,
    student3["grade"] = "C"

console.log(student3);



// Create a mobile phone object using object literal
const mobilePhone = {
    brand: 'Apple',
    price: 999,
    color: 'Space Gray'
};

console.log(mobilePhone);

// Create a mobile phone object using empty object 
const mobilePhone2 = {}

mobilePhone2.brand = 'Samsung',
    mobilePhone2.price = 899,
    mobilePhone2.color = 'Black'

console.log(mobilePhone2);

// Create a mobile phone object using empty object adding values using square brackets
const mobilePhone3 = {}
mobilePhone3["brand"] = 'realme',
    mobilePhone3["price"] = 799,
    mobilePhone3["color"] = 'White'

console.log(mobilePhone3);

