import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";
import "./Films.css";
/* import ep1 from "./pics/Episode I.jpg";
import ep2 from "./pics/Episode II.jpg";
import ep3 from "./pics/Episode III.jpg";
import ep4 from "./pics/Episode IV.jpg";
import ep5 from "./pics/Episode V.jpg";
import ep6 from "./pics/Episode VI.jpg";
import ep7 from "./pics/Episode VII.jpg"; */

export default class SlideNav extends React.Component {
  /* componentDidMount() {
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
 */
  render() {
    return (
      <Menu customBurgerIcon={<img src="pics/menu-icon.png" />}>
        <a id="home" className="menu-item" href="/">
          <span>
            <b>Home</b>
          </span>
        </a>
        <a id="ep1" className="menu-item" href="/ep1">
          <span>Episode I: The Phantom Menance</span>
        </a>
        <a id="ep2" className="menu-item" href="/ep2">
          <span>Episode II: Attack of the Clones</span>
        </a>
        <a id="ep3" className="menu-item" href="/ep3">
          <span>Episode III: Revenge of the Sith</span>
        </a>
        <a id="ep4" className="menu-item" href="/ep4">
          <span>Episode IV: A New Hope</span>
        </a>
        <a id="ep5" className="menu-item" href="/ep5">
          <span>Episode V: The Empire Strikes Back</span>
        </a>
        <a id="ep6" className="menu-item" href="/ep6">
          <span>Episode VI: Return of the Jedi</span>
        </a>
        <a id="ep7" className="menu-item" href="/ep7">
          <span>Episode VII: The Force Awakens</span>
        </a>
      </Menu>
    );
  }
}
