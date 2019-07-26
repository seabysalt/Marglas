const mongoose = require("mongoose");
const Question = require("./models/Question");
mongoose.connect("mongodb://localhost/project3", {
  useNewUrlParser: true
});

const QuestionsInput = [
  {
    question: "The last time I felt joy, I was",
    peerQuestion: "seems to be happy when she is",
    category: "Happiness",
    prompt1: "You should be",
    prompt2: ". This makes you happy!"
  },
  {
    question: "The last time I felt energetic I was",
    peerQuestion: "seems to be energetic when she is",
    category: "Energy",
    prompt1: "You should be",
    prompt2: ". This brings you energy!"
  },
  {
    question: "Today, I am grateful for",
    peerQuestion: "can be grateful for",
    category: "Gratefulness",
    prompt1: "You're life is full of amazing things! Aren't you grateful for",
    prompt2: ". We think you should and can be!"
  },
  {
    question: "The last time I accomplished something I was",
    peerQuestion: "was successful when she was",
    category: "Accomplishments",
    prompt1: "You have already accomplished a lot of nice things. Remember when you were",
    prompt2: ""
  },
  {
    question: "I feel that someday I could be good in",
    peerQuestion: "could be good in",
    category: "Potential",
    prompt1: "You still have a lot of potential in you! You could be amazing in",
    prompt2: ". Maybe you should try it out!"
  },
  {
    question: "I feel like I am good in",
    peerQuestion: "is good in",
    category: "Strengths",
    prompt1: "We think you are better! You are amazing in",
    prompt2: ". Don't forget it. Maybe check out your strengths again!"
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
