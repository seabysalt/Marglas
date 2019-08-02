import React, { Component } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import Navbar from "../Navbar";

export class Tracker extends Component {
  state = {
    trackers: [],
    days: 10
  };
  componentDidMount() {
    this.getMoodInfo();
  }
  getMoodInfo = e => {
    axios
      .get("/tracker")
      .then(res => {
        this.setState({ trackers: res.data });
      })
      .catch(err => {
        console.log("Error is: ", err);
      });
  };
    handleChange = (e)=>{
      this.setState({days:e.target.value})
    }
  render() {
    let array = [
      {label:"energyMood", color:'#f5c732' , bgcolor:'rgba(245, 199, 50, 0.5)'},{label:"loveMood", color:'#22684f' , bgcolor:'rgba(34, 104, 79, 0.5)'}, {label:"gratefulMood", color:'#bedbf3' , bgcolor:'rgba(190, 219, 243, 0.5)'}
    ].map(el => {
      return {
        label: el.label,
        fill: true,
        lineTension: 0.1,
        borderColor: el.color,
        backgroundColor: el.bgcolor,
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 2,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: this.state.trackers.slice(0,this.state.days).map(tracker => tracker[el.label]-50 || 0)
      };
    });
    let data = {
      labels: this.state.trackers.slice(0,this.state.days).map(el =>
        new Date(el.date).toLocaleDateString()
      ),
      datasets: array
    };

    let chartOptions = {
      responsive: false,
      scales: {
        yAxes: [{
          display: true,
          ticks: {
            steps: 10,
            stepValue: 5,
            max: 50,
            min: -50
          }
        }]
      }

    }

    return (
      <div>
      <Navbar />
      <div className="aboutus-logo">
        <img src="/img/marglas1.png" style={{width: "13vh", height: "20vw"}} alt="logo"/>
      </div>
      <div className="tracker-full">
        {console.log(data)}
        <h2 className="tracker-headline">My Mood Tracker</h2>
        <div className="tracker-graph">
          <Line data={data} options={chartOptions} height="300"/>
        </div>
      </div>
      <div className="tracker-search">
      <p>Days to display</p>
      <input type='number' onChange={this.handleChange} value={this.state.days}/>
      </div>
      </div>
    );
  }
}

export default Tracker;
