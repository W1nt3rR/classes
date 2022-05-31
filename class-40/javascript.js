/*
const fetch = require("node-fetch");

const randomQuoteFromAuthor = async (name) => {
    try {
        const author = await authorCheck(name);
        // console.log(author);
        if(!author) {
            console.log("Author doesn't exist");
            return;
        }

        const response = await fetch(`https://api.quotable.io/random${author ? `?author=${author}` : ""}`);
        const result = await response.json();

        // console.log(result);
        console.log(result.content + " Author: " + result.author);
    } catch (error) {
        console.log(error);
    }
};
*/
const returnQuotes = async (page = 1) => {
    try {
        const response = await fetch(`https://api.quotable.io/quotes?${page ? `page=${page}` : ""}`);
        const result = await response.json(); //json je promise
        return result.results;
    } catch (error) {
        console.log(error);
    }
};


const contentDiv = document.getElementById("content");
let page = 1;
/*
const createCard = (author, quote) => {
    return `<div style="width: 400px; min-height: 100px; border: 1px solid black; margin: 10px; padding: 20px;">
        <p>${quote} </p>
        <p>By: ${author}</p>
    </div>`
}


returnQuotes().then((result) => {
    result.forEach(element => {
        console.log(element);
        contentDiv.innerHTML = contentDiv.innerHTML + createCard(element.author, element.content);
    });
});
*/

const createCardNode = (author, quote) => {
    const div = document.createElement('div');
    div.style = "width: 400px; min-height: 100px; border: 1px solid black; margin: 10px; padding: 20px;";
    
    const p = document.createElement("p");
    p.textContent = quote;
    div.appendChild(p);

    const p2 = document.createElement("p");
    p2.textContent = `By: ${author}`;
    div.appendChild(p2);

    return div;
}

const pageInput = document.getElementById("pageInput");
const fn = () => {
    contentDiv.innerHTML = "";
    returnQuotes(pageInput.value).then(result => {
        result.forEach(quote => {
            const newCard = createCardNode(quote.author, quote.content);
            contentDiv.appendChild(newCard);
            // page++;
        });
    });
}

const dugme = document.getElementById("dugme");

dugme.addEventListener("click", fn);

/*
const authorCheck = async (author) => {
    try {
        const response = await fetch(`https://api.quotable.io/search/authors?query=${author}`);
        const result = await response.json();

        if(!result.count) {
            return false;
        }
        
        // console.log(result);
        // if(result.count === 1){
            return result.results[0].name;
        // }

        // return result.author;
    } catch (error) {
        console.log(error);
    }
}
*/
// randomQuoteFromAuthor("Nikola Teslas");
// authorCheck("Adam").then((value) => console.log(value));
// randomQuoteFromAuthor("richard");

// returnQuotes();
/*
returnQuotes(5, "content", "desc").then(value => value.forEach(element => { 
    console.log(element.content + " by: " + element.author + "\n"); 
}));
*/