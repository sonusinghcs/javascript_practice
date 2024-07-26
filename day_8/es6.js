const Name = "John Doe";
const age = 30;

console.log(`My name is ${Name} and I am ${age} years old.`);

const multi = `my
name is John Doe
and I am 30 years old.`;

console.log(multi);

const array = [1, 2, 3, 4, 5];
let [first, second] = array;

console.log(`First element: ${first}, Second element: ${second}`);

const book = {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951
}

let {title, author} = book;

console.log(`Title: ${title}, Author: ${author}`);

let arr3 = [...array,1,1,1,1]

console.log(arr3);

const rest = function(...args) {
    let sum = 0;
    for(let i=0; i<args.length; i++){
        sum+=args[i];
    }
    return sum;
}

console.log(rest(1,2,3,4,5));

const enh_obj = {
    Name,
    age,
    multi,
    array,
    rest
};

console.log(enh_obj);
// create a  object with computed properties names based on variables and log the object to the console.

const obj = {
    [Name]: "John Doe",
    [age]: 30,
    [multi]: "my\nname is John Doe\nand I am 30 years old.",
    [array]: [1, 2, 3, 4, 5],
    [rest]: rest
};

console.log(obj);
