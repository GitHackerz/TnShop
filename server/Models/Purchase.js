const mongoose = require("mongoose");

const PurchaseSchema = new mongoose.Schema({
  OrderId: {
    type: String,
    required: true,
  },
  ProductId: {
    type: String,
    required: true,
  },
  Qte: {
    type: Number,
    required: true,
  },
  Price: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Purchase", PurchaseSchema);
