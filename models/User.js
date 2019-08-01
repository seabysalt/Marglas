const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//mangoose.connect("mongodb://localhost/project3");

const userSchema = new Schema({
  userId: String,
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  img: {
    type: String,
    default: "/images/lion.png"
  },
  peers: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ],
  pending: [
    {
      id: {
        type: Schema.Types.ObjectId,
        ref: "Question"
      },
      date: { type: Date, default: Date.now }
    }
  ]
});

const User = mongoose.model("User", userSchema);
module.exports = User;
