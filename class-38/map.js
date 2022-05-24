const array = [
    {id: 1, name: "Suad", address: {street: "Hotkovo", number: 69}},
    {id: 2, name: "Irfan", address: {street: "Hotkovska", number: 60}},
    {id: 3, name: "Ramiz", address: {street: "Hotkoanja", number: 63}},
    {id: 4, name: "Ahmed", address: {street: "Bukres", number: 21}},
    {id: 5, name: "Samil", address: {street: "Prvomajska", number: 12}},
    {id: 6, name: "Mejla", address: {street: "Avnoje", number: 34}},
    {id: 7, name: "Ajsa", address: {street: "Moskovska", number: 91}},
];

const newArray = array
    .filter((value, index) => value.address.number > 25)
    .map((value, index) => value.address);

const reducedArray = array.reduce((result, value, index, array) => {
    if(value.address.number > 25) {
        result.push(value.address);
    }
    return result;
},[]);

/*
Array.prototype.newMap = function (callback) {
    let arr = [];
    for (let index = 0; index < this.length; index++) {
        const element = this[index];
        arr += callback(element, index, this);
    }
    return arr;
}

const newArray2 = array
    .filter((user) => { return user.address.number > 25 })
    .map((value, index) => { return value.address });

*/

// console.log(reducedArray);

Array.prototype.newReduce = function (callback, initialValue) {
    let result = initialValue ? initialValue : this[0];
    for (let index = 0; index < array.length; index++) {
        const element = this[index];
        if(initialValue) {
            result = callback(result, element, index, this);
            continue;
        } 
        
        if(!initialValue && index === 0){
            continue;
        }

        result = callback(result, element, index, this);
    }
    return result;
}

const newReducedArray = [1, 2, 3, 4, 5, 6, 7].newReduce((result, value) => {
    return result + value;
}, 10);

console.log(newReducedArray);