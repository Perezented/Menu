exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("specialOfTheDay")
        .del()
        .then(function () {
            // Inserts seed entries
            return knex("specialOfTheDay").insert([
                {
                    sotdName: "FoodName",
                    sotdDescription:
                        "With a description to describe what is going on.",
                    sotdPrice: 9.99,
                    sotdAddtDescription: "With extra cheese or something",
                    sotdAddtPrice: 1.99,
                },
            ]);
        });
};
