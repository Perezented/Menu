exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("Categories")
        .del()
        .then(function () {
            // Inserts seed entries
            return knex("Categories").insert([
                { Category: "Steaks" },
                { Category: "Chicken" },
                { Category: "Seafood" },
                { Category: "Soups" },
                { Category: "ChildsPlate" },
                { Category: "Luncheon" },
                { Category: "LunchSpecials" },
                { Category: "Burritos" },
                { Category: "Fajitas" },
                { Category: "EnchiladasAndHamburgers" },
                { Category: "Appetizers" },
                { Category: "ALaCarte" },
                { Category: "Favorites" },
                { Category: "PorkAndSalads" },
                { Category: "SideOrders" },
                { Category: "Desserts" },
                { Category: "CombinationDinners" },
                { Category: "VegetarianCombonations" },
            ]);
        });
};
