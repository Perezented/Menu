exports.up = function (knex) {
    return knex.schema.createTable("Menu", (tbl) => {
        tbl.increments("MenuItemID");
        tbl.string("MenuItem").notNullable();
        tbl.string("Description");
        tbl.string("Price").notNullable();
        tbl.integer("Category").notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("Menu");
};
