// var c = 300
let a = 300
if (true){
    let a = 10
    const b = 20
    // console.log("Inner:", a);
}


// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()

if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// +++++++++++++++++++ interesting +++++++++++

//can use the function before decalaration
console.log(addone(5))

function addone(num){
    return num + 1
}

//Hoisting => cannot use the function before decalartion
addTwo(5)
const addTwo = function(num){
    return num + 2
}
