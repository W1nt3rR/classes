console.log("it works");

const inputs = document.querySelectorAll(".inputs");
const div = document.querySelector("#colorDiv");

const red = document.getElementById("redValue");
const green = document.getElementById("greenValue");
const blue = document.getElementById("blueValue");

console.log(inputs);
// div.style.backgroundColor = "black";

const changeFunction = () => {
    div.style.backgroundColor = `rgb(${inputs[0].value},${inputs[1].value},${inputs[2].value})`;
    // red.innerHTML = inputs[0].value;
    red.textContent = inputs[0].value;
    green.innerHTML = inputs[1].value;
    blue.innerHTML = inputs[2].value;
}

changeFunction();

// inputs[0].addEventListener("change", changeFunction);
// inputs[1].addEventListener("change", changeFunction);
// inputs[2].addEventListener("change", changeFunction);

inputs.forEach(element => {
    element.addEventListener("input", changeFunction);
});