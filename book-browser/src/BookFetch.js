async function bookFetch(searchTerms, key){
  let returnValue = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerms}`)
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      return myJson
    })
    .catch((err) => {
      return err;
    })
    
    return returnValue;
}

export default bookFetch