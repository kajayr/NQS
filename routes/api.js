const express = require("express");
const router = express.Router();
const AdReportModel = require("../models/reporter");

router.get("/", (req, res) => {
  AdReportModel.find({})
    .then((data) => {
      console.log("Data:", data);
      res.json(data);
    })
    .catch((error) => {
      console.log("Error:", error);
    });
});

router.post("/save", (req, res) => {
  console.log("Body: ", req.body);
  const data = req.body;

  const newDataReport = new AdReportModel(data);

  newDataReport.save((err) => {
    if (err) {
      res.status(500).json({ msg: "Sorry we did not get the data" });
    } else {
      res.json({
        msg: "We received your data!",
      });
    }
  });
});

router.get("/name", (req, res) => {
  const data = {
    username: "Peterson",
    age: 56,
  };
  res.json(data.username);
});

module.exports = router;
