const promise1 = new Promise((resolve, reject) => {let a=4000
    setTimeout(() => {
        resolve('Promise 1 resolved',a);
    }, 4000);
});

promise1.then(value => {
    console.log(value);
    
});

const promise2 = new Promise((resolve, reject) => {
    let er = false;
    if(!er) {
        setTimeout(()=>{
            resolve('Promise 2 resolved')},2000);
    }
    else {
        setTimeout(() => {
            reject('Promise 2 rejected');
        }, 2000);
    }
});
promise2.then(value => {
    console.log(value);
}).catch(error => {
    console.log(error);
});

// create a sequence of promises that simulate fetching data from a server. chain the promise to log the message in a specific order.

function fetchData(id,delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Data for id ${id} fetched after ${delay}ms`);
        }, delay);
    });
};

fetchData(1, 1000)
    .then((message)=> {
        console.log(message);
        return fetchData(2, 2000);
    })
    .then((message) => {
        console.log(message);
        return fetchData(3, 3000);
    })
    .then((message) => {
        console.log(message);
    }).catch((error) => {
        console.log(error);
    })

    async function fetchDataAsync() {
        try {
            const a = await promise1
            console.log(a,"async")
        } catch (error) {
            console.log(error,"error async")
        }
    }
    fetchDataAsync();

    async function fetchDataAsync2() {
        try {
            const a = await promise2
            console.log(a,"async2")
        } catch (error) {
            console.log(error,"error async2")
        }
    }
    fetchDataAsync2();


    //fetching

    const url = "https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10"

    fetch(url)
    .then((data)=>{
        return data.json();
    })
    .then((data)=>{
        console.log(data);
    });

    async function fetchDataAsync3() {
        try {
            const a = await fetch(url1);
            const data = await a.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
    let url1 = "https://api.freeapi.app/api/v1/public/randomproducts?page=1&limit=10&inc=category%2Cprice%2Cthumbnail%2Cimages%2Ctitle%2Cid&query=mens-watches"
    fetchDataAsync3(url1);

    //use promise.all to wait for all promises to resolve and then logging the results.

    Promise.all([promise1, promise2]).then(values => {
        console.log(values, "promise all");
    }).catch(error => {
        console.log(error);
    })

Promise.race([promise1, promise2]).then(value => {
    console.log(value, "promise race");
}).catch(error => {});
    