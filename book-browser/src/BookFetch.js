function bookFetch(searchTerms, key){
  fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerms}`)
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      return JSON.stringify(myJson);
    })
    .catch((err) => {
      console.log(err);
    })
}

export default bookFetch