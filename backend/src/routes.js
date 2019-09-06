const express = require("express");
const routes = express.Router();

routes.get("/login", (req, res) => {
  const { username, password } = req.query;
  res
    .json({
      userId: username + password
    })
    .sendStatus(200);
});

routes.post("/signup", (req, res) => {
  const { username, password } = req.body;

  res
    .json({
      userId: username + password
    })
    .sendStatus(201);
});

routes.put("/account", (req, res) => {
  const { username, oldPassword, newPassword } = req.body;

  res.sendStatus(204);
});

routes.delete("/account", (req, res) => {
  const { username, password } = req.query;

  res.sendStatus(204);
});

module.exports = routes;
