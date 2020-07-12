const db = require("../data/connection");
module.exports = {
    getSOTD,
};
//  Gets the special of the day and sends it
function getSOTD() {
    return db("specialOfTheDay").first();
}
