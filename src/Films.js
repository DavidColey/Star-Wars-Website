import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SideNav, { Nav, NavIcon, NavText } from "react-sidenav";
import "./Films.css";
import { Link } from "react-router-dom";
import ep1 from "./pics/Episode I.jpg";
import ep2 from "./pics/Episode II.jpg";
import ep3 from "./pics/Episode III.jpg";
import ep4 from "./pics/Episode IV.jpg";
import ep5 from "./pics/Episode V.jpg";
import ep6 from "./pics/Episode VI.jpg";
import ep7 from "./pics/Episode VII.jpg";

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
        <div className="leftnav">
          <SideNav
            highlightColor="#E91E63"
            highlightBgColor="#00bcd4"
            //defaultSelected="sales"
          >
            <Nav id="Home">
              <NavText>
                <Link to="/"> Home </Link>
              </NavText>
            </Nav>

            <Nav id="Episode I">
              <NavText> Episode I: The Phantom Menance </NavText>
            </Nav>

            <Nav id="Episode II">
              <NavText> Episode II: Attack of the Clones </NavText>
            </Nav>

            <Nav id="Episode III">
              <NavText> Episode III: Revenge of the Sith </NavText>
            </Nav>

            <Nav id="Episode IV">
              <NavText> Episode IV: A New Hope </NavText>
            </Nav>

            <Nav id="Episode V">
              <NavText> Episode V: The Empire Strikes Back </NavText>
            </Nav>

            <Nav id="Episode VI">
              <NavText> Episode VI: Return of the Jedi </NavText>
            </Nav>

            <Nav id="Episode VII">
              <NavText> Episode VII: The Force Awakens </NavText>
            </Nav>
          </SideNav>
        </div>
        <div className="middle">
          <div>
            <img src={this.state.picture} width="490" height="700" />
          </div>
          <div className="middle opencrawl">
            <text>{this.state.films && this.state.films.opening_crawl}</text>
            {/* <p>{this.props.match.params.movieId}</p> */}
          </div>
        </div>
        <div className="rightnav">
          <SideNav
            highlightColor="#E91E63"
            highlightBgColor="#00bcd4"
            defaultSelected="sales"
          >
            <Nav id="Characters">
              <NavText> Characters </NavText>
            </Nav>

            <Nav id="Spacships">
              <NavText> Spaceships </NavText>
            </Nav>

            <Nav id="Vehicles">
              <NavText> Vehicles </NavText>
            </Nav>

            <Nav id="Planets">
              <NavText> Planets </NavText>
            </Nav>

            <Nav id="Species">
              <NavText> Species </NavText>
            </Nav>
          </SideNav>
        </div>
      </div>
    );
  }
}

export default Films;
