function add(a,b) {
    a=5
    return function multiply(b) {
        return a*b
    }
}
const b = (add());
console.log(b(8)); 

const ac = (()=>{
    counter = 0;
    return function increment(){
        counter++;
        return counter;
    }
})();

console.log(ac());
console.log(ac());
console.log(ac());
console.log(ac());

const id = (()=>{
    let id=null;
    return function generateId(){
        console.log(`the last generated id was ${id}  `);
        id = Math.floor(Math.random()*100)+1;
        return id;
    }
})();

console.log(`the new id is`,id());
console.log(`the new id is`,id());
console.log(`the new id is`,id());

const greet = ((name)=>{
    return function greet(name){
        console.log(`Hello ${name}!`);
    }
})();

greet('John');
greet('Jane');

let arr = [];

for(let i=0;i<10;i++){
    arr.push(function(){
        console.log(i);
    });
}
arr[0]();

arr[5]();

// use a closure to create a simple module for managing a collection of items. implement methods to add, remove, and get items.

const collection = (()=>{
    let items = [];
    return {
        addItem: function(item){
            items.push(item);
        },
        removeItem: function(item){
            const i = items.indexOf(item);
            if(i>-1){
                items.splice(i,1);
            }
        },
        getItem: function(index){
            return items.slice();
        }
    }
})();

collection.addItem('apple');
collection.addItem('banana');
collection.addItem('orange');

console.log(collection.getItem());

// write a function that memoizes the results of another function.use a closure to store the results of previous computations.

