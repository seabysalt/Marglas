import React, { Component } from "react";
import ProjectForm from "../components/Project/Form";
import ProjectList from "../components/Project/List";
import axios from "axios";

export default class Projects extends Component {
  state = {
    projects: []
  };

  getData = () => {
    axios
      .get("/api/projects")
      .then(response => {
        this.setState({
          projects: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div>
        {/* on 1st render, this.state.projects is [] */}
        {/* after that, this.state.projects is populated by the data from the API */}
        <ProjectForm refreshList={this.getData} />
        <ProjectList projects={this.state.projects} />
      </div>
    );
  }
}
