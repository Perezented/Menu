const express = require("express");

var morgan = require("morgan");
const server = express();

// const seafoodRouter = require("./seafoodRouter/seafoodRouter");
// const steaksRouter = require("./steaksRouter/steaksRouter");
// const chickenRouter = require("./chickenRouter/chickenRouter");
// const soupsRouter = require("./soupsRouter/soupsRouter");
// const childsPlatesRouter = require("./childsPlatesRouter/childsPlatesRouter");

const allRouter = require("./menuItems");
server.use(morgan("combined"));
server.use(express.json());
server.get("/", (req, res) => {
    res.status(200).json({
        Message: "Welcome to the home slash of the menu server.",
        menuItems,
    });
});

var menuItems = require("./menuItems/menuItems");

server.use("/menu", allRouter);
// server.use("/api/seafood", seafoodRouter);
// server.use("/api/steaks", steaksRouter);
// server.use("/api/chicken", chickenRouter);
// server.use("/api/soups", soupsRouter);
// server.use("/api/childsPlates", childsPlatesRouter);

module.exports = server;
