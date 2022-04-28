/*

function sumRecursive (n){
    if (n === 1)
        return 1;
    return n + sumRecursive(n-1);
}

function productRecursive (n){
    if (n === 1)
        return 1;
    return n * sumRecursive(n-1);
}

function sum (n){
    var s = 0;
    for (let i = 1; i <= n; i++)
        s += i;
    return s;
}

console.log(sumRecursive(10));
console.log(productRecursive(4));
console.log(sum(10));

*/

// function countdown(n)
// {
//     var string
//     var array.concat(countdown(n-1));
//     if(n === 1)
//         return [1];
// }

/*

function countdown (n){
    if (n === 1)
        return "1";
    return `${n} ${countdown(n-1)}`;
}

function countdown2 (n){
    if (n === 1)
        return [1];
    return [n, ...countdown2(n-1)];
}

console.log(countdown(5));
console.log(countdown2(5));

*/

/*

var a = [1, 2, 3, 4, 5];
var b = [...a];

b.push(6);

console.log(a, b);

*/

/*

function countdown2 (n){
    if (n === 1)
        return [1];
    return [n, ...countdown2(n-1)];
}

function range(a, b) {
    if(a === b)
        return a;
    return [a, ...range(a+1, b)];
}

function range2 (a, b){
    if (a === b)
        return b;
    return `${a} ${range2(a+1, b)}`;
}

console.log(range2(2, 5));

*/ 

