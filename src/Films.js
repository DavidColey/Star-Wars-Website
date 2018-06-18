import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SideNav, { Nav, NavIcon, NavText } from "react-sidenav";
import { slide as Menu } from "react-burger-menu";
import "./Films.css";
import ep1 from "./pics/Episode I.jpg";
import ep2 from "./pics/Episode II.jpg";
import ep3 from "./pics/Episode III.jpg";
import ep4 from "./pics/Episode IV.jpg";
import ep5 from "./pics/Episode V.jpg";
import ep6 from "./pics/Episode VI.jpg";
import ep7 from "./pics/Episode VII.jpg";
import SlideNav from "./SlideNav.jsx";

/* function image() {
  return <img src={"../src/pics/demo.jpg"} width="640" height="360" />;
} */

class Films extends Component {
  constructor() {
    super();
    this.state = { picture: "" };
  }
  componentDidMount() {
    switch (this.props.match.params.movieId) {
      case "ep1":
        fetch("https://swapi.co/api/films/1")
          .then(resp => resp.json())
          .then(data => {
            this.setState({ films: data, picture: ep1 });
          });

        break;

      case "ep2":
        fetch("https://swapi.co/api/films/2")
          .then(resp => resp.json())
          .then(data => {
            this.setState({ films: data, picture: ep2 });
          });
        break;

      case "ep3":
        fetch("https://swapi.co/api/films/3")
          .then(resp => resp.json())
          .then(data => {
            this.setState({ films: data, picture: ep3 });
          });
        break;

      case "ep4":
        fetch("https://swapi.co/api/films/4")
          .then(resp => resp.json())
          .then(data => {
            this.setState({ films: data, picture: ep4 });
          });
        break;

      case "ep5":
        fetch("https://swapi.co/api/films/5")
          .then(resp => resp.json())
          .then(data => {
            this.setState({ films: data, picture: ep5 });
          });
        break;

      case "ep6":
        fetch("https://swapi.co/api/films/6")
          .then(resp => resp.json())
          .then(data => {
            this.setState({ films: data, picture: ep6 });
          });
        break;

      case "ep7":
        fetch("https://swapi.co/api/films/7")
          .then(resp => resp.json())
          .then(data => {
            this.setState({ films: data, picture: ep7 });
          });
        break;
    }
  }

  render() {
    return (
      <div className="mainContainer">
        {/* https://reacttraining.com/react-router/web/example/url-params */}
        {/* <SlideNav {...this.props} /> */}

        <div className="middle">
          <div>
            <img src={this.state.picture} width="490" height="700" />
          </div>
          <div className="middle opencrawl">
            <text>{this.state.films && this.state.films.opening_crawl}</text>
            {/* <p>{this.props.match.params.movieId}</p> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Films;
