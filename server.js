//  Main imports
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const server = express();
const session = require("express-session");
const KnexSessionsStore = require("connect-session-knex")(session);
//  Setting up the data base connection
const dbConnection = require("./data/connection");
//  Custom routes
const menuItems = require("./menuItems");
const specialOfTheDay = require("./specialOfTheDay/specialOfTheDay");
//  Session configuration for knex
const sessionConfig = {
    name: "monster",
    secret: process.env.SESSION_SECRET || "keep it secret, keep it safe!",
    cookie: {
        maxAge: 1000 * 600,
        secure: process.env.COOKIE_SECURE || false, //  true means only use over https //  true in production
        httpOnly: true, //JS code on the client cannot access the session cookie
    }, // 10 min in milliseconds
    resave: false,
    saveUninitialiezed: false, //  GDPR compliance
    store: new KnexSessionsStore({
        knex: dbConnection,
        sidfieldname: "sid",
        createtable: true,
        clearInterval: 30000, //  delete expired sessions - in milliseconds
    }),
};
//  make sure to use the sessionConfig
server.use(session(sessionConfig));
server.use(cors());
server.use(helmet());
server.use(morgan("combined"));
server.use(express.json());

//  Actual endpoints for the server
server.get("/", (req, res) => {
    res.status(200).json({
        Message: "Welcome to the home slash of the menu server.",
        menuItems,
    });
});
//  custom routes
server.use("/menu", menuItems);
server.use("/sotd", specialOfTheDay);

module.exports = server;
