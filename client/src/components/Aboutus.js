import React, { Component } from "react";
import Navbar from "../components/Navbar";

export default class Aboutus extends Component {
  render() {
    return (
      <div>
        <Navbar setUser={this.props.setUser} />
        <div className="aboutus-logo">
        <img src="/img/marglas1.png" style={{width: "13vh", height: "20vw"}} alt="logo"/>
        </div>
        <div className="aboutUs">
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
      </div>
    );
  }
}
