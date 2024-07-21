// ES6

class User {
    // jaise hi class se ek object initialise hoga(means, NEW keyword jaise hi kaam mai loge)
    // waise hi constructor apne aap call ho jata hai 
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    // method = function
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("chai", "chai@gmail.com", "123")

console.log(chai.encryptPassword());
console.log(chai.changeUsername());


// behind the scene

function User(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());