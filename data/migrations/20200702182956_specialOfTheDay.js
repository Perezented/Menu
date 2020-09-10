exports.up = function (knex) {
  knex.schema.dropTableIfExists("specialOfTheDay");

  return knex.schema.createTable("specialOfTheDay", (tbl) => {
    tbl.increments();
    tbl.string("sotdName").notNullable();
    tbl.string("sotdDescription").notNullable();
    tbl.float("sotdPrice").notNullable();
    tbl.string("sotdAddtDescription");
    tbl.float("sotdAddtPrice");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("specialOfTheDay");
};
