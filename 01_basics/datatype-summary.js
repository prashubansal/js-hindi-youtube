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

// console.log(typeof scoreValue);
// console.log(typeof isLoggedIn);
// console.log(typeof outsideTemp); // null's datatype is object
// console.log(typeof userEmail);
// console.log(typeof bigNumber);
// console.log(typeof heros); // array's datatype is Object
// console.log(typeof myObj); // Object's datatype is Object
// console.log(typeof myFunction); // Function's datatype is function


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)
// stack -> jitne bhi primitive values hai ye sab jaate hai stack ke andar and stack ke andar jab bhi koi item ko access karenge toh apko uska copy hi milta hai.
// Heap => Heap ke andar koi bhi non-primitive values rakhte hai toh apko original ka reference milta hai.  

let myYoutubeName = "hiteshchoudharydotcom"

let anotherName = myYoutubeName
anotherName = "chaiaurcode"

console.log(anotherName);
console.log(myYoutubeName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);