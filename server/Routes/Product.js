var express = require("express");
var router = express.Router();
const Product = require("../Models/Product");

router.get("/", (req, res) => {
  res.send("Welcome To Product API");
});

router.get("/List", (req, res) => {
  Product.find({}, (err, products) => {
    if (err) return console.log(err);
    res.json(products);
  });
});

router.get("/Create", (req, res) => {
  res.send("Creating Product ...");
});

router.post("/Create", (req, res) => {
  const product = new Product({
    Name: req.body.productName,
    Quantity: req.body.productQuantity,
    Price: req.body.productPrice,
  });
  product
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
