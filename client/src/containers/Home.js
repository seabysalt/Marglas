import React, { Component } from "react";
import { Link } from "react-router-dom";
import Profile from "../components/HomeRoute/Profile";
import BoardCard from "../components/HomeRoute/BoardCard";
import FactsCard from "../components/HomeRoute/FactsCard";
import Tracker from "../components/HomeRoute/Tracker";
import QuestionPopup from "../components/QuestionPopup";
import axios from "axios";

export class Home extends Component {
  componentDidMount() {
    axios.get("/question/pending").then(response => {
      console.log(response);
    });
  }

  render() {
    return (
      <div id="home">
        <h1>HOME</h1>
        <Link to="/profile" component={Profile}>
          Profile
        </Link>
        <Link to="/boardCard" component={BoardCard}>
          Board Card
        </Link>
        <Link to="/tracker" component={Tracker}>
          Tracker
        </Link>
        <Link to="/factsCard" component={FactsCard}>
          Facts
        </Link>
        {/* if there is a pending question, show the popup component with the question */}
        <QuestionPopup question={"how are you"} />
      </div>
    );
  }
}

export default Home;
