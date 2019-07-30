import React, { Component } from "react";
import { Link } from "react-router-dom";
import { logout } from "../../services/api";
import Home from "../../containers/Home";
import Aboutus from "../Aboutus";
import axios from "axios";
const handleLogout = props => {
  // logout().then(() => {
  //   props.setUser(null);
  // });
};

export class Profile extends Component {
  state = {
    img: this.props.user,
    searchedFriend: "",
    error: "",
    peers: ""
  };

  handleChange = event => {
    this.setState({
      searchedFriend: event.target.value
    });
  };
  componentDidMount() {
    this.setState();
  }
  handleSubmit = e => {
    e.preventDefault();
    axios
      .put("/user", {
        searchedFriend: this.state.searchedFriend
      })
      .then(res => {
        console.log("check", res.data);
        if (res.data.errorMessage) {
          this.setState({ error: res.data.errorMessage });
          console.log(this.props.user);
          setTimeout(() => {
            this.setState({ error: "" });
          }, 1500);
        } else {
          console.log(res.data.user);
          this.props.setUser(res.data.user);
          console.log(this.props.user);
        }
        this.setState({ searchedFriend: "" });
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleClick = () => {
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
  };

  render() {
    return (
      <div id="profile">
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

        <div className="profile-head">
          <div className="profilePic">
            <img src="https://images.unsplash.com/photo-1499651681375-8afc5a4db253?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
          </div>
          <div className="profile-heading">
            <h1>Oh you...</h1>
            <h2>You are beautiful inside and out!</h2>
          </div>
        </div>

        <div className="peer-heading-wrapper">
          <div className="circles">
            <div className="circle" />
            <div className="circle" />
            <div className="circle" />
            <div className="circle" />
            <div className="circle" />
            <div className="circle" />
          </div>
          <div className="peer-center">
            <p>Share this love with your peers!</p>
          </div>
          <div className="circles">
            <div className="circle" />
            <div className="circle" />
            <div className="circle" />
            <div className="circle" />
            <div className="circle" />
            <div className="circle" />
          </div>

          <div className="menuFollow">
            <h1>my friends</h1>
            <form className="addPeer" onSubmit={this.handleSubmit}>
              <label htmlFor="inspirations">username: </label>
              <input
                className="input"
                type="text"
                name="searchFriends"
                id="peers"
                value={this.state.searchedFriend}
                onChange={this.handleChange}
              />
              <button className="submitPeerButton" type="submit">
                add friend
              </button>
            </form>
            {this.state.error}

            <tbody className="peersTable">
              <tbody>
                <tr>
                  <th>Name</th>
                  <th>Fill Marglas</th>
                  <th>Unfollow</th>
                </tr>
                <tr>
                  {this.props.user.peers.map((peer, i) => {
                    return (
                      <div key={i}>
                        <td>{peer.username}</td>
                        <td>
                          <button className="submitPeerButton">
                            {" "}
                            Fill Marglas
                          </button>
                        </td>
                        <td>
                          <button className="submitPeerButton">unfollow</button>
                        </td>
                      </div>
                    );
                  })}
                </tr>
              </tbody>
            </tbody>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
