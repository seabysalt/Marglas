import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import axios from "axios";
// import Question from "../../../models/Question";

// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     width: "80%",
//     height: "70%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//   }
// };

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

class QuestionPopup extends React.Component {
  constructor() {
    super();

    // Create a new handleInputChange
    // use Axios.post to send information to backend

    this.state = {
      modalIsOpen: true,
      answer: ""
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
      _user: this.props.user._id,
      _question: this.props.pending[0].id._id,
      category: this.props.pending[0].id.category,
      answer: this.state.answer
    };
    console.log(this.props.pending);
    console.log(newAnswer, "hiiii");
    axios.post("/answer", newAnswer).then(() => this.closeModal());
    axios.post("/question/pending", newAnswer).then(response => {
      console.log(response);
      this.props.stateUp();
    });
  };

  afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = "#29336e";
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  skipModal = event => {
    event.preventDefault();
    const newAnswer = {
      _question: this.props.pending[0].id._id
    };
    console.log(newAnswer._question);
    axios.post("/question/pending", newAnswer).then(response => {
      console.log(response);
      this.props.stateUp();
    });
  };

  render() {
    return (
      <div id="question-popup" className="Modal">
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          // style={customStyles}
          contentLabel="Example Modal"
        >
          {/* this component will get the question from the props */}
          <div id="close">
            <img src="/img/exitOrange.png" onClick={this.closeModal} />
          </div>
          <div className="popup-marglas-img">
          <img style={{width: "10vh"}} src="/img/marglas2.png" />
          </div>
          <div id="formBody">
            <h3 id="questionStyle" ref={subtitle => (this.subtitle = subtitle)}>
              {this.props.pending.length > 0 &&
                this.props.pending[0].id.question}
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

              <p id="comment">Sometimes it's the small things that make the difference!</p>
            </form>

            <button className="skip" onClick={this.skipModal}>skip</button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default QuestionPopup;
