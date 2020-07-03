const db = require("../data/connection");
module.exports = {
    find,
    findCategories,
    findById,
    findItemsByCategories,
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
        .join("Menu", "Categories.categoryID", "Menu.categoryID")
        .where({ "Categories.category": filter });
}

function findById(id) {
    return db("Menu")
        .where("MenuItemID", id)
        .join("Categories", "Menu.CategoryID", "Categories.CategoryID");
}
