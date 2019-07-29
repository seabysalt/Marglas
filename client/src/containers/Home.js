import React, { Component } from "react";
import { Link } from "react-router-dom";
import Profile from "../components/HomeRoute/Profile";
import BoardCard from "../components/HomeRoute/BoardCard";
import FactsCard from "../components/HomeRoute/FactsCard";
import Tracker from "../components/HomeRoute/Tracker";
import QuestionPopup from "../components/QuestionPopup";
import axios from "axios";
// import Questions from "../co"
import Mood from "../components/Mood";

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

  stateUp = () => {
    axios.get("/question/pending").then(response => {
      this.setState({ pending: response.data });
    });
  };
  handleClick() {
    document.querySelector(".bars").style.cssText =
      "animation: homeBar 2s forwards;";
  }

  componentDidMount() {
    this.stateUp();
  }

  render() {
    const myCategories = this.state.categories;
    const myScience = this.state.science;
    return (
      <div className="home">
        <div id="home-bar-wrapper">
          <div className="bars" onClick={this.handleClick}>
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
          </div>
          <div>
            <h1 className="marglas">Marglas</h1>
          </div>
        </div>
        {/* <Link to="/profile" component={Profile}>

      <div id="home">
        <h1>HOME</h1>
        <Link to="/profile" component={Profile}>

          Profile
        </Link> */}
        <Link to="/boardCard" component={BoardCard}>
          <div id="boards">
            <h2 className="home-header">my boards</h2>
            <div className="home-carousel">
              {myCategories.map(eachCategory => {
                return (
                  <div className="carousel-box">
                    <div className="rectangle">
                      <h3 className="boardHeader">{eachCategory}</h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Link>
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
        <Link to="/mood">Mood</Link>
      </div>
    );
  }
}

export default Home;
