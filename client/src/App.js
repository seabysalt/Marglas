import React from "react";
import { Switch, Route } from "react-router-dom";
import Index from "./containers/Index";
import "bootstrap/dist/css/bootstrap.css";
import "./App.scss";
import Signup from "./components/SignupRoute/Signup";
import Login from "./components/Login";
import Home from "./containers/Home";
import Welcome from "./components/SignupRoute/Welcome";
import Mood from "./components/MoodTwo";
import BoardCard from "./components/HomeRoute/BoardCard";
import Profile from "./components/HomeRoute/Profile";
import Tracker from "./components/HomeRoute/Tracker";
import FactsCard from "./components/HomeRoute/FactsCard";
import Aboutus from "./components/Aboutus";

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
          <Route
            exact
            path="/signup"
            render={props => {
              return <Signup setUser={this.setUser} {...props} />;
            }}
          />
          <Route
            exact
            path="/login"
            render={props => {
              return <Login setUser={this.setUser} {...props} />;
            }}
          />
          <Route exact path="/welcome" component={Welcome} />
          <Route
            exact
            path="/home"
            render={() => <Home user={this.state.user} />}
          />
          <Route exact path="/mood" component={Mood} />
          <Route exact path="/boardCard/:category" component={BoardCard} />
          <Route exact path="/factsCard/:fact" component={FactsCard} />
          <Route exact path="/tracker" component={Tracker} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/aboutus" component={Aboutus} />
        </Switch>
      </div>
    );
  }
}
export default App;
