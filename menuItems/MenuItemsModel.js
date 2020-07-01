const db = require("../data/connection");
module.exports = {
    find,
    findByCategories,
    findById,
    // add,
    // update,
    // remove,
};

function find() {
    return db("Menu").join(
        "Categories",
        "Menu.categoryID",
        "Categories.categoryID"
    );
}

function findByCategories() {
    return db("Categories").orderBy("category");
}

function findById(id) {
    return db("Menu")
        .where("MenuItemID", id)
        .join("Categories", "Menu.CategoryID", "Categories.CategoryID");
}
