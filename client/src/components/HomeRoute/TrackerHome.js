import React, { Component } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";

/* const test = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Energy Curve",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    },
    {
      label: "Love Curve",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "#690833",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [24, 50, 85, 70, 30, 12, 10]
    },
    {
      label: "Grateful Curve",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [30, 19, 8, 20, 56, 70, 30]
    }
  ]
}; */
export class Tracker extends Component {
  state = {
    trackers: []
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
  render() {
    let array = ["energyMood", "loveMood", "gratefulMood"].map(el => {
      return {
        label: el,
        fill: false,
        lineTension: 0.1,
        borderColor: "#29336e",
        backgroundColor: "#F5C732",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "#f5c732",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 2,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#f5c732",
        pointHoverBorderColor: "#bedbf3",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: this.state.trackers.map(tracker => tracker[el] || 0),
      }
    });
    let data = {
      labels: this.state.trackers.map(el =>
        new Date(el.date).toLocaleDateString()
      ),
      datasets: array
    };
    let chartOptions = {
      scales: {
        xAxes: [{
          display: false,
          scaleLabel: {
            display: false,
        }
      }]
    }
  }
    return (
      <div className="trackerAll">
        {console.log(data)}
        <div className="trackerGraph">
          <Line data={data} options={chartOptions}/>
        </div>
      </div>
    );
  }
}
export default Tracker;
