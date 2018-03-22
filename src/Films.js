import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SideNav, { Nav, NavIcon, NavText } from "react-sidenav";
import "./Films.css";

const Films = () => (
  <div className="rightnav">
    <SideNav
      highlightColor="#E91E63"
      highlightBgColor="#00bcd4"
      defaultSelected="sales"
    >
      <Nav id="dashboard">
        <NavText> Film 1 </NavText>
      </Nav>
      <Nav id="dashboard">
        <NavText> Film 2 </NavText>
      </Nav>
    </SideNav>
  </div>
);

export default Films;
