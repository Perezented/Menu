require("dotenv").config();
//  Everything happens in the server.js file
const server = require("./server.js");
//  Setting up a port. The port is automatically set if there is no .env file
const port = process.env.PORT || 5001;
//  Console.log to let user know the server is up and working.
server.listen(port, () => {
    console.log(`\n* Server Running on http://localhost:${port} *\n`, {
        env: process.env.NODE_ENV,
        port: process.env.PORT,
    });
});
