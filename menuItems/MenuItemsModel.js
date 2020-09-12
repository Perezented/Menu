const db = require("../data/connection");
module.exports = {
  find,
  findCategories,
  findById,
  findItemsByCategories,
  add,
  // update,
  // remove,
};

//  Adds menu item
function add(data) {
  return db("Menu").insert(data, "*");
}

//  Gets menu items
function find() {
  return db("Menu").join(
    //  Joins them with the category by menu item, category id
    "Categories",
    "Menu.categoryID",
    "Categories.categoryID"
  );
}
//  Gets all the food categories
function findCategories() {
  return db("Categories").orderBy("category");
}
//  Gets specified food by category
function findItemsByCategories(filter) {
  return (
    db("Categories")
      .orderBy("category")
      //  join with menu
      .join("Menu", "Categories.categoryID", "Menu.categoryID")
      .where({ "Categories.category": filter })
  );
}
//  Gets a menu item by id
function findById(id) {
  return (
    db("Menu")
      .where("MenuItemID", id)
      //  Joins with the category table
      .join("Categories", "Menu.CategoryID", "Categories.CategoryID")
  );
}
