// getOwnPropertyDescriptor
// ye Object ki property ki hidden cheezon ke baare mai batati hai
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descriptor);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI)

const chai = {
    name: "ginger chai",
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bani");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));


// stop iteration on a particular property of the object
Object.defineProperty(chai, "name", {
    // writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if(typeof value != "function"){
        console.log(`${key} : ${value}`);
    }
}