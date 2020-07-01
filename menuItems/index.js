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
router.get("/categories", (req, res) => {
    menuItems
        .findByCategories()
        .then((items) => {
            console.log(items);
            res.status(200).json({ items });
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json({ error: "error getting information" });
        });
});

router.get("/:id", (req, res) => {
    menuItems
        .findById(req.params.id)
        .then((item) => {
            console.log(item);
            res.status(200).json(item);
        })
        .catch((err) => {
            console.log(err);
            res.status(404).json({ Error: "Item not found.", err });
        });
});
module.exports = router;
