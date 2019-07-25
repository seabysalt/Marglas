import React, { Component } from "react";
import { Link } from "react-router-dom";
import Profile from "../components/HomeRoute/Profile";
import BoardCard from "../components/HomeRoute/BoardCard";
import FactsCard from "../components/HomeRoute/FactsCard";
import Tracker from "../components/HomeRoute/Tracker";

export class Home extends Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default Home;
