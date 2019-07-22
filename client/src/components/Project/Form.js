import React, { Component } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
export default class ProjectForm extends Component {
  state = {
    title: "",
    description: ""
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    // const {title, description} = this.state

    axios
      .post("/api/projects", {
        title: this.state.title,
        description: this.state.description
      })
      .then(() => {
        this.props.refreshList();
        this.setState({
          title: "",
          description: ""
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
          {/* all groups (label + input) are grouped in a Form.Group */}
        <Form.Group>
            {/* <label></label> */}
          <Form.Label htmlFor="title">Title: </Form.Label>
          {/* <input /> */}
          <Form.Control
            type="text"
            onChange={this.handleChange}
            id="title"
            name="title"
            value={this.state.title}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="description">Description: </Form.Label>
          <Form.Control
            onChange={this.handleChange}
            type="text"
            name="description"
            id="description"
            value={this.state.description}
          />
        </Form.Group>

        <Button type="submit">Add Project</Button>
      </Form>
    );
  }
}
