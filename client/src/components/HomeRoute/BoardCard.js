import React, { Component } from "react";
import ReactDOM from "react-dom";
// import ReactWordcloud from "react-wordcloud";
// import { Resizable } from "re-resizable";
import axios from "axios";
import Navbar from "../Navbar";

export default class BoardCard extends Component {
  state = {
    objectWithAnswers: [],
    slogan: {
      Happiness: "This sparkles joy...",
      Gratefulness: "You can be thankful for...",
      Strengths: "Your strong in...",
      Potential: "Hey Rockstar, you have big potential in... ",
      Energy: "This gives you an energy-push...",
      Accomplishments: "Be proud of..."
    }
  };

  resizeStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "solid 1px #ddd",
    background: "#f0f0f0"
  };

  /* how to access my category:
  this.props.category.match 
  = category --> wiki countries 
  */

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
    console.log(this.state.objectWithAnswers);
    return (
      <div class="boardCard-wrapper">
        <Navbar />
        <h1> {this.state.slogan[this.props.match.params.category]} </h1>
        {this.state.objectWithAnswers.length &&
          this.state.objectWithAnswers.map(el => (
            <div class="answerBoardCard">{el.answer}</div>
          ))}
        {/* <p>Resize the container!</p>
        <Resizable
          defaultSize={{
            width: 600,
            height: 300
          }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "solid 1px #ddd",
            background: "#f0f0f0"
          }}
        >
          {this.state.objectWithAnswers.length &&
            this.state.objectWithAnswers.map((el, i) => (
              <div key={i} style={{ width: "100%", height: "100%" }}>
                <ReactWordcloud
                  words={{
                    text: `${el.answer}`,
                    value: Math.floor(Math.random() * 100)
                  }}
                />
              </div>
            ))}
        </Resizable> */}
      </div>
    );
  }
}
