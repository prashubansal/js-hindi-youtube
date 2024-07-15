// This -> refers the current context, so you can access all the variables defined under the current scope.

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++

// not able to use "this" in the function
// "this" is not an empty object inside a function 
function chai(){
    let username = "hitesh"
    console.log(this.username);
}

// chai()


// +++++++++++++++++++ Arrow function +++++++++++++++++++++++
// "this" returns an empty object
// cannot use "this" inside a arrow function
const chai2 =  () => {
    let username = "hitesh"
    console.log(this);
}

// chai2()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


// if use {} -> have to use "return" keyword
// if use () -> no need to write "return" keyword
// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))

