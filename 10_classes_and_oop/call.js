function SetUsername(username){
    // complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    // ye call hua hai
    // but vo values ko hold karke rakhta hai outer function ke liye and unki access bhi milti hai
    SetUsername.call(this, username)
    
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);
