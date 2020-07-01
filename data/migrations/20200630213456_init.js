exports.up = function (knex) {
    return knex.schema.createTable("specialOfTheDay", (tbl) => {
        tbl.increments();
        tbl.string("sotdName").notNullable();
        tbl.string("sotdDescription").notNullable();
        tbl.float("sotdPrice").notNullable();
        tbl.float("sotdAddtPrice");
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("specialOfTheDay");
};
