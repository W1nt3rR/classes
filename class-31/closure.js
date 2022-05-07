const outer = (a) => {
    return (b) => {
        return a + b;
    };
};

const inner = outer(10);

console.log(inner(20));
console.log(inner(50));

console.log(outer(10)(40));


const arrayFn = (array) => {
    return () => {
        // if (array[0] == undefined) {
        //     return true;
        // } else {
        //     return false;
        // }

        return array.length > 0 ? true : false;
    }
}

let array1 = [1, 2, 3];
let array2 = [];
let array3 = [10];

const fn1 = arrayFn(array1);
const fn2 = arrayFn(array2);
const fn3 = arrayFn(array3);

console.log(fn1());
console.log(fn2());

console.log(fn3());
array3.pop();
console.log(fn3());