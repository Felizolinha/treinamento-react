const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");
const routes = require("./routes.js");

const config = require("../config");

const server = express();
mongoose.connect(config.mongodbServer, {
  useNewUrlParser: true
});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);
