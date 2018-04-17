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
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header> */}
        <Router>
          <div>
            <Route exact path="/ep1" component={Films} />
            <Route exact path="/ep2" component={Films} />
            <Route exact path="/ep3" component={Films} />
            <Route exact path="/ep4" component={Films} />
            <Route exact path="/ep5" component={Films} />
            <Route exact path="/ep6" component={Films} />
            <Route exact path="/ep7" component={Films} />
            <Route exact path="/" component={Home} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
