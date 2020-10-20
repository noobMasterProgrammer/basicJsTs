"use strict";
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get FirstName() {
        return this.firstName;
    }
    set FirstName(firstName) {
        this.firstName = firstName;
    }
    get LastName() {
        return this.lastName;
    }
    set LastName(lastname) {
        this.lastName = lastname;
    }
    show() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}
let abhishek = new Person("Abhishek", "Ghosh");
abhishek.show();
abhishek.FirstName = "Nasim";
abhishek.LastName = "Molla";
abhishek.show();
