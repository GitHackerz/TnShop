var express = require("express");
var router = express.Router();
const Feedback = require("../Models/Feedback");

router.get("/", (req, res) => {
  res.send("Welcome To Feedback API");
});

router.get("/List", (req, res) => {
  Feedback.find({}, (err, feedbacks) => {
    if (err) return console.log(err);
    res.json(feedbacks);
  });
});

router.get("/Create", (req, res) => {
  res.send("Creating Feedback ...");
});

router.post("/Create", (req, res) => {
  const feedback = new Feedback({
    ClientId: req.body.feedbackClientId,
    ProductId: req.body.feedbackProductId,
    Comment: req.body.feedbackComment,
    Rate: req.body.feedbackRate,
  });
  feedback
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/Delete/:_id", (req, res) => {
  res.send("Deleting Feedback ...");
  Feedback.deleteOne({ _id: req.params._id }, (err) => {
    if (err) return console.log(err);
  });
});

router.get("/GetFeedbackNumbers", (req, res) => {
  Feedback.countDocuments({}, (err, count) => {
    if (err) return console.log(err);
    res.json(count);
  });
});

router.get("/GetById/:id", (req, res) => {
  Feedback.findById(req.params.id, (err, feedback) => {
    if (err) return console.log(err);
    res.json(feedback);
  });
});

router.post("/Update", async (req, res) => {
  let feedback = await Feedback.findOne({ _id: req.body.feedbackId });

  const update = {
    ClientId: req.body.feedbackClientId,
    ProductId: req.body.feedbackProductId,
    Comment: req.body.feedbackComment,
    Rate: req.body.feedbackRate,
    Date: req.body.feedbackDate,
  };
  await feedback.updateOne(update);
  res.json(feedback);
});



module.exports = router;
