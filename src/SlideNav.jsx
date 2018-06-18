import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";
import "./SlideNav.css";
import Collapsible from "react-collapsible";

export default class SlideNav extends React.Component {
  render() {
    return (
      <Menu customBurgerIcon={<img src="pics/menu-icon.png" />}>
        <Collapsible trigger="Episodes">
          <a id="home" href="/">
            <p className="slidenav-text">
              <b>Home</b>
            </p>
          </a>
          <a id="ep1" href="/ep1">
            <p className="slidenav-text">Episode I: The Phantom Menance</p>
          </a>
          <a id="ep2" href="/ep2">
            <p className="slidenav-text">Episode II: Attack of the Clones</p>
          </a>
          <a id="ep3" href="/ep3">
            <p className="slidenav-text">Episode III: Revenge of the Sith</p>
          </a>
          <a id="ep4" href="/ep4">
            <p className="slidenav-text">Episode IV: A New Hope</p>
          </a>
          <a id="ep5" href="/ep5">
            <p className="slidenav-text">Episode V: The Empire Strikes Back</p>
          </a>
          <a id="ep6" href="/ep6">
            <p className="slidenav-text">Episode VI: Return of the Jedi</p>
          </a>
          <a id="ep7" href="/ep7">
            <p className="slidenav-text">Episode VII: The Force Awakens</p>
          </a>
        </Collapsible>
        <Collapsible trigger="Movie Data">
          <a id="ep1" href="/">
            <p className="slidenav-text">Characters</p>
          </a>
          <a id="ep2" href="/">
            <p className="slidenav-text">Spaceships</p>
          </a>
          <a id="ep3" href="/">
            <p className="slidenav-text">Vehicles</p>
          </a>
          <a id="ep4" href="/">
            <p className="slidenav-text">Planets</p>
          </a>
          <a id="ep5" href="/">
            <p className="slidenav-text">Species</p>
          </a>
        </Collapsible>
      </Menu>
    );
  }
}
