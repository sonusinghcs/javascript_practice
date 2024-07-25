const arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(arr[arr.length - 1]); // Output: 5

// task 3
arr.push(6);
console.log(arr); 

// task 4
arr.pop();
console.log(arr); 

// task 5
arr.shift();

console.log(arr);

// task 6
arr.unshift(8);

console.log(arr);

// task 7
const map = arr.map((num) => num * 2);

console.log(map);

// task 8

const filter = arr.filter((num) => num >4);

console.log(filter);

// task 9

const reduce = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(reduce);

// task 10

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// task 11

arr.forEach((num) => console.log(num));

// task 12
const arr2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(arr2);

// task 13
console.log(arr2[1][1]);
