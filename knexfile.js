require("dotenv").config();

const pgConnection = process.env.DATABASE_URL;
module.exports = {
    development: {
        client: "pg",
        useNullAsDefault: true, // needed for sqlite
        connection: {
            filename: {
                connectionString: `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
                ssl: { rejectUnauthorized: false },
            },
        },
        searchPath: ["foodMenu", "public"],
        options: { schema: "foodMenu" },
        pool: { min: 0, max: 7 },
        migrations: {
            directory: "./data/migrations",
        },
        seeds: {
            directory: "./data/seeds",
        },
        pool: {
            afterCreate: (conn, done) => {
                // runs after a connection is made to the sqlite engine
                conn.run("PRAGMA foreign_keys = ON", done); // turn on FK enforcement
            },
        },
    },

    testing: {
        client: "sqlite3",
        connection: {
            filename: "./data/foodMenuTest.db3",
        },
        useNullAsDefault: true,
        migrations: {
            directory: "./data/migrations",
        },
        seeds: {
            directory: "./data/seeds",
        },
    },

    production: {
        client: "pg",
        connection: pgConnection,
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            directory: "./data/migrations",
        },
        seeds: {
            directory: "./data/seeds",
        },
    },
};
