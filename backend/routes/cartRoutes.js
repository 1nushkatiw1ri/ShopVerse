const express = require("express");

const {
  addToCart,
  getCart,
  deleteCartItem,
} = require("../controllers/cartController");

const router = express.Router();

router.post("/", addToCart);

router.get("/:userId", getCart);

router.delete("/:id", deleteCartItem);

module.exports = router;