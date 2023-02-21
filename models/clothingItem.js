const mongoose = require("mongoose");

const clothingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  weather: {
    type: String,
    required: true,
    enum: ["hot", "warm", "cold"],
  },
  imageUrl: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "owner",
    required: true,
  },
  likes: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

mondule.exports = mongoose.model("clothing", clothingSchema);
