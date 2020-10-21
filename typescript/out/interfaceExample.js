var Developer = /** @class */ (function () {
    function Developer(name, language) {
        this.name = name;
        this.language = language;
    }
    Developer.prototype.code = function () {
        console.log("My name is " + this.name + ", I love " + this.language);
    };
    return Developer;
}());
var developer = {
    name: "Abhishek",
    language: "python",
    code: function () {
        console.log("My name is Abhishek, I love python");
    }
};
developer.code();
developer = new Developer("Abhishek Ghosh", "Java");
developer.code();
