const express = require("express");
const router = express.Router();

// authenticate user
// private
router.get("/", (req, res) => {
  res.send("Authentication");
});

// auth user and get token
// public
router.post("/", (req, res) => {
  res.send("get token to login user ");
});

module.exports = router;
