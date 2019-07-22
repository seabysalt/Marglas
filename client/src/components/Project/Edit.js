import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

class EditProject extends Component {
  state = {
    title: this.props.project.title,
    description: this.props.project.description
  };

  handleSubmit = event => {
    event.preventDefault();

    const title = this.state.title;
    const description = this.state.description;

    axios
      .put(`/api/projects/${this.props.project._id}`, { title, description })
      .then(() => {
        this.props.submitEdit();
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <hr />
        <h3>Edit project: </h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>Title:</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Description:</Form.Label>
            <Form.Control
              type="text"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Button type="submit">Edit</Button>
        </Form>
      </div>
    );
  }
}

export default EditProject;
