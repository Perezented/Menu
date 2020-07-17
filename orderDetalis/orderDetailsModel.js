const db = require("../data/connection");
module.exports = {
    find,
};

function find() {
    return db("orderDetails");
}
function add(data) {
    return db("orderDetails").insert(data, "*");
}
