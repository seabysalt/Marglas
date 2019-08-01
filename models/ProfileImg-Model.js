const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imgSchema = new Schema({
  // name: { type: String },
  imageUrl: { type: String, required: true },
})

const ProfileImg = mongoose.model('ProfileImg', imgSchema);
module.exports = ProfileImg;