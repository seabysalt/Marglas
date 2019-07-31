import React, { Component } from "react";
import { Link } from "react-router-dom";
import { logout } from "../services/api";
import Home from "../containers/Home";
import Aboutus from "./Aboutus";

const handleLogout = props => {
  logout().then(() => {
    props.setUser(null);
  });
};

export class Navbar extends Component {
  state = {
    img: this.props.user
  };

  handleClick() {
    if (
      [...document.querySelector(".bar-pre-move1").classList].includes(
        "animate-bar1"
      ) === false
    ) {
      document.querySelector(".bar-pre-move1").classList.add("animate-bar1");
      document.querySelector(".bar-pre-move2").classList.add("animate-bar2");
      document.querySelector(".bar-pre-move3").classList.add("animate-bar3");
    } else if (
      [...document.querySelector(".bar-pre-move1").classList].includes(
        "animate-bar1"
      ) === true
    ) {
      document.querySelector(".bar-pre-move1").classList.remove("animate-bar1");
      document.querySelector(".bar-pre-move2").classList.remove("animate-bar2");
      document.querySelector(".bar-pre-move3").classList.remove("animate-bar3");
    }
    const menuLinks = document.querySelectorAll(".menu-link");
    menuLinks.forEach(el => {
      if ([...el.classList].includes("animate-menu-link") === false) {
        el.classList.add("animate-menu-link");
      } else if ([...el.classList].includes("animate-menu-link") === true) {
        el.classList.remove("animate-menu-link");
      }
    });
  }

  render() {
    return (
      // <div id="profile">
      <div
        id="home-bar-wrapper"
        className="menu-home"
        onClick={this.handleClick}
      >
        <div className="bars">
          <div className="bar-pre-move1">
            <div className="bar1" />
            <Link to="/home" component={Home} className="menu-link">
              home
            </Link>
          </div>
          <div className="bar-pre-move2">
            <div className="bar2" />
            <Link to="/aboutus" component={Aboutus} className="menu-link">
              about us
            </Link>
          </div>
          <div className="bar-pre-move3">
            <div className="bar3" />
            <Link
              onClick={() => handleLogout(this.props)}
              to="/"
              className="menu-link"
            >
              sign out
            </Link>
          </div>
        </div>
      </div>

      // </div>
    );
  }
}

export default Navbar;
