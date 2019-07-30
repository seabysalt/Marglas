import React, { Component } from "react";
import axios from "axios";

export default class BoardCard extends Component {
  state = {
    objectWithAnswers: []
  };

  /* how to access my category:
  this.props.category.match 
  = category --> wiki countries 
  */

  componentDidMount() {
    console.log("Working component");
    const category = this.props.match.params.category;

    console.log("/boardCard/" + category);
    axios
      .get("/boardCard/" + category) // /boardCard/Happiness
      .then(res => {
        console.log("this is our log" + res.data[0].answer);
        const newAnswers = [...this.state.objectWithAnswers];
        newAnswers.push(res.data[0].answer);
        this.setState({ objectWithAnswers: newAnswers });
        console.log(this.state);
      })
      .catch(err => {
        console.log("Error is: ", err);
      });
  }

  render() {
    return (
      <div id="boardCard-wrapper">
        <p>here we display our different boards</p>

        {this.state.objectWithAnswers.length &&
          this.state.objectWithAnswers.map(answer => <div>{answer}</div>)}
      </div>
    );
  }
}
