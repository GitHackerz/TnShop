const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Quantity: {
    type: Number,
    required: true,
  },
  Price: {
    type: Number,
    required: true,
  },
  Likes: {
    type: Number,
    required: true,
    default: 0,
  },
});

module.exports = mongoose.model("Product", ProductSchema);
