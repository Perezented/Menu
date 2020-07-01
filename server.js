const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const server = express();

const menuItems = require("./menuItems");
const session = require("express-session");
const dbConnection = require("./data/connection");
const KnexSessionsStore = require("connect-session-knex")(session);

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

server.use(session(sessionConfig));

server.use(cors());

server.use(helmet());
server.use(morgan("combined"));
server.use(express.json());
server.use("/menu", menuItems);

server.get("/", (req, res) => {
    res.status(200).json({
        Message: "Welcome to the home slash of the menu server.",
        menuItems,
    });
});

module.exports = server;
