exports.up = function (knex) {
    return knex.schema.renameTable("cart", "orderDetails");
};

exports.down = function (knex) {
    return knex.schema.renameTable("orderDetails", "cart");
};
