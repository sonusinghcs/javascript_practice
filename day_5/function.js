//task 1

const even_or_odd = (num) => {
    if (num % 2 === 0) {
        return 'even';
    } else {
        return 'odd';
    }
};

console.log(even_or_odd(10)); // Output: even

//task 2

const square_of_number = (num) => {
    return num * num;
};

console.log(square_of_number(5)); // Output: 25

//task 3

const max_num = (num1, num2) => {
    if (num1 > num2) {
        return num1;
    }
    return num2;
}
console.log(max_num(5, 10)); // Output: 10

//task 4
const concat_strings = (str1, str2) => {
    return str1 + str2;
}

console.log(concat_strings('Hello', ' World')); // Output: Hello World

//task 5

const sum_of_numbers = (num1, num2) => {
    return num1 + num2;
}

console.log(sum_of_numbers(5, 10)); // Output: 15

//task 6

const chek_in_string = (str, target) => {
    return str.includes(target);
};

console.log(chek_in_string('Hello World', 'World')); // Output: true

//task 7

const product_of_numbers = (num1, num2=17) => {
    return num1 * num2;
}

console.log(product_of_numbers(5, 10)); // Output: 50

//task 8

const greeting = (name,age) => {
    return `Hello ${name}, you are ${age} years old`;
};

console.log(greeting('John', 30)); // Output: Hello John, you are 30 years old

//task 9

const hof=(fun,num)=>{
    for(let i=0;i<num;i++){
        fun();
    }
}

hof(()=>{console.log('Hello')},3); // Output: Hello Hello Hello

//task 10

//write a higher order function that takes two functions and a value, applies the first function to the value, then applies the second function to the result.

const higherOrderFunction = (func1, func2, value) => {
    return func2(func1(value));
};

console.log(higherOrderFunction(Math.sqrt, (a)=>a+5, 9)); // Output: 3