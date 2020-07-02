const db = require("../data/connection");
module.exports = {
    find,
    findCategories,
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

function findCategories() {
    return db("Categories").orderBy("category");
}

function findItemsByCategories(filter) {
    return db("Categories")
        .orderBy("category")
        .where("Categories.category", filter)
        .join("Menu", "Categories.category.ID", "Menu.categoryID");
}

function findById(id) {
    return db("Menu")
        .where("MenuItemID", id)
        .join("Categories", "Menu.CategoryID", "Categories.CategoryID");
}
