// "_" shows that I am defining a private property
// normal users ke use mai nhi ayegi
const User = {
    _email: 'h@hc.com',
    _password: 'abc',

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}

// Factory function -> Object.create()
// kis object ke basis pe mai ek nya function create karke du
// Object.create(null) -> by default "null"
const tea = Object.create(User)
console.log(tea.email);