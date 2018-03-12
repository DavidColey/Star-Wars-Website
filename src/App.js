import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
//import { Button } from 'react-native';

class App extends Component {
  render() {
    fetch("https://swapi.co/api/planets/1")
      .then(resp => resp.json())
      .then(data => console.log(data.name));

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="grid-container">
          <div className="grid-item">
            <button
              className="buttonformat"
              title="Learn More"
              color="#841584"
              //accessibilityLabel="Learn more about this purple button"
            >
              Button
            </button>
          </div>
          <div className="grid-item">
            <button
              className="buttonformat"
              title="Learn More"
              color="#841584"
              //accessibilityLabel="Learn more about this purple button"
            >
              Button
            </button>
          </div>
          <div className="grid-item">
            <button
              className="buttonformat"
              title="Learn More"
              color="#841584"
              //accessibilityLabel="Learn more about this purple button"
            >
              Button
            </button>
          </div>
          <div className="grid-item">
            <button
              className="buttonformat"
              title="Learn More"
              color="#841584"
              //accessibilityLabel="Learn more about this purple button"
            >
              Button
            </button>
          </div>
          <div className="grid-item">
            <button
              className="buttonformat"
              title="Learn More"
              color="#841584"
              //accessibilityLabel="Learn more about this purple button"
            >
              Button
            </button>
          </div>
          <div className="grid-item">
            <button
              className="buttonformat"
              title="Learn More"
              color="#841584"
              //accessibilityLabel="Learn more about this purple button"
            >
              Button
            </button>
          </div>
          <div className="grid-item">
            <button
              className="buttonformat"
              title="Learn More"
              color="#841584"
              //accessibilityLabel="Learn more about this purple button"
            >
              Button
            </button>
          </div>
          <div className="grid-item">
            <button
              className="buttonformat"
              title="Learn More"
              color="#841584"
              //accessibilityLabel="Learn more about this purple button"
            >
              Button
            </button>
          </div>
          <div className="grid-item">
            <button
              className="buttonformat"
              title="Learn More"
              color="#841584"
              //accessibilityLabel="Learn more about this purple button"
            >
              Button
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
