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

//  Gets a food item by id
router.put("/", (req, res) => {
  req.params.id = 1;
  req.body.id = req.params.id;

  sotd
    .updateSOTD(req.params.id, req.body)
    .then(res.status(203).json(req.body))
    .catch((err) => {
      console.log(err);
      res.status(404).json({ Error: "Item not found.", err });
    });
});
module.exports = router;
