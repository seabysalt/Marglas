import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import { Route } from "react-router-dom";


export class Profile extends Component {

  state = {
    img: this.props.user,
  }

  render() {
    console.log(this.state.user)
    return (
    <div id="profile">
              <Navbar />
        <div className="profile-head">
        <div className="profilePic">
            <img src="https://images.unsplash.com/photo-1499651681375-8afc5a4db253?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="you" />
          </div>
          <div className="profile-heading">
            <h1>Oh you...</h1>
            <h2>You are beautiful inside and out!</h2>
          </div>
          
        </div>

        <div className="peer-heading-wrapper">
        <div className="circles">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
        </div>
        <div className="peer-center">
          <p>Share this love with your peers!</p>
        </div>
        <div className="circles">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
        </div>
      </div>
    </div>
    )
  }
}

export default Profile;
