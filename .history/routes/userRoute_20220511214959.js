const express = require("express");
const userModel = require("../models/userModel");

const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const result = await userModel.findOne({
      username,
      password,
    });

    if (result) {
      res.send(result);
    } else {
      res.status(400).send("Login failed");
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;

    const result = await userModel.create({
      username,
      password,
    });

    if (result) {
      res.send("Registration successful");
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/update", async (req, res) => {
  try {
    const user = await userModel.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );

    res.send(user);
  } catch (error) {}
});

module.exports = router;