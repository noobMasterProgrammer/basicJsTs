"use strict";
class User {
    constructor(firstName, lastName) {
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
}
let nasim = new User("Abhishek", "Ghosh");
nasim.show();
nasim.setFirstName("Nasim");
nasim.setLastName("Molla");
nasim.show();
