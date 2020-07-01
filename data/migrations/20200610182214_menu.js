exports.up = function (knex) {
    return knex.schema
        .createTable("Categories", (tbl) => {
            tbl.increments("categoryID");
            tbl.string("category").notNullable();
        })
        .createTable("Menu", (tbl) => {
            tbl.increments("menuItemID");
            tbl.string("menuItem").notNullable();
            tbl.string("description");
            tbl.float("price").notNullable();
            tbl.float("additionalPrice").notNullable();
            tbl.integer("categoryID")
                .unsigned()
                .references("Categories.categoryID")
                .onDelete("RESTRICT")
                .onUpdate("CASCADE");
        });
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists("Menu")
        .dropTableIfExists("Categories");
};
