const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//mangoose.connect("mongodb://localhost/project3");

const userSchema = new Schema({
  userId: String,
  username: { type: String, required: true },
  password: { type: String, required: true },
  peers: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ]
});

const User = mongoose.model("User", userSchema);
module.exports = User;
