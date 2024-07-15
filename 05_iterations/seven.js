// "MAP" method of an array
// returns an array after doing some operations

const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumbers.map((num) => num + 10)


// ++++++++++++++++++++ Chaining of methods +++++++++++++++++++++
const newNums = myNumbers
        .map((num) => num * 10)
        .map((num) => num + 1)
        .filter((num) => num >= 40)

console.log(newNums);

