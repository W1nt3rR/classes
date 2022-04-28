//var a = [];
/*
for (let i = 0; i < 10; i++) {
    
    const a = 10;
    console.log(a);
}

const a = 10;

let b = 20;
*/
/*
const a = [20];
a.push(20);
console.log(a);
*/

/*
function removeCharacter(title = "", character) {
    return title.replace(character, "");
}

const removeCharacter2 = (title = "", character) => {
    return title.replace(character, "");
}

console.log(removeCharacter("Ramiz je c", "c"));
console.log(removeCharacter2("Ramiz je c", "c"));
*/


/*
var array1 = [1, 2, 3, 4, 5, 6];
var array2 = array1;

array2.pop();
array2.pop();

console.log(array1, array2);

*/

/*
let array1 = [1, 2, 3, 4, 5, 6];
let array2 = [...array1]; //deep copy

array2.pop();
array2.pop();

console.log(array1, array2);
*/
/*
let array1 = {name: "Ramiz"};
let array2 = {...array1}; //deep copy

array2.name = "Ertan"

console.log(array1, array2);

function charToString(...args) {
    for (let index = 0; index < args.length; index++) {
        const element = args[index];
        sum += element;
    }
    return sum;
}

console.log(charToString(1, 2, 3, 4, 5, 's', d, g, h));
*/
function sum(...args) {
    let suma = 0;
    for (let index = 0; index < args.length; index++) {
        let element = args[index];
        if(typeof(element) === "number")
            suma += element;
        else if (typeof(element) === "string") {
            // suma += parseInt(element);
            // +element === "NaN" ? 0 : +element; no wrok
            suma += Object.is(+element, NaN) ? 0 : +element;
        }
    }
    return suma;
}

//let niz = [1, 2, 3, 4, 5, 's', 6, 'f'];

console.log(sum(1, 2, 3, 4, 5, '1', 6, '22 20 greg'));

//console.log(typeof(1));