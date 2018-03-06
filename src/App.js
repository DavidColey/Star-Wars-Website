import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
//import { Button } from 'react-native';
//import swapi from "sw-api-js";

//const swapiNode = require("swapi-node");

class App extends Component {
  render() {
    //const moon = swapiNode.getPerson(1).then(moon => console.log(moon));
    fetch("https://swapi.co/api/people/1")
      .then(resp => resp.json())
      .then(data => console.log(data.name));

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
