interface IDeveloper{
    name: string;
    language: string;
    code(): void;
}
class Developer implements IDeveloper{
    name: string;
    language: string;
    constructor(name: string, language: string) {
        this.name = name;
        this.language = language;
    }
    code(): void{
        console.log(`My name is ${this.name}, I love ${this.language}`);
    }
}

let developer:IDeveloper = { 
    name: "Abhishek",
    language: "python",
    code: (): void => {
        console.log("My name is Abhishek, I love python");
    } 
} 
developer.code();

developer = new Developer("Abhishek Ghosh", "Java");
developer.code();