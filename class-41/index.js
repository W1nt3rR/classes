// let a;
// const b = 0;
// var c;


/*
function name(params) {
    let aa = 2;
    function name2(params) {
        let b = 3;
        console.log(aa);
    }
    console.log(b);
}

// function name2(params) {
//     let b;
//     console.log(aa);
// }

name();
*/

/*
function name1(params) {
    var array = [1, 2, 3, 4, 5];
    for (let i = 0; i < array.length; i++) {

        console.log(element1, "pre");
        var element1 = array[i]; // zivi tokom cele operacije for
        console.log(element1, "posle");
        
        const element2 = array[i];
    }
}

name1();
*/

// falsy vrednosti: false, "" 0, undefined, null

// console.log(("1" && "" && "3") || "2");

/*
function name1(a) {
    return a;
}

function name2(callback) {
    return callback();
    return callback;
}
*/

// function is a first class citizen, can send function as parameter, recieve

// console.log(this);

/*
function name1() {
    console.log(this);
}

const a = {
    name1: function () {
        console.log(this);
    },
    name2: () => {
        console.log(this); //drugacije radi nego function
    }
};

const name2 = () => {
    console.log(this);
}

a.name1();
a.name2();
*/

// Promise, pending, fullfiled, rejected
// promise chaining

function name(a) {
    // const a = 10;
    return function (b) {
        return a + b;
    };
}

function name2(a) {
    // const a = 10;
    return {
        inner: () => {
            console.log("ramiz");
        },
    };
}

const innerF = name(20);

console.log(name(10)(1));
console.log(innerF(4));
console.log(name2(10).inner());