import React from "react";
import { Switch, Route } from "react-router-dom";
import Protected from "./components/Protected";
import "./App.scss";

import Index from "./containers/Index";
import Signup from "./components/SignupRoute/Signup";
import Login from "./components/Login";
import Home from "./containers/Home";
import Welcome from "./components/SignupRoute/Welcome";
import Tracker from "./components/HomeRoute/Tracker";
import Mood from "./components/MoodTwo";
import BoardCard from "./components/HomeRoute/BoardCard";
import Profile from "./components/HomeRoute/Profile";
import FactsCard from "./components/HomeRoute/FactsCard";
import Aboutus from "./components/Aboutus";
import Navbar from "./components/Navbar";
import TrackerHome from "./components/HomeRoute/TrackerHome";

class App extends React.Component {
  state = {
    user: this.props.user
  };
  setUser = user => {
    this.setState({
      user: user
    });
  };

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Index} />
          <Protected
            exact
            path="/signup"
            redirectPath="/welcome"
            setUser={this.setUser}
            user={!this.state.user}
            component={Signup}
          />
          <Protected
            exact
            path="/login"
            redirectPath="/home"
            setUser={this.setUser}
            user={!this.state.user}
            component={Login}
          />
          <Protected
            exact
            path="/welcome"
            component={Welcome}
            user={this.state.user}
          />
          <Protected
            exact
            path="/home"
            component={Home}
            user={this.state.user}
            setUser={this.setUser}
            TrackerHome={TrackerHome}
          />

          <Protected
            exact
            path="/mood"
            component={Mood}
            user={this.state.user}
            setUser={this.setUser}
          />
          <Protected
            exact
            path="/factsCard"
            component={FactsCard}
            user={this.state.user}
            setUser={this.setUser}
          />
          <Protected
            exact
            path="/tracker"
            component={Tracker}
            user={this.state.user}
            setUser={this.setUser}
          />
          <Protected
            exact
            path="/boardCard/:category"
            component={BoardCard}
            user={this.state.user}
            setUser={this.setUser}
          />
          <Protected
            exact
            path="/profile"
            component={Profile}
            user={this.state.user}
            setUser={this.setUser}
            navbar={Navbar}
          />
          {/* <Protected
            exact
            path="/navbar"
            component={Navbar}
            user={this.state.user}
            setUser={this.setUser}
          /> */}
          <Protected
            exact
            path="/aboutus"
            component={Aboutus}
            user={this.state.user}
            setUser={this.setUser}
            navbar={Navbar}
          />
        </Switch>
      </div>
    );
  }
}
export default App;
