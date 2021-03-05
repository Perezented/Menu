const express = require("express");
const router = express();
//  Using a model for functions to handle the requests to the DB
const sotd = require("./sotdModel");
//  Retrieval of the special of the day
router.get("/", (req, res) => {
  sotd
    .getSOTD()
    .then((response) => {
      console.log(response);
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({
        Error: "Could not get the data requested.",
        err
      });
    });
});

router.post("/", (req, res) => {
  const sotdData = req.body;

  sotd
    .addSOTD()
    .add(sotdData)
    .then((specialOfTheDay) => {
      console.log(specialOfTheDay);
      res.status(201).json(specialOfTheDay);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to create new scheme" });
    });
});
module.exports = router;
