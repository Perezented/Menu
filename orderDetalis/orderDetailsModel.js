const db = require("../data/connection");
module.exports = {
  find,
  add,
  remove,
  update,
};

function find() {
  return db("orderDetails as oD").join(
    "Menu as m",
    "oD.menuItemID",
    "m.menuItemID"
  );
}
function add(data) {
  return db("orderDetails").insert(data, "*");
}
function update(id, changes) {
  return db("orderDetails").where({ id }).update(changes);
}
function remove(id, data) {
  db("orderArchive").insert(data, "*");
  return db("orderDetails").where({ id }).del();
}
