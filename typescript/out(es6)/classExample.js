"use strict";
class Human {
    shout() {
        console.log("I am a human");
    }
}
class User extends Human {
    constructor(firstName, lastName) {
        super();
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFirstName() {
        return this.firstName;
    }
    setFirstName(firstName) {
        this.firstName = firstName;
    }
    getLastName() {
        return this.lastName;
    }
    setLastName(lastname) {
        this.lastName = lastname;
    }
    show() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
    shout() {
        super.shout();
    }
}
let nasim = new User("Abhishek", "Ghosh");
nasim.show();
nasim.setFirstName("Nasim");
nasim.setLastName("Molla");
nasim.show();
nasim.shout();
