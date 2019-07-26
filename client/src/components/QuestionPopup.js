import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import axios from "axios";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

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
      <div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          {/* this component will get the question from the props */}

          <h2 ref={subtitle => (this.subtitle = subtitle)}>
            {this.props.pending.length > 0 && this.props.pending[0].question}
          </h2>

          <button onClick={this.closeModal}>close</button>
          <form onSubmit={this.handleSubmit}>
            <input
              onChange={this.handleInputChange}
              type="text"
              name="answer"
              placeholder="answer here"
              value={this.state.answer}
            />
            <button type="submit">submit</button>
          </form>
        </Modal>
      </div>
    );
  }
}

export default QuestionPopup;
