import React from 'react';
import './Book.css';

function Book(props){
  let book = props.props;
  let bookImage;
  book.volumeInfo.imageLinks ? bookImage = <img className="bookCover" alt="Book Cover" src={book.volumeInfo.imageLinks.thumbnail} /> 
  :bookImage = <img className="bookCover" alt="Book Cover Unavailable"src="https://previews.123rf.com/images/rawpixel/rawpixel1707/rawpixel170716572/81739821-blocked-unavailable-decline-accesibility-closed.jpg" />
  let title;
  book.volumeInfo.title ? title = book.volumeInfo.title : title = 'Title Unavailable';
  let authorText;
  if(!book.volumeInfo.authors){
    authorText = 'Author Unavailable'
  } else {
    authorText = `Written By ${book.volumeInfo.authors[0]}`;
    if(book.volumeInfo.authors.length !== 1){
      for(let x = 1; x < book.volumeInfo.authors.length; x++){
        authorText = authorText + ` & ${book.volumeInfo.authors[x]}`;
      }
    }
  }
  let publisher; 
  book.volumeInfo.publisher ? publisher = <h5>Published By {book.volumeInfo.publisher}</h5> : publisher = <h5>Publisher Unavailable</h5>
  let infoLink = book.volumeInfo.infoLink;
  return (
    <div className="book">
      {bookImage}
      <div className="bookInfo">
        <h3>{title}</h3>
        <h4>{authorText}</h4>
        {publisher}
        <p>If you would like to know more, please visit <a href={infoLink}>this google books link</a>!</p>
      </div>
    </div>
  )
}

export default Book