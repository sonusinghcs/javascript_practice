//task 1

let a = 30;
if(a > 20){
    console.log(`a is positive`)
}
else if(a < 0){
    console.log(`a is negative`);
}
else{
    console.log(`a is zero`);
}

// task 2

let age= 25;
if (age >= 18){
    console.log(`You are eligible to vote`);
}
else{
    console.log(`You are not eligible to vote`);
}

// task 3

//write a program that uses a switch statement to determine the day of the week based on the given day number.

let dayNumber = 5;

switch(dayNumber){
    case 1:
        console.log(`Sunday`);
        break;
    case 2:
        console.log(`Monday`);
        break;
    case 3:
        console.log(`Tuesday`);
        break;
    case 4:
        console.log(`Wednesday`);
        break;
    case 5:
        console.log(`Thursday`);
        break;
    case 6:
        console.log(`Friday`);
        break;
    case 7:
        console.log(`Saturday`);
        break;
    default:
        console.log(`Invalid day number`);
}

// task 4
let grade = 95;
switch(grade){
    case 90:
    case 91:
    case 92:
    case 93:
    case 94:
        console.log(`Grade A`);
        break;
    case 85:
    case 86:
    case 87:
    case 88:
    case 89:
        console.log(`Grade B`);
        break;
    case 80:
    case 79:
    case 78:
    case 77:
    case 76:
        console.log(`Grade C`);
        break;
    case 75:
    case 74:
    case 73:
    case 72:
    case 71:
        console.log(`Grade D`);
        break;
    case 70:
    case 69:
    case 68:
    case 67:
    case 66:
        console.log(`Grade F`);
}

// task 5
let po = 10;
po%2==0?"Even":"Odd";

// task 6
//program to check leap year

let year = 2020;
if(year%4==0){
    if(year%100==0){
        if(year%400==0){
            console.log(`${year} is a leap year`);
        }
        else{
            console.log(`${year} is not a leap year`);
        }
    }
    else{
        console.log(`${year} is a leap year`);
    }
}
