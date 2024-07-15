// "for of" -> can iterate on array, string, map
// returns elements of data structure

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States Of America")
map.set('FR', "France")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}


// "for of" does not iterate on Object
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {
    // console.log(key, ':-', value);
}

