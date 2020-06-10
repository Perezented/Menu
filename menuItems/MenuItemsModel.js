const db = require("../data/connection");
module.exports = {
    find,
    // findById,
    // add,
    // update,
    // remove,
};

function find() {
    return db("Menu");
}
