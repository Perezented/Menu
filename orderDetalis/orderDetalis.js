const express = require("express");
const router = express();

const orderDetails = require("./orderDetailsModel");

router.get("/", (req, res) => {
  orderDetails
    .find()
    .then((orders) => {
      console.log(orders);
      res.status(200).json({ orders });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ message: "Failed to download data" });
    });
});

router.post("/", (req, res) => {
  const orderData = req.body;

  orderDetails
    .add(orderData)
    .then((order) => {
      console.log(order);
      res.status(201).json(order);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to create new scheme" });
    });
});
module.exports = router;
