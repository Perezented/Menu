const express = require("express");
const router = express();

const menuItems = require("./MenuItemsModel");

router.get("/", (req, res) => {
    menuItems
        .find()
        .then((items) => {
            console.log(items);
            res.status(200).json({ items });
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json({ error: "error getting information" });
        });
});
module.exports = router;
