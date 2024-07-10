// Primitive

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt
// JS is dynamically typed language
// no need to specify the datatype of variable.
const score = 100 
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 3465865646654544515155n



// Reference (Non Primitive)

// Array, Objects, Functions
// datatypes of all non primitive are Object

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof scoreValue);
console.log(typeof isLoggedIn);
console.log(typeof outsideTemp); // null's datatype is object
console.log(typeof userEmail);
console.log(typeof bigNumber);
console.log(typeof heros); // array's datatype is Object
console.log(typeof myObj); // Object's datatype is Object
console.log(typeof myFunction); // Function's datatype is function
