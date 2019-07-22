import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

export default class TaskForm extends Component {
  state = {
    title: "",
    description: ""
  };

  handleChange = event => {
/*     const { name, value } = event.target;
    this.setState({ [name]: value }); */
  };

  handleSubmit = event => {
    /* event.preventDefault();

    const { title, description } = this.state;

    axios
      .post("/api/tasks", {
        title,
        description,
        projectId: this.props.projectId
      })
      .then(response => {
        this.props.refreshData();
        this.setState({ title: "", description: "" });
      })
      .catch(err => {
        console.log(err);
      }); */
  };

  render() {
    return (
      <div>
        {/* <hr />
        <h3>Add interests: </h3>
        <div className="questions">
        <h2 className="form-title" id="question" ><span>or</span>Info</h2>
        <div className="form-holder">
          <input type="text" className="input" name="signupUsername" id="signupUsername" value={this.state.username} onChange={this.handleChange} placeholder="Username" />
          <input type="email" className="input" placeholder="Email" />
          <input type="password" className="input" name="signupPassword" id="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" />
        </div>
        <button className="submit-btn" onClick={this.handleSubmit}>Sign up</button> */}
      </div>
    );
  }
}
