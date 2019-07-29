import React, { Component } from "react";
import axios from "axios";

export class Mood extends Component {
  state = {
    energyMood: 0,
    loveMood: 0,
    gratefulMood: 0
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);

    axios
      .post("/mood", {
        energyMood: this.state.energyMood,
        loveMood: this.state.loveMood,
        gratefulMood: this.state.gratefulMood
      })
      .then(res => {
        console.log("axios ant", res);
        this.setState({
          energyMood: 0,
          loveMood: 0,
          gratefulMood: 0,
          message: `Thanks for sharing your mood, ${res.data.username}!`
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <form className="moodTracker" onSubmit={this.handleSubmit}>
          <label className="moodTrackerQuestion" htmlFor="title">
            How energetic do you feel today?
          </label>
          <input
            name="energyMood"
            type="range"
            value={this.state.energyMood}
            onChange={this.handleChange}
          />

          <label htmlFor="description">How loved do you feel today?</label>
          <input
            name="loveMood"
            type="range"
            value={this.state.loveMood}
            onChange={this.handleChange}
          />

          <label htmlFor="description">How grateful are today? </label>
          <input
            name="gratefulMood"
            type="range"
            value={this.state.gratefulMood}
            onChange={this.handleChange}
          />
          <button className="submitDailyMood" type="submit">
            Submit
          </button>
          <p className="moodMessage">{this.state.message}</p>
        </form>
      </div>
    );
  }
}

export default Mood;
