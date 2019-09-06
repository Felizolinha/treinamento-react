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

module.exports = routes;
