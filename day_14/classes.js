class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
    updateage(newAge) {
        this.age = newAge;
        console.log(`I've updated my age to ${newAge}.`);
    }
    static introduce() {
        console.log("I am a person.");
    }
    get nn(){
        return `${this.name} `
    }
    set nn(x){
        this.name = x;
        console.log(`I've updated my name to ${x}.`);
    }
}

const person1 = new Person("John Doe", 30);

person1.nn = "sonu singh";

console.log(person1.nn,"getter and setter");

person1.greet();

person1.updateage(31);

class student extends Person {
    static totalStudents = 0;
    constructor(name, age, studentID) {
        super(name, age);
        this.studentID = studentID;
        student.totalStudents++;
    }
    id(){
        return `Student ID: ${this.studentID} Name: ${this.name} Age: ${this.age}`;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. I am also a student. and my student ID is ${this.studentID}.`);
    }
    static getTotalStudents() {
        console.log(`Total number of students created: ${student.totalStudents}`);
    }
}

const student1 = new student("Jane Doe", 25, 12345);

console.log(student1.id());
student1.greet();

Person.introduce(); // Output: I am a person.



student.getTotalStudents(); 

class account {
    #balance=500 
    constructor(balance ) {
        this.#balance = balance;
    }
    deposit(amount){
        this.#balance += amount;
        console.log(this.#balance)
    }
    withdraw(amount){
        if(amount > this.#balance){
            console.log("Insufficient funds.");
        }
        else{
            this.#balance -= amount;
            console.log(this.#balance)
        }
    }
}

const acc = new account(1000);

acc.deposit(100);

acc.withdraw(200);

acc.withdraw(300);
 acc.deposit(99999)




