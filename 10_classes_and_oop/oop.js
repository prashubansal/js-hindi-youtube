const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user detial from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }


}


// console.log(user["username"])
// console.log(user.getUserDetails());
// console.log(this);



// constructor function
// Step1: creates an empty JS object using "new" operator -> something like this (const x = {})
// Step2: Cons_func call hota hai because of "new operator" and using "this" we set various properties and methods in this new object(because this empty object is nothing but an instance of an this object)
// Step3: Cons_func jitne bhi arguments hote hai unko newly created "empty object" ke andar pack karta hai (using "this") and ye cons_func aapko vo new object return kar deta hai. 

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this
}

const userOne = new User("prashu", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
// console.log(userTwo);