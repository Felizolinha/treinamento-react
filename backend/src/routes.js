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

  console.log("Hello");

  res
    .json({
      userId: username + password
    })
    .send(201);
});

module.exports = routes;
