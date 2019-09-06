const express = require("express");
const routes = express.Router();

routes.get("/login", (req, res) => {
  const { username, password } = req.query;
  res
    .json({
      userId: username + password
    })
    .send(200);
});

routes.post("/signup", (req, res) => {
  const { username, password } = req.body;

  res
    .json({
      userId: username + password
    })
    .send(201);
});

routes.put("/account", (req, res) => {
  const { username, oldPassword, newPassword } = req.body;

  res.send(204);
});

routes.delete("/delete", (req, res) => {
  const { username, password } = req.query;

  res.send(204);
});

module.exports = routes;
