// Getters

//A getter is a method that gets called when you try to access a property of an object.

//It allows you to execute some code before returning the property value.

// Getters are defined using the get keyword followed by the property name.

// Setter

// A setter is a method that gets called when you try to assign a value to a property of an object.

// It allows you to execute some code before setting the property value. Setters are defined using the set keyword followed by the property name.


class User{
    constructor(email,pswd){
        this.email = email
        this.pswd = pswd
    }
    // Now use the getter with email property

    get email(){
        return this._email.toLowerCase()
    }

    // now use the set method 

    set email(value){
           this._email = value.toLowerCase()
    }

    // now for the pswrd

    get pswd(){
        return this.passwrd + Math.floor(Math.random())
    }

    set pswd(value){
        this.passwrd = value +  Math.floor(Math.random())
    }
}


const view = new User("ABC@gmail.com","123654")
console.log(view.email);  // abc@gmail.com
console.log(view.pswd);   // 12365400