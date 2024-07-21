class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }
    // jitne bhi aap properties banate ho unke naam se automatically getter and setter as a method ban jaate hai
    // If u define getter then u have to set a setter also
    // GETTER -> class ke bahar se koi value get karna chahate ho 
    // SETTER -> koi value set karna chahate ho class ke andar

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
    }
}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.password);
console.log(hitesh.email);


