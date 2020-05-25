require("dotenv").config({ path: __dirname + "/../"});
import axios from "axios";

// The getBooks method retrieves Books from the server
// It accepts a "query" or term to search the recipe api for
export default {
  getBooks: function(query) {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&download=epub&key=${process.env.google_api}`)
    .then((response) => {
      console.log(response);
  })
}};
