import React, { Component } from "react";
import Navbar from "../components/Navbar";

export default class Aboutus extends Component {
  render() {
    return (
      <div className="aboutUs">
        <Navbar />
        <h1>About us</h1>
        <div className="aboutUsLeft">
          <h3>our expertise</h3>
          <ul>
            <li>Psychology</li>
            <li>Organization Innovation</li>
            <li>Entreprenuership</li>
          </ul>
        </div>
        <div className="aboutUsRight">
          <h3>our mission</h3>
          <ul>
            <li>Empower</li>
            <li>Enable</li>
            <li>Energize</li>
          </ul>
        </div>
        <div className="aboutUsLeft">
          <h3>our approach</h3>
          <ul>
            <li>Efficient</li>
            <li>Sustainable</li>
            <li>Individual</li>
          </ul>
        </div>
      </div>
    );
  }
}
