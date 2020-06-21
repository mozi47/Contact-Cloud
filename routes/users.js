const express = require("express");
const router = express.Router();

// register the user
// public
router.post("/", (req, res) => {
  res.send("register the user");
});

module.exports = router;
