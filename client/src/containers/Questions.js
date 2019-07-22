import React, { Component } from "react";
import axios from "axios";

import Question1 from "../components/Question/Question1";
import Question2 from "../components/Question/Question2";

export default class Questions extends Component {
  state = {
    questions: []
  };

/*   getData = () => {
    axios
      .get("/api/questions")
      .then(response => {
        this.setState({
          questions: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getData();
  }
 */

  render() {
    return (
<div className="form-body">
    <div className="form-structor">
      <Question1 />
      <Question2 />
      </div>
      </div>
    );
  }
}
