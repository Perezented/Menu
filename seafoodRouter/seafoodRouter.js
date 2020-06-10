const express = require("express");

const router = express.Router();
const menuItems = require("../menuItems/menuItems");

// function validateItem(req, res, next) {
//     next();
// }

router.get("/", (req, res) => {
    res.status(200).json(menuItems[0].Seafood);
});

module.exports = router;
