class Animal
{
    constructor(name = 'Misko', age = 0)
    {
        this.name = name;
        this.age = age;
    }

    roar()
    {
        return 'no idea for now';
    }

    eat()
    {
        return "give me food";
    }
}

class Wolf extends Animal
{
    constructor(name, age, alpha = false)
    {
        super(name, age);
        this.alpha = alpha;
    }

    roar()
    {
        return "Auuuuuuuuu";
    }

    eat()
    {
        return "where is my meat";
    }
}

// const animalObj = new Animal("Ire", 25);
// console.log(animalObj);

const wolfObj = new Wolf("Nidzo", 19, true);

Wolf.prototype.newMethod = () => {
    return "I was added later";
};

const wolf2 = new Wolf("Milzas", 27, false);

// console.log(wolfObj);
console.log(wolf2.newMethod(), wolfObj.newMethod());

Array.prototype.newMethod = function () {
    this.forEach(element => {
        console.log(element);
    });
}

const array = [1, 2, 3];
console.log(array.newMethod());