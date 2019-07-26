import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Index extends Component {

handleClick=(x) =>{
  document.querySelector('.bars').style.cssText = "animation: barMove 2s;"
  setTimeout(() => {
  this.props.history.push(x)
  }, 1000);
console.log(document.querySelector('.bars').style)
}

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
  <p onClick={()=>this.handleClick("/login")} className="index-link">login</p>
   <p onClick={()=>this.handleClick("/signup")} className="index-link">signup</p>
        </div>
        </div>
      </div>
    )
  }
}
