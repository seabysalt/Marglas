import React, { Component } from 'react'

export default class Index extends Component {
  render() {
    return (
      <div id="index">
        <div className="circles">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
        </div>
        <div className="bars">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div className="index-content">
        <h1 className="header">Marglas</h1>
<div className="index-links">
        <a href="/login">login</a>
        <a href="/signup">signup</a>
        </div>
        </div>
      </div>
    )
  }
}
