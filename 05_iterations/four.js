// "for in" -> can iterate on object, array 
// returns keys of elements

const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

// console.log(typeof myObject.js);

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`)
}

const programming = ["js", "ruby", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(programming[key]);
}


// cannot iterate on map
// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States Of America")
// map.set('FR', "France")

// for (const key in map) {
//     console.log(key);
// }