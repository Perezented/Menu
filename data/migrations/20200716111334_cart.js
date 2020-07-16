exports.up = function (knex) {
    return knex.schema.createTable("cart", (tbl) => {
        tbl.increments();
        tbl.float("total");
        tbl.integer("OrderID");
        tbl.integer("menuItemID");
        tbl.integer("quantity");
        tbl.timestamp("created_at", { useTz: true });
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("cart");
};
