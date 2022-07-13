const mongoose = require("mongoose");

const FeedbackSchema = new mongoose.Schema({
  ClientId: {
    type: String,
    required: true,
  },
  ProductId: {
    type: String,
    required: true,
  },
  Comment: {
    type: String,
    required: true,
  },
  Rate: {
    type: Number,
    required: true,
    default: 2.5,
  },
  Date: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("Feedback", FeedbackSchema);
