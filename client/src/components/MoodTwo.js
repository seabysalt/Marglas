import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import axios from "axios";

// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)"
//   }
// };

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

class MoodPopup extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: true,
      energyMood: 0,
      loveMood: 0,
      gratefulMood: 0
    };

    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

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
        // if(this.energyMood < 5) message: `${}
        //if req.body <5 prompt1 of that category + show answer of that category + prompt2 of that category

        console.log("axios ant", res);
        const message = res.data.message;
        console.log(message);
        this.setState({
          energyMood: 0,
          loveMood: 0,
          gratefulMood: 0,
          message:
            message || `Thanks for sharing your mood, ${res.data.username}!`
        });
        this.closeModal();
      })
      .catch(err => {
        console.log(err);
      });
  };

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = "#f00";
  }

  closeModal() {
    setTimeout(() => this.setState({ modalIsOpen: false }), 5000);
  }

  render() {
    return (
      <div class="Modal">
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          // style={customStyles}
          contentLabel="Example Modal"
        >
          <div id="close">
            <button onClick={this.closeModal}>X</button>
          </div>

          <div id="formBody">
            <h3 id="headerMood" ref={subtitle => (this.subtitle = subtitle)}>
              Fill your Marglas
            </h3>

            <form
              className="moodTracker"
              onSubmit={this.handleSubmit} //&& this.closeModal//
            >
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
        </Modal>
      </div>
    );
  }
}

export default MoodPopup;
