exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("Menu")
        .del()
        .then(function () {
            // Inserts seed entries
            return knex("Menu").insert([
                {
                    MenuItem: "Beef Steak Tampiquena",
                    Description:
                        "Ribeye steak, served with fresh onions, tomatoes, bell peppers, lettuce, rice, and beans.",
                    Price: 11.99,
                    CategoryID: 1,
                },
                {
                    MenuItem: "Beef Steak Ranchero",
                    Description:
                        "Beef steak served with beans, rice, and flour tortillas. Covered with Ranchero Sauce",
                    Price: 11.99,
                    CategoryID: 1,
                },
                {
                    MenuItem: "Steven Special",
                    Description:
                        "Grilled chicken breast with rice all topped with cheese sauce.",
                    Price: 7.99,
                    CategoryID: 2,
                },
                {
                    MenuItem: "Jennifer Special",
                    Description:
                        "Grilled chicken topped with cheese sauce, onion, bell peppers, tomatoes, and mushrooms. Served with flour tortillas and rice.",
                    Price: 7.99,
                    CategoryID: 2,
                },
                {
                    MenuItem: "Tilapia Mexicana",
                    Description:
                        "Grilled tilapia topped with cooked peppers, tomatoes and onions. Served with rice and beans.",
                    Price: 8.99,
                    CategoryID: 3,
                },
                {
                    MenuItem: "Tilapia El Tapatio",
                    Description:
                        "Grilled tilapia served with steamed carrots, broccoli, cauliflower, zucchini, squash and rice.",
                    Price: 8.99,
                    CategoryID: 3,
                },
                {
                    MenuItem: "Tilapia",
                    Description: "Grilled tilapia served with rice and salad.",
                    Price: 8.99,
                    CategoryID: 3,
                },
                {
                    MenuItem: "Seafood Soup",
                    Description: "Tilapia, crab meat, shrimp and vegetables.",
                    Price: 12.99,
                    CategoryID: 4,
                },
                {
                    MenuItem: "Chicken Soup",
                    Description:
                        "Chicken and vegetables. Served with rice on the side.",
                    CategoryID: 4,
                    Price: 7.99,
                },
            ]);
        });
};
