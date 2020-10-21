"use strict";
class Developer {
    constructor(name, language) {
        this.name = name;
        this.language = language;
    }
    code() {
        console.log(`My name is ${this.name}, I love ${this.language}`);
    }
}
let developer = {
    name: "Abhishek",
    language: "python",
    code: () => {
        console.log("My name is Abhishek, I love python");
    }
};
developer.code();
developer = new Developer("Abhishek Ghosh", "Java");
developer.code();
