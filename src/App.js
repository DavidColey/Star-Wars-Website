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
              Episode I: The Phantom Menance
            </button>
          </div>
          <div className="grid-item" />
          <div className="grid-item">
            <button
              className="buttonformat"
              title="Learn More"
              color="#841584"
              //accessibilityLabel="Learn more about this purple button"
            >
              Episode II: Attack of the Clones
            </button>
          </div>
          <div className="grid-item">
            <button
              className="buttonformat"
              title="Learn More"
              color="#841584"
              //accessibilityLabel="Learn more about this purple button"
            >
              Episode III: Revenge of the Sith
            </button>
          </div>
          <div className="grid-item">
            <button
              className="buttonformat"
              title="Learn More"
              color="#841584"
              //accessibilityLabel="Learn more about this purple button"
            >
              Episode IV: A New Hope
            </button>
          </div>
          <div className="grid-item">
            <button
              className="buttonformat"
              title="Learn More"
              color="#841584"
              //accessibilityLabel="Learn more about this purple button"
            >
              Episode V: The Empire Strikes Back
            </button>
          </div>
          <div className="grid-item">
            <button
              className="buttonformat"
              title="Learn More"
              color="#841584"
              //accessibilityLabel="Learn more about this purple button"
            >
              Episode VI: A New Hope
            </button>
          </div>
          <div className="grid-item" />
          <div className="grid-item">
            <button
              className="buttonformat"
              title="Learn More"
              color="#841584"
              //accessibilityLabel="Learn more about this purple button"
            >
              Episode VII: The Force Awakens
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
