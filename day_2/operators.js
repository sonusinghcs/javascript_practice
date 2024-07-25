//activity 1
// task 1

const add = function (a,b){
    return a + b;
}
console.log(add(5, 3));

// task 2

const subtract = function (a,b){
    return a - b;
}
console.log(subtract(5, 3));

// task 3

const multiply = function (a,b){
    return a * b;
}
console.log(multiply(5, 3));

// task 4

const divide = function (a,b){
    if(b === 0){
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}
console.log(divide(10, 3));


// task 5
const remainder = function (a,b){
    if(b === 0){
        throw new Error("Cannot perform remainder operation by zero");
    }
    return a % b;
}
console.log(remainder(10, 3));


//activity 2
//task 6
let op = 6
op+=5
console.log(op);

// task 7
let op2 = 6
op2 -= 5;
console.log(op2);

// task 8
if (op > 11){
    console.log(false);
}

// task 9
if (op >= 10){
    console.log(true);
}

// task 10

if (op === 6){
    console.log(true);
}

// task 11

if (op > 5 && op < 10){
    console.log(true);
}

// task 12
if (op < 6 || op > 10){ 
    console.log(true);
}

// task 13
if (op !=6){
    console.log(true);
}

// task 14
op>6? console.log(true) : console.log(false);

let a = op>6? true : false;
console.log(a)