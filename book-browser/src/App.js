import React from 'react';
import './App.css';
import Book from './Book';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    //Initially: Just book results?
    };
    //this.handleClick = this.handleClick.bind(this);
  }
  render(){
    return (
    <div className="App">
      <form>
        <input type="text" />
        <input type="submit" value="Search"/>  
      </form>
      <Book />
    </div>
    );
  }
}

export default App;
