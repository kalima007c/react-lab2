import React, { Component } from 'react';
import './App.css';
import CharacterCard from './CharacterCard';
import WordCard from './WordCard';
const word = "Hello World";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        attempt: '',
    }
}
  render() {
    return (
      <div>
       <WordCard value="Hello"/>
      </div>
    );
  }
}

export default App;
