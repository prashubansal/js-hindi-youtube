const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user detial from database");
        console.log(`Username: ${username}`);
    }


}

console.log(user["username"])
console.log(user.getUserDetails());