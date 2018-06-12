import React, { Component } from "react";
import logo from "./pics/coollogo_com-19600441.png";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";
import Films from "./Films";
import SlideNav from "./SlideNav.jsx";
//import { Button } from 'react-native';

class App extends Component {
  render() {
    fetch("https://swapi.co/api/planets/1")
      .then(resp => resp.json())
      .then(data => console.log(data.name));

    return (
      <div className="App">
        <SlideNav {...this.props} />
        <div className="App-header">
          <a href="/">
            <img src={logo} className="App-logo" alt="logo" />
          </a>
        </div>

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
