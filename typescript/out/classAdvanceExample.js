var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Object.defineProperty(Person.prototype, "FirstName", {
        get: function () {
            return this.firstName;
        },
        set: function (firstName) {
            this.firstName = firstName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "LastName", {
        get: function () {
            return this.lastName;
        },
        set: function (lastname) {
            this.lastName = lastname;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.show = function () {
        console.log(this.firstName + " " + this.lastName);
    };
    return Person;
}());
var abhishek = new Person("Abhishek", "Ghosh");
abhishek.show();
abhishek.FirstName = "Nasim";
abhishek.LastName = "Molla";
abhishek.show();
