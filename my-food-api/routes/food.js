const express = require("express");
const router = express.Router();
const foodController = require("../controllers/food");

router.get("/", foodController.listFood);
router.post("/", foodController.addFood);
router.delete("/:id", foodController.removeFood);

module.exports = router;
