//var a = [1, 2 ,3 ,4 ,5 , "2"];

//var b = [1, 2, 3, 4, [1, 2, 3, 4, [1, 2, 3, 4, [1, 2, 3, 4]]]];

//console.log(b[4][4][4][2]); //levels of depth



// var n = 10;
// var suma = 0;
// for(var i = 0; i < n; i++)
// {
//     suma += i;
// }

// console.log("Suma brojeva je: " + suma);

// var m = 0;

// var a = 10 + m++;
// var b = 10 + ++m;

// console.log(a, b);



// var array = [1, 2, 3, 4, 5, 6];
// var n = 5;
// var found = false;
// for(var i = 0; i < array.length; i++)
// {
//     if(array[i] == n)
//     {
//         console.log("Broj " + n + " se nalazi na " + i + ". indexu");
//         found = 1;
//         break;
//     }
// }

// if(!found)
// {
//     //console.log(-1);
//     console.log("Broj " + n + " se Ne nalazi u nizu");
// }



var array = [1, 2, 3, 44, 0, 6];

var max = array[0];
var min = array[0];
for(var i = 0; i < array.length; i++)
{
    if(array[i] > max)
        max = array[i];

    if(array[i] < min)
        min = array[i];
}

console.log("Broj " + max + " je najveci u nizu");
console.log("Broj " + min + " je najmanji u nizu");



var array1 = ['a', 'b', 'c', 'd'];
var array2 = ['a', 'b', 'f'];
var array3 = [];
var array4 = array2;

for(var i = 0; i < array1.length; i++)
    for(var j = 0; j < array2.length; j++)
        if(array1[i] == array2[j])
            array3.push(array1[i]);

for(var i = 0; i < array1.length; i++)
    for(var j = 0; j < array2.length; j++)
    {
        var flag = true;
        if(array1[i] == array2[j])
        {
            flag = false;
        }
        if(flag)
        {
            array4.push(array1[i]);
        }  
    }
        

console.log(array3);

console.log(array4);

