import React, { Component } from "react";
import { Link } from "react-router-dom";
import Profile from "../components/HomeRoute/Profile";
import BoardCard from "../components/HomeRoute/BoardCard";
import FactsCard from "../components/HomeRoute/FactsCard";
import Tracker from "../components/HomeRoute/Tracker";
import QuestionPopup from "../components/QuestionPopup";
import axios from "axios";
import Aboutus from "../components/Aboutus";
import Mood from "../components/MoodTwo";
import MoodPopup from "../components/MoodTwo";

export class Home extends Component {
  state = {
    pending: [],
    categories: [
      "Happiness",
      "Gratefulness",
      "Strengths",
      "Potential",
      "Energy",
      "Accomplishments"
    ],
    science: [
      "Positive Psychology",
      "Psychological Capital",
      "Why gratefulness works",
      "Why Bibi loves animals"
    ]
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
  stateUp = () => {
    axios.get("/question/pending").then(response => {
      console.log(response.data);
      this.setState({ pending: response.data });
    });
  };
  componentDidMount() {
    this.stateUp();
  }
  render() {
    const myCategories = this.state.categories;
    const myScience = this.state.science;
    return (
      <div className="home">
        <div
          id="home-bar-wrapper"
          className="menu-home"
          onClick={this.handleClick}
        >
          <div className="bars">
            <div className="bar-pre-move1">
              <div className="bar1" />
              <Link to="/profile" component={Profile} className="menu-link">
                profile
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
              <Link to="/logout" className="menu-link">
                sign out
              </Link>
            </div>
          </div>
        </div>
        <div className="marglas-div">
          <h1 className="marglas">Marglas</h1>
        </div>
        {/* </div> */}
        <div id="boards">
          <h2 className="home-header">my boards</h2>
          <div className="home-carousel">
            {myCategories.map(eachCategory => {
              return (
                <Link to={"/boardCard/" + eachCategory}>
                  <div className="carousel-box">
                    <div className="rectangle">
                      <h3 className="boardHeader">{eachCategory}</h3>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <Link to="/tracker" component={Tracker}>
          <div className="tracker-wrapper">
            <h2 className="home-header">my tracker</h2>
            <div id="tracker" />
          </div>
        </Link>
        <Link to="/factsCard" component={FactsCard}>
          <div id="facts-wrapper">
            <h2 className="home-header">my science</h2>
          </div>
          <div id="home-carousel">
            {myScience.map(eachScience => {
              return (
                <div className="carousel-box">
                  <div className="fact-img">
                    <img src="/img/img1.png" alt="some graphic" />
                  </div>
                  <div>
                    <h3 className="boardHeader">{eachScience}</h3>
                    <p className="scienceDescription">
                      this is a short description about the article
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Link>
        {/* if there is a pending question, show the popup component with the question */}

        {
          <QuestionPopup
            stateUp={this.stateUp}
            pending={this.state.pending}
            user={this.props.user}
          />
        }

        {<MoodPopup />}
      </div>
    );
  }
}
export default Home;
