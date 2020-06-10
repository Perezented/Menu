const express = require("express");

const router = express.Router();
const menuItems = require("../menuItems/menuItems");

function validateItem(req, res, next) {
    next();
}

router.get("/", validateItem, (req, res) => {
    res.status(200).json(menuItems[0].ChildsPlates);
});

module.exports = router;
