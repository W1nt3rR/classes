const fn = () => {
    console.log("Hi");
}

setTimeout(fn, 1000);
setTimeout(fn);

console.log("Hi console");

const id = setInterval(fn, 1000);

setTimeout(() => clearInterval(id), 5000);
