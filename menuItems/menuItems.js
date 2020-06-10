let menuItems = [
    {
        Steaks: [
            {
                name: "Beef Steak Tampiquena",
                description:
                    "Ribeye steak, served with fresh onions, tomatoes, bell peppers, lettuce, rice, and beans.",
                price: 11.99,
            },
            {
                name: "Beef Steak Ranchero",
                description:
                    "Beef steak served with beans, rice, and flour tortillas. Covered with Ranchero Sauce",
                price: 11.99,
            },
        ],
        Chicken: [
            {
                name: "Steven Special",
                description:
                    "Grilled chicken breast with rice all topped with cheese sauce.",
                price: 7.99,
            },
            {
                name: "Jennifer Special",
                description:
                    "Grilled chicken topped with cheese sauce, onion, bell peppers, tomatoes, and mushrooms. Served with flour tortillas and rice.",
                price: 7.99,
            },
        ],
        Seafood: [
            {
                name: "Tilapia Mexicana",
                description:
                    "Grilled tilapia topped with cooked peppers, tomatoes and onions. Served with rice and beans.",
                price: 8.99,
            },
            {
                name: "Tilapia El Tapatio",
                description:
                    "Grilled tilapia served with steamed carrots, broccoli, cauliflower, zucchini, squash and rice.",
                price: 8.99,
            },
            {
                name: "Tilapia",
                description: "Grilled tilapia served with rice and salad.",
                price: 8.99,
            },
        ],
        Soups: [
            {
                name: "Seafood Soup",
                description: "Tilapia, crab meat, shrimp and vegetables.",
                price: 12.99,
            },
            {
                name: "Chicken Soup",
                description:
                    "Chicken and vegetables. Served with rice on the side.",
                price: 7.99,
            },
        ],
        // Luncheon: [],
        // LunchSpecials: [],
        // Burritos: [],
        // Quesadillas: [],
        // Fajitas: [],
        // EnchiladasAndHamburgers: [],
        // Appetizers: [],
        // ALaCarte: [],
        // Favorites: [],
        // PorkAndSalads: [],
        // SideOrders: [],
        ChildsPlates: [
            {
                items: [
                    { name: "Enchilada, Rice and Beans" },
                    {
                        name: "One Taco, Rice and Beans",
                    },
                    { name: "Burrito, Rice and Beans" },
                    { name: "Chicken Nuggets" },
                    { name: "Hamburger w/French Fries" },
                    { name: "Cheeseburger w/French Fries" },
                    { name: "Chicken Tenders w/French Fries" },
                    { name: "Corn Dog w/French Fries" },
                ],
            },
            { name: "Child's Drink", price: 1.5 },
            {
                name: "Steven Special",
                description:
                    "Grilled chicken breast with rice all topped with cheese sauce.",
                price: 4.99,
                addPrice: 2.99,
            },
        ],
        // Desserts: [],
        // CombinationDinners: [],
        // VegetarianCombinations: [],
    },
];

module.exports = menuItems;
