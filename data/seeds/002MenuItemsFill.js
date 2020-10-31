categoriesWithIDs = {
  "A La Carte": 12,
  Appetizers: 11,
  Burritos: 8,
  Chicken: 2,
  "Child's Plate": 5,
  "Combination Dinners": 17,
  Desserts: 7,
  "Enchiladas And Hamburgers": 10,
  Fajitas: 9,
  Favorites: 13,
  Luncheon: 6,
  "Lunch Specials": 7,
  "Pork and Salads": 14,
  Seafood: 3,
  "Side Orders": 15,
  Soups: 4,
  Steaks: 1,
  "Vegetarian Combinations": 18
};

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
          categoryID: categoriesWithIDs["Steaks"]
        },
        {
          menuItem: "Beef Steak Ranchero",
          description:
            "Beef steak served with beans, rice, and flour tortillas. Covered with Ranchero Sauce",
          price: 11.99,
          categoryID: categoriesWithIDs["Steaks"]
        },
        {
          menuItem: "Steven Special",
          description:
            "Grilled chicken breast with rice all topped with cheese sauce.",
          price: 7.99,
          categoryID: categoriesWithIDs["Chicken"]
        },
        {
          menuItem: "Jennifer Special",
          description:
            "Grilled chicken topped with cheese sauce, onion, bell peppers, tomatoes, and mushrooms. Served with flour tortillas and rice.",
          price: 7.99,
          categoryID: categoriesWithIDs["Chicken"]
        },
        {
          menuItem: "Tilapia Mexicana",
          description:
            "Grilled tilapia topped with cooked peppers, tomatoes and onions. Served with rice and beans.",
          price: 8.99,
          categoryID: categoriesWithIDs["Seafood"]
        },
        {
          menuItem: "Tilapia El Tapatio",
          description:
            "Grilled tilapia served with steamed carrots, broccoli, cauliflower, zucchini, squash and rice.",
          price: 8.99,
          categoryID: categoriesWithIDs["Seafood"]
        },
        {
          menuItem: "Tilapia",
          description: "Grilled tilapia served with rice and salad.",
          price: 8.99,
          categoryID: categoriesWithIDs["Seafood"]
        },
        {
          menuItem: "Seafood Soup",
          description: "Tilapia, crab meat, shrimp and vegetables.",
          price: 12.99,
          categoryID: categoriesWithIDs["Soups"]
        },
        {
          menuItem: "Chicken Soup",
          description: "Chicken and vegetables. Served with rice on the side.",
          price: 7.99,
          categoryID: categoriesWithIDs["Soups"]
        },
        {
          menuItem: "Bean Dip",
          price: 2.99,
          categoryID: categoriesWithIDs["Appetizers"]
        },
        {
          menuItem: "Guacamole",
          description: "Sm",
          price: 3.49,
          additionalPrice: 6.99,
          categoryID: categoriesWithIDs["Appetizers"]
        },
        {
          menuItem: "Special Dinner",
          description:
            "Chalupa, taco, chile relleno, tamale, enchilada, rice and beans",
          price: 10.99,
          categoryID: categoriesWithIDs["Favorites"]
        },
        {
          menuItem: "Chimichanga Fajita - Grilled, Chicken or Fajita Beef",
          description:
            "Stuffed flour tortilla cooked with vegetables. Deep fried to golden brown topped with cheese sauce. Served with rice, beans and fajita salad.",
          price: 8.99,
          categoryID: categoriesWithIDs["Favorites"]
        },
        {
          menuItem: "Tossed Salad",
          price: 1.5,
          categoryID: categoriesWithIDs["Pork and Salads"]
        },
        {
          menuItem: "Guacamole Salad",
          price: 2.25,
          categoryID: categoriesWithIDs["Pork and Salads"]
        },
        {
          menuItem: "Chicken Tossed Salad",
          price: 6.99,
          categoryID: categoriesWithIDs["Pork and Salads"]
        },
        {
          menuItem: "Shrimp Tossed Salad",
          price: 7.99,
          categoryID: categoriesWithIDs["Pork and Salads"]
        },
        {
          menuItem: "Carnitas",
          description:
            "Pork tips with rice, beans and salad. Served with tortillas",
          price: 9.99,
          categoryID: categoriesWithIDs["Pork and Salads"]
        },
        {
          menuItem: "Burrito",
          description: "Beef",
          price: 2.99,
          categoryID: categoriesWithIDs["A La Carte"]
        },
        {
          menuItem: "Burrito",
          description: "Chicken",
          price: 3.15,
          categoryID: categoriesWithIDs["A La Carte"]
        },
        {
          menuItem: "Mexican Rice",
          price: 1.99,
          categoryID: categoriesWithIDs["Side Orders"]
        },
        {
          menuItem: "Refried Beans",
          price: 1.99,
          categoryID: categoriesWithIDs["Side Orders"]
        },
        {
          menuItem: "Sour Cream",
          price: 0.99,
          categoryID: categoriesWithIDs["Side Orders"]
        },
        {
          menuItem: "Pico De Gallo",
          price: 0.99,
          categoryID: categoriesWithIDs["Side Orders"]
        },
        {
          menuItem: "Shredded Cheese",
          price: 0.99,
          categoryID: categoriesWithIDs["Side Orders"]
        },
        {
          menuItem: "Tortillas",
          price: 0.6,
          categoryID: categoriesWithIDs["Side Orders"]
        },
        {
          menuItem: "Burrito Ranchero",
          description:
            "A pork burrito cooked with vegetables. Topped with cheese sauce, green sauce and red sauce. Served with rice and beans",
          price: 7.99,
          categoryID: categoriesWithIDs["Burritos"]
        },
        {
          menuItem: "Burrito Fajita",
          description:
            "Choice of chicken or beef cooked with vegetables and topped with cheese sauce. Served with rice and beans",
          price: 7.99,
          categoryID: categoriesWithIDs["Burritos"]
        },
        {
          menuItem: "Burrito Special",
          description:
            "One ground beef burrito topped with red sauce, lettuce, tomato and sour cream.",
          price: 5.99,
          categoryID: categoriesWithIDs["Burritos"]
        },
        {
          menuItem: "Enchilada Pointers",
          description:
            "3 enchiladas with shrimp and crab meat, cheese with lettuce, guacamole, tomatoes and cheese sauce.",
          price: 8.99,
          categoryID: categoriesWithIDs["Enchiladas And Hamburgers"]
        },
        {
          menuItem: "Enchilada Verdes",
          description:
            "3 chicken enchiladas covered with green sauce. Served with rice and beans.",
          price: 8.99,
          categoryID: categoriesWithIDs["Enchiladas And Hamburgers"]
        },
        {
          menuItem: "Enchilada Mexicanas",
          description:
            "One chicken, one beef, and one cheese enchilada topped with cheese sauce, red sauce and green sauce. Served with rice and beans.",
          price: 8.99,
          categoryID: categoriesWithIDs["Enchiladas And Hamburgers"]
        },
        {
          menuItem: "Enchilada Rancheras",
          description:
            "3 cheese enchiladas topped with pork and cooked with tomatoes, onions, bell peppers and enchilada sauce. Served with lettuce, tomato and sour cream.",
          price: 8.99,
          categoryID: categoriesWithIDs["Enchiladas And Hamburgers"]
        },
        {
          menuItem: "Quesadilla Fajita",
          description:
            "Choice of chiken or beef. Cooked with vegetables. Served with lettuce and sour cream.",
          price: 7.99,
          categoryID: categoriesWithIDs["Quesadilla"]
        },
        {
          menuItem: "Quesadilla Camaron",
          description:
            "Shrimp cooked with vegetables. Served with lettuce and pico de gallo, rice and beans.",
          price: 9.99,
          categoryID: categoriesWithIDs["Quesadilla"]
        },
        {
          menuItem: "Quesadilla",
          description:
            "Grilled flour torilla with your choice of chicken or steak and filled with Monterry Jack cheese.",
          price: 7.99,
          categoryID: categoriesWithIDs["Quesadilla"]
        },
        {
          menuItem: "Quesadilla Rellena",
          description:
            "A flour tortilla grilled and stuffed with chees, chopped beef or chicken and refried beans. Served with lettuce, guacamole and sour cream.",
          price: 5.99,
          categoryID: categoriesWithIDs["Quesadilla"]
        },
        {
          menuItem: "Quesadilla Suprema",
          description:
            "A flour tortilla grilled and stuffed with cheese, chopped beef or chicken. Served with vegetables, salad, rice and beans.",
          price: 8.99,
          categoryID: categoriesWithIDs["Quesadilla"]
        },

        {
          menuItem: "Fajitas Camarones",
          description:
            "Shrimp with cooked vegetables, rice, beans, served with lettuce, guacamole, pico de gallo, sour cream and tortillas.",
          price: 12.99,
          categoryID: categoriesWithIDs["Fajitas"]
        },
        {
          menuItem: "Texas Fajitas",
          description:
            "Cooked with Ribeye meat, bell peppers and onions. Served with rice, beanse and fajita salad.",
          price: 12.99,
          categoryID: categoriesWithIDs["Fajitas"]
        },
        {
          menuItem: "Onion Enchilada",
          description: "A soft corn tortilla stuffed with onions and cheese.",
          price: 4.99,
          categoryID: categoriesWithIDs["Luncheon"]
        },
        {
          menuItem: "Tamale",
          description: "Pork tamale topped with chili sauce.",
          price: 4.99,
          categoryID: categoriesWithIDs["Luncheon"]
        },
        {
          menuItem: "Taco",
          description:
            "A crispy corn tortilla stuffed with seasoned ground beef, lettuce and cheese.",
          price: 4.99,
          categoryID: categoriesWithIDs["Luncheon"]
        },
        {
          menuItem: "Chile Relleno",
          description:
            "Poblano pepper filled with cheese. Breaded and covered in red sauce.",
          price: 4.99,
          categoryID: categoriesWithIDs["Luncheon"]
        },
        {
          menuItem: "Pollo Loco",
          description:
            "2 Grilled chicken breasts cooked with onions. Served with salad, rice and beans.",
          price: 7.99,
          categoryID: categoriesWithIDs["Lunch Specials"]
        },
        {
          menuItem: "Burrito Fajita",
          description:
            "A burrito filled with chicken or beef cooked with vegetables, and covered with cheese sauce. Served with rice and beans.",
          price: 7.99,
          categoryID: categoriesWithIDs["Lunch Specials"]
        },
        {
          menuItem: "Sppedy Gonzalez",
          description: "One taco, one enchilada, choice of rice or beans.",
          price: 4.99,
          categoryID: categoriesWithIDs["Lunch Specials"]
        },
        {
          menuItem: "Flan",
          price: 1.99,
          categoryID: categoriesWithIDs["Desserts"]
        },
        {
          menuItem: "Fried Ice Cream",
          price: 2.99,
          categoryID: categoriesWithIDs["Desserts"]
        },
        {
          menuItem: "Cheese Cake",
          price: 3.25,
          categoryID: categoriesWithIDs["Desserts"]
        },
        {
          menuItem: "Sopapilla",
          price: 1.99,
          categoryID: categoriesWithIDs["Desserts"]
        },
        {
          menuItem: "Vanilla Ice Cream",
          price: 1.5,
          categoryID: categoriesWithIDs["Desserts"]
        },
        {
          menuItem: "Churros",
          price: 2.99,
          categoryID: categoriesWithIDs["Desserts"]
        }
      ]);
    });
};
