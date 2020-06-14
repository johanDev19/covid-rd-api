const express = require("express");
// const axios = require("axios");
const router = express.Router();
const usersRepositories = require("./../repositories/users");

router.post("/login", async (req, res) => {
  res.json("Login");
});

router.post("/register", async (req, res) => {
  const { name, lastName, email, password } = req.body;

  usersRepositories({ name, lastName, email, password }).save((err, users) => {
    if (err) {
      return console.log("error", err);
    }
    console.log(users);
  });
  res.json("Register");
});

module.exports = router;
