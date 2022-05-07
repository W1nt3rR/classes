const logger = (value) => {
    console.log("Logger " + value);
};

const fn1 = (value) => {
    console.log
}

const sum = (a, b, callback) => {
    if(callback)
        callback(a + b);
    return a + b;
};

sum(2, 3, logger);

sum(3, 4, (value) => console.log("callback function " + value));