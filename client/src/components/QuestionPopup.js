import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import axios from "axios";

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

    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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
      _question: this.props.pending[0]._id,
      category: this.props.pending[0].category,
      answer: this.state.answer
    };
    console.log(newAnswer);
    axios.post("/answer", newAnswer).then(() => console.log("posted"));
    axios.post("/question/pending", newAnswer).then(response => {
      console.log(response);
      this.props.stateUp();
    });
  };

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = "#f00";
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div class="Modal">
        <Modal
          class="Modal"
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          // style={customStyles}
          contentLabel="Example Modal"
        >
          {/* this component will get the question from the props */}
          <div id="close">
            <button onClick={this.closeModal}>X</button>
          </div>
          <div id="formBody">
            <h3 id="questionStyle" ref={subtitle => (this.subtitle = subtitle)}>
              {this.props.pending.length > 0 && this.props.pending[0].question}
            </h3>

            <form class="answerForm" onSubmit={this.handleSubmit}>
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
            </form>
          </div>
        </Modal>
      </div>
    );
  }
}

export default QuestionPopup;
