const fetch = require("node-fetch");
const fn = async (author) => {
  const response = await fetch(
    `https://api.quotable.io/random${author ? `?author=${author}` : ""}`
  );
  const result = await response.json();

  console.log(result);
  console.log(result.content + "; author: " + result.author);
};

fn("Buddha");