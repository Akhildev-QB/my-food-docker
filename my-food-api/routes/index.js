const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.json({ success: true, message: "Welcome to Food API Server" });
});

module.exports = router;
