/*

function sum(a, b) {
    return a + b;
}

function concatArrays(array1, array2) {
    if(Array.isArray(array1) && Array.isArray(array2))
    {
        tempArray = array1;
        for (let i = 0; i < array2.length; i++)
            tempArray.push(array2[i]);
        return tempArray;
    }
    return undefined;
}

console.log(sum(5, 6));
console.log(concatArrays([1, 2, 3], ['a']));

*/

/*

function commonLettersInString(array1, array2) 
{
    var array3 = [];
    if(typeof(array1) == "string" && typeof(array2) == "string")
    {
        for(var i = 0; i < array1.length; i++)
            for(var j = 0; j < array2.length; j++)
                if(array1[i] == array2[j])
                    array3.push(array1[i]);
        return array3;
    }
}

console.log(commonLettersInString("a13", "abds"));

*/

/*

var a = 10;

switch (a) {
    case 10:
        console.log("this is 10");
        break;
    case 20:
        console.log("this is 20");
        break;
    default:
        console.log("this is default");
        break;
}

*/

// red, green, blue, white, black

/*

function getHexColor(color) {
    var hex;
    switch (color) {
        case "red":
            hex = 'ff0000';
            break;
        case "green":
            hex = '00ff00';
            break;
        case "blue":
            hex = '0000ff';
            break;
        case "white":
            hex = 'ffffff';
            break;
        case "black":
            hex = '000000';
            break;
    
        default:
            console.log("enter valid color");
            break;
    }

    return hex;
}

console.log(getHexColor("white"));

*/

a();
console.log(test);
var test = 10;

function a() {
    test = 20;
}

//a();
//console.log(test);

//hoisting