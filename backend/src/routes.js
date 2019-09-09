const express = require("express");
const routes = express.Router();

const LoginController = require("./controllers/LoginController.js");

routes.post("/login", LoginController.login);

routes.post("/signup", LoginController.signup);

routes.put("/account", LoginController.updatePassword);

routes.delete("/account", LoginController.deleteUser);

module.exports = routes;
