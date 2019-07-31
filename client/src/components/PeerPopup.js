import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import axios from "axios";

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

class PeerPopup extends React.Component {
  constructor() {
    super();

    this.state = {
      answer: "",
      question: {}
    };
  }

  handleInputChange = event => {
    console.log(event.target.value);
    const answer = event.target.value;
    this.setState({ answer });
  };

  handleSubmit = event => {
    event.preventDefault();
    const newAnswer = {
      _user: this.props.peer._id,
      _question: this.state.question._question,
      category: this.state.question.category,
      answer: this.state.answer
    };
    axios.post("/answer", newAnswer).then(() =>
      //`Thank you for filling up ${this.props.peer.username}'s Marglas!`,
      this.props.closeSubmit()
    );
  };

  afterOpenModal = () => {
    console.log(this.props.peer);

    axios.get("/question/peer").then(response => {
      this.setState({ question: response.data });
    });
  };

  skipPeer = () => {
    axios.get("/question/peer").then(response => {
      this.setState({ question: response.data });
    });
  };

  render() {
    return (
      <div className="Modal">
        {this.props.openModal ? (
          <>
            <div>working</div>
            <Modal
              isOpen={this.props.openModal}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.props.closeModal}
              contentLabel="Example Modal"
            >
              <div id="close">
                <button onClick={this.props.closeModal}>X</button>
              </div>
              <div id="formBody">
                <h3
                  id="questionStyle"
                  ref={subtitle => (this.subtitle = subtitle)}
                >
                  {this.props.peer.username} {this.state.question.peerQuestion}
                </h3>
                <form className="answerForm" onSubmit={this.handleSubmit}>
                  <input
                    onChange={this.handleInputChange}
                    type="text"
                    name="answer"
                    placeholder="answer here"
                    value={this.state.answer}
                  />
                  <button id="answerSubmitButton" type="submit">
                    submit
                  </button>

                  <p id="comment">(small moments are those that count!)</p>
                  {/* <p id="message">{this.state.message}</p> */}
                </form>
                <button onClick={this.skipPeer}>skip</button>
              </div>
            </Modal>
          </>
        ) : null}
      </div>
    );
  }
}

export default PeerPopup;
