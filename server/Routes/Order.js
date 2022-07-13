var express = require("express");
var router = express.Router();
const Order = require("../Models/Order");

router.get("/", (req, res) => {
  res.send("Welcome To Order API");
});

router.get("/List", (req, res) => {
  Order.find({}, (err, orders) => {
    if (err) return console.log(err);
    res.json(orders);
  });
});

router.get("/Create", (req, res) => {
  res.send("Creating Order ...");
});

router.post("/Create", (req, res) => {
  const order = new Order({
    ClientCIN: req.body.orderClientCIN,
    TotalPrice: req.body.orderTotalPrice,
  });
  order
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/Delete/:_id", (req, res) => {
  res.send("Deleting Order ...");
  Order.deleteOne({ _id: req.params._id }, (err) => {
    if (err) return console.log(err);
  });
});

router.get("/GetOrderNumbers", (req, res) => {
  Order.countDocuments({}, (err, count) => {
    if (err) return console.log(err);
    res.json(count);
  });
});

router.get("/GetById/:id", (req, res) => {
  Order.findById(req.params.id, (err, order) => {
    if (err) return console.log(err);
    res.json(order);
  });
});

router.post("/Update", async (req, res) => {
  let order = await Order.findOne({ _id: req.body.orderId });

  const update = {
    ClientCIN: req.body.orderClientCIN,
    TotalPrice: req.body.orderTotalPrice,
  };
  await order.updateOne(update);
  res.json(order);
});

router.get("/GetOrdersRevenue", (req, res) => {
  var cash = 0;
  Order.find({}, (err, orders) => {
    if (err) return console.log(err);
    orders.forEach((order) => (cash += order.TotalPrice));
    res.json(cash);
  });
});

module.exports = router;
