function show(a:number, b:number=0) {
    console.log("a is " + a);
    console.log("b is " + b);
}
function showDetails(firstName: string, lastName: string, gender ?: string){
    console.log("firstName is " + firstName);
    console.log("lastName is " + lastName);
    if (undefined != gender) {
        console.log("gender is " + gender);
    }
}

show(10, 20);
show(50);

showDetails("Abhishek", "ghosh", "male");
showDetails("Nasim", "Molla");