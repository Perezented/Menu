const express = require("express");
const router = express();

const menuItems = require("./MenuItemsModel");

router.get("/", (req, res) => {
    menuItems
        .find()
        .then((foodItems) => {
            console.log(foodItems);
            res.status(200).json({ foodItems });
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json({ error: "error getting information" });
        });
});

router.get("/categories", (req, res) => {
    let filter = req.query.filter;
    console.log(filter);
    if (filter) {
        return menuItems
            .findItemsByCategories(filter)
            .then((foodItems) => {
                console.log(foodItems);
                return res.status(200).json({ foodItems });
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    } else {
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
