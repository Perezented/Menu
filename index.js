require("dotenv").config();
const server = require("./server.js");

const port = process.env.PORT || 5001;

server.listen(port, () => {
    console.log(`\n* Server Running on http://localhost:${port} *\n`, {
        env: process.env.NODE_ENV,
        port: process.env.PORT,
    });
});
