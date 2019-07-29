const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//mangoose.connect("mongodb://localhost/project3");

const userSchema = new Schema({
  userId: String,
  username: { 
    type: String, 
    required: true },
  password: { 
    type: String, 
    required: true },
  img: {
    type: String,
    default: '/images/default-icon.png'
  },
  peers: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ],
  pending: [
    {
      type: Schema.Types.ObjectId,
      ref: "Question"
    }
  ]
});

const User = mongoose.model("User", userSchema);
module.exports = User;
