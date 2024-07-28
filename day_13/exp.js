const add = function(a, b) {
    return a + b;
}


const person = {
    name: "John Doe",
    age: 30,
    greet: function() {
        console.log(`Hello ${this.name}, you are ${this.age} years old.`);
    }   
}
const exported = {
    add,
    person
}

export default exported;