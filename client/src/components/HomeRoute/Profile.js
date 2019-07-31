import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import { Route } from "react-router-dom";
import axios from "axios";
import PeerPopup from "../../components/PeerPopup";

export class Profile extends Component {
  state = {
    img: this.props.user,
    searchedFriend: "",
    error: "",
    peers: "",
    modalIsOpen: false,
    peer: "",
    user: {}
  };

  handleChange = event => {
    this.setState({
      searchedFriend: event.target.value
    });
  };

  openModal(peer) {
    this.setState({
      modalIsOpen: !this.state.modalIsOpen,
      peer: peer
    });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  closeSubmit() {
    setTimeout(() => this.setState({ modalIsOpen: false }), 3000);
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

  componentDidMount() {
    axios.get("/user").then(response => {
      this.setState({ user: response.data });
    });
  }
  render() {
    console.log(this.state.user);
    return (
      <div id="profile">
        <Navbar />
        <div className="profile-head">
          <div className="profilePic">
            <img
              src="https://images.unsplash.com/photo-1499651681375-8afc5a4db253?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              alt="you"
            />
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

            {
              <PeerPopup
                peer={this.state.peer}
                user={this.state.user}
                openModal={this.state.modalIsOpen}
                closeModal={() => this.closeModal()}
                closeSubmit={() => this.closeSubmit()}
              />
            }
          </div>

          <div className="friendsList">
            <div className="friendsHeader">
              <h5>Name</h5>
              <h5>Fill Marglas</h5>
              <h5>Unfollow</h5>
            </div>
            {this.state.user.peers &&
              this.state.user.peers.map((peer, i) => {
                return (
                  <div key={i}>
                    <p2>{peer.username}</p2>
                    <button
                      onClick={() => this.openModal(peer)}
                      className="submitPeerButton"
                    >
                      Fill Marglas
                    </button>
                    <button className="submitPeerButton">unfollow</button>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
