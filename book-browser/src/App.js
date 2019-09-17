import React from 'react';
import './App.css';
import Book from './Components/Book';
import bookFetch from './BookFetch';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchResult: '',
      firstBook: 0,
      display: false
    };
    //this.handleClick = this.handleClick.bind(this);
  }
  
 async onSearch(searchInput) {
    let fetchValue = await bookFetch(searchInput, this.state.firstBook);
    //error handling?
    this.setState((state) => {
      return {...state,
        searchResult: fetchValue,
        display: true,
        searchInput
      }
    });

  }
  buildBooks(){
    if(this.state.searchResult){
      let books = [];
      //Will need to handle issues where the server does not respond
      let end = Math.min(this.state.searchResult.items.length, 10);
      for (let x = 0; x < end; x++){
        books.push(this.state.searchResult.items[x]);
      }
      return (
        <ul>
          {books.map(function(book, index){
            return <Book props={book} key = {index} />
          })}
        </ul>
        )
    } else {
      return <p>Am I working?</p>;
    }
  }

  async prevBooks(){
    let firstBookValue = Math.max(this.state.firstBook - 10, 0);
    await this.setState((state) => {
      return {...state,
        firstBook: firstBookValue,
        display: true
      }
    });  
    this.onSearch(this.state.searchInput, this.state.firstBook);
  };

  async nextBooks(){
    await this.setState((state) => {
      return {...state,
        firstBook: state.firstBook + 10,
        display: true
      }
    });  
    this.onSearch(this.state.searchInput, this.state.firstBook);
  }

  render(){
    //DELETEME: let stringValue = 'Potter+inauthor:Rowling';
    //DELETEME: let results = {"kind":"books#volume","id":"R7YsowJI9-IC","etag":"9XIaLIfygDc","selfLink":"https://www.googleapis.com/books/v1/volumes/R7YsowJI9-IC","volumeInfo":{"title":"Harry Potter and the Half-Blood Prince","authors":["J.K. Rowling"],"publisher":"Pottermore Publishing","publishedDate":"2015-12-08","description":"\"There it was, hanging in the sky above the school: the blazing green skull with a serpent tongue, the mark Death Eaters left behind whenever they had entered a building... wherever they had murdered...\" When Dumbledore arrives at Privet Drive one summer night to collect Harry Potter, his wand hand is blackened and shrivelled, but he does not reveal why. Secrets and suspicion are spreading through the wizarding world, and Hogwarts itself is not safe. Harry is convinced that Malfoy bears the Dark Mark: there is a Death Eater amongst them. Harry will need powerful magic and true friends as he explores Voldemort's darkest secrets, and Dumbledore prepares him to face his destiny...","industryIdentifiers":[{"type":"ISBN_13","identifier":"9781781100547"},{"type":"ISBN_10","identifier":"1781100543"}],"readingModes":{"text":true,"image":true},"pageCount":652,"printType":"BOOK","categories":["Juvenile Fiction"],"averageRating":4.5,"ratingsCount":86,"maturityRating":"NOT_MATURE","allowAnonLogging":true,"contentVersion":"1.13.12.0.preview.3","panelizationSummary":{"containsEpubBubbles":false,"containsImageBubbles":false},"imageLinks":{"smallThumbnail":"http://books.google.com/books/content?id=R7YsowJI9-IC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api","thumbnail":"http://books.google.com/books/content?id=R7YsowJI9-IC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"},"language":"en","previewLink":"http://books.google.com/books?id=R7YsowJI9-IC&printsec=frontcover&dq=Potter+inauthor:Rowling&hl=&cd=1&source=gbs_api","infoLink":"https://play.google.com/store/books/details?id=R7YsowJI9-IC&source=gbs_api","canonicalVolumeLink":"https://play.google.com/store/books/details?id=R7YsowJI9-IC"},"saleInfo":{"country":"US","saleability":"FOR_SALE","isEbook":true,"listPrice":{"amount":8.99,"currencyCode":"USD"},"retailPrice":{"amount":8.99,"currencyCode":"USD"},"buyLink":"https://play.google.com/store/books/details?id=R7YsowJI9-IC&rdid=book-R7YsowJI9-IC&rdot=1&source=gbs_api","offers":[{"finskyOfferType":1,"listPrice":{"amountInMicros":8990000,"currencyCode":"USD"},"retailPrice":{"amountInMicros":8990000,"currencyCode":"USD"},"giftable":true}]},"accessInfo":{"country":"US","viewability":"PARTIAL","embeddable":true,"publicDomain":false,"textToSpeechPermission":"ALLOWED","epub":{"isAvailable":true,"acsTokenLink":"http://books.google.com/books/download/Harry_Potter_and_the_Half_Blood_Prince-sample-epub.acsm?id=R7YsowJI9-IC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"},"pdf":{"isAvailable":true,"acsTokenLink":"http://books.google.com/books/download/Harry_Potter_and_the_Half_Blood_Prince-sample-pdf.acsm?id=R7YsowJI9-IC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"},"webReaderLink":"http://play.google.com/books/reader?id=R7YsowJI9-IC&hl=&printsec=frontcover&source=gbs_api","accessViewStatus":"SAMPLE","quoteSharingAllowed":false},"searchInfo":{"textSnippet":"&quot;There it was, hanging in the sky above the school: the blazing green skull with a serpent tongue, the mark Death Eaters left behind whenever they had entered a building... wherever they had murdered."}}
    return (
      <main className="App">
        <form onSubmit = {(e) => {e.preventDefault(); 
                                  this.onSearch(e.currentTarget[0].value);
                                  }}>
          <input type="text" />
          <input type="submit" value="Search"/>  
        </form>
        <section className="bookResults">
          {this.buildBooks()}
        </section>
        <button className="prev diffBooks" onClick={(e) => {this.prevBooks()}}>Prev</button>
        <button className="next diffBooks" onClick={(e) => {this.nextBooks()}}>Next</button>
      </main>
    );
  }
}

export default App;
