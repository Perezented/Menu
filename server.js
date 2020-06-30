const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const server = express();

const menuItems = require("./menuItems");

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
