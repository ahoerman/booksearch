import axios from "axios";

// The getBooks method retrieves Books from the server
// It accepts a "query" or term to search the recipe api for
export default {
  getBooks: function(query) {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&download=epub&key=AIzaSyAnHeoV3WcfOOM544C-loQb4ZbdEjy88Iw`)
    .then((response) => {
      console.log(response);
  })
}};
