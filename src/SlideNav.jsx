import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";
import "./SlideNav.css";
import Collapsible from "react-collapsible";

export default class SlideNav extends React.Component {
  render() {
    return (
      <Menu customBurgerIcon={<img src="pics/menu-icon.png" />}>
        {/* <Collapsible trigger="Start Here"> */}
        <a id="home" href="/">
          <span>
            <b>Home</b>
          </span>
        </a>
        <a id="ep1" href="/ep1">
          <span>Episode I: The Phantom Menance</span>
        </a>
        <a id="ep2" href="/ep2">
          <span>Episode II: Attack of the Clones</span>
        </a>
        <a id="ep3" href="/ep3">
          <span>Episode III: Revenge of the Sith</span>
        </a>
        <a id="ep4" href="/ep4">
          <span>Episode IV: A New Hope</span>
        </a>
        <a id="ep5" href="/ep5">
          <span>Episode V: The Empire Strikes Back</span>
        </a>
        <a id="ep6" href="/ep6">
          <span>Episode VI: Return of the Jedi</span>
        </a>
        <a id="ep7" href="/ep7">
          <span>Episode VII: The Force Awakens</span>
        </a>
        {/*  </Collapsible> */}
      </Menu>
    );
  }
}
