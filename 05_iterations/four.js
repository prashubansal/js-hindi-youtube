//"for in" loop => returns the "key" of any object 


const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}
for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
    // console.log(typeof key);
    // console.log(myObject[key])
    // console.log(typeof myObject);
}

const programming = ["js", "ruby", "python", "java", "cpp"]

// for (const key in programming) {
//     console.log(programming[key]);
// }


// Map is not iteratable, hence "for in" not working on map
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key);
}
