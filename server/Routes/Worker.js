var express = require("express");
var router = express.Router();
const Worker = require("../Models/Worker");

router.get("/", (req, res) => {
  res.send("Welcome To Worker API");
});

router.get("/List", (req, res) => {
  Worker.find({}, (err, workers) => {
    if (err) return console.log(err);
    res.json(workers);
  });
});

router.get("/Create", (req, res) => {
  res.send("Creating Worker ...");
});

router.post("/Create", (req, res) => {
  const worker = new Worker({
    CIN: req.body.workerCIN,
    Name: req.body.workerName,
    Age: req.body.workerAge,
    PhoneNumber: req.body.workerPhone,
    Email: req.body.workerEmail,
  });
  worker
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
