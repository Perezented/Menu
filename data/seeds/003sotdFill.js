exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("specialOfTheDay")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("specialOfTheDay").insert([
        {
          sotdName: "Pollo Asado con arroz y frijoles",
          sotdDescription:
            "Grilled chicken that has been marinated for 24 hours in our special tapatillo sauce, servered with rice and beans on the side.",
          sotdPrice: 8.99,
          sotdAddtDescription: "Extra chicken or add shrimp",
          sotdAddtPrice: 1.99
        }
      ]);
    });
};
