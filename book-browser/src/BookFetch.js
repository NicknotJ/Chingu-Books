async function bookFetch(searchTerms, startIndex = 0){
  console.log(startIndex);
  let returnValue = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerms}&startIndex=${startIndex}`)
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      console.log(myJson);
      return myJson
    })
    .catch((err) => {
      return err;
    })
    return returnValue;
}

export default bookFetch