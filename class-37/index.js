/*
removeFirst = (array) =>
{
    const arr = [...array];
    arr.shift();
    return arr;
}

const arr = [1, 1, 1];

console.log(removeFirst(arr));

console.log(arr);
*/


const users = [
    {id: 1, name: "Ramiz", age: 21}, 
    {id: 2, name: "Nikola", age: 19}, 
    {id: 3, name: "Suad", age: 28}
];
/*
const filteredUsers = users.filter((value, index) => {
    return value.id === 1;
});

const filteredUsers2 = users.filter((user, index) => {
    return user.name === "Suad";
});

const filteredUsers3 = users.filter((user, index) => {
    return user.age < 20;
});

console.log(filteredUsers);
console.log(filteredUsers2);
console.log(filteredUsers3);
*/

Array.prototype.newFilter = function (callback) {
    let newArr = [];
    const arrayClone = [...this];
    let index = 0;
    arrayClone.forEach(element => {
        if(callback(element, index, this))
            newArr.push(element);
        index++;
    });
    return newArr;
};

Array.prototype.newFind = function (callback) {
    // let newArr = [];
    /* 
    const arrayClone = [...this];
    arrayClone.forEach(element => {
        if(callback(element, this)){
            return element;
        }
    });
    */
    for (let i = 0; i < this.length; i++) {
        const element = this[i];
        if(callback(element, i, this)){
            return element;
        }
    }
    return undefined;
};

const newFilterVariable = users.filter((user, index) => {
    return user.age > 20;
});

console.log(newFilterVariable);


const foundUser = users.newFind((user, index) => {
    return user.name == "Ramiz";
});

console.log(foundUser);