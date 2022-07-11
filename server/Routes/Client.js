var express = require("express");
var app = express();
var router = express.Router();
const mongoose = require("mongoose");
const Client = require("../Models/Client");
var app = express();

router.get("/", (req, res) => {
  res.send("Welcome To Client API");
});

router.get("/List", (req, res) => {
  Client.find({}, (err, clients) => {
    if (err) return console.log(err);
    res.json(clients);
  });
});

router.get("/Create", (req, res) => {
  res.send("Creating Client ...");
});

router.post("/Create", (req, res) => {
  const client = new Client({
    CIN: req.body.clientCIN,
    Name: req.body.clientName,
    Age: req.body.clientAge,
    PhoneNumber: req.body.clientPhone,
    Email: req.body.clientEmail,
  });
  client
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/Delete/:_id", (req, res) => {
  res.send("Deleting Client ...");
  Client.deleteOne({ _id: req.params._id }, (err) => {
    if (err) return console.log(err);
  });
});

router.get("/GetClientNumbers", (req, res) => {
  Client.countDocuments({}, (err, count) => {
    if (err) return console.log(err);
    res.json(count);
  });
});

router.get("/GetById/:id", (req, res) => {
  Client.findById(req.params.id, (err, client) => {
    if (err) return console.log(err);
    res.json(client);
  });
});

router.post("/Update", async (req, res) => {
  let client = await Client.findOne({ _id: req.body.clientId });
  const update = {
    Name: req.body.clientName,
    Age: Number(req.body.clientAge),
    PhoneNumber: req.body.clientPhone,
    Email: req.body.clientEmail,
  };
  await client.updateOne(update);
  res.json(client);
});
module.exports = router;
