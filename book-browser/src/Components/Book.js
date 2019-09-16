import React from 'react';

function Book(props){
  let book = props.props;
  console.log(book.volumeInfo.authors);
  let source = book.volumeInfo.imageLinks.smallThumbnail;
  let title = book.volumeInfo.title;
  let authorText;
  if(!book.volumeInfo.authors){
    authorText = 'Information Unavailable'
  } else {
    authorText = `Written By ${book.volumeInfo.authors[0]}`;
    if(book.volumeInfo.authors.length !== 1){
      for(let x = 1; x < book.volumeInfo.authors.length; x++){
        authorText = authorText + `& ${book.volumeInfo.authors[x]}`;
      }
    }
  }
  let publisher = book.volumeInfo.publisher;
  let infoLink = book.volumeInfo.infoLink;
  let altText = `Book Cover for ${title}`
  return (
    <div>
      <h3>{title}</h3>
      <img src={source} alt={altText}/>
      <h4>{authorText}</h4>
      <h5>Published By {publisher}</h5>
      <p>If you would like to know more, please visit <a href={infoLink}>this google books link</a>!</p>
    </div>
  )
}

export default Book