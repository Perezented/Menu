const db = require("../data/connection");
module.exports = {
  getSOTD,
  addSOTD,
  updateSOTD,
  removeSOTD
};
//  Gets the special of the day and sends it
function getSOTD() {
  return db("specialOfTheDay").first();
}
function addSOTD(data) {
  return db("specialOfTheDay").insert(data, "*");
}

function updateSOTD(id, changes) {
  return db("specialOfTheDay").where({ id }).update(changes);
}
function removeSOTD(id, data) {
  db("orderArchive").insert(data, "*");
  return db("specialOfTheDay").where({ id }).del();
}
