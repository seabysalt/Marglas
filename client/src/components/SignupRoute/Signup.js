import React, { Component } from "react";
// import { Form, Button } from "react-bootstrap";
import { signup } from "../../services/api";

export default class Signup extends Component {
  state = {
    username: "",
    password: "",
    error: "",
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    const { username, password } = this.state;
    event.preventDefault();

    signup(username, password)
      .then(data => {
        this.props.setUser(data);
        this.props.history.push("/welcome");
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (

    <div id ="signup-body">

    <div className="bars">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

    <div className="form-structor">

        <h2 className="form-title">Sign up</h2>
        <div className="form-holder">
          <input type="text" className="input" name="username" id="username" value={this.state.username} onChange={this.handleChange} placeholder="Username" />
          <input type="password" className="input" name="signupPassword" id="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" />
        </div>
        {this.state.error && (
          <p className="warning">{this.state.error} </p>
        )}
        <button className="submit-btn" onClick={this.handleSubmit}>Sign up</button>
      </div>

       </div>
    )
  }
}
