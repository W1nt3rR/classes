const promise = new Promise((resolve, reject) => {
    const random = Math.random() * 1000;
    setTimeout(() => {
         resolve(random);
    }, random);
});

/*
// console.log(promise.then((value) => console.log(value)));

// promise.then((value) => console.log(value));

promise
    .then((value) => console.log("resolve", value))
    .catch((value) => console.log("reject", value))
    .finally(() => console.log("finally"));

*/

/*
 const fetch = require("node-fetch");


fetch("https://api.quotable.io/random")
    .then((response) => {
        return response.json();
    })
    .then((result) => {
        console.log(result);
    });
*/

/*

const promise2 = async () => {
    // const random = Math.random() * 1000;
    const randomNumber = await promise;
    console.log(randomNumber);
    const random2 = await promise;
    console.log(random2);
    const random3 = await promise;
    console.log(random3);
    const random4 = await promise;
    console.log(random4);
    const random5 = await promise;
    console.log(random5);

    // return randomNumber;
}

// promise2().then((value) => console.log(value));
promise2();
console.log("main funkcija");

*/

/*
// lose
promise.then(() => {
    new Promise().then(() => {
        new Promise().then((value) => value);
    });
});

Promise.all([promise, promise]);
Promise.race([]);
Promise.allSettled([]);
*/