import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.css";

import "./App.scss";

import Projects from "./containers/Projects";
import ProjectDetails from "./containers/ProjectDetails";
import TaskDetails from "./containers/TaskDetails";
// import Signup from "./containers/Signup";
import Login from "./containers/Login";
import Questions from "./containers/Questions"

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
        {/* <Navbar setUser={this.setUser} user={this.state.user} /> */}
        <Switch>
          {/* <Route
            exact
            path="/signup"
            render={props => {
              return <Signup setUser={this.setUser} {...props} />;
            }}
          /> */}
          <Route
            exact
            path="/login"
            render={props => {
              return <Login setUser={this.setUser} {...props} />;
            }}
          />
          <Route
            exact
            path="/question"
            render={props => {
              return <Questions setUser={this.setUser} {...props} />;
            }}
          />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/projects/:id" component={ProjectDetails} />
          <Route exact path="/tasks/:id" component={TaskDetails} />
        </Switch>
      </div>
    );
  }
}

export default App;
