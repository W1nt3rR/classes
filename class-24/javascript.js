var a = {name: "bru", surname: "Sabovic"}

var aKeyes = Object.keys(a);
var aValues = Object.values(a);

/*
console.log(a);
console.log(typeof a);

console.log(a.name);
console.log(a["name"]);
*/

/*

console.log(aKeyes);
console.log(aValues);

console.log(aKeyes.includes("name"));

if(a['name'] !== undefined)
{
    console.log("ima");
} else
{
    console.log("nema");
}

*/

/*

var objekat = {
    name: "Ramiz",
    surname: "Sabovic",
    adress: {
        street: "Gorana Pecka",
        number: "69",
        ciry: "Novi Pazar",
    },
    friends: [
        {name: "Suad"},
        {name: "Ertan"},
    ]
}

objekat.fullName = `${objekat.name} ${objekat.surname}`;
objekat.laptop = "acer";

// delete objekat.laptop;
// objekat.adress = undefined;

objekat.friends.push({name: "Nikola"});

console.log(objekat.friends[1].name);

console.log(objekat);

*/


var nizKorisnika = [{name: "irfan"}, {name: "suad"}, {name: "nikola"}];

nizKorisnika.forEach(element => {
    if(element.name == "suad")
        console.log(element);
});

for (let i = 0; i < nizKorisnika.length; i++) {
    var korisnik = nizKorisnika[i];
    if(korisnik.name == "nikola")
        console.log(korisnik);
}

function findObject(niz, parametar, vrednostParametra) {
    niz.forEach(element => {
        if(element[parametar] == vrednostParametra)
            console.log(element);
    });
}

findObject(nizKorisnika, "name", "irfan");