import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactWordcloud from "react-wordcloud";
import { Resizable } from "re-resizable";
import axios from "axios";
import Navbar from "../Navbar";

export default class BoardCard extends Component {
  state = {
    objectWithAnswers: [],
    slogan: {
      Happiness: "This sparks joy in you...",
      Gratefulness: "You can be thankful for...",
      Strengths: "You are powerful in...",
      Potential: "Hey Rockstar, you have big potential in... ",
      Energy: "This gives you an energy-push...",
      Accomplishments: "Be proud of..."
    }
  };

  componentDidMount() {
    console.log("Working component");
    const category = this.props.match.params.category;
    console.log("my category" + category);
    console.log("/boardCard/" + category);
    axios
      .get("/boardCard/" + category) // /boardCard/Happiness
      .then(res => {
        console.log("this is our log", res.data);
        //const newAnswers = [...this.state.objectWithAnswers]; // show just one
        //newAnswers.forEach(res.data[0].answer) => {newAnswers} ;
        this.setState({ objectWithAnswers: res.data });
        console.log(this.state);
      })
      .catch(err => {
        console.log("Error is: ", err);
      });
  }
  render() {
    const options = {
      fontFamily: "roboto",
      colors: ["#22684f", "#f5c732", "#29336e", "#e4c7df", "#de6322", "#bedbf3"],
      fontSizes: [5, 60],
fontStyle: "normal",
fontWeight: "normal",
padding: 1,
rotations: 3,
rotationAngles: [0, 90],
scale: "sqrt",
spiral: "archimedean",
transitionDuration: 1000,
    };
    const myAnswers = this.state.objectWithAnswers.map((el, i) => ({
      text: el.answer,
      // value: 80
      // fontSize: 50,
      // fontFamily: "impact",
      value: 1500
    }));
    return (
      <div>
        <Navbar setUser={this.props.setUser} />
        <div className="aboutus-logo">
        <img src="/img/marglas1.png" style={{width: "13vh", height: "20vw"}} alt="logo"/>
        </div>
        <div className="boardCard-wrapper">
          <h1> {this.state.slogan[this.props.match.params.category]} </h1>
          <div>
            <Resizable
              // defaultSize={{
              //   width: 100%,
              //   height: 400
              // }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#fff"
              }}
            >
              <ReactWordcloud
                className="wordCloud"
                options={options}
                words={myAnswers}
              />
            </Resizable>
          </div>
        </div>
      </div>
    );
  }
}