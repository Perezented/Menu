exports.up = function (knex) {
    return knex.schema
        .createTable("Categories", (tbl) => {
            tbl.increments("CategoryID");
            tbl.string("Category").notNullable();
        })
        .createTable("Menu", (tbl) => {
            tbl.increments("MenuItemID");
            tbl.string("MenuItem").notNullable();
            tbl.string("Description");
            tbl.string("Price").notNullable();
            tbl.integer("CategoryID")
                .unsigned()
                .references("Categories.CategoryID")
                .onDelete("RESTRICT")
                .onUpdate("CASCADE");
        });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("Menu");
};
