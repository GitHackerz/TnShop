const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  ClientId: {
    type: String,
    required: true,
  },
  ProductId: {
    type: String,
    required: true,
  },
  Quantity: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Cart", CartSchema);
