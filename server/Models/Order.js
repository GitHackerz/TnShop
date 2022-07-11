const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  ClientCIN: {
    type: String,
    required: true,
  },
  TotalPrice: {
    type: Number,
    required: true,
  },
  
});

module.exports = mongoose.model("Order", OrderSchema);
