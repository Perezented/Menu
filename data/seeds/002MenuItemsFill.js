exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("Menu")
        .del()
        .then(function () {
            // Inserts seed entries
            return knex("Menu").insert([
                {
                    menuItem: "Beef Steak Tampiquena",
                    description:
                        "Ribeye steak, served with fresh onions, tomatoes, bell peppers, lettuce, rice, and beans.",
                    price: 11.99,
                    categoryID: 1,
                },
                {
                    menuItem: "Beef Steak Ranchero",
                    description:
                        "Beef steak served with beans, rice, and flour tortillas. Covered with Ranchero Sauce",
                    price: 11.99,
                    categoryID: 1,
                },
                {
                    menuItem: "Steven Special",
                    description:
                        "Grilled chicken breast with rice all topped with cheese sauce.",
                    price: 7.99,
                    categoryID: 2,
                },
                {
                    menuItem: "Jennifer Special",
                    description:
                        "Grilled chicken topped with cheese sauce, onion, bell peppers, tomatoes, and mushrooms. Served with flour tortillas and rice.",
                    price: 7.99,
                    categoryID: 2,
                },
                {
                    menuItem: "Tilapia Mexicana",
                    description:
                        "Grilled tilapia topped with cooked peppers, tomatoes and onions. Served with rice and beans.",
                    price: 8.99,
                    categoryID: 3,
                },
                {
                    menuItem: "Tilapia El Tapatio",
                    description:
                        "Grilled tilapia served with steamed carrots, broccoli, cauliflower, zucchini, squash and rice.",
                    price: 8.99,
                    categoryID: 3,
                },
                {
                    menuItem: "Tilapia",
                    description: "Grilled tilapia served with rice and salad.",
                    price: 8.99,
                    categoryID: 3,
                },
                {
                    menuItem: "Seafood Soup",
                    description: "Tilapia, crab meat, shrimp and vegetables.",
                    price: 12.99,
                    categoryID: 4,
                },
                {
                    menuItem: "Chicken Soup",
                    description:
                        "Chicken and vegetables. Served with rice on the side.",
                    price: 7.99,
                    categoryID: 4,
                },
            ]);
        });
};
