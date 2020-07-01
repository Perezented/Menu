exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("Categories")
        .del()
        .then(function () {
            // Inserts seed entries
            return knex("Categories").insert([
                { category: "Steaks" },
                { category: "Chicken" },
                { category: "Seafood" },
                { category: "Soups" },
                { category: "ChildsPlate" },
                { category: "Luncheon" },
                { category: "LunchSpecials" },
                { category: "Burritos" },
                { category: "Fajitas" },
                { category: "EnchiladasAndHamburgers" },
                { category: "Appetizers" },
                { category: "ALaCarte" },
                { category: "Favorites" },
                { category: "PorkAndSalads" },
                { category: "SideOrders" },
                { category: "Desserts" },
                { category: "CombinationDinners" },
                { category: "VegetarianCombonations" },
            ]);
        });
};
