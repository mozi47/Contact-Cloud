const express = require("express");
const router = express.Router();

// get all contacts
// public
router.get("/", (req, res) => {
  res.send("get all the contacts");
});

// add contacts
// public
router.post("/", (req, res) => {
  res.send("add contacts");
});

// update specific contacts
// public
router.put("/:id", (req, res) => {
  res.send("update the contacts");
});

// delete specific contacts
// public
router.delete("/:id", (req, res) => {
  res.send("delete the contacts");
});

module.exports = router;
