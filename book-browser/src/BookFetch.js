async function bookFetch(keyword, subject, title, author, startIndex = 0){
  let keywordString = `${keyword}`;
  let subjectString = subject ? `insubject:${subject}` : '';
  let titleString = title ? `intitle:${title}` : '';
  let authorString = author? `inauthor:${author}` : '';
  let searchString = '';
  let tempArray = [subjectString, titleString, authorString];
  if(keyword){
    searchString = searchString + keywordString;
  }
  for(let x = 0; x < tempArray.length; x++){
    if(!searchString && tempArray[x]){
      searchString = tempArray[x];
    } else {
      if(tempArray[x])
      searchString = searchString + '+' + tempArray[x];
    }
  }
  console.log(searchString);
  let returnValue = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchString}&startIndex=${startIndex}`)
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