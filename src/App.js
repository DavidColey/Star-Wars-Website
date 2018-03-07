import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
//import { Button } from 'react-native';

class App extends Component {
  render() {
    fetch("https://swapi.co/api/people/1")
      .then(resp => resp.json())
      .then(data => console.log(data.name));

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
      </div>
    );
  }
}

export default App;
