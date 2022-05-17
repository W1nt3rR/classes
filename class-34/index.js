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

const returnQuotes = async (page, sortBy) => {
    try {
        const paramsExist = page || sortBy;
        const moreThan2 = page && sortBy;
        const response = await fetch(`https://api.quotable.io/quotes
            ${paramsExist ? "?" : ""}
            ${page ? `page=${page}` : ""}
            ${sortBy ? `${}sortBy=${sortBy}` : ""}`);
        const result = await response.json();

        // console.log(result.results[0].content);

        // result.results.forEach(element => {
        //     console.log(element.content + " by: " + element.author + "\n");
        // });

        return result.results;
    } catch (error) {
        console.log(error);
    }
};

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

// randomQuoteFromAuthor("Nikola Teslas");
// authorCheck("Adam").then((value) => console.log(value));
// randomQuoteFromAuthor("richard");

// returnQuotes();

returnQuotes(5, "content").then(value => value.forEach(element => { 
    console.log(element.content + " by: " + element.author + "\n"); 
}));