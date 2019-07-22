import React, { Component } from "react";
import EditProject from "../components/Project/Edit";
import TaskForm from "../components/Task/Form";
import TaskList from "../components/Task/List";
import { Button } from "react-bootstrap";
import axios from "axios";

export default class ProjectDetails extends Component {
  state = {
    title: "",
    description: "",
    tasks: [],
    editForm: false,
    taskForm: false
  };

  getProject = () => {
    const projectId = this.props.match.params.id;

    return axios
      .get(`/api/projects/${projectId}`)
      .then(response => {
        const { title, description, tasks } = response.data;
        this.setState({ title, description, tasks });
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getProject();
  }

  submitEdit = () => {
    this.getProject().then(() => {
      this.toggleEdit();
    });
  };

  toggleEdit = () => {
    this.setState({ editForm: !this.state.editForm });
  };

  toggleTaskForm = () => {
    this.setState({ taskForm: !this.state.taskForm });
  };

  handleDelete = () => {
    const projectId = this.props.match.params.id;

    axios
      .delete(`/api/projects/${projectId}`)
      .then(() => {
        this.props.history.push("/projects");
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const project = {
      title: this.state.title,
      description: this.state.description,
      _id: this.props.match.params.id
    };

    return (
      <div>
        <h1>{this.state.title}</h1>
        <p>{this.state.description}</p>
        <Button onClick={this.toggleEdit}>Show Edit</Button>
        <Button onClick={this.toggleTaskForm}>Add Task</Button>
        <Button variant="danger" onClick={this.handleDelete}>
          Delete
        </Button>

        {this.state.editForm && (
          <EditProject
            project={project}
            submitEdit={this.submitEdit}
            // by passing {...this.props} we are passing the rest of the props (i.e the props added by the <Route/>)
            {...this.props}
          />
        )}
        {this.state.taskForm && (
          <TaskForm projectId={project._id} refreshData={this.getProject} />
        )}
        <TaskList tasks={this.state.tasks} />
      </div>
    );
  }
}
