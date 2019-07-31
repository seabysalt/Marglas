import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import { Route } from "react-router-dom";
import axios from "axios";
import PeerPopup from "../../components/PeerPopup";
import AddImage from "../AddImage";

export class Profile extends Component {
  state = {
    searchedFriend: "",
    error: "",
    peers: "",
    modalIsOpen: false,
    peer: "",
    user: {},
    displayUpload: false
  };

  handleChange = e => {
    this.setState({
      searchedFriend: e.target.value
    });
  };

  openModal(peer) {
    this.setState({
      modalIsOpen: !this.state.modalIsOpen,
      peer: peer
    });
    console.log(peer);
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  closeSubmit() {
    setTimeout(() => this.setState({ modalIsOpen: false }), 3000);
  }

  handleImgPop = () => {
    this.setState({ displayUpload: !this.state.displayUpload });
  };

  handleClick = id => {
    axios
      .post("/unfollow", {
        userId: this.props.user._id,
        idToDelete: id
      })
      .then(res => {
        let user = res.data;
        this.props.setUser(user);
      })
      .catch(err => {
        console.log(err);
      });
  };

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
    this.setState();
    axios.get("/user").then(response => {
      this.setState({ user: response.data });
    });
  }

  render() {
    return (
      <div id="profile">
        <Navbar setUser={this.props.setUser} />
        <div className="profile-head">
          <div className="profilePic">
            <img src={this.props.user.img} alt="you" />
            <img
              className="changeImg"
              src="/img/changeImg.png"
              onClick={this.handleImgPop}
              alt="profile"
            />
            <br />
            {this.state.displayUpload && (
              <AddImage setUser={this.props.setUser} />
            )}
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

        <div className="peersTable">
          {this.props.user.peers.map((peer, i) => {
            console.log(peer);
            return (
              <div key={i}>
                <p>{peer.username}</p>
                <button
                  onClick={() => this.openModal(peer)}
                  className="complimentButton"
                >
                  {" "}
                  Fill Marglas
                </button>
                <button
                  className="unfollowButton"
                  onClick={() => this.handleClick(peer._id)}
                >
                  unfollow
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Profile;
