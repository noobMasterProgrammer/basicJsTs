var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    User.prototype.getFirstName = function () {
        return this.firstName;
    };
    User.prototype.setFirstName = function (firstName) {
        this.firstName = firstName;
    };
    User.prototype.getLastName = function () {
        return this.lastName;
    };
    User.prototype.setLastName = function (lastname) {
        this.lastName = lastname;
    };
    User.prototype.show = function () {
        console.log(this.firstName + " " + this.lastName);
    };
    return User;
}());
var nasim = new User("Abhishek", "Ghosh");
nasim.show();
nasim.setFirstName("Nasim");
nasim.setLastName("Molla");
nasim.show();
