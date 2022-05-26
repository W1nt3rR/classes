const form = document.getElementById("signup");

const nameInput = document.getElementById("name");
const surnameInput = document.getElementById("surname");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const dateInput = document.getElementById("date");

const isEmpty = (input, errorId) => {
    if(input.value === "") {
        document.getElementById(errorId).textContent = "Invalid Input";
        return false;
    } else {
        document.getElementById(errorId).textContent = "";
        return true;
    }
}

hasMinCharacters = (input, errorId, minLength) => {
    if(input.value.length <= minLength) {
        document.getElementById(errorId).textContent = "Input more characters";
        return false;
    } else {
        document.getElementById(errorId).textContent = "";
        return true;
    }
}

const valid = (input, errorId) => {
    let valid = false;
    let hasMin;
    const exist = isEmpty(input, errorId);
    switch (input.id) {
        case "name":
            hasMin = hasMinCharacters(input, errorId, 4);
            valid = exist && hasMin;
            break;
        case "surname":
            hasMin = hasMinCharacters(input, errorId, 4);
            valid = exist && hasMin;
            break;
        case "username":
            
            break;
        case "password":
            
            break;
        case "date":
            
            break;
    }
    return valid;
}

const submitFunction = (event) => {
    event.preventDefault();

    const nameValid = valid(nameInput, "errorName");
    const surnameValid = valid(surnameInput, "errorSurname");
    const usernameValid = valid(usernameInput, "errorUserame");
    const passwordValid = valid(passwordInput, "errorPassword");
    const dateValid = valid(dateInput, "errorDate");

    if(nameValid && surnameValid && usernameValid && passwordValid && dateValid) {
        alert("Your inputs are valid");
    }
    
}

form.addEventListener("submit", submitFunction);