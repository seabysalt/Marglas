import React, { Component } from "react";
import { login } from "../services/api";
import { Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import Index from "../containers/Index";

export default class Login extends Component {
  state = {
    username: "",
    password: "",
    error: ""
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

    login(username, password)
      .then(data => {
        this.props.setUser(data);
        this.props.history.push("/home");
      })
      .catch(err => {
        this.setState({ error: err.response.data.message });
      });
  };

  render() {
    return (

    <div id ="signup-body">

    <div className="bars">
    <Link to="/" component={Index} className="menu-link">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          </Link>
        </div>

    <div id="form-structor">

        <h2 className="form-title">Log in</h2>
        <div className="form-holder">
          <input type="text" className="input" name="username" id="username" value={this.state.username} onChange={this.handleChange} placeholder="username" />
          <input type="password" className="input" name="password" id="password" value={this.state.password} onChange={this.handleChange} placeholder="password" />
        </div>
        {this.state.error && (
          <p className="warning">{this.state.error} </p>
        )}
        <button className="submit-btn" onClick={this.handleSubmit}>Log in</button>
      </div>

       </div>
    )
  }
}

