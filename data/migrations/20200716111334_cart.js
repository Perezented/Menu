exports.up = function (knex) {
    return knex.schema.createTable("cart", (tbl) => {
        tbl.increments();
        tbl.float("total").notNullable();
        tbl.integer("OrderID").notNullable();
        tbl.integer("menuItemID")
            .unsigned()
            .references("Menu.menuItemID")
            .onDelete("RESTRICT")
            .onUpdate("CASCADE");
        tbl.integer("quantity").notNullable();
        tbl.timestamp("created_at", { useTz: true });
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("cart");
};
