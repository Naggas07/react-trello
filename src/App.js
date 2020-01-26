import React, { Component } from 'react';
import NavBar from './components/NavBar'
import './App.css';
import Board from './components/Board';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Board />
      </div>
    );
  }
}

export default App;
