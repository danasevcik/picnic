import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FoodContainer from './Containers/FoodContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FoodContainer />
      </div>
    );
  }
}

export default App;
