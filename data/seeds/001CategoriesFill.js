exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("Categories")
        .del()
        .then(function () {
            // Inserts seed entries
            return knex("Categories").insert([
                { categoryDescription: "Steaks", category: "Steaks" },
                { categoryDescription: "Chicken", category: "Chicken" },
                { categoryDescription: "Seafood", category: "Seafood" },
                { categoryDescription: "Soups", category: "Soups" },
                {
                    categoryDescription: "Child's Plate",
                    category: "ChildsPlate",
                },
                { categoryDescription: "Luncheon", category: "Luncheon" },
                {
                    categoryDescription: "Lunch Specials",
                    category: "LunchSpecials",
                },
                { categoryDescription: "Burritos", category: "Burritos" },
                { categoryDescription: "Fajitas", category: "Fajitas" },
                {
                    categoryDescription: "Enchiladas And Hamburgers",
                    category: "EnchiladasAndHamburgers",
                },
                { categoryDescription: "Appetizers", category: "Appetizers" },
                { categoryDescription: "A La Carte", category: "ALaCarte" },
                { categoryDescription: "Favorites", category: "Favorites" },
                {
                    categoryDescription: "Pork and Salads",
                    category: "PorkAndSalads",
                },
                { categoryDescription: "Side Orders", category: "SideOrders" },
                { categoryDescription: "Desserts", category: "Desserts" },
                {
                    categoryDescription: "Combination Dinners",
                    category: "CombinationDinners",
                },
                {
                    categoryDescription: "Vegetarian Combinations",
                    category: "VegetarianCombinations",
                },
            ]);
        });
};
