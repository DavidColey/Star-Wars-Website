import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Films from "./Films";

//import { Button } from 'react-native';

class App extends Component {
  render() {
    fetch("https://swapi.co/api/planets/1")
      .then(resp => resp.json())
      .then(data => console.log(data.name));

    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/:movieId" component={Films} />
            <Route exact path="/" component={Home} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
