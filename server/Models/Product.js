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
  ImgURL: {
    type: String,
    required: true,
  },
  Color: {
    type: String,
    required: true,
  },
  Size: {
    type: String,
    required: true,
  },
  Type: {
    type: String,
    enum: ["Men", "Women", "AccessoriesMen", "AccessoriesWomen"],
    required: true,
  },
  Likes: {
    type: Number,
    required: true,
    default: 0,
  },
});

module.exports = mongoose.model("Product", ProductSchema);
