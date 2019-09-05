const express = require("express");
const routes = requires("./routes.js");

const server = express();
server.use(routes);

server.listen(3333);
