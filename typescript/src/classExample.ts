class User{
    private firstName:string;
    private lastName:string;
    constructor(firstName: string,lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    public getFirstName() {
        return this.firstName;
    }
    public setFirstName(firstName: string) {
        this.firstName = firstName;
    }
    public getLastName() {
        return this.lastName;
    }
    public setLastName(lastname: string) {
        this.lastName = lastname;
    }
    public show():void {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

let nasim = new User("Abhishek", "Ghosh");
nasim.show();

nasim.setFirstName("Nasim");
nasim.setLastName("Molla");
nasim.show();