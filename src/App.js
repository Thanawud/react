import React, { Component } from 'react';
import './App.css';
import WordCard from './WordCard';

const word = "Hello";
class App extends Component {
  constructor(props){
 super(props)
 this.state = {
 active: false,
 }
 }
  render() {
    return (
      <div className="App">
        <WordCard value="hello"/>
      </div>
    );
  }
}
export default App;
