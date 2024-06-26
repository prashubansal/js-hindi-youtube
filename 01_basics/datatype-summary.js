// Primitive 

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; //undefined

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 8748273419831797634576n 


// Reference  (Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myobj = {
    name: "prashu",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World!");
}

// console.log(typeof bigNumber);
// console.log(typeof outsideTemp);
// console.log(typeof isLoggedIn);
// console.log(typeof score);
// console.log(typeof scoreValue);
// console.log(typeof userEmail);
// console.log(typeof id);
// console.log(typeof myFunction);
// console.log(typeof myobj);
// console.log(typeof heros);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)
// Stack -> gives copy of the original
// Heap -> gives the original(reference) of value

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

userTwo.email = "prashu@google.com"

console.log(userOne.email);
console.log(userTwo.email);