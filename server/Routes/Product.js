var express = require("express");
var router = express.Router();
const Product = require("../Models/Product");

router.get("/", (req, res) => {
  res.send("Welcome To Product API");
});

router.get("/List", (req, res) => {
  Product.find({}, (err, products) => {
    if (err) return res.json(err);
    if (products) res.json(products);
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
    ImgURL: req.body.productImgURL,
    Type: req.body.productType,
  });
  product
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/Delete/:_id", (req, res) => {
  res.send("Deleting Product ...");
  Product.deleteOne({ _id: req.params._id }, (err) => {
    if (err) return res.json(err);
  });
});

router.get("/GetProductNumbers", (req, res) => {
  Product.countDocuments({}, (err, count) => {
    if (err) return res.json(err);
    res.json(count);
  });
});

router.get("/GetById/:id", (req, res) => {
  Product.findById(req.params.id, (err, product) => {
    if (err) return res.json(err);
    res.json(product);
  });
});

router.post("/Update", async (req, res) => {
  let product = await Product.findOne({ _id: req.body.productId });

  const update = {
    Name: req.body.productName,
    Quantity: req.body.productQuantity,
    Price: Number(req.body.productPrice),
    Likes: Number(req.body.productsLikes),
  };
  await product.updateOne(update);
  res.json(product);
});

router.get("/GetProductsLikes", (req, res) => {
  var likes = 0;
  Product.find({}, (err, products) => {
    if (err) return res.json(err);
    products.forEach((product) => (likes += product.Likes));
    res.json(likes);
  });
});

module.exports = router;
