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
    let filter = req.query.filter;
    console.log(filter);
    if (filter === undefined) {
        return menuItems
            .findCategories()
            .then((categories) => {
                // console.log(categories);
                res.status(200).json({ categories });
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json({
                    error: "error getting information",
                });
            });
    } else {
        return menuItems
            .findItemsByCategories(filter)
            .then((response) => {
                console.log(response);
                return res.status(200).json(response);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    }
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
