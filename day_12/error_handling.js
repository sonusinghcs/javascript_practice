function errorHandling() {
    try {
        AbortCont('An error occurred');
    } catch (error) {
        console.log("An error occurred",);
    }
}
errorHandling();

function err(){
    throw "error"
}
try {
    err();
} catch (error) {
    console.log("An error occurred", error);
}

function div(a,b){
    if(b === 0){
        throw ("Cannot divide by zero");
    }
    return a / b;
}
try {
    div(10,0);
} catch (error) {
    console.log("division by zero error", error);
}
try {
    x=y+1
} catch (err) {
    console.log(err.message,err.name)
}

//************** */
try {
    throw "new eroor in try"
} catch (error) {
    console.log("intetional error in catch");
} finally{
    console.log("end of finally block")
}

class CustomError extends Error {
    constructor(message, errorCode) {
        super();
        this.message = message;
        this.errorCode = errorCode;
    }
};

function throwCustomError() {
    throw new CustomError('This is a custom error message!', 404);
}

function handleCustomError() {
    try {
        throwCustomError();
    } catch (error) {
        if (error instanceof CustomError) {
            console.log(error.message,error.errorCode);
        } else {
            console.error('An unexpected error occurred:', error.message);
        }
    }
}

handleCustomError();

function checkstring(str) {
    if (str==""){
        throw new Error('String is empty');
    }
    else{
        console.log(str);
    }
}
try {
    checkstring("");
} catch (error) {
    console.error(error.message);
}
//promise


const myPromise = new Promise((resolve, reject) => {
    let a = Math.random > 0.5;
    if (a) {
        resolve('Promise resolved');
    } else {
        reject (new Error('Promise rejected'));
    }
})

myPromise.then(res => console.log(res)).catch(err => console.log(err.message));

async function handlingerror(){
    try {
        await myPromise
    } catch (error) {
        console.log(error.message,"async await")
    }
}

handlingerror();

fetch("sdfghj").then(data => console.log(data)).catch(err => console.log(err.message,"fetch error"));

async function fetchData(){
    try {
         await fetch("abc")
        
        
    } catch (error) {
        console.log("aync fetch error")
        
    }
}

fetchData();
