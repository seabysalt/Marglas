import React, { Component } from "react";

export default class BoardCard extends Component {
  /* how to access my category:
  this.props.location.match 
  = category --> wiki countries 
  
  componentDidMount() {
    axios.get()
  }
  */

  render() {
    return (
      <div id="boardCard-wrapper">
        <p>here we display our different boards</p>
      </div>
    );
  }
}
