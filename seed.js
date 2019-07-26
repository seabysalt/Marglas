const mongoose = require("mongoose");
const Question = require("./models/Question");
mongoose.connect("mongodb://localhost/project3", {
  useNewUrlParser: true
});

const QuestionsInput = [
  {
    question: "Question Energie 1",
    category: "Energy"
  },
  {
    question: "Question Energie 2",
    category: "Energy"
  },
  {
    question: "Question Love 1",
    category: "Love"
  },
  {
    question: "Question Love 2",
    category: "Love"
  },
  {
    question: "Question Gratitude 1",
    category: "Gratitude"
  },
  {
    question: "Question Gratitude 1",
    category: "Gratitude"
  }
];

const seed = () => {
  return Question.create(QuestionsInput);
};
seed().then(() => {
  process.exit();
});

// Questions.create(questions)
//   .then(data => {
//     console.log(`Created ${data.length} questions`);
//     mongoose.connection.close();
//   })
//   .catch(err => {
//     console.log("Error while creating the questions: ", err);
//   });
