const { response } = require("express");
var express = require("express");
var router = express.Router();
const Cart = require("../Models/Cart");
const Product = require("../Models/Product");

router.get("/", (req, res) => {
  res.send("Welcome To Cart API");
});

router.get("/List", (req, res) => {
  Cart.find({}, (err, carts) => {
    if (err) return console.log(err);
    res.json(carts);
  });
});
router.get("/List/:ClientId", (req, res) => {
  Cart.find({ ClientId: req.params.ClientId }, (err, carts) => {
    if (err) return console.log(err);
    res.json(carts);
  });
});

router.get("/Create", (req, res) => {
  res.send("Creating Cart ...");
});

router.post("/Create", (req, res) => {
  Cart.findOne(
    { ClientId: req.body.cartClientId, ProductId: req.body.cartProductId },
    (err, cart) => {
      if (err) return console.log(err);
      if (cart) {
        cart.Quantity += Number(req.body.cartQuantity);
        cart.save((err) => {
          if (err) return console.log(err);
          res.json({ message: "Cart Updated" });
        });
      } else {
        var cart = new Cart({
          ClientId: req.body.cartClientId,
          ProductId: req.body.cartProductId,
          Quantity: req.body.cartQuantity,
        });
        cart.save((err) => {
          if (err) return console.log(err);
          res.json({ message: "Cart Created" });
        });
      }
    }
  );
});

router.get("/Delete/:_id", (req, res) => {
  res.send("Deleting Cart ...");
  Cart.deleteOne({ _id: req.params._id }, (err) => {
    if (err) return console.log(err);
  });
});

router.get("/GetCartNumbers/:ClientId", (req, res) => {
  Cart.countDocuments({ ClientId: req.params.ClientId }, (err, count) => {
    if (err) return console.log(err);
    res.json(count);
  });
});

router.get("/GetCartProudcts/:ClientId", (req, res) => {
  Cart.find({ ClientId: req.params.ClientId }, (err, carts) => {
    Product.find(
      { _id: { $in: carts.map((cart) => cart.ProductId) } },
      (err, products) => {
        res.json({
          products: products,
          carts: carts,
        });
      }
    );
  });
});

router.post("/UpdateCart", async (req, res) => {
  const update = {
    Quantity: req.body.cartQuantity,
  };
  const filter = {
    ClientId: req.body.cartClientId,
    ProductId: req.body.cartProductId,
  };

  console.log(update.Quantity);
  try {
    await Cart.updateOne(filter, update);
    res.json({ message: "Cart Updated" });
  } catch (err) {
    console.log(err);
    res.json({ message: "Error updating Cart" });
  }
});

module.exports = router;
